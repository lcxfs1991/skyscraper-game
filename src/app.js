
var GameLayer = cc.Layer.extend({

    brickArray: [],
    pointer: -1,
    stick: null,
    winsize: null,

    ctor:function () {
        this._super();

        this.winsize = cc.winSize;

        var bg = new BgSprite();
        bg.setPosition(cc.p(this.winsize.width/2, this.winsize.height/2));
        this.addChild(bg);

        this.stick = new StickSprite();
        this.stick.setPosition(cc.p(this.winsize.width/2, this.winsize.height - 30));
        this.addChild(this.stick);

        this.addBrick();


        return true;
    },

    addBrick: function(){

        this.stick.stopMove();
        var brick = new BrickSprite(this.stick.direction);

        brick.setPosition(cc.p(this.stick.getPosition().x, this.winsize.height - 100));
        this.addChild(brick);
        this.brickArray.push(brick);
        this.pointer++;
        this.stick.startMove();

    },

    dropBrick: function(){

    }
});


var StickSprite =cc.Sprite.extend({

    direction: "left",
    speed: 0.8,

    ctor:function () {

        this._super();

        var size = cc.winSize;

        //set sprite size
        this.width = 30;
        this.height = 60;

        var drawnode = cc.DrawNode.create();

        drawnode.drawRect(cc.p(0,0), cc.p(30,60), cc.color(231, 76, 60, 255));

        this.addChild(drawnode);

        this.startMove();

    },

    startMove: function(){

        var that = this;

        var action1 = null;
        var action2 = null;

        if (this.direction == "left"){
            action1 = cc.moveTo(this.speed, cc.p(40, 570));
            action2 = cc.moveTo(this.speed, cc.p(360, 570));
        }
        else {
            action1 = cc.moveTo(this.speed, cc.p(360, 570));
            action2 = cc.moveTo(this.speed, cc.p(40, 570));
        }

        var changeDirection1 = null;
        var changeDirection2 = null;

        if (this.direction == "left"){
            changeDirection1 = "left";
            changeDirection2 = "right";
        }
        else {
            changeDirection1 = "right";
            changeDirection2 = "left";
        }

        this.moveAction = cc.sequence(
            cc.CallFunc.create(function(){
                that.direction = changeDirection1;
            }),
            action1,
            cc.CallFunc.create(function(){
                that.direction = changeDirection2;
            }),
            action2
        );

        this.repeatAction = cc.repeatForever(this.moveAction);

        this.runAction(this.repeatAction);



    },

    stopMove: function(){


        this.stopAction(this.repeatAction);


    }

})

var BrickSprite =cc.Sprite.extend({

    direction: "left",
    speed: 0.8,

    ctor:function (direction) {

        this._super();

        this.direction = direction;

        var size = cc.winSize;

        //set sprite size
        this.width = 80;
        this.height = 100;

        var drawnode = cc.DrawNode.create();

        drawnode.drawRect(cc.p(0,0), cc.p(80,100), cc.color(0, 0, 0, 255));

        this.addChild(drawnode);

        this.startMove();

    },

    startMove: function(){

        var action1 = null;
        var action2 = null;

        if (this.direction == "left"){
            action1 = cc.moveTo(this.speed, cc.p(40, 500));
            action2 = cc.moveTo(this.speed, cc.p(360, 500));
        }
        else {
            action1 = cc.moveTo(this.speed, cc.p(360, 500));
            action2 = cc.moveTo(this.speed, cc.p(40, 500));
        }

        var that = this;
        this.moveAction = cc.sequence(
            action1,
            action2
        );

        this.repeatAction = cc.repeatForever(this.moveAction);

        this.runAction(this.repeatAction);
    },

    stopMove: function(checkCollision, brickSuccessArray, parentN){

        this.stopAction(this.repeatAction);

        this.startDrop(checkCollision, brickSuccessArray, parentN);

    },

    startDrop: function(checkCollision, brickSuccessArray, gameScene){

        var pos = this.getPos();

        var action = null;

        var len = (brickSuccessArray.length - 1) * 100;

        if (checkCollision == "fail"){
            action = cc.moveTo(0.5, cc.p(pos.x, -60));
        }
        else {
            action = cc.moveTo(0.5, cc.p(pos.x, 50 + len));
        }



        this.dropAction = cc.sequence(
            action
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
        this.layer = new GameLayer();
        this.addChild(this.layer);

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
                cc.log("touch begin");
                //Get the position of the current point relative to the button
                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);

                //Check the click area
                if (cc.rectContainsPoint(rect, locationInNode)) {

                    that.currentPointer = that.layer.pointer;

                    var result = that.checkCollision();

                    if (result == "normal"){
                        that.brickSuccessArray.push(that.layer.brickArray[that.layer.pointer]);
                        that.buildingHeight++;
                        cc.log("height level:"+that.buildingHeight);
                    }

                    that.layer.brickArray[that.layer.pointer].stopMove(result, that.brickSuccessArray, that);

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
           return "normal";
       }
        else {

           var brickPos1 = this.layer.brickArray[this.currentPointer - 1].getPos();
           var brickPos2 = this.layer.brickArray[this.currentPointer].getPos();

           if (Math.abs(brickPos2.x - brickPos1.x) <= 30 || Math.abs(brickPos2.x - this.basePos.x) <= 50 ){

               if (this.brickSuccessArray.length >= 2){
                   this.moveBg();
               }

               return "normal";
           }
           else {
               return "fail";
           }

       }

    },

    moveBg: function(){

        for (var i = 0; i < this.brickSuccessArray.length; i++){

            var action = cc.moveTo(0.5, cc.p(this.brickSuccessArray[i].getPos().x, this.brickSuccessArray[i].getPos().y - 100));
            this.brickSuccessArray[i].runAction(action);

        }

        this.brickSuccessArray.shift();

    }
});

