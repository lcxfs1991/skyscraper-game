/**
 * Created by lcxfs1991 on 9/22/14.
 */

var MenuLayer = cc.Layer.extend({

    ctor:function () {

        this._super();

        var size = cc.winSize;

        this.startBtn = new cc.MenuItemSprite(
            new menuSprite(),
            new menuSprite(),
            this.onPlay, this);

        var bg = new IntroBgSprite();
        bg.setPosition(cc.p(size.width/2, size.height/2));
        this.addChild(bg);

        var menu = cc.Menu.create(this.startBtn);
        menu.setPosition(cc.p(size.width/2, size.height/2 - 100));
        this.addChild(menu);

        var Rule = new cc.LabelTTF("游戏方法: \n点击屏幕, 砖头下坠,\n在60秒内砌最多砖块。", "STHeiti Droidsansfallback Dengxian Microsoft JhengHei STHeiti", 25);
        Rule.setColor(cc.color(255, 255, 255));
        Rule.setPosition(cc.p(size.width / 2, size.height/2));
        this.addChild(Rule);

        //create the PG logo
        var pgLogo = cc.Sprite.create(res.PG_png);

        pgLogo.setPosition(cc.p(size.width - 40, size.height - 40));

        this.addChild(pgLogo);

        return true;
    },

    onPlay: function(){
        cc.director.runScene(new GameScene());
    }

});


var IntroBgSprite =cc.Sprite.extend({

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

        this.initWithFile(res.IntroBG_png);

    }

})


var menuSprite =cc.Sprite.extend({

    ctor:function () {

        this._super();

        var size = cc.winSize;

        //set sprite size
//        this.width = 200;
//        this.height = 50;
//
//        var drawnode = cc.DrawNode.create();
//
//        drawnode.drawRect(cc.p(0,0), cc.p(200,50), cc.color(231, 76, 60, 255));
//
//        this.addChild(drawnode);
//
//
//        var MsgLabel = new cc.LabelTTF("游戏开始", "STHeiti Droidsansfallback Dengxian Microsoft JhengHei STHeiti", 20);
//        MsgLabel.setColor(cc.color(255, 255, 255));
//        MsgLabel.setPosition(cc.p(100, 25));
//        this.addChild(MsgLabel);

        this.initWithFile(res.Start_png);

    }

})




var MenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MenuLayer();
        this.addChild(layer);
    }
});