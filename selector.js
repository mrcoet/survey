/*!
 * Bootstrap-select v1.14.0-beta2 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2021 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */
! function(e, t) {
    void 0 === e && void 0 !== window && (e = window), "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
}(this, function(e) {
    ! function(T) {
        "use strict";
        var d = ["sanitize", "whiteList", "sanitizeFn"],
            l = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            e = {
                "*": ["class", "dir", "id", "lang", "role", "tabindex", "style", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            r = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            a = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,
            n = ["title", "placeholder"];

        function v(e, t) {
            var i = e.nodeName.toLowerCase();
            if (-1 !== T.inArray(i, t)) return -1 === T.inArray(i, l) || Boolean(e.nodeValue.match(r) || e.nodeValue.match(a));
            for (var s = T(t).filter(function(e, t) {
                    return t instanceof RegExp
                }), n = 0, o = s.length; n < o; n++)
                if (i.match(s[n])) return !0;
            return !1
        }

        function P(e, t, i) {
            if (i && "function" == typeof i) return i(e);
            for (var s = Object.keys(t), n = 0, o = e.length; n < o; n++)
                for (var l = e[n].querySelectorAll("*"), r = 0, a = l.length; r < a; r++) {
                    var c = l[r],
                        d = c.nodeName.toLowerCase();
                    if (-1 !== s.indexOf(d))
                        for (var h = [].slice.call(c.attributes), p = [].concat(t["*"] || [], t[d] || []), u = 0, f = h.length; u < f; u++) {
                            var m = h[u];
                            v(m, p) || c.removeAttribute(m.nodeName)
                        } else c.parentNode.removeChild(c)
                }
        }

        function h(t) {
            var i, s = {};
            return n.forEach(function(e) {
                (i = t.attr(e)) && (s[e] = i)
            }), !s.placeholder && s.title && (s.placeholder = s.title), s
        }
        "classList" in document.createElement("_") || function(e) {
            if ("Element" in e) {
                var t = "classList",
                    i = "prototype",
                    s = e.Element[i],
                    n = Object,
                    o = function() {
                        var i = T(this);
                        return {
                            add: function(e) {
                                return e = Array.prototype.slice.call(arguments).join(" "), i.addClass(e)
                            },
                            remove: function(e) {
                                return e = Array.prototype.slice.call(arguments).join(" "), i.removeClass(e)
                            },
                            toggle: function(e, t) {
                                return i.toggleClass(e, t)
                            },
                            contains: function(e) {
                                return i.hasClass(e)
                            }
                        }
                    };
                if (n.defineProperty) {
                    var l = {
                        get: o,
                        enumerable: !0,
                        configurable: !0
                    };
                    try {
                        n.defineProperty(s, t, l)
                    } catch (e) {
                        void 0 !== e.number && -2146823252 !== e.number || (l.enumerable = !1, n.defineProperty(s, t, l))
                    }
                } else n[i].__defineGetter__ && s.__defineGetter__(t, o)
            }
        }(window);
        var c, t = document.createElement("_");
        if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
            var i = DOMTokenList.prototype.add,
                s = DOMTokenList.prototype.remove;
            DOMTokenList.prototype.add = function() {
                Array.prototype.forEach.call(arguments, i.bind(this))
            }, DOMTokenList.prototype.remove = function() {
                Array.prototype.forEach.call(arguments, s.bind(this))
            }
        }
        if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
            var o = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(e, t) {
                return 1 in arguments && !this.contains(e) == !t ? t : o.call(this, e)
            }
        }

        function p(e) {
            if (null == this) throw new TypeError;
            var t = String(this);
            if (e && "[object RegExp]" == c.call(e)) throw new TypeError;
            var i = t.length,
                s = String(e),
                n = s.length,
                o = 1 < arguments.length ? arguments[1] : void 0,
                l = o ? Number(o) : 0;
            l != l && (l = 0);
            var r = Math.min(Math.max(l, 0), i);
            if (i < n + r) return !1;
            for (var a = -1; ++a < n;)
                if (t.charCodeAt(r + a) != s.charCodeAt(a)) return !1;
            return !0
        }

        function A() {
            var e = this.selectpicker.main.data.filter(function(e) {
                return !!e.selected && (!this.options.hideDisabled || !e.disabled)
            }, this);
            if (this.options.source.data && !this.multiple && 1 < e.length) {
                for (var t = 0; t < e.length - 1; t++) e[t].selected = !1;
                e = [e[e.length - 1]]
            }
            return e
        }

        function z(e) {
            for (var t, i = [], s = e || A.call(this), n = 0, o = s.length; n < o; n++)(t = s[n]).disabled || i.push(void 0 === t.value ? t.text : t.value);
            return this.multiple ? i : i.length ? i[0] : null
        }
        t = null, String.prototype.startsWith || (c = {}.toString, Object.defineProperty ? Object.defineProperty(String.prototype, "startsWith", {
            value: p,
            configurable: !0,
            writable: !0
        }) : String.prototype.startsWith = p);
        var u = {
            useDefault: !1,
            _set: T.valHooks.select.set
        };
        T.valHooks.select.set = function(e, t) {
            return t && !u.useDefault && T(e).data("selected", !0), u._set.apply(this, arguments)
        };
        var D = null,
            f = function() {
                try {
                    return new Event("change"), !0
                } catch (e) {
                    return !1
                }
            }();

        function k(e, t, i, s) {
            for (var n = ["display", "subtext", "tokens"], o = !1, l = 0; l < n.length; l++) {
                var r = n[l],
                    a = e[r];
                if (a && (a = a.toString(), "display" === r && (a = a.replace(/<[^>]+>/g, "")), s && (a = I(a)), a = a.toUpperCase(), o = "function" == typeof i ? i(a, t) : "contains" === i ? 0 <= a.indexOf(t) : a.startsWith(t))) break
            }
            return o
        }

        function L(e) {
            return parseInt(e, 10) || 0
        }
        T.fn.triggerNative = function(e) {
            var t, i = this[0];
            i.dispatchEvent && (f ? t = new Event(e, {
                bubbles: !0
            }) : (t = document.createEvent("Event")).initEvent(e, !0, !1), i.dispatchEvent(t))
        };
        var m = {
                "\xc0": "A",
                "\xc1": "A",
                "\xc2": "A",
                "\xc3": "A",
                "\xc4": "A",
                "\xc5": "A",
                "\xe0": "a",
                "\xe1": "a",
                "\xe2": "a",
                "\xe3": "a",
                "\xe4": "a",
                "\xe5": "a",
                "\xc7": "C",
                "\xe7": "c",
                "\xd0": "D",
                "\xf0": "d",
                "\xc8": "E",
                "\xc9": "E",
                "\xca": "E",
                "\xcb": "E",
                "\xe8": "e",
                "\xe9": "e",
                "\xea": "e",
                "\xeb": "e",
                "\xcc": "I",
                "\xcd": "I",
                "\xce": "I",
                "\xcf": "I",
                "\xec": "i",
                "\xed": "i",
                "\xee": "i",
                "\xef": "i",
                "\xd1": "N",
                "\xf1": "n",
                "\xd2": "O",
                "\xd3": "O",
                "\xd4": "O",
                "\xd5": "O",
                "\xd6": "O",
                "\xd8": "O",
                "\xf2": "o",
                "\xf3": "o",
                "\xf4": "o",
                "\xf5": "o",
                "\xf6": "o",
                "\xf8": "o",
                "\xd9": "U",
                "\xda": "U",
                "\xdb": "U",
                "\xdc": "U",
                "\xf9": "u",
                "\xfa": "u",
                "\xfb": "u",
                "\xfc": "u",
                "\xdd": "Y",
                "\xfd": "y",
                "\xff": "y",
                "\xc6": "Ae",
                "\xe6": "ae",
                "\xde": "Th",
                "\xfe": "th",
                "\xdf": "ss",
                "\u0100": "A",
                "\u0102": "A",
                "\u0104": "A",
                "\u0101": "a",
                "\u0103": "a",
                "\u0105": "a",
                "\u0106": "C",
                "\u0108": "C",
                "\u010a": "C",
                "\u010c": "C",
                "\u0107": "c",
                "\u0109": "c",
                "\u010b": "c",
                "\u010d": "c",
                "\u010e": "D",
                "\u0110": "D",
                "\u010f": "d",
                "\u0111": "d",
                "\u0112": "E",
                "\u0114": "E",
                "\u0116": "E",
                "\u0118": "E",
                "\u011a": "E",
                "\u0113": "e",
                "\u0115": "e",
                "\u0117": "e",
                "\u0119": "e",
                "\u011b": "e",
                "\u011c": "G",
                "\u011e": "G",
                "\u0120": "G",
                "\u0122": "G",
                "\u011d": "g",
                "\u011f": "g",
                "\u0121": "g",
                "\u0123": "g",
                "\u0124": "H",
                "\u0126": "H",
                "\u0125": "h",
                "\u0127": "h",
                "\u0128": "I",
                "\u012a": "I",
                "\u012c": "I",
                "\u012e": "I",
                "\u0130": "I",
                "\u0129": "i",
                "\u012b": "i",
                "\u012d": "i",
                "\u012f": "i",
                "\u0131": "i",
                "\u0134": "J",
                "\u0135": "j",
                "\u0136": "K",
                "\u0137": "k",
                "\u0138": "k",
                "\u0139": "L",
                "\u013b": "L",
                "\u013d": "L",
                "\u013f": "L",
                "\u0141": "L",
                "\u013a": "l",
                "\u013c": "l",
                "\u013e": "l",
                "\u0140": "l",
                "\u0142": "l",
                "\u0143": "N",
                "\u0145": "N",
                "\u0147": "N",
                "\u014a": "N",
                "\u0144": "n",
                "\u0146": "n",
                "\u0148": "n",
                "\u014b": "n",
                "\u014c": "O",
                "\u014e": "O",
                "\u0150": "O",
                "\u014d": "o",
                "\u014f": "o",
                "\u0151": "o",
                "\u0154": "R",
                "\u0156": "R",
                "\u0158": "R",
                "\u0155": "r",
                "\u0157": "r",
                "\u0159": "r",
                "\u015a": "S",
                "\u015c": "S",
                "\u015e": "S",
                "\u0160": "S",
                "\u015b": "s",
                "\u015d": "s",
                "\u015f": "s",
                "\u0161": "s",
                "\u0162": "T",
                "\u0164": "T",
                "\u0166": "T",
                "\u0163": "t",
                "\u0165": "t",
                "\u0167": "t",
                "\u0168": "U",
                "\u016a": "U",
                "\u016c": "U",
                "\u016e": "U",
                "\u0170": "U",
                "\u0172": "U",
                "\u0169": "u",
                "\u016b": "u",
                "\u016d": "u",
                "\u016f": "u",
                "\u0171": "u",
                "\u0173": "u",
                "\u0174": "W",
                "\u0175": "w",
                "\u0176": "Y",
                "\u0177": "y",
                "\u0178": "Y",
                "\u0179": "Z",
                "\u017b": "Z",
                "\u017d": "Z",
                "\u017a": "z",
                "\u017c": "z",
                "\u017e": "z",
                "\u0132": "IJ",
                "\u0133": "ij",
                "\u0152": "Oe",
                "\u0153": "oe",
                "\u0149": "'n",
                "\u017f": "s"
            },
            g = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            b = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]", "g");

        function w(e) {
            return m[e]
        }

        function I(e) {
            return (e = e.toString()) && e.replace(g, w).replace(b, "")
        }
        var x, y, $, S, E = (x = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }, y = "(?:" + Object.keys(x).join("|") + ")", $ = RegExp(y), S = RegExp(y, "g"), function(e) {
            return e = null == e ? "" : "" + e, $.test(e) ? e.replace(S, C) : e
        });

        function C(e) {
            return x[e]
        }
        var O = {
                32: " ",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                65: "A",
                66: "B",
                67: "C",
                68: "D",
                69: "E",
                70: "F",
                71: "G",
                72: "H",
                73: "I",
                74: "J",
                75: "K",
                76: "L",
                77: "M",
                78: "N",
                79: "O",
                80: "P",
                81: "Q",
                82: "R",
                83: "S",
                84: "T",
                85: "U",
                86: "V",
                87: "W",
                88: "X",
                89: "Y",
                90: "Z",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9"
            },
            N = 27,
            H = 13,
            W = 32,
            B = 9,
            M = 38,
            R = 40,
            U = window.Dropdown || bootstrap.Dropdown;

        function V() {
            var t;
            try {
                t = T.fn.dropdown.Constructor.VERSION
            } catch (e) {
                t = U.VERSION
            }
            return t
        }
        var j = {
            success: !1,
            major: "3"
        };
        try {
            j.full = (V() || "").split(" ")[0].split("."), j.major = j.full[0], j.success = !0
        } catch (e) {}
        var _ = 0,
            F = ".bs.select",
            G = {
                DISABLED: "disabled",
                DIVIDER: "divider",
                SHOW: "open",
                DROPUP: "dropup",
                MENU: "dropdown-menu",
                MENURIGHT: "dropdown-menu-right",
                MENULEFT: "dropdown-menu-left",
                BUTTONCLASS: "btn-default",
                POPOVERHEADER: "popover-title",
                ICONBASE: "glyphicon",
                TICKICON: "glyphicon-ok"
            },
            q = {
                MENU: "." + G.MENU,
                DATA_TOGGLE: 'data-toggle="dropdown"'
            },
            K = {
                div: document.createElement("div"),
                span: document.createElement("span"),
                i: document.createElement("i"),
                subtext: document.createElement("small"),
                a: document.createElement("a"),
                li: document.createElement("li"),
                whitespace: document.createTextNode("\xa0"),
                fragment: document.createDocumentFragment(),
                option: document.createElement("option")
            };
        K.selectedOption = K.option.cloneNode(!1), K.selectedOption.setAttribute("selected", !0), K.noResults = K.li.cloneNode(!1), K.noResults.className = "no-results", K.a.setAttribute("role", "option"), K.a.className = "dropdown-item", K.subtext.className = "text-muted", K.text = K.span.cloneNode(!1), K.text.className = "text", K.checkMark = K.span.cloneNode(!1);
        var Q = new RegExp(M + "|" + R),
            Y = new RegExp("^" + B + "$|" + N),
            Z = {
                li: function(e, t, i) {
                    var s = K.li.cloneNode(!1);
                    return e && (1 === e.nodeType || 11 === e.nodeType ? s.appendChild(e) : s.innerHTML = e), void 0 !== t && "" !== t && (s.className = t), null != i && s.classList.add("optgroup-" + i), s
                },
                a: function(e, t, i) {
                    var s = K.a.cloneNode(!0);
                    return e && (11 === e.nodeType ? s.appendChild(e) : s.insertAdjacentHTML("beforeend", e)), void 0 !== t && "" !== t && s.classList.add.apply(s.classList, t.split(/\s+/)), i && s.setAttribute("style", i), s
                },
                text: function(e, t) {
                    var i, s, n = K.text.cloneNode(!1);
                    if (e.content) n.innerHTML = e.content;
                    else {
                        if (n.textContent = e.text, e.icon) {
                            var o = K.whitespace.cloneNode(!1);
                            (s = (!0 === t ? K.i : K.span).cloneNode(!1)).className = this.options.iconBase + " " + e.icon, K.fragment.appendChild(s), K.fragment.appendChild(o)
                        }
                        e.subtext && ((i = K.subtext.cloneNode(!1)).textContent = e.subtext, n.appendChild(i))
                    }
                    if (!0 === t)
                        for (; 0 < n.childNodes.length;) K.fragment.appendChild(n.childNodes[0]);
                    else K.fragment.appendChild(n);
                    return K.fragment
                },
                label: function(e) {
                    var t, i, s = K.text.cloneNode(!1);
                    if (s.innerHTML = e.display, e.icon) {
                        var n = K.whitespace.cloneNode(!1);
                        (i = K.span.cloneNode(!1)).className = this.options.iconBase + " " + e.icon, K.fragment.appendChild(i), K.fragment.appendChild(n)
                    }
                    return e.subtext && ((t = K.subtext.cloneNode(!1)).textContent = e.subtext, s.appendChild(t)), K.fragment.appendChild(s), K.fragment
                }
            },
            J = {
                fromOption: function(e, t) {
                    var i;
                    switch (t) {
                        case "divider":
                            i = "true" === e.getAttribute("data-divider");
                            break;
                        case "text":
                            i = e.textContent;
                            break;
                        case "label":
                            i = e.label;
                            break;
                        case "style":
                            i = e.style.cssText;
                            break;
                        case "content":
                        case "tokens":
                        case "subtext":
                        case "icon":
                            i = e.getAttribute("data-" + t)
                    }
                    return i
                },
                fromDataSource: function(e, t) {
                    var i;
                    switch (t) {
                        case "text":
                        case "label":
                            i = e.text || e.value || "";
                            break;
                        case "divider":
                        case "style":
                        case "content":
                        case "tokens":
                        case "subtext":
                        case "icon":
                            i = e[t]
                    }
                    return i
                }
            };

        function X(e, t) {
            e.length || (K.noResults.innerHTML = this.options.noneResultsText.replace("{0}", '"' + E(t) + '"'), this.$menuInner[0].firstChild.appendChild(K.noResults))
        }

        function ee(e) {
            return !(e.hidden || this.options.hideDisabled && e.disabled)
        }
        var te = function(e, t) {
            var i = this;
            u.useDefault || (T.valHooks.select.set = u._set, u.useDefault = !0), this.$element = T(e), this.$newElement = null, this.$button = null, this.$menu = null, this.options = t, this.selectpicker = {
                main: {
                    optionQueue: K.fragment.cloneNode(!1)
                },
                search: {},
                current: {},
                view: {},
                isSearching: !1,
                keydown: {
                    keyHistory: "",
                    resetKeyHistory: {
                        start: function() {
                            return setTimeout(function() {
                                i.selectpicker.keydown.keyHistory = ""
                            }, 800)
                        }
                    }
                }
            }, this.sizeInfo = {};
            var s = this.options.windowPadding;
            "number" == typeof s && (this.options.windowPadding = [s, s, s, s]), this.val = te.prototype.val, this.render = te.prototype.render, this.refresh = te.prototype.refresh, this.setStyle = te.prototype.setStyle, this.selectAll = te.prototype.selectAll, this.deselectAll = te.prototype.deselectAll, this.destroy = te.prototype.destroy, this.remove = te.prototype.remove, this.show = te.prototype.show, this.hide = te.prototype.hide, this.init()
        };

        function ie(e) {
            var r, a = arguments,
                c = e;
            if ([].shift.apply(a), !j.success) {
                try {
                    j.full = (V() || "").split(" ")[0].split(".")
                } catch (e) {
                    te.BootstrapVersion ? j.full = te.BootstrapVersion.split(" ")[0].split(".") : (j.full = [j.major, "0", "0"], console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.", e))
                }
                j.major = j.full[0], j.success = !0
            }
            if ("4" <= j.major) {
                var t = [];
                te.DEFAULTS.style === G.BUTTONCLASS && t.push({
                    name: "style",
                    className: "BUTTONCLASS"
                }), te.DEFAULTS.iconBase === G.ICONBASE && t.push({
                    name: "iconBase",
                    className: "ICONBASE"
                }), te.DEFAULTS.tickIcon === G.TICKICON && t.push({
                    name: "tickIcon",
                    className: "TICKICON"
                }), G.DIVIDER = "dropdown-divider", G.SHOW = "show", G.BUTTONCLASS = "btn-light", G.POPOVERHEADER = "popover-header", G.ICONBASE = "", G.TICKICON = "bs-ok-default";
                for (var i = 0; i < t.length; i++) {
                    e = t[i];
                    te.DEFAULTS[e.name] = G[e.className]
                }
            }
            "4" < j.major && (q.DATA_TOGGLE = 'data-bs-toggle="dropdown"');
            var s = this.each(function() {
                var e = T(this);
                if (e.is("select")) {
                    var t = e.data("selectpicker"),
                        i = "object" == typeof c && c;
                    if (i.title && (i.placeholder = i.title), t) {
                        if (i)
                            for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t.options[s] = i[s])
                    } else {
                        var n = e.data();
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && -1 !== T.inArray(o, d) && delete n[o];
                        var l = T.extend({}, te.DEFAULTS, T.fn.selectpicker.defaults || {}, h(e), n, i);
                        l.template = T.extend({}, te.DEFAULTS.template, T.fn.selectpicker.defaults ? T.fn.selectpicker.defaults.template : {}, n.template, i.template), e.data("selectpicker", t = new te(this, l))
                    }
                    "string" == typeof c && (r = t[c] instanceof Function ? t[c].apply(t, a) : t.options[c])
                }
            });
            return void 0 !== r ? r : s
        }
        te.VERSION = "1.14.0-beta2", te.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results matched {0}",
            countSelectedText: function(e, t) {
                return 1 == e ? "{0} item selected" : "{0} items selected"
            },
            maxOptionsText: function(e, t) {
                return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            source: {},
            chunkSize: 40,
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: G.BUTTONCLASS,
            size: "auto",
            title: null,
            placeholder: null,
            allowClear: !1,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: G.ICONBASE,
            tickIcon: G.TICKICON,
            showTick: !1,
            template: {
                caret: '<span class="caret"></span>'
            },
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !1,
            dropdownAlignRight: !1,
            windowPadding: 0,
            virtualScroll: 600,
            display: !1,
            sanitize: !0,
            sanitizeFn: null,
            whiteList: e
        }, te.prototype = {
            constructor: te,
            init: function() {
                var i = this,
                    e = this.$element.attr("id"),
                    t = this.$element[0],
                    s = t.form;
                _++, this.selectId = "bs-select-" + _, t.classList.add("bs-select-hidden"), this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), t.classList.contains("show-tick") && (this.options.showTick = !0), this.$newElement = this.createDropdown(), this.$element.after(this.$newElement).prependTo(this.$newElement), s && null === t.form && (s.id || (s.id = "form-" + this.selectId), t.setAttribute("form", s.id)), this.$button = this.$newElement.children("button"), this.options.allowClear && (this.$clearButton = this.$button.children(".bs-select-clear-selected")), this.$menu = this.$newElement.children(q.MENU), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), t.classList.remove("bs-select-hidden"), this.fetchData(function() {
                    i.render(!0), i.buildList(), requestAnimationFrame(function() {
                        i.$element.trigger("loaded" + F)
                    })
                }), this.fetchData(function() {
                    i.render(!0), i.buildList(), requestAnimationFrame(function() {
                        i.$element.trigger("loaded" + F)
                    })
                }), !0 === this.options.dropdownAlignRight && this.$menu[0].classList.add(G.MENURIGHT), void 0 !== e && this.$button.attr("data-id", e), this.checkDisabled(), this.clickListener(), 4 < j.major && (this.dropdown = new U(this.$button[0])), this.options.liveSearch ? (this.liveSearchListener(), this.focusedParent = this.$searchbox[0]) : this.focusedParent = this.$menuInner[0], this.setStyle(), this.setWidth(), this.options.container ? this.selectPosition() : this.$element.on("hide" + F, function() {
                    if (i.isVirtual()) {
                        var e = i.$menuInner[0],
                            t = e.firstChild.cloneNode(!1);
                        e.replaceChild(t, e.firstChild), e.scrollTop = 0
                    }
                }), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
                    "hide.bs.dropdown": function(e) {
                        i.$element.trigger("hide" + F, e)
                    },
                    "hidden.bs.dropdown": function(e) {
                        i.$element.trigger("hidden" + F, e)
                    },
                    "show.bs.dropdown": function(e) {
                        i.$element.trigger("show" + F, e)
                    },
                    "shown.bs.dropdown": function(e) {
                        i.$element.trigger("shown" + F, e)
                    }
                }), t.hasAttribute("required") && this.$element.on("invalid" + F, function() {
                    i.$button[0].classList.add("bs-invalid"), i.$element.on("shown" + F + ".invalid", function() {
                        i.$element.val(i.$element.val()).off("shown" + F + ".invalid")
                    }).on("rendered" + F, function() {
                        this.validity.valid && i.$button[0].classList.remove("bs-invalid"), i.$element.off("rendered" + F)
                    }), i.$button.on("blur" + F, function() {
                        i.$element.trigger("focus").trigger("blur"), i.$button.off("blur" + F)
                    })
                }), s && T(s).on("reset" + F, function() {
                    requestAnimationFrame(function() {
                        i.render()
                    })
                })
            },
            createDropdown: function() {
                var e = this.multiple || this.options.showTick ? " show-tick" : "",
                    t = this.multiple ? ' aria-multiselectable="true"' : "",
                    i = "",
                    s = this.autofocus ? " autofocus" : "";
                j.major < 4 && this.$element.parent().hasClass("input-group") && (i = " input-group-btn");
                var n, o = "",
                    l = "",
                    r = "",
                    a = "",
                    c = "";
                return this.options.header && (o = '<div class="' + G.POPOVERHEADER + '"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>"), this.options.liveSearch && (l = '<div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + E(this.options.liveSearchPlaceholder) + '"') + ' role="combobox" aria-label="Search" aria-controls="' + this.selectId + '" aria-autocomplete="list"></div>'), this.multiple && this.options.actionsBox && (r = '<div class="bs-actionsbox"><div class="btn-group btn-group-sm"><button type="button" class="actions-btn bs-select-all btn ' + G.BUTTONCLASS + '">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn ' + G.BUTTONCLASS + '">' + this.options.deselectAllText + "</button></div></div>"), this.multiple && this.options.doneButton && (a = '<div class="bs-donebutton"><div class="btn-group"><button type="button" class="btn btn-sm ' + G.BUTTONCLASS + '">' + this.options.doneButtonText + "</button></div></div>"), this.options.allowClear && (c = '<span class="close bs-select-clear-selected" title="' + this.options.deselectAllText + '"><span>&times;</span>'), n = '<div class="dropdown bootstrap-select' + e + i + '"><button type="button" tabindex="-1" class="' + this.options.styleBase + ' dropdown-toggle" ' + ("static" === this.options.display ? 'data-display="static"' : "") + q.DATA_TOGGLE + s + ' role="combobox" aria-owns="' + this.selectId + '" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">&nbsp;</div></div> </div>' + c + "</span>" + ("4" <= j.major ? "" : '<span class="bs-caret">' + this.options.template.caret + "</span>") + '</button><div class="' + G.MENU + " " + ("4" <= j.major ? "" : G.SHOW) + '">' + o + l + r + '<div class="inner ' + G.SHOW + '" role="listbox" id="' + this.selectId + '" tabindex="-1" ' + t + '><ul class="' + G.MENU + " inner " + ("4" <= j.major ? G.SHOW : "") + '" role="presentation"></ul></div>' + a + "</div></div>", T(n)
            },
            setPositionData: function() {
                this.selectpicker.view.canHighlight = [], this.selectpicker.view.size = 0, this.selectpicker.view.firstHighlightIndex = !1;
                for (var e = 0; e < this.selectpicker.current.data.length; e++) {
                    var t = this.selectpicker.current.data[e],
                        i = !0;
                    "divider" === t.type ? (i = !1, t.height = this.sizeInfo.dividerHeight) : "optgroup-label" === t.type ? (i = !1, t.height = this.sizeInfo.dropdownHeaderHeight) : t.height = this.sizeInfo.liHeight, t.disabled && (i = !1), this.selectpicker.view.canHighlight.push(i), i && (this.selectpicker.view.size++, t.posinset = this.selectpicker.view.size, !1 === this.selectpicker.view.firstHighlightIndex && (this.selectpicker.view.firstHighlightIndex = e)), t.position = (0 === e ? 0 : this.selectpicker.current.data[e - 1].position) + t.height
                }
            },
            isVirtual: function() {
                return !1 !== this.options.virtualScroll && this.selectpicker.main.data.length >= this.options.virtualScroll || !0 === this.options.virtualScroll
            },
            createView: function(z, e, t) {
                var D, L, N = this,
                    i = 0,
                    H = [];
                if (this.selectpicker.isSearching = z, this.selectpicker.current = z ? this.selectpicker.search : this.selectpicker.main, this.setPositionData(), e)
                    if (t) i = this.$menuInner[0].scrollTop;
                    else if (!N.multiple) {
                    var s = N.$element[0],
                        n = (s.options[s.selectedIndex] || {}).liIndex;
                    if ("number" == typeof n && !1 !== N.options.size) {
                        var o = N.selectpicker.main.data[n],
                            l = o && o.position;
                        l && (i = l - (N.sizeInfo.menuInnerHeight + N.sizeInfo.liHeight) / 2)
                    }
                }

                function W(e, t) {
                    var i, s, n, o, l, r, a, c, d = N.selectpicker.current.data.length,
                        h = [],
                        p = !0,
                        u = N.isVirtual();
                    N.selectpicker.view.scrollTop = e, i = N.options.chunkSize, s = Math.ceil(d / i) || 1;
                    for (var f = 0; f < s; f++) {
                        var m = (f + 1) * i;
                        if (f === s - 1 && (m = d), h[f] = [f * i + (f ? 1 : 0), m], !d) break;
                        void 0 === l && e - 1 <= N.selectpicker.current.data[m - 1].position - N.sizeInfo.menuInnerHeight && (l = f)
                    }
                    if (void 0 === l && (l = 0), r = [N.selectpicker.view.position0, N.selectpicker.view.position1], n = Math.max(0, l - 1), o = Math.min(s - 1, l + 1), N.selectpicker.view.position0 = !1 === u ? 0 : Math.max(0, h[n][0]) || 0, N.selectpicker.view.position1 = !1 === u ? d : Math.min(d, h[o][1]) || 0, a = r[0] !== N.selectpicker.view.position0 || r[1] !== N.selectpicker.view.position1, void 0 !== N.activeIndex && (L = (N.selectpicker.main.data[N.prevActiveIndex] || {}).element, H = (N.selectpicker.main.data[N.activeIndex] || {}).element, D = (N.selectpicker.main.data[N.selectedIndex] || {}).element, t && (N.activeIndex !== N.selectedIndex && N.defocusItem(H), N.activeIndex = void 0), N.activeIndex && N.activeIndex !== N.selectedIndex && N.defocusItem(D)), void 0 !== N.prevActiveIndex && N.prevActiveIndex !== N.activeIndex && N.prevActiveIndex !== N.selectedIndex && N.defocusItem(L), t || a) {
                        if (c = N.selectpicker.view.visibleElements ? N.selectpicker.view.visibleElements.slice() : [], N.selectpicker.view.visibleElements = !1 === u ? N.selectpicker.current.elements : N.selectpicker.current.elements.slice(N.selectpicker.view.position0, N.selectpicker.view.position1), N.setOptionStatus(), (z || !1 === u && t) && (p = ! function(e, i) {
                                return e.length === i.length && e.every(function(e, t) {
                                    return e === i[t]
                                })
                            }(c, N.selectpicker.view.visibleElements)), (t || !0 === u) && p) {
                            var v, g, b = N.$menuInner[0],
                                w = document.createDocumentFragment(),
                                I = b.firstChild.cloneNode(!1),
                                x = N.selectpicker.view.visibleElements,
                                k = [];
                            b.replaceChild(I, b.firstChild);
                            f = 0;
                            for (var y = x.length; f < y; f++) {
                                var $, S, E = x[f];
                                N.options.sanitize && ($ = E.lastChild) && (S = N.selectpicker.current.data[f + N.selectpicker.view.position0]) && S.content && !S.sanitized && (k.push($), S.sanitized = !0), w.appendChild(E)
                            }
                            if (N.options.sanitize && k.length && P(k, N.options.whiteList, N.options.sanitizeFn), !0 === u ? (v = 0 === N.selectpicker.view.position0 ? 0 : N.selectpicker.current.data[N.selectpicker.view.position0 - 1].position, g = N.selectpicker.view.position1 > d - 1 ? 0 : N.selectpicker.current.data[d - 1].position - N.selectpicker.current.data[N.selectpicker.view.position1 - 1].position, b.firstChild.style.marginTop = v + "px", b.firstChild.style.marginBottom = g + "px") : (b.firstChild.style.marginTop = 0, b.firstChild.style.marginBottom = 0), b.firstChild.appendChild(w), !0 === u && N.sizeInfo.hasScrollBar) {
                                var C = b.firstChild.offsetWidth;
                                if (t && C < N.sizeInfo.menuInnerInnerWidth && N.sizeInfo.totalMenuWidth > N.sizeInfo.selectWidth) b.firstChild.style.minWidth = N.sizeInfo.menuInnerInnerWidth + "px";
                                else if (C > N.sizeInfo.menuInnerInnerWidth) {
                                    N.$menu[0].style.minWidth = 0;
                                    var O = b.firstChild.offsetWidth;
                                    O > N.sizeInfo.menuInnerInnerWidth && (N.sizeInfo.menuInnerInnerWidth = O, b.firstChild.style.minWidth = N.sizeInfo.menuInnerInnerWidth + "px"), N.$menu[0].style.minWidth = ""
                                }
                            }
                        }(!z && N.options.source.load || z && N.options.source.search) && l === s - 1 && N.fetchData(function() {
                            N.render(), N.buildList(d, z), N.setPositionData(), W(e)
                        }, z ? "search" : "load", l + 1, z ? N.selectpicker.search.previousValue : void 0)
                    }
                    if (N.prevActiveIndex = N.activeIndex, N.options.liveSearch) {
                        if (z && t) {
                            var A, T = 0;
                            N.selectpicker.view.canHighlight[T] || (T = 1 + N.selectpicker.view.canHighlight.slice(1).indexOf(!0)), A = N.selectpicker.view.visibleElements[T], N.defocusItem(N.selectpicker.view.currentActive), N.activeIndex = (N.selectpicker.current.data[T] || {}).index, N.focusItem(A)
                        }
                    } else N.$menuInner.trigger("focus")
                }
                W(i, !0), this.$menuInner.off("scroll.createView").on("scroll.createView", function(e, t) {
                    N.noScroll || W(this.scrollTop, t), N.noScroll = !1
                }), T(window).off("resize" + F + "." + this.selectId + ".createView").on("resize" + F + "." + this.selectId + ".createView", function() {
                    N.$newElement.hasClass(G.SHOW) && W(N.$menuInner[0].scrollTop)
                })
            },
            focusItem: function(e, t, i) {
                if (e) {
                    t = t || this.selectpicker.main.data[this.activeIndex];
                    var s = e.firstChild;
                    s && (s.setAttribute("aria-setsize", this.selectpicker.view.size), s.setAttribute("aria-posinset", t.posinset), !0 !== i && (this.focusedParent.setAttribute("aria-activedescendant", s.id), e.classList.add("active"), s.classList.add("active")))
                }
            },
            defocusItem: function(e) {
                e && (e.classList.remove("active"), e.firstChild && e.firstChild.classList.remove("active"))
            },
            setPlaceholder: function() {
                var e = this,
                    t = !1;
                if ((this.options.placeholder || this.options.allowClear) && !this.multiple) {
                    this.selectpicker.view.titleOption || (this.selectpicker.view.titleOption = document.createElement("option")), t = !0;
                    var i = this.$element[0],
                        s = !1,
                        n = !this.selectpicker.view.titleOption.parentNode,
                        o = i.selectedIndex,
                        l = i.options[o],
                        r = i.querySelector("select > *:not(:disabled)"),
                        a = r ? r.index : 0,
                        c = window.performance && window.performance.getEntriesByType("navigation"),
                        d = c && c.length ? "back_forward" !== c[0].type : 2 !== window.performance.navigation.type;
                    n && (this.selectpicker.view.titleOption.className = "bs-title-option", this.selectpicker.view.titleOption.value = "", s = !l || o === a && !1 === l.defaultSelected && void 0 === this.$element.data("selected")), !n && 0 === this.selectpicker.view.titleOption.index || i.insertBefore(this.selectpicker.view.titleOption, i.firstChild), s && d ? i.selectedIndex = 0 : "complete" !== document.readyState && window.addEventListener("pageshow", function() {
                        e.selectpicker.view.displayedValue !== i.value && e.render()
                    })
                }
                return t
            },
            fetchData: function(t, i, e, s) {
                i = i || "data";
                var n, o = this,
                    l = this.options.source[i];
                l ? (this.options.virtualScroll = !0, "function" == typeof l ? l.call(this, function(e) {
                    n = o.buildData(e, i), t.call(o, n)
                }, e, s) : Array.isArray(l) && (n = o.buildData(l, i), t.call(o, n))) : (n = this.buildData(!1, i), t.call(o, n))
            },
            buildData: function(p, e) {
                var u = !1 === p ? J.fromOption : J.fromDataSource,
                    f = ':not([hidden]):not([data-hidden="true"])',
                    m = [],
                    l = 0,
                    v = 0,
                    g = this.setPlaceholder() && !p ? 1 : 0;
                "load" === e ? l = this.selectpicker.main.data.length : "search" === e && (l = this.selectpicker.search.data.length), this.options.hideDisabled && (f += ":not(:disabled)");
                var t = p ? p.filter(ee, this) : this.$element[0].querySelectorAll("select > *" + f);

                function b(e) {
                    var t = m[m.length - 1];
                    t && "divider" === t.type && (t.optID || e.optID) || ((e = e || {}).type = "divider", m.push(e))
                }

                function w(e, t) {
                    if ((t = t || {}).divider = u(e, "divider"), !0 === t.divider) b({
                        optID: t.optID
                    });
                    else {
                        var i = m.length + l,
                            s = u(e, "style"),
                            n = s ? E(s) : "",
                            o = (e.className || "") + (t.optgroupClass || "");
                        t.optID && (o = "opt " + o), t.optionClass = o.trim(), t.inlineStyle = n, t.text = u(e, "text"), t.content = u(e, "content"), t.tokens = u(e, "tokens"), t.subtext = u(e, "subtext"), t.icon = u(e, "icon"), t.display = t.content || t.text, t.value = void 0 === e.value ? e.text : e.value, t.type = "option", t.index = i, t.option = e.option ? e.option : e, t.option.liIndex = i, t.selected = !!e.selected, t.disabled = t.disabled || !!e.disabled, m.push(t)
                    }
                }

                function i(e, t) {
                    var i = t[e],
                        s = !(e - 1 < g) && t[e - 1],
                        n = t[e + 1],
                        o = p ? i.children.filter(ee, this) : i.querySelectorAll("option" + f);
                    if (o.length) {
                        var l, r, a = {
                            display: E(u(I, "label")),
                            subtext: u(i, "subtext"),
                            icon: u(i, "icon"),
                            type: "optgroup-label",
                            optgroupClass: " " + (i.className || "")
                        };
                        v++, s && b({
                            optID: v
                        }), a.optID = v, m.push(a);
                        for (var c = 0, d = o.length; c < d; c++) {
                            var h = o[c];
                            0 === c && (r = (l = m.length - 1) + d), w(h, {
                                headerIndex: l,
                                lastIndex: r,
                                optID: a.optID,
                                optgroupClass: a.optgroupClass,
                                disabled: i.disabled
                            })
                        }
                        n && b({
                            optID: v
                        })
                    }
                }
                for (var s = t.length, n = g; n < s; n++) {
                    var I = t[n],
                        o = I.children;
                    o && o.length ? i.call(this, g, t) : w.call(this, I, {})
                }
                switch (e) {
                    case "data":
                        this.selectpicker.main.data = this.selectpicker.current.data = m;
                        break;
                    case "load":
                        Array.prototype.push.apply(this.selectpicker.main.data, m), this.selectpicker.current.data = this.selectpicker.main.data;
                        break;
                    case "search":
                        Array.prototype.push.apply(this.selectpicker.search.data, m)
                }
                return m
            },
            buildList: function(e, t) {
                var n = this,
                    i = t ? this.selectpicker.search.data : this.selectpicker.main.data,
                    s = [],
                    o = 0;

                function l(e, t) {
                    var i, s = 0;
                    switch (t.type) {
                        case "divider":
                            i = Z.li(!1, G.DIVIDER, t.optID ? t.optID + "div" : void 0);
                            break;
                        case "option":
                            (i = Z.li(Z.a(Z.text.call(n, t), t.optionClass, t.inlineStyle), "", t.optID)).firstChild && (i.firstChild.id = n.selectId + "-" + t.index);
                            break;
                        case "optgroup-label":
                            i = Z.li(Z.label.call(n, t), "dropdown-header" + t.optgroupClass, t.optID)
                    }
                    t.element = i, e.push(i), t.display && (s += t.display.length), t.subtext && (s += t.subtext.length), t.icon && (s += 1), o < s && (o = s, n.selectpicker.view.widestOption = e[e.length - 1])
                }!n.options.showTick && !n.multiple || K.checkMark.parentNode || (K.checkMark.className = this.options.iconBase + " " + n.options.tickIcon + " check-mark", K.a.appendChild(K.checkMark));
                for (var r = e || 0, a = i.length, c = r; c < a; c++) {
                    l(s, i[c])
                }
                e ? t ? Array.prototype.push.apply(this.selectpicker.search.elements, s) : (Array.prototype.push.apply(this.selectpicker.main.elements, s), this.selectpicker.current.elements = this.selectpicker.main.elements) : t ? this.selectpicker.search.elements = s : this.selectpicker.main.elements = this.selectpicker.current.elements = s
            },
            findLis: function() {
                return this.$menuInner.find(".inner > li")
            },
            render: function(e) {
                var t, i = this,
                    s = this.$element[0],
                    n = this.setPlaceholder() && 0 === s.selectedIndex,
                    o = A.call(this),
                    l = o.length,
                    r = z.call(this, o),
                    a = this.$button[0],
                    c = a.querySelector(".filter-option-inner-inner"),
                    d = document.createTextNode(this.options.multipleSeparator),
                    h = K.fragment.cloneNode(!1),
                    p = !1;
                if (this.options.source.data && e && (o.map(function e(t) {
                        t.selected ? i.createOption(t, !0) : t.children && t.children.length && t.children.map(e)
                    }), s.appendChild(this.selectpicker.main.optionQueue), n = n && 0 === s.selectedIndex), a.classList.toggle("bs-placeholder", i.multiple ? !l : !r && 0 !== r), i.multiple || 1 !== o.length || (i.selectpicker.view.displayedValue = r), "static" === this.options.selectedTextFormat) h = Z.text.call(this, {
                    text: this.options.placeholder
                }, !0);
                else if (!1 === (this.multiple && -1 !== this.options.selectedTextFormat.indexOf("count") && 1 < l && (1 < (t = this.options.selectedTextFormat.split(">")).length && l > t[1] || 1 === t.length && 2 <= l))) {
                    if (!n) {
                        for (var u = 0; u < l && u < 50; u++) {
                            var f = o[u],
                                m = {};
                            f && (this.multiple && 0 < u && h.appendChild(d.cloneNode(!1)), f.title ? m.text = f.title : f.content && i.options.showContent ? (m.content = f.content.toString(), p = !0) : (i.options.showIcon && (m.icon = f.icon), i.options.showSubtext && !i.multiple && f.subtext && (m.subtext = " " + f.subtext), m.text = f.text.trim()), h.appendChild(Z.text.call(this, m, !0)))
                        }
                        49 < l && h.appendChild(document.createTextNode("..."))
                    }
                } else {
                    var v = ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])';
                    this.options.hideDisabled && (v += ":not(:disabled)");
                    var g = this.$element[0].querySelectorAll("select > option" + v + ", optgroup" + v + " option" + v).length,
                        b = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(l, g) : this.options.countSelectedText;
                    h = Z.text.call(this, {
                        text: b.replace("{0}", l.toString()).replace("{1}", g.toString())
                    }, !0)
                }
                if (h.childNodes.length || (h = Z.text.call(this, {
                        text: this.options.placeholder ? this.options.placeholder : this.options.noneSelectedText
                    }, !0)), a.title = h.textContent.replace(/<[^>]*>?/g, "").trim(), this.options.sanitize && p && P([h], i.options.whiteList, i.options.sanitizeFn), c.innerHTML = "", c.appendChild(h), j.major < 4 && this.$newElement[0].classList.contains("bs3-has-addon")) {
                    var w = a.querySelector(".filter-expand"),
                        I = c.cloneNode(!0);
                    I.className = "filter-expand", w ? a.replaceChild(I, w) : a.appendChild(I)
                }
                this.$element.trigger("rendered" + F)
            },
            setStyle: function(e, t) {
                var i, s = this.$button[0],
                    n = this.$newElement[0],
                    o = this.options.style.trim();
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, "")), j.major < 4 && (n.classList.add("bs3"), n.parentNode.classList && n.parentNode.classList.contains("input-group") && (n.previousElementSibling || n.nextElementSibling) && (n.previousElementSibling || n.nextElementSibling).classList.contains("input-group-addon") && n.classList.add("bs3-has-addon")), i = e ? e.trim() : o, "add" == t ? i && s.classList.add.apply(s.classList, i.split(" ")) : "remove" == t ? i && s.classList.remove.apply(s.classList, i.split(" ")) : (o && s.classList.remove.apply(s.classList, o.split(" ")), i && s.classList.add.apply(s.classList, i.split(" ")))
            },
            liHeight: function(e) {
                if (e || !1 !== this.options.size && !Object.keys(this.sizeInfo).length) {
                    var t, i = K.div.cloneNode(!1),
                        s = K.div.cloneNode(!1),
                        n = K.div.cloneNode(!1),
                        o = document.createElement("ul"),
                        l = K.li.cloneNode(!1),
                        r = K.li.cloneNode(!1),
                        a = K.a.cloneNode(!1),
                        c = K.span.cloneNode(!1),
                        d = this.options.header && 0 < this.$menu.find("." + G.POPOVERHEADER).length ? this.$menu.find("." + G.POPOVERHEADER)[0].cloneNode(!0) : null,
                        h = this.options.liveSearch ? K.div.cloneNode(!1) : null,
                        p = this.options.actionsBox && this.multiple && 0 < this.$menu.find(".bs-actionsbox").length ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                        u = this.options.doneButton && this.multiple && 0 < this.$menu.find(".bs-donebutton").length ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null,
                        f = this.$element[0].options[0];
                    if (this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth, c.className = "text", a.className = "dropdown-item " + (f ? f.className : ""), i.className = this.$menu[0].parentNode.className + " " + G.SHOW, i.style.width = 0, "auto" === this.options.width && (s.style.minWidth = 0), s.className = G.MENU + " " + G.SHOW, n.className = "inner " + G.SHOW, o.className = G.MENU + " inner " + ("4" <= j.major ? G.SHOW : ""), l.className = G.DIVIDER, r.className = "dropdown-header", c.appendChild(document.createTextNode("\u200b")), this.selectpicker.current.data.length)
                        for (var m = 0; m < this.selectpicker.current.data.length; m++) {
                            var v = this.selectpicker.current.data[m];
                            if ("option" === v.type) {
                                t = v.element;
                                break
                            }
                        } else t = K.li.cloneNode(!1), a.appendChild(c), t.appendChild(a);
                    if (r.appendChild(c.cloneNode(!0)), this.selectpicker.view.widestOption && o.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)), o.appendChild(t), o.appendChild(l), o.appendChild(r), d && s.appendChild(d), h) {
                        var g = document.createElement("input");
                        h.className = "bs-searchbox", g.className = "form-control", h.appendChild(g), s.appendChild(h)
                    }
                    p && s.appendChild(p), n.appendChild(o), s.appendChild(n), u && s.appendChild(u), i.appendChild(s), document.body.appendChild(i);
                    var b, w = t.offsetHeight,
                        I = r ? r.offsetHeight : 0,
                        x = d ? d.offsetHeight : 0,
                        k = h ? h.offsetHeight : 0,
                        y = p ? p.offsetHeight : 0,
                        $ = u ? u.offsetHeight : 0,
                        S = T(l).outerHeight(!0),
                        E = window.getComputedStyle(s),
                        C = s.offsetWidth,
                        O = {
                            vert: L(E.paddingTop) + L(E.paddingBottom) + L(E.borderTopWidth) + L(E.borderBottomWidth),
                            horiz: L(E.paddingLeft) + L(E.paddingRight) + L(E.borderLeftWidth) + L(E.borderRightWidth)
                        },
                        A = {
                            vert: O.vert + L(E.marginTop) + L(E.marginBottom) + 2,
                            horiz: O.horiz + L(E.marginLeft) + L(E.marginRight) + 2
                        };
                    n.style.overflowY = "scroll", b = s.offsetWidth - C, document.body.removeChild(i), this.sizeInfo.liHeight = w, this.sizeInfo.dropdownHeaderHeight = I, this.sizeInfo.headerHeight = x, this.sizeInfo.searchHeight = k, this.sizeInfo.actionsHeight = y, this.sizeInfo.doneButtonHeight = $, this.sizeInfo.dividerHeight = S, this.sizeInfo.menuPadding = O, this.sizeInfo.menuExtras = A, this.sizeInfo.menuWidth = C, this.sizeInfo.menuInnerInnerWidth = C - O.horiz, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth, this.sizeInfo.scrollBarWidth = b, this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight, this.setPositionData()
                }
            },
            getSelectPosition: function() {
                var e, t = T(window),
                    i = this.$newElement.offset(),
                    s = T(this.options.container);
                this.options.container && s.length && !s.is("body") ? ((e = s.offset()).top += parseInt(s.css("borderTopWidth")), e.left += parseInt(s.css("borderLeftWidth"))) : e = {
                    top: 0,
                    left: 0
                };
                var n = this.options.windowPadding;
                this.sizeInfo.selectOffsetTop = i.top - e.top - t.scrollTop(), this.sizeInfo.selectOffsetBot = t.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo.selectHeight - e.top - n[2], this.sizeInfo.selectOffsetLeft = i.left - e.left - t.scrollLeft(), this.sizeInfo.selectOffsetRight = t.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo.selectWidth - e.left - n[1], this.sizeInfo.selectOffsetTop -= n[0], this.sizeInfo.selectOffsetLeft -= n[3]
            },
            setMenuSize: function(e) {
                this.getSelectPosition();
                var t, i, s, n, o, l, r, a, c = this.sizeInfo.selectWidth,
                    d = this.sizeInfo.liHeight,
                    h = this.sizeInfo.headerHeight,
                    p = this.sizeInfo.searchHeight,
                    u = this.sizeInfo.actionsHeight,
                    f = this.sizeInfo.doneButtonHeight,
                    m = this.sizeInfo.dividerHeight,
                    v = this.sizeInfo.menuPadding,
                    g = 0;
                if (this.options.dropupAuto && (r = d * this.selectpicker.current.data.length + v.vert, a = this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && r + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot, !0 === this.selectpicker.isSearching && (a = this.selectpicker.dropup), this.$newElement.toggleClass(G.DROPUP, a), this.selectpicker.dropup = a), "auto" === this.options.size) n = 3 < this.selectpicker.current.data.length ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2 : 0, i = this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert, s = n + h + p + u + f, l = Math.max(n - v.vert, 0), this.$newElement.hasClass(G.DROPUP) && (i = this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert), t = (o = i) - h - p - u - f - v.vert;
                else if (this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size) {
                    for (var b = 0; b < this.options.size; b++) "divider" === this.selectpicker.current.data[b].type && g++;
                    t = (i = d * this.options.size + g * m + v.vert) - v.vert, o = i + h + p + u + f, s = l = ""
                }
                this.$menu.css({
                    "max-height": o + "px",
                    overflow: "hidden",
                    "min-height": s + "px"
                }), this.$menuInner.css({
                    "max-height": t + "px",
                    "overflow-y": "auto",
                    "min-height": l + "px"
                }), this.sizeInfo.menuInnerHeight = Math.max(t, 1), this.selectpicker.current.data.length && this.selectpicker.current.data[this.selectpicker.current.data.length - 1].position > this.sizeInfo.menuInnerHeight && (this.sizeInfo.hasScrollBar = !0, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth), "auto" === this.options.dropdownAlignRight && this.$menu.toggleClass(G.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < this.sizeInfo.totalMenuWidth - c), this.dropdown && this.dropdown._popper && this.dropdown._popper.update()
            },
            setSize: function(e) {
                if (this.liHeight(e), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size) {
                    var t = this,
                        i = T(window);
                    this.setMenuSize(), this.options.liveSearch && this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize", function() {
                        return t.setMenuSize()
                    }), "auto" === this.options.size ? i.off("resize" + F + "." + this.selectId + ".setMenuSize scroll" + F + "." + this.selectId + ".setMenuSize").on("resize" + F + "." + this.selectId + ".setMenuSize scroll" + F + "." + this.selectId + ".setMenuSize", function() {
                        return t.setMenuSize()
                    }) : this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size && i.off("resize" + F + "." + this.selectId + ".setMenuSize scroll" + F + "." + this.selectId + ".setMenuSize")
                }
                this.createView(!1, !0, e)
            },
            setWidth: function() {
                var i = this;
                "auto" === this.options.width ? requestAnimationFrame(function() {
                    i.$menu.css("min-width", "0"), i.$element.on("loaded" + F, function() {
                        i.liHeight(), i.setMenuSize();
                        var e = i.$newElement.clone().appendTo("body"),
                            t = e.css("width", "auto").children("button").outerWidth();
                        e.remove(), i.sizeInfo.selectWidth = Math.max(i.sizeInfo.totalMenuWidth, t), i.$newElement.css("width", i.sizeInfo.selectWidth + "px")
                    })
                }) : "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", "")), this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement[0].classList.remove("fit-width")
            },
            selectPosition: function() {
                this.$bsContainer = T('<div class="bs-container" />');

                function e(e) {
                    var t = {},
                        i = l.options.display || !!T.fn.dropdown.Constructor.Default && T.fn.dropdown.Constructor.Default.display;
                    l.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass(G.DROPUP, e.hasClass(G.DROPUP)), s = e.offset(), r.is("body") ? n = {
                        top: 0,
                        left: 0
                    } : ((n = r.offset()).top += parseInt(r.css("borderTopWidth")) - r.scrollTop(), n.left += parseInt(r.css("borderLeftWidth")) - r.scrollLeft()), o = e.hasClass(G.DROPUP) ? 0 : e[0].offsetHeight, (j.major < 4 || "static" === i) && (t.top = s.top - n.top + o, t.left = s.left - n.left), t.width = e[0].offsetWidth, l.$bsContainer.css(t)
                }
                var s, n, o, l = this,
                    r = T(this.options.container);
                this.$button.on("click.bs.dropdown.data-api", function() {
                    l.isDisabled() || (e(l.$newElement), l.$bsContainer.appendTo(l.options.container).toggleClass(G.SHOW, !l.$button.hasClass(G.SHOW)).append(l.$menu))
                }), T(window).off("resize" + F + "." + this.selectId + " scroll" + F + "." + this.selectId).on("resize" + F + "." + this.selectId + " scroll" + F + "." + this.selectId, function() {
                    l.$newElement.hasClass(G.SHOW) && e(l.$newElement)
                }), this.$element.on("hide" + F, function() {
                    l.$menu.data("height", l.$menu.height()), l.$bsContainer.detach()
                })
            },
            createOption: function(e, t) {
                var i = e.option ? e.option : e;
                if (i && 1 !== i.nodeType) {
                    var s = (t ? K.selectedOption : K.option).cloneNode(!0);
                    void 0 !== i.value && (s.value = i.value), s.textContent = i.text, s.selected = !0, void 0 !== i.liIndex ? s.liIndex = i.liIndex : t || (s.liIndex = e.index), e.option = s, this.selectpicker.main.optionQueue.appendChild(s)
                }
            },
            setOptionStatus: function(e) {
                var t = this;
                if (t.noScroll = !1, t.selectpicker.view.visibleElements && t.selectpicker.view.visibleElements.length) {
                    for (var i = 0; i < t.selectpicker.view.visibleElements.length; i++) {
                        var s = t.selectpicker.current.data[i + t.selectpicker.view.position0];
                        s.option && (!0 !== e && t.setDisabled(s), t.setSelected(s))
                    }
                    this.options.source.data && this.$element[0].appendChild(this.selectpicker.main.optionQueue)
                }
            },
            setSelected: function(e, t) {
                t = void 0 === t ? e.selected : t;
                var i, s, n = e.index,
                    o = e.element,
                    l = void 0 !== this.activeIndex,
                    r = this.activeIndex === n || t && !this.multiple && !l;
                o && (void 0 !== t && (e.selected = t, e.option && (e.option.selected = t)), t && this.options.source.data && this.createOption(e, !1), s = o.firstChild, t && (this.selectedIndex = n), o.classList.toggle("selected", t), r ? (this.focusItem(o, e), this.selectpicker.view.currentActive = o, this.activeIndex = n) : this.defocusItem(o), s && (s.classList.toggle("selected", t), t ? s.setAttribute("aria-selected", !0) : this.multiple ? s.setAttribute("aria-selected", !1) : s.removeAttribute("aria-selected")), r || l || !t || void 0 === this.prevActiveIndex || (i = this.selectpicker.main.elements[this.prevActiveIndex], this.defocusItem(i)))
            },
            setDisabled: function(e) {
                var t, i = e.disabled,
                    s = e.element;
                s && (t = s.firstChild, s.classList.toggle(G.DISABLED, i), t && ("4" <= j.major && t.classList.toggle(G.DISABLED, i), i ? (t.setAttribute("aria-disabled", i), t.setAttribute("tabindex", -1)) : (t.removeAttribute("aria-disabled"), t.setAttribute("tabindex", 0))))
            },
            isDisabled: function() {
                return this.$element[0].disabled
            },
            checkDisabled: function() {
                this.isDisabled() ? (this.$newElement[0].classList.add(G.DISABLED), this.$button.addClass(G.DISABLED).attr("aria-disabled", !0)) : this.$button[0].classList.contains(G.DISABLED) && (this.$newElement[0].classList.remove(G.DISABLED), this.$button.removeClass(G.DISABLED).attr("aria-disabled", !1))
            },
            clickListener: function() {
                var O = this,
                    t = T(document);

                function e() {
                    O.options.liveSearch ? O.$searchbox.trigger("focus") : O.$menuInner.trigger("focus")
                }

                function i() {
                    O.dropdown && O.dropdown._popper && O.dropdown._popper.state ? e() : requestAnimationFrame(i)
                }
                t.data("spaceSelect", !1), this.$button.on("keyup", function(e) {
                    /(32)/.test(e.keyCode.toString(10)) && t.data("spaceSelect") && (e.preventDefault(), t.data("spaceSelect", !1))
                }), this.$newElement.on("show.bs.dropdown", function() {
                    O.dropdown || "4" !== j.major || (O.dropdown = O.$button.data("bs.dropdown"), O.dropdown._menu = O.$menu[0])
                }), this.$button.on("click.bs.dropdown.data-api", function(e) {
                    if (O.options.allowClear) {
                        var t = e.target,
                            i = O.$clearButton[0];
                        /MSIE|Trident/.test(window.navigator.userAgent) && (t = document.elementFromPoint(e.clientX, e.clientY)), t !== i && t.parentElement !== i || (e.stopImmediatePropagation(), function() {
                            if (O.multiple) O.deselectAll();
                            else {
                                var e = O.$element[0],
                                    t = e.value,
                                    i = e.selectedIndex,
                                    s = e.options[i],
                                    n = !!s && O.selectpicker.main.data[s.liIndex];
                                n && O.setSelected(n, !1), e.selectedIndex = 0, D = [i, !1, t], O.$element.triggerNative("change")
                            }
                            O.$newElement.hasClass(G.SHOW) && (O.options.liveSearch && O.$searchbox.trigger("focus"), O.createView(!1))
                        }())
                    }
                    O.$newElement.hasClass(G.SHOW) || O.setSize()
                }), this.$element.on("shown" + F, function() {
                    O.$menuInner[0].scrollTop !== O.selectpicker.view.scrollTop && (O.$menuInner[0].scrollTop = O.selectpicker.view.scrollTop), 3 < j.major ? requestAnimationFrame(i) : e()
                }), this.$menuInner.on("mouseenter", "li a", function(e) {
                    var t = this.parentElement,
                        i = O.isVirtual() ? O.selectpicker.view.position0 : 0,
                        s = Array.prototype.indexOf.call(t.parentElement.children, t),
                        n = O.selectpicker.current.data[s + i];
                    O.focusItem(t, n, !0)
                }), this.$menuInner.on("click", "li a", function(e, t) {
                    var i = T(this),
                        s = O.$element[0],
                        n = O.isVirtual() ? O.selectpicker.view.position0 : 0,
                        o = O.selectpicker.current.data[i.parent().index() + n],
                        l = o.index,
                        r = z.call(O),
                        a = s.selectedIndex,
                        c = s.options[a],
                        d = !!c && O.selectpicker.main.data[c.liIndex],
                        h = !0;
                    if (O.multiple && 1 !== O.options.maxOptions && e.stopPropagation(), e.preventDefault(), !O.isDisabled() && !i.parent().hasClass(G.DISABLED)) {
                        var p = o.option,
                            u = T(p),
                            f = p.selected,
                            m = u.parent("optgroup"),
                            v = m.find("option"),
                            g = O.options.maxOptions,
                            b = m.data("maxOptions") || !1;
                        if (l === O.activeIndex && (t = !0), t || (O.prevActiveIndex = O.activeIndex, O.activeIndex = void 0), O.multiple) {
                            if (O.setSelected(o, !f), O.focusedParent.focus(), !1 !== g || !1 !== b) {
                                var w = g < A.call(O).length,
                                    I = b < m.find("option:selected").length;
                                if (g && w || b && I)
                                    if (g && 1 == g) s.selectedIndex = -1, p.selected = !0, O.setOptionStatus(!0);
                                    else if (b && 1 == b) {
                                    for (var x = 0; x < v.length; x++) {
                                        var k = v[x];
                                        k.selected = !1, O.setSelected(k.liIndex, !1)
                                    }
                                    p.selected = !0, O.setSelected(l, !0)
                                } else {
                                    var y = "string" == typeof O.options.maxOptionsText ? [O.options.maxOptionsText, O.options.maxOptionsText] : O.options.maxOptionsText,
                                        $ = "function" == typeof y ? y(g, b) : y,
                                        S = $[0].replace("{n}", g),
                                        E = $[1].replace("{n}", b),
                                        C = T('<div class="notify"></div>');
                                    $[2] && (S = S.replace("{var}", $[2][1 < g ? 0 : 1]), E = E.replace("{var}", $[2][1 < b ? 0 : 1])), p.selected = !1, O.$menu.append(C), g && w && (C.append(T("<div>" + S + "</div>")), h = !1, O.$element.trigger("maxReached" + F)), b && I && (C.append(T("<div>" + E + "</div>")), h = !1, O.$element.trigger("maxReachedGrp" + F)), setTimeout(function() {
                                        O.setSelected(l, !1)
                                    }, 10), C[0].classList.add("fadeOut"), setTimeout(function() {
                                        C.remove()
                                    }, 1050)
                                }
                            }
                        } else d && O.setSelected(d, !1), O.setSelected(o, !0);
                        O.options.source.data && O.$element[0].appendChild(O.selectpicker.main.optionQueue), !O.multiple || O.multiple && 1 === O.options.maxOptions ? O.$button.trigger("focus") : O.options.liveSearch && O.$searchbox.trigger("focus"), h && (!O.multiple && a === s.selectedIndex || (D = [p.index, u.prop("selected"), r], O.$element.triggerNative("change")))
                    }
                }), this.$menu.on("click", "li." + G.DISABLED + " a, ." + G.POPOVERHEADER + ", ." + G.POPOVERHEADER + " :not(.close)", function(e) {
                    e.currentTarget == this && (e.preventDefault(), e.stopPropagation(), O.options.liveSearch && !T(e.target).hasClass("close") ? O.$searchbox.trigger("focus") : O.$button.trigger("focus"))
                }), this.$menuInner.on("click", ".divider, .dropdown-header", function(e) {
                    e.preventDefault(), e.stopPropagation(), O.options.liveSearch ? O.$searchbox.trigger("focus") : O.$button.trigger("focus")
                }), this.$menu.on("click", "." + G.POPOVERHEADER + " .close", function() {
                    O.$button.trigger("click")
                }), this.$searchbox.on("click", function(e) {
                    e.stopPropagation()
                }), this.$menu.on("click", ".actions-btn", function(e) {
                    O.options.liveSearch ? O.$searchbox.trigger("focus") : O.$button.trigger("focus"), e.preventDefault(), e.stopPropagation(), T(this).hasClass("bs-select-all") ? O.selectAll() : O.deselectAll()
                }), this.$button.on("focus" + F, function(e) {
                    var t = O.$element[0].getAttribute("tabindex");
                    void 0 !== t && e.originalEvent && e.originalEvent.isTrusted && (this.setAttribute("tabindex", t), O.$element[0].setAttribute("tabindex", -1), O.selectpicker.view.tabindex = t)
                }).on("blur" + F, function(e) {
                    void 0 !== O.selectpicker.view.tabindex && e.originalEvent && e.originalEvent.isTrusted && (O.$element[0].setAttribute("tabindex", O.selectpicker.view.tabindex), this.setAttribute("tabindex", -1), O.selectpicker.view.tabindex = void 0)
                }), this.$element.on("change" + F, function() {
                    O.render(), O.$element.trigger("changed" + F, D), D = null
                }).on("focus" + F, function() {
                    O.options.mobile || O.$button[0].focus()
                })
            },
            liveSearchListener: function() {
                var u = this;
                this.$button.on("click.bs.dropdown.data-api", function() {
                    u.$searchbox.val() && (u.$searchbox.val(""), u.selectpicker.search.previousValue = void 0)
                }), this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api", function(e) {
                    e.stopPropagation()
                }), this.$searchbox.on("input propertychange", function() {
                    var t = u.$searchbox[0].value;
                    if (u.selectpicker.search.elements = [], u.selectpicker.search.data = [], t)
                        if (u.options.source.search) u.fetchData(function(e) {
                            u.render(), u.buildList(void 0, !0), u.createView(!0), X.call(u, e, t)
                        }, "search", 0, t);
                        else {
                            var e = [],
                                i = t.toUpperCase(),
                                s = {},
                                n = [],
                                o = u._searchStyle(),
                                l = u.options.liveSearchNormalize;
                            l && (i = I(i));
                            for (var r = 0; r < u.selectpicker.main.data.length; r++) {
                                var a = u.selectpicker.main.data[r];
                                s[r] || (s[r] = k(a, i, o, l)), s[r] && void 0 !== a.headerIndex && -1 === n.indexOf(a.headerIndex) && (0 < a.headerIndex && (s[a.headerIndex - 1] = !0, n.push(a.headerIndex - 1)), s[a.headerIndex] = !0, n.push(a.headerIndex), s[a.lastIndex + 1] = !0), s[r] && "optgroup-label" !== a.type && n.push(r)
                            }
                            r = 0;
                            for (var c = n.length; r < c; r++) {
                                var d = n[r],
                                    h = n[r - 1],
                                    p = (a = u.selectpicker.main.data[d], u.selectpicker.main.data[h]);
                                ("divider" !== a.type || "divider" === a.type && p && "divider" !== p.type && c - 1 !== r) && (u.selectpicker.search.data.push(a), e.push(u.selectpicker.main.elements[d]))
                            }
                            u.activeIndex = void 0, u.noScroll = !0, u.$menuInner.scrollTop(0), u.selectpicker.search.elements = e, u.createView(!0), X.call(u, e, t)
                        }
                    else u.selectpicker.search.previousValue && (u.$menuInner.scrollTop(0), u.createView(!1));
                    u.selectpicker.search.previousValue = t
                })
            },
            _searchStyle: function() {
                return this.options.liveSearchStyle || "contains"
            },
            val: function(t) {
                var e = this.$element[0];
                if (void 0 === t) return this.$element.val();
                var i = A.call(this),
                    s = z.call(this, i);
                D = [null, null, s], Array.isArray(t) || (t = [t]), t.map(String);
                for (var n = 0; n < i.length; n++) {
                    var o = i[n];
                    o && -1 === t.indexOf(String(o.value)) && this.setSelected(o, !1)
                }
                if (this.selectpicker.main.data.filter(function(e) {
                        return -1 !== t.indexOf(String(e.value)) && (this.setSelected(e, !0), !0)
                    }, this), this.options.source.data && e.appendChild(this.selectpicker.main.optionQueue), this.$element.trigger("changed" + F, D), this.$newElement.hasClass(G.SHOW))
                    if (this.multiple) this.setOptionStatus(!0);
                    else {
                        var l = (e.options[e.selectedIndex] || {}).liIndex;
                        "number" == typeof l && (this.setSelected(this.selectedIndex, !1), this.setSelected(l, !0))
                    } return this.render(), D = null, this.$element
            },
            changeAll: function(e) {
                if (this.multiple) {
                    void 0 === e && (e = !0);
                    var t = this.$element[0],
                        i = 0,
                        s = 0,
                        n = z.call(this);
                    t.classList.add("bs-select-hidden");
                    for (var o = 0, l = this.selectpicker.current.data, r = l.length; o < r; o++) {
                        var a = l[o],
                            c = a.option;
                        c && !a.disabled && "divider" !== a.type && (a.selected && i++, c.selected = e, !0 === (a.selected = e) && s++)
                    }
                    t.classList.remove("bs-select-hidden"), i !== s && (this.setOptionStatus(), D = [null, null, n], this.$element.triggerNative("change"))
                }
            },
            selectAll: function() {
                return this.changeAll(!0)
            },
            deselectAll: function() {
                return this.changeAll(!1)
            },
            toggle: function(e, t) {
                var i, s = void 0 === t;
                (e = e || window.event) && e.stopPropagation(), !1 === s && (i = this.$newElement[0].classList.contains(G.SHOW), s = !0 === t && !1 === i || !1 === t && !0 === i), s && this.$button.trigger("click.bs.dropdown.data-api")
            },
            open: function(e) {
                this.toggle(e, !0)
            },
            close: function(e) {
                this.toggle(e, !1)
            },
            keydown: function(e) {
                var t, i, s, n, o, l = T(this),
                    r = l.hasClass("dropdown-toggle"),
                    a = (r ? l.closest(".dropdown") : l.closest(q.MENU)).data("this"),
                    c = a.findLis(),
                    d = !1,
                    h = e.which === B && !r && !a.options.selectOnTab,
                    p = Q.test(e.which) || h,
                    u = a.$menuInner[0].scrollTop,
                    f = !0 === a.isVirtual() ? a.selectpicker.view.position0 : 0;
                if (!(112 <= e.which && e.which <= 123))
                    if (!(i = a.$menu.hasClass(G.SHOW)) && (p || 48 <= e.which && e.which <= 57 || 96 <= e.which && e.which <= 105 || 65 <= e.which && e.which <= 90) && (a.$button.trigger("click.bs.dropdown.data-api"), a.options.liveSearch)) a.$searchbox.trigger("focus");
                    else {
                        if (e.which === N && i && (e.preventDefault(), a.$button.trigger("click.bs.dropdown.data-api").trigger("focus")), p) {
                            if (!c.length) return; - 1 !== (t = (s = a.selectpicker.main.elements[a.activeIndex]) ? Array.prototype.indexOf.call(s.parentElement.children, s) : -1) && a.defocusItem(s), e.which === M ? (-1 !== t && t--, t + f < 0 && (t += c.length), a.selectpicker.view.canHighlight[t + f] || -1 === (t = a.selectpicker.view.canHighlight.slice(0, t + f).lastIndexOf(!0) - f) && (t = c.length - 1)) : e.which !== R && !h || (++t + f >= a.selectpicker.view.canHighlight.length && (t = a.selectpicker.view.firstHighlightIndex), a.selectpicker.view.canHighlight[t + f] || (t = t + 1 + a.selectpicker.view.canHighlight.slice(t + f + 1).indexOf(!0))), e.preventDefault();
                            var m = f + t;
                            e.which === M ? 0 === f && t === c.length - 1 ? (a.$menuInner[0].scrollTop = a.$menuInner[0].scrollHeight, m = a.selectpicker.current.elements.length - 1) : d = (o = (n = a.selectpicker.current.data[m]).position - n.height) < u : e.which !== R && !h || (t === a.selectpicker.view.firstHighlightIndex ? (a.$menuInner[0].scrollTop = 0, m = a.selectpicker.view.firstHighlightIndex) : d = u < (o = (n = a.selectpicker.current.data[m]).position - a.sizeInfo.menuInnerHeight)), s = a.selectpicker.current.elements[m], a.activeIndex = a.selectpicker.current.data[m].index, a.focusItem(s), a.selectpicker.view.currentActive = s, d && (a.$menuInner[0].scrollTop = o), a.options.liveSearch ? a.$searchbox.trigger("focus") : l.trigger("focus")
                        } else if (!l.is("input") && !Y.test(e.which) || e.which === W && a.selectpicker.keydown.keyHistory) {
                            var v, g, b = [];
                            e.preventDefault(), a.selectpicker.keydown.keyHistory += O[e.which], a.selectpicker.keydown.resetKeyHistory.cancel && clearTimeout(a.selectpicker.keydown.resetKeyHistory.cancel), a.selectpicker.keydown.resetKeyHistory.cancel = a.selectpicker.keydown.resetKeyHistory.start(), g = a.selectpicker.keydown.keyHistory, /^(.)\1+$/.test(g) && (g = g.charAt(0));
                            for (var w = 0; w < a.selectpicker.current.data.length; w++) {
                                var I = a.selectpicker.current.data[w];
                                k(I, g, "startsWith", !0) && a.selectpicker.view.canHighlight[w] && b.push(I.index)
                            }
                            if (b.length) {
                                var x = 0;
                                c.removeClass("active").find("a").removeClass("active"), 1 === g.length && (-1 === (x = b.indexOf(a.activeIndex)) || x === b.length - 1 ? x = 0 : x++), v = b[x], d = 0 < u - (n = a.selectpicker.main.data[v]).position ? (o = n.position - n.height, !0) : (o = n.position - a.sizeInfo.menuInnerHeight, n.position > u + a.sizeInfo.menuInnerHeight), s = a.selectpicker.main.elements[v], a.activeIndex = b[x], a.focusItem(s), s && s.firstChild.focus(), d && (a.$menuInner[0].scrollTop = o), l.trigger("focus")
                            }
                        }
                        i && (e.which === W && !a.selectpicker.keydown.keyHistory || e.which === H || e.which === B && a.options.selectOnTab) && (e.which !== W && e.preventDefault(), a.options.liveSearch && e.which === W || (a.$menuInner.find(".active a").trigger("click", !0), l.trigger("focus"), a.options.liveSearch || (e.preventDefault(), T(document).data("spaceSelect", !0))))
                    }
            },
            mobile: function() {
                this.options.mobile = !0, this.$element[0].classList.add("mobile-device")
            },
            refresh: function() {
                var e = this,
                    t = T.extend({}, this.options, h(this.$element), this.$element.data());
                this.options = t, this.options.source.data ? (this.render(), this.buildList()) : this.fetchData(function() {
                    e.render(), e.buildList()
                }), this.checkDisabled(), this.setStyle(), this.setWidth(), this.setSize(!0), this.$element.trigger("refreshed" + F)
            },
            hide: function() {
                this.$newElement.hide()
            },
            show: function() {
                this.$newElement.show()
            },
            remove: function() {
                this.$newElement.remove(), this.$element.remove()
            },
            destroy: function() {
                this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.selectpicker.view.titleOption && this.selectpicker.view.titleOption.parentNode && this.selectpicker.view.titleOption.parentNode.removeChild(this.selectpicker.view.titleOption), this.$element.off(F).removeData("selectpicker").removeClass("bs-select-hidden selectpicker"), T(window).off(F + "." + this.selectId)
            }
        };
        var se = T.fn.selectpicker;

        function ne() {
            return j.major < 5 ? T.fn.dropdown ? (T.fn.dropdown.Constructor._dataApiKeydownHandler || T.fn.dropdown.Constructor.prototype.keydown).apply(this, arguments) : void 0 : U.dataApiKeydownHandler
        }
        T.fn.selectpicker = ie, T.fn.selectpicker.Constructor = te, T.fn.selectpicker.noConflict = function() {
            return T.fn.selectpicker = se, this
        }, T(document).off("keydown.bs.dropdown.data-api").on("keydown.bs.dropdown.data-api", ":not(.bootstrap-select) > [" + q.DATA_TOGGLE + "]", ne).on("keydown.bs.dropdown.data-api", ":not(.bootstrap-select) > .dropdown-menu", ne).on("keydown" + F, ".bootstrap-select [" + q.DATA_TOGGLE + '], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', te.prototype.keydown).on("focusin.modal", ".bootstrap-select [" + q.DATA_TOGGLE + '], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', function(e) {
            e.stopPropagation()
        }), document.addEventListener("DOMContentLoaded", function() {
            T(".selectpicker").each(function() {
                var e = T(this);
                ie.call(e, e.data())
            })
        })
    }(e)
});
//# sourceMappingURL=bootstrap-select.min.js.map