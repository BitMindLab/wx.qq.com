! function() {
    function t(t, n) {
        for (var e = new Array, o = 0; o < t.length; o++)
            if ("&" == t.charAt(o)) {
                var r = [3, 4, 5, 9],
                    a = 0;
                for (var c in r) {
                    var i = r[c];
                    if (o + i <= t.length) {
                        var m = t.substr(o, i).toLowerCase();
                        if (n[m]) {
                            e.push(n[m]), o = o + i - 1, a = 1;
                            break
                        }
                    }
                }
                0 == a && e.push(t.charAt(o))
            } else e.push(t.charAt(o));
        return e.join("")
    }

    function n(t) {
        return document.createElement(t)
    }

    function e(t, e) {
        var o = n("input");
        return o.name = t, o.value = e, o
    }

    function o(t) {
        t && t.parentNode && t.parentNode.removeChild(t)
    }

    function r(t) {
        var r = t.url,
            a = t.data,
            c = "aq_form" + 1e17 * Math.random(),
            i = function(t, e, o) {
                var r = n("form");
                return r.action = t, r.method = o, r.target = e, r.style.display = "none", r
            }(r, c, "post"),
            m = function(t) {
                var e = n("iframe");
                return e.name = t, e.src = "javascript:void(0);", e.style.display = "none", e
            }(c);
        document.body.appendChild(m), m.contentWindow.name = c;
        for (var u in a) i.appendChild(e(u, a[u]));
        document.body.appendChild(i), i && i.submit(), setTimeout(function() {
            o(i), o(m)
        }, 2e3)
    }

    function a(t) {
        (new Image).src = t
    }
    var c = ["https://aq.qq.com/cn2/manage/mbtoken/hijack_sec_js_report", "https://zyjc.sec.qq.com/dom", "https://aq.qq.com/cn2/manage/mbtoken/hijack_pv_report", "https://aq.qq.com/cn2/manage/mbtoken/hijack_xss_report", "https://aq.qq.com/cn2/manage/mbtoken/hijack_mv_js_report"],
        i = Math.random(),
        m = .01,
        u = !1;
    ! function() {
        for (var n = new Object, e = "'\"<>`script:daex/hml;bs64,", o = 0; o < e.length; o++) {
            for (var r = e.charAt(o), i = r.charCodeAt(), m = i, u = i.toString(16), p = 0; p < 7 - i.toString().length; p++) m = "0" + m;
            n["&#" + i + ";"] = r, n["&#" + m] = r, n["&#x" + u] = r
        }
        n["&lt"] = "<", n["&gt"] = ">", n["&quot"] = '"';
        var d = location.href,
            s = document.referrer;
        d = decodeURIComponent(t(d, n)), s = decodeURIComponent(t(s, n));
        var h = new RegExp("['\"<>`]|script:|data:text/html;base64,");
        if (h.test(d) || h.test(s)) {
            var l = c[1],
                f = new Image;
            Math.random() < .1 && a(c[3] + "?v=2&u=" + encodeURIComponent(d) + "&r=" + encodeURIComponent(s)), f.src = l + "?v=2&u=" + encodeURIComponent(d) + "&r=" + encodeURIComponent(s),
                function(t) {
                    return !(!/(\.|^)(wegame|tgp\.qq)\.com$/i.test(t) && !/(\.|^)we\.game$/i.test(t) || /(\.|^)developer\.wegame\.com$/i.test(t))
                }(location.host) || (d = (d = d.replace(/['\"<>`]|script:/gi, "M")).replace(/data:text\/html;base64,/gi, "data:text/plain;base64,"), location.href = encodeURI(d))
        }
    }(),
    function(t, n, e) {
        function o(o, r, a) {
            var c = {
                bid: r,
                childUrl: "",
                parentUrl: ""
            };
            try {
                c.childUrl = e.href
            } catch (t) {}
            try {
                c.parentUrl = parent.location.href
            } catch (t) {}
            if (1 == a) try {
                parent != t && s(parent.document, "datapp", c)
            } catch (t) {} else {
                try {
                    s(n, "datapt", c), parent != t && function(t, n, e) {
                        l(e.parentUrl) && s(t, n, e)
                    }(parent.document, "datapp", c)
                } catch (t) {}
                try {
                    parent != t && function(t) {
                        if (l(t.parentUrl)) {
                            var n = [];
                            n.push("beframed::url"), p(n, "beframed", t)
                        }
                    }(c)
                } catch (t) {}
            }
        }

        function p(t, n, e) {
            c[0], new Image;
            if (t.push("childUrl::" + encodeURIComponent(e.childUrl)), t.push("parentUrl::" + encodeURIComponent(e.parentUrl)), !u && i < m && (u = function(t) {
                    return a(c[2] + "?host=" + encodeURIComponent(location.host) + "&data=" + t + "&hp=1&tk=" + +new Date), !0
                }(t.join("|"))), Math.random() < .9) return !1;
            var o = {
                id: e.bid,
                imark: n,
                data: t.join("|")
            };
            return Math.random() < 1 && (o.dom = encodeURIComponent(document.documentElement.outerHTML), o.plgs = encodeURIComponent(function() {
                var t = navigator.plugins,
                    n = "";
                if (t && t.length) {
                    n = [];
                    for (var e = 0; e < t.length; e++) {
                        var o = t[e].name,
                            r = t[e].description;
                        n.push(o + "::" + r)
                    }
                    n = n.join(";")
                }
                return n
            }())), r({
                data: o,
                url: c[0]
            }), !0
        }

        function d(t, n, e) {
            try {
                var o = location.host;
                if ("m.v.qq.com" != o && "v.qq.com" != o && retrun, Math.random() > .1) return !1;
                ! function(t, n, e) {
                    try {
                        var o = c[4],
                            r = new Image;
                        t.push("childUrl::" + encodeURIComponent(e.childUrl)), t.push("parentUrl::" + encodeURIComponent(e.parentUrl)), r.src = o + "?id=" + e.bid + "&imark=" + n + "&data=" + t.join("|") + "&random=" + Math.random()
                    } catch (t) {}
                }([], n, e)
            } catch (t) {}
        }

        function s(t, n, e) {
            d(0, n, e);
            var o = function(t) {
                    for (var n, e, o, r, a = t.getElementsByTagName("script"), c = [], i = 0; i < a.length; i++) n = a[i], (e = n.src) && c.push(e);
                    return o = h(c, l), r = f("script"), g(o, r)
                }(t),
                r = function(t) {
                    var n = f("iframe");
                    return q(t, "IFRAME", function(t) {
                        return t.src
                    }, l, n)
                }(t),
                a = function(t) {
                    var n = f("frame");
                    return q(t, "FRAME", function(t) {
                        return t.src
                    }, l, n)
                }(t),
                c = function(t) {
                    var n = f("embed");
                    return q(t, "EMBED", function(t) {
                        return t.src
                    }, l, n)
                }(t),
                i = function(t) {
                    var n = f("img");
                    return q(t, "IMG", function(t) {
                        return t.src
                    }, l, n)
                }(t),
                m = function(t) {
                    for (var n, e, o, r, a = t.getElementsByTagName("source"), c = [], i = 0; i < a.length; i++) n = a[i], (e = n.src) && c.push(e);
                    return o = h(c, l), r = f("source"), g(o, r)
                }(t),
                u = function(t) {
                    for (var n, e, o, r, a = t.getElementsByTagName("video"), c = [], i = 0; i < a.length; i++) n = a[i], (e = n.src) && c.push(e);
                    return o = h(c, l), r = f("video"), g(o, r)
                }(t),
                s = function(t) {
                    for (var n, e, o, r, a = t.getElementsByTagName("object"), c = [], i = 0; i < a.length; i++) n = a[i], (e = n.data) && c.push(e);
                    return o = h(c, l), r = f("object"), g(o, r)
                }(t),
                v = o.concat(r, a, i, c, m, u, s);
            if (v.length <= 0) return !1;
            p(v = function(t) {
                var n = t.slice(0),
                    e = [];
                n.sort(), e.push(n[0]);
                for (var o = 1; o < n.length; o += 1) n[o] != n[o - 1] && e.push(n[o]);
                return e
            }(v), n, e)
        }

        function h(t, n) {
            for (var e = [], o = 0; o < t.length; ++o) {
                var r = t[o];
                n(r) && e.push(r)
            }
            return e
        }

        function l(t) {
            var n, e, o, r, a, c = function(t) {
                var n = /^https?:\/\/([\w\-]+\.[\w\-.]+)/i.exec(t);
                if (!n) return;
                return n[1]
            }(t);
            return !!c && (n = /^xui.ptlogin2?\.?$/i, e = /(\.|^)(qq|paipai|soso|wenwen|tenpay|macromedia|gtimg|qstatic|qqmail|paipaiimg|qqgames|pengyou|foxmail|qzoneapp|qzone|qplus|imqq|tqapp|tencent|3366|21mmo|taotao|imrworldwide|idqqimg|17roco|expo2010china|fangqq|tencentmind|tencity|yingkebicheng|zhangzhongxing|expovol|otaworld|gzyunxun|heyyo|himoral|himorale|myrtx|qqwinner|redian|sjkx|rtxonline|nbaso|paipai\.500wan|qqjapan|qq\.salewell|sogou|weiyun|flzhan|wechat|webplat\.ied|qcloud)\.com$/i, o = /(\.|^)(qq\.com|gtimg|gtimg\.com|qlogo|foxmail\.com|gtimg\.com|url|qpic|tencent\.com|expo2010|expo|himorale\.com|nbaso\.com|qqtest\.com|qq\.ucar|rtx\.com|soso\.com|tcimage|taoche)\.cn$/i, r = /(\.|^)(5999|gongyi)\.net$/i, a = /(\.|^)(himorale\.com\.hk|tencent\.com\.hk|qq\.chinacache\.net|qq\.com\.fastcdn\.com|qq\.com\.lxdns\.com|qq\.fastcdn\.com|soso\.com\.lxdns\.com|motu\.pagechoice\.net|ope\.tanx\.com|dap\.gentags\.net|widget\.weibo\.com)$/i, !(n.test(c) || e.test(c) || o.test(c) || r.test(c) || a.test(c)))
        }

        function f(t) {
            return function(n) {
                return t + "::" + encodeURIComponent(n)
            }
        }

        function g(t, n) {
            for (var e, o = [], r = 0; r < t.length; ++r) e = n(t[r]), o.push(e);
            return o
        }

        function q(t, n, e, o, r) {
            return g(h(g(t.getElementsByTagName(n), e), o), r)
        }
        try {
            setTimeout(function() {
                o(0, 100, 0),
                    function(t) {
                        function n(t) {
                            var n = document.createElement("script");
                            n.src = "https://captcha.gtimg.com/public/2/web-token.0.0.1.js", n.defer = !0, n.onerror = t || function() {}, document.body ? document.body.appendChild(n) : document.head.appendChild(n)
                        }
                        try {
                            if ("zj.qq.com" != location.host && retrun, Math.random() > t) return;
                            n(function() {
                                n()
                            })
                        } catch (t) {}
                    }(1)
            }, 5e3)
        } catch (t) {}
    }(window, document, location), i < m && function() {
        var t = location.protocol,
            n = "";
        n = t.indexOf("https") >= 0 || t.indexOf("HTTPS") >= 0 ? "https" : t.indexOf("http") >= 0 || t.indexOf("HTTP") >= 0 ? "http" : t, a(c[2] + "?host=" + encodeURIComponent(location.host) + "&p=" + encodeURIComponent(n) + "&hp=0&tk=" + +new Date)
    }()
}();