webpackJsonp([4], {
    340: function(e, exports, t) {
        var n;
        /*!
         * ZeroClipboard
         * The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
         * Copyright (c) 2014 Jon Rohan, James M. Greene
         * Licensed MIT
         * http://zeroclipboard.org/
         * v2.0.2
         */
        ! function(r, a) {
            "use strict";
            var i, o = r,
                l = o.document,
                s = o.navigator,
                c = o.setTimeout,
                f = o.Number.parseInt || o.parseInt,
                u = o.Number.parseFloat || o.parseFloat,
                p = o.Number.isNaN || o.isNaN,
                d = o.encodeURIComponent,
                h = o.Math,
                y = o.Date,
                v = o.ActiveXObject,
                g = o.Array.prototype.slice,
                b = o.Object.keys,
                m = o.Object.prototype.hasOwnProperty,
                w = function() {
                    if ("function" == typeof o.Object.defineProperty && function() {
                            try {
                                var e = {};
                                return o.Object.defineProperty(e, "y", {
                                    value: "z"
                                }), "z" === e.y
                            } catch (e) {
                                return !1
                            }
                        }()) return o.Object.defineProperty
                }(),
                C = function(e) {
                    return g.call(e, 0)
                },
                T = function(e, t, n) {
                    if ("function" == typeof t.indexOf) return t.indexOf(e, n);
                    var r, a = t.length;
                    for ("undefined" == typeof n ? n = 0 : n < 0 && (n = a + n), r = n; r < a; r++)
                        if (m.call(t, r) && t[r] === e) return r;
                    return -1
                },
                x = function() {
                    var e, t, n, r, i, o, l = C(arguments),
                        s = l[0] || {};
                    for (e = 1, t = l.length; e < t; e++)
                        if (null != (n = l[e]))
                            for (r in n)
                                if (m.call(n, r)) {
                                    if (i = s[r], o = n[r], s === o) continue;
                                    o !== a && (s[r] = o)
                                }
                    return s
                },
                E = function(e) {
                    var t, n, r, a;
                    if ("object" != typeof e || null == e) t = e;
                    else if ("number" == typeof e.length)
                        for (t = [], n = 0, r = e.length; n < r; n++) m.call(e, n) && (t[n] = E(e[n]));
                    else {
                        t = {};
                        for (a in e) m.call(e, a) && (t[a] = E(e[a]))
                    }
                    return t
                },
                j = function(e, t) {
                    for (var n = {}, r = 0, a = t.length; r < a; r++) t[r] in e && (n[t[r]] = e[t[r]]);
                    return n
                },
                D = function(e, t) {
                    var n = {};
                    for (var r in e) T(r, t) === -1 && (n[r] = e[r]);
                    return n
                },
                k = function(e) {
                    if (null == e) return [];
                    if (b) return b(e);
                    var t = [];
                    for (var n in e) m.call(e, n) && t.push(n);
                    return t
                },
                I = function(e) {
                    if (e)
                        for (var t in e) m.call(e, t) && delete e[t];
                    return e
                },
                N = function(e, t) {
                    t in e && "function" == typeof w && w(e, t, {
                        value: e[t],
                        writable: !1,
                        configurable: !0,
                        enumerable: !0
                    })
                },
                O = function(e) {
                    return function() {
                        var t;
                        return t = e.now ? e.now() : (new e).getTime()
                    }
                }(y),
                L = function(e, t) {
                    if (e && 1 === e.nodeType && t && (1 === t.nodeType || 9 === t.nodeType))
                        do {
                            if (e === t) return !0;
                            e = e.parentNode
                        } while (e);
                    return !1
                },
                z = {
                    bridge: null,
                    version: "0.0.0",
                    pluginType: "unknown",
                    disabled: null,
                    outdated: null,
                    unavailable: null,
                    deactivated: null,
                    overdue: null,
                    ready: null
                },
                S = "11.0.0",
                F = {},
                X = {},
                A = null,
                Y = {
                    ready: "Flash communication is established",
                    error: {
                        "flash-disabled": "Flash is disabled or not installed",
                        "flash-outdated": "Flash is too outdated to support ZeroClipboard",
                        "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
                        "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate",
                        "flash-overdue": "Flash communication was established but NOT within the acceptable time limit"
                    }
                },
                B = function() {
                    var e, t, n, r, a = "ZeroClipboard.swf";
                    if (!l.currentScript || !(r = l.currentScript.src)) {
                        var i = l.getElementsByTagName("script");
                        if ("readyState" in i[0])
                            for (e = i.length; e-- && ("interactive" !== i[e].readyState || !(r = i[e].src)););
                        else if ("loading" === l.readyState) r = i[i.length - 1].src;
                        else {
                            for (e = i.length; e--;) {
                                if (n = i[e].src, !n) {
                                    t = null;
                                    break
                                }
                                if (n = n.split("#")[0].split("?")[0], n = n.slice(0, n.lastIndexOf("/") + 1), null == t) t = n;
                                else if (t !== n) {
                                    t = null;
                                    break
                                }
                            }
                            null !== t && (r = t)
                        }
                    }
                    return r && (r = r.split("#")[0].split("?")[0], a = r.slice(0, r.lastIndexOf("/") + 1) + a), a
                }(),
                H = {
                    swfPath: B,
                    trustedDomains: r.location.host ? [r.location.host] : [],
                    cacheBust: !0,
                    forceEnhancedClipboard: !1,
                    flashLoadTimeout: 3e4,
                    autoActivate: !0,
                    bubbleEvents: !0,
                    containerId: "global-zeroclipboard-html-bridge",
                    containerClass: "global-zeroclipboard-container",
                    swfObjectId: "global-zeroclipboard-flash-bridge",
                    hoverClass: "zeroclipboard-is-hover",
                    activeClass: "zeroclipboard-is-active",
                    forceHandCursor: !1,
                    title: null,
                    zIndex: 999999999
                },
                M = function(e) {
                    if ("object" == typeof e && null !== e)
                        for (var t in e)
                            if (m.call(e, t))
                                if (/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(t)) H[t] = e[t];
                                else if (null == z.bridge)
                        if ("containerId" === t || "swfObjectId" === t) {
                            if (!te(e[t])) throw new Error("The specified `" + t + "` value is not valid as an HTML4 Element ID");
                            H[t] = e[t]
                        } else H[t] = e[t]; {
                        if ("string" != typeof e || !e) return E(H);
                        if (m.call(H, e)) return H[e]
                    }
                },
                P = function() {
                    return {
                        browser: j(s, ["userAgent", "platform", "appName"]),
                        flash: D(z, ["bridge"]),
                        zeroclipboard: {
                            version: Le.version,
                            config: Le.config()
                        }
                    }
                },
                R = function() {
                    return !!(z.disabled || z.outdated || z.unavailable || z.deactivated)
                },
                V = function(e, t) {
                    var n, r, a, i = {};
                    if ("string" == typeof e && e) a = e.toLowerCase().split(/\s+/);
                    else if ("object" == typeof e && e && "undefined" == typeof t)
                        for (n in e) m.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && Le.on(n, e[n]);
                    if (a && a.length) {
                        for (n = 0, r = a.length; n < r; n++) e = a[n].replace(/^on/, ""), i[e] = !0, F[e] || (F[e] = []), F[e].push(t);
                        if (i.ready && z.ready && Le.emit({
                                type: "ready"
                            }), i.error) {
                            var o = ["disabled", "outdated", "unavailable", "deactivated", "overdue"];
                            for (n = 0, r = o.length; n < r; n++)
                                if (z[o[n]] === !0) {
                                    Le.emit({
                                        type: "error",
                                        name: "flash-" + o[n]
                                    });
                                    break
                                }
                        }
                    }
                    return Le
                },
                Z = function(e, t) {
                    var n, r, a, i, o;
                    if (0 === arguments.length) i = k(F);
                    else if ("string" == typeof e && e) i = e.split(/\s+/);
                    else if ("object" == typeof e && e && "undefined" == typeof t)
                        for (n in e) m.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && Le.off(n, e[n]);
                    if (i && i.length)
                        for (n = 0, r = i.length; n < r; n++)
                            if (e = i[n].toLowerCase().replace(/^on/, ""), o = F[e], o && o.length)
                                if (t)
                                    for (a = T(t, o); a !== -1;) o.splice(a, 1), a = T(t, o, a);
                                else o.length = 0;
                    return Le
                },
                K = function(e) {
                    var t;
                    return t = "string" == typeof e && e ? E(F[e]) || null : E(F)
                },
                U = function(e) {
                    var t, n, r;
                    if (e = ne(e), e && !se(e)) return "ready" === e.type && z.overdue === !0 ? Le.emit({
                        type: "error",
                        name: "flash-overdue"
                    }) : (t = x({}, e), le.call(this, t), "copy" === e.type && (r = he(X), n = r.data, A = r.formatMap), n)
                },
                J = function() {
                    if ("boolean" != typeof z.ready && (z.ready = !1), !Le.isFlashUnusable() && null === z.bridge) {
                        var e = H.flashLoadTimeout;
                        "number" == typeof e && e >= 0 && c(function() {
                            "boolean" != typeof z.deactivated && (z.deactivated = !0), z.deactivated === !0 && Le.emit({
                                type: "error",
                                name: "flash-deactivated"
                            })
                        }, e), z.overdue = !1, pe()
                    }
                },
                G = function() {
                    Le.clearData(), Le.deactivate(), Le.emit("destroy"), de(), Le.off()
                },
                W = function(e, t) {
                    var n;
                    if ("object" == typeof e && e && "undefined" == typeof t) n = e, Le.clearData();
                    else {
                        if ("string" != typeof e || !e) return;
                        n = {}, n[e] = t
                    }
                    for (var r in n) "string" == typeof r && r && m.call(n, r) && "string" == typeof n[r] && n[r] && (X[r] = n[r])
                },
                q = function(e) {
                    "undefined" == typeof e ? (I(X), A = null) : "string" == typeof e && m.call(X, e) && delete X[e]
                },
                Q = function(e) {
                    if (e && 1 === e.nodeType) {
                        i && (Te(i, H.activeClass), i !== e && Te(i, H.hoverClass)), i = e, Ce(e, H.hoverClass);
                        var t = e.getAttribute("title") || H.title;
                        if ("string" == typeof t && t) {
                            var n = ue(z.bridge);
                            n && n.setAttribute("title", t)
                        }
                        var r = H.forceHandCursor === !0 || "pointer" === Ee(e, "cursor");
                        Ie(r), ke()
                    }
                },
                ee = function() {
                    var e = ue(z.bridge);
                    e && (e.removeAttribute("title"), e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.top = "1px"), i && (Te(i, H.hoverClass), Te(i, H.activeClass), i = null)
                },
                te = function(e) {
                    return "string" == typeof e && e && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(e)
                },
                ne = function(e) {
                    var t;
                    if ("string" == typeof e && e ? (t = e, e = {}) : "object" == typeof e && e && "string" == typeof e.type && e.type && (t = e.type), t) {
                        x(e, {
                            type: t.toLowerCase(),
                            target: e.target || i || null,
                            relatedTarget: e.relatedTarget || null,
                            currentTarget: z && z.bridge || null,
                            timeStamp: e.timeStamp || O() || null
                        });
                        var n = Y[e.type];
                        return "error" === e.type && e.name && n && (n = n[e.name]), n && (e.message = n), "ready" === e.type && x(e, {
                            target: null,
                            version: z.version
                        }), "error" === e.type && (/^flash-(disabled|outdated|unavailable|deactivated|overdue)$/.test(e.name) && x(e, {
                            target: null,
                            minimumVersion: S
                        }), /^flash-(outdated|unavailable|deactivated|overdue)$/.test(e.name) && x(e, {
                            version: z.version
                        })), "copy" === e.type && (e.clipboardData = {
                            setData: Le.setData,
                            clearData: Le.clearData
                        }), "aftercopy" === e.type && (e = ye(e, A)), e.target && !e.relatedTarget && (e.relatedTarget = re(e.target)), e = ae(e)
                    }
                },
                re = function(e) {
                    var t = e && e.getAttribute && e.getAttribute("data-clipboard-target");
                    return t ? l.getElementById(t) : null
                },
                ae = function(e) {
                    if (e && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)) {
                        var t = e.target,
                            n = "_mouseover" === e.type && e.relatedTarget ? e.relatedTarget : a,
                            r = "_mouseout" === e.type && e.relatedTarget ? e.relatedTarget : a,
                            i = De(t),
                            s = o.screenLeft || o.screenX || 0,
                            c = o.screenTop || o.screenY || 0,
                            f = l.body.scrollLeft + l.documentElement.scrollLeft,
                            u = l.body.scrollTop + l.documentElement.scrollTop,
                            p = i.left + ("number" == typeof e._stageX ? e._stageX : 0),
                            d = i.top + ("number" == typeof e._stageY ? e._stageY : 0),
                            h = p - f,
                            y = d - u,
                            v = s + h,
                            g = c + y,
                            b = "number" == typeof e.movementX ? e.movementX : 0,
                            m = "number" == typeof e.movementY ? e.movementY : 0;
                        delete e._stageX, delete e._stageY, x(e, {
                            srcElement: t,
                            fromElement: n,
                            toElement: r,
                            screenX: v,
                            screenY: g,
                            pageX: p,
                            pageY: d,
                            clientX: h,
                            clientY: y,
                            x: h,
                            y: y,
                            movementX: b,
                            movementY: m,
                            offsetX: 0,
                            offsetY: 0,
                            layerX: 0,
                            layerY: 0
                        })
                    }
                    return e
                },
                ie = function(e) {
                    var t = e && "string" == typeof e.type && e.type || "";
                    return !/^(?:(?:before)?copy|destroy)$/.test(t)
                },
                oe = function(e, t, n, r) {
                    r ? c(function() {
                        e.apply(t, n)
                    }, 0) : e.apply(t, n)
                },
                le = function(e) {
                    if ("object" == typeof e && e && e.type) {
                        var t = ie(e),
                            n = F["*"] || [],
                            r = F[e.type] || [],
                            a = n.concat(r);
                        if (a && a.length) {
                            var i, l, s, c, f, u = this;
                            for (i = 0, l = a.length; i < l; i++) s = a[i], c = u, "string" == typeof s && "function" == typeof o[s] && (s = o[s]), "object" == typeof s && s && "function" == typeof s.handleEvent && (c = s, s = s.handleEvent), "function" == typeof s && (f = x({}, e), oe(s, c, [f], t))
                        }
                        return this
                    }
                },
                se = function(e) {
                    var t = e.target || i || null,
                        n = "swf" === e._source;
                    switch (delete e._source, e.type) {
                        case "error":
                            T(e.name, ["flash-disabled", "flash-outdated", "flash-deactivated", "flash-overdue"]) && x(z, {
                                disabled: "flash-disabled" === e.name,
                                outdated: "flash-outdated" === e.name,
                                unavailable: "flash-unavailable" === e.name,
                                deactivated: "flash-deactivated" === e.name,
                                overdue: "flash-overdue" === e.name,
                                ready: !1
                            });
                            break;
                        case "ready":
                            var r = z.deactivated === !0;
                            x(z, {
                                disabled: !1,
                                outdated: !1,
                                unavailable: !1,
                                deactivated: !1,
                                overdue: r,
                                ready: !r
                            });
                            break;
                        case "copy":
                            var a, o, l = e.relatedTarget;
                            !X["text/html"] && !X["text/plain"] && l && (o = l.value || l.outerHTML || l.innerHTML) && (a = l.value || l.textContent || l.innerText) ? (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", a), o !== a && e.clipboardData.setData("text/html", o)) : !X["text/plain"] && e.target && (a = e.target.getAttribute("data-clipboard-text")) && (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", a));
                            break;
                        case "aftercopy":
                            Le.clearData(), t && t !== we() && t.focus && t.focus();
                            break;
                        case "_mouseover":
                            Le.activate(t), H.bubbleEvents === !0 && n && (t && t !== e.relatedTarget && !L(e.relatedTarget, t) && ce(x({}, e, {
                                type: "mouseenter",
                                bubbles: !1,
                                cancelable: !1
                            })), ce(x({}, e, {
                                type: "mouseover"
                            })));
                            break;
                        case "_mouseout":
                            Le.deactivate(), H.bubbleEvents === !0 && n && (t && t !== e.relatedTarget && !L(e.relatedTarget, t) && ce(x({}, e, {
                                type: "mouseleave",
                                bubbles: !1,
                                cancelable: !1
                            })), ce(x({}, e, {
                                type: "mouseout"
                            })));
                            break;
                        case "_mousedown":
                            Ce(t, H.activeClass), H.bubbleEvents === !0 && n && ce(x({}, e, {
                                type: e.type.slice(1)
                            }));
                            break;
                        case "_mouseup":
                            Te(t, H.activeClass), H.bubbleEvents === !0 && n && ce(x({}, e, {
                                type: e.type.slice(1)
                            }));
                            break;
                        case "_click":
                        case "_mousemove":
                            H.bubbleEvents === !0 && n && ce(x({}, e, {
                                type: e.type.slice(1)
                            }))
                    }
                    if (/^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)) return !0
                },
                ce = function(e) {
                    if (e && "string" == typeof e.type && e) {
                        var t, n = e.target || e.srcElement || null,
                            r = n && n.ownerDocument || l,
                            a = {
                                view: r.defaultView || o,
                                canBubble: !0,
                                cancelable: !0,
                                detail: "click" === e.type ? 1 : 0,
                                button: "number" == typeof e.which ? e.which - 1 : "number" == typeof e.button ? e.button : r.createEvent ? 0 : 1
                            },
                            i = x(a, e);
                        n && (r.createEvent && n.dispatchEvent ? (i = [i.type, i.canBubble, i.cancelable, i.view, i.detail, i.screenX, i.screenY, i.clientX, i.clientY, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.button, i.relatedTarget], t = r.createEvent("MouseEvents"), t.initMouseEvent && (t.initMouseEvent.apply(t, i), n.dispatchEvent(t))) : r.createEventObject && n.fireEvent && (t = r.createEventObject(i), n.fireEvent("on" + i.type, t)))
                    }
                },
                fe = function() {
                    var e = l.createElement("div");
                    return e.id = H.containerId, e.className = H.containerClass, e.style.position = "absolute", e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.height = "1px", e.style.zIndex = "" + Ne(H.zIndex), e
                },
                ue = function(e) {
                    for (var t = e && e.parentNode; t && "OBJECT" === t.nodeName && t.parentNode;) t = t.parentNode;
                    return t || null
                },
                pe = function() {
                    var e, t = z.bridge,
                        n = ue(t);
                    if (!t) {
                        var r = me(o.location.host, H),
                            a = "never" === r ? "none" : "all",
                            i = ge(H),
                            s = H.swfPath + ve(H.swfPath, H);
                        n = fe();
                        var c = l.createElement("div");
                        n.appendChild(c), l.body.appendChild(n);
                        var f = l.createElement("div"),
                            u = "activex" === z.pluginType;
                        f.innerHTML = '<object id="' + H.swfObjectId + '" name="' + H.swfObjectId + '" width="100%" height="100%" ' + (u ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + s + '"') + ">" + (u ? '<param name="movie" value="' + s + '"/>' : "") + '<param name="allowScriptAccess" value="' + r + '"/><param name="allowNetworking" value="' + a + '"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="' + i + '"/></object>', t = f.firstChild, f = null, t.ZeroClipboard = Le, n.replaceChild(t, c)
                    }
                    return t || (t = l[H.swfObjectId], t && (e = t.length) && (t = t[e - 1]), !t && n && (t = n.firstChild)), z.bridge = t || null, t
                },
                de = function() {
                    var e = z.bridge;
                    if (e) {
                        var t = ue(e);
                        t && ("activex" === z.pluginType && "readyState" in e ? (e.style.display = "none", function n() {
                            if (4 === e.readyState) {
                                for (var r in e) "function" == typeof e[r] && (e[r] = null);
                                e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t)
                            } else c(n, 10)
                        }()) : (e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t))), z.ready = null, z.bridge = null, z.deactivated = null
                    }
                },
                he = function(e) {
                    var t = {},
                        n = {};
                    if ("object" == typeof e && e) {
                        for (var r in e)
                            if (r && m.call(e, r) && "string" == typeof e[r] && e[r]) switch (r.toLowerCase()) {
                                case "text/plain":
                                case "text":
                                case "air:text":
                                case "flash:text":
                                    t.text = e[r], n.text = r;
                                    break;
                                case "text/html":
                                case "html":
                                case "air:html":
                                case "flash:html":
                                    t.html = e[r], n.html = r;
                                    break;
                                case "application/rtf":
                                case "text/rtf":
                                case "rtf":
                                case "richtext":
                                case "air:rtf":
                                case "flash:rtf":
                                    t.rtf = e[r], n.rtf = r
                            }
                        return {
                            data: t,
                            formatMap: n
                        }
                    }
                },
                ye = function(e, t) {
                    if ("object" != typeof e || !e || "object" != typeof t || !t) return e;
                    var n = {};
                    for (var r in e)
                        if (m.call(e, r)) {
                            if ("success" !== r && "data" !== r) {
                                n[r] = e[r];
                                continue
                            }
                            n[r] = {};
                            var a = e[r];
                            for (var i in a) i && m.call(a, i) && m.call(t, i) && (n[r][t[i]] = a[i])
                        }
                    return n
                },
                ve = function(e, t) {
                    var n = null == t || t && t.cacheBust === !0;
                    return n ? (e.indexOf("?") === -1 ? "?" : "&") + "noCache=" + O() : ""
                },
                ge = function(e) {
                    var t, n, r, a, i = "",
                        l = [];
                    if (e.trustedDomains && ("string" == typeof e.trustedDomains ? a = [e.trustedDomains] : "object" == typeof e.trustedDomains && "length" in e.trustedDomains && (a = e.trustedDomains)), a && a.length)
                        for (t = 0, n = a.length; t < n; t++)
                            if (m.call(a, t) && a[t] && "string" == typeof a[t]) {
                                if (r = be(a[t]), !r) continue;
                                if ("*" === r) {
                                    l = [r];
                                    break
                                }
                                l.push.apply(l, [r, "//" + r, o.location.protocol + "//" + r])
                            }
                    return l.length && (i += "trustedOrigins=" + d(l.join(","))), e.forceEnhancedClipboard === !0 && (i += (i ? "&" : "") + "forceEnhancedClipboard=true"), "string" == typeof e.swfObjectId && e.swfObjectId && (i += (i ? "&" : "") + "swfObjectId=" + d(e.swfObjectId)), i
                },
                be = function(e) {
                    if (null == e || "" === e) return null;
                    if (e = e.replace(/^\s+|\s+$/g, ""), "" === e) return null;
                    var t = e.indexOf("//");
                    e = t === -1 ? e : e.slice(t + 2);
                    var n = e.indexOf("/");
                    return e = n === -1 ? e : t === -1 || 0 === n ? null : e.slice(0, n), e && ".swf" === e.slice(-4).toLowerCase() ? null : e || null
                },
                me = function() {
                    var e = function(e, t) {
                        var n, r, a;
                        if (null != e && "*" !== t[0] && ("string" == typeof e && (e = [e]), "object" == typeof e && "number" == typeof e.length))
                            for (n = 0, r = e.length; n < r; n++)
                                if (m.call(e, n) && (a = be(e[n]))) {
                                    if ("*" === a) {
                                        t.length = 0, t.push("*");
                                        break
                                    }
                                    T(a, t) === -1 && t.push(a)
                                }
                    };
                    return function(t, n) {
                        var r = be(n.swfPath);
                        null === r && (r = t);
                        var a = [];
                        e(n.trustedOrigins, a), e(n.trustedDomains, a);
                        var i = a.length;
                        if (i > 0) {
                            if (1 === i && "*" === a[0]) return "always";
                            if (T(t, a) !== -1) return 1 === i && t === r ? "sameDomain" : "always"
                        }
                        return "never"
                    }
                }(),
                we = function() {
                    try {
                        return l.activeElement
                    } catch (e) {
                        return null
                    }
                },
                Ce = function(e, t) {
                    if (!e || 1 !== e.nodeType) return e;
                    if (e.classList) return e.classList.contains(t) || e.classList.add(t), e;
                    if (t && "string" == typeof t) {
                        var n = (t || "").split(/\s+/);
                        if (1 === e.nodeType)
                            if (e.className) {
                                for (var r = " " + e.className + " ", a = e.className, i = 0, o = n.length; i < o; i++) r.indexOf(" " + n[i] + " ") < 0 && (a += " " + n[i]);
                                e.className = a.replace(/^\s+|\s+$/g, "")
                            } else e.className = t
                    }
                    return e
                },
                Te = function(e, t) {
                    if (!e || 1 !== e.nodeType) return e;
                    if (e.classList) return e.classList.contains(t) && e.classList.remove(t), e;
                    if ("string" == typeof t && t) {
                        var n = t.split(/\s+/);
                        if (1 === e.nodeType && e.className) {
                            for (var r = (" " + e.className + " ").replace(/[\n\t]/g, " "), a = 0, i = n.length; a < i; a++) r = r.replace(" " + n[a] + " ", " ");
                            e.className = r.replace(/^\s+|\s+$/g, "")
                        }
                    }
                    return e
                },
                xe = function() {
                    var e = /\-([a-z])/g,
                        t = function(e, t) {
                            return t.toUpperCase()
                        };
                    return function(n) {
                        return n.replace(e, t)
                    }
                }(),
                Ee = function(e, t) {
                    var n, r, a;
                    return o.getComputedStyle ? n = o.getComputedStyle(e, null).getPropertyValue(t) : (r = xe(t), n = e.currentStyle ? e.currentStyle[r] : e.style[r]), "cursor" !== t || n && "auto" !== n || (a = e.tagName.toLowerCase(), "a" !== a) ? n : "pointer"
                },
                je = function() {
                    var e, t, n, r = 1;
                    return "function" == typeof l.body.getBoundingClientRect && (e = l.body.getBoundingClientRect(), t = e.right - e.left, n = l.body.offsetWidth, r = h.round(t / n * 100) / 100), r
                },
                De = function(e) {
                    var t = {
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0
                    };
                    if (e.getBoundingClientRect) {
                        var n, r, a, i = e.getBoundingClientRect();
                        "pageXOffset" in o && "pageYOffset" in o ? (n = o.pageXOffset, r = o.pageYOffset) : (a = je(), n = h.round(l.documentElement.scrollLeft / a), r = h.round(l.documentElement.scrollTop / a));
                        var s = l.documentElement.clientLeft || 0,
                            c = l.documentElement.clientTop || 0;
                        t.left = i.left + n - s, t.top = i.top + r - c, t.width = "width" in i ? i.width : i.right - i.left, t.height = "height" in i ? i.height : i.bottom - i.top
                    }
                    return t
                },
                ke = function() {
                    var e;
                    if (i && (e = ue(z.bridge))) {
                        var t = De(i);
                        x(e.style, {
                            width: t.width + "px",
                            height: t.height + "px",
                            top: t.top + "px",
                            left: t.left + "px",
                            zIndex: "" + Ne(H.zIndex)
                        })
                    }
                },
                Ie = function(e) {
                    z.ready === !0 && (z.bridge && "function" == typeof z.bridge.setHandCursor ? z.bridge.setHandCursor(e) : z.ready = !1)
                },
                Ne = function(e) {
                    if (/^(?:auto|inherit)$/.test(e)) return e;
                    var t;
                    return "number" != typeof e || p(e) ? "string" == typeof e && (t = Ne(f(e, 10))) : t = e, "number" == typeof t ? t : "auto"
                },
                Oe = function(e) {
                    function t(e) {
                        var t = e.match(/[\d]+/g);
                        return t.length = 3, t.join(".")
                    }

                    function n(e) {
                        return !!e && (e = e.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e) || "chrome.plugin" === e.slice(-13))
                    }

                    function r(e) {
                        e && (l = !0, e.version && (p = t(e.version)), !p && e.description && (p = t(e.description)), e.filename && (f = n(e.filename)))
                    }
                    var a, i, o, l = !1,
                        c = !1,
                        f = !1,
                        p = "";
                    if (s.plugins && s.plugins.length) a = s.plugins["Shockwave Flash"], r(a), s.plugins["Shockwave Flash 2.0"] && (l = !0, p = "2.0.0.11");
                    else if (s.mimeTypes && s.mimeTypes.length) o = s.mimeTypes["application/x-shockwave-flash"], a = o && o.enabledPlugin, r(a);
                    else if ("undefined" != typeof e) {
                        c = !0;
                        try {
                            i = new e("ShockwaveFlash.ShockwaveFlash.7"), l = !0, p = t(i.GetVariable("$version"))
                        } catch (n) {
                            try {
                                i = new e("ShockwaveFlash.ShockwaveFlash.6"), l = !0, p = "6.0.21"
                            } catch (n) {
                                try {
                                    i = new e("ShockwaveFlash.ShockwaveFlash"), l = !0, p = t(i.GetVariable("$version"))
                                } catch (e) {
                                    c = !1
                                }
                            }
                        }
                    }
                    z.disabled = l !== !0, z.outdated = p && u(p) < u(S), z.version = p || "0.0.0", z.pluginType = f ? "pepper" : c ? "activex" : l ? "netscape" : "unknown"
                };
            Oe(v);
            var Le = function() {
                return this instanceof Le ? void("function" == typeof Le._createClient && Le._createClient.apply(this, C(arguments))) : new Le
            };
            Le.version = "2.0.2", N(Le, "version"), Le.config = function() {
                return M.apply(this, C(arguments))
            }, Le.state = function() {
                return P.apply(this, C(arguments))
            }, Le.isFlashUnusable = function() {
                return R.apply(this, C(arguments))
            }, Le.on = function() {
                return V.apply(this, C(arguments))
            }, Le.off = function() {
                return Z.apply(this, C(arguments))
            }, Le.handlers = function() {
                return K.apply(this, C(arguments))
            }, Le.emit = function() {
                return U.apply(this, C(arguments))
            }, Le.create = function() {
                return J.apply(this, C(arguments))
            }, Le.destroy = function() {
                return G.apply(this, C(arguments))
            }, Le.setData = function() {
                return W.apply(this, C(arguments))
            }, Le.clearData = function() {
                return q.apply(this, C(arguments))
            }, Le.activate = function() {
                return Q.apply(this, C(arguments))
            }, Le.deactivate = function() {
                return ee.apply(this, C(arguments))
            };
            var ze = 0,
                Se = {},
                _e = 0,
                Fe = {},
                Xe = {};
            x(H, {
                autoActivate: !0
            });
            var Ae = function(e) {
                    var t = this;
                    t.id = "" + ze++, Se[t.id] = {
                        instance: t,
                        elements: [],
                        handlers: {}
                    }, e && t.clip(e), Le.on("*", function(e) {
                        return t.emit(e)
                    }), Le.on("destroy", function() {
                        t.destroy()
                    }), Le.create()
                },
                Ye = function(e, t) {
                    var n, r, a, i = {},
                        o = Se[this.id] && Se[this.id].handlers;
                    if ("string" == typeof e && e) a = e.toLowerCase().split(/\s+/);
                    else if ("object" == typeof e && e && "undefined" == typeof t)
                        for (n in e) m.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && this.on(n, e[n]);
                    if (a && a.length) {
                        for (n = 0, r = a.length; n < r; n++) e = a[n].replace(/^on/, ""), i[e] = !0, o[e] || (o[e] = []), o[e].push(t);
                        if (i.ready && z.ready && this.emit({
                                type: "ready",
                                client: this
                            }), i.error) {
                            var l = ["disabled", "outdated", "unavailable", "deactivated", "overdue"];
                            for (n = 0, r = l.length; n < r; n++)
                                if (z[l[n]]) {
                                    this.emit({
                                        type: "error",
                                        name: "flash-" + l[n],
                                        client: this
                                    });
                                    break
                                }
                        }
                    }
                    return this
                },
                $e = function(e, t) {
                    var n, r, a, i, o, l = Se[this.id] && Se[this.id].handlers;
                    if (0 === arguments.length) i = k(l);
                    else if ("string" == typeof e && e) i = e.split(/\s+/);
                    else if ("object" == typeof e && e && "undefined" == typeof t)
                        for (n in e) m.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && this.off(n, e[n]);
                    if (i && i.length)
                        for (n = 0, r = i.length; n < r; n++)
                            if (e = i[n].toLowerCase().replace(/^on/, ""), o = l[e], o && o.length)
                                if (t)
                                    for (a = T(t, o); a !== -1;) o.splice(a, 1), a = T(t, o, a);
                                else o.length = 0;
                    return this
                },
                Be = function(e) {
                    var t = null,
                        n = Se[this.id] && Se[this.id].handlers;
                    return n && (t = "string" == typeof e && e ? n[e] ? n[e].slice(0) : [] : E(n)), t
                },
                He = function(e) {
                    if (Ze.call(this, e)) {
                        "object" == typeof e && e && "string" == typeof e.type && e.type && (e = x({}, e));
                        var t = x({}, ne(e), {
                            client: this
                        });
                        Ke.call(this, t)
                    }
                    return this
                },
                Me = function(e) {
                    e = Ue(e);
                    for (var t = 0; t < e.length; t++)
                        if (m.call(e, t) && e[t] && 1 === e[t].nodeType) {
                            e[t].zcClippingId ? T(this.id, Fe[e[t].zcClippingId]) === -1 && Fe[e[t].zcClippingId].push(this.id) : (e[t].zcClippingId = "zcClippingId_" + _e++, Fe[e[t].zcClippingId] = [this.id], H.autoActivate === !0 && We(e[t]));
                            var n = Se[this.id] && Se[this.id].elements;
                            T(e[t], n) === -1 && n.push(e[t])
                        }
                    return this
                },
                Pe = function(e) {
                    var t = Se[this.id];
                    if (!t) return this;
                    var n, r = t.elements;
                    e = "undefined" == typeof e ? r.slice(0) : Ue(e);
                    for (var a = e.length; a--;)
                        if (m.call(e, a) && e[a] && 1 === e[a].nodeType) {
                            for (n = 0;
                                (n = T(e[a], r, n)) !== -1;) r.splice(n, 1);
                            var i = Fe[e[a].zcClippingId];
                            if (i) {
                                for (n = 0;
                                    (n = T(this.id, i, n)) !== -1;) i.splice(n, 1);
                                0 === i.length && (H.autoActivate === !0 && qe(e[a]), delete e[a].zcClippingId)
                            }
                        }
                    return this
                },
                Re = function() {
                    var e = Se[this.id];
                    return e && e.elements ? e.elements.slice(0) : []
                },
                Ve = function() {
                    this.unclip(), this.off(), delete Se[this.id]
                },
                Ze = function(e) {
                    if (!e || !e.type) return !1;
                    if (e.client && e.client !== this) return !1;
                    var t = Se[this.id] && Se[this.id].elements,
                        n = !!t && t.length > 0,
                        r = !e.target || n && T(e.target, t) !== -1,
                        a = e.relatedTarget && n && T(e.relatedTarget, t) !== -1,
                        i = e.client && e.client === this;
                    return !!(r || a || i)
                },
                Ke = function(e) {
                    if ("object" == typeof e && e && e.type) {
                        var t = ie(e),
                            n = Se[this.id] && Se[this.id].handlers["*"] || [],
                            r = Se[this.id] && Se[this.id].handlers[e.type] || [],
                            a = n.concat(r);
                        if (a && a.length) {
                            var i, l, s, c, f, u = this;
                            for (i = 0, l = a.length; i < l; i++) s = a[i], c = u, "string" == typeof s && "function" == typeof o[s] && (s = o[s]), "object" == typeof s && s && "function" == typeof s.handleEvent && (c = s, s = s.handleEvent), "function" == typeof s && (f = x({}, e), oe(s, c, [f], t))
                        }
                        return this
                    }
                },
                Ue = function(e) {
                    return "string" == typeof e && (e = []), "number" != typeof e.length ? [e] : e
                },
                Je = function(e, t, n) {
                    return e && 1 === e.nodeType ? (e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n), e) : e
                },
                Ge = function(e, t, n) {
                    return e && 1 === e.nodeType ? (e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n), e) : e
                },
                We = function(e) {
                    if (e && 1 === e.nodeType) {
                        var t = function(t) {
                            (t || o.event) && Le.activate(e)
                        };
                        Je(e, "mouseover", t), Xe[e.zcClippingId] = {
                            mouseover: t
                        }
                    }
                },
                qe = function(e) {
                    if (e && 1 === e.nodeType) {
                        var t = Xe[e.zcClippingId];
                        "object" == typeof t && t && ("function" == typeof t.mouseover && Ge(e, "mouseover", t.mouseover), delete Xe[e.zcClippingId])
                    }
                };
            Le._createClient = function() {
                Ae.apply(this, C(arguments))
            }, Le.prototype.on = function() {
                return Ye.apply(this, C(arguments))
            }, Le.prototype.off = function() {
                return $e.apply(this, C(arguments))
            }, Le.prototype.handlers = function() {
                return Be.apply(this, C(arguments))
            }, Le.prototype.emit = function() {
                return He.apply(this, C(arguments))
            }, Le.prototype.clip = function() {
                return Me.apply(this, C(arguments))
            }, Le.prototype.unclip = function() {
                return Pe.apply(this, C(arguments))
            }, Le.prototype.elements = function() {
                return Re.apply(this, C(arguments))
            }, Le.prototype.destroy = function() {
                return Ve.apply(this, C(arguments))
            }, Le.prototype.setText = function(e) {
                return Le.setData("text/plain", e), this
            }, Le.prototype.setHtml = function(e) {
                return Le.setData("text/html", e), this
            }, Le.prototype.setRichText = function(e) {
                return Le.setData("application/rtf", e), this
            }, Le.prototype.setData = function() {
                return Le.setData.apply(this, C(arguments)), this
            }, Le.prototype.clearData = function() {
                return Le.clearData.apply(this, C(arguments)), this
            }, n = function() {
                return Le
            }.call(exports, t, exports, e), !(n !== a && (e.exports = n))
        }(function() {
            return this
        }())
    }
});