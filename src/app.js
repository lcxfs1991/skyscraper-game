
var StatusLayer = cc.Layer.extend({

    lifeNum: 3,
    levelNum: 0,
    winsize: null,
    gameScene: null,

    ctor: function(gameScene){

        this._super();

        this.gameScene = gameScene;

        this.winsize = cc.winSize;

        this.addLife();

        this.addLevel();
    },

    addLife: function(){

        this.life = cc.Sprite.create(res.Life_png);
        this.life.setPosition(cc.p(20, this.winsize.height - 20));
        this.addChild(this.life);

        this.labelLife = cc.LabelTTF.create(""+this.lifeNum, "Helvetica", 32);
        this.labelLife.setColor(cc.color(0,0,0));//black color
        this.labelLife.setPosition(cc.p(60, this.winsize.height - 20));
        this.addChild(this.labelLife);

    },

    changeLife: function(){
        this.lifeNum--;
        this.labelLife.setString(""+this.lifeNum);
    },

    addLevel: function(){

        this.labelLevel = cc.LabelTTF.create(this.levelNum+"层", "Helvetica", 32);
        this.labelLevel.setColor(cc.color(0,0,0));//black color
        this.labelLevel.setPosition(cc.p(340, this.winsize.height - 20));
        this.addChild(this.labelLevel);
    },

    changeLevel: function(){
        this.levelNum++;
        this.labelLevel.setString(this.levelNum+"层");
    }

});


var GameLayer = cc.Layer.extend({

    winsize: null,
    brickArray: [],
    pointer: -1,
    stickLayer: null,
    gameScene: null,

    ctor:function (gameScene) {
        this._super();

        this.gameScene = gameScene;

        this.winsize = cc.winSize;

        var bg = new BgSprite();
        bg.setPosition(cc.p(this.winsize.width/2, this.winsize.height/2));
        this.addChild(bg);

        this.stickLayer = new StickLayer();
        this.addChild(this.stickLayer);


        return true;
    },

    addBrick: function(){

        var brick = new BrickSprite();

        brick.setPosition(cc.p(this.stickLayer.getBrickPos().x + 40, this.stickLayer.getBrickPos().y));
        this.addChild(brick);
        this.brickArray.push(brick);
        this.pointer++;

    },

    removeBrick: function(){

        var brickPos = this.stickLayer.getBrickPos();

        this.addBrick();

        this.stickLayer.removeBrick();


    }
});


var StickLayer = cc.Layer.extend({

    stick: null,
    brick: null,
    winsize: null,
    speed: 0.5,

    ctor:function () {

        this._super();

        this.winsize = cc.winSize;

        this.stick = new StickSprite();
        this.stick.setPosition(cc.p(this.winsize.width/2, this.winsize.height - 30));
        this.addChild(this.stick);

        this.addBrick();

        this.moveStick();
    },

    moveStick: function(){

        var action1 = cc.moveTo(this.speed, cc.p(-160, 0));
        var action2 = cc.moveTo(this.speed, cc.p(160, 0));

        this.moveAction = cc.sequence(
            action1,
            action2
        );

        this.repeatAction = cc.repeatForever(this.moveAction);

        this.runAction(this.repeatAction);

    },

    addBrick: function(){

        if (this.brick == null){
            this.brick = new BrickSprite();

            this.brick.setPosition(cc.p(this.stick.getPosition().x, this.winsize.height - 100));
            this.addChild(this.brick);
        }
        else {
            this.brick.visible = true;
        }


    },

    removeBrick: function(){
        this.brick.visible = false;
    },

    getBrickPos: function(){

        var layerPos = this.getPosition();

        layerPos.x += 160;
        layerPos.y = this.winsize.height - 100;

        return layerPos;
    }

});


var StickSprite =cc.Sprite.extend({

    ctor:function () {

        this._super();

        var size = cc.winSize;

        //set sprite size
        this.width = 30;
        this.height = 60;

        var drawnode = cc.DrawNode.create();

        drawnode.drawRect(cc.p(0,0), cc.p(30,60), cc.color(231, 76, 60, 255));

        this.addChild(drawnode);

    }

})

var BrickSprite =cc.Sprite.extend({

    dropSpeed: 0.3,

    ctor:function () {

        this._super();

        var size = cc.winSize;

        //set sprite size
        this.width = 80;
        this.height = 100;

        var drawnode = cc.DrawNode.create();

        drawnode.drawRect(cc.p(0,0), cc.p(80,100), cc.color(0, 0, 0, 255));

        this.addChild(drawnode);

    },

    startDrop: function(checkCollision, brickSuccessArray, gameScene){

        var pos = this.getPos();

        var action = null;

        var len = (brickSuccessArray.length - 1) * 100;

        if (checkCollision == "fail"){
            action = cc.moveTo(this.dropSpeed, cc.p(pos.x, -60));
        }
        else {
            action = cc.moveTo(this.dropSpeed, cc.p(pos.x, 50 + len));
        }

        this.dropAction = cc.sequence(
            action,
            cc.CallFunc.create(function(){
                gameScene.layer.stickLayer.addBrick();
                cc.eventManager.addListener(gameScene.listener, gameScene);

                if (gameScene.brickSuccessArray.length >= 3){
                    gameScene.layer.removeChild(gameScene.brickSuccessArray[0]);
                    gameScene.layer.brickArray.shift();
                }

                gameScene.checkGameResult();

            })
        );

       this.runAction(this.dropAction);

    },

    getPos: function(){
        return this.getPosition();
    }

})

var BgSprite =cc.Sprite.extend({

    ctor:function () {

        this._super();

        var size = cc.winSize;

        //set sprite size
        this.width = 400;
        this.height = 600;

        var drawnode = cc.DrawNode.create();

        drawnode.drawRect(cc.p(0,0), cc.p(size.width,size.height), cc.color(255,255,255,255));

        this.addChild(drawnode);

    }

})

var GameScene = cc.Scene.extend({

    layer: null,
    currentPointer: null,
    brickSuccessArray: [],
    buildingHeight: 0,
    basePos: null,
    listener: null,

    onEnter:function () {

        this._super();

        this.brickSuccessArray = [];

        this.layer = new GameLayer(this);
        this.layer.brickArray = [];
        this.addChild(this.layer);

        this.statusLayer = new StatusLayer(this);
        this.addChild(this.statusLayer);

        this.control();
    },

    control: function(){

        var that = this;
        //Create a "one by one" touch event listener (processes one touch at a time)
        this.listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            // When "swallow touches" is true, then returning 'true' from the onTouchBegan method will "swallow" the touch event, preventing other listeners from using it.
            swallowTouches: true,
            //onTouchBegan event callback function
            onTouchBegan: function (touch, event) {
                // event.getCurrentTarget() returns the *listener's* sceneGraphPriority node.
                var target = event.getCurrentTarget();

                cc.eventManager.removeListener(target.listener);

                //Get the position of the current point relative to the button
                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);

                //Check the click area
                if (cc.rectContainsPoint(rect, locationInNode)) {
                    that.layer.removeBrick();

                    that.currentPointer = that.layer.pointer;

                    var result = that.checkCollision();

                    if (result == "normal"){
                        that.brickSuccessArray.push(that.layer.brickArray[that.layer.pointer]);
                        that.buildingHeight++;
                    }

                    that.layer.brickArray[that.currentPointer].startDrop(result, that.brickSuccessArray, that);

                    return true;
                }
                return false;
            },
            //Trigger when moving touch
            onTouchMoved: function (touch, event) {

            },
            //Process the touch end event
            onTouchEnded: function (touch, event) {
                var target = event.getCurrentTarget();

            }
        });

        cc.eventManager.addListener(this.listener, this);

    },

    checkCollision: function(){

       if (this.currentPointer == 0){
           this.basePos = this.layer.brickArray[this.currentPointer].getPos();

           this.statusLayer.changeLevel();

           return "normal";
       }
        else {

           var brickPos1 = this.brickSuccessArray[this.brickSuccessArray.length - 1].getPos();
           var brickPos2 = this.layer.brickArray[this.currentPointer].getPos();

//           cc.log(brickPos1);
//           cc.log(brickPos2);

           if (Math.abs(brickPos2.x - brickPos1.x) <= 55){

               if (this.brickSuccessArray.length >= 2){
                   this.moveBg();
               }

               this.statusLayer.changeLevel();

               return "normal";
           }
           else {
               this.statusLayer.changeLife();
               return "fail";
           }

       }

        return "normal";

    },

    moveBg: function(){

        for (var i = 0; i < this.brickSuccessArray.length; i++){

            var action = cc.moveTo(0.3, cc.p(this.brickSuccessArray[i].getPos().x, this.brickSuccessArray[i].getPos().y - 100));
            this.brickSuccessArray[i].runAction(action);

        }

        this.brickSuccessArray.shift();

    },

    checkGameResult: function(){

        if (this.buildingHeight == 30 || this.statusLayer.lifeNum == 0){
            cc.director.runScene(cc.TransitionFade.create(1.2, new GameResultScene(this.buildingHeight)));
        }

    }
});

