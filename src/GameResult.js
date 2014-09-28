/**
 * Created by lcxfs1991 on 9/22/14.
 */
/**
 * Created by lcxfs1991 on 8/10/14.
 */

var GameResultLayer = cc.Layer.extend({

    winsize:null,
    centerPos:null,
    Msg: '想成为高富帅白富美就快来玩!',
    buildingHeight: null,

    ctor:function (buildingHeight) {

        this._super();

        this.buildingHeight = buildingHeight;

        this.init();
    },
    init:function () {
        this._super();
        this.winsize = cc.director.getWinSize();

        this.centerPos = cc.p(this.winsize.width / 2, this.winsize.height / 2);

        var floor = this.buildingHeight * 10;

        if (this.buildingHeight <= 5){
            this.Msg = "你砌了一幢"+floor+"层的公寓，\n获得农民搬砖工称号。";
        }
        else if (this.buildingHeight > 5 && this.buildingHeight <= 15){
            this.Msg = "你砌了一幢"+floor+"层的东方明珠电视塔，\n获得程序猿搬砖称号。";
        }
        else if (this.buildingHeight > 15 && this.buildingHeight <= 25){
            this.Msg = "你砌了一幢"+floor+"层的小蛮腰塔，\n获得金融搬砖工称号。";
        }
        else if (this.buildingHeight > 25){
            this.Msg = "你砌了一幢"+floor+"层的帝国大厦，\n获得宝洁高富帅白富美称号。";
        }

        this.onSuccess();

        Wechat.imgUrl = 'http://leehey.org/publish/res/logo.png';
        Wechat.lineLink = 'http://leehey.org/skyscraper/';
        Wechat.descContent = this.Msg;
        Wechat.shareTitle = Wechat.descContent;
        document.title = Wechat.descContent;

        shareTimeline(Wechat.imgUrl, Wechat.lineLink, Wechat.descContent, Wechat.shareTitle);

    },

    onSuccess:function(){

        var bg = new ResultBgSprite();
        bg.setPosition(cc.p(this.winsize.width/2, this.winsize.height/2));
        this.addChild(bg);

        this.creatBtn();
    },

    creatBtn:function(){

        //restart button
        this.RestartBtn = cc.MenuItemSprite.create(
            cc.Sprite.create(res.RESTART_png), // normal state image
            cc.Sprite.create(res.RESTART_png), //select state image
            this.onRestart, this);

        var menu = cc.Menu.create(this.RestartBtn);
        menu.setPosition(this.winsize.width / 2, this.winsize.height / 2 - 40);
        this.addChild(menu);

        //share button
        this.ShareBtn = cc.MenuItemSprite.create(
            cc.Sprite.create(res.SHARE_png),
            cc.Sprite.create(res.SHARE_png),
            this.onShare, this);

        var share = cc.Menu.create(this.ShareBtn);
        share.setPosition(cc.p(this.winsize.width / 2, this.winsize.height / 2 - 100));
        this.addChild(share);

        //follow button
        this.FollowBtn = cc.MenuItemSprite.create(
            cc.Sprite.create(res.FOLLOW_png),
            cc.Sprite.create(res.FOLLOW_png),
            this.onFollow, this);

        var follow = cc.Menu.create(this.FollowBtn);
        follow.setPosition(cc.p(this.winsize.width / 2, this.winsize.height / 2 - 160));
        this.addChild(follow);


        var MsgLabel = cc.LabelTTF.create(this.Msg, "STHeiti Droidsansfallback Dengxian Microsoft JhengHei STHeiti", 24);
        MsgLabel.setColor(cc.color(255, 255, 255));
        MsgLabel.setPosition(cc.p(this.winsize.width / 2, this.winsize.height / 2 + 140));
        this.addChild(MsgLabel);

        var a = new Date(); // Now
        var b = new Date(2014, 9, 10, 0, 0, 0, 0); // 2010
        var day = Math.round((b-a)/1000/3600/24);

        var DeadlineMsg = "离宝洁申请结束时间还有"+day+"天!\n";
        DeadlineMsg += "10月10日就截止啦!抓紧时间!"

        var DeadlineLabel = cc.LabelTTF.create(DeadlineMsg, "STHeiti Droidsansfallback Dengxian Microsoft JhengHei STHeiti", 24);
        DeadlineLabel.setColor(cc.color(255, 255, 255));
        DeadlineLabel.setPosition(cc.p(this.winsize.width / 2, this.winsize.height / 2 + 60));
        this.addChild(DeadlineLabel);


    },

    onRestart:function(){

        document.title = "大家来搬砖";
        var scene = new GameScene();
        cc.director.runScene(scene);
    },

    onShare:function(){

        var winsize = cc.director.getWinSize();

        var shareBG = cc.LayerColor.create(cc.color(0,0,0), 400, 600);
        shareBG.setOpacity(200);
        this.addChild(shareBG);

        var shareMethod1 = cc.LabelTTF.create("点击右上角菜单", "STHeiti Droidsansfallback Dengxian Microsoft JhengHei STHeiti", 32);
        shareMethod1.setColor(cc.color(255, 255, 255));
        shareMethod1.setPosition(cc.p(winsize.width / 2, winsize.height / 2 + 40));
        shareBG.addChild(shareMethod1);

        var shareMethod1 = cc.LabelTTF.create("分享到朋友圈!", "STHeiti Droidsansfallback Dengxian Microsoft JhengHei STHeiti", 32);
        shareMethod1.setColor(cc.color(255, 255, 255));
        shareMethod1.setPosition(cc.p(winsize.width / 2, winsize.height / 2));
        shareBG.addChild(shareMethod1);

        var listener1 = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            //onTouchBegan event callback function
            onTouchBegan: function (touch, event) {
                // event.getCurrentTarget() returns the *listener's* sceneGraphPriority node.
                var target = event.getCurrentTarget();
                target.parent.removeChild(target);


            },
            //Process the touch end event
            onTouchEnded: function (touch, event) {
                var target = event.getCurrentTarget();
            }
        });

        cc.eventManager.addListener(listener1, shareBG);

    },

    onFollow: function(){
        window.location = "http://mp.weixin.qq.com/s?__biz=MjM5MTA0NzU1NQ==&mid=200749859&idx=1&sn=41893ee9ad1221ec9a79d7a9c3e49f2a&scene=1#rd";
    }
});

var ResultBgSprite =cc.Sprite.extend({

    ctor:function () {

        this._super();

//        var size = cc.winSize;
//
//        //set sprite size
//        this.width = 400;
//        this.height = 600;
//
//        var drawnode = cc.DrawNode.create();
//
//        drawnode.drawRect(cc.p(0,0), cc.p(size.width,size.height), cc.color(255,255,255,255));
//
//        this.addChild(drawnode);

        this.initWithFile(res.BlueBG_png);

    }

})

var GameResultScene = cc.Scene.extend({

    layer: null,
    buildingHeight: null,

    ctor: function(buildingHeight){

        this._super();

        this.buildingHeight = buildingHeight;

    },

    onEnter:function () {

        this._super();
        this.layer = new GameResultLayer(this.buildingHeight);
        this.addChild(this.layer);
    }

});