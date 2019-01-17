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
/******/ 	return __webpack_require__(__webpack_require__.s = 94);
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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _methods = __webpack_require__(2);

var _methods2 = _interopRequireDefault(_methods);

var _Config = __webpack_require__(11);

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        imgw: {
            default: 50
        },
        imgh: {
            default: 0
        },
        imgUrl: {
            default: ''
        },
        padding_left: {
            default: 0
        },
        padding_right: {
            default: 0
        },
        bgColor: {
            default: '#00000000'
        },
        resize: {
            default: 'contain'
        },
        imgFilePath: {
            default: 'image_icon/'
        }
    },
    methods: {
        onClick: function onClick() {
            this.$emit('onClick');
        },
        font: function font(size) {
            return _methods2.default.getFontSize(size);
        },
        getSrc: function getSrc(imgUrl) {
            return _Config2.default.HostImgUrl + this.imgFilePath + imgUrl;
        },
        getImgHeight: function getImgHeight(imgh) {
            return imgh != 0 ? imgh : this.imgw;
        }
    }
};

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n.root[data-v-fb4b6c32] {\n}\n.rootWeb[data-v-fb4b6c32] {\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n.textWeight[data-v-fb4b6c32] {\n    color: white;\n}\n.weatherTop[data-v-fb4b6c32] {\n    height: 700px;\n    flex-direction: column;\n    padding-left: 40px;\n    padding-right: 40px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0\n}\n.item[data-v-fb4b6c32] {\n    flex-direction: row;\n    align-items: center;\n    padding: 40px;\n    border-color: rgb(229, 229, 229);\n    background-color: rgb(255, 255, 255);\n    border-bottom-width: 1px;\n    justify-content: space-between;\n}\n.itemDec[data-v-fb4b6c32] {\n    color: rgba(54, 67, 78, 0.67);\n    align-items: center\n}\n.empty_view[data-v-fb4b6c32] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    background-color: rgb(255, 255, 255);\n}\n", ""]);

// exports


/***/ }),

/***/ 11:
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
    adImgUrl: 'http://imengu.cn/Ahuangshang/img/newYear.jpg', //图片尺寸1080*1800
    adImgSchemeUrl: 'className=cn.ltwc.cft.weex.WeexActivity&ltkj&jsName=springFestival&ltkj&webTitle=春节&ltkj&shareUrl=http://imengu.cn/Ahuangshang/html/springFestival.html',
    newVersion: 313301,
    updateUrl: 'http://imengu.cn/Ahuangshang/apk/latest.apk',
    HostImgUrl: 'http://imengu.cn/Ahuangshang/img/',
    defaultHost: 'http://imengu.cn/',
    getContent: function getContent(e) {
        var head = "<head>" + "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\"> " + "<style>img{max-width: 100%; width:auto; height:auto;}</style>" + "<style type='text/css'>" + "body{color:rgba(28,28,28,0.95);font-size: 16px}" + "</style>" + "</head>";
        var style = "<style>" + "  body{" + "    -webkit-user-select: none;" + "    -webkit-tap-highlight-color: transparent;" + "  }" + "</style>";
        var result = "<html>" + head + style + "<body>" + e + "</body></html>";
        result = encodeURI(result);
        return result;
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

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [_vm.rootclass()],
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [(_vm.forecast.length === 0 && !_vm.refresh) ? _c('div', {
    staticClass: "empty_view",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('wxc-result', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "padding-top": "232",
      "show": _vm.show
    },
    on: {
      "wxcResultButtonClicked": _vm.resultButtonClick
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.forecast.length > 0 || _vm.refresh) ? _c('scroller', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "show-scrollbar": "false"
    }
  }, [(_vm.forecast.length > 0 || _vm.refresh) ? _c('div', {
    staticStyle: _vm.$processStyle({
      "padding-bottom": "10px"
    }),
    style: (_vm.$processStyle(undefined))
  }, [_c('icon-img', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "imgw": "750px",
      "imgh": "700px",
      "imgUrl": _vm.getWeatherImgUrl(),
      "imgFilePath": "weather/",
      "resize": "stretch",
      "background-color": _vm.bg
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weatherTop",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('div', {
    staticStyle: _vm.$processStyle({
      "flex-direction": "row",
      "margin-top": "70px"
    }),
    style: (_vm.$processStyle(undefined))
  }, [_c('text', {
    staticClass: "textWeight",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      fontSize: _vm.font(60)
    })),
    attrs: {
      "value": _vm.currentTemperature
    }
  }), _vm._v(" "), _c('text', {
    staticClass: "textWeight",
    staticStyle: _vm.$processStyle({
      "margin-top": "14px"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.font(20)
    })),
    attrs: {
      "value": "℃"
    }
  })]), _vm._v(" "), _c('text', {
    staticClass: "textWeight",
    staticStyle: _vm.$processStyle({
      "margin-top": "10px"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.font(22)
    })),
    attrs: {
      "value": _vm.params.city
    }
  }), _vm._v(" "), _c('text', {
    staticClass: "textWeight",
    staticStyle: _vm.$processStyle({
      "margin-top": "10px"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.font(16)
    })),
    attrs: {
      "value": _vm.currentType
    }
  }), _vm._v(" "), _c('text', {
    staticClass: "textWeight",
    staticStyle: _vm.$processStyle({
      "position": "absolute",
      "bottom": "20px"
    }),
    style: (_vm.$processStyle({
      fontSize: _vm.font(16)
    })),
    attrs: {
      "value": _vm.quality
    }
  })]), _vm._v(" "), _vm._l((_vm.forecast), function(item, index) {
    return _c('div', {
      staticClass: "item",
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(undefined))
    }, [_c('text', {
      staticClass: "itemDec",
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle({
        fontSize: _vm.font(16)
      })),
      attrs: {
        "value": index === 0 ? '今天' : index === 1 ? '明天' : item.date
      }
    }), _vm._v(" "), _c('text', {
      staticClass: "itemDec",
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle({
        fontSize: _vm.font(16)
      })),
      attrs: {
        "value": item.type
      }
    }), _vm._v(" "), _c('text', {
      staticClass: "itemDec",
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle({
        fontSize: _vm.font(16)
      })),
      attrs: {
        "value": item.dec
      }
    })])
  })], 2) : _vm._e()]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fb4b6c32", module.exports)
  }
}

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n.div[data-v-7203603b] {\n    align-items: center;\n    flex-direction: column;\n}\n.icon[data-v-7203603b] {\n    width: 50px;\n    height: 50px;\n}\n", ""]);

// exports


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(105);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("5afd317a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fb4b6c32\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./weather.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fb4b6c32\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./weather.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "div",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      width: _vm.imgw,
      height: _vm.getImgHeight(_vm.imgh),
      backgroundColor: _vm.bgColor
    })),
    on: {
      "click": _vm.onClick
    }
  }, [_c('image', {
    staticClass: "icon",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      width: _vm.imgw,
      height: _vm.getImgHeight(_vm.imgh),
      marginLeft: _vm.padding_left,
      marginRight: _vm.padding_right
    })),
    attrs: {
      "resize": _vm.resize,
      "src": _vm.getSrc(_vm.imgUrl)
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7203603b", module.exports)
  }
}

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("9aa8cbfa", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7203603b\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./icon-img.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7203603b\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./icon-img.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = __webpack_require__(26);

var _type2 = _interopRequireDefault(_type);

var _utils = __webpack_require__(6);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    type: {
      type: String,
      default: 'errorPage'
    },
    show: {
      type: Boolean,
      default: true
    },
    wrapStyle: Object,
    paddingTop: {
      type: [Number, String],
      default: 232
    },
    customSet: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    resultType: function resultType() {
      var type = this.type,
          customSet = this.customSet;

      var allTypes = _utils2.default.isEmptyObject(customSet) ? _type2.default : _utils2.default.mergeDeep(_type2.default, customSet);
      var types = allTypes['errorPage'];
      if (Object.keys(allTypes).indexOf(type) > -1) {
        types = allTypes[type];
      }
      return types;
    },
    setPaddingTop: function setPaddingTop() {
      var paddingTop = this.paddingTop;
      return paddingTop + 'px';
    }
  },
  methods: {
    handleTouchEnd: function handleTouchEnd(e) {
      // web上面有点击穿透问题
      var platform = weex.config.env.platform;

      platform === 'Web' && e.preventDefault && e.preventDefault();
    },
    onClick: function onClick() {
      var type = this.type;
      this.$emit('wxcResultButtonClicked', { type: type });
    }
  }
};

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n.wrap[data-v-27e317ac] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.wxc-result[data-v-27e317ac] {\n  width: 750px;\n  flex: 1;\n  align-items: center;\n  background-color: #f2f3f4;\n}\n.result-image[data-v-27e317ac] {\n  width: 320px;\n  height: 320px;\n}\n.result-content[data-v-27e317ac] {\n  margin-top: 36px;\n  align-items: center;\n}\n.content-text[data-v-27e317ac] {\n  font-size: 30px;\n  color: #A5A5A5;\n  height: 42px;\n  line-height: 42px;\n  text-align: center;\n}\n.content-desc[data-v-27e317ac] {\n  margin-top: 10px;\n}\n.result-button[data-v-27e317ac] {\n  margin-top: 60px;\n  border-width: 1px;\n  border-color: #979797;\n  background-color: #FFFFFF;\n  border-radius: 6px;\n  width: 240px;\n  height: 72px;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.button-text[data-v-27e317ac] {\n  color: #666666;\n  font-size: 30px;\n}\n", ""]);

// exports


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(value));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var modal = weex.requireModule('modal');
module.exports = {

    parseQueryString: function parseQueryString(str) {
        if (str.indexOf('?') === -1 || str.indexOf('=') === -1) return null;
        str = str.split("?")[1];
        var reg = /(([^?&=]+)(?:=([^?&=]*))*)/g;
        // let reg = /\s*([\w\-]+?)\s*=\s*([^;]*?)\s*(?:;|$)\s*/g;
        var result = {};
        var match = void 0;
        var key = void 0;
        var value = void 0;
        while (match = reg.exec(str)) {
            key = match[2];
            if (key === 'hot-reload_controller' || key === '_wx_tpl') continue;
            value = match[3] || '';
            result[key] = decodeURIComponent(value);
        }
        return result;
    },
    toDateString: function toDateString(value) {
        var date = void 0;
        if (this.isNotNull(value)) {
            date = new Date(value);
        } else {
            date = new Date();
        }
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        return Y + M + D + h + m + s;
    },
    toTimeSpan: function toTimeSpan() {
        //let date = new Date(strtime); //传入一个时间格式，如果不传入就是获取现在的时间了，这样做不兼容火狐。
        // 可以这样做
        var date = new Date(strtime.replace(/-/g, '/'));
        // 有三种方式获取，在后面会讲到三种方式的区别
        // return date.getTime();
        // return date.valueOf();
        return Date.parse(date);

        /*
         三种获取的区别：
         第一、第二种：会精确到毫秒
         第三种：只能精确到秒，毫秒将用0来代替
         比如上面代码输出的结果(一眼就能看出区别)：
         1398250549123
         1398250549123
         1398250549000
         */
    },
    compareDate: function compareDate(startDate, endDate) {
        var d1 = new Date(startDate.replace(/-/g, "/"));
        var d2 = new Date(endDate.replace(/-/g, "/"));

        return !(startDate !== "" && endDate !== "" && d1 > d2);
    },
    isNotNull: function isNotNull(str) {
        return str !== undefined && str !== "" && str != null;
    },
    //获取日期 传1代表当月第一天 传其他代表当前日期
    getDate: function getDate(v) {
        var now = new Date();
        var year = now.getFullYear(); //年
        var month = now.getMonth() + 1; //月
        var day = now.getDate(); //日

        /*let hh = now.getHours();            //时
         let mm = now.getMinutes();          //分
         let ss = now.getSeconds();*/
        var clock = year + "-"; //加""的作用是转成字符串，不然会以整型计算

        if (month < 10) clock += "" + "0";
        clock += month + "-";

        if (day < 10) clock += "" + "0";
        clock += v === 1 ? '1' : day;

        /*if(hh < 10)
         clock += ""+"0";
         clock += hh;
           if (mm < 10)
         clock += ""+"0";
         clock += mm;
           if (ss < 10)
         clock += ""+"0";
         clock += ss;*/
        return clock;
    },

    /**
     * 获取图片的高度
     * @param url
     * @param callback
     * @returns {*}
     */
    checkPicurl: function checkPicurl(url, callback) {
        var img = new Image();
        img.src = url;
        var ratio = 0;
        var clientWidth = 750;
        img.onerror = function () {
            ratio = 0;
            return callback(ratio);
        };
        if (img.complete) {
            ratio = img.width / img.height;
            return callback(ratio === 0 ? 0 : clientWidth / ratio);
        } else {
            img.onload = function () {
                ratio = img.width / img.height;
                img.onload = null; //避免重复加载
                return callback(ratio === 0 ? 0 : clientWidth / ratio);
            };
        }
    },
    /**
     *  适配不同情况下的字体大小
     * @param size dp值的大小
     * @returns {*} 适配后的值的大小
     */
    getFontSize: function getFontSize(size) {
        if (this.isweb()) {
            var clientWith = document.body.clientWidth;
            if (weex.config.env.osName.toLocaleString() === "android") {
                return 2 * size + 'px';
            } else {
                if (clientWith > 900) {
                    return size * weex.config.env.scale + 'px';
                } else if (clientWith > 750) {
                    return 2 * size * weex.config.env.scale + 'px';
                } else {
                    return 4 * size * weex.config.env.scale + 'px';
                }
            }
        } else {
            var _clientWith = weex.config.env.deviceWidth;
            var ratio = 750 / _clientWith;
            var fontSize = size * ratio * weex.config.env.scale;
            return fontSize.toFixed(0);
        }
    },
    getMatchSize: function getMatchSize(size) {
        if (this.isweb()) {
            return size * weex.config.env.scale + 'px';
        } else {
            return size;
        }
    },
    isweb: function isweb() {
        return weex.config.env.platform.toLocaleLowerCase() === "web";
    },
    registerModules: function registerModules() {
        if (this.isweb()) {
            var _weex$registerModule;

            weex.registerModule('event', (_weex$registerModule = {
                openWeexView: function openWeexView(viewName, viewTitle) {
                    if (weex.config.env.osName.toLowerCase() === "android") {
                        ltwc.openWeexView(viewName, viewTitle);
                    }
                }
            }, _defineProperty(_weex$registerModule, 'openWeexView', function openWeexView(viewName, title, shareUrl) {
                if (weex.config.env.osName.toLowerCase() === "android") {
                    ltwc.openWeexView(viewName, title, shareUrl);
                }
            }), _defineProperty(_weex$registerModule, 'openWebView', function openWebView(webUrl, title) {
                if (weex.config.env.osName.toLowerCase() === "android") {
                    ltwc.openWebView(webUrl, title);
                }
            }), _defineProperty(_weex$registerModule, 'openWebView', function openWebView(webUrl, title, shareUrl) {
                if (weex.config.env.osName.toLowerCase() === "android") {
                    ltwc.openWebView(webUrl, title, shareUrl);
                }
            }), _defineProperty(_weex$registerModule, 'openView', function openView(uri) {
                if (weex.config.env.osName.toLowerCase() === "android") {
                    ltwc.openView(uri);
                }
            }), _defineProperty(_weex$registerModule, 'getFilePath', function getFilePath(name, type, callback) {
                if (weex.config.env.osName.toLowerCase() === "android") {
                    window.getFilePathCallback = callback;
                    ltwc.getFilePath(name, type, callback);
                }
            }), _defineProperty(_weex$registerModule, 'showMessage', function showMessage(msg) {
                if (weex.config.env.osName.toLowerCase() === "android") {
                    ltwc.showMessage(msg);
                }
            }), _defineProperty(_weex$registerModule, 'getVersion', function getVersion(callback) {
                if (weex.config.env.osName.toLowerCase() === "android") {
                    window.getVersionCallback = callback;
                    ltwc.getVersion(callback);
                }
            }), _defineProperty(_weex$registerModule, 'update', function update(url) {
                if (weex.config.env.osName.toLowerCase() === "android") {
                    ltwc.update(url);
                }
            }), _defineProperty(_weex$registerModule, 'setConfig', function setConfig(tabs, adImgUrl, adSchemeUrl) {
                if (weex.config.env.osName.toLowerCase() === "android") {
                    ltwc.setConfig(tabs, adImgUrl, adSchemeUrl);
                }
            }), _defineProperty(_weex$registerModule, 'playVideo', function playVideo(url) {
                if (weex.config.env.osName.toLowerCase() === "android") {
                    ltwc.playVideo(url);
                }
            }), _weex$registerModule));
            weex.registerModule('net', {
                requestNetData: function requestNetData(methodType, url, api, jsonParams, showLoading, callback) {
                    if (weex.config.env.osName.toLowerCase() === "android") {
                        window.requestNetDataCallback = callback;
                        ltwc.requestNetData(methodType, url, api, jsonParams, showLoading);
                    }
                }
            });
        }
    }
};
if (module.exports.isweb()) {
    window.getReturnData = function (type, data) {
        if (type === "getFilePath") {
            window.getFilePathCallback(data);
        } else if (type === "requestNetData") {
            window.requestNetDataCallback(data);
        } else if (type === "getVersion") {
            window.getVersionCallback(data);
        }
    };
}

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var required = __webpack_require__(20)
  , qs = __webpack_require__(19)
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof global !== 'undefined') globalVar = global;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.qs = qs;

module.exports = Url;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(24)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(23),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-27e317ac",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\workSpace\\workSpace\\oldWork\\rili_weex\\node_modules\\weex-ui\\packages\\wxc-result\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27e317ac", Component.options)
  } else {
    hotAPI.reload("data-v-27e317ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: "wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.wrapStyle))
  }, [_c('div', {
    staticClass: "wxc-result",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      paddingTop: _vm.setPaddingTop
    }))
  }, [_c('image', {
    staticClass: "result-image",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "aria-hidden": true,
      "src": _vm.resultType.pic
    }
  }), _vm._v(" "), (_vm.resultType.content) ? _c('div', {
    staticClass: "result-content",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('text', {
    staticClass: "content-text",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._v(_vm._s(_vm.resultType.content))]), _vm._v(" "), (_vm.resultType.desc) ? _c('text', {
    staticClass: "content-text content-desc",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._v(_vm._s(_vm.resultType.desc))]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.resultType.button) ? _c('div', {
    staticClass: "result-button",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    on: {
      "touchend": _vm.handleTouchEnd,
      "click": _vm.onClick
    }
  }, [_c('text', {
    staticClass: "button-text",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._v(_vm._s(_vm.resultType.button))])]) : _vm._e()])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-27e317ac", module.exports)
  }
}

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("0dd204d2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../css-loader/index.js!../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-27e317ac\",\"scoped\":true,\"hasInlineConfig\":false}!../../../vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../css-loader/index.js!../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-27e317ac\",\"scoped\":true,\"hasInlineConfig\":false}!../../../vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__index_vue___default.a; });



/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 2016/11/4.
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  errorPage: {
    pic: 'https://img.alicdn.com/tfs/TB17blphfDH8KJjy1XcXXcpdXXa-320-320.png',
    content: '抱歉出错了，我们正在全力解决中',
    button: '再试一次',
    title: '出错啦'
  },
  noGoods: {
    pic: 'https://img.alicdn.com/tfs/TB1mPWEeOqAXuNjy1XdXXaYcVXa-320-320.png',
    content: '主人，这里什么都没有找到',
    button: '再试一次',
    title: '暂无商品'
  },
  noNetwork: {
    pic: 'https://img.alicdn.com/tfs/TB1jkA5g9_I8KJjy0FoXXaFnVXa-320-320.png',
    content: '哎呀，没有网络了......',
    button: '刷新一下',
    title: '无网络'
  },
  errorLocation: {
    pic: 'https://img.alicdn.com/tfs/TB1zXXahhrI8KJjy0FpXXb5hVXa-320-320.png',
    content: '哎呀，定位失败了......',
    button: '刷新一下',
    title: '定位失败'
  }
});


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(5)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_url_parse__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_url_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_url_parse__);
/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 17/11/01
 */



const Utils = {
  UrlParser: __WEBPACK_IMPORTED_MODULE_0_url_parse___default.a,
  _typeof (obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject (obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString (obj) {
    return typeof (obj) === 'string';
  },
  isNonEmptyArray (obj = []) {
    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject (item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
  },
  isEmptyObject (obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont (text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    const regExp = /&#x[a-z|0-9]{4,5};?/g;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        const replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep (target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();
    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (const key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, {
              [key]: {}
            });
          }
          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }
    return Utils.mergeDeep(target, ...sources);
  },
  appendProtocol (url) {
    if (/^\/\//.test(url)) {
      const {
        bundleUrl
      } = weex.config;
      return `http${/^https:/.test(bundleUrl) ? 's' : ''}:${url}`;
    }
    return url;
  },
  encodeURLParams (url) {
    const parsedUrl = new __WEBPACK_IMPORTED_MODULE_0_url_parse___default.a(url, true);
    return parsedUrl.toString();
  },
  goToH5Page (jumpUrl, animated = false, callback = null) {
    const Navigator = weex.requireModule('navigator');
    const jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    const url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated.toString()
    }, callback);
  },
  env: {
    isTaobao () {
      const { appName } = weex.config.env;
      return /(tb|taobao|淘宝)/i.test(appName);
    },
    isTrip () {
      const { appName } = weex.config.env;
      return appName === 'LX';
    },
    isBoat () {
      const { appName } = weex.config.env;
      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb () {
      const { platform } = weex.config.env;
      return typeof (window) === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS () {
      const { platform } = weex.config.env;
      return platform.toLowerCase() === 'ios';
    },
    /**
     * 是否为 iPhone X or iPhoneXS or iPhoneXR or iPhoneXS Max
     * @returns {boolean}
     */
    isIPhoneX () {
      const { deviceHeight } = weex.config.env;
      if (Utils.env.isWeb()) {
        return typeof window !== undefined && window.screen && window.screen.width && window.screen.height 
        && ((parseInt(window.screen.width, 10) === 375) && (parseInt(window.screen.height, 10) === 812)
        || (parseInt(window.screen.width, 10) === 414) && (parseInt(window.screen.height, 10) === 896));
      }
      return Utils.env.isIOS() && (deviceHeight === 2436 || deviceHeight === 2688 || deviceHeight == 1792);
    },
    isAndroid () {
      const { platform } = weex.config.env;
      return platform.toLowerCase() === 'android';
    },
    isAlipay () {
      const { appName } = weex.config.env;
      return appName === 'AP';
    },
    isTmall () {
      const { appName } = weex.config.env;
      return /(tm|tmall|天猫)/i.test(appName);
    },
    isAliWeex () {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },
    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight () {
      const { env } = weex.config;
      const navHeight = Utils.env.isWeb() ? 0 : (Utils.env.isIPhoneX() ? 176 : 132);
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },
    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight () {
      const { env } = weex.config;
      return env.deviceHeight / env.deviceWidth * 750;
    }
  },

  /**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */
  compareVersion (currVer = '0.0.0', promoteVer = '0.0.0') {
    if (currVer === promoteVer) return true;
    const currVerArr = currVer.split('.');
    const promoteVerArr = promoteVer.split('.');
    const len = Math.max(currVerArr.length, promoteVerArr.length);
    for (let i = 0; i < len; i++) {
      const proVal = ~~promoteVerArr[i];
      const curVal = ~~currVerArr[i];
      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }
    return false;
  },
  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk (arr = [], size = 4) {
    let groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map((e, i) => {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(e => {
        return e;
      });
    }
    return groups;
  },
  /*
   * 截断字符串
   * @param str 传入字符串
   * @param len 截断长度
   * @param hasDot 末尾是否...
   * @returns {String}
   */
  truncateString (str, len, hasDot = true) {
    let newLength = 0;
    let newStr = '';
    let singleChar = '';
    const chineseRegex = /[^\x00-\xff]/g;
    const strLength = str.replace(chineseRegex, '**').length;
    for (let i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }
    return newStr;
  },
  /*
   * 转换 obj 为 url params参数
   * @param obj 传入字符串
   * @returns {String}
   */
  objToParams (obj) {
    let str = "";
    for (let key in obj) {
      if (str !== "") {
        str += "&";
      }
      str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
  },
  /*
   * 转换 url params参数为obj
   * @param str 传入url参数字符串
   * @returns {Object}
   */
  paramsToObj (str) {
    let obj = {};
    try {
      obj = JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    } catch (e) {
      console.log(e);
    }
    return obj;
  },
  animation: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation (ref, transform, status, callback) {
      const animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform
        },
        duration: status ? 250 : 300, // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms
      }, function () {
        callback && callback();
      });
    }
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle (animationType) {
      if (animationType === 'push') {
        return {
          left: '750px',
          top: '0px',
          height: (weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750) + 'px'
        }
      } else if (animationType === 'model') {
        return {
          top: (weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750) + 'px',
          left: '0px',
          height: (weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750) + 'px'
        }
      }
      return {}
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Utils);


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(127)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(80),
  /* template */
  __webpack_require__(119),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-fb4b6c32",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\workSpace\\workSpace\\oldWork\\rili_weex\\src\\views\\weather.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] weather.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fb4b6c32", Component.options)
  } else {
    hotAPI.reload("data-v-fb4b6c32", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 7:
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
    adImgUrl: 'http://imengu.cn/Ahuangshang/img/newYear.jpg', //图片尺寸1080*1800
    adImgSchemeUrl: 'className=cn.ltwc.cft.weex.WeexActivity&ltkj&jsName=springFestival&ltkj&webTitle=春节&ltkj&shareUrl=http://imengu.cn/Ahuangshang/html/springFestival.html',
    newVersion: 313301,
    updateUrl: 'http://imengu.cn/Ahuangshang/apk/latest.apk',
    HostImgUrl: 'http://imengu.cn/Ahuangshang/img/',
    defaultHost: 'http://imengu.cn/',
    getContent: function getContent(e) {
        var head = "<head>" + "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\"> " + "<style>img{max-width: 100%; width:auto; height:auto;}</style>" + "<style type='text/css'>" + "body{color:rgba(28,28,28,0.95);font-size: 16px}" + "</style>" + "</head>";
        var style = "<style>" + "  body{" + "    -webkit-user-select: none;" + "    -webkit-tap-highlight-color: transparent;" + "  }" + "</style>";
        var result = "<html>" + head + style + "<body>" + e + "</body></html>";
        result = encodeURI(result);
        return result;
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

/***/ 8:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcResult = __webpack_require__(25);

var _wxcResult2 = _interopRequireDefault(_wxcResult);

var _methods = __webpack_require__(2);

var _methods2 = _interopRequireDefault(_methods);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var modal = weex.requireModule('modal');
var stream = weex.requireModule('stream');
if (_methods2.default.isweb()) {
    window.noticeReceiver = function (name, data) {
        window.temp_this.distributeData(name, { 'jsonData': JSON.stringify(data) });
    };
}
exports.default = {
    components: {
        WxcResult: _wxcResult2.default,
        iconImg: __webpack_require__(9)
    },
    props: {
        show: {
            default: false
        },
        refresh: {
            default: false
        },
        params: {
            default: function _default() {
                return {};
            }
        },
        bg: {
            default: '#42d7d1'
        },
        currentTemperature: {
            default: ''
        },
        quality: {
            default: ''
        },
        forecast: {
            default: function _default() {
                return [];
            }
        },
        currentType: {
            default: ''
        }
    },
    methods: {
        rootclass: function rootclass() {
            return _methods2.default.isweb() ? "rootWeb" : "root";
        },
        font: function font(size) {
            return _methods2.default.getFontSize(size);
        },
        resultButtonClick: function resultButtonClick(e) {
            this.getWeatherInfo(true);
        },

        getWeatherInfo: function getWeatherInfo(showLoading) {
            var that = this;
            weex.requireModule('net').requestNetData('get', 'http://t.weather.sojson.com/api/weather/city/' + that.params.cityCode + '/', '', '', showLoading, function (ret) {
                that.dealBack(ret);
                that.show = true;
            });
        },
        getOptions: function getOptions() {
            var env = this.$getConfig().env;
            if (env.platform.toLocaleLowerCase() === 'web') {
                var bundleUrl = this.$getConfig().bundleUrl;
                var urlParams = _methods2.default.parseQueryString(bundleUrl);
                this.params = {
                    city: urlParams.city,
                    cityCode: urlParams.cityCode
                };
            } else {
                this.params = {
                    city: this.$getConfig().city,
                    cityCode: this.$getConfig().cityCode
                };
            }
            // weex.require('event').showMessage(this.params.city);
        },
        dealBack: function dealBack(ret) {
            var _this = this;

            if (ret != null) {
                var data = JSON.parse(ret).data;
                if (data != null) {
                    this.currentTemperature = data.wendu;
                    this.quality = '空气质量  ' + data.quality;
                    this.currentType = data.forecast[0].type;
                    this.forecast.splice(0, this.forecast.length);
                    data.forecast.map(function (item) {
                        _this.forecast.push({
                            date: item.week.replace("星期", "周"),
                            type: item.type,
                            dec: _config2.default.getWeatherDec(item.high, item.low)
                        });
                    });
                }
            }
        },
        getWeatherImgUrl: function getWeatherImgUrl() {
            return _config2.default.getWeatherTypeImg(this.currentType);
        },
        distributeData: function distributeData(type, data) {
            if (type === 'locationInfo') {
                this.params = {
                    city: JSON.parse(data).jsonData
                };
            } else if (type === 'cityCode') {
                this.params = {
                    city: this.params.city,
                    cityCode: JSON.parse(data).jsonData
                };
                this.refresh = false;
                this.getWeatherInfo(false);
            }
        }
    },
    created: function created() {
        if (_methods2.default.isweb()) {
            window.temp_this = this;
            _methods2.default.registerModules();
        }
        this.getOptions();
        this.getWeatherInfo(true);
    },
    mounted: function mounted() {
        var _this2 = this;

        weex.requireModule('globalEvent').addEventListener('locationInfo', function (data) {
            _this2.distributeData("locationInfo", JSON.stringify(data));
        });
        weex.requireModule('globalEvent').addEventListener('cityCode', function (data) {
            _this2.distributeData("cityCode", JSON.stringify(data));
        });
    }
};

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(14)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(13),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7203603b",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\workSpace\\workSpace\\oldWork\\rili_weex\\src\\views\\customview\\icon-img.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] icon-img.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7203603b", Component.options)
  } else {
    hotAPI.reload("data-v-7203603b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _weather = __webpack_require__(66);

var _weather2 = _interopRequireDefault(_weather);

var _mixins = __webpack_require__(1);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.mixin(_mixins2.default);

_weather2.default.el = '#root';

new Vue(_weather2.default);

/***/ })

/******/ });