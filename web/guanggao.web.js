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
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
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
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
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

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('div', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      marginLeft: _vm.contentMargin,
      marginRight: _vm.contentMargin
    }))
  }, [_c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#000000",
      "justify-content": "center",
      "text-align": "center"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.title_size,
      marginTop: _vm.contentMargin,
      marginBottom: _vm.contentMargin,
      lineHeight: _vm.line_height2
    })),
    attrs: {
      "value": _vm.title
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_2,
      marginTop: _vm.contentMargin
    }))
  }, [_vm._v(" 2017-10-01 李唐科技")]), _vm._v(" "), _c('image', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      width: _vm.img_w,
      height: _vm.img_1_h
    })),
    attrs: {
      "src": "http://imengu.cn/Ahuangshang/img/advertisement/ad.jpg",
      "placeholder": ""
    }
  }), _vm._v(" "), _c('div', [_c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#020402",
      "justify-content": "center",
      "text-align": "center"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    })),
    attrs: {
      "value": _vm.content_1
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#020402",
      "justify-content": "center",
      "text-align": "center"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    })),
    attrs: {
      "value": _vm.content_2
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#020402",
      "justify-content": "center",
      "text-align": "center"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    })),
    attrs: {
      "value": _vm.content_3
    }
  }), _vm._v(" "), _c('image', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      width: _vm.img_w,
      height: _vm.img_2_h
    })),
    attrs: {
      "src": "http://imengu.cn/Ahuangshang/img/advertisement/ad2.jpg",
      "placeholder": ""
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#020402",
      "justify-content": "center",
      "text-align": "center"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    })),
    attrs: {
      "value": _vm.content_4
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#020402",
      "justify-content": "center",
      "text-align": "center"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    })),
    attrs: {
      "value": _vm.content_5
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#020402",
      "justify-content": "center",
      "text-align": "center"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    })),
    attrs: {
      "value": _vm.content_6
    }
  }), _vm._v(" "), _c('image', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      width: _vm.img_w,
      height: _vm.img_3_h
    })),
    attrs: {
      "src": "http://imengu.cn/Ahuangshang/img/advertisement/ad4.jpg",
      "placeholder": ""
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#020402",
      "justify-content": "center",
      "text-align": "center"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    })),
    attrs: {
      "value": _vm.content_7
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#020402",
      "justify-content": "center",
      "text-align": "center"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    })),
    attrs: {
      "value": _vm.content_8
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#020402",
      "justify-content": "center",
      "text-align": "center"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    })),
    attrs: {
      "value": _vm.content_9
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#020402",
      "justify-content": "center",
      "text-align": "center"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    })),
    attrs: {
      "value": _vm.content_10
    }
  }, [_vm._v("}\n      ")]), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#020402",
      "justify-content": "center",
      "text-align": "center"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    })),
    attrs: {
      "value": _vm.content_10
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#020402",
      "justify-content": "center",
      "text-align": "center"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    })),
    attrs: {
      "value": _vm.content_10
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#020402",
      "justify-content": "center",
      "text-align": "center"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    })),
    attrs: {
      "value": _vm.content_10
    }
  }, [_vm._v("}\n      ")]), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#020402",
      "justify-content": "center",
      "text-align": "center"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    })),
    attrs: {
      "value": _vm.content_10
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#020402",
      "justify-content": "center",
      "text-align": "center"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    })),
    attrs: {
      "value": _vm.content_10
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#020402",
      "justify-content": "center",
      "text-align": "center"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    })),
    attrs: {
      "value": _vm.content_11
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: _vm.$processStyle({
      "align-items": "center"
    }),
    style: (_vm.$processStyle({
      width: _vm.img_w
    }))
  }, [_c('image', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      width: _vm.img_4_h,
      height: _vm.img_4_h
    })),
    attrs: {
      "src": "http://imengu.cn/Ahuangshang/img/advertisement/ad5.jpg",
      "placeholder": ""
    }
  })]), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#020402",
      "justify-content": "center",
      "text-align": "center"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    })),
    attrs: {
      "value": _vm.content_12
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#020402",
      "justify-content": "center",
      "text-align": "center"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    })),
    attrs: {
      "value": _vm.content_13
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#020402",
      "justify-content": "center",
      "text-align": "center"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    })),
    attrs: {
      "value": _vm.content_14
    }
  }), _vm._v(" "), _c('image', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      width: _vm.img_w,
      height: _vm.img_5_h
    })),
    attrs: {
      "src": "http://imengu.cn/Ahuangshang/img/advertisement/ad1.jpg",
      "placeholder": ""
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#f45531"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height2
    })),
    attrs: {
      "value": _vm.content_15
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#f45531"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height2
    })),
    attrs: {
      "value": _vm.content_16
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#f45531"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    }))
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#f45531"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height2
    })),
    attrs: {
      "value": _vm.content_17
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#f45531"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height2
    })),
    attrs: {
      "value": _vm.content_18
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: _vm.$processStyle({
      "justify-content": "center",
      "flex-direction": "row"
    }),
    style: (_vm.$processStyle({
      width: _vm.img_w
    }))
  }, [_c('image', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      width: _vm.img_4_h,
      height: _vm.img_6_h
    })),
    attrs: {
      "src": "http://imengu.cn/Ahuangshang/img/advertisement/ad_qq.png",
      "placeholder": ""
    }
  }), _vm._v(" "), _c('image', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      width: _vm.img_4_h,
      height: _vm.img_6_h,
      marginLeft: _vm.contentMargin
    })),
    attrs: {
      "src": "http://imengu.cn/Ahuangshang/img/advertisement/ad_aqy.png",
      "placeholder": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticStyle: _vm.$processStyle({
      "justify-content": "center",
      "flex-direction": "row"
    }),
    style: (_vm.$processStyle({
      width: _vm.img_w,
      marginTop: _vm.contentMargin
    }))
  }, [_c('image', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      width: _vm.img_4_h,
      height: _vm.img_6_h
    })),
    attrs: {
      "src": "http://imengu.cn/Ahuangshang/img/advertisement/ad_yk.png",
      "placeholder": ""
    }
  }), _vm._v(" "), _c('image', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      width: _vm.img_4_h,
      height: _vm.img_6_h,
      marginLeft: _vm.contentMargin
    })),
    attrs: {
      "src": "http://imengu.cn/Ahuangshang/img/advertisement/ad_hy.png",
      "placeholder": ""
    }
  })]), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#f45531"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height
    }))
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#f45531"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height2
    })),
    attrs: {
      "value": _vm.content_19
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#f45531"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height2
    })),
    attrs: {
      "value": _vm.content_20
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: _vm.$processStyle({
      "align-items": "center"
    }),
    style: (_vm.$processStyle({
      width: _vm.img_w
    }))
  }, [_c('image', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      width: _vm.img_4_h,
      height: _vm.img_4_h
    })),
    attrs: {
      "src": "http://imengu.cn/Ahuangshang/img/advertisement/ad3.jpg",
      "placeholder": ""
    }
  })]), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#1D67F4"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_1,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.line_height2
    })),
    attrs: {
      "value": _vm.content_21
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: _vm.$processStyle({
      "color": "#020402"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.tex_size_3,
      marginTop: _vm.topMargin,
      margin: _vm.contentMargin,
      lineHeight: _vm.tex_size_2
    })),
    attrs: {
      "value": _vm.content_22
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0ae15946", module.exports)
  }
}

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(119),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\workSpace\\workSpace\\oldWork\\rili_weex\\src\\views\\guanggao.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] guanggao.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ae15946", Component.options)
  } else {
    hotAPI.reload("data-v-0ae15946", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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
//

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
  created: function created() {}
};

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _guanggao = __webpack_require__(59);

var _guanggao2 = _interopRequireDefault(_guanggao);

var _mixins = __webpack_require__(1);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.mixin(_mixins2.default);

_guanggao2.default.el = '#root';

new Vue(_guanggao2.default);

/***/ })

/******/ });