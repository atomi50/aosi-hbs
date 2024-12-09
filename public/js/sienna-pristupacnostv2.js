(() => {
  "use strict";
  var t = function () {
      return (
        (t =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
              for (var a in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return t;
          }),
        t.apply(this, arguments)
      );
    },
    e = {},
    n = "asw";
  function i(n) {
    var i = t(t({}, e), { states: t(t({}, e.states), n) });
    return a(i), i;
  }
  function a(i) {
    (e = t(t({}, e), i)),
      (function (t, e, n) {
        var i = new Date();
        i.setTime(i.getTime() + NaN);
        var a = "expires=" + i.toUTCString();
        document.cookie = t + "=" + e + ";" + a + ";path=/";
      })(n, JSON.stringify(e));
  }
  function o(t) {
    var n;
    return null === (n = null == e ? void 0 : e.states) || void 0 === n
      ? void 0
      : n[t];
  }
  function s(t) {
    if ((void 0 === t && (t = !0), t)) return e;
    var i = (function (t) {
      for (
        var e = t + "=",
          n = decodeURIComponent(document.cookie).split(";"),
          i = 0;
        i < n.length;
        i++
      ) {
        for (var a = n[i]; " " == a.charAt(0); ) a = a.substring(1);
        if (0 == a.indexOf(e)) return a.substring(e.length, a.length);
      }
      return "";
    })(n);
    return i && (e = JSON.parse(i)), e;
  }
  function r(t) {
    void 0 === t && (t = 1),
      document
        .querySelectorAll(
          "h1,h2,h3,h4,h5,h6,p,a,dl,dt,li,ol,th,td,span,blockquote,.asw-text,label,input,select,textarea,button:not(.asw-btn),summary,small,legend,.form-text,.invalid-feedback,.CodeMirror-linenumber.CodeMirror-gutter-elt,.CodeMirror-line,.CodeMirror-search-hint"
        )
        .forEach(function (e) {
          var n;
          if (
            !e.classList.contains("material-icons") &&
            !e.classList.contains("fa")
          ) {
            var i = Number(
              null !== (n = e.getAttribute("data-asw-orgFontSize")) &&
                void 0 !== n
                ? n
                : 0
            );
            i ||
              ((i = parseInt(
                window.getComputedStyle(e).getPropertyValue("font-size")
              )),
              e.setAttribute("data-asw-orgFontSize", String(i)));
            var a = i * t;
            e.style["font-size"] = a + "px";
          }
        });
    var e = document.querySelector(".asw-amount");
    e && (e.innerText = "".concat((100 * t).toFixed(0), "%"));
  }
  function l(t) {
    var e = t.id,
      n = t.css;
    if (n) {
      var i =
        document.getElementById(e || "") || document.createElement("style");
      (i.innerHTML = n), i.id || ((i.id = e), document.head.appendChild(i));
    }
  }
  var c = ["-o-", "-ms-", "-moz-", "-webkit-", ""],
    u = ["filter"];
  function d(t) {
    var e,
      n = "";
    return (
      t &&
        ((n += null !== (e = t.css) && void 0 !== e ? e : ""),
        (n += (function (t) {
          var e = "";
          if (t) {
            var n = function (n) {
              (u.includes(n) ? c : [""]).forEach(function (i) {
                e += "".concat(i).concat(n, ":").concat(t[n], " !important;");
              });
            };
            for (var i in t) n(i);
          }
          return e;
        })(t.styles)).length &&
          t.selector &&
          (n = (function (t) {
            var e = t.selector,
              n = t.childrenSelector,
              i = t.css,
              a = "";
            return (
              (void 0 === n ? [""] : n).forEach(function (t) {
                a += "".concat(e, " ").concat(t, "{").concat(i, "}");
              }),
              a
            );
          })({
            selector: t.selector,
            childrenSelector: t.childrenSelector,
            css: n,
          }))),
      n
    );
  }
  function g(t) {
    var e,
      n = t.id,
      i = void 0 === n ? "" : n,
      a = t.enable,
      o = void 0 !== a && a,
      s = "asw-".concat(i);
    o
      ? l({ css: d(t), id: s })
      : null === (e = document.getElementById(s)) || void 0 === e || e.remove(),
      document.documentElement.classList.toggle(s, o);
  }
  var h = function (t, e, n) {
      if (n || 2 === arguments.length)
        for (var i, a = 0, o = e.length; a < o; a++)
          (!i && a in e) ||
            (i || (i = Array.prototype.slice.call(e, 0, a)), (i[a] = e[a]));
      return t.concat(i || Array.prototype.slice.call(e));
    },
    p = ["", "*:not(.material-icons,.asw-menu,.asw-menu *)"],
    m = [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      ".wsite-headline",
      ".wsite-content-title",
    ],
    v = h(
      h([], m, !0),
      [
        "img",
        "body",
        "p",
        "i",
        ".shape-fill",
        "a",
        "button:not(.asw-btn)",
        "label",
        "li",
        "ol",
        "input",
        "select",
        "textarea",
        "summary",
        "small",
        "legend",
        ".header",
        ".content-wrapper",
        ".card",
        ".navbar",
        ".footer__container-info",
        ".container",
        ".banner__visual",
        ".container-xxl",
        ".container-fluid",
        ".footer__container",
        ".form-text",
        ".invalid-feedback",
        ".CodeMirror-linenumber.CodeMirror-gutter-elt",
        ".CodeMirror-line",
        ".CodeMirror-search-hint",
        "::placeholder",
        "::file-selector-button",
      ],
      !1
    ),
    w = {
      "dark-contrast": {
        styles: {
          color: "#FFF",
          fill: "#000",
          "background-color": "#000",
          background: "#000",
        },
        childrenSelector: v,
      },
      "light-contrast": {
        styles: {
          color: "#000",
          fill: "#FFF",
          "background-color": "#FFF",
          background: "#FFF",
        },
        childrenSelector: v,
      },
      "high-contrast": { styles: { filter: "contrast(125%)" } },
      "high-saturation": { styles: { filter: "saturate(200%)" } },
      "low-saturation": { styles: { filter: "saturate(50%)" } },
      monochrome: { styles: { filter: "grayscale(100%)" } },
    },
    f = function () {
      return (
        (f =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
              for (var a in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return t;
          }),
        f.apply(this, arguments)
      );
    };
  function b() {
    var t = s().states.contrast,
      e = "",
      n = w[t];
    n && (e = d(f(f({}, n), { selector: "html.aws-filter" }))),
      l({ css: e, id: "asw-filter-style" }),
      document.documentElement.classList.toggle("aws-filter", Boolean(t));
  }
  var y = function () {
      return (
        (y =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
              for (var a in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return t;
          }),
        y.apply(this, arguments)
      );
    },
    S = {
      id: "stop-animations",
      selector: "html",
      childrenSelector: ["*"],
      styles: {
        transition: "none",
        "animation-fill-mode": "forwards",
        "animation-iteration-count": "1",
        "animation-duration": ".01s",
      },
    },
    x = function () {
      return (
        (x =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
              for (var a in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return t;
          }),
        x.apply(this, arguments)
      );
    },
    A = {
      id: "readable-font",
      selector: "html",
      childrenSelector: (function (t, e, n) {
        if (n || 2 === arguments.length)
          for (var i, a = 0, o = e.length; a < o; a++)
            (!i && a in e) ||
              (i || (i = Array.prototype.slice.call(e, 0, a)), (i[a] = e[a]));
        return t.concat(i || Array.prototype.slice.call(e));
      })(["", "*:not(.material-icons,.fa)"], v, !0),
      styles: {
        "font-family": "OpenDyslexic3,Comic Sans MS,Arial,Helvetica,sans-serif",
      },
      css: '\n        @font-face {\n            font-family: OpenDyslexic3;\n            src: url("https://website-widgets.pages.dev/fonts/OpenDyslexic3-Regular.woff") format("woff"), url("https://website-widgets.pages.dev/fonts/OpenDyslexic3-Regular.ttf") format("truetype");\n        }\n    ',
    },
    C = function () {
      return (
        (C =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
              for (var a in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return t;
          }),
        C.apply(this, arguments)
      );
    },
    L = {
      id: "big-cursor",
      selector: "body",
      childrenSelector: ["*"],
      styles: {
        cursor:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='98px' viewBox='0 0 48 48'%3E%3Cpath fill='%23E0E0E0' d='M27.8 39.7c-.1 0-.2 0-.4-.1s-.4-.3-.6-.5l-3.7-8.6-4.5 4.2c-.1.2-.3.3-.6.3-.1 0-.3 0-.4-.1-.3-.1-.6-.5-.6-.9V12c0-.4.2-.8.6-.9.1-.1.3-.1.4-.1.2 0 .5.1.7.3l16 15c.3.3.4.7.3 1.1-.1.4-.5.6-.9.7l-6.3.6 3.9 8.5c.1.2.1.5 0 .8-.1.2-.3.5-.5.6l-2.9 1.3c-.2-.2-.4-.2-.5-.2z'/%3E%3Cpath fill='%23212121' d='m18 12 16 15-7.7.7 4.5 9.8-2.9 1.3-4.3-9.9L18 34V12m0-2c-.3 0-.5.1-.8.2-.7.3-1.2 1-1.2 1.8v22c0 .8.5 1.5 1.2 1.8.3.2.6.2.8.2.5 0 1-.2 1.4-.5l3.4-3.2 3.1 7.3c.2.5.6.9 1.1 1.1.2.1.5.1.7.1.3 0 .5-.1.8-.2l2.9-1.3c.5-.2.9-.6 1.1-1.1.2-.5.2-1.1 0-1.5l-3.3-7.2 4.9-.4c.8-.1 1.5-.6 1.7-1.3.3-.7.1-1.6-.5-2.1l-16-15c-.3-.5-.8-.7-1.3-.7z'/%3E%3C/svg%3E\"),default",
      },
    },
    F = function () {
      return (
        (F =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
              for (var a in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return t;
          }),
        F.apply(this, arguments)
      );
    },
    H = {
      id: "highlight-title",
      selector: "html",
      childrenSelector: m,
      styles: { outline: "2px solid #0048ff", "outline-offset": "2px" },
    };
  const k =
    '<style>.asw-rg{position:fixed;top:0;left:0;right:0;width:100%;height:0;pointer-events:none;background-color:rgba(0,0,0,.5);z-index:1000000}</style> <div class="asw-rg asw-rg-top"></div> <div class="asw-rg asw-rg-bottom" style="top:auto;bottom:0"></div>';
  var z = function () {
      return (
        (z =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
              for (var a in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return t;
          }),
        z.apply(this, arguments)
      );
    },
    M = {
      id: "highlight-links",
      selector: "html",
      childrenSelector: ["a[href]"],
      styles: { outline: "2px solid #0048ff", "outline-offset": "2px" },
    },
    j = function () {
      return (
        (j =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
              for (var a in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return t;
          }),
        j.apply(this, arguments)
      );
    },
    O = {
      id: "letter-spacing",
      selector: "html",
      childrenSelector: p,
      styles: { "letter-spacing": "2px" },
    },
    D = function () {
      return (
        (D =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
              for (var a in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return t;
          }),
        D.apply(this, arguments)
      );
    },
    R = {
      id: "line-height",
      selector: "html",
      childrenSelector: p,
      styles: { "line-height": "3" },
    },
    T = function () {
      return (
        (T =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
              for (var a in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return t;
          }),
        T.apply(this, arguments)
      );
    },
    B = {
      id: "font-weight",
      selector: "html",
      childrenSelector: p,
      styles: { "font-weight": "700" },
    };
  function E() {
    var t,
      e = s().states;
    void 0 === (t = e["highlight-title"]) && (t = !1),
      g(F(F({}, H), { enable: t })),
      (function (t) {
        void 0 === t && (t = !1), g(z(z({}, M), { enable: t }));
      })(e["highlight-links"]),
      (function (t) {
        void 0 === t && (t = !1), g(j(j({}, O), { enable: t }));
      })(e["letter-spacing"]),
      (function (t) {
        void 0 === t && (t = !1), g(D(D({}, R), { enable: t }));
      })(e["line-height"]),
      (function (t) {
        void 0 === t && (t = !1), g(T(T({}, B), { enable: t }));
      })(e["font-weight"]),
      (function (t) {
        void 0 === t && (t = !1), g(x(x({}, A), { enable: t }));
      })(e["readable-font"]),
      (function (t) {
        void 0 === t && (t = !1);
        var e = document.querySelector(".asw-rg-container");
        if (t) {
          if (!e) {
            (e = document.createElement("div")).setAttribute(
              "class",
              "asw-rg-container"
            ),
              (e.innerHTML = k);
            var n = e.querySelector(".asw-rg-top"),
              i = e.querySelector(".asw-rg-bottom");
            (window.__asw__onScrollReadableGuide = function (t) {
              (n.style.height = t.clientY - 20 + "px"),
                (i.style.height = window.innerHeight - t.clientY - 40 + "px");
            }),
              document.addEventListener(
                "mousemove",
                window.__asw__onScrollReadableGuide,
                { passive: !1 }
              ),
              document.body.appendChild(e);
          }
        } else
          e && e.remove(),
            window.__asw__onScrollReadableGuide &&
              (document.removeEventListener(
                "mousemove",
                window.__asw__onScrollReadableGuide
              ),
              delete window.__asw__onScrollReadableGuide);
      })(e["readable-guide"]),
      (function (t) {
        void 0 === t && (t = !1), g(y(y({}, S), { enable: t }));
      })(e["stop-animations"]),
      (function (t) {
        void 0 === t && (t = !1), g(C(C({}, L), { enable: t }));
      })(e["big-cursor"]);
  }
  function G() {
    var t = s().states;
    r((null == t ? void 0 : t.fontSize) || 1), E(), b();
  }
  function V(t, e) {
    t.style.display =
      void 0 === e
        ? "none" === t.style.display
          ? "block"
          : "none"
        : 1 == e
        ? "block"
        : "none";
  }
  const P =
      '<style>.asw-menu{position:fixed;right:20px;top:20px;border-radius:8px;box-shadow:0 0 20px #00000080;opacity:1;transition:.3s;z-index:500000;overflow:hidden;background:#f9f9f9;width:500px;line-height:1;font-size:16px;height:calc(100% - 40px - 75px);letter-spacing:.015em}.asw-menu *{color:#000!important;font-family:inherit}.asw-menu svg{width:24px;height:24px;background:0 0!important;fill:currentColor}.asw-menu-header{display:flex;align-items:center;justify-content:space-between;padding-left:18px;height:60px;font-size:18px;font-weight:700;border-bottom:1px solid #dedede}.asw-menu-header>div{display:flex}.asw-menu-header div[role=button]{padding:12px;cursor:pointer}.asw-menu-header div[role=button]:hover{opacity:.8}.asw-card{margin:0 15px 30px}.asw-card-title{font-size:20px;padding:15px 0;font-weight:700;color:#555}.asw-menu .asw-select{width:100%!important;padding:10px!important;font-size:16px!important;font-family:inherit!important;font-weight:400!important;border-radius:4px!important;background:#fff!important;border:none!important;border:1px solid #dedede!important;min-height:45px!important;max-height:45px!important;height:45px!important;color:inherit!important}.asw-items{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem}.asw-btn{aspect-ratio:6/5;border-radius:4px;padding:0 15px;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;color:#333;font-size:16px!important;background:#fff;border:1px solid #dedede;transition:all .3s ease;cursor:pointer;line-height:1.4}.asw-btn .asw-translate{font-size:15px!important}.asw-btn svg{margin-bottom:16px}.asw-btn:hover{border-color:#0048ff}.asw-btn.asw-selected{background:#0048ff;border-color:#0048ff}.asw-adjust-font div[role=button] svg,.asw-btn.asw-selected *{fill:#fff!important;color:#fff!important;background-color:transparent!important}.asw-footer{position:absolute;bottom:0;left:0;right:0;background:#fff;padding:16px;text-align:center;color:#333;border-top:1px solid #eee}.asw-footer a{font-size:14px!important;text-decoration:underline;color:#0648ff;background:0 0!important;font-weight:700}.asw-minus:hover,.asw-plus:hover{opacity:.8}.asw-menu-content{overflow:scroll;max-height:calc(100% - 80px);color:#333;padding:15px 0}.asw-adjust-font{background:#fff;border:1px solid #dedede;padding:20px;margin-bottom:16px}.asw-adjust-font .asw-label{display:flex;justify-content:flex-start}.asw-adjust-font>div{display:flex;justify-content:space-between;margin-top:20px;align-items:center;font-size:15px}.asw-adjust-font .asw-label div{font-size:15px!important}.asw-adjust-font div[role=button]{background:#0648ff;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;cursor:pointer}.asw-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:10000}@media only screen and (max-width:560px){.asw-menu{width:calc(100% - 20px);left:10px}}@media only screen and (max-width:420px){.asw-items{grid-template-columns:repeat(2,minmax(0,1fr));gap:.5rem}.asw-menu{width:calc(100% - 20px);left:10px}}</style> <div class="asw-menu"> <div class="asw-menu-header"> <div class="asw-translate"> Accessibility Menu </div> <div> <div role="button" tabindex="1" class="asw-menu-reset" title="Reset settings"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M12 4c2.1 0 4.1.8 5.6 2.3 3.1 3.1 3.1 8.2 0 11.3a7.78 7.78 0 0 1-6.7 2.3l.5-2c1.7.2 3.5-.4 4.8-1.7a6.1 6.1 0 0 0 0-8.5A6.07 6.07 0 0 0 12 6v4.6l-5-5 5-5V4M6.3 17.6C3.7 15 3.3 11 5.1 7.9l1.5 1.5c-1.1 2.2-.7 5 1.2 6.8.5.5 1.1.9 1.8 1.2l-.6 2a8 8 0 0 1-2.7-1.8Z"/> </svg> </div> <div role="button" tabindex="1" class="asw-menu-close" title="Close"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"/> </svg> </div> </div> </div> <div class="asw-menu-content"> <div class="asw-card"> <select id="asw-language" title="Language" tabindex="1" class="asw-select"></select> </div> <div class="asw-card"> <div class="asw-card-title"> Content Adjustments </div> <div class="asw-adjust-font"> <div class="asw-label" style="margin:0"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="margin-right:8px"> <path d="M2 4v3h5v12h3V7h5V4H2m19 5h-9v3h3v7h3v-7h3V9Z"/> </svg> <div class="asw-translate"> Adjust Font Size </div> </div> <div> <div class="asw-minus" tabindex="1" data-key="font-size" role="button" aria-pressed="false" title="Decrease Font Size"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M19 13H5v-2h14v2Z"/> </svg> </div> <div class="asw-amount" style="font-weight:400"> 100% </div> <div class="asw-plus" tabindex="1" data-key="font-size" role="button" aria-pressed="false" title="Increase Font Size"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"/> </svg> </div> </div> </div> <div class="asw-items content"> </div> </div> <div class="asw-card"> <div class="asw-card-title"> Color Adjustments </div> <div class="asw-items contrast"> </div> </div> <div class="asw-card"> <div class="asw-card-title"> Tools </div> <div class="asw-items tools"> </div> </div> </div> <div class="asw-footer"> <a href="https://accessibility-widget.pages.dev">Accessibility Widget by Sienna</a> </div> </div> <div class="asw-overlay"> </div>',
    I = [
      {
        label: "Monochrome",
        key: "monochrome",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r\n  <path d="m19 19-7-8v8H5l7-8V5h7m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"/>\r\n</svg>',
      },
      {
        label: "Low Saturation",
        key: "low-saturation",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r\n  <path d="M11 9h2v2h-2V9m-2 2h2v2H9v-2m4 0h2v2h-2v-2m2-2h2v2h-2V9M7 9h2v2H7V9m12-6H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M9 18H7v-2h2v2m4 0h-2v-2h2v2m4 0h-2v-2h2v2m2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6Z"/>\r\n</svg>',
      },
      {
        label: "High Saturation",
        key: "high-saturation",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r\n  <path d="M12 16a4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4m6.7-3.6a6.06 6.06 0 0 0-.86-.4 5.98 5.98 0 0 0 3.86-5.59 6 6 0 0 0-6.78.54A5.99 5.99 0 0 0 12 .81a6 6 0 0 0-2.92 6.14A6 6 0 0 0 2.3 6.4 5.95 5.95 0 0 0 6.16 12a6 6 0 0 0-3.86 5.58 6 6 0 0 0 6.78-.54A6 6 0 0 0 12 23.19a6 6 0 0 0 2.92-6.14 6 6 0 0 0 6.78.54 5.98 5.98 0 0 0-3-5.19Z"/>\r\n</svg>',
      },
      {
        label: "High Contrast",
        key: "high-contrast",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">\r\n  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 17.93a8 8 0 0 1 0-15.86v15.86zm2-15.86a8 8 0 0 1 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87a8 8 0 0 1-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93a8.4 8.4 0 0 1-.19 1z"/>\r\n</svg>',
      },
      {
        label: "Light Contrast",
        key: "light-contrast",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r\n  <path d="M12 18a6 6 0 0 1-6-6 6 6 0 0 1 6-6 6 6 0 0 1 6 6 6 6 0 0 1-6 6m8-2.69L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69Z"/>\r\n</svg>',
      },
      {
        label: "Dark Contrast",
        key: "dark-contrast",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r\n  <path d="M18 12c0-4.5-1.92-8.74-6-10a10 10 0 0 0 0 20c4.08-1.26 6-5.5 6-10Z"/>\r\n</svg>',
      },
    ],
    q = [
      {
        label: "Font Weight",
        key: "font-weight",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r\n  <path d="M13.5 15.5H10v-3h3.5A1.5 1.5 0 0 1 15 14a1.5 1.5 0 0 1-1.5 1.5m-3.5-9h3A1.5 1.5 0 0 1 14.5 8 1.5 1.5 0 0 1 13 9.5h-3m5.6 1.29c.97-.68 1.65-1.79 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.1 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42Z"/>\r\n</svg>',
      },
      {
        label: "Line Height",
        key: "line-height",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r\n  <path d="M21 22H3v-2h18v2m0-18H3V2h18v2m-11 9.7h4l-2-5.4-2 5.4M11.2 6h1.7l4.7 12h-2l-.9-2.6H9.4L8.5 18h-2l4.7-12Z"/>\r\n</svg>',
      },
      {
        label: "Letter Spacing",
        key: "letter-spacing",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r\n  <path d="M22 3v18h-2V3h2M4 3v18H2V3h2m6 10.7h4l-2-5.4-2 5.4M11.2 6h1.7l4.7 12h-2l-.9-2.6H9.4L8.5 18h-2l4.7-12Z"/>\r\n</svg>',
      },
      {
        label: "Dyslexia Font",
        key: "readable-font",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r\n  <path d="m21.59 11.59-8.09 8.09L9.83 16l-1.41 1.41 5.08 5.09L23 13M6.43 11 8.5 5.5l2.07 5.5m1.88 5h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3Z"/>\r\n</svg>',
      },
      {
        label: "Highlight Links",
        key: "highlight-links",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r\n  <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14v14m-5.06-8.94a3.37 3.37 0 0 1 0 4.75L11.73 17A3.29 3.29 0 0 1 7 17a3.31 3.31 0 0 1 0-4.74l1.35-1.36-.01.6c-.01.5.07 1 .23 1.44l.05.15-.4.41a1.6 1.6 0 0 0 0 2.28c.61.62 1.67.62 2.28 0l2.2-2.19c.3-.31.48-.72.48-1.15 0-.44-.18-.83-.48-1.14a.87.87 0 0 1 0-1.24.91.91 0 0 1 1.24 0m4.06-.7c0 .9-.35 1.74-1 2.38l-1.34 1.36v-.6c.01-.5-.07-1-.23-1.44l-.05-.14.4-.42a1.6 1.6 0 0 0 0-2.28 1.64 1.64 0 0 0-2.28 0l-2.2 2.2c-.3.3-.48.71-.48 1.14 0 .44.18.83.48 1.14.17.16.26.38.26.62s-.09.46-.26.62a.86.86 0 0 1-.62.25.88.88 0 0 1-.62-.25 3.36 3.36 0 0 1 0-4.75L12.27 7A3.31 3.31 0 0 1 17 7c.65.62 1 1.46 1 2.36Z"/>\r\n</svg>',
      },
      {
        label: "Highlight Title",
        key: "highlight-title",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r\n    <path d="M5 4v3h5.5v12h3V7H19V4H5Z"/>\r\n</svg>',
      },
    ],
    N = [
      {
        label: "Big Cursor",
        key: "big-cursor",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r\n  <path d="M11 1.07C7.05 1.56 4 4.92 4 9h7m-7 6a8 8 0 0 0 8 8 8 8 0 0 0 8-8v-4H4m9-9.93V9h7a8 8 0 0 0-7-7.93Z"/>\r\n</svg>',
      },
      {
        label: "Stop Animations",
        key: "stop-animations",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r\n  <path d="M22 12c0-5.54-4.46-10-10-10-1.17 0-2.3.19-3.38.56l.7 1.94A7.15 7.15 0 0 1 12 3.97 8.06 8.06 0 0 1 20.03 12 8.06 8.06 0 0 1 12 20.03 8.06 8.06 0 0 1 3.97 12c0-.94.19-1.88.53-2.72l-1.94-.66A10.37 10.37 0 0 0 2 12c0 5.54 4.46 10 10 10s10-4.46 10-10M5.47 3.97c.85 0 1.53.71 1.53 1.5C7 6.32 6.32 7 5.47 7c-.79 0-1.5-.68-1.5-1.53 0-.79.71-1.5 1.5-1.5M18 12c0-3.33-2.67-6-6-6s-6 2.67-6 6 2.67 6 6 6 6-2.67 6-6m-7-3v6H9V9m6 0v6h-2V9"/>\r\n</svg>',
      },
      {
        label: "Reading Guide",
        key: "readable-guide",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r\n  <path d="M12 8a3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3m0 3.54A13.15 13.15 0 0 0 3 8v11c3.5 0 6.64 1.35 9 3.54A13.15 13.15 0 0 1 21 19V8c-3.5 0-6.64 1.35-9 3.54Z"/>\r\n</svg>',
      },
    ];
  function K(t, e) {
    for (var n = "", i = t.length; i--; ) {
      var a = t[i];
      n += '\n            <button tabindex="1" class="asw-btn '
        .concat(e || "", '" type="button" data-key="')
        .concat(a.key, '" title="')
        .concat(a.label, '">\n                ')
        .concat(a.icon, '\n                <span class="asw-translate">')
        .concat(a.label, "</span>\n            </button>\n        ");
    }
    return n;
  }
  const J = JSON.parse(
      '{"Accessibility Menu":"Accessibility menu","Reset settings":"Reset settings","Close":"Close","Content Adjustments":"Content Adjustments","Adjust Font Size":"Adjust Font Size","Highlight Title":"Highlight Title","Highlight Links":"Highlight Links","Readable Font":"Readable Font","Color Adjustments":"Color Adjustments","Dark Contrast":"Dark Contrast","Light Contrast":"Light Contrast","High Contrast":"High Contrast","High Saturation":"High Saturation","Low Saturation":"Low Saturation","Monochrome":"Monochrome","Tools":"Tools","Reading Guide":"Reading Guide","Stop Animations":"Stop Animations","Big Cursor":"Big Cursor","Increase Font Size":"Increase Font Size","Decrease Font Size":"Decrease Font Size","Letter Spacing":"Letter Spacing","Line Height":"Line Height","Font Weight":"Font Weight","Dyslexia Font":"Dyslexia Font","Language":"Language","Open Accessibility Menu":"Open Accessibility Menu"}'
    ),
    W = JSON.parse(
      '{ "Accessibility Menu": "Izbornik pristupačnosti", "Reset settings": "Vrati postavke", "Close": "Zatvori", "Content Adjustments": "Prilagodbe sadržaja", "Adjust Font Size": "Podesi veličinu fonta", "Highlight Title": "Istakni naslov", "Highlight Links": "Istakni poveznice", "Readable Font": "Čitljiv font", "Color Adjustments": "Prilagodbe boja", "Dark Contrast": "Tamni kontrast", "Light Contrast": "Svijetli kontrast", "High Contrast": "Visoki kontrast", "High Saturation": "Visoka zasićenost", "Low Saturation": "Niska zasićenost", "Monochrome": "Monokromatski", "Tools": "Alati", "Reading Guide": "Vodič za čitanje", "Stop Animations": "Zaustavi animacije", "Big Cursor": "Veliki kursor", "Increase Font Size": "Povećaj veličinu fonta", "Decrease Font Size": "Smanji veličinu fonta", "Letter Spacing": "Razmak između slova", "Line Height": "Visina linije", "Font Weight": "Debljina fonta", "Dyslexia Font": "Font za disleksiju", "Language": "Jezik", "Open Accessibility Menu": "Otvori izbornik pristupačnosti"}'
    );
  var st = {
      hr: W,
      en: J,
    },
    rt = [
      { code: "hr", label: "Hrvatski" },
      { code: "en", label: "Engleski" },
    ];
  function lt(t, e) {
    var n = t.getAttribute("data-translate");
    return (
      !n && e && ((n = e), t.setAttribute("data-translate", n)),
      (function (t) {
        var e = s().lang;
        return (st[e] || st.en)[t] || t;
      })(n)
    );
  }
  function ct(t) {
    t.querySelectorAll(".asw-card-title, .asw-translate").forEach(function (t) {
      t.innerText = lt(t, String(t.innerText || "").trim());
    }),
      t.querySelectorAll("[title]").forEach(function (t) {
        t.setAttribute("title", lt(t, t.getAttribute("title")));
      });
  }
  var ut = function (t, e) {
    var n = {};
    for (var i in t)
      Object.prototype.hasOwnProperty.call(t, i) &&
        e.indexOf(i) < 0 &&
        (n[i] = t[i]);
    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
      var a = 0;
      for (i = Object.getOwnPropertySymbols(t); a < i.length; a++)
        e.indexOf(i[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, i[a]) &&
          (n[i[a]] = t[i[a]]);
    }
    return n;
  };
  function dt(t) {
    var e,
      n,
      l,
      c,
      u = t.container,
      d = ut(t, ["container"]),
      g = document.createElement("div");
    g.innerHTML = P;
    var h = g.querySelector(".asw-menu");
    "bottom-right" === d.position &&
      ((h.style.right = "20px"), (h.style.left = "auto")),
      (h.querySelector(".content").innerHTML = K(q)),
      (h.querySelector(".tools").innerHTML = K(N, "asw-tools")),
      (h.querySelector(".contrast").innerHTML = K(I, "asw-filter")),
      h.querySelectorAll(".asw-menu-close, .asw-overlay").forEach((t) => {
        const handleEvent = () => {
          V(g, !1);
        };

        t.addEventListener("click", handleEvent);

        t.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            handleEvent();
          }
        });
      }),
      h.querySelectorAll(".asw-adjust-font div[role='button']").forEach((t) => {
        const adjustFontSize = () => {
          let n = o("fontSize") ?? 1;
          t.classList.contains("asw-minus") ? (n -= 0.1) : (n += 0.1);
          n = Math.max(n, 0.1);
          n = Math.min(n, 2);
          n = Number(n.toFixed(2)) || 1;
          r(n);
          i({ fontSize: n });
        };

        t.addEventListener("click", adjustFontSize);

        t.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            adjustFontSize();
          }
        });
      }),
      h.querySelectorAll(".asw-btn").forEach(function (t) {
        t.addEventListener("click", function () {
          var e,
            n = t.dataset.key,
            a = !t.classList.contains("asw-selected");
          t.classList.contains("asw-filter")
            ? (h.querySelectorAll(".asw-filter").forEach(function (t) {
                t.classList.remove("asw-selected");
              }),
              i({ contrast: !!a && n }),
              a && t.classList.add("asw-selected"),
              b())
            : (t.classList.toggle("asw-selected", a),
              i((((e = {})[n] = a), e)),
              E());
        });
      }),
      (e = h.querySelector(".asw-menu-reset"));

    if (e) {
      const handleEvent = () => {
        var t;
        a({ states: {} });
        G();
        null === (t = document?.querySelectorAll(".asw-selected")) ||
          void 0 === t ||
          t.forEach((t) => {
            var e;
            return (
              null === (e = t?.classList) ||
              void 0 === e ||
              e.remove("asw-selected")
            );
          });
      };

      e.addEventListener("click", handleEvent);

      e.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          handleEvent();
        }
      });
    }
    var p = s(),
      m =
        Number(
          null === (n = null == p ? void 0 : p.states) || void 0 === n
            ? void 0
            : n.fontSize
        ) || 1;
    1 != m &&
      (h.querySelector(".asw-amount").innerHTML = "".concat(100 * m, "%"));
    var v = h.querySelector("#asw-language");
    if (
      ((v.innerHTML = rt
        .map(function (t) {
          return '<option value="'
            .concat(t.code, '">')
            .concat(t.label, "</option>");
        })
        .join("")),
      p.lang !== d.lang && a({ lang: d.lang }),
      (v.value = (null == d ? void 0 : d.lang) || "en"),
      null == v ||
        v.addEventListener("change", function () {
          a({ lang: v.value }), ct(u);
        }),
      ct(h),
      p.states)
    )
      for (var w in p.states)
        if (p.states[w] && "fontSize" !== w) {
          var f = "contrast" === w ? p.states[w] : w;
          null ===
            (c =
              null ===
                (l = h.querySelector('.asw-btn[data-key="'.concat(f, '"]'))) ||
              void 0 === l
                ? void 0
                : l.classList) ||
            void 0 === c ||
            c.add("asw-selected");
        }
    return u.appendChild(g), g;
  }
  var gt = function () {
      return (
        (gt =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
              for (var a in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return t;
          }),
        gt.apply(this, arguments)
      );
    },
    ht = function () {
      return (
        (ht =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
              for (var a in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return t;
          }),
        ht.apply(this, arguments)
      );
    },
    pt = { lang: "en", position: "bottom-right" };
  null === document ||
    void 0 === document ||
    document.addEventListener("DOMContentLoaded", function () {
      var t,
        e,
        n,
        i,
        o =
          null ===
            (t =
              null === document || void 0 === document
                ? void 0
                : document.querySelector("[data-asw-lang]")) || void 0 === t
            ? void 0
            : t.getAttribute("data-asw-lang"),
        r =
          null ===
            (e =
              null === document || void 0 === document
                ? void 0
                : document.querySelector("[data-asw-position]")) || void 0 === e
            ? void 0
            : e.getAttribute("data-asw-position");
      o ||
        (o =
          null ===
            (i =
              null ===
                (n =
                  null === document || void 0 === document
                    ? void 0
                    : document.querySelector("html")) || void 0 === n
                ? void 0
                : n.getAttribute("lang")) || void 0 === i
            ? void 0
            : i.replace(/[_-].*/, "")),
        !o &&
          "undefined" != typeof navigator &&
          (null === navigator || void 0 === navigator
            ? void 0
            : navigator.language) &&
          (o =
            null === navigator || void 0 === navigator
              ? void 0
              : navigator.language),
        (function (t) {
          var e = ht({}, pt);
          try {
            var n = s(!1);
            (e = ht(ht({}, e), n)), G();
          } catch (t) {}
          a((e = ht(ht({}, e), t))),
            (function (t) {
              var e = t.position,
                n = document.createElement("div");
              (n.innerHTML =
                '<style>.asw-menu,.asw-widget{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-weight:400;-webkit-font-smoothing:antialiased}.asw-menu *,.asw-widget *{box-sizing:border-box}.asw-menu-btn{position:fixed;z-index:500000;right:20px;bottom:20px;background:#0048ff!important;box-shadow:0 5px 15px 0 rgb(37 44 97 / 15%),0 2px 4px 0 rgb(93 100 148 / 20%);transition:.3s;border-radius:50%;align-items:center;justify-content:center;transform:scale(1);width:54px;height:54px;display:flex;cursor:pointer;border:4px solid #fff!important;outline:4px solid #0048ff!important}.asw-menu-btn svg{width:30px;height:30px;min-height:30px;min-width:30px;max-width:30px;max-height:30px;background:0 0!important}.asw-menu-btn:hover{transform:scale(1.1)}@media only screen and (max-width:560px){.asw-menu-btn{width:38px;height:38px}.asw-menu-btn svg{width:24px;height:24px;min-height:24px;min-width:24px;max-width:24px;max-height:24px}}</style> <div class="asw-widget"> <a href="https://accessibility-widget.pages.dev" target="_blank" class="asw-menu-btn" tabindex="1 " title="Open Accessibility Menu" role="button" aria-expanded="false"> <svg xmlns="http://www.w3.org/2000/svg" style="fill:white" viewBox="0 0 24 24" width="30px" height="30px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg> </a> </div>'),
                n.classList.add("asw-container");
              var i,
                a = n.querySelector(".asw-menu-btn");
              a &&
                "bottom-right" === e &&
                ((a.style.right = "20px"), (a.style.left = "auto")),
                null == a ||
                  a.addEventListener("click", function (e) {
                    e.preventDefault(),
                      i ? V(i) : (i = dt(gt(gt({}, t), { container: n })));
                  }),
                ct(n),
                document.body.appendChild(n);
            })(e);
        })({ lang: o, position: r });
    });
})();
