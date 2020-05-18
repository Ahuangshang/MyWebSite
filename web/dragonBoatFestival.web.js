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
/******/ 	return __webpack_require__(__webpack_require__.s = 91);
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

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


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

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("scroller", [
    _c("div", [
      _c("image", {
        staticStyle: _vm.$processStyle(undefined),
        style: _vm.$processStyle({ width: _vm.img_w_top, height: _vm.img_1_h }),
        attrs: {
          src: _vm.defaultHost + "img/dragonBoatFestival/dragonBoat_1.jpg",
          placeholder: _vm.defaultHost + "img/image_icon/default.png"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticStyle: _vm.$processStyle(undefined),
          style: _vm.$processStyle({
            marginLeft: _vm.font(_vm.contentMargin),
            marginRight: _vm.font(_vm.contentMargin)
          })
        },
        [
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.title }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle(undefined),
              style: _vm.$processStyle({
                fontSize: _vm.font(_vm.tex_size_2),
                marginTop: _vm.font(_vm.contentMargin)
              })
            },
            [_vm._v(" 起源")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_1 }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_2 }
          }),
          _vm._v(" "),
          _c("image", {
            staticStyle: _vm.$processStyle(undefined),
            style: _vm.$processStyle({ width: _vm.img_w, height: _vm.img_2_h }),
            attrs: {
              src: _vm.defaultHost + "img/dragonBoatFestival/dragonBoat_2.jpg",
              placeholder: _vm.defaultHost + "img/image_icon/default.png"
            }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({ "margin-top": "15px" }),
              style: _vm.$processStyle({ fontSize: _vm.font(_vm.tex_size_2) })
            },
            [_vm._v(" 历史渊源")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_3 }
          }),
          _vm._v(" "),
          _c("image", {
            staticStyle: _vm.$processStyle(undefined),
            style: _vm.$processStyle({ width: _vm.img_w, height: _vm.img_4_h }),
            attrs: {
              src: _vm.defaultHost + "img/dragonBoatFestival/dragonBoat_4.jpg",
              placeholder: _vm.defaultHost + "img/image_icon/default.png"
            }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({ "margin-top": "15px" }),
              style: _vm.$processStyle({ fontSize: _vm.font(_vm.tex_size_2) })
            },
            [_vm._v(" 民俗活动")]
          ),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({
                "margin-top": "15px",
                "margin-left": "9px",
                "font-weight": "bold"
              }),
              style: _vm.$processStyle({ fontSize: _vm.font(18) })
            },
            [_vm._v(" 扒龙舟")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_4 }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({
                "margin-top": "15px",
                "margin-left": "9px",
                "font-weight": "bold"
              }),
              style: _vm.$processStyle({ fontSize: _vm.font(18) })
            },
            [_vm._v(" 挂艾草与菖蒲")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_5 }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({
                "margin-top": "15px",
                "margin-left": "9px",
                "font-weight": "bold"
              }),
              style: _vm.$processStyle({ fontSize: _vm.font(18) })
            },
            [_vm._v(" 端午食粽")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_6 }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({
                "margin-top": "15px",
                "margin-left": "9px",
                "font-weight": "bold"
              }),
              style: _vm.$processStyle({ fontSize: _vm.font(18) })
            },
            [_vm._v(" 放纸鸢")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_7 }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({
                "margin-top": "15px",
                "margin-left": "9px",
                "font-weight": "bold"
              }),
              style: _vm.$processStyle({ fontSize: _vm.font(18) })
            },
            [_vm._v(" 草药水（沐兰汤）\n      ")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_8 }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({
                "margin-top": "15px",
                "margin-left": "9px",
                "font-weight": "bold"
              }),
              style: _vm.$processStyle({ fontSize: _vm.font(18) })
            },
            [_vm._v(" 拴五色丝线")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_9 }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({
                "margin-top": "15px",
                "margin-left": "9px",
                "font-weight": "bold"
              }),
              style: _vm.$processStyle({ fontSize: _vm.font(18) })
            },
            [_vm._v(" 打午时水")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_10 }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({
                "margin-top": "15px",
                "margin-left": "9px",
                "font-weight": "bold"
              }),
              style: _vm.$processStyle({ fontSize: _vm.font(18) })
            },
            [_vm._v(" 铸阳燧")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_11 }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({
                "margin-top": "15px",
                "margin-left": "9px",
                "font-weight": "bold"
              }),
              style: _vm.$processStyle({ fontSize: _vm.font(18) })
            },
            [_vm._v(" 浸龙舟水")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_12 }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({
                "margin-top": "15px",
                "margin-left": "9px",
                "font-weight": "bold"
              }),
              style: _vm.$processStyle({ fontSize: _vm.font(18) })
            },
            [_vm._v(" 佩豆娘")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_13 }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({
                "margin-top": "15px",
                "margin-left": "9px",
                "font-weight": "bold"
              }),
              style: _vm.$processStyle({ fontSize: _vm.font(18) })
            },
            [_vm._v(" 画额")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_14 }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({
                "margin-top": "15px",
                "margin-left": "9px",
                "font-weight": "bold"
              }),
              style: _vm.$processStyle({ fontSize: _vm.font(18) })
            },
            [_vm._v(" 避五毒")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_15 }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({
                "margin-top": "15px",
                "margin-left": "9px",
                "font-weight": "bold"
              }),
              style: _vm.$processStyle({ fontSize: _vm.font(18) })
            },
            [_vm._v(" 采药、制凉茶")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_16 }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({
                "margin-top": "15px",
                "margin-left": "9px",
                "font-weight": "bold"
              }),
              style: _vm.$processStyle({ fontSize: _vm.font(18) })
            },
            [_vm._v(" 饮蒲酒、雄黄酒、朱砂酒\n      ")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_17 }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({
                "margin-top": "15px",
                "margin-left": "9px",
                "font-weight": "bold"
              }),
              style: _vm.$processStyle({ fontSize: _vm.font(18) })
            },
            [_vm._v(" 端午雨")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_18 }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({
                "margin-top": "15px",
                "margin-left": "9px",
                "font-weight": "bold"
              }),
              style: _vm.$processStyle({ fontSize: _vm.font(18) })
            },
            [_vm._v(" 跳钟馗")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_19 }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({
                "margin-top": "15px",
                "margin-left": "9px",
                "font-weight": "bold"
              }),
              style: _vm.$processStyle({ fontSize: _vm.font(18) })
            },
            [_vm._v(" 斗草")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_20 }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({
                "margin-top": "15px",
                "margin-left": "9px",
                "font-weight": "bold"
              }),
              style: _vm.$processStyle({ fontSize: _vm.font(18) })
            },
            [_vm._v(" 打马球")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_21 }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({
                "margin-top": "15px",
                "margin-left": "9px",
                "font-weight": "bold"
              }),
              style: _vm.$processStyle({ fontSize: _vm.font(18) })
            },
            [_vm._v(" 九狮拜象")]
          ),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_22 }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              staticStyle: _vm.$processStyle({ "margin-top": "15px" }),
              style: _vm.$processStyle({ fontSize: _vm.font(_vm.tex_size_2) })
            },
            [_vm._v("传统饮食")]
          ),
          _vm._v(" "),
          _c("image", {
            staticStyle: _vm.$processStyle(undefined),
            style: _vm.$processStyle({ width: _vm.img_w, height: _vm.img_5_h }),
            attrs: {
              src: _vm.defaultHost + "img/dragonBoatFestival/dragonBoat_5.jpg",
              placeholder: _vm.defaultHost + "img/image_icon/default.png"
            }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_23 }
          }),
          _vm._v(" "),
          _c("image", {
            staticStyle: _vm.$processStyle(undefined),
            style: _vm.$processStyle({ width: _vm.img_w, height: _vm.img_6_h }),
            attrs: {
              src: _vm.defaultHost + "img/dragonBoatFestival/dragonBoat_6.jpg",
              placeholder: _vm.defaultHost + "img/image_icon/default.png"
            }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_24 }
          }),
          _vm._v(" "),
          _c("image", {
            staticStyle: _vm.$processStyle(undefined),
            style: _vm.$processStyle({ width: _vm.img_w, height: _vm.img_7_h }),
            attrs: {
              src: _vm.defaultHost + "img/dragonBoatFestival/dragonBoat_7.jpg",
              placeholder: _vm.defaultHost + "img/image_icon/default.png"
            }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_25 }
          }),
          _vm._v(" "),
          _c("image", {
            staticStyle: _vm.$processStyle(undefined),
            style: _vm.$processStyle({ width: _vm.img_w, height: _vm.img_8_h }),
            attrs: {
              src: _vm.defaultHost + "img/dragonBoatFestival/dragonBoat_8.jpg",
              placeholder: _vm.defaultHost + "img/image_icon/default.png"
            }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_26 }
          }),
          _vm._v(" "),
          _c("image", {
            staticStyle: _vm.$processStyle(undefined),
            style: _vm.$processStyle({ width: _vm.img_w, height: _vm.img_9_h }),
            attrs: {
              src: _vm.defaultHost + "img/dragonBoatFestival/dragonBoat_9.jpg",
              placeholder: _vm.defaultHost + "img/image_icon/default.png"
            }
          }),
          _vm._v(" "),
          _c("text", {
            staticStyle: _vm.$processStyle({ color: "#334f16" }),
            style: _vm.$processStyle({
              fontSize: _vm.font(_vm.tex_size_1),
              marginTop: _vm.font(_vm.topMargin),
              margin: _vm.font(_vm.contentMargin),
              lineHeight: _vm.font(_vm.line_height)
            }),
            attrs: { value: _vm.content_27 }
          })
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-c0ba7482", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("6914a46e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-c0ba7482\",\"scoped\":true,\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dragonBoatFestival.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-c0ba7482\",\"scoped\":true,\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dragonBoatFestival.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

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
  delHtmlTag: function delHtmlTag(str) {
    return str.replace(/<[^>]+>/g, "").replace(/&quot;/g, "\"").replace(/&lt;/g, '<').replace(/&gt;/g, '>'); //去掉所有的html标记
  },
  isweb: function isweb() {
    return weex.config.env.platform.toLocaleLowerCase() === "web";
  },
  is_weixn: function is_weixn() {
    var ua = navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) == "micromessenger";
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
      }), _defineProperty(_weex$registerModule, 'playVideo', function playVideo(url, datas, position) {
        if (weex.config.env.osName.toLowerCase() === "android") {
          ltwc.playVideo(url, datas, position);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(5);
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
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, list)
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
      styles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, newList)
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
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

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
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listToStyles;
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
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

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(13);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var util = __webpack_require__(2); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "dragonBoatFestival",
  props: {
    img_w_top: {
      default: 750
    },
    img_w: {
      default: 718
    },
    img_1_h: {
      default: 343.5
    },
    img_2_h: {
      default: 442
    },

    img_3_h: {
      default: 504
    },

    img_4_h: {
      default: 548
    },
    img_5_h: {
      default: 429
    },
    img_6_h: {
      default: 429
    },
    img_7_h: {
      default: 424
    },
    img_8_h: {
      default: 430
    },
    img_9_h: {
      default: 430
    },
    contentMargin: {
      default: 7
    },
    tex_size_1: {
      default: 16
    },
    tex_size_2: {
      default: 22
    },
    topMargin: {
      default: 18
    },
    line_height: {
      default: 30
    },
    title: {
      default: "       端午节，又称端阳节、重午节、龙日、龙舟节、正阳节、浴兰节、天中节等等，是中国民间传统节日。端午节源自天象崇拜，由上古时代龙图腾祭祀演变而来。仲夏端午，苍龙七宿飞升至正南中天，是龙飞天的日子，即如《易经·乾卦》第五爻的爻辞曰：“飞龙在天”；此时龙星既“得中”又“得正”，处在大吉之位，恩施普也，龙德显扬。端午节起源涵盖了古老星象文化、人文哲学等方面内容，蕴含着深邃丰厚的文化内涵。端午节在传承发展中杂揉了多种民俗为一体，节俗内容丰富，扒龙舟与食粽是端午节的两大礼俗，这两大传统礼俗在中国自古传承，至今不辍。"
    },
    content_1: {
      default: "       起源于中国，最初是上古先民以龙舟竞渡形式祭祀龙祖的节日。因传说战国时期的楚国诗人屈原在端午抱石跳汨罗江自尽，后来人们亦将端午节作为纪念屈原的节日；个别地方也有纪念伍子胥、曹娥及介子推等说法。总的来说，端午节起源于江浙地区吴越部族的龙图腾祭祀，注入夏季时令“祛病防疫”风尚，把端午视为“恶月恶日”起于北方，附会纪念屈原等历史人物纪念内容，最后形成如今端午节文化内涵。\n" + "       端午节与春节、清明节、中秋节并称为中国民间四大传统节日。端午文化在世界上影响广泛，世界上一些国家和地区也有庆贺端午的活动。2006年5月，国务院将其列入首批国家级非物质文化遗产名录；自2008年起，被列为国家法定节假日。2009年9月，联合国教科文组织正式批准将其列入《人类非物质文化遗产代表作名录》，端午节成为中国首个入选世界非遗的节日。"
    },
    content_2: {
      default: "       端午祭龙礼俗的形成与原始信仰、祭祀文化、干支历法以及苍龙七宿正处南中的天象有关。中国古代的星象文化源远流长、博大精深，古人很早开始就探索宇宙的奥秘，并由此演绎出了一套完整深奥的观星文化。《春秋命历序》：“天地开辟，万物浑浑，无知无识；阴阳所凭，天体始于北极之野…日月五纬一轮转；天皇出焉…定天之象，法地之仪，作干支以定日月度。”上古时代人们定天之象、法地之仪，根据日月星辰的运行轨迹和位置，将黄道和赤道附近的区域分作28组星宿，俗称“二十八宿”，按东南西北四方各分为七宿，即为“四象”；在东方的“角、亢、氐、房、心、尾、箕”组成一个完整的龙形星象，即为“苍龙七宿”。苍龙七宿的出没周期与一年四时周期相一致。\n" + "       在传统文化中，方位和时间以及八卦是联系在一起的。先天八卦以乾坤定南北，天南地北为序，上为天为乾，下为地为坤；正南为先天八卦的乾位，即为“天”。仲夏午月午日，苍龙七宿运行至正南中（乾）方位，是龙升天的日子。苍龙群星一年四时的运行情况及事象规律，在《易经·乾卦》的爻辞中有阐发，仲夏端午苍龙运行至正南中天方位，对应乾卦第五爻“飞龙在天”。在《易经》中，以八卦为基础又两两重合而构成六十四重卦；重卦乾由上下两个乾卦重合而成，它的卦形由六根阳爻组成；爻是要从下往上数，而阳爻又以“九”代称，故从下数第五爻称“九五”；九五之爻在上乾卦中居于中的位置，称“得中”，而且从总卦来看，它处于奇数的位置，阳爻处于奇位称“得正”，故九五爻既“得中”又“得正”，从其所处位置来看，就是大吉之位。\n" + "       仲夏端午苍龙七宿飞升于正南中天，《易经》称其为“飞龙在天”，此时龙星处在“中正”之位，既“得中”又“得正”，为大吉大利之象。龙是古越人的原始信仰，古越人以龙作为部族图腾神、保护神，自比是龙的子孙，他们不仅有“断发文身”以“像龙子”的习俗，而且在每年“飞龙在天”的仲夏端午举行盛大图腾祭，酬谢龙祖恩德，祈福纳祥、压邪攘灾。古代的祭仪情形虽渺茫难晓，但还是可以从后世的节仪中寻找到一些古俗遗迹。端午文化充分体现了中华民族先祖们祗敬感德神祖的人文精神以及追求“天、地、人”的和谐合一，讲究顺应天时地宜、遵循自然规律的思想。端午文化作为中华传统文化的重要组成部分，反映了中华文化源远流长、博大精深。"
    },
    content_3: {
      default: "        古老传统节日的起源与上古原始信仰、祭祀文化及天象、历法等人文与自然文化内容有关。根据现代人类学、考古学的研究成果，人类最原始的两种信仰：一是天地信仰，二是祖先信仰。古老传统节日多数形成于古人择吉日祭祀，以谢天地神灵、祖先恩德的活动。早期的节日文化，反映的是古人自然崇拜、固本思源等人文精神；一系列的祭祀活动，则蕴含着祗敬感德、礼乐文明深邃文化内涵。节日的起源和发展是一个逐渐形成，潜移默化地完善与普及的过程。古时南北风俗各异，先秦时代端午节的节俗活动鲜见于中原文献记载，就现存文献没法直接考证其源流。关于端午节的相关文字记载，“端午”二字，最早出现在晋代的《风土记》中，但端午的习俗却早已有之，譬如龙舟竞渡祭祀之俗，早已存在。关于端午节的历史起源，学术界主要有四种观点：\n" + "       1、流传甚广的“历史人物纪念”观点，依据南朝梁人吴均的《续齐谐记》（神话志怪小说）及宗檩的《荆楚岁时记》，认为端午节起源于纪念屈原。还有认为是纪念伍子胥、纪念曹娥等。\n" + "       2、闻一多先生认为端午节是吴、越举行龙图腾崇拜活动的节日，他在《端午考》及《端午节的历史教育》（见《闻一多全集》）两篇论文中详细论证了他的观点。\n" + "       3、认为端午节起源于“恶月恶日”见张心勤《端午节非因屈原考》）。\n" + "       4、认为端午节源于夏至（详见刘德谦《“端午”始源又一说》）。\n"
    },
    content_4: {
      default: "        扒龙舟是端午节的一项重要活动，古时盛行于吴、越、楚，现在我国南方沿海一带十分流行。传出国外后，深受各国人民的喜爱并形成了国际比赛。据《河姆渡遗址第一期发掘报告》称，早在7000年前，远古先民已用独木刳成木舟，并加上木桨划舟。“龙舟”一词，最早见于《穆天子传》卷五：“天子乘鸟舟、龙舟浮于大沼。”预《九歌·湘君》中“驾飞龙今北征，邅吾道兮洞庭”，“石濑浅浅，飞龙兮翩翩”。学者们认为文中的“飞龙”即是龙舟。\n" + "       扒龙舟历史悠久，是多人集体划桨竞赛。龙舟竞渡分为请龙、祭龙神、游龙和收龙等几个版块。龙舟竞渡前一般都要举行隆重的祭祀仪式，先要请龙、祭神。如广东龙舟，在端午前要择吉日从水下起出，祭过神后，安上龙头、龙尾，再准备竞渡。闽、台则往妈祖庙祭拜。在过去，人们祭祀龙神时气氛很严肃，多祈求福佑、风调雨顺、去邪祟、攘灾异、事事如意。在湖北的屈原家乡秭归，也有划龙舟祭拜屈原的仪式流传。"
    },
    content_5: {
      default: "        在端午节布置种种可驱邪祛病的花草，来源亦久。人们把插艾草和菖蒲作为端午节重要内容之一。如挂艾草于门，《荆楚岁时记》：“采艾以为人，悬门户上，以禳毒气。”这是由于艾为重要的药用植物，又可制艾绒治病，灸穴，又可驱虫。五月艾含艾油最多，（此时正值文生长旺期）所以功效最好，人们也就争相采艾了。往往会在家门口挂几株艾草，由于艾草特殊的香味，人们用它来驱病、防蚊、辟邪。\n" + "        “艾”，又名家艾、艾蒿，它的茎、叶都含有挥发性芳香油，所产生的奇特芳香，可驱蚊蝇、虫蚁，净化空气。菖蒲的叶片也含有挥发性芳香油，是提神通窍、健骨消滞、杀虫灭菌的药物。有关艾草可以驱邪的传说已经流传很久，主要是它具备医药的功能而来，如宗懔的《荆楚岁时记》中曰：“鸡未鸣时，采艾似人形者，揽而取之，收以灸病，甚验。是日采艾为人形，悬于户上，可禳毒气。”"
    },
    content_6: {
      default: "        端午食粽，是中华民族自古以来的传统习俗。粽子，属籺的一种，籺是人们在逢年过节时用来拜神的贡品，逢年过节做籺拜神是古老的传统习俗。籺有很多品种，不同的节日会做不同的籺，粽籺是端午节拜神的贡品。粽的主要材料是稻米、馅料和箬叶（或柊叶）等，其花样繁多。由于各地饮食习惯的不同，粽形成了南北风味；从口味上分，粽子有咸粽和甜粽两大类。端午食粽的风俗，千百年来在中国盛行不衰，已成了中华民族影响最大、覆盖面最广的民间饮食习俗之一，而且流传到朝鲜、日本及东南亚诸国。\n" + "        “粽”字本作“糉”，历史上跟粽子沾边的文字记载，最早大概见于汉代许慎的《说文解字》，将之解释为“芦叶裹米也”。西晋周处所写的《风士记》，则明确提到了“角黍”一词：“仲夏端五，方伯协极。享用角黍，龟鳞顺德。”粽最初是用来拜祭祖先和神灵，具体起源年代无考。东汉末年，以草木灰水浸泡黍米，因水中含“碱”，用菰叶包黍米成四角形，煮熟，即为广东碱水粽。到了晋代，正式定粽子为端午节的节庆食品。南北朝时期，出现杂粽，米中掺杂禽兽肉、板栗、红枣、赤豆等，品种增多，粽子还用作交往的礼品。到了唐代，粽子的用米，已“白莹如玉”，其形状出现锥形、菱形。宋朝时，已有“蜜饯粽”，即果品入粽。明清两代，粽子成了吉祥食品；、相传，那时凡参加科举考试的秀才，在赴考场前，要吃家中特意给他们包的“笔粽”，样子细长很像毛笔，谐音“必中”，为的是讨个口彩。"
    },
    content_7: {
      default: "        在中国南方一带，端午节儿童放纸鸢称为“放殃”。纸鸢，在竹篾等骨架上糊上纸或绢，拉着系在上面的长线，趁着风势可以放上天空，属于一种单纯利用空气动力的飞行器。"
    },
    content_8: {
      default: "        草药水，即是古籍记载的沐兰汤，此俗至今尚存，且广泛流行，可治皮肤病、去邪气。关于洗草药水习俗的现存文字记载最早见于西汉末的《大戴礼记》中，但文中的兰不是兰花，而是菊科的佩兰或草药，有香气，可煎水沐浴。民俗认为，端午日午时阳气旺盛，是草木一年中药性最强的一天，端午遍地皆药。端午期间，我国不少地方有采草药煮草药水沐浴的习俗，端午草药的药性在其中发挥了至关重要的作用。《岁时广记》卷二十二“采杂药”引《荆楚岁时记》佚文：“五月五日，竞采杂药，可治百病。”在广东，儿童用苦草麦药或艾、蒲、凤仙、白玉兰等花草煮水洗，少年、成年男子则到江河、海边冲凉，谓之洗龙舟水，洗去晦气，带来好运。在湖南、广西等地，则用柏叶、大风根、艾草、菖蒲、桃叶等煮成药水洗浴，不论男女老幼，全家都洗。"
    },
    content_9: {
      default: "        中国传统文化中，象征五方五行的五种颜色“青、红、白、黑、黄”被视为吉祥色。五彩丝线或源于古代南方人的文身之遗俗，《汉书》：“越人常在水中，故断其发、文其身，以象龙子，故不见伤害也。”端午以五色丝线系臂，曾是很流行的节俗。传到后世，即发展成如长命缕、长命锁、佩香包等许多种漂亮饰物，制作也日趋精致，成为端午节特有的民间艺品。\n" + "        在端午节节这天，孩子们要在手腕脚腕上系上五色丝线以驱邪。传统之俗，用红绿黄白黑色粗丝线搓成彩色线绳，系在小孩子的手臂或颈项上，自五月五日系起，一直至七夕“七娘妈”生日，才解下来连同金楮焚烧。 还有一说，在端午节后的第一个雨天，把五彩线剪下来扔在雨中，意味着让河水将瘟疫、疾病冲走，谓之可去邪祟、攘灾异，会带来一年的好运。"
    },
    content_10: {
      default: "        午时水，即是在端午日午时于井里打上来的水。“午”是阳性，古人认为这天的午时阳气最盛，端午日午时驱邪最佳，所以端午当天有打“午时水”的说法，用来煮饭、烧水、煮汤，具有辟邪、净身、除障的效果。据说午时水用来泡茶酿酒特别香醇，生饮甚至具有治病的奇效。有谚语道：“午时洗目，明到若乌鹙”，又说“午时水饮一嘴，较好补药吃三年”。"
    },
    content_11: {
      default: "        东汉王充的《论衡》记载了端午节“铸阳燧”的礼仪习俗：“阳燧取火于天，于五月丙午日中之时，消炼五石，铸以为器，摩励生光，仰以向日，则火来至，此取真火之道也”。古人认为，午月午日午时具三重之火，是阳气极盛之时，在此时刻以火克金，是最佳的熔金铸镜的时刻，铸成的铜镜具有不可思议的神力。以镜辟邪的习俗，在南方沿海一带有着广泛的应用和遗传，常能见到出生不久的小孩子，身上佩带着银制的镜子等饰物，这类银饰小镜子等，就是用于孩子们辟邪。新建的寺庙道观，其屋脊的正中也往往装饰着铜镜。就是现代小区崭新建筑的门、窗上方，也往往能发现悬挂着的镜子，这些都是用于所谓的辟邪。由此可见镜子辟邪的文化信仰在民间根深蒂固。"
    },
    content_12: {
      default: "        广东人将端午前后下的雨水称之为端阳水或龙降水、龙舟水，认为这种水是吉祥的水，有辟邪作用。仲夏端午苍龙群星飞升于正南中天。在民间信俗中龙是吉祥之物、和风化雨的主宰，龙飞天，行云布雨。自然现象上，每年的端午节前后，我国南方暖湿气流活跃，与从北方南下的冷空气在广东和广西、福建、海南交汇，往往会出现持续大范围的强降水。当端午强降水来时，江河水位迅速上涨，为扒龙舟提供了良好的场地条件，这是“龙舟水”得名的原因之一。浸龙舟水是流行于南方沿海一带的传统习俗，因为龙舟水寓意吉祥，龙舟水及龙舟滑过的水人们都认为是“大吉水”，按照传统说法浸龙舟水寓意吉祥如意、事事顺心。"
    },
    content_13: {
      default: "        旧时端五节妇女的头饰，多见于江南。一些地区亦称作健人。此物一说源于古代的步摇，一说即艾人的别样形式。《清嘉录》引《唐宋遗纪》云：“江谁南北，五日钗头彩胜之制，备极奇巧。…加以幡幢宝盖，绣球繁缨，钟铃百状，或贯以串，名曰豆娘，不可胜纪。”"
    },
    content_14: {
      default: "        躲端午，简称“躲午”，亦称“躲端五”，地方民俗，是旧时流传于我国北方的端午节习俗，指接新嫁或已嫁之女回家度节。古时北方俗以五月、五月五日为恶月、恶日，诸事多需避忌，因有接女归家躲端午之俗。《嘉靖隆庆志》亦记云：“已嫁之女召还过节”。又，《滦州志》：“女之新嫁者，于是月俱迎以归，谓之‘躲端午’”。"
    },
    content_15: {
      default: "        端午在古代北方人心目中是毒日、恶日，在民间这个思想一直传了下来，所以才有种种求平安、避五毒的习俗。其实，这是由于北方夏季天气燥热，人易生病，瘟疫也易流行；加上蛇虫繁殖，易咬伤人，这才形成此习惯。民间认为五月是五毒（蝎、蛇、蜈蚣、壁虎、蟾蜍）出没之时，要用各种方法以预防五毒之害。一般在屋中贴五毒图，以红纸印画五种毒物，再用五根针刺于五毒之上，即认为毒物被刺死，再不能横行了。民间又在衣饰上绣制五毒，在饼上缀五毒图案，均含驱除之意。"
    },
    content_16: {
      default: "        采药是最古老的端午节习俗之一。民间习俗认为，端午阳气旺盛，是草木一年中药性最强的一天，端午遍地皆药。采药是因端午前后草药茎叶成熟，药性好，才于此日形成此俗。在端午采药与设置种种可驱邪的花草，其来源久远，这一风俗在汉代时已影响广泛，后来也逐渐影响到东亚各国。《夏小正》载：“此日蓄药，以蠲除毒气。”《岁时广记》卷二十二“采杂药”引《荆楚岁时记》佚文：“五月五日，竞采杂药，可治百病。”后魏《齐民要术·杂记》中有五月捉蛤蟆的记载，亦是制药用。中国民间至今仍普遍保留着端午所采之药最为灵验的信仰。支撑这类俗信的原理，自然也是基于一种宇宙论式的解说：端午或这天午时，由于季节变动致使阳气极盛，但同时也是各种草药的生长最为茂盛之时，所以，这天采的草药最为灵验、有效。"
    },
    content_17: {
      default: "        饮蒲酒、雄黄、朱砂酒，以酒洒喷。《荆楚岁时记》：“以菖蒲（多年生草本植物，生在水边，地下有淡红色根茎，叶子形状像剑，肉穗花序。根茎可做香料，也可入药）或镂或屑，以冷酒。”蒲酒味芳香，有爽口之感，后来又在酒中加入雄黄、朱砂等。明冯应京《月令广义》：“五日用朱砂酒，辟邪解毒，用酒染额胸手足心，无会虺（古书上说的一种毒蛇）蛇之患。又以洒墙壁门窗，以避毒虫。”此俗流传较广。\n" + "        药料包括雄黄、朱耒、柏子、桃仁、蒲片、艾叶等，人们浸入酒后再用菖蒲艾蓬蘸洒墙壁角落、门窗、床下等，再用酒涂小儿耳鼻、肚脐，以驱毒虫，求小儿平安。另外有的地区还用雄黄酒末在小孩额上画“王”字，使小孩带有虎的印记，以用虎辟邪。这些活动，从卫生角度来看，还是有科学道理的。雄黄加水和酒洒于室内可消毒杀菌，饮蒲洒也颇有益。"
    },
    content_18: {
      default: "        端午下雨南方称之为龙舟水、端阳水，洗龙舟水能去晦气、带来吉祥。北方认为端阳无雨是丰年，端午日雨，鬼旺人灾；五月五日哨，人曝药，岁无灾；雨则鬼曝药，人多病；此种俗信在很久以前即已存在；陈元靓《岁时广记》引《提要录》云：“五月五日哨，人曝药，岁无灾。雨则鬼曝药，人多病。”又许月卿《次韵蜀人李施州芾端午》自注云：“临川人谓端午日雨，鬼旺人灾；清赵怀玉诗自注亦引有“端阳无雨是丰年”的谚语。"
    },
    content_19: {
      default: "        跳钟馗、闹钟馗：自晋代以来跳钟馗、闹钟馗，赐福镇宅就是端午节和春节的重要内容。悬挂钟馗画：最早的钟馗画，据说出自画圣吴道子之手。\n" + "        据北宋沈括《梦溪补笔谈》记载：“唐明皇患疾近一月，忽梦二鬼。小鬼窃得皇上玉笛及杨贵妃之紫香囊奔逃，大鬼乃捉小鬼刳其目，然后擘而啖之。……唐明皇醒后，即病愈，便召画工吴道子，嘱其按梦中情景画钟馗捉鬼图，道子挥笔即成。”后来，钟馗画渐渐走入民间，绘制钟馗画大都作于五月端午节这一天，或者端午节的前后几天。到了清代，江南苏、浙一带的居民大都在农历五月于大门或堂中挂钟馗图一月，以期驱邪除害、祛凶引福。"
    },
    content_20: {
      default: "        汉以前不见斗草之戏（《历代社会通俗事物考·尚秉和》）。起源无考，普遍认为与中医药学的产生有关。远古先民暇余以斗虫、斗草、斗兽等为戏自娱。收获之余，往往举行比赛，以对仗形式互报花名、草名，多者为赢，兼具植物知识、文学知识之妙趣；儿童则以叶柄相勾，捏住相拽，断者为输，再换一叶相斗。白居易《观儿戏》诗云：“弄尘或斗草，尽日乐嬉嬉。”\n" + "        《物原》云：“始于汉武”。据梁朝人宗懔在《荆楚岁时记》中云：“五月五日，四民并踏百草，又有斗草之戏。”《年华记丽》：“端午结庐蓄药，斗百草，缠五丝。”\n" + "        南北朝时称“踏百草”，唐代称“斗草”或“斗百草”。《刘宾客嘉话》云：“唐中宗朝，安乐公主五日斗百草。”宋代扩展至平日随时可斗。历代文人作品中对此多有描述。"
    },
    content_21: {
      default: "        马球，是骑在马上，持棍打球，古称击鞠。中国北方民族没有端午龙舟竞渡的习俗，但会在端午这天射柳和打马球，这很明显是来源于北方游牧民族的竞技遗俗。马球，是骑在马上，持棍打球，古称击鞠。"
    },
    content_22: {
      default: "        近代，在江西省赣州市上犹县，当地独有的客家民俗活动“九狮拜象”表演团在该县欢乐巡游。“九狮拜象”在传统的舞龙灯基础上，凸显舞狮象造型。“九狮拜象”距今已有300多年历史，既有传统文化的传承，又有客家人的文化创新，表达了对风调雨顺年成丰熟的祈愿和对安定幸福生活的向往。"
    },
    content_23: {
      default: "        粽籺：端午节食粽是我国的传统习俗，粽的形状很多，品种各异，一般还有正三角形、正四角形、尖三角形、方形、长形等各种形状。由于中国各地风味不同，主要有甜、咸两种。"
    },
    content_24: {
      default: "        雄黄酒：端午饮雄黄酒的习俗，从前在长江流域地区极为盛行。用研磨成粉末的雄黄泡制的白酒或黄酒。雄黄可以用做解毒剂、杀虫药。于是古代人就认为雄黄可以克制蛇、蝎等百虫，“善能杀百毒、辟百邪、制蛊毒，人佩之，入山林而虎狼伏，入川水而百毒避”。"
    },
    content_25: {
      default: "        五黄：江浙一带有端午节吃“五黄”的习俗。五黄，是指黄鱼、黄瓜、黄鳝、鸭蛋黄、雄黄酒（雄黄酒有毒性，一般都喝普通的黄酒代替雄黄酒）。也有其它说法，咸鸭蛋可以用黄豆替代。农历五月，江南人称五黄月。"
    },
    content_26: {
      default: "        打糕：端午节是吉林省延边朝鲜族人民隆重的节日。这一天最有代表性的食品是清香的打糕。打糕，就是将艾蒿与糯米饭，放置于独木凿成的大木槽里，用长柄木捶打制而成的米糕。这种食品很有民族特色，又可增添节日的气氛。"
    },
    content_27: {
      default: "        煎堆：福建晋江地区，端午节家家户户还要吃“煎堆”，就是用面粉、米粉或番薯粉和其他配料调成浓糊状煎成。相传古时闽南一带在端午节之前是雨季，阴雨连绵不止，民间说天公穿了洞，要“补天”。端午节吃了“煎堆”后雨便止了，人们说把天补好了。这种食俗由此而来。"
    }
  },
  data: function data() {
    return {
      defaultHost: _config2.default.defaultHost
    };
  },

  methods: {
    font: function font(size) {
      return util.getFontSize(size);
    }
  }
};

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dragonBoatFestival_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dragonBoatFestival_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dragonBoatFestival_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dragonBoatFestival_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dragonBoatFestival_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c0ba7482_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dragonBoatFestival_vue__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(144)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c0ba7482"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dragonBoatFestival_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c0ba7482_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dragonBoatFestival_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c0ba7482_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dragonBoatFestival_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\views\\dragonBoatFestival.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c0ba7482", Component.options)
  } else {
    hotAPI.reload("data-v-c0ba7482", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dragonBoatFestival = __webpack_require__(75);

var _dragonBoatFestival2 = _interopRequireDefault(_dragonBoatFestival);

var _mixins = __webpack_require__(1);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.mixin(_mixins2.default);

_dragonBoatFestival2.default.el = '#root';

new Vue(_dragonBoatFestival2.default);

/***/ })

/******/ });