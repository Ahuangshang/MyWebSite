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

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n.item[data-v-432bb6fa] {\n  padding-top: 25px;\n  padding-bottom: 25px;\n  padding-left: 35px;\n  padding-right: 35px;\n  min-height: 200px;\n  justify-content: center;\n  /*margin-bottom: 1px; FUTURE */\n  border-bottom-width: 1px;\n  border-color: #dddddd;\n}\n.item[data-v-432bb6fa]:active {\n  background-color: rgb(240, 240, 240);\n}\n.item-title[data-v-432bb6fa] {\n  font-size: 40px;\n  color: #303030;\n}\n.item-content[data-v-432bb6fa] {\n  margin-top: 5px;\n  font-size: 32px;\n  color: #000000;\n}\n.item-time[data-v-432bb6fa] {\n  font-size: 32px;\n  color: #6c6c6c;\n  text-align: right;\n}\n", ""]);

// exports


/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "list",
    _vm._l(_vm.datas, function(item, i) {
      return _c(
        "cell",
        {
          key: i,
          staticStyle: _vm.$processStyle(undefined),
          style: _vm.$processStyle(undefined),
          attrs: { append: "tree" }
        },
        [
          _c(
            "div",
            {
              staticClass: "item",
              staticStyle: _vm.$processStyle(undefined),
              style: _vm.$processStyle({ backgroundColor: _vm.bgColor }),
              on: {
                click: function($event) {
                  _vm.click(i)
                }
              }
            },
            [
              _c(
                "text",
                {
                  staticClass: "item-title",
                  staticStyle: _vm.$processStyle(undefined),
                  style: _vm.$processStyle(undefined)
                },
                [_vm._v(_vm._s(item.title))]
              ),
              _vm._v(" "),
              _c(
                "text",
                {
                  staticClass: "item-content",
                  staticStyle: _vm.$processStyle(undefined),
                  style: _vm.$processStyle(undefined)
                },
                [_vm._v(_vm._s(item.content))]
              ),
              _vm._v(" "),
              _c(
                "text",
                {
                  staticClass: "item-time",
                  staticStyle: _vm.$processStyle(undefined),
                  style: _vm.$processStyle(undefined)
                },
                [_vm._v(_vm._s(item.time))]
              )
            ]
          )
        ]
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-432bb6fa", { render: render, staticRenderFns: staticRenderFns })
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

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(110);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("9a0736d6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-432bb6fa\",\"scoped\":true,\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./message.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-432bb6fa\",\"scoped\":true,\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./message.vue");
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

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methods = __webpack_require__(2);

var _methods2 = _interopRequireDefault(_methods);

var _config = __webpack_require__(13);

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
//
//
//
//
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
  data: function data() {
    return {
      datas: [{
        viewName: "dragonBoatFestival",
        title: "端午节",
        content: "农历五月初五是端午节，中国传统节日。又称“端阳节”、“午日节”等，中国国家法定节假日之一，已并被列入世界非物质文化遗产名录。",
        time: "2019-05-30",
        shareUrl: _config2.default.defaultHost + "/html/dragonBoatFestival.html",
        shareImagePaht: _config2.default.HostImgUrl + 'dragonBoatFestival/dragonBoat_1.jpg'
      }, {
        viewName: "yuanxiao",
        title: "元宵节",
        content: "元宵佳节赏花灯，吉祥之星为你升；正月十五团圆夜，全家一起猜花灯。",
        time: "2018-03-02",
        shareUrl: "http://mp.weixin.qq.com/s/O29M03SiniaMhB-bieVNVg",
        shareImagePaht: ''
      }, {
        viewName: "springFestival",
        title: "春节",
        content: "春节是指汉字文化圈传统上的农历新年，俗称“年节”，传统名称为新年、大年、新岁，但口头上又称度岁、庆新岁、过年。",
        time: "2018-02-15",
        shareUrl: _config2.default.defaultHost + "/html/springFestival.html",
        shareImagePaht: _config2.default.HostImgUrl + 'springFestival/img_1.jpg'
      }, {
        viewName: "dongzhi",
        title: "冬至",
        content: "冬至是农历的重要节气，也是中华民族的传统节日。早在春秋时代，中国就已经用土圭观测出冬至，古人认为自冬至起阳气回升，代表着下一个循环的开始。冬至是重要的养生时期，应注意防寒保暖、保肝护肝。",
        time: "2017-12-22",
        shareUrl: _config2.default.defaultHost + "/html/dongzhi.html",
        shareImagePaht: _config2.default.HostImgUrl + 'dongzhi/dongzhi_1.jpg'
      }, {
        viewName: "yieryisan",
        title: "国家公祭日",
        content: "南京大屠杀死难者国家公祭仪式于12月13日上午10时举行。",
        time: "2017-12-12",
        shareUrl: _config2.default.defaultHost + "/html/yieryisan.html",
        shareImagePaht: ''
      }, {
        viewName: "mid-autumn-festival",
        title: "中秋节",
        content: "中秋节自古便有祭月、赏月、拜月、吃月饼、赏桂花、饮桂花酒等习俗，流传至今，久经不息。中秋节以月之圆兆人之团圆，为寄托思念故乡，思念亲人之情，祈盼丰收、幸福，成为丰富多彩、弥足珍贵的文化遗产。中秋节与端午节、春节、清明节并称为中国四大传统节日。",
        time: "2017-10-04",
        shareUrl: _config2.default.defaultHost + "/html/mid-Autumn-festival.html",
        shareImagePaht: _config2.default.HostImgUrl + 'mid_autumn/mid-autumn.jpg'
      }, {
        viewName: "guanggao",
        title: "开业大吉",
        content: "视频VIP豪送|庆国庆、迎中秋，万份视频VIP等你来领！",
        time: "2017-10-01",
        shareUrl: _config2.default.defaultHost + "/html/guanggao.html",
        shareImagePaht: _config2.default.HostImgUrl + 'advertisement/ad.jpg'
      }, {
        viewName: "bailu",
        title: "白露",
        content: "白露是农历二十四节气中的第十五个节气，当太阳到达黄经165度时为白露。",
        time: "2017-09-07",
        shareUrl: _config2.default.defaultHost + '/html/bailu.html',
        shareImagePaht: _config2.default.HostImgUrl + 'bailu/img_1.jpg'
      }],
      bgColor: "#ffffff",
      title: "",
      content: "",
      time: ""

    };
  },

  methods: {
    click: function click(i) {
      if (this.datas[i].viewName === 'yuanxiao') {
        weex.requireModule('event').openView('className=cn.ltwc.cft.activity.MyX5WebView&ltkj&webUrl=' + this.datas[i].shareUrl + '&ltkj&webTitle=' + this.datas[i].title + '&ltkj&shareUrl=' + this.datas[i].shareUrl);
      } else {
        weex.requireModule('event').openView('className=cn.ltwc.cft.weex.WeexActivity&ltkj&jsName=' + this.datas[i].viewName + '&ltkj&webTitle=' + this.datas[i].title + '&ltkj&shareUrl=' + this.datas[i].shareUrl + '&ltkj&shareImagePath=' + this.datas[i].shareImagePaht);
      }
    }
  },
  created: function created() {
    if (_methods2.default.isweb()) {
      window.temp_this = this;
      _methods2.default.registerModules();
    }
  }
};

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_432bb6fa_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_message_vue__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(139)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-432bb6fa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_432bb6fa_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_message_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_432bb6fa_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_message_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\views\\message.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-432bb6fa", Component.options)
  } else {
    hotAPI.reload("data-v-432bb6fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _message = __webpack_require__(78);

var _message2 = _interopRequireDefault(_message);

var _mixins = __webpack_require__(1);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.mixin(_mixins2.default);

_message2.default.el = '#root';

new Vue(_message2.default);

/***/ })

/******/ });