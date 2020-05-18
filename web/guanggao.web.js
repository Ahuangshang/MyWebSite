// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var navigator = weex.requireModule('navigator');
var mixins = {
    data: function data() {
        return {};
    },
    methods: {}
};

exports.default = mixins;

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("scroller", [
    _c(
      "div",
      {
        staticStyle: _vm.$processStyle(undefined),
        style: _vm.$processStyle({
          marginLeft: _vm.contentMargin,
          marginRight: _vm.contentMargin
        })
      },
      [
        _c("text", {
          staticStyle: _vm.$processStyle({
            color: "#000000",
            "justify-content": "center",
            "text-align": "center"
          }),
          style: _vm.$processStyle({
            fontSize: _vm.title_size,
            marginTop: _vm.contentMargin,
            marginBottom: _vm.contentMargin,
            lineHeight: _vm.line_height2
          }),
          attrs: { value: _vm.title }
        }),
        _vm._v(" "),
        _c(
          "text",
          {
            staticStyle: _vm.$processStyle(undefined),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_2,
              marginTop: _vm.contentMargin
            })
          },
          [_vm._v(" 2017-10-01 李唐科技")]
        ),
        _vm._v(" "),
        _c("image", {
          staticStyle: _vm.$processStyle(undefined),
          style: _vm.$processStyle({ width: _vm.img_w, height: _vm.img_1_h }),
          attrs: {
            src: _vm.defaultHost + "img/advertisement/ad.jpg",
            placeholder: ""
          }
        }),
        _vm._v(" "),
        _c("div", [
          _c("text", {
            staticStyle: _vm.$processStyle({
              color: "#020402",
              "justify-content": "center",
              "text-align": "center"
            }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height
            }),
            attrs: { value: _vm.content_1 }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({
              color: "#020402",
              "justify-content": "center",
              "text-align": "center"
            }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height
            }),
            attrs: { value: _vm.content_2 }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({
              color: "#020402",
              "justify-content": "center",
              "text-align": "center"
            }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height
            }),
            attrs: { value: _vm.content_3 }
          }),
          _vm._v(" "),
          _c("image", {
            staticStyle: _vm.$processStyle(undefined),
            style: _vm.$processStyle({ width: _vm.img_w, height: _vm.img_2_h }),
            attrs: {
              src: _vm.defaultHost + "img/advertisement/ad2.jpg",
              placeholder: ""
            }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({
              color: "#020402",
              "justify-content": "center",
              "text-align": "center"
            }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height
            }),
            attrs: { value: _vm.content_4 }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({
              color: "#020402",
              "justify-content": "center",
              "text-align": "center"
            }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height
            }),
            attrs: { value: _vm.content_5 }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({
              color: "#020402",
              "justify-content": "center",
              "text-align": "center"
            }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height
            }),
            attrs: { value: _vm.content_6 }
          }),
          _vm._v(" "),
          _c("image", {
            staticStyle: _vm.$processStyle(undefined),
            style: _vm.$processStyle({ width: _vm.img_w, height: _vm.img_3_h }),
            attrs: {
              src: _vm.defaultHost + "img/advertisement/ad4.jpg",
              placeholder: ""
            }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({
              color: "#020402",
              "justify-content": "center",
              "text-align": "center"
            }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height
            }),
            attrs: { value: _vm.content_7 }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({
              color: "#020402",
              "justify-content": "center",
              "text-align": "center"
            }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height
            }),
            attrs: { value: _vm.content_8 }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({
              color: "#020402",
              "justify-content": "center",
              "text-align": "center"
            }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height
            }),
            attrs: { value: _vm.content_9 }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({
                color: "#020402",
                "justify-content": "center",
                "text-align": "center"
              }),
              style: _vm.$processStyle({
                fontSize: _vm.tex_size_1,
                marginTop: _vm.topMargin,
                margin: _vm.contentMargin,
                lineHeight: _vm.line_height
              }),
              attrs: { value: _vm.content_10 }
            },
            [_vm._v("}\n      ")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({
              color: "#020402",
              "justify-content": "center",
              "text-align": "center"
            }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height
            }),
            attrs: { value: _vm.content_10 }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({
              color: "#020402",
              "justify-content": "center",
              "text-align": "center"
            }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height
            }),
            attrs: { value: _vm.content_10 }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({
                color: "#020402",
                "justify-content": "center",
                "text-align": "center"
              }),
              style: _vm.$processStyle({
                fontSize: _vm.tex_size_1,
                marginTop: _vm.topMargin,
                margin: _vm.contentMargin,
                lineHeight: _vm.line_height
              }),
              attrs: { value: _vm.content_10 }
            },
            [_vm._v("}\n      ")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({
              color: "#020402",
              "justify-content": "center",
              "text-align": "center"
            }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height
            }),
            attrs: { value: _vm.content_10 }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({
              color: "#020402",
              "justify-content": "center",
              "text-align": "center"
            }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height
            }),
            attrs: { value: _vm.content_10 }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({
              color: "#020402",
              "justify-content": "center",
              "text-align": "center"
            }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height
            }),
            attrs: { value: _vm.content_11 }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticStyle: _vm.$processStyle({ "align-items": "center" }),
              style: _vm.$processStyle({ width: _vm.img_w })
            },
            [
              _c("image", {
                staticStyle: _vm.$processStyle(undefined),
                style: _vm.$processStyle({
                  width: _vm.img_4_h,
                  height: _vm.img_4_h
                }),
                attrs: {
                  src: _vm.defaultHost + "img/advertisement/ad5.jpg",
                  placeholder: ""
                }
              })
            ]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({
              color: "#020402",
              "justify-content": "center",
              "text-align": "center"
            }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height
            }),
            attrs: { value: _vm.content_12 }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({
              color: "#020402",
              "justify-content": "center",
              "text-align": "center"
            }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height
            }),
            attrs: { value: _vm.content_13 }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({
              color: "#020402",
              "justify-content": "center",
              "text-align": "center"
            }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height
            }),
            attrs: { value: _vm.content_14 }
          }),
          _vm._v(" "),
          _c("image", {
            staticStyle: _vm.$processStyle(undefined),
            style: _vm.$processStyle({ width: _vm.img_w, height: _vm.img_5_h }),
            attrs: {
              src: _vm.defaultHost + "img/advertisement/ad1.jpg",
              placeholder: ""
            }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#f45531" }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height2
            }),
            attrs: { value: _vm.content_15 }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#f45531" }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height2
            }),
            attrs: { value: _vm.content_16 }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#f45531" }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height
            })
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#f45531" }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height2
            }),
            attrs: { value: _vm.content_17 }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#f45531" }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height2
            }),
            attrs: { value: _vm.content_18 }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticStyle: _vm.$processStyle({
                "justify-content": "center",
                "flex-direction": "row"
              }),
              style: _vm.$processStyle({ width: _vm.img_w })
            },
            [
              _c("image", {
                staticStyle: _vm.$processStyle(undefined),
                style: _vm.$processStyle({
                  width: _vm.img_4_h,
                  height: _vm.img_6_h
                }),
                attrs: {
                  src: _vm.defaultHost + "img/advertisement/ad_qq.png",
                  placeholder: ""
                }
              }),
              _vm._v(" "),
              _c("image", {
                staticStyle: _vm.$processStyle(undefined),
                style: _vm.$processStyle({
                  width: _vm.img_4_h,
                  height: _vm.img_6_h,
                  marginLeft: _vm.contentMargin
                }),
                attrs: {
                  src: _vm.defaultHost + "img/advertisement/ad_aqy.png",
                  placeholder: ""
                }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticStyle: _vm.$processStyle({
                "justify-content": "center",
                "flex-direction": "row"
              }),
              style: _vm.$processStyle({
                width: _vm.img_w,
                marginTop: _vm.contentMargin
              })
            },
            [
              _c("image", {
                staticStyle: _vm.$processStyle(undefined),
                style: _vm.$processStyle({
                  width: _vm.img_4_h,
                  height: _vm.img_6_h
                }),
                attrs: {
                  src: _vm.defaultHost + "img/advertisement/ad_yk.png",
                  placeholder: ""
                }
              }),
              _vm._v(" "),
              _c("image", {
                staticStyle: _vm.$processStyle(undefined),
                style: _vm.$processStyle({
                  width: _vm.img_4_h,
                  height: _vm.img_6_h,
                  marginLeft: _vm.contentMargin
                }),
                attrs: {
                  src: _vm.defaultHost + "img/advertisement/ad_hy.png",
                  placeholder: ""
                }
              })
            ]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#f45531" }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height
            })
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#f45531" }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height2
            }),
            attrs: { value: _vm.content_19 }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#f45531" }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height2
            }),
            attrs: { value: _vm.content_20 }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticStyle: _vm.$processStyle({ "align-items": "center" }),
              style: _vm.$processStyle({ width: _vm.img_w })
            },
            [
              _c("image", {
                staticStyle: _vm.$processStyle(undefined),
                style: _vm.$processStyle({
                  width: _vm.img_4_h,
                  height: _vm.img_4_h
                }),
                attrs: {
                  src: _vm.defaultHost + "img/advertisement/ad3.jpg",
                  placeholder: ""
                }
              })
            ]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#1D67F4" }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_1,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.line_height2
            }),
            attrs: { value: _vm.content_21 }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#020402" }),
            style: _vm.$processStyle({
              fontSize: _vm.tex_size_3,
              marginTop: _vm.topMargin,
              margin: _vm.contentMargin,
              lineHeight: _vm.tex_size_2
            }),
            attrs: { value: _vm.content_22 }
          })
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-6862865d", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by Tw93 on 2016/11/4.
 */

exports.default = {
  channels: '头条&新闻&财经&体育&娱乐&军事&教育&科技&NBA&股票&星座&女性&健康&育儿',
  adImgUrl: 'https://ahuangshang.github.io/MyWebsite/img/dragonBoatFestival/dragonBoatFestival.jpg', //图片尺寸1080*1800
  adImgSchemeUrl: 'className=cn.ltwc.cft.weex.WeexActivity&ltkj&jsName=dragonBoatFestival&ltkj&webTitle=端午节&ltkj&shareUrl=http://imengu.cn/Ahuangshang/html/dragonBoatFestival.html',
  newVersion: 318318,
  updateUrl: 'https://ahuangshang.github.io/MyWebsite/html/downLoadApp.html',
  downLoadUrl: 'https://ahuangshang.github.io/MyWebsite/apk/latest.apk',
  HostImgUrl: 'https://ahuangshang.github.io/MyWebsite/img/',
  defaultHost: 'https://ahuangshang.github.io/MyWebsite/',
  getContent: function getContent(e) {
    var head = "<head>" + "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\"> " + "<style>img{width: 100%;height:auto;}</style>" + "<style>video{width:100%; height:auto;max-height: 320px; position: static; margin: 0}</style>" + "<style type='text/css'>" + "body{color:rgba(28,28,28,0.95);font-size: 16px}" + "</style>" + "</head>";
    var style = "<style>" + "  body{" + "    -webkit-user-select: none;" + "    -webkit-tap-highlight-color: transparent;" + "  }" + "</style>";
    var result = "\n" + "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">" + "<html>" + head + style + "<body>" + this.getButtonInfo(e) + "</body></html>";
    result = encodeURI(result);
    return result;
  },
  getButtonInfo: function getButtonInfo(e) {
    var content = e.content.replace(/(<\/?a.*?>)/g, '');
    var title = e.title;
    return "<h2>" + title + "</h2>" + content + "<p style='color: #88000000;font-size: 13px'>&nbsp;&nbsp;本文系第三方观点，不代表李唐科技的观点和立场</p><p  onClick='linkThird()' style='color: #33B5E5;font-size: 13px'>&nbsp;&nbsp;原文链接>></p><script>function linkThird() {ltwc.linkThird();}</script>";
  },
  getWeatherTypeImg: function getWeatherTypeImg(currentType) {
    if (this.contains(currentType, '晴')) {
      return 'qing.jpg';
    } else if (this.contains(currentType, '阴')) {
      return 'yin.jpg';
    } else if (this.contains(currentType, '多云')) {
      return 'duoyun.gif';
    } else if (this.contains(currentType, '小雨') || this.contains(currentType, '中雨')) {
      return 'xiaoyu.gif';
    } else if (this.contains(currentType, '大雨') || this.contains(currentType, '暴雨')) {
      return 'dayu.gif';
    } else if (this.contains(currentType, '小雪') || this.contains(currentType, '中雪')) {
      return 'xiaoxue.gif';
    } else if (this.contains(currentType, '大雪') || this.contains(currentType, '暴雪')) {
      return 'daxue.gif';
    } else if (this.contains(currentType, '雪')) {
      return 'xiaoxue.gif';
    } else if (this.contains(currentType, '雨')) {
      return 'xiaoyu.gif';
    }
  },

  contains: function contains(str, s) {
    return str.indexOf(s) > -1;
  },
  getWeatherDec: function getWeatherDec(high, low) {
    var nhigh = high.replace("高温", "");
    nhigh = nhigh.replace('℃', '');
    var nlow = low.replace('低温', '');
    return nhigh + " ~" + nlow;
  },
  newsTabTitles: [{ title: '头条' }, { title: '新闻' }, { title: '财经' }, { title: '体育' }, { title: '娱乐' }, { title: '军事' }, { title: '教育' }, { title: '科技' }, { title: 'NBA' }, { title: '股票' }, { title: '星座' }, { title: '女性' }, { title: '健康' }, { title: '育儿' }],
  newsTabStyles: {
    bgColor: '#ffffff',
    titleColor: '#dd000000',
    activeTitleColor: '#31A9A5',
    activeBgColor: '#ffffff',
    isActiveTitleBold: true,
    iconWidth: 70,
    iconHeight: 70,
    width: 160,
    height: 75,
    fontSize: 28,
    hasActiveBottom: true,
    activeBottomColor: '#31A9A5',
    activeBottomHeight: 1,
    activeBottomWidth: 160,
    textPaddingLeft: 10,
    textPaddingRight: 10,
    normalBottomColor: 'rgba(0,0,0,0.4)',
    normalBottomHeight: 1,
    hasRightIcon: true,
    rightOffset: 100
  },
  jokeTabTitles: [{ title: '脑筋急转弯', netUrl: 'https://api.bmob.cn/1/classes/funny_iq/' }, { title: '时尚物语', netUrl: 'https://api.bmob.cn/1/classes/funny_ganwu/' }, { title: '节日祝福', netUrl: 'https://api.bmob.cn/1/classes/funny_zhufu/' }],
  jokeTabStyles: {
    bgColor: '#ffffff',
    titleColor: '#dd000000',
    activeTitleColor: '#31A9A5',
    activeBgColor: '#ffffff',
    isActiveTitleBold: true,
    iconWidth: 70,
    iconHeight: 70,
    width: 250,
    height: 75,
    fontSize: 28,
    hasActiveBottom: true,
    activeBottomColor: '#31A9A5',
    activeBottomHeight: 1,
    activeBottomWidth: 250,
    textPaddingLeft: 10,
    textPaddingRight: 10,
    normalBottomColor: 'rgba(0,0,0,0.4)',
    normalBottomHeight: 1,
    hasRightIcon: true,
    rightOffset: 100
  }
};

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(13);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    img_w: {
      default: 718
    },
    img_1_h: {
      default: 479
    },
    img_2_h: {
      default: 431
    },

    img_3_h: {
      default: 596
    },

    img_4_h: {
      default: 300
    },
    img_5_h: {
      default: 362
    },
    img_6_h: {
      default: 250
    },
    contentMargin: {
      default: 16
    },
    title_size: {
      default: 50
    },
    tex_size_1: {
      default: 30
    },
    tex_size_2: {
      default: 35
    },
    tex_size_3: {
      default: 15
    },
    topMargin: {
      default: 40
    },
    line_height: {
      default: 90
    },
    line_height2: {
      default: 55
    },
    title: {
      default: "视频VIP豪送|庆国庆、迎中秋，万份视频VIP等你来领！"
    },
    content_1: {
      default: "各位老铁好！"

    },
    content_2: {
      default: "在此团圆美满之时，"
    },
    content_3: {
      default: "本帅先祝大家双节快乐！"
    },
    content_4: {
      default: "那么在金秋十月里，"
    },
    content_5: {
      default: "除了赏月、吃月饼，走遍大地神州这些事情外，"
    },
    content_6: {
      default: "还有什么可以做的吗？ "
    },
    content_7: {
      default: "好了，咱们不理老伯爵这个二货了..."
    },
    content_8: {
      default: "其实，双节除了以上可做的事外，"
    },
    content_9: {
      default: "还有..."
    },
    content_10: {
      default: "。"
    },
    content_11: {
      default: "今天要告诉大家的神秘好礼！！！"
    },
    content_12: {
      default: "为了给老铁们一个福利满满的双节，"
    },
    content_13: {
      default: "本帅专门为大家准备了开业大酬宾！"
    },
    content_14: {
      default: "一起庆祝李唐科技开业，领取福利吧~"
    },
    content_15: {
      default: "活动时间"
    },
    content_16: {
      default: "10月1日到10月17日"
    },
    content_17: {
      default: "活动奖励"
    },
    content_18: {
      default: "腾讯视频、爱奇艺、优酷、合一等各大视频网站VIP任你选！"
    },
    content_19: {
      default: "参与方式"
    },
    content_20: {
      default: "微信搜索17620002901，或者扫描下方二维码添加好友并发送你想要的视频网站Vip的名字即可获取。例如发送：腾讯视频。我们会在两个工作日内发放你想要的视频网站的Vip帐号，数量有限，先到先得！"
    },
    content_21: {
      default: "温馨提示：每位用户只能领取一次奖励哦~"
    },
    content_22: {
      default: "特别说明：\n        奖品照片仅供参考，一切以实际发放为准；\n        获得奖品的用户，我们会在两个工作日内联系您的微信，请保持微信正常联系，逾期未回复我们将视为自动放弃；\n       本活动最终解释权归李唐科技所有。"
    }
  },
  data: function data() {
    return {
      defaultHost: _config2.default.defaultHost
    };
  },

  created: function created() {}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_guanggao_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_guanggao_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_guanggao_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_guanggao_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_guanggao_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6862865d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_guanggao_vue__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_guanggao_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6862865d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_guanggao_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6862865d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_guanggao_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\views\\guanggao.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6862865d", Component.options)
  } else {
    hotAPI.reload("data-v-6862865d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _guanggao = __webpack_require__(76);

var _guanggao2 = _interopRequireDefault(_guanggao);

var _mixins = __webpack_require__(1);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.mixin(_mixins2.default);

_guanggao2.default.el = '#root';

new Vue(_guanggao2.default);

/***/ })

/******/ });