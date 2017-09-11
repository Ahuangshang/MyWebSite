// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _chart = __webpack_require__(131);

	var _chart2 = _interopRequireDefault(_chart);

	var _mixins = __webpack_require__(130);

	var _mixins2 = _interopRequireDefault(_mixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Vue.mixin(_mixins2.default);

	_chart2.default.el = '#root';

	new Vue(_chart2.default);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * 框架中常用的工具方法
	 */

	var modal = weex.requireModule('modal');
	var animation = weex.requireModule('animation');
	var navigator = weex.requireModule('navigator');
	var navigatorEx = weex.requireModule("NavigatorExModule");

	var common = {
	    //components下的组件
	    "buiActionSheet": __webpack_require__(6),
	    "buiButton": __webpack_require__(14),
	    "buiCheckbox": __webpack_require__(18),
	    "buiDialog": __webpack_require__(22),
	    "buiDropdown": __webpack_require__(26),
	    "buiHeader": __webpack_require__(30),
	    "buiIcon": __webpack_require__(34),
	    "buiImage": __webpack_require__(39),
	    "buiLazyRender": __webpack_require__(42),
	    "buiLoad": __webpack_require__(46),
	    "buiMask": __webpack_require__(9),
	    "buiPanel": __webpack_require__(50),
	    "buiRadio": __webpack_require__(54),
	    "buiSearchbarCenter": __webpack_require__(58),
	    "buiSearchbarLeft": __webpack_require__(63),
	    "buiSliderBar": __webpack_require__(68),
	    "buiSwitch": __webpack_require__(73),
	    "buiTabbar": __webpack_require__(77),
	    "buiTabbarItem": __webpack_require__(80),
	    "buiTabbarItemA" :__webpack_require__(84) ,
	    "buiTabbarScroll": __webpack_require__(87),
	    "buiTabbarScrollItem": __webpack_require__(90),
	    "buiTip": __webpack_require__(95),
	    "buiVideo": __webpack_require__(99),
	    "buiContent": __webpack_require__(102),
	    "buiContentScroll": __webpack_require__(105),
	    "buiImageSlider": __webpack_require__(108),

	    "toast": function (msg) {
	        modal.toast({
	            message: msg,
	            duration: 0.4
	        });
	    },
	    "alert": function (msg, callback, option) {
	        var okTitle = "确定";
	        if (option) {
	            if (option.okTitle)
	                okTitle = option.okTitle;
	        }
	        modal.alert({
	            message: msg,
	            duration: 0.4,
	            okTitle: okTitle
	        }, function (value) {
	            callback && callback(value);
	        });
	    },
	    "confirm": function (msg, callback, option) {
	        var okTitle = "确定", cancelTitle = "取消";
	        if (option) {
	            if (option.okTitle)
	                okTitle = option.okTitle;
	            if (option.cancelTitle)
	                cancelTitle = option.cancelTitle;
	        }
	        modal.confirm({
	            message: msg,
	            duration: 0.4,
	            okTitle: okTitle,
	            cancelTitle: cancelTitle,
	        }, function (value) {
	            callback && callback(value);
	        });
	    },
	    "show": function (params, callback) {
	        var el = params.id;
	        if (!el) {
	            return;
	        }
	        var duration = params.duration;
	        var transform = params.transform || 'translate(0, 0)';
	        var transformOrigin = params.transformOrigin || 'center center';
	        var timingFunction = params.timingFunction || 'ease';

	        animation.transition(el, {
	            styles: {
	                opacity: '1',
	                transform: transform,
	                transformOrigin: transformOrigin
	            },
	            duration: duration || 0,
	            timingFunction: timingFunction,
	            delay: 0
	        }, function () {
	            callback && callback();
	        });
	    },
	    "hide": function (params, callback) {
	        var el = params.id;
	        if (!el) {
	            return;
	        }
	        var duration = params.duration;
	        var transform = params.transform || 'translate(0, 0)';
	        var transformOrigin = params.transformOrigin || 'center center';
	        var timingFunction = params.timingFunction || 'ease';

	        animation.transition(el, {
	            styles: {
	                opacity: '0',
	                transform: transform,
	                transformOrigin: transformOrigin
	            },
	            duration: duration || 0,
	            timingFunction: timingFunction,
	            delay: 0
	        }, function () {
	            callback && callback();
	        });
	    },
	    "getContextPath": function () {
	        var url;
	        var bundleUrl = weex.config.bundleUrl;
	        url = bundleUrl.split('/').slice(0, -1).join('/');
	        return url;
	    },
	    "push": function (url, params) {
	        var paramsStr = "";
	        if (params) {
	            for (var key in params) {
	                paramsStr += key + "=" + encodeURIComponent(params[key]) + "&";
	            }
	        }
	        if (url.indexOf('?') < 0) {
	            url += "?";
	        }
	        url += paramsStr;
	        //link平台中使用navigatorEx,debugtool中使用navigator
	        try {
	            navigatorEx.push(url);
	        } catch (ex) {
	            navigator.push({
	                url: url,
	                animated: 'true'
	            }, function (e) {
	            });
	        }
	    },
	    "pop": function () {
	        navigator.pop({
	            animated: 'true'
	        }, function (e) {
	        });
	    },
	    "getPageParams": function () {
	        var params = {};
	        var url = weex.config.bundleUrl;
	        var index = url.indexOf("?");
	        if (index > 0) {
	            var query = url.substring(index + 1);
	            var temp = query.split('&');
	            var key, value;
	            for (var p in temp) {
	                if (temp[p]) {
	                    key = temp[p].split('=')[0];
	                    value = temp[p].split('=')[1];
	                    params[key] = decodeURIComponent(value);
	                }
	            }
	        }
	        return params;
	    }
	}

	module.exports = common;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(7)
	)

	/* script */
	__vue_exports__ = __webpack_require__(8)

	/* template */
	var __vue_template__ = __webpack_require__(13)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-actionsheet.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6053d379"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = {
	  "bui-actionsheet-box": {
	    "position": "fixed",
	    "left": 0,
	    "right": 0,
	    "margin": 50,
	    "marginTop": 0,
	    "flexDirection": "column",
	    "overflow": "hidden"
	  },
	  "bui-actionsheet-top": {
	    "borderRadius": 10,
	    "overflow": "hidden",
	    "backgroundColor": "#ffffff"
	  },
	  "bui-actionsheet-bottom": {
	    "marginTop": 15
	  },
	  "bui-actionsheet-title": {
	    "padding": 30,
	    "textAlign": "center",
	    "fontSize": 28,
	    "color": "#9ea7b4"
	  },
	  "bui-actionsheet-content": {
	    "flexDirection": "column",
	    "flex": 1
	  },
	  "bui-actionsheet-list": {
	    "borderTopWidth": 1,
	    "borderTopColor": "#d7dde4",
	    "padding": 30,
	    "textAlign": "center",
	    "fontSize": 34,
	    "color": "#3399ff",
	    "backgroundColor:active": "#f5f5f5"
	  },
	  "bui-actionsheet-btn": {
	    "fontSize": 34,
	    "color": "#3399ff",
	    "fontWeight": "bold",
	    "backgroundColor": "#ffffff",
	    "padding": 30,
	    "textAlign": "center",
	    "borderRadius": 10,
	    "backgroundColor:active": "#f5f5f5"
	  }
	}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule('animation');
	module.exports = {
	  props: {
	    title: {
	      default: "请选择操作"
	    },
	    items: {
	      type: Array
	    },
	    show: {
	      type: Boolean,
	      default: false
	    },
	    button: {
	      default: "取消"
	    }
	  },
	  computed: {
	    "bottom": function bottom() {
	      //根据下拉菜单内容计算bottom距离
	      var length = this.items.length;
	      var len = (length + 1) * 100 + 80;
	      console.log(len);
	      return len;
	    }
	  },
	  components: {
	    'bui-mask': __webpack_require__(9)
	  },
	  methods: {
	    //动画操作
	    animationFn: function animationFn(el, translate, timing, fn) {
	      animation.transition(el, {
	        styles: {
	          transform: translate,
	          transformOrigin: 'center center'
	        },
	        duration: 200, //ms
	        timingFunction: timing,
	        delay: 0 //ms
	      }, function () {
	        fn && fn();
	      });
	    },
	    //打开上拉菜单
	    "open": function open() {
	      console.log("open" + this.bottom);
	      var _this = this;
	      var el = _this.$refs.actionsheetBox;
	      var translate = 'translate(0px, -' + (_this.bottom + 20) + 'px, 0px)';
	      _this.animationFn(el, translate, 'ease-in');
	    },
	    //点击mask遮罩层
	    "layoutClick": function layoutClick() {
	      var _this = this;
	      var el = this.$refs.actionsheetBox;
	      var translate = 'translate(0px, ' + (_this.bottom + 20) + 'px, 0px)';
	      _this.animationFn(el, translate, 'ease-in', function () {
	        _this.show = false;
	        _this.$emit("close");
	      });
	    },
	    //上拉菜单项点击事件
	    "actionsheetItemClick": function actionsheetItemClick(item) {
	      var _this = this;
	      var el = this.$refs.actionsheetBox;
	      var translate = 'translate(0px, ' + (_this.bottom + 20) + 'px, 0px)';
	      _this.animationFn(el, translate, 'ease-in', function () {
	        _this.show = false;
	        _this.$emit('itemClick', item);
	      });
	    },
	    //上拉菜单按钮点击事件
	    "actionsheetBtnClick": function actionsheetBtnClick() {
	      var _this = this;
	      var el = this.$refs.actionsheetBox;
	      var translate = 'translate(0px, ' + (_this.bottom + 20) + 'px, 0px)';
	      _this.animationFn(el, translate, 'ease-in', function () {
	        _this.show = false;
	        _this.$emit('btnClick');
	      });
	    }
	  }
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(10)
	)

	/* script */
	__vue_exports__ = __webpack_require__(11)

	/* template */
	var __vue_template__ = __webpack_require__(12)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-mask.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-00198e0c"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = {
	  "bui-mask": {
	    "position": "fixed",
	    "left": 0,
	    "right": 0,
	    "top": 0,
	    "bottom": 0,
	    "backgroundColor": "#000000",
	    "opacity": 0.3
	  }
	}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//


	module.exports = {
	    props: {
	        "opacity": {
	            default: '0.2'
	        }
	    },
	    methods: {
	        "_click": function _click() {
	            this.$emit("click");
	        }
	    }
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["bui-mask"],
	    style: {
	      'opacity': _vm.opacity
	    },
	    on: {
	      "click": _vm._click
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["bui-actionsheet"]
	  }, [(_vm.show) ? _c('bui-mask', {
	    on: {
	      "click": _vm.layoutClick
	    }
	  }) : _vm._e(), (_vm.show) ? _c('div', {
	    ref: "actionsheetBox",
	    staticClass: ["bui-actionsheet-box"],
	    style: {
	      'bottom': '-' + _vm.bottom + 'px'
	    }
	  }, [_c('div', {
	    staticClass: ["bui-actionsheet-top"]
	  }, [_c('text', {
	    staticClass: ["bui-actionsheet-title"]
	  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
	    staticClass: ["bui-actionsheet-content"]
	  }, _vm._l((_vm.items), function(item) {
	    return _c('text', {
	      staticClass: ["bui-actionsheet-list"],
	      on: {
	        "click": function($event) {
	          _vm.actionsheetItemClick(item)
	        }
	      }
	    }, [_vm._v(_vm._s(item))])
	  }))]), _c('div', {
	    staticClass: ["bui-actionsheet-bottom"]
	  }, [_c('text', {
	    staticClass: ["bui-actionsheet-btn"],
	    on: {
	      "click": _vm.actionsheetBtnClick
	    }
	  }, [_vm._v(_vm._s(_vm.button))])])]) : _vm._e()], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(15)
	)

	/* script */
	__vue_exports__ = __webpack_require__(16)

	/* template */
	var __vue_template__ = __webpack_require__(17)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-button.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-28729952"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = {
	  "btn": {
	    "height": 100,
	    "lineHeight": 100,
	    "fontSize": 34,
	    "textAlign": "center",
	    "paddingLeft": 20,
	    "paddingRight": 20
	  },
	  "btn-primary": {
	    "backgroundColor": "#3399ff",
	    "color": "#ffffff",
	    "backgroundColor:active": "#3091f2"
	  },
	  "btn-success": {
	    "backgroundColor": "#00cc66",
	    "color": "#ffffff",
	    "backgroundColor:active": "#00c277"
	  },
	  "btn-info": {
	    "backgroundColor": "#5da3f6",
	    "backgroundColor:active": "#3399ff"
	  },
	  "btn-warning": {
	    "backgroundColor": "#ff9900",
	    "color": "#ffffff",
	    "backgroundColor:active": "#f38c00"
	  },
	  "btn-danger": {
	    "backgroundColor": "#ff4e24",
	    "color": "#ffffff",
	    "backgroundColor:active": "#fa3300"
	  },
	  "btn-disabled": {
	    "backgroundColor": "#d9e1ec",
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#e5e3df",
	    "color": "#9ea7b4"
	  },
	  "btn-default": {
	    "backgroundColor": "#f5f5f5",
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#e5e3df",
	    "backgroundColor:active": "#e5e3df"
	  }
	}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        "type": { default: 'default' },
	        "value": { default: 'Button' },
	        "disabled": { default: false },
	        "radius": { default: "0px" }
	    },
	    methods: {
	        "_click": function _click(e) {
	            if (!this.disabled) {
	                this.$emit("click", e);
	            }
	        },
	        "_longpress": function _longpress(e) {
	            if (!this.disabled) {
	                this.$emit("longpress", e);
	            }
	        }
	    }
	};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('text', {
	    class: ['btn', 'btn-' + (_vm.disabled ? 'disabled' : _vm.type)],
	    style: {
	      'border-radius': _vm.radius
	    },
	    on: {
	      "longpress": function($event) {
	        _vm._longpress($event)
	      },
	      "click": function($event) {
	        _vm._click($event)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.value))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(19)
	)

	/* script */
	__vue_exports__ = __webpack_require__(20)

	/* template */
	var __vue_template__ = __webpack_require__(21)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-checkbox.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-7a04db63"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = {
	  "radio-box": {
	    "alignItems": "center",
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 5,
	    "marginRight": 40,
	    "paddingRight": 20
	  },
	  "radio-label": {
	    "fontSize": 30
	  },
	  "disabled": {
	    "opacity": 0.5
	  },
	  "switch-box": {
	    "height": 80
	  },
	  "switch": {
	    "position": "absolute",
	    "right": 0,
	    "top": 0
	  },
	  "switch-label": {
	    "fontSize": 30,
	    "position": "absolute",
	    "top": 10,
	    "left": 0
	  },
	  "flex-column": {
	    "flexDirection": "column"
	  },
	  "flex-row": {
	    "flexDirection": "row"
	  }
	}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        "direction": {
	            type: String,
	            default: 'horizontal' // horizontal | vertical
	        },
	        "items": {
	            type: Object,
	            default: []
	        },
	        "selectedColor": {
	            type: String,
	            default: "#00cc66"
	        },
	        "unSelectedColor": {
	            type: String,
	            default: "#9ea7b4"
	        }
	    },
	    computed: {
	        changeDirection: function changeDirection() {
	            return this.direction == "horizontal" ? "flex-row" : "flex-column";
	        }
	    },
	    data: function data() {
	        return {
	            "selectItems": [],
	            checkboxItems: []
	        };
	    },
	    methods: {
	        "select": function select(v) {
	            var self = this;
	            v.select = !v.select;

	            //选择组数据
	            var newAry = [];
	            self.checkboxItems.forEach(function (val, i) {
	                if (val.select) newAry.push(val);
	            });
	            this.$emit("change", v, newAry);
	        }
	    },
	    created: function created() {
	        this.checkboxItems = JSON.parse(JSON.stringify(this.items));
	    }
	};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: [_vm.changeDirection]
	  }, _vm._l((_vm.checkboxItems), function(v) {
	    return _c('div', {
	      staticClass: ["radio-box", "flex-row"],
	      class: [v.disabled ? 'disabled' : ''],
	      on: {
	        "click": function($event) {
	          _vm.select(v)
	        }
	      }
	    }, [(v.select) ? _c('div', [_c('bui-icon', {
	      attrs: {
	        "name": "icon-checkbox-on",
	        "color": _vm.selectedColor
	      },
	      on: {
	        "click": function($event) {
	          _vm.select(v)
	        }
	      }
	    })], 1) : _vm._e(), (!v.select) ? _c('div', [_c('bui-icon', {
	      attrs: {
	        "name": "icon-radio",
	        "color": _vm.unSelectedColor
	      },
	      on: {
	        "click": function($event) {
	          _vm.select(v)
	        }
	      }
	    })], 1) : _vm._e(), _c('text', {
	      staticClass: ["radio-label"]
	    }, [_vm._v(_vm._s(v.title))])])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(23)
	)

	/* script */
	__vue_exports__ = __webpack_require__(24)

	/* template */
	var __vue_template__ = __webpack_require__(25)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-dialog.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-7ef51730"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = {
	  "bui-dialog-mask": {
	    "backgroundColor": "#000000",
	    "position": "absolute",
	    "top": 0,
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "flex": 1,
	    "opacity": 0.7
	  },
	  "bui-dialog": {
	    "position": "fixed",
	    "backgroundColor": "#ffffff",
	    "borderRadius": 10,
	    "height": 400,
	    "top": 300,
	    "left": 50,
	    "right": 50,
	    "flex": 1
	  },
	  "bui-dialog-title": {
	    "justifyContent": "center",
	    "height": 80,
	    "paddingLeft": 30,
	    "paddingRight": 30
	  },
	  "dialog-title-text": {
	    "color": "#000000",
	    "fontSize": 32
	  },
	  "bui-dialog-content": {
	    "height": 220,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "paddingBottom": 30
	  },
	  "bui-dialog-footer": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 80,
	    "borderTopWidth": 1,
	    "borderTopStyle": "solid",
	    "borderTopColor": "#d7dde4"
	  },
	  "dialog-action-text": {
	    "flex": 1,
	    "textAlign": "center",
	    "fontSize": 32,
	    "color": "#3399ff",
	    "borderRightWidth": 1,
	    "borderRightStyle": "solid",
	    "borderRightColor": "#d7dde4",
	    "color:active": "#000000"
	  }
	}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        show: {
	            type: Boolean,
	            default: false
	        },
	        title: { default: "标题" },
	        buttons: {
	            default: "取消,确定"
	        }
	    },
	    computed: {
	        "getButtons": function getButtons() {
	            return this.buttons.split(',');
	        }
	    },
	    components: {
	        'bui-mask': __webpack_require__(9)
	    },
	    methods: {
	        "_click": function _click(text) {
	            this.$emit("btnClick", text);
	        },
	        "_maskClick": function _maskClick() {
	            this.$emit("maskClick");
	        }
	    }

	};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["bui-dialog-layout"]
	  }, [(_vm.show) ? _c('bui-mask', {
	    on: {
	      "click": _vm._maskClick
	    }
	  }) : _vm._e(), (_vm.show) ? _c('div', {
	    staticClass: ["bui-dialog"]
	  }, [_c('div', {
	    staticClass: ["bui-dialog-title"]
	  }, [_c('text', {
	    staticClass: ["dialog-title-text"]
	  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
	    staticClass: ["bui-dialog-content"]
	  }, [_c('scroller', [_vm._t("default")], 2)]), _c('div', {
	    staticClass: ["bui-dialog-footer"]
	  }, _vm._l((_vm.getButtons), function(btn) {
	    return _c('text', {
	      staticClass: ["dialog-action-text"],
	      on: {
	        "click": function($event) {
	          _vm._click(btn)
	        }
	      }
	    }, [_vm._v(_vm._s(btn))])
	  }))]) : _vm._e()], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(27)
	)

	/* script */
	__vue_exports__ = __webpack_require__(28)

	/* template */
	var __vue_template__ = __webpack_require__(29)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-dropdown.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4aa02cb1"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = {
	  "bui-dropdown-box": {
	    "position": "fixed",
	    "opacity": 0,
	    "transform": "scale(0.9, 0.9)"
	  },
	  "bui-dropdown-content": {
	    "position": "relative",
	    "marginTop": 40,
	    "borderRadius": 10,
	    "flexDirection": "column",
	    "overflow": "hidden",
	    "padding": 15,
	    "flex": 1
	  },
	  "bui-dropdown-jiantou": {
	    "position": "absolute",
	    "top": 1
	  }
	}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule('animation');
	module.exports = {
	    data: function data() {
	        return {
	            widthDrop: "260px",
	            left: "0px",
	            top: "0px",
	            sanjiaoLeft: "40px",
	            position: {
	                width: '0px',
	                height: '0px',
	                left: '0px',
	                right: '0px'
	            }
	        };
	    },
	    props: {
	        datadrop: {},
	        bgColor: {
	            type: String,
	            default: "#ffffff"
	        },
	        iconColor: {
	            type: String,
	            default: "#ffffff"
	        },
	        show: {
	            type: Boolean,
	            default: false
	        },
	        center: {
	            type: Boolean,
	            default: false
	        },
	        autowidth: {
	            type: Boolean,
	            default: true
	        }
	    },
	    created: function created() {
	        //此url可以是指向本地字体图标文件路径 也可以直接用阿里巴巴字体图标库的的字体图标地址 ,比如'https://at.alicdn.com/t/font_3ppcziztn5wpcik9.ttf'
	        var bundleUrl = weex.config.bundleUrl;
	        var url = bundleUrl.split('/').slice(0, -1).join('/');
	        url += '/font/jiantou.ttf';
	        var domModule = weex.requireModule("dom");
	        domModule.addRule('fontFace', {
	            'fontFamily': 'jiantou',
	            'src': "url('" + url + "')"
	        });
	    },
	    computed: {},
	    components: {
	        'bui-mask': __webpack_require__(9)
	    },
	    methods: {
	        //动画操作
	        animationFn: function animationFn(el, opacity, translate, timing, fn) {
	            animation.transition(el, {
	                styles: {
	                    opacity: opacity,
	                    transform: translate,
	                    transformOrigin: 'center center'
	                },
	                duration: 200, //ms
	                timingFunction: timing,
	                delay: 0 //ms
	            }, function () {
	                fn && fn();
	            });
	        },
	        //打开上拉菜单
	        "open": function open(data) {
	            var _this = this;
	            var el = _this.$refs.dropdownBox;

	            _this.position = data.position;
	            //autowidth默认true，宽度按触发元素宽度自适应，如果控制宽度可设置为false，宽度为260px
	            if (_this.autowidth) {
	                if (_this.position.width >= 260) {
	                    _this.widthDrop = _this.position.width;
	                    if (_this.center) {
	                        _this.sanjiaoLeft = _this.position.width / 2 - 20;
	                        _this.left = _this.position.x;
	                    } else {
	                        if (750 - _this.position.x < 260) {
	                            _this.left = _this.position.x - (260 - (750 - _this.position.x)) - 20;
	                            _this.sanjiaoLeft = 260 - 80;
	                        } else {
	                            _this.left = _this.position.x + "px";
	                        }
	                    }
	                } else {
	                    if (_this.center) {
	                        _this.sanjiaoLeft = 260 / 2 - 20;
	                        _this.left = _this.position.x - (260 - _this.position.width) / 2;
	                    } else {
	                        if (750 - _this.position.x < 260) {
	                            _this.left = _this.position.x - (260 - (750 - _this.position.x)) - 20;
	                            _this.sanjiaoLeft = 260 - 80;
	                        } else {
	                            _this.left = _this.position.x + "px";
	                        }
	                    }
	                }
	            } else {
	                if (_this.center) {
	                    //                        _this.sanjiaoLeft = _this.position.x + 260/2 -40;
	                    _this.sanjiaoLeft = 260 / 2 - 20;
	                    _this.left = _this.position.x + _this.position.width / 2 - 130;
	                } else {
	                    if (_this.position.x == 0) {
	                        _this.left = _this.position.x + 20;
	                    }
	                    if (750 - _this.position.x <= 260) {
	                        _this.left = _this.position.x - (260 - (750 - _this.position.x)) - 20;
	                        _this.sanjiaoLeft = 260 - 80;
	                    }
	                }
	            }
	            //top位置适配
	            var env = weex.config.env.platform.toLowerCase();

	            switch (env) {
	                case "ios":
	                    _this.top = _this.position.y - 20;
	                    break;
	                case "android":
	                    _this.top = _this.position.y - 20;
	                    break;
	                case "web":
	                    _this.top = _this.position.y - 20;
	                    break;
	                default:
	                    console.log(env);
	            }

	            var translate = 'translate(0px, ' + parseInt(_this.position.height) + 'px)';
	            _this.animationFn(el, "1", translate, 'ease-in');
	        },
	        //点击mask遮罩层
	        "layoutClick": function layoutClick() {
	            var _this = this;
	            var el = this.$refs.dropdownBox;

	            //                var translate = 'translate(0px, -'+parseInt(_this.position.height)+'px)';
	            var translate = 'scale(0.9, 0.9)';
	            _this.animationFn(el, "0", translate, 'ease-out', function () {
	                _this.show = false;
	                _this.$emit("close");
	            });
	        }

	    }
	};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["bui-dropdown"]
	  }, [(_vm.show) ? _c('bui-mask', {
	    on: {
	      "click": _vm.layoutClick
	    }
	  }) : _vm._e(), (_vm.show) ? _c('div', {
	    ref: "dropdownBox",
	    staticClass: ["bui-dropdown-box"],
	    style: {
	      'left': _vm.left,
	      'top': _vm.top,
	      'width': _vm.widthDrop
	    }
	  }, [_c('div', {
	    staticClass: ["bui-dropdown-content"],
	    style: {
	      'background-color': _vm.bgColor
	    }
	  }, [_vm._t("default")], 2), _c('text', {
	    staticClass: ["bui-dropdown-jiantou"],
	    style: {
	      color: _vm.iconColor,
	      fontSize: '40px',
	      'font-family': 'jiantou',
	      'left': _vm.sanjiaoLeft
	    }
	  }, [_vm._v("")])]) : _vm._e()], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(31)
	)

	/* script */
	__vue_exports__ = __webpack_require__(32)

	/* template */
	var __vue_template__ = __webpack_require__(33)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-header.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-ee1ba1a6"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = {
	  "bui-header-box": {
	    "flexDirection": "column",
	    "backgroundColor": "#3c763d"
	  },
	  "bui-header": {
	    "flex": 1,
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "position": "relative"
	  },
	  "bui-header-left": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "position": "absolute",
	    "left": 20,
	    "top": 0,
	    "bottom": 0
	  },
	  "bui-header-right": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "position": "absolute",
	    "right": 20,
	    "top": 0,
	    "bottom": 0
	  },
	  "bui-header-main": {
	    "justifyContent": "center",
	    "flex": 1,
	    "paddingLeft": 10,
	    "paddingRight": 10,
	    "flexDirection": "row"
	  },
	  "bui-header-title": {
	    "fontSize": 34,
	    "color": "#ffffff",
	    "textAlign": "center",
	    "paddingLeft": 15,
	    "paddingRight": 15,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "lines": 1,
	    "textOverflow": "ellipsis"
	  },
	  "bui-header-text": {
	    "fontSize": 32,
	    "color": "#ffffff",
	    "textAlign": "center",
	    "lines": 1
	  },
	  "bui-header-icon": {
	    "width": 48,
	    "height": 48
	  },
	  "bui-header-icon-next": {
	    "width": 48,
	    "height": 48,
	    "marginRight": 30
	  },
	  "pdl10": {
	    "paddingLeft": 10
	  },
	  "pdr10": {
	    "paddingRight": 10
	  }
	}

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	'use strict';

	var _module$exports;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var defaultItem = {
	    icon: '',
	    icons: '',
	    text: ''
	};
	module.exports = (_module$exports = {
	    data: function data() {
	        return {};
	    },
	    props: {
	        styleEx: {},
	        title: {
	            type: String,
	            default: ''
	        },
	        leftItem: {
	            type: Object,
	            default: function _default() {
	                return defaultItem;
	            }
	        },
	        rightItem: {
	            type: Object,
	            default: function _default() {
	                return defaultItem;
	            }
	        },
	        ios: {
	            type: Boolean,
	            default: true
	        }
	    }
	}, _defineProperty(_module$exports, 'data', function data() {
	    return {
	        height: '117px',
	        styleNew: {},
	        style: { 'background-color': '#4ca4fe' }
	    };
	}), _defineProperty(_module$exports, 'computed', {
	    iosfixed: function iosfixed() {
	        var ios = false;
	        if (!this.ios) {
	            ios = false;
	        } else {
	            //头部位置适配
	            var env = weex.config.env.platform.toLowerCase();
	            switch (env) {
	                case "ios":
	                    ios = true;
	                    break;
	                case "android":
	                    ios = false;
	                    break;
	                case "web":
	                    ios = false;
	                    break;
	                default:
	                    ios = false;
	            }
	        }
	        return ios;
	    }
	}), _defineProperty(_module$exports, 'methods', {
	    _leftClick: function _leftClick($event) {
	        this.$emit('leftClick', $event);
	    },
	    _rightClick: function _rightClick($event) {
	        this.$emit('rightClick', $event);
	    },
	    _centerClick: function _centerClick($event) {
	        this.$emit('centerClick', $event);
	    }
	}), _defineProperty(_module$exports, 'created', function created() {
	    var env = weex.config.env.platform.toLowerCase();
	    if (!this.ios || env == "android") {
	        this.height = '100px';
	    }
	    this.styleNew = Object.assign({}, this.style, this.styleEx, { 'height': this.height });
	}), _module$exports);

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["bui-header-box"],
	    style: _vm.styleNew
	  }, [(_vm.iosfixed) ? _c('div', {
	    style: {
	      'height': '30px'
	    }
	  }) : _vm._e(), _c('div', {
	    staticClass: ["bui-header"]
	  }, [_c('div', {
	    staticClass: ["bui-header-main"]
	  }, [_c('text', {
	    staticClass: ["bui-header-title"],
	    on: {
	      "click": function($event) {
	        _vm._centerClick($event)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
	    staticClass: ["bui-header-left"]
	  }, [(_vm.leftItem.icon || _vm.leftItem.icons) ? _c('bui-icon', {
	    staticClass: ["pdr10"],
	    attrs: {
	      "name": _vm.leftItem.icon || _vm.leftItem.icons,
	      "size": "45px",
	      "color": "#ffffff"
	    },
	    on: {
	      "click": function($event) {
	        _vm._leftClick($event)
	      }
	    }
	  }) : _vm._e(), (_vm.leftItem.text) ? _c('text', {
	    staticClass: ["bui-header-text"],
	    on: {
	      "click": function($event) {
	        _vm._leftClick($event)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.leftItem.text))]) : _vm._e(), _vm._t("left")], 2), _c('div', {
	    staticClass: ["bui-header-right"]
	  }, [(_vm.rightItem.icon || _vm.rightItem.icons) ? _c('bui-icon', {
	    staticClass: ["pdl10"],
	    attrs: {
	      "name": _vm.rightItem.icon || _vm.rightItem.icons,
	      "size": "45px",
	      "color": "#ffffff"
	    },
	    on: {
	      "click": function($event) {
	        _vm._rightClick($event)
	      }
	    }
	  }) : _vm._e(), (_vm.rightItem.text) ? _c('text', {
	    staticClass: ["bui-header-text"],
	    on: {
	      "click": function($event) {
	        _vm._rightClick($event)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.rightItem.text) + "\n            ")]) : _vm._e(), _vm._t("right")], 2)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(35)

	/* template */
	var __vue_template__ = __webpack_require__(38)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-icon.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//

	//引入he模块，使用它解决weex-template-compiler在编译阶段进行decode
	var he = __webpack_require__(36);
	module.exports = {
	    created: function created() {
	        //此url可以是指向本地字体图标文件路径 也可以直接用阿里巴巴字体图标库的的字体图标地址 ,比如'https://at.alicdn.com/t/font_3ppcziztn5wpcik9.ttf'
	        var bundleUrl = weex.config.bundleUrl;
	        var url = bundleUrl.split('/').slice(0, -1).join('/');
	        url += '/font/iconfont.ttf';
	        var domModule = weex.requireModule("dom");
	        domModule.addRule('fontFace', {
	            'fontFamily': 'iconfont',
	            'src': "url('" + url + "')"
	        });
	    },
	    data: function data() {
	        return {
	            //weex字体图标目前只支持unicode格式
	            iconItems: {

	                "icon-appreciate": "&#xe644;",
	                "icon-appreciatefill": "&#xe6e3",
	                "icon-check": "&#xe645;",
	                "icon-roundcheckfill": "&#xe656;",
	                "icon-roundcheck": "&#xe657;",
	                "icon-close": "&#xe646;",
	                "icon-roundclosefill": "&#xe658;",
	                "icon-roundclose": "&#xe659;",
	                "icon-delete": "&#xe6b4;",
	                "icon-deletefill": "&#xe6a6;",
	                "icon-add": "&#xe6da;",
	                "icon-roundadd": "&#xe6d9",
	                "icon-edit": "&#xe649;",
	                "icon-emoji": "&#xe64a;",
	                "icon-favorfill": "&#xe64b;",
	                "icon-favor": "&#xe64c;",
	                "icon-loadding": "&#xe64f;",
	                "icon-locationfill": "&#xe650;",
	                "icon-location": "&#xe651;",
	                "icon-phone": "&#xe652;",
	                "icon-roundrightfill": "&#xe65a;",
	                "icon-roundright": "&#xe65b;",
	                "icon-search": "&#xe65c;",
	                "icon-searchlist": "&#xe6fe",
	                "icon-time": "&#xe65f;",
	                "icon-timefill": "&#xe65e;",
	                "icon-taxi": "&#xe65d;",
	                "icon-unfold": "&#xe661;",
	                "icon-fold": "&#xe6de;",
	                "icon-warnfill": "&#xe662;",
	                "icon-warn": "&#xe663;",
	                "icon-camerafill": "&#xe664;",
	                "icon-camera": "&#xe665;",
	                "icon-commentfill": "&#xe666;",
	                "icon-comment": "&#xe667;",
	                "icon-likefill": "&#xe668;",
	                "icon-like": "&#xe669;",
	                "icon-notificationfill": "&#xe66a;",
	                "icon-notification": "&#xe66b;",
	                "icon-order": "&#xe66c;",
	                "icon-samefill": "&#xe66d;",
	                "icon-same": "&#xe66e;",
	                "icon-deliver": "&#xe671;",
	                "icon-evaluate": "&#xe672;",
	                "icon-pay": "&#xe673;",
	                "icon-send": "&#xe675;",
	                "icon-shop": "&#xe676;",
	                "icon-shopfill": "&#xe697;",
	                "icon-ticket": "&#xe677;",
	                "icon-left": "&#xe679;",
	                "icon-right": "&#xe6a3;",
	                "icon-cascades": "&#xe67c;",
	                "icon-discover": "&#xe67e;",
	                "icon-discoverfill": "&#xe6ba",
	                "icon-list": "&#xe682;",
	                "icon-more": "&#xe684;",
	                "icon-moreandroid": "&#xe6a5;",
	                "icon-myfill": "&#xe685;",
	                "icon-my": "&#xe686;",
	                "icon-scan": "&#xe689;",
	                "icon-settings": "&#xe68a;",
	                "icon-questionfill": "&#xe690;",
	                "icon-question": "&#xe691;",
	                "icon-form": "&#xe699;",
	                "icon-pic": "&#xe69b;",
	                "icon-picfill": "&#xe72c;",
	                "icon-filter": "&#xe69c;",
	                "icon-footprint": "&#xe69d;",
	                "icon-top": "&#xe69e;",
	                "icon-down": "&#xe703;",
	                "icon-pulldown": "&#xe69f;",
	                "icon-pullup": "&#xe6a0;",
	                "icon-refresh": "&#xe6a4;",
	                "icon-refund": "&#xe6ac;",
	                "icon-cart": "&#xe6af;",
	                "icon-cartfill": "&#xe6b9;",
	                "icon-qrcode": "&#xe6b0;",
	                "icon-remind": "&#xe6b2;",
	                "icon-profile": "&#xe6b7;",
	                "icon-profilefill": "&#xe77a;",
	                "icon-homefill": "&#xe6bb;",
	                "icon-home": "&#xe6b8;",
	                "icon-messagefill": "&#xe779;",
	                "icon-message": "&#xe6bc;",
	                "icon-addressbook": "&#xe6bd;",
	                "icon-link": "&#xe6bf;",
	                "icon-lock": "&#xe6c0;",
	                "icon-unlock": "&#xe6c2;",
	                "icon-vip": "&#xe6c3;",
	                "icon-vipcard": "&#xe6ee;",
	                "icon-activity": "&#xe6c5;",
	                "icon-activityfill": "&#xe775;",
	                "icon-friendaddfill": "&#xe6c9;",
	                "icon-friendadd": "&#xe6ca;",
	                "icon-friendfamous": "&#xe6cb;",
	                "icon-friend": "&#xe6cc;",
	                "icon-friendfill": "&#xe726;",
	                "icon-goods": "&#xe6cd;",
	                "icon-goodsfill": "&#xe778;",
	                "icon-selection": "&#xe6ce;",
	                "icon-selectionfill": "&#xe6e1;",
	                "icon-explore": "&#xe6d2;",
	                "icon-explorefill": "&#xe6dd;",
	                "icon-present": "&#xe6d3;",
	                "icon-presentfill": "&#xe732;",
	                "icon-squarecheckfill": "&#xe6d4;",
	                "icon-square": "&#xe6d5;",
	                "icon-squarecheck": "&#xe6d6;",
	                "icon-round": "&#xe6d7;",
	                "icon-roundfill": "&#xe6d8",
	                "icon-notificationforbidfill": "&#xe6db;",
	                "icon-game": "&#xe6df;",
	                "icon-redpacket": "&#xe6e0;",
	                "icon-similar": "&#xe6e2;",
	                "icon-infofill": "&#xe6e4;",
	                "icon-info": "&#xe6e5;",
	                "icon-forwardfill": "&#xe6ea;",
	                "icon-forward": "&#xe6eb;",
	                "icon-rechargefill": "&#xe6ec;",
	                "icon-recharge": "&#xe6ed;",
	                "icon-voice": "&#xe6ef;",
	                "icon-voicefill": "&#xe6f0;",
	                "icon-friendfavor": "&#xe6f1;",
	                "icon-wifi": "&#xe6f2;",
	                "icon-share": "&#xe6f3;",
	                "icon-wefill": "&#xe6f4;",
	                "icon-we": "&#xe6f5;",
	                "icon-lightauto": "&#xe6f6;",
	                "icon-lightforbid": "&#xe6f7;",
	                "icon-lightfill": "&#xe6f8;",
	                "icon-light": "&#xe6fa;",
	                "icon-camerarotate": "&#xe6f9;",
	                "icon-barcode": "&#xe6fb;",
	                "icon-flashlightclose": "&#xe6fc;",
	                "icon-flashlightopen": "&#xe6fd;",
	                "icon-service": "&#xe6ff;",
	                "icon-servicefill": "&#xe737;",
	                "icon-sort": "&#xe700;",
	                "icon-mobile": "&#xe704;",
	                "icon-mobilefill": "&#xe705;",
	                "icon-copy": "&#xe706;",
	                "icon-countdownfill": "&#xe707;",
	                "icon-countdown": "&#xe708;",
	                "icon-noticefill": "&#xe709;",
	                "icon-notice": "&#xe70a;",
	                "icon-upstagefill": "&#xe70e;",
	                "icon-upstage": "&#xe70f;",
	                "icon-choicenessfill": "&#xe714;",
	                "icon-choiceness": "&#xe715;",
	                "icon-clothesfill": "&#xe716;",
	                "icon-clothes": "&#xe717;",
	                "icon-creativefill": "&#xe718;",
	                "icon-creative": "&#xe719;",
	                "icon-female": "&#xe71a;",
	                "icon-male": "&#xe71c;",
	                "icon-keyboard": "&#xe71b;",
	                "icon-pullleft": "&#xe71f;",
	                "icon-pullright": "&#xe720;",
	                "icon-rankfill": "&#xe721;",
	                "icon-rank": "&#xe722;",
	                "icon-bad": "&#xe723;",
	                "icon-cameraadd": "&#xe724;",
	                "icon-cameraaddfill": "&#xe727;",
	                "icon-focus": "&#xe725;",
	                "icon-apps": "&#xe729;",
	                "icon-paintfill": "&#xe72a;",
	                "icon-paint": "&#xe72b;",
	                "icon-refresharrow": "&#xe72d;",
	                "icon-markfill": "&#xe730;",
	                "icon-mark": "&#xe731;",
	                "icon-repeal": "&#xe733;",
	                "icon-album": "&#xe734;",
	                "icon-peoplefill": "&#xe735;",
	                "icon-people": "&#xe736;",
	                "icon-repair": "&#xe738;",
	                "icon-repairfill": "&#xe73a;",
	                "icon-file": "&#xe739;",
	                "icon-taoxiaopu": "&#xe73b;",
	                "icon-attentionfill": "&#xe73c;",
	                "icon-attention": "&#xe73d;",
	                "icon-commandfill": "&#xe73e;",
	                "icon-command": "&#xe73f;",
	                "icon-communityfill": "&#xe740;",
	                "icon-community": "&#xe741;",
	                "icon-read": "&#xe743;",
	                "icon-calendar": "&#xe74a;",
	                "icon-cut": "&#xe74b;",
	                "icon-magic": "&#xe74c;",
	                "icon-backwardfill": "&#xe74d;",
	                "icon-forwardfill1": "&#xe74e;",
	                "icon-stop": "&#xe750;",
	                "icon-tagfill": "&#xe751;",
	                "icon-tag": "&#xe752;",
	                "icon-group": "&#xe753;",
	                "icon-move": "&#xe754;",
	                "icon-all": "&#xe755;",
	                "icon-backdelete": "&#xe756;",
	                "icon-hotfill": "&#xe757;",
	                "icon-hot": "&#xe758;",
	                "icon-post": "&#xe759;",
	                "icon-radiobox": "&#xe75b;",
	                "icon-radioboxfill": "&#xe763;",
	                "icon-rounddown": "&#xe75c;",
	                "icon-upload": "&#xe75d;",
	                "icon-videofill": "&#xe75e;",
	                "icon-video": "&#xe75f;",
	                "icon-writefill": "&#xe760;",
	                "icon-write": "&#xe761;",
	                "icon-punch": "&#xe764;",
	                "icon-shake": "&#xe765;",
	                "icon-safe": "&#xe769;",
	                "icon-crownfill": "&#xe776;",
	                "icon-crown": "&#xe777;",
	                "icon-sound": "&#xe77b;",
	                "icon-sponsorfill": "&#xe77c;",
	                "icon-weunblock": "&#xe780;",
	                "icon-weblock": "&#xe77f;",
	                "icon-upblock": "&#xe77e;",
	                "icon-sponsor": "&#xe77d;",
	                "icon-babyfill": "&#xe710;",
	                "icon-baby": "&#xe711;",
	                "icon-add1": "&#xe767;",
	                "icon-move1": "&#xe768;",

	                "icon-user": "&#xe736;",
	                "icon-msg": "&#xe779;",
	                "icon-erweima": "&#xe6b0",
	                "icon-radio": "&#xe6d7;",
	                "icon-radio-on": "&#xe763;",
	                "icon-checkbox-on": "&#xe656;",
	                "icon-menu": "&#xe700;",
	                "icon-back": "&#xe679;",
	                "icon-go": "&#xe6a3;",
	                "icon-book": "&#xe742;",
	                "icon-success": "&#xe657;",
	                "icon-star": "&#xe64c;",
	                "icon-liwu": "&#xe6d3",
	                "icon-jiantou": "&#xe6de",
	                "icon-hongqi": "&#xe775"

	            }
	        };
	    },
	    props: {
	        name: {
	            type: String
	        },
	        color: {
	            type: String,
	            default: '#9ea7b4'
	        },
	        size: {
	            type: String,
	            default: '40px'
	        }
	    },
	    computed: {
	        //匹配对应的字体图标的unicode
	        getFontName: function getFontName() {
	            return he.decode(this.iconItems[this.name]);
	        }
	    },
	    methods: {
	        "_click": function _click($event) {
	            this.$emit("click", $event);
	        }
	    }
	};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/he v1.1.1 by @mathias | MIT license */
	;(function(root) {

		// Detect free variables `exports`.
		var freeExports = typeof exports == 'object' && exports;

		// Detect free variable `module`.
		var freeModule = typeof module == 'object' && module &&
			module.exports == freeExports && module;

		// Detect free variable `global`, from Node.js or Browserified code,
		// and use it as `root`.
		var freeGlobal = typeof global == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}

		/*--------------------------------------------------------------------------*/

		// All astral symbols.
		var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
		// All ASCII symbols (not just printable ASCII) except those listed in the
		// first column of the overrides table.
		// https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides
		var regexAsciiWhitelist = /[\x01-\x7F]/g;
		// All BMP symbols that are not ASCII newlines, printable ASCII symbols, or
		// code points listed in the first column of the overrides table on
		// https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides.
		var regexBmpWhitelist = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;

		var regexEncodeNonAscii = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g;
		var encodeMap = {'\xAD':'shy','\u200C':'zwnj','\u200D':'zwj','\u200E':'lrm','\u2063':'ic','\u2062':'it','\u2061':'af','\u200F':'rlm','\u200B':'ZeroWidthSpace','\u2060':'NoBreak','\u0311':'DownBreve','\u20DB':'tdot','\u20DC':'DotDot','\t':'Tab','\n':'NewLine','\u2008':'puncsp','\u205F':'MediumSpace','\u2009':'thinsp','\u200A':'hairsp','\u2004':'emsp13','\u2002':'ensp','\u2005':'emsp14','\u2003':'emsp','\u2007':'numsp','\xA0':'nbsp','\u205F\u200A':'ThickSpace','\u203E':'oline','_':'lowbar','\u2010':'dash','\u2013':'ndash','\u2014':'mdash','\u2015':'horbar',',':'comma',';':'semi','\u204F':'bsemi',':':'colon','\u2A74':'Colone','!':'excl','\xA1':'iexcl','?':'quest','\xBF':'iquest','.':'period','\u2025':'nldr','\u2026':'mldr','\xB7':'middot','\'':'apos','\u2018':'lsquo','\u2019':'rsquo','\u201A':'sbquo','\u2039':'lsaquo','\u203A':'rsaquo','"':'quot','\u201C':'ldquo','\u201D':'rdquo','\u201E':'bdquo','\xAB':'laquo','\xBB':'raquo','(':'lpar',')':'rpar','[':'lsqb',']':'rsqb','{':'lcub','}':'rcub','\u2308':'lceil','\u2309':'rceil','\u230A':'lfloor','\u230B':'rfloor','\u2985':'lopar','\u2986':'ropar','\u298B':'lbrke','\u298C':'rbrke','\u298D':'lbrkslu','\u298E':'rbrksld','\u298F':'lbrksld','\u2990':'rbrkslu','\u2991':'langd','\u2992':'rangd','\u2993':'lparlt','\u2994':'rpargt','\u2995':'gtlPar','\u2996':'ltrPar','\u27E6':'lobrk','\u27E7':'robrk','\u27E8':'lang','\u27E9':'rang','\u27EA':'Lang','\u27EB':'Rang','\u27EC':'loang','\u27ED':'roang','\u2772':'lbbrk','\u2773':'rbbrk','\u2016':'Vert','\xA7':'sect','\xB6':'para','@':'commat','*':'ast','/':'sol','undefined':null,'&':'amp','#':'num','%':'percnt','\u2030':'permil','\u2031':'pertenk','\u2020':'dagger','\u2021':'Dagger','\u2022':'bull','\u2043':'hybull','\u2032':'prime','\u2033':'Prime','\u2034':'tprime','\u2057':'qprime','\u2035':'bprime','\u2041':'caret','`':'grave','\xB4':'acute','\u02DC':'tilde','^':'Hat','\xAF':'macr','\u02D8':'breve','\u02D9':'dot','\xA8':'die','\u02DA':'ring','\u02DD':'dblac','\xB8':'cedil','\u02DB':'ogon','\u02C6':'circ','\u02C7':'caron','\xB0':'deg','\xA9':'copy','\xAE':'reg','\u2117':'copysr','\u2118':'wp','\u211E':'rx','\u2127':'mho','\u2129':'iiota','\u2190':'larr','\u219A':'nlarr','\u2192':'rarr','\u219B':'nrarr','\u2191':'uarr','\u2193':'darr','\u2194':'harr','\u21AE':'nharr','\u2195':'varr','\u2196':'nwarr','\u2197':'nearr','\u2198':'searr','\u2199':'swarr','\u219D':'rarrw','\u219D\u0338':'nrarrw','\u219E':'Larr','\u219F':'Uarr','\u21A0':'Rarr','\u21A1':'Darr','\u21A2':'larrtl','\u21A3':'rarrtl','\u21A4':'mapstoleft','\u21A5':'mapstoup','\u21A6':'map','\u21A7':'mapstodown','\u21A9':'larrhk','\u21AA':'rarrhk','\u21AB':'larrlp','\u21AC':'rarrlp','\u21AD':'harrw','\u21B0':'lsh','\u21B1':'rsh','\u21B2':'ldsh','\u21B3':'rdsh','\u21B5':'crarr','\u21B6':'cularr','\u21B7':'curarr','\u21BA':'olarr','\u21BB':'orarr','\u21BC':'lharu','\u21BD':'lhard','\u21BE':'uharr','\u21BF':'uharl','\u21C0':'rharu','\u21C1':'rhard','\u21C2':'dharr','\u21C3':'dharl','\u21C4':'rlarr','\u21C5':'udarr','\u21C6':'lrarr','\u21C7':'llarr','\u21C8':'uuarr','\u21C9':'rrarr','\u21CA':'ddarr','\u21CB':'lrhar','\u21CC':'rlhar','\u21D0':'lArr','\u21CD':'nlArr','\u21D1':'uArr','\u21D2':'rArr','\u21CF':'nrArr','\u21D3':'dArr','\u21D4':'iff','\u21CE':'nhArr','\u21D5':'vArr','\u21D6':'nwArr','\u21D7':'neArr','\u21D8':'seArr','\u21D9':'swArr','\u21DA':'lAarr','\u21DB':'rAarr','\u21DD':'zigrarr','\u21E4':'larrb','\u21E5':'rarrb','\u21F5':'duarr','\u21FD':'loarr','\u21FE':'roarr','\u21FF':'hoarr','\u2200':'forall','\u2201':'comp','\u2202':'part','\u2202\u0338':'npart','\u2203':'exist','\u2204':'nexist','\u2205':'empty','\u2207':'Del','\u2208':'in','\u2209':'notin','\u220B':'ni','\u220C':'notni','\u03F6':'bepsi','\u220F':'prod','\u2210':'coprod','\u2211':'sum','+':'plus','\xB1':'pm','\xF7':'div','\xD7':'times','<':'lt','\u226E':'nlt','<\u20D2':'nvlt','=':'equals','\u2260':'ne','=\u20E5':'bne','\u2A75':'Equal','>':'gt','\u226F':'ngt','>\u20D2':'nvgt','\xAC':'not','|':'vert','\xA6':'brvbar','\u2212':'minus','\u2213':'mp','\u2214':'plusdo','\u2044':'frasl','\u2216':'setmn','\u2217':'lowast','\u2218':'compfn','\u221A':'Sqrt','\u221D':'prop','\u221E':'infin','\u221F':'angrt','\u2220':'ang','\u2220\u20D2':'nang','\u2221':'angmsd','\u2222':'angsph','\u2223':'mid','\u2224':'nmid','\u2225':'par','\u2226':'npar','\u2227':'and','\u2228':'or','\u2229':'cap','\u2229\uFE00':'caps','\u222A':'cup','\u222A\uFE00':'cups','\u222B':'int','\u222C':'Int','\u222D':'tint','\u2A0C':'qint','\u222E':'oint','\u222F':'Conint','\u2230':'Cconint','\u2231':'cwint','\u2232':'cwconint','\u2233':'awconint','\u2234':'there4','\u2235':'becaus','\u2236':'ratio','\u2237':'Colon','\u2238':'minusd','\u223A':'mDDot','\u223B':'homtht','\u223C':'sim','\u2241':'nsim','\u223C\u20D2':'nvsim','\u223D':'bsim','\u223D\u0331':'race','\u223E':'ac','\u223E\u0333':'acE','\u223F':'acd','\u2240':'wr','\u2242':'esim','\u2242\u0338':'nesim','\u2243':'sime','\u2244':'nsime','\u2245':'cong','\u2247':'ncong','\u2246':'simne','\u2248':'ap','\u2249':'nap','\u224A':'ape','\u224B':'apid','\u224B\u0338':'napid','\u224C':'bcong','\u224D':'CupCap','\u226D':'NotCupCap','\u224D\u20D2':'nvap','\u224E':'bump','\u224E\u0338':'nbump','\u224F':'bumpe','\u224F\u0338':'nbumpe','\u2250':'doteq','\u2250\u0338':'nedot','\u2251':'eDot','\u2252':'efDot','\u2253':'erDot','\u2254':'colone','\u2255':'ecolon','\u2256':'ecir','\u2257':'cire','\u2259':'wedgeq','\u225A':'veeeq','\u225C':'trie','\u225F':'equest','\u2261':'equiv','\u2262':'nequiv','\u2261\u20E5':'bnequiv','\u2264':'le','\u2270':'nle','\u2264\u20D2':'nvle','\u2265':'ge','\u2271':'nge','\u2265\u20D2':'nvge','\u2266':'lE','\u2266\u0338':'nlE','\u2267':'gE','\u2267\u0338':'ngE','\u2268\uFE00':'lvnE','\u2268':'lnE','\u2269':'gnE','\u2269\uFE00':'gvnE','\u226A':'ll','\u226A\u0338':'nLtv','\u226A\u20D2':'nLt','\u226B':'gg','\u226B\u0338':'nGtv','\u226B\u20D2':'nGt','\u226C':'twixt','\u2272':'lsim','\u2274':'nlsim','\u2273':'gsim','\u2275':'ngsim','\u2276':'lg','\u2278':'ntlg','\u2277':'gl','\u2279':'ntgl','\u227A':'pr','\u2280':'npr','\u227B':'sc','\u2281':'nsc','\u227C':'prcue','\u22E0':'nprcue','\u227D':'sccue','\u22E1':'nsccue','\u227E':'prsim','\u227F':'scsim','\u227F\u0338':'NotSucceedsTilde','\u2282':'sub','\u2284':'nsub','\u2282\u20D2':'vnsub','\u2283':'sup','\u2285':'nsup','\u2283\u20D2':'vnsup','\u2286':'sube','\u2288':'nsube','\u2287':'supe','\u2289':'nsupe','\u228A\uFE00':'vsubne','\u228A':'subne','\u228B\uFE00':'vsupne','\u228B':'supne','\u228D':'cupdot','\u228E':'uplus','\u228F':'sqsub','\u228F\u0338':'NotSquareSubset','\u2290':'sqsup','\u2290\u0338':'NotSquareSuperset','\u2291':'sqsube','\u22E2':'nsqsube','\u2292':'sqsupe','\u22E3':'nsqsupe','\u2293':'sqcap','\u2293\uFE00':'sqcaps','\u2294':'sqcup','\u2294\uFE00':'sqcups','\u2295':'oplus','\u2296':'ominus','\u2297':'otimes','\u2298':'osol','\u2299':'odot','\u229A':'ocir','\u229B':'oast','\u229D':'odash','\u229E':'plusb','\u229F':'minusb','\u22A0':'timesb','\u22A1':'sdotb','\u22A2':'vdash','\u22AC':'nvdash','\u22A3':'dashv','\u22A4':'top','\u22A5':'bot','\u22A7':'models','\u22A8':'vDash','\u22AD':'nvDash','\u22A9':'Vdash','\u22AE':'nVdash','\u22AA':'Vvdash','\u22AB':'VDash','\u22AF':'nVDash','\u22B0':'prurel','\u22B2':'vltri','\u22EA':'nltri','\u22B3':'vrtri','\u22EB':'nrtri','\u22B4':'ltrie','\u22EC':'nltrie','\u22B4\u20D2':'nvltrie','\u22B5':'rtrie','\u22ED':'nrtrie','\u22B5\u20D2':'nvrtrie','\u22B6':'origof','\u22B7':'imof','\u22B8':'mumap','\u22B9':'hercon','\u22BA':'intcal','\u22BB':'veebar','\u22BD':'barvee','\u22BE':'angrtvb','\u22BF':'lrtri','\u22C0':'Wedge','\u22C1':'Vee','\u22C2':'xcap','\u22C3':'xcup','\u22C4':'diam','\u22C5':'sdot','\u22C6':'Star','\u22C7':'divonx','\u22C8':'bowtie','\u22C9':'ltimes','\u22CA':'rtimes','\u22CB':'lthree','\u22CC':'rthree','\u22CD':'bsime','\u22CE':'cuvee','\u22CF':'cuwed','\u22D0':'Sub','\u22D1':'Sup','\u22D2':'Cap','\u22D3':'Cup','\u22D4':'fork','\u22D5':'epar','\u22D6':'ltdot','\u22D7':'gtdot','\u22D8':'Ll','\u22D8\u0338':'nLl','\u22D9':'Gg','\u22D9\u0338':'nGg','\u22DA\uFE00':'lesg','\u22DA':'leg','\u22DB':'gel','\u22DB\uFE00':'gesl','\u22DE':'cuepr','\u22DF':'cuesc','\u22E6':'lnsim','\u22E7':'gnsim','\u22E8':'prnsim','\u22E9':'scnsim','\u22EE':'vellip','\u22EF':'ctdot','\u22F0':'utdot','\u22F1':'dtdot','\u22F2':'disin','\u22F3':'isinsv','\u22F4':'isins','\u22F5':'isindot','\u22F5\u0338':'notindot','\u22F6':'notinvc','\u22F7':'notinvb','\u22F9':'isinE','\u22F9\u0338':'notinE','\u22FA':'nisd','\u22FB':'xnis','\u22FC':'nis','\u22FD':'notnivc','\u22FE':'notnivb','\u2305':'barwed','\u2306':'Barwed','\u230C':'drcrop','\u230D':'dlcrop','\u230E':'urcrop','\u230F':'ulcrop','\u2310':'bnot','\u2312':'profline','\u2313':'profsurf','\u2315':'telrec','\u2316':'target','\u231C':'ulcorn','\u231D':'urcorn','\u231E':'dlcorn','\u231F':'drcorn','\u2322':'frown','\u2323':'smile','\u232D':'cylcty','\u232E':'profalar','\u2336':'topbot','\u233D':'ovbar','\u233F':'solbar','\u237C':'angzarr','\u23B0':'lmoust','\u23B1':'rmoust','\u23B4':'tbrk','\u23B5':'bbrk','\u23B6':'bbrktbrk','\u23DC':'OverParenthesis','\u23DD':'UnderParenthesis','\u23DE':'OverBrace','\u23DF':'UnderBrace','\u23E2':'trpezium','\u23E7':'elinters','\u2423':'blank','\u2500':'boxh','\u2502':'boxv','\u250C':'boxdr','\u2510':'boxdl','\u2514':'boxur','\u2518':'boxul','\u251C':'boxvr','\u2524':'boxvl','\u252C':'boxhd','\u2534':'boxhu','\u253C':'boxvh','\u2550':'boxH','\u2551':'boxV','\u2552':'boxdR','\u2553':'boxDr','\u2554':'boxDR','\u2555':'boxdL','\u2556':'boxDl','\u2557':'boxDL','\u2558':'boxuR','\u2559':'boxUr','\u255A':'boxUR','\u255B':'boxuL','\u255C':'boxUl','\u255D':'boxUL','\u255E':'boxvR','\u255F':'boxVr','\u2560':'boxVR','\u2561':'boxvL','\u2562':'boxVl','\u2563':'boxVL','\u2564':'boxHd','\u2565':'boxhD','\u2566':'boxHD','\u2567':'boxHu','\u2568':'boxhU','\u2569':'boxHU','\u256A':'boxvH','\u256B':'boxVh','\u256C':'boxVH','\u2580':'uhblk','\u2584':'lhblk','\u2588':'block','\u2591':'blk14','\u2592':'blk12','\u2593':'blk34','\u25A1':'squ','\u25AA':'squf','\u25AB':'EmptyVerySmallSquare','\u25AD':'rect','\u25AE':'marker','\u25B1':'fltns','\u25B3':'xutri','\u25B4':'utrif','\u25B5':'utri','\u25B8':'rtrif','\u25B9':'rtri','\u25BD':'xdtri','\u25BE':'dtrif','\u25BF':'dtri','\u25C2':'ltrif','\u25C3':'ltri','\u25CA':'loz','\u25CB':'cir','\u25EC':'tridot','\u25EF':'xcirc','\u25F8':'ultri','\u25F9':'urtri','\u25FA':'lltri','\u25FB':'EmptySmallSquare','\u25FC':'FilledSmallSquare','\u2605':'starf','\u2606':'star','\u260E':'phone','\u2640':'female','\u2642':'male','\u2660':'spades','\u2663':'clubs','\u2665':'hearts','\u2666':'diams','\u266A':'sung','\u2713':'check','\u2717':'cross','\u2720':'malt','\u2736':'sext','\u2758':'VerticalSeparator','\u27C8':'bsolhsub','\u27C9':'suphsol','\u27F5':'xlarr','\u27F6':'xrarr','\u27F7':'xharr','\u27F8':'xlArr','\u27F9':'xrArr','\u27FA':'xhArr','\u27FC':'xmap','\u27FF':'dzigrarr','\u2902':'nvlArr','\u2903':'nvrArr','\u2904':'nvHarr','\u2905':'Map','\u290C':'lbarr','\u290D':'rbarr','\u290E':'lBarr','\u290F':'rBarr','\u2910':'RBarr','\u2911':'DDotrahd','\u2912':'UpArrowBar','\u2913':'DownArrowBar','\u2916':'Rarrtl','\u2919':'latail','\u291A':'ratail','\u291B':'lAtail','\u291C':'rAtail','\u291D':'larrfs','\u291E':'rarrfs','\u291F':'larrbfs','\u2920':'rarrbfs','\u2923':'nwarhk','\u2924':'nearhk','\u2925':'searhk','\u2926':'swarhk','\u2927':'nwnear','\u2928':'toea','\u2929':'tosa','\u292A':'swnwar','\u2933':'rarrc','\u2933\u0338':'nrarrc','\u2935':'cudarrr','\u2936':'ldca','\u2937':'rdca','\u2938':'cudarrl','\u2939':'larrpl','\u293C':'curarrm','\u293D':'cularrp','\u2945':'rarrpl','\u2948':'harrcir','\u2949':'Uarrocir','\u294A':'lurdshar','\u294B':'ldrushar','\u294E':'LeftRightVector','\u294F':'RightUpDownVector','\u2950':'DownLeftRightVector','\u2951':'LeftUpDownVector','\u2952':'LeftVectorBar','\u2953':'RightVectorBar','\u2954':'RightUpVectorBar','\u2955':'RightDownVectorBar','\u2956':'DownLeftVectorBar','\u2957':'DownRightVectorBar','\u2958':'LeftUpVectorBar','\u2959':'LeftDownVectorBar','\u295A':'LeftTeeVector','\u295B':'RightTeeVector','\u295C':'RightUpTeeVector','\u295D':'RightDownTeeVector','\u295E':'DownLeftTeeVector','\u295F':'DownRightTeeVector','\u2960':'LeftUpTeeVector','\u2961':'LeftDownTeeVector','\u2962':'lHar','\u2963':'uHar','\u2964':'rHar','\u2965':'dHar','\u2966':'luruhar','\u2967':'ldrdhar','\u2968':'ruluhar','\u2969':'rdldhar','\u296A':'lharul','\u296B':'llhard','\u296C':'rharul','\u296D':'lrhard','\u296E':'udhar','\u296F':'duhar','\u2970':'RoundImplies','\u2971':'erarr','\u2972':'simrarr','\u2973':'larrsim','\u2974':'rarrsim','\u2975':'rarrap','\u2976':'ltlarr','\u2978':'gtrarr','\u2979':'subrarr','\u297B':'suplarr','\u297C':'lfisht','\u297D':'rfisht','\u297E':'ufisht','\u297F':'dfisht','\u299A':'vzigzag','\u299C':'vangrt','\u299D':'angrtvbd','\u29A4':'ange','\u29A5':'range','\u29A6':'dwangle','\u29A7':'uwangle','\u29A8':'angmsdaa','\u29A9':'angmsdab','\u29AA':'angmsdac','\u29AB':'angmsdad','\u29AC':'angmsdae','\u29AD':'angmsdaf','\u29AE':'angmsdag','\u29AF':'angmsdah','\u29B0':'bemptyv','\u29B1':'demptyv','\u29B2':'cemptyv','\u29B3':'raemptyv','\u29B4':'laemptyv','\u29B5':'ohbar','\u29B6':'omid','\u29B7':'opar','\u29B9':'operp','\u29BB':'olcross','\u29BC':'odsold','\u29BE':'olcir','\u29BF':'ofcir','\u29C0':'olt','\u29C1':'ogt','\u29C2':'cirscir','\u29C3':'cirE','\u29C4':'solb','\u29C5':'bsolb','\u29C9':'boxbox','\u29CD':'trisb','\u29CE':'rtriltri','\u29CF':'LeftTriangleBar','\u29CF\u0338':'NotLeftTriangleBar','\u29D0':'RightTriangleBar','\u29D0\u0338':'NotRightTriangleBar','\u29DC':'iinfin','\u29DD':'infintie','\u29DE':'nvinfin','\u29E3':'eparsl','\u29E4':'smeparsl','\u29E5':'eqvparsl','\u29EB':'lozf','\u29F4':'RuleDelayed','\u29F6':'dsol','\u2A00':'xodot','\u2A01':'xoplus','\u2A02':'xotime','\u2A04':'xuplus','\u2A06':'xsqcup','\u2A0D':'fpartint','\u2A10':'cirfnint','\u2A11':'awint','\u2A12':'rppolint','\u2A13':'scpolint','\u2A14':'npolint','\u2A15':'pointint','\u2A16':'quatint','\u2A17':'intlarhk','\u2A22':'pluscir','\u2A23':'plusacir','\u2A24':'simplus','\u2A25':'plusdu','\u2A26':'plussim','\u2A27':'plustwo','\u2A29':'mcomma','\u2A2A':'minusdu','\u2A2D':'loplus','\u2A2E':'roplus','\u2A2F':'Cross','\u2A30':'timesd','\u2A31':'timesbar','\u2A33':'smashp','\u2A34':'lotimes','\u2A35':'rotimes','\u2A36':'otimesas','\u2A37':'Otimes','\u2A38':'odiv','\u2A39':'triplus','\u2A3A':'triminus','\u2A3B':'tritime','\u2A3C':'iprod','\u2A3F':'amalg','\u2A40':'capdot','\u2A42':'ncup','\u2A43':'ncap','\u2A44':'capand','\u2A45':'cupor','\u2A46':'cupcap','\u2A47':'capcup','\u2A48':'cupbrcap','\u2A49':'capbrcup','\u2A4A':'cupcup','\u2A4B':'capcap','\u2A4C':'ccups','\u2A4D':'ccaps','\u2A50':'ccupssm','\u2A53':'And','\u2A54':'Or','\u2A55':'andand','\u2A56':'oror','\u2A57':'orslope','\u2A58':'andslope','\u2A5A':'andv','\u2A5B':'orv','\u2A5C':'andd','\u2A5D':'ord','\u2A5F':'wedbar','\u2A66':'sdote','\u2A6A':'simdot','\u2A6D':'congdot','\u2A6D\u0338':'ncongdot','\u2A6E':'easter','\u2A6F':'apacir','\u2A70':'apE','\u2A70\u0338':'napE','\u2A71':'eplus','\u2A72':'pluse','\u2A73':'Esim','\u2A77':'eDDot','\u2A78':'equivDD','\u2A79':'ltcir','\u2A7A':'gtcir','\u2A7B':'ltquest','\u2A7C':'gtquest','\u2A7D':'les','\u2A7D\u0338':'nles','\u2A7E':'ges','\u2A7E\u0338':'nges','\u2A7F':'lesdot','\u2A80':'gesdot','\u2A81':'lesdoto','\u2A82':'gesdoto','\u2A83':'lesdotor','\u2A84':'gesdotol','\u2A85':'lap','\u2A86':'gap','\u2A87':'lne','\u2A88':'gne','\u2A89':'lnap','\u2A8A':'gnap','\u2A8B':'lEg','\u2A8C':'gEl','\u2A8D':'lsime','\u2A8E':'gsime','\u2A8F':'lsimg','\u2A90':'gsiml','\u2A91':'lgE','\u2A92':'glE','\u2A93':'lesges','\u2A94':'gesles','\u2A95':'els','\u2A96':'egs','\u2A97':'elsdot','\u2A98':'egsdot','\u2A99':'el','\u2A9A':'eg','\u2A9D':'siml','\u2A9E':'simg','\u2A9F':'simlE','\u2AA0':'simgE','\u2AA1':'LessLess','\u2AA1\u0338':'NotNestedLessLess','\u2AA2':'GreaterGreater','\u2AA2\u0338':'NotNestedGreaterGreater','\u2AA4':'glj','\u2AA5':'gla','\u2AA6':'ltcc','\u2AA7':'gtcc','\u2AA8':'lescc','\u2AA9':'gescc','\u2AAA':'smt','\u2AAB':'lat','\u2AAC':'smte','\u2AAC\uFE00':'smtes','\u2AAD':'late','\u2AAD\uFE00':'lates','\u2AAE':'bumpE','\u2AAF':'pre','\u2AAF\u0338':'npre','\u2AB0':'sce','\u2AB0\u0338':'nsce','\u2AB3':'prE','\u2AB4':'scE','\u2AB5':'prnE','\u2AB6':'scnE','\u2AB7':'prap','\u2AB8':'scap','\u2AB9':'prnap','\u2ABA':'scnap','\u2ABB':'Pr','\u2ABC':'Sc','\u2ABD':'subdot','\u2ABE':'supdot','\u2ABF':'subplus','\u2AC0':'supplus','\u2AC1':'submult','\u2AC2':'supmult','\u2AC3':'subedot','\u2AC4':'supedot','\u2AC5':'subE','\u2AC5\u0338':'nsubE','\u2AC6':'supE','\u2AC6\u0338':'nsupE','\u2AC7':'subsim','\u2AC8':'supsim','\u2ACB\uFE00':'vsubnE','\u2ACB':'subnE','\u2ACC\uFE00':'vsupnE','\u2ACC':'supnE','\u2ACF':'csub','\u2AD0':'csup','\u2AD1':'csube','\u2AD2':'csupe','\u2AD3':'subsup','\u2AD4':'supsub','\u2AD5':'subsub','\u2AD6':'supsup','\u2AD7':'suphsub','\u2AD8':'supdsub','\u2AD9':'forkv','\u2ADA':'topfork','\u2ADB':'mlcp','\u2AE4':'Dashv','\u2AE6':'Vdashl','\u2AE7':'Barv','\u2AE8':'vBar','\u2AE9':'vBarv','\u2AEB':'Vbar','\u2AEC':'Not','\u2AED':'bNot','\u2AEE':'rnmid','\u2AEF':'cirmid','\u2AF0':'midcir','\u2AF1':'topcir','\u2AF2':'nhpar','\u2AF3':'parsim','\u2AFD':'parsl','\u2AFD\u20E5':'nparsl','\u266D':'flat','\u266E':'natur','\u266F':'sharp','\xA4':'curren','\xA2':'cent','$':'dollar','\xA3':'pound','\xA5':'yen','\u20AC':'euro','\xB9':'sup1','\xBD':'half','\u2153':'frac13','\xBC':'frac14','\u2155':'frac15','\u2159':'frac16','\u215B':'frac18','\xB2':'sup2','\u2154':'frac23','\u2156':'frac25','\xB3':'sup3','\xBE':'frac34','\u2157':'frac35','\u215C':'frac38','\u2158':'frac45','\u215A':'frac56','\u215D':'frac58','\u215E':'frac78','\uD835\uDCB6':'ascr','\uD835\uDD52':'aopf','\uD835\uDD1E':'afr','\uD835\uDD38':'Aopf','\uD835\uDD04':'Afr','\uD835\uDC9C':'Ascr','\xAA':'ordf','\xE1':'aacute','\xC1':'Aacute','\xE0':'agrave','\xC0':'Agrave','\u0103':'abreve','\u0102':'Abreve','\xE2':'acirc','\xC2':'Acirc','\xE5':'aring','\xC5':'angst','\xE4':'auml','\xC4':'Auml','\xE3':'atilde','\xC3':'Atilde','\u0105':'aogon','\u0104':'Aogon','\u0101':'amacr','\u0100':'Amacr','\xE6':'aelig','\xC6':'AElig','\uD835\uDCB7':'bscr','\uD835\uDD53':'bopf','\uD835\uDD1F':'bfr','\uD835\uDD39':'Bopf','\u212C':'Bscr','\uD835\uDD05':'Bfr','\uD835\uDD20':'cfr','\uD835\uDCB8':'cscr','\uD835\uDD54':'copf','\u212D':'Cfr','\uD835\uDC9E':'Cscr','\u2102':'Copf','\u0107':'cacute','\u0106':'Cacute','\u0109':'ccirc','\u0108':'Ccirc','\u010D':'ccaron','\u010C':'Ccaron','\u010B':'cdot','\u010A':'Cdot','\xE7':'ccedil','\xC7':'Ccedil','\u2105':'incare','\uD835\uDD21':'dfr','\u2146':'dd','\uD835\uDD55':'dopf','\uD835\uDCB9':'dscr','\uD835\uDC9F':'Dscr','\uD835\uDD07':'Dfr','\u2145':'DD','\uD835\uDD3B':'Dopf','\u010F':'dcaron','\u010E':'Dcaron','\u0111':'dstrok','\u0110':'Dstrok','\xF0':'eth','\xD0':'ETH','\u2147':'ee','\u212F':'escr','\uD835\uDD22':'efr','\uD835\uDD56':'eopf','\u2130':'Escr','\uD835\uDD08':'Efr','\uD835\uDD3C':'Eopf','\xE9':'eacute','\xC9':'Eacute','\xE8':'egrave','\xC8':'Egrave','\xEA':'ecirc','\xCA':'Ecirc','\u011B':'ecaron','\u011A':'Ecaron','\xEB':'euml','\xCB':'Euml','\u0117':'edot','\u0116':'Edot','\u0119':'eogon','\u0118':'Eogon','\u0113':'emacr','\u0112':'Emacr','\uD835\uDD23':'ffr','\uD835\uDD57':'fopf','\uD835\uDCBB':'fscr','\uD835\uDD09':'Ffr','\uD835\uDD3D':'Fopf','\u2131':'Fscr','\uFB00':'fflig','\uFB03':'ffilig','\uFB04':'ffllig','\uFB01':'filig','fj':'fjlig','\uFB02':'fllig','\u0192':'fnof','\u210A':'gscr','\uD835\uDD58':'gopf','\uD835\uDD24':'gfr','\uD835\uDCA2':'Gscr','\uD835\uDD3E':'Gopf','\uD835\uDD0A':'Gfr','\u01F5':'gacute','\u011F':'gbreve','\u011E':'Gbreve','\u011D':'gcirc','\u011C':'Gcirc','\u0121':'gdot','\u0120':'Gdot','\u0122':'Gcedil','\uD835\uDD25':'hfr','\u210E':'planckh','\uD835\uDCBD':'hscr','\uD835\uDD59':'hopf','\u210B':'Hscr','\u210C':'Hfr','\u210D':'Hopf','\u0125':'hcirc','\u0124':'Hcirc','\u210F':'hbar','\u0127':'hstrok','\u0126':'Hstrok','\uD835\uDD5A':'iopf','\uD835\uDD26':'ifr','\uD835\uDCBE':'iscr','\u2148':'ii','\uD835\uDD40':'Iopf','\u2110':'Iscr','\u2111':'Im','\xED':'iacute','\xCD':'Iacute','\xEC':'igrave','\xCC':'Igrave','\xEE':'icirc','\xCE':'Icirc','\xEF':'iuml','\xCF':'Iuml','\u0129':'itilde','\u0128':'Itilde','\u0130':'Idot','\u012F':'iogon','\u012E':'Iogon','\u012B':'imacr','\u012A':'Imacr','\u0133':'ijlig','\u0132':'IJlig','\u0131':'imath','\uD835\uDCBF':'jscr','\uD835\uDD5B':'jopf','\uD835\uDD27':'jfr','\uD835\uDCA5':'Jscr','\uD835\uDD0D':'Jfr','\uD835\uDD41':'Jopf','\u0135':'jcirc','\u0134':'Jcirc','\u0237':'jmath','\uD835\uDD5C':'kopf','\uD835\uDCC0':'kscr','\uD835\uDD28':'kfr','\uD835\uDCA6':'Kscr','\uD835\uDD42':'Kopf','\uD835\uDD0E':'Kfr','\u0137':'kcedil','\u0136':'Kcedil','\uD835\uDD29':'lfr','\uD835\uDCC1':'lscr','\u2113':'ell','\uD835\uDD5D':'lopf','\u2112':'Lscr','\uD835\uDD0F':'Lfr','\uD835\uDD43':'Lopf','\u013A':'lacute','\u0139':'Lacute','\u013E':'lcaron','\u013D':'Lcaron','\u013C':'lcedil','\u013B':'Lcedil','\u0142':'lstrok','\u0141':'Lstrok','\u0140':'lmidot','\u013F':'Lmidot','\uD835\uDD2A':'mfr','\uD835\uDD5E':'mopf','\uD835\uDCC2':'mscr','\uD835\uDD10':'Mfr','\uD835\uDD44':'Mopf','\u2133':'Mscr','\uD835\uDD2B':'nfr','\uD835\uDD5F':'nopf','\uD835\uDCC3':'nscr','\u2115':'Nopf','\uD835\uDCA9':'Nscr','\uD835\uDD11':'Nfr','\u0144':'nacute','\u0143':'Nacute','\u0148':'ncaron','\u0147':'Ncaron','\xF1':'ntilde','\xD1':'Ntilde','\u0146':'ncedil','\u0145':'Ncedil','\u2116':'numero','\u014B':'eng','\u014A':'ENG','\uD835\uDD60':'oopf','\uD835\uDD2C':'ofr','\u2134':'oscr','\uD835\uDCAA':'Oscr','\uD835\uDD12':'Ofr','\uD835\uDD46':'Oopf','\xBA':'ordm','\xF3':'oacute','\xD3':'Oacute','\xF2':'ograve','\xD2':'Ograve','\xF4':'ocirc','\xD4':'Ocirc','\xF6':'ouml','\xD6':'Ouml','\u0151':'odblac','\u0150':'Odblac','\xF5':'otilde','\xD5':'Otilde','\xF8':'oslash','\xD8':'Oslash','\u014D':'omacr','\u014C':'Omacr','\u0153':'oelig','\u0152':'OElig','\uD835\uDD2D':'pfr','\uD835\uDCC5':'pscr','\uD835\uDD61':'popf','\u2119':'Popf','\uD835\uDD13':'Pfr','\uD835\uDCAB':'Pscr','\uD835\uDD62':'qopf','\uD835\uDD2E':'qfr','\uD835\uDCC6':'qscr','\uD835\uDCAC':'Qscr','\uD835\uDD14':'Qfr','\u211A':'Qopf','\u0138':'kgreen','\uD835\uDD2F':'rfr','\uD835\uDD63':'ropf','\uD835\uDCC7':'rscr','\u211B':'Rscr','\u211C':'Re','\u211D':'Ropf','\u0155':'racute','\u0154':'Racute','\u0159':'rcaron','\u0158':'Rcaron','\u0157':'rcedil','\u0156':'Rcedil','\uD835\uDD64':'sopf','\uD835\uDCC8':'sscr','\uD835\uDD30':'sfr','\uD835\uDD4A':'Sopf','\uD835\uDD16':'Sfr','\uD835\uDCAE':'Sscr','\u24C8':'oS','\u015B':'sacute','\u015A':'Sacute','\u015D':'scirc','\u015C':'Scirc','\u0161':'scaron','\u0160':'Scaron','\u015F':'scedil','\u015E':'Scedil','\xDF':'szlig','\uD835\uDD31':'tfr','\uD835\uDCC9':'tscr','\uD835\uDD65':'topf','\uD835\uDCAF':'Tscr','\uD835\uDD17':'Tfr','\uD835\uDD4B':'Topf','\u0165':'tcaron','\u0164':'Tcaron','\u0163':'tcedil','\u0162':'Tcedil','\u2122':'trade','\u0167':'tstrok','\u0166':'Tstrok','\uD835\uDCCA':'uscr','\uD835\uDD66':'uopf','\uD835\uDD32':'ufr','\uD835\uDD4C':'Uopf','\uD835\uDD18':'Ufr','\uD835\uDCB0':'Uscr','\xFA':'uacute','\xDA':'Uacute','\xF9':'ugrave','\xD9':'Ugrave','\u016D':'ubreve','\u016C':'Ubreve','\xFB':'ucirc','\xDB':'Ucirc','\u016F':'uring','\u016E':'Uring','\xFC':'uuml','\xDC':'Uuml','\u0171':'udblac','\u0170':'Udblac','\u0169':'utilde','\u0168':'Utilde','\u0173':'uogon','\u0172':'Uogon','\u016B':'umacr','\u016A':'Umacr','\uD835\uDD33':'vfr','\uD835\uDD67':'vopf','\uD835\uDCCB':'vscr','\uD835\uDD19':'Vfr','\uD835\uDD4D':'Vopf','\uD835\uDCB1':'Vscr','\uD835\uDD68':'wopf','\uD835\uDCCC':'wscr','\uD835\uDD34':'wfr','\uD835\uDCB2':'Wscr','\uD835\uDD4E':'Wopf','\uD835\uDD1A':'Wfr','\u0175':'wcirc','\u0174':'Wcirc','\uD835\uDD35':'xfr','\uD835\uDCCD':'xscr','\uD835\uDD69':'xopf','\uD835\uDD4F':'Xopf','\uD835\uDD1B':'Xfr','\uD835\uDCB3':'Xscr','\uD835\uDD36':'yfr','\uD835\uDCCE':'yscr','\uD835\uDD6A':'yopf','\uD835\uDCB4':'Yscr','\uD835\uDD1C':'Yfr','\uD835\uDD50':'Yopf','\xFD':'yacute','\xDD':'Yacute','\u0177':'ycirc','\u0176':'Ycirc','\xFF':'yuml','\u0178':'Yuml','\uD835\uDCCF':'zscr','\uD835\uDD37':'zfr','\uD835\uDD6B':'zopf','\u2128':'Zfr','\u2124':'Zopf','\uD835\uDCB5':'Zscr','\u017A':'zacute','\u0179':'Zacute','\u017E':'zcaron','\u017D':'Zcaron','\u017C':'zdot','\u017B':'Zdot','\u01B5':'imped','\xFE':'thorn','\xDE':'THORN','\u0149':'napos','\u03B1':'alpha','\u0391':'Alpha','\u03B2':'beta','\u0392':'Beta','\u03B3':'gamma','\u0393':'Gamma','\u03B4':'delta','\u0394':'Delta','\u03B5':'epsi','\u03F5':'epsiv','\u0395':'Epsilon','\u03DD':'gammad','\u03DC':'Gammad','\u03B6':'zeta','\u0396':'Zeta','\u03B7':'eta','\u0397':'Eta','\u03B8':'theta','\u03D1':'thetav','\u0398':'Theta','\u03B9':'iota','\u0399':'Iota','\u03BA':'kappa','\u03F0':'kappav','\u039A':'Kappa','\u03BB':'lambda','\u039B':'Lambda','\u03BC':'mu','\xB5':'micro','\u039C':'Mu','\u03BD':'nu','\u039D':'Nu','\u03BE':'xi','\u039E':'Xi','\u03BF':'omicron','\u039F':'Omicron','\u03C0':'pi','\u03D6':'piv','\u03A0':'Pi','\u03C1':'rho','\u03F1':'rhov','\u03A1':'Rho','\u03C3':'sigma','\u03A3':'Sigma','\u03C2':'sigmaf','\u03C4':'tau','\u03A4':'Tau','\u03C5':'upsi','\u03A5':'Upsilon','\u03D2':'Upsi','\u03C6':'phi','\u03D5':'phiv','\u03A6':'Phi','\u03C7':'chi','\u03A7':'Chi','\u03C8':'psi','\u03A8':'Psi','\u03C9':'omega','\u03A9':'ohm','\u0430':'acy','\u0410':'Acy','\u0431':'bcy','\u0411':'Bcy','\u0432':'vcy','\u0412':'Vcy','\u0433':'gcy','\u0413':'Gcy','\u0453':'gjcy','\u0403':'GJcy','\u0434':'dcy','\u0414':'Dcy','\u0452':'djcy','\u0402':'DJcy','\u0435':'iecy','\u0415':'IEcy','\u0451':'iocy','\u0401':'IOcy','\u0454':'jukcy','\u0404':'Jukcy','\u0436':'zhcy','\u0416':'ZHcy','\u0437':'zcy','\u0417':'Zcy','\u0455':'dscy','\u0405':'DScy','\u0438':'icy','\u0418':'Icy','\u0456':'iukcy','\u0406':'Iukcy','\u0457':'yicy','\u0407':'YIcy','\u0439':'jcy','\u0419':'Jcy','\u0458':'jsercy','\u0408':'Jsercy','\u043A':'kcy','\u041A':'Kcy','\u045C':'kjcy','\u040C':'KJcy','\u043B':'lcy','\u041B':'Lcy','\u0459':'ljcy','\u0409':'LJcy','\u043C':'mcy','\u041C':'Mcy','\u043D':'ncy','\u041D':'Ncy','\u045A':'njcy','\u040A':'NJcy','\u043E':'ocy','\u041E':'Ocy','\u043F':'pcy','\u041F':'Pcy','\u0440':'rcy','\u0420':'Rcy','\u0441':'scy','\u0421':'Scy','\u0442':'tcy','\u0422':'Tcy','\u045B':'tshcy','\u040B':'TSHcy','\u0443':'ucy','\u0423':'Ucy','\u045E':'ubrcy','\u040E':'Ubrcy','\u0444':'fcy','\u0424':'Fcy','\u0445':'khcy','\u0425':'KHcy','\u0446':'tscy','\u0426':'TScy','\u0447':'chcy','\u0427':'CHcy','\u045F':'dzcy','\u040F':'DZcy','\u0448':'shcy','\u0428':'SHcy','\u0449':'shchcy','\u0429':'SHCHcy','\u044A':'hardcy','\u042A':'HARDcy','\u044B':'ycy','\u042B':'Ycy','\u044C':'softcy','\u042C':'SOFTcy','\u044D':'ecy','\u042D':'Ecy','\u044E':'yucy','\u042E':'YUcy','\u044F':'yacy','\u042F':'YAcy','\u2135':'aleph','\u2136':'beth','\u2137':'gimel','\u2138':'daleth'};

		var regexEscape = /["&'<>`]/g;
		var escapeMap = {
			'"': '&quot;',
			'&': '&amp;',
			'\'': '&#x27;',
			'<': '&lt;',
			// See https://mathiasbynens.be/notes/ambiguous-ampersands: in HTML, the
			// following is not strictly necessary unless it’s part of a tag or an
			// unquoted attribute value. We’re only escaping it to support those
			// situations, and for XML support.
			'>': '&gt;',
			// In Internet Explorer ≤ 8, the backtick character can be used
			// to break out of (un)quoted attribute values or HTML comments.
			// See http://html5sec.org/#102, http://html5sec.org/#108, and
			// http://html5sec.org/#133.
			'`': '&#x60;'
		};

		var regexInvalidEntity = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/;
		var regexInvalidRawCodePoint = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
		var regexDecode = /&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)([=a-zA-Z0-9])?/g;
		var decodeMap = {'aacute':'\xE1','Aacute':'\xC1','abreve':'\u0103','Abreve':'\u0102','ac':'\u223E','acd':'\u223F','acE':'\u223E\u0333','acirc':'\xE2','Acirc':'\xC2','acute':'\xB4','acy':'\u0430','Acy':'\u0410','aelig':'\xE6','AElig':'\xC6','af':'\u2061','afr':'\uD835\uDD1E','Afr':'\uD835\uDD04','agrave':'\xE0','Agrave':'\xC0','alefsym':'\u2135','aleph':'\u2135','alpha':'\u03B1','Alpha':'\u0391','amacr':'\u0101','Amacr':'\u0100','amalg':'\u2A3F','amp':'&','AMP':'&','and':'\u2227','And':'\u2A53','andand':'\u2A55','andd':'\u2A5C','andslope':'\u2A58','andv':'\u2A5A','ang':'\u2220','ange':'\u29A4','angle':'\u2220','angmsd':'\u2221','angmsdaa':'\u29A8','angmsdab':'\u29A9','angmsdac':'\u29AA','angmsdad':'\u29AB','angmsdae':'\u29AC','angmsdaf':'\u29AD','angmsdag':'\u29AE','angmsdah':'\u29AF','angrt':'\u221F','angrtvb':'\u22BE','angrtvbd':'\u299D','angsph':'\u2222','angst':'\xC5','angzarr':'\u237C','aogon':'\u0105','Aogon':'\u0104','aopf':'\uD835\uDD52','Aopf':'\uD835\uDD38','ap':'\u2248','apacir':'\u2A6F','ape':'\u224A','apE':'\u2A70','apid':'\u224B','apos':'\'','ApplyFunction':'\u2061','approx':'\u2248','approxeq':'\u224A','aring':'\xE5','Aring':'\xC5','ascr':'\uD835\uDCB6','Ascr':'\uD835\uDC9C','Assign':'\u2254','ast':'*','asymp':'\u2248','asympeq':'\u224D','atilde':'\xE3','Atilde':'\xC3','auml':'\xE4','Auml':'\xC4','awconint':'\u2233','awint':'\u2A11','backcong':'\u224C','backepsilon':'\u03F6','backprime':'\u2035','backsim':'\u223D','backsimeq':'\u22CD','Backslash':'\u2216','Barv':'\u2AE7','barvee':'\u22BD','barwed':'\u2305','Barwed':'\u2306','barwedge':'\u2305','bbrk':'\u23B5','bbrktbrk':'\u23B6','bcong':'\u224C','bcy':'\u0431','Bcy':'\u0411','bdquo':'\u201E','becaus':'\u2235','because':'\u2235','Because':'\u2235','bemptyv':'\u29B0','bepsi':'\u03F6','bernou':'\u212C','Bernoullis':'\u212C','beta':'\u03B2','Beta':'\u0392','beth':'\u2136','between':'\u226C','bfr':'\uD835\uDD1F','Bfr':'\uD835\uDD05','bigcap':'\u22C2','bigcirc':'\u25EF','bigcup':'\u22C3','bigodot':'\u2A00','bigoplus':'\u2A01','bigotimes':'\u2A02','bigsqcup':'\u2A06','bigstar':'\u2605','bigtriangledown':'\u25BD','bigtriangleup':'\u25B3','biguplus':'\u2A04','bigvee':'\u22C1','bigwedge':'\u22C0','bkarow':'\u290D','blacklozenge':'\u29EB','blacksquare':'\u25AA','blacktriangle':'\u25B4','blacktriangledown':'\u25BE','blacktriangleleft':'\u25C2','blacktriangleright':'\u25B8','blank':'\u2423','blk12':'\u2592','blk14':'\u2591','blk34':'\u2593','block':'\u2588','bne':'=\u20E5','bnequiv':'\u2261\u20E5','bnot':'\u2310','bNot':'\u2AED','bopf':'\uD835\uDD53','Bopf':'\uD835\uDD39','bot':'\u22A5','bottom':'\u22A5','bowtie':'\u22C8','boxbox':'\u29C9','boxdl':'\u2510','boxdL':'\u2555','boxDl':'\u2556','boxDL':'\u2557','boxdr':'\u250C','boxdR':'\u2552','boxDr':'\u2553','boxDR':'\u2554','boxh':'\u2500','boxH':'\u2550','boxhd':'\u252C','boxhD':'\u2565','boxHd':'\u2564','boxHD':'\u2566','boxhu':'\u2534','boxhU':'\u2568','boxHu':'\u2567','boxHU':'\u2569','boxminus':'\u229F','boxplus':'\u229E','boxtimes':'\u22A0','boxul':'\u2518','boxuL':'\u255B','boxUl':'\u255C','boxUL':'\u255D','boxur':'\u2514','boxuR':'\u2558','boxUr':'\u2559','boxUR':'\u255A','boxv':'\u2502','boxV':'\u2551','boxvh':'\u253C','boxvH':'\u256A','boxVh':'\u256B','boxVH':'\u256C','boxvl':'\u2524','boxvL':'\u2561','boxVl':'\u2562','boxVL':'\u2563','boxvr':'\u251C','boxvR':'\u255E','boxVr':'\u255F','boxVR':'\u2560','bprime':'\u2035','breve':'\u02D8','Breve':'\u02D8','brvbar':'\xA6','bscr':'\uD835\uDCB7','Bscr':'\u212C','bsemi':'\u204F','bsim':'\u223D','bsime':'\u22CD','bsol':'\\','bsolb':'\u29C5','bsolhsub':'\u27C8','bull':'\u2022','bullet':'\u2022','bump':'\u224E','bumpe':'\u224F','bumpE':'\u2AAE','bumpeq':'\u224F','Bumpeq':'\u224E','cacute':'\u0107','Cacute':'\u0106','cap':'\u2229','Cap':'\u22D2','capand':'\u2A44','capbrcup':'\u2A49','capcap':'\u2A4B','capcup':'\u2A47','capdot':'\u2A40','CapitalDifferentialD':'\u2145','caps':'\u2229\uFE00','caret':'\u2041','caron':'\u02C7','Cayleys':'\u212D','ccaps':'\u2A4D','ccaron':'\u010D','Ccaron':'\u010C','ccedil':'\xE7','Ccedil':'\xC7','ccirc':'\u0109','Ccirc':'\u0108','Cconint':'\u2230','ccups':'\u2A4C','ccupssm':'\u2A50','cdot':'\u010B','Cdot':'\u010A','cedil':'\xB8','Cedilla':'\xB8','cemptyv':'\u29B2','cent':'\xA2','centerdot':'\xB7','CenterDot':'\xB7','cfr':'\uD835\uDD20','Cfr':'\u212D','chcy':'\u0447','CHcy':'\u0427','check':'\u2713','checkmark':'\u2713','chi':'\u03C7','Chi':'\u03A7','cir':'\u25CB','circ':'\u02C6','circeq':'\u2257','circlearrowleft':'\u21BA','circlearrowright':'\u21BB','circledast':'\u229B','circledcirc':'\u229A','circleddash':'\u229D','CircleDot':'\u2299','circledR':'\xAE','circledS':'\u24C8','CircleMinus':'\u2296','CirclePlus':'\u2295','CircleTimes':'\u2297','cire':'\u2257','cirE':'\u29C3','cirfnint':'\u2A10','cirmid':'\u2AEF','cirscir':'\u29C2','ClockwiseContourIntegral':'\u2232','CloseCurlyDoubleQuote':'\u201D','CloseCurlyQuote':'\u2019','clubs':'\u2663','clubsuit':'\u2663','colon':':','Colon':'\u2237','colone':'\u2254','Colone':'\u2A74','coloneq':'\u2254','comma':',','commat':'@','comp':'\u2201','compfn':'\u2218','complement':'\u2201','complexes':'\u2102','cong':'\u2245','congdot':'\u2A6D','Congruent':'\u2261','conint':'\u222E','Conint':'\u222F','ContourIntegral':'\u222E','copf':'\uD835\uDD54','Copf':'\u2102','coprod':'\u2210','Coproduct':'\u2210','copy':'\xA9','COPY':'\xA9','copysr':'\u2117','CounterClockwiseContourIntegral':'\u2233','crarr':'\u21B5','cross':'\u2717','Cross':'\u2A2F','cscr':'\uD835\uDCB8','Cscr':'\uD835\uDC9E','csub':'\u2ACF','csube':'\u2AD1','csup':'\u2AD0','csupe':'\u2AD2','ctdot':'\u22EF','cudarrl':'\u2938','cudarrr':'\u2935','cuepr':'\u22DE','cuesc':'\u22DF','cularr':'\u21B6','cularrp':'\u293D','cup':'\u222A','Cup':'\u22D3','cupbrcap':'\u2A48','cupcap':'\u2A46','CupCap':'\u224D','cupcup':'\u2A4A','cupdot':'\u228D','cupor':'\u2A45','cups':'\u222A\uFE00','curarr':'\u21B7','curarrm':'\u293C','curlyeqprec':'\u22DE','curlyeqsucc':'\u22DF','curlyvee':'\u22CE','curlywedge':'\u22CF','curren':'\xA4','curvearrowleft':'\u21B6','curvearrowright':'\u21B7','cuvee':'\u22CE','cuwed':'\u22CF','cwconint':'\u2232','cwint':'\u2231','cylcty':'\u232D','dagger':'\u2020','Dagger':'\u2021','daleth':'\u2138','darr':'\u2193','dArr':'\u21D3','Darr':'\u21A1','dash':'\u2010','dashv':'\u22A3','Dashv':'\u2AE4','dbkarow':'\u290F','dblac':'\u02DD','dcaron':'\u010F','Dcaron':'\u010E','dcy':'\u0434','Dcy':'\u0414','dd':'\u2146','DD':'\u2145','ddagger':'\u2021','ddarr':'\u21CA','DDotrahd':'\u2911','ddotseq':'\u2A77','deg':'\xB0','Del':'\u2207','delta':'\u03B4','Delta':'\u0394','demptyv':'\u29B1','dfisht':'\u297F','dfr':'\uD835\uDD21','Dfr':'\uD835\uDD07','dHar':'\u2965','dharl':'\u21C3','dharr':'\u21C2','DiacriticalAcute':'\xB4','DiacriticalDot':'\u02D9','DiacriticalDoubleAcute':'\u02DD','DiacriticalGrave':'`','DiacriticalTilde':'\u02DC','diam':'\u22C4','diamond':'\u22C4','Diamond':'\u22C4','diamondsuit':'\u2666','diams':'\u2666','die':'\xA8','DifferentialD':'\u2146','digamma':'\u03DD','disin':'\u22F2','div':'\xF7','divide':'\xF7','divideontimes':'\u22C7','divonx':'\u22C7','djcy':'\u0452','DJcy':'\u0402','dlcorn':'\u231E','dlcrop':'\u230D','dollar':'$','dopf':'\uD835\uDD55','Dopf':'\uD835\uDD3B','dot':'\u02D9','Dot':'\xA8','DotDot':'\u20DC','doteq':'\u2250','doteqdot':'\u2251','DotEqual':'\u2250','dotminus':'\u2238','dotplus':'\u2214','dotsquare':'\u22A1','doublebarwedge':'\u2306','DoubleContourIntegral':'\u222F','DoubleDot':'\xA8','DoubleDownArrow':'\u21D3','DoubleLeftArrow':'\u21D0','DoubleLeftRightArrow':'\u21D4','DoubleLeftTee':'\u2AE4','DoubleLongLeftArrow':'\u27F8','DoubleLongLeftRightArrow':'\u27FA','DoubleLongRightArrow':'\u27F9','DoubleRightArrow':'\u21D2','DoubleRightTee':'\u22A8','DoubleUpArrow':'\u21D1','DoubleUpDownArrow':'\u21D5','DoubleVerticalBar':'\u2225','downarrow':'\u2193','Downarrow':'\u21D3','DownArrow':'\u2193','DownArrowBar':'\u2913','DownArrowUpArrow':'\u21F5','DownBreve':'\u0311','downdownarrows':'\u21CA','downharpoonleft':'\u21C3','downharpoonright':'\u21C2','DownLeftRightVector':'\u2950','DownLeftTeeVector':'\u295E','DownLeftVector':'\u21BD','DownLeftVectorBar':'\u2956','DownRightTeeVector':'\u295F','DownRightVector':'\u21C1','DownRightVectorBar':'\u2957','DownTee':'\u22A4','DownTeeArrow':'\u21A7','drbkarow':'\u2910','drcorn':'\u231F','drcrop':'\u230C','dscr':'\uD835\uDCB9','Dscr':'\uD835\uDC9F','dscy':'\u0455','DScy':'\u0405','dsol':'\u29F6','dstrok':'\u0111','Dstrok':'\u0110','dtdot':'\u22F1','dtri':'\u25BF','dtrif':'\u25BE','duarr':'\u21F5','duhar':'\u296F','dwangle':'\u29A6','dzcy':'\u045F','DZcy':'\u040F','dzigrarr':'\u27FF','eacute':'\xE9','Eacute':'\xC9','easter':'\u2A6E','ecaron':'\u011B','Ecaron':'\u011A','ecir':'\u2256','ecirc':'\xEA','Ecirc':'\xCA','ecolon':'\u2255','ecy':'\u044D','Ecy':'\u042D','eDDot':'\u2A77','edot':'\u0117','eDot':'\u2251','Edot':'\u0116','ee':'\u2147','efDot':'\u2252','efr':'\uD835\uDD22','Efr':'\uD835\uDD08','eg':'\u2A9A','egrave':'\xE8','Egrave':'\xC8','egs':'\u2A96','egsdot':'\u2A98','el':'\u2A99','Element':'\u2208','elinters':'\u23E7','ell':'\u2113','els':'\u2A95','elsdot':'\u2A97','emacr':'\u0113','Emacr':'\u0112','empty':'\u2205','emptyset':'\u2205','EmptySmallSquare':'\u25FB','emptyv':'\u2205','EmptyVerySmallSquare':'\u25AB','emsp':'\u2003','emsp13':'\u2004','emsp14':'\u2005','eng':'\u014B','ENG':'\u014A','ensp':'\u2002','eogon':'\u0119','Eogon':'\u0118','eopf':'\uD835\uDD56','Eopf':'\uD835\uDD3C','epar':'\u22D5','eparsl':'\u29E3','eplus':'\u2A71','epsi':'\u03B5','epsilon':'\u03B5','Epsilon':'\u0395','epsiv':'\u03F5','eqcirc':'\u2256','eqcolon':'\u2255','eqsim':'\u2242','eqslantgtr':'\u2A96','eqslantless':'\u2A95','Equal':'\u2A75','equals':'=','EqualTilde':'\u2242','equest':'\u225F','Equilibrium':'\u21CC','equiv':'\u2261','equivDD':'\u2A78','eqvparsl':'\u29E5','erarr':'\u2971','erDot':'\u2253','escr':'\u212F','Escr':'\u2130','esdot':'\u2250','esim':'\u2242','Esim':'\u2A73','eta':'\u03B7','Eta':'\u0397','eth':'\xF0','ETH':'\xD0','euml':'\xEB','Euml':'\xCB','euro':'\u20AC','excl':'!','exist':'\u2203','Exists':'\u2203','expectation':'\u2130','exponentiale':'\u2147','ExponentialE':'\u2147','fallingdotseq':'\u2252','fcy':'\u0444','Fcy':'\u0424','female':'\u2640','ffilig':'\uFB03','fflig':'\uFB00','ffllig':'\uFB04','ffr':'\uD835\uDD23','Ffr':'\uD835\uDD09','filig':'\uFB01','FilledSmallSquare':'\u25FC','FilledVerySmallSquare':'\u25AA','fjlig':'fj','flat':'\u266D','fllig':'\uFB02','fltns':'\u25B1','fnof':'\u0192','fopf':'\uD835\uDD57','Fopf':'\uD835\uDD3D','forall':'\u2200','ForAll':'\u2200','fork':'\u22D4','forkv':'\u2AD9','Fouriertrf':'\u2131','fpartint':'\u2A0D','frac12':'\xBD','frac13':'\u2153','frac14':'\xBC','frac15':'\u2155','frac16':'\u2159','frac18':'\u215B','frac23':'\u2154','frac25':'\u2156','frac34':'\xBE','frac35':'\u2157','frac38':'\u215C','frac45':'\u2158','frac56':'\u215A','frac58':'\u215D','frac78':'\u215E','frasl':'\u2044','frown':'\u2322','fscr':'\uD835\uDCBB','Fscr':'\u2131','gacute':'\u01F5','gamma':'\u03B3','Gamma':'\u0393','gammad':'\u03DD','Gammad':'\u03DC','gap':'\u2A86','gbreve':'\u011F','Gbreve':'\u011E','Gcedil':'\u0122','gcirc':'\u011D','Gcirc':'\u011C','gcy':'\u0433','Gcy':'\u0413','gdot':'\u0121','Gdot':'\u0120','ge':'\u2265','gE':'\u2267','gel':'\u22DB','gEl':'\u2A8C','geq':'\u2265','geqq':'\u2267','geqslant':'\u2A7E','ges':'\u2A7E','gescc':'\u2AA9','gesdot':'\u2A80','gesdoto':'\u2A82','gesdotol':'\u2A84','gesl':'\u22DB\uFE00','gesles':'\u2A94','gfr':'\uD835\uDD24','Gfr':'\uD835\uDD0A','gg':'\u226B','Gg':'\u22D9','ggg':'\u22D9','gimel':'\u2137','gjcy':'\u0453','GJcy':'\u0403','gl':'\u2277','gla':'\u2AA5','glE':'\u2A92','glj':'\u2AA4','gnap':'\u2A8A','gnapprox':'\u2A8A','gne':'\u2A88','gnE':'\u2269','gneq':'\u2A88','gneqq':'\u2269','gnsim':'\u22E7','gopf':'\uD835\uDD58','Gopf':'\uD835\uDD3E','grave':'`','GreaterEqual':'\u2265','GreaterEqualLess':'\u22DB','GreaterFullEqual':'\u2267','GreaterGreater':'\u2AA2','GreaterLess':'\u2277','GreaterSlantEqual':'\u2A7E','GreaterTilde':'\u2273','gscr':'\u210A','Gscr':'\uD835\uDCA2','gsim':'\u2273','gsime':'\u2A8E','gsiml':'\u2A90','gt':'>','Gt':'\u226B','GT':'>','gtcc':'\u2AA7','gtcir':'\u2A7A','gtdot':'\u22D7','gtlPar':'\u2995','gtquest':'\u2A7C','gtrapprox':'\u2A86','gtrarr':'\u2978','gtrdot':'\u22D7','gtreqless':'\u22DB','gtreqqless':'\u2A8C','gtrless':'\u2277','gtrsim':'\u2273','gvertneqq':'\u2269\uFE00','gvnE':'\u2269\uFE00','Hacek':'\u02C7','hairsp':'\u200A','half':'\xBD','hamilt':'\u210B','hardcy':'\u044A','HARDcy':'\u042A','harr':'\u2194','hArr':'\u21D4','harrcir':'\u2948','harrw':'\u21AD','Hat':'^','hbar':'\u210F','hcirc':'\u0125','Hcirc':'\u0124','hearts':'\u2665','heartsuit':'\u2665','hellip':'\u2026','hercon':'\u22B9','hfr':'\uD835\uDD25','Hfr':'\u210C','HilbertSpace':'\u210B','hksearow':'\u2925','hkswarow':'\u2926','hoarr':'\u21FF','homtht':'\u223B','hookleftarrow':'\u21A9','hookrightarrow':'\u21AA','hopf':'\uD835\uDD59','Hopf':'\u210D','horbar':'\u2015','HorizontalLine':'\u2500','hscr':'\uD835\uDCBD','Hscr':'\u210B','hslash':'\u210F','hstrok':'\u0127','Hstrok':'\u0126','HumpDownHump':'\u224E','HumpEqual':'\u224F','hybull':'\u2043','hyphen':'\u2010','iacute':'\xED','Iacute':'\xCD','ic':'\u2063','icirc':'\xEE','Icirc':'\xCE','icy':'\u0438','Icy':'\u0418','Idot':'\u0130','iecy':'\u0435','IEcy':'\u0415','iexcl':'\xA1','iff':'\u21D4','ifr':'\uD835\uDD26','Ifr':'\u2111','igrave':'\xEC','Igrave':'\xCC','ii':'\u2148','iiiint':'\u2A0C','iiint':'\u222D','iinfin':'\u29DC','iiota':'\u2129','ijlig':'\u0133','IJlig':'\u0132','Im':'\u2111','imacr':'\u012B','Imacr':'\u012A','image':'\u2111','ImaginaryI':'\u2148','imagline':'\u2110','imagpart':'\u2111','imath':'\u0131','imof':'\u22B7','imped':'\u01B5','Implies':'\u21D2','in':'\u2208','incare':'\u2105','infin':'\u221E','infintie':'\u29DD','inodot':'\u0131','int':'\u222B','Int':'\u222C','intcal':'\u22BA','integers':'\u2124','Integral':'\u222B','intercal':'\u22BA','Intersection':'\u22C2','intlarhk':'\u2A17','intprod':'\u2A3C','InvisibleComma':'\u2063','InvisibleTimes':'\u2062','iocy':'\u0451','IOcy':'\u0401','iogon':'\u012F','Iogon':'\u012E','iopf':'\uD835\uDD5A','Iopf':'\uD835\uDD40','iota':'\u03B9','Iota':'\u0399','iprod':'\u2A3C','iquest':'\xBF','iscr':'\uD835\uDCBE','Iscr':'\u2110','isin':'\u2208','isindot':'\u22F5','isinE':'\u22F9','isins':'\u22F4','isinsv':'\u22F3','isinv':'\u2208','it':'\u2062','itilde':'\u0129','Itilde':'\u0128','iukcy':'\u0456','Iukcy':'\u0406','iuml':'\xEF','Iuml':'\xCF','jcirc':'\u0135','Jcirc':'\u0134','jcy':'\u0439','Jcy':'\u0419','jfr':'\uD835\uDD27','Jfr':'\uD835\uDD0D','jmath':'\u0237','jopf':'\uD835\uDD5B','Jopf':'\uD835\uDD41','jscr':'\uD835\uDCBF','Jscr':'\uD835\uDCA5','jsercy':'\u0458','Jsercy':'\u0408','jukcy':'\u0454','Jukcy':'\u0404','kappa':'\u03BA','Kappa':'\u039A','kappav':'\u03F0','kcedil':'\u0137','Kcedil':'\u0136','kcy':'\u043A','Kcy':'\u041A','kfr':'\uD835\uDD28','Kfr':'\uD835\uDD0E','kgreen':'\u0138','khcy':'\u0445','KHcy':'\u0425','kjcy':'\u045C','KJcy':'\u040C','kopf':'\uD835\uDD5C','Kopf':'\uD835\uDD42','kscr':'\uD835\uDCC0','Kscr':'\uD835\uDCA6','lAarr':'\u21DA','lacute':'\u013A','Lacute':'\u0139','laemptyv':'\u29B4','lagran':'\u2112','lambda':'\u03BB','Lambda':'\u039B','lang':'\u27E8','Lang':'\u27EA','langd':'\u2991','langle':'\u27E8','lap':'\u2A85','Laplacetrf':'\u2112','laquo':'\xAB','larr':'\u2190','lArr':'\u21D0','Larr':'\u219E','larrb':'\u21E4','larrbfs':'\u291F','larrfs':'\u291D','larrhk':'\u21A9','larrlp':'\u21AB','larrpl':'\u2939','larrsim':'\u2973','larrtl':'\u21A2','lat':'\u2AAB','latail':'\u2919','lAtail':'\u291B','late':'\u2AAD','lates':'\u2AAD\uFE00','lbarr':'\u290C','lBarr':'\u290E','lbbrk':'\u2772','lbrace':'{','lbrack':'[','lbrke':'\u298B','lbrksld':'\u298F','lbrkslu':'\u298D','lcaron':'\u013E','Lcaron':'\u013D','lcedil':'\u013C','Lcedil':'\u013B','lceil':'\u2308','lcub':'{','lcy':'\u043B','Lcy':'\u041B','ldca':'\u2936','ldquo':'\u201C','ldquor':'\u201E','ldrdhar':'\u2967','ldrushar':'\u294B','ldsh':'\u21B2','le':'\u2264','lE':'\u2266','LeftAngleBracket':'\u27E8','leftarrow':'\u2190','Leftarrow':'\u21D0','LeftArrow':'\u2190','LeftArrowBar':'\u21E4','LeftArrowRightArrow':'\u21C6','leftarrowtail':'\u21A2','LeftCeiling':'\u2308','LeftDoubleBracket':'\u27E6','LeftDownTeeVector':'\u2961','LeftDownVector':'\u21C3','LeftDownVectorBar':'\u2959','LeftFloor':'\u230A','leftharpoondown':'\u21BD','leftharpoonup':'\u21BC','leftleftarrows':'\u21C7','leftrightarrow':'\u2194','Leftrightarrow':'\u21D4','LeftRightArrow':'\u2194','leftrightarrows':'\u21C6','leftrightharpoons':'\u21CB','leftrightsquigarrow':'\u21AD','LeftRightVector':'\u294E','LeftTee':'\u22A3','LeftTeeArrow':'\u21A4','LeftTeeVector':'\u295A','leftthreetimes':'\u22CB','LeftTriangle':'\u22B2','LeftTriangleBar':'\u29CF','LeftTriangleEqual':'\u22B4','LeftUpDownVector':'\u2951','LeftUpTeeVector':'\u2960','LeftUpVector':'\u21BF','LeftUpVectorBar':'\u2958','LeftVector':'\u21BC','LeftVectorBar':'\u2952','leg':'\u22DA','lEg':'\u2A8B','leq':'\u2264','leqq':'\u2266','leqslant':'\u2A7D','les':'\u2A7D','lescc':'\u2AA8','lesdot':'\u2A7F','lesdoto':'\u2A81','lesdotor':'\u2A83','lesg':'\u22DA\uFE00','lesges':'\u2A93','lessapprox':'\u2A85','lessdot':'\u22D6','lesseqgtr':'\u22DA','lesseqqgtr':'\u2A8B','LessEqualGreater':'\u22DA','LessFullEqual':'\u2266','LessGreater':'\u2276','lessgtr':'\u2276','LessLess':'\u2AA1','lesssim':'\u2272','LessSlantEqual':'\u2A7D','LessTilde':'\u2272','lfisht':'\u297C','lfloor':'\u230A','lfr':'\uD835\uDD29','Lfr':'\uD835\uDD0F','lg':'\u2276','lgE':'\u2A91','lHar':'\u2962','lhard':'\u21BD','lharu':'\u21BC','lharul':'\u296A','lhblk':'\u2584','ljcy':'\u0459','LJcy':'\u0409','ll':'\u226A','Ll':'\u22D8','llarr':'\u21C7','llcorner':'\u231E','Lleftarrow':'\u21DA','llhard':'\u296B','lltri':'\u25FA','lmidot':'\u0140','Lmidot':'\u013F','lmoust':'\u23B0','lmoustache':'\u23B0','lnap':'\u2A89','lnapprox':'\u2A89','lne':'\u2A87','lnE':'\u2268','lneq':'\u2A87','lneqq':'\u2268','lnsim':'\u22E6','loang':'\u27EC','loarr':'\u21FD','lobrk':'\u27E6','longleftarrow':'\u27F5','Longleftarrow':'\u27F8','LongLeftArrow':'\u27F5','longleftrightarrow':'\u27F7','Longleftrightarrow':'\u27FA','LongLeftRightArrow':'\u27F7','longmapsto':'\u27FC','longrightarrow':'\u27F6','Longrightarrow':'\u27F9','LongRightArrow':'\u27F6','looparrowleft':'\u21AB','looparrowright':'\u21AC','lopar':'\u2985','lopf':'\uD835\uDD5D','Lopf':'\uD835\uDD43','loplus':'\u2A2D','lotimes':'\u2A34','lowast':'\u2217','lowbar':'_','LowerLeftArrow':'\u2199','LowerRightArrow':'\u2198','loz':'\u25CA','lozenge':'\u25CA','lozf':'\u29EB','lpar':'(','lparlt':'\u2993','lrarr':'\u21C6','lrcorner':'\u231F','lrhar':'\u21CB','lrhard':'\u296D','lrm':'\u200E','lrtri':'\u22BF','lsaquo':'\u2039','lscr':'\uD835\uDCC1','Lscr':'\u2112','lsh':'\u21B0','Lsh':'\u21B0','lsim':'\u2272','lsime':'\u2A8D','lsimg':'\u2A8F','lsqb':'[','lsquo':'\u2018','lsquor':'\u201A','lstrok':'\u0142','Lstrok':'\u0141','lt':'<','Lt':'\u226A','LT':'<','ltcc':'\u2AA6','ltcir':'\u2A79','ltdot':'\u22D6','lthree':'\u22CB','ltimes':'\u22C9','ltlarr':'\u2976','ltquest':'\u2A7B','ltri':'\u25C3','ltrie':'\u22B4','ltrif':'\u25C2','ltrPar':'\u2996','lurdshar':'\u294A','luruhar':'\u2966','lvertneqq':'\u2268\uFE00','lvnE':'\u2268\uFE00','macr':'\xAF','male':'\u2642','malt':'\u2720','maltese':'\u2720','map':'\u21A6','Map':'\u2905','mapsto':'\u21A6','mapstodown':'\u21A7','mapstoleft':'\u21A4','mapstoup':'\u21A5','marker':'\u25AE','mcomma':'\u2A29','mcy':'\u043C','Mcy':'\u041C','mdash':'\u2014','mDDot':'\u223A','measuredangle':'\u2221','MediumSpace':'\u205F','Mellintrf':'\u2133','mfr':'\uD835\uDD2A','Mfr':'\uD835\uDD10','mho':'\u2127','micro':'\xB5','mid':'\u2223','midast':'*','midcir':'\u2AF0','middot':'\xB7','minus':'\u2212','minusb':'\u229F','minusd':'\u2238','minusdu':'\u2A2A','MinusPlus':'\u2213','mlcp':'\u2ADB','mldr':'\u2026','mnplus':'\u2213','models':'\u22A7','mopf':'\uD835\uDD5E','Mopf':'\uD835\uDD44','mp':'\u2213','mscr':'\uD835\uDCC2','Mscr':'\u2133','mstpos':'\u223E','mu':'\u03BC','Mu':'\u039C','multimap':'\u22B8','mumap':'\u22B8','nabla':'\u2207','nacute':'\u0144','Nacute':'\u0143','nang':'\u2220\u20D2','nap':'\u2249','napE':'\u2A70\u0338','napid':'\u224B\u0338','napos':'\u0149','napprox':'\u2249','natur':'\u266E','natural':'\u266E','naturals':'\u2115','nbsp':'\xA0','nbump':'\u224E\u0338','nbumpe':'\u224F\u0338','ncap':'\u2A43','ncaron':'\u0148','Ncaron':'\u0147','ncedil':'\u0146','Ncedil':'\u0145','ncong':'\u2247','ncongdot':'\u2A6D\u0338','ncup':'\u2A42','ncy':'\u043D','Ncy':'\u041D','ndash':'\u2013','ne':'\u2260','nearhk':'\u2924','nearr':'\u2197','neArr':'\u21D7','nearrow':'\u2197','nedot':'\u2250\u0338','NegativeMediumSpace':'\u200B','NegativeThickSpace':'\u200B','NegativeThinSpace':'\u200B','NegativeVeryThinSpace':'\u200B','nequiv':'\u2262','nesear':'\u2928','nesim':'\u2242\u0338','NestedGreaterGreater':'\u226B','NestedLessLess':'\u226A','NewLine':'\n','nexist':'\u2204','nexists':'\u2204','nfr':'\uD835\uDD2B','Nfr':'\uD835\uDD11','nge':'\u2271','ngE':'\u2267\u0338','ngeq':'\u2271','ngeqq':'\u2267\u0338','ngeqslant':'\u2A7E\u0338','nges':'\u2A7E\u0338','nGg':'\u22D9\u0338','ngsim':'\u2275','ngt':'\u226F','nGt':'\u226B\u20D2','ngtr':'\u226F','nGtv':'\u226B\u0338','nharr':'\u21AE','nhArr':'\u21CE','nhpar':'\u2AF2','ni':'\u220B','nis':'\u22FC','nisd':'\u22FA','niv':'\u220B','njcy':'\u045A','NJcy':'\u040A','nlarr':'\u219A','nlArr':'\u21CD','nldr':'\u2025','nle':'\u2270','nlE':'\u2266\u0338','nleftarrow':'\u219A','nLeftarrow':'\u21CD','nleftrightarrow':'\u21AE','nLeftrightarrow':'\u21CE','nleq':'\u2270','nleqq':'\u2266\u0338','nleqslant':'\u2A7D\u0338','nles':'\u2A7D\u0338','nless':'\u226E','nLl':'\u22D8\u0338','nlsim':'\u2274','nlt':'\u226E','nLt':'\u226A\u20D2','nltri':'\u22EA','nltrie':'\u22EC','nLtv':'\u226A\u0338','nmid':'\u2224','NoBreak':'\u2060','NonBreakingSpace':'\xA0','nopf':'\uD835\uDD5F','Nopf':'\u2115','not':'\xAC','Not':'\u2AEC','NotCongruent':'\u2262','NotCupCap':'\u226D','NotDoubleVerticalBar':'\u2226','NotElement':'\u2209','NotEqual':'\u2260','NotEqualTilde':'\u2242\u0338','NotExists':'\u2204','NotGreater':'\u226F','NotGreaterEqual':'\u2271','NotGreaterFullEqual':'\u2267\u0338','NotGreaterGreater':'\u226B\u0338','NotGreaterLess':'\u2279','NotGreaterSlantEqual':'\u2A7E\u0338','NotGreaterTilde':'\u2275','NotHumpDownHump':'\u224E\u0338','NotHumpEqual':'\u224F\u0338','notin':'\u2209','notindot':'\u22F5\u0338','notinE':'\u22F9\u0338','notinva':'\u2209','notinvb':'\u22F7','notinvc':'\u22F6','NotLeftTriangle':'\u22EA','NotLeftTriangleBar':'\u29CF\u0338','NotLeftTriangleEqual':'\u22EC','NotLess':'\u226E','NotLessEqual':'\u2270','NotLessGreater':'\u2278','NotLessLess':'\u226A\u0338','NotLessSlantEqual':'\u2A7D\u0338','NotLessTilde':'\u2274','NotNestedGreaterGreater':'\u2AA2\u0338','NotNestedLessLess':'\u2AA1\u0338','notni':'\u220C','notniva':'\u220C','notnivb':'\u22FE','notnivc':'\u22FD','NotPrecedes':'\u2280','NotPrecedesEqual':'\u2AAF\u0338','NotPrecedesSlantEqual':'\u22E0','NotReverseElement':'\u220C','NotRightTriangle':'\u22EB','NotRightTriangleBar':'\u29D0\u0338','NotRightTriangleEqual':'\u22ED','NotSquareSubset':'\u228F\u0338','NotSquareSubsetEqual':'\u22E2','NotSquareSuperset':'\u2290\u0338','NotSquareSupersetEqual':'\u22E3','NotSubset':'\u2282\u20D2','NotSubsetEqual':'\u2288','NotSucceeds':'\u2281','NotSucceedsEqual':'\u2AB0\u0338','NotSucceedsSlantEqual':'\u22E1','NotSucceedsTilde':'\u227F\u0338','NotSuperset':'\u2283\u20D2','NotSupersetEqual':'\u2289','NotTilde':'\u2241','NotTildeEqual':'\u2244','NotTildeFullEqual':'\u2247','NotTildeTilde':'\u2249','NotVerticalBar':'\u2224','npar':'\u2226','nparallel':'\u2226','nparsl':'\u2AFD\u20E5','npart':'\u2202\u0338','npolint':'\u2A14','npr':'\u2280','nprcue':'\u22E0','npre':'\u2AAF\u0338','nprec':'\u2280','npreceq':'\u2AAF\u0338','nrarr':'\u219B','nrArr':'\u21CF','nrarrc':'\u2933\u0338','nrarrw':'\u219D\u0338','nrightarrow':'\u219B','nRightarrow':'\u21CF','nrtri':'\u22EB','nrtrie':'\u22ED','nsc':'\u2281','nsccue':'\u22E1','nsce':'\u2AB0\u0338','nscr':'\uD835\uDCC3','Nscr':'\uD835\uDCA9','nshortmid':'\u2224','nshortparallel':'\u2226','nsim':'\u2241','nsime':'\u2244','nsimeq':'\u2244','nsmid':'\u2224','nspar':'\u2226','nsqsube':'\u22E2','nsqsupe':'\u22E3','nsub':'\u2284','nsube':'\u2288','nsubE':'\u2AC5\u0338','nsubset':'\u2282\u20D2','nsubseteq':'\u2288','nsubseteqq':'\u2AC5\u0338','nsucc':'\u2281','nsucceq':'\u2AB0\u0338','nsup':'\u2285','nsupe':'\u2289','nsupE':'\u2AC6\u0338','nsupset':'\u2283\u20D2','nsupseteq':'\u2289','nsupseteqq':'\u2AC6\u0338','ntgl':'\u2279','ntilde':'\xF1','Ntilde':'\xD1','ntlg':'\u2278','ntriangleleft':'\u22EA','ntrianglelefteq':'\u22EC','ntriangleright':'\u22EB','ntrianglerighteq':'\u22ED','nu':'\u03BD','Nu':'\u039D','num':'#','numero':'\u2116','numsp':'\u2007','nvap':'\u224D\u20D2','nvdash':'\u22AC','nvDash':'\u22AD','nVdash':'\u22AE','nVDash':'\u22AF','nvge':'\u2265\u20D2','nvgt':'>\u20D2','nvHarr':'\u2904','nvinfin':'\u29DE','nvlArr':'\u2902','nvle':'\u2264\u20D2','nvlt':'<\u20D2','nvltrie':'\u22B4\u20D2','nvrArr':'\u2903','nvrtrie':'\u22B5\u20D2','nvsim':'\u223C\u20D2','nwarhk':'\u2923','nwarr':'\u2196','nwArr':'\u21D6','nwarrow':'\u2196','nwnear':'\u2927','oacute':'\xF3','Oacute':'\xD3','oast':'\u229B','ocir':'\u229A','ocirc':'\xF4','Ocirc':'\xD4','ocy':'\u043E','Ocy':'\u041E','odash':'\u229D','odblac':'\u0151','Odblac':'\u0150','odiv':'\u2A38','odot':'\u2299','odsold':'\u29BC','oelig':'\u0153','OElig':'\u0152','ofcir':'\u29BF','ofr':'\uD835\uDD2C','Ofr':'\uD835\uDD12','ogon':'\u02DB','ograve':'\xF2','Ograve':'\xD2','ogt':'\u29C1','ohbar':'\u29B5','ohm':'\u03A9','oint':'\u222E','olarr':'\u21BA','olcir':'\u29BE','olcross':'\u29BB','oline':'\u203E','olt':'\u29C0','omacr':'\u014D','Omacr':'\u014C','omega':'\u03C9','Omega':'\u03A9','omicron':'\u03BF','Omicron':'\u039F','omid':'\u29B6','ominus':'\u2296','oopf':'\uD835\uDD60','Oopf':'\uD835\uDD46','opar':'\u29B7','OpenCurlyDoubleQuote':'\u201C','OpenCurlyQuote':'\u2018','operp':'\u29B9','oplus':'\u2295','or':'\u2228','Or':'\u2A54','orarr':'\u21BB','ord':'\u2A5D','order':'\u2134','orderof':'\u2134','ordf':'\xAA','ordm':'\xBA','origof':'\u22B6','oror':'\u2A56','orslope':'\u2A57','orv':'\u2A5B','oS':'\u24C8','oscr':'\u2134','Oscr':'\uD835\uDCAA','oslash':'\xF8','Oslash':'\xD8','osol':'\u2298','otilde':'\xF5','Otilde':'\xD5','otimes':'\u2297','Otimes':'\u2A37','otimesas':'\u2A36','ouml':'\xF6','Ouml':'\xD6','ovbar':'\u233D','OverBar':'\u203E','OverBrace':'\u23DE','OverBracket':'\u23B4','OverParenthesis':'\u23DC','par':'\u2225','para':'\xB6','parallel':'\u2225','parsim':'\u2AF3','parsl':'\u2AFD','part':'\u2202','PartialD':'\u2202','pcy':'\u043F','Pcy':'\u041F','percnt':'%','period':'.','permil':'\u2030','perp':'\u22A5','pertenk':'\u2031','pfr':'\uD835\uDD2D','Pfr':'\uD835\uDD13','phi':'\u03C6','Phi':'\u03A6','phiv':'\u03D5','phmmat':'\u2133','phone':'\u260E','pi':'\u03C0','Pi':'\u03A0','pitchfork':'\u22D4','piv':'\u03D6','planck':'\u210F','planckh':'\u210E','plankv':'\u210F','plus':'+','plusacir':'\u2A23','plusb':'\u229E','pluscir':'\u2A22','plusdo':'\u2214','plusdu':'\u2A25','pluse':'\u2A72','PlusMinus':'\xB1','plusmn':'\xB1','plussim':'\u2A26','plustwo':'\u2A27','pm':'\xB1','Poincareplane':'\u210C','pointint':'\u2A15','popf':'\uD835\uDD61','Popf':'\u2119','pound':'\xA3','pr':'\u227A','Pr':'\u2ABB','prap':'\u2AB7','prcue':'\u227C','pre':'\u2AAF','prE':'\u2AB3','prec':'\u227A','precapprox':'\u2AB7','preccurlyeq':'\u227C','Precedes':'\u227A','PrecedesEqual':'\u2AAF','PrecedesSlantEqual':'\u227C','PrecedesTilde':'\u227E','preceq':'\u2AAF','precnapprox':'\u2AB9','precneqq':'\u2AB5','precnsim':'\u22E8','precsim':'\u227E','prime':'\u2032','Prime':'\u2033','primes':'\u2119','prnap':'\u2AB9','prnE':'\u2AB5','prnsim':'\u22E8','prod':'\u220F','Product':'\u220F','profalar':'\u232E','profline':'\u2312','profsurf':'\u2313','prop':'\u221D','Proportion':'\u2237','Proportional':'\u221D','propto':'\u221D','prsim':'\u227E','prurel':'\u22B0','pscr':'\uD835\uDCC5','Pscr':'\uD835\uDCAB','psi':'\u03C8','Psi':'\u03A8','puncsp':'\u2008','qfr':'\uD835\uDD2E','Qfr':'\uD835\uDD14','qint':'\u2A0C','qopf':'\uD835\uDD62','Qopf':'\u211A','qprime':'\u2057','qscr':'\uD835\uDCC6','Qscr':'\uD835\uDCAC','quaternions':'\u210D','quatint':'\u2A16','quest':'?','questeq':'\u225F','quot':'"','QUOT':'"','rAarr':'\u21DB','race':'\u223D\u0331','racute':'\u0155','Racute':'\u0154','radic':'\u221A','raemptyv':'\u29B3','rang':'\u27E9','Rang':'\u27EB','rangd':'\u2992','range':'\u29A5','rangle':'\u27E9','raquo':'\xBB','rarr':'\u2192','rArr':'\u21D2','Rarr':'\u21A0','rarrap':'\u2975','rarrb':'\u21E5','rarrbfs':'\u2920','rarrc':'\u2933','rarrfs':'\u291E','rarrhk':'\u21AA','rarrlp':'\u21AC','rarrpl':'\u2945','rarrsim':'\u2974','rarrtl':'\u21A3','Rarrtl':'\u2916','rarrw':'\u219D','ratail':'\u291A','rAtail':'\u291C','ratio':'\u2236','rationals':'\u211A','rbarr':'\u290D','rBarr':'\u290F','RBarr':'\u2910','rbbrk':'\u2773','rbrace':'}','rbrack':']','rbrke':'\u298C','rbrksld':'\u298E','rbrkslu':'\u2990','rcaron':'\u0159','Rcaron':'\u0158','rcedil':'\u0157','Rcedil':'\u0156','rceil':'\u2309','rcub':'}','rcy':'\u0440','Rcy':'\u0420','rdca':'\u2937','rdldhar':'\u2969','rdquo':'\u201D','rdquor':'\u201D','rdsh':'\u21B3','Re':'\u211C','real':'\u211C','realine':'\u211B','realpart':'\u211C','reals':'\u211D','rect':'\u25AD','reg':'\xAE','REG':'\xAE','ReverseElement':'\u220B','ReverseEquilibrium':'\u21CB','ReverseUpEquilibrium':'\u296F','rfisht':'\u297D','rfloor':'\u230B','rfr':'\uD835\uDD2F','Rfr':'\u211C','rHar':'\u2964','rhard':'\u21C1','rharu':'\u21C0','rharul':'\u296C','rho':'\u03C1','Rho':'\u03A1','rhov':'\u03F1','RightAngleBracket':'\u27E9','rightarrow':'\u2192','Rightarrow':'\u21D2','RightArrow':'\u2192','RightArrowBar':'\u21E5','RightArrowLeftArrow':'\u21C4','rightarrowtail':'\u21A3','RightCeiling':'\u2309','RightDoubleBracket':'\u27E7','RightDownTeeVector':'\u295D','RightDownVector':'\u21C2','RightDownVectorBar':'\u2955','RightFloor':'\u230B','rightharpoondown':'\u21C1','rightharpoonup':'\u21C0','rightleftarrows':'\u21C4','rightleftharpoons':'\u21CC','rightrightarrows':'\u21C9','rightsquigarrow':'\u219D','RightTee':'\u22A2','RightTeeArrow':'\u21A6','RightTeeVector':'\u295B','rightthreetimes':'\u22CC','RightTriangle':'\u22B3','RightTriangleBar':'\u29D0','RightTriangleEqual':'\u22B5','RightUpDownVector':'\u294F','RightUpTeeVector':'\u295C','RightUpVector':'\u21BE','RightUpVectorBar':'\u2954','RightVector':'\u21C0','RightVectorBar':'\u2953','ring':'\u02DA','risingdotseq':'\u2253','rlarr':'\u21C4','rlhar':'\u21CC','rlm':'\u200F','rmoust':'\u23B1','rmoustache':'\u23B1','rnmid':'\u2AEE','roang':'\u27ED','roarr':'\u21FE','robrk':'\u27E7','ropar':'\u2986','ropf':'\uD835\uDD63','Ropf':'\u211D','roplus':'\u2A2E','rotimes':'\u2A35','RoundImplies':'\u2970','rpar':')','rpargt':'\u2994','rppolint':'\u2A12','rrarr':'\u21C9','Rrightarrow':'\u21DB','rsaquo':'\u203A','rscr':'\uD835\uDCC7','Rscr':'\u211B','rsh':'\u21B1','Rsh':'\u21B1','rsqb':']','rsquo':'\u2019','rsquor':'\u2019','rthree':'\u22CC','rtimes':'\u22CA','rtri':'\u25B9','rtrie':'\u22B5','rtrif':'\u25B8','rtriltri':'\u29CE','RuleDelayed':'\u29F4','ruluhar':'\u2968','rx':'\u211E','sacute':'\u015B','Sacute':'\u015A','sbquo':'\u201A','sc':'\u227B','Sc':'\u2ABC','scap':'\u2AB8','scaron':'\u0161','Scaron':'\u0160','sccue':'\u227D','sce':'\u2AB0','scE':'\u2AB4','scedil':'\u015F','Scedil':'\u015E','scirc':'\u015D','Scirc':'\u015C','scnap':'\u2ABA','scnE':'\u2AB6','scnsim':'\u22E9','scpolint':'\u2A13','scsim':'\u227F','scy':'\u0441','Scy':'\u0421','sdot':'\u22C5','sdotb':'\u22A1','sdote':'\u2A66','searhk':'\u2925','searr':'\u2198','seArr':'\u21D8','searrow':'\u2198','sect':'\xA7','semi':';','seswar':'\u2929','setminus':'\u2216','setmn':'\u2216','sext':'\u2736','sfr':'\uD835\uDD30','Sfr':'\uD835\uDD16','sfrown':'\u2322','sharp':'\u266F','shchcy':'\u0449','SHCHcy':'\u0429','shcy':'\u0448','SHcy':'\u0428','ShortDownArrow':'\u2193','ShortLeftArrow':'\u2190','shortmid':'\u2223','shortparallel':'\u2225','ShortRightArrow':'\u2192','ShortUpArrow':'\u2191','shy':'\xAD','sigma':'\u03C3','Sigma':'\u03A3','sigmaf':'\u03C2','sigmav':'\u03C2','sim':'\u223C','simdot':'\u2A6A','sime':'\u2243','simeq':'\u2243','simg':'\u2A9E','simgE':'\u2AA0','siml':'\u2A9D','simlE':'\u2A9F','simne':'\u2246','simplus':'\u2A24','simrarr':'\u2972','slarr':'\u2190','SmallCircle':'\u2218','smallsetminus':'\u2216','smashp':'\u2A33','smeparsl':'\u29E4','smid':'\u2223','smile':'\u2323','smt':'\u2AAA','smte':'\u2AAC','smtes':'\u2AAC\uFE00','softcy':'\u044C','SOFTcy':'\u042C','sol':'/','solb':'\u29C4','solbar':'\u233F','sopf':'\uD835\uDD64','Sopf':'\uD835\uDD4A','spades':'\u2660','spadesuit':'\u2660','spar':'\u2225','sqcap':'\u2293','sqcaps':'\u2293\uFE00','sqcup':'\u2294','sqcups':'\u2294\uFE00','Sqrt':'\u221A','sqsub':'\u228F','sqsube':'\u2291','sqsubset':'\u228F','sqsubseteq':'\u2291','sqsup':'\u2290','sqsupe':'\u2292','sqsupset':'\u2290','sqsupseteq':'\u2292','squ':'\u25A1','square':'\u25A1','Square':'\u25A1','SquareIntersection':'\u2293','SquareSubset':'\u228F','SquareSubsetEqual':'\u2291','SquareSuperset':'\u2290','SquareSupersetEqual':'\u2292','SquareUnion':'\u2294','squarf':'\u25AA','squf':'\u25AA','srarr':'\u2192','sscr':'\uD835\uDCC8','Sscr':'\uD835\uDCAE','ssetmn':'\u2216','ssmile':'\u2323','sstarf':'\u22C6','star':'\u2606','Star':'\u22C6','starf':'\u2605','straightepsilon':'\u03F5','straightphi':'\u03D5','strns':'\xAF','sub':'\u2282','Sub':'\u22D0','subdot':'\u2ABD','sube':'\u2286','subE':'\u2AC5','subedot':'\u2AC3','submult':'\u2AC1','subne':'\u228A','subnE':'\u2ACB','subplus':'\u2ABF','subrarr':'\u2979','subset':'\u2282','Subset':'\u22D0','subseteq':'\u2286','subseteqq':'\u2AC5','SubsetEqual':'\u2286','subsetneq':'\u228A','subsetneqq':'\u2ACB','subsim':'\u2AC7','subsub':'\u2AD5','subsup':'\u2AD3','succ':'\u227B','succapprox':'\u2AB8','succcurlyeq':'\u227D','Succeeds':'\u227B','SucceedsEqual':'\u2AB0','SucceedsSlantEqual':'\u227D','SucceedsTilde':'\u227F','succeq':'\u2AB0','succnapprox':'\u2ABA','succneqq':'\u2AB6','succnsim':'\u22E9','succsim':'\u227F','SuchThat':'\u220B','sum':'\u2211','Sum':'\u2211','sung':'\u266A','sup':'\u2283','Sup':'\u22D1','sup1':'\xB9','sup2':'\xB2','sup3':'\xB3','supdot':'\u2ABE','supdsub':'\u2AD8','supe':'\u2287','supE':'\u2AC6','supedot':'\u2AC4','Superset':'\u2283','SupersetEqual':'\u2287','suphsol':'\u27C9','suphsub':'\u2AD7','suplarr':'\u297B','supmult':'\u2AC2','supne':'\u228B','supnE':'\u2ACC','supplus':'\u2AC0','supset':'\u2283','Supset':'\u22D1','supseteq':'\u2287','supseteqq':'\u2AC6','supsetneq':'\u228B','supsetneqq':'\u2ACC','supsim':'\u2AC8','supsub':'\u2AD4','supsup':'\u2AD6','swarhk':'\u2926','swarr':'\u2199','swArr':'\u21D9','swarrow':'\u2199','swnwar':'\u292A','szlig':'\xDF','Tab':'\t','target':'\u2316','tau':'\u03C4','Tau':'\u03A4','tbrk':'\u23B4','tcaron':'\u0165','Tcaron':'\u0164','tcedil':'\u0163','Tcedil':'\u0162','tcy':'\u0442','Tcy':'\u0422','tdot':'\u20DB','telrec':'\u2315','tfr':'\uD835\uDD31','Tfr':'\uD835\uDD17','there4':'\u2234','therefore':'\u2234','Therefore':'\u2234','theta':'\u03B8','Theta':'\u0398','thetasym':'\u03D1','thetav':'\u03D1','thickapprox':'\u2248','thicksim':'\u223C','ThickSpace':'\u205F\u200A','thinsp':'\u2009','ThinSpace':'\u2009','thkap':'\u2248','thksim':'\u223C','thorn':'\xFE','THORN':'\xDE','tilde':'\u02DC','Tilde':'\u223C','TildeEqual':'\u2243','TildeFullEqual':'\u2245','TildeTilde':'\u2248','times':'\xD7','timesb':'\u22A0','timesbar':'\u2A31','timesd':'\u2A30','tint':'\u222D','toea':'\u2928','top':'\u22A4','topbot':'\u2336','topcir':'\u2AF1','topf':'\uD835\uDD65','Topf':'\uD835\uDD4B','topfork':'\u2ADA','tosa':'\u2929','tprime':'\u2034','trade':'\u2122','TRADE':'\u2122','triangle':'\u25B5','triangledown':'\u25BF','triangleleft':'\u25C3','trianglelefteq':'\u22B4','triangleq':'\u225C','triangleright':'\u25B9','trianglerighteq':'\u22B5','tridot':'\u25EC','trie':'\u225C','triminus':'\u2A3A','TripleDot':'\u20DB','triplus':'\u2A39','trisb':'\u29CD','tritime':'\u2A3B','trpezium':'\u23E2','tscr':'\uD835\uDCC9','Tscr':'\uD835\uDCAF','tscy':'\u0446','TScy':'\u0426','tshcy':'\u045B','TSHcy':'\u040B','tstrok':'\u0167','Tstrok':'\u0166','twixt':'\u226C','twoheadleftarrow':'\u219E','twoheadrightarrow':'\u21A0','uacute':'\xFA','Uacute':'\xDA','uarr':'\u2191','uArr':'\u21D1','Uarr':'\u219F','Uarrocir':'\u2949','ubrcy':'\u045E','Ubrcy':'\u040E','ubreve':'\u016D','Ubreve':'\u016C','ucirc':'\xFB','Ucirc':'\xDB','ucy':'\u0443','Ucy':'\u0423','udarr':'\u21C5','udblac':'\u0171','Udblac':'\u0170','udhar':'\u296E','ufisht':'\u297E','ufr':'\uD835\uDD32','Ufr':'\uD835\uDD18','ugrave':'\xF9','Ugrave':'\xD9','uHar':'\u2963','uharl':'\u21BF','uharr':'\u21BE','uhblk':'\u2580','ulcorn':'\u231C','ulcorner':'\u231C','ulcrop':'\u230F','ultri':'\u25F8','umacr':'\u016B','Umacr':'\u016A','uml':'\xA8','UnderBar':'_','UnderBrace':'\u23DF','UnderBracket':'\u23B5','UnderParenthesis':'\u23DD','Union':'\u22C3','UnionPlus':'\u228E','uogon':'\u0173','Uogon':'\u0172','uopf':'\uD835\uDD66','Uopf':'\uD835\uDD4C','uparrow':'\u2191','Uparrow':'\u21D1','UpArrow':'\u2191','UpArrowBar':'\u2912','UpArrowDownArrow':'\u21C5','updownarrow':'\u2195','Updownarrow':'\u21D5','UpDownArrow':'\u2195','UpEquilibrium':'\u296E','upharpoonleft':'\u21BF','upharpoonright':'\u21BE','uplus':'\u228E','UpperLeftArrow':'\u2196','UpperRightArrow':'\u2197','upsi':'\u03C5','Upsi':'\u03D2','upsih':'\u03D2','upsilon':'\u03C5','Upsilon':'\u03A5','UpTee':'\u22A5','UpTeeArrow':'\u21A5','upuparrows':'\u21C8','urcorn':'\u231D','urcorner':'\u231D','urcrop':'\u230E','uring':'\u016F','Uring':'\u016E','urtri':'\u25F9','uscr':'\uD835\uDCCA','Uscr':'\uD835\uDCB0','utdot':'\u22F0','utilde':'\u0169','Utilde':'\u0168','utri':'\u25B5','utrif':'\u25B4','uuarr':'\u21C8','uuml':'\xFC','Uuml':'\xDC','uwangle':'\u29A7','vangrt':'\u299C','varepsilon':'\u03F5','varkappa':'\u03F0','varnothing':'\u2205','varphi':'\u03D5','varpi':'\u03D6','varpropto':'\u221D','varr':'\u2195','vArr':'\u21D5','varrho':'\u03F1','varsigma':'\u03C2','varsubsetneq':'\u228A\uFE00','varsubsetneqq':'\u2ACB\uFE00','varsupsetneq':'\u228B\uFE00','varsupsetneqq':'\u2ACC\uFE00','vartheta':'\u03D1','vartriangleleft':'\u22B2','vartriangleright':'\u22B3','vBar':'\u2AE8','Vbar':'\u2AEB','vBarv':'\u2AE9','vcy':'\u0432','Vcy':'\u0412','vdash':'\u22A2','vDash':'\u22A8','Vdash':'\u22A9','VDash':'\u22AB','Vdashl':'\u2AE6','vee':'\u2228','Vee':'\u22C1','veebar':'\u22BB','veeeq':'\u225A','vellip':'\u22EE','verbar':'|','Verbar':'\u2016','vert':'|','Vert':'\u2016','VerticalBar':'\u2223','VerticalLine':'|','VerticalSeparator':'\u2758','VerticalTilde':'\u2240','VeryThinSpace':'\u200A','vfr':'\uD835\uDD33','Vfr':'\uD835\uDD19','vltri':'\u22B2','vnsub':'\u2282\u20D2','vnsup':'\u2283\u20D2','vopf':'\uD835\uDD67','Vopf':'\uD835\uDD4D','vprop':'\u221D','vrtri':'\u22B3','vscr':'\uD835\uDCCB','Vscr':'\uD835\uDCB1','vsubne':'\u228A\uFE00','vsubnE':'\u2ACB\uFE00','vsupne':'\u228B\uFE00','vsupnE':'\u2ACC\uFE00','Vvdash':'\u22AA','vzigzag':'\u299A','wcirc':'\u0175','Wcirc':'\u0174','wedbar':'\u2A5F','wedge':'\u2227','Wedge':'\u22C0','wedgeq':'\u2259','weierp':'\u2118','wfr':'\uD835\uDD34','Wfr':'\uD835\uDD1A','wopf':'\uD835\uDD68','Wopf':'\uD835\uDD4E','wp':'\u2118','wr':'\u2240','wreath':'\u2240','wscr':'\uD835\uDCCC','Wscr':'\uD835\uDCB2','xcap':'\u22C2','xcirc':'\u25EF','xcup':'\u22C3','xdtri':'\u25BD','xfr':'\uD835\uDD35','Xfr':'\uD835\uDD1B','xharr':'\u27F7','xhArr':'\u27FA','xi':'\u03BE','Xi':'\u039E','xlarr':'\u27F5','xlArr':'\u27F8','xmap':'\u27FC','xnis':'\u22FB','xodot':'\u2A00','xopf':'\uD835\uDD69','Xopf':'\uD835\uDD4F','xoplus':'\u2A01','xotime':'\u2A02','xrarr':'\u27F6','xrArr':'\u27F9','xscr':'\uD835\uDCCD','Xscr':'\uD835\uDCB3','xsqcup':'\u2A06','xuplus':'\u2A04','xutri':'\u25B3','xvee':'\u22C1','xwedge':'\u22C0','yacute':'\xFD','Yacute':'\xDD','yacy':'\u044F','YAcy':'\u042F','ycirc':'\u0177','Ycirc':'\u0176','ycy':'\u044B','Ycy':'\u042B','yen':'\xA5','yfr':'\uD835\uDD36','Yfr':'\uD835\uDD1C','yicy':'\u0457','YIcy':'\u0407','yopf':'\uD835\uDD6A','Yopf':'\uD835\uDD50','yscr':'\uD835\uDCCE','Yscr':'\uD835\uDCB4','yucy':'\u044E','YUcy':'\u042E','yuml':'\xFF','Yuml':'\u0178','zacute':'\u017A','Zacute':'\u0179','zcaron':'\u017E','Zcaron':'\u017D','zcy':'\u0437','Zcy':'\u0417','zdot':'\u017C','Zdot':'\u017B','zeetrf':'\u2128','ZeroWidthSpace':'\u200B','zeta':'\u03B6','Zeta':'\u0396','zfr':'\uD835\uDD37','Zfr':'\u2128','zhcy':'\u0436','ZHcy':'\u0416','zigrarr':'\u21DD','zopf':'\uD835\uDD6B','Zopf':'\u2124','zscr':'\uD835\uDCCF','Zscr':'\uD835\uDCB5','zwj':'\u200D','zwnj':'\u200C'};
		var decodeMapLegacy = {'aacute':'\xE1','Aacute':'\xC1','acirc':'\xE2','Acirc':'\xC2','acute':'\xB4','aelig':'\xE6','AElig':'\xC6','agrave':'\xE0','Agrave':'\xC0','amp':'&','AMP':'&','aring':'\xE5','Aring':'\xC5','atilde':'\xE3','Atilde':'\xC3','auml':'\xE4','Auml':'\xC4','brvbar':'\xA6','ccedil':'\xE7','Ccedil':'\xC7','cedil':'\xB8','cent':'\xA2','copy':'\xA9','COPY':'\xA9','curren':'\xA4','deg':'\xB0','divide':'\xF7','eacute':'\xE9','Eacute':'\xC9','ecirc':'\xEA','Ecirc':'\xCA','egrave':'\xE8','Egrave':'\xC8','eth':'\xF0','ETH':'\xD0','euml':'\xEB','Euml':'\xCB','frac12':'\xBD','frac14':'\xBC','frac34':'\xBE','gt':'>','GT':'>','iacute':'\xED','Iacute':'\xCD','icirc':'\xEE','Icirc':'\xCE','iexcl':'\xA1','igrave':'\xEC','Igrave':'\xCC','iquest':'\xBF','iuml':'\xEF','Iuml':'\xCF','laquo':'\xAB','lt':'<','LT':'<','macr':'\xAF','micro':'\xB5','middot':'\xB7','nbsp':'\xA0','not':'\xAC','ntilde':'\xF1','Ntilde':'\xD1','oacute':'\xF3','Oacute':'\xD3','ocirc':'\xF4','Ocirc':'\xD4','ograve':'\xF2','Ograve':'\xD2','ordf':'\xAA','ordm':'\xBA','oslash':'\xF8','Oslash':'\xD8','otilde':'\xF5','Otilde':'\xD5','ouml':'\xF6','Ouml':'\xD6','para':'\xB6','plusmn':'\xB1','pound':'\xA3','quot':'"','QUOT':'"','raquo':'\xBB','reg':'\xAE','REG':'\xAE','sect':'\xA7','shy':'\xAD','sup1':'\xB9','sup2':'\xB2','sup3':'\xB3','szlig':'\xDF','thorn':'\xFE','THORN':'\xDE','times':'\xD7','uacute':'\xFA','Uacute':'\xDA','ucirc':'\xFB','Ucirc':'\xDB','ugrave':'\xF9','Ugrave':'\xD9','uml':'\xA8','uuml':'\xFC','Uuml':'\xDC','yacute':'\xFD','Yacute':'\xDD','yen':'\xA5','yuml':'\xFF'};
		var decodeMapNumeric = {'0':'\uFFFD','128':'\u20AC','130':'\u201A','131':'\u0192','132':'\u201E','133':'\u2026','134':'\u2020','135':'\u2021','136':'\u02C6','137':'\u2030','138':'\u0160','139':'\u2039','140':'\u0152','142':'\u017D','145':'\u2018','146':'\u2019','147':'\u201C','148':'\u201D','149':'\u2022','150':'\u2013','151':'\u2014','152':'\u02DC','153':'\u2122','154':'\u0161','155':'\u203A','156':'\u0153','158':'\u017E','159':'\u0178'};
		var invalidReferenceCodePoints = [1,2,3,4,5,6,7,8,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,64976,64977,64978,64979,64980,64981,64982,64983,64984,64985,64986,64987,64988,64989,64990,64991,64992,64993,64994,64995,64996,64997,64998,64999,65000,65001,65002,65003,65004,65005,65006,65007,65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111];

		/*--------------------------------------------------------------------------*/

		var stringFromCharCode = String.fromCharCode;

		var object = {};
		var hasOwnProperty = object.hasOwnProperty;
		var has = function(object, propertyName) {
			return hasOwnProperty.call(object, propertyName);
		};

		var contains = function(array, value) {
			var index = -1;
			var length = array.length;
			while (++index < length) {
				if (array[index] == value) {
					return true;
				}
			}
			return false;
		};

		var merge = function(options, defaults) {
			if (!options) {
				return defaults;
			}
			var result = {};
			var key;
			for (key in defaults) {
				// A `hasOwnProperty` check is not needed here, since only recognized
				// option names are used anyway. Any others are ignored.
				result[key] = has(options, key) ? options[key] : defaults[key];
			}
			return result;
		};

		// Modified version of `ucs2encode`; see https://mths.be/punycode.
		var codePointToSymbol = function(codePoint, strict) {
			var output = '';
			if ((codePoint >= 0xD800 && codePoint <= 0xDFFF) || codePoint > 0x10FFFF) {
				// See issue #4:
				// “Otherwise, if the number is in the range 0xD800 to 0xDFFF or is
				// greater than 0x10FFFF, then this is a parse error. Return a U+FFFD
				// REPLACEMENT CHARACTER.”
				if (strict) {
					parseError('character reference outside the permissible Unicode range');
				}
				return '\uFFFD';
			}
			if (has(decodeMapNumeric, codePoint)) {
				if (strict) {
					parseError('disallowed character reference');
				}
				return decodeMapNumeric[codePoint];
			}
			if (strict && contains(invalidReferenceCodePoints, codePoint)) {
				parseError('disallowed character reference');
			}
			if (codePoint > 0xFFFF) {
				codePoint -= 0x10000;
				output += stringFromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
				codePoint = 0xDC00 | codePoint & 0x3FF;
			}
			output += stringFromCharCode(codePoint);
			return output;
		};

		var hexEscape = function(codePoint) {
			return '&#x' + codePoint.toString(16).toUpperCase() + ';';
		};

		var decEscape = function(codePoint) {
			return '&#' + codePoint + ';';
		};

		var parseError = function(message) {
			throw Error('Parse error: ' + message);
		};

		/*--------------------------------------------------------------------------*/

		var encode = function(string, options) {
			options = merge(options, encode.options);
			var strict = options.strict;
			if (strict && regexInvalidRawCodePoint.test(string)) {
				parseError('forbidden code point');
			}
			var encodeEverything = options.encodeEverything;
			var useNamedReferences = options.useNamedReferences;
			var allowUnsafeSymbols = options.allowUnsafeSymbols;
			var escapeCodePoint = options.decimal ? decEscape : hexEscape;

			var escapeBmpSymbol = function(symbol) {
				return escapeCodePoint(symbol.charCodeAt(0));
			};

			if (encodeEverything) {
				// Encode ASCII symbols.
				string = string.replace(regexAsciiWhitelist, function(symbol) {
					// Use named references if requested & possible.
					if (useNamedReferences && has(encodeMap, symbol)) {
						return '&' + encodeMap[symbol] + ';';
					}
					return escapeBmpSymbol(symbol);
				});
				// Shorten a few escapes that represent two symbols, of which at least one
				// is within the ASCII range.
				if (useNamedReferences) {
					string = string
						.replace(/&gt;\u20D2/g, '&nvgt;')
						.replace(/&lt;\u20D2/g, '&nvlt;')
						.replace(/&#x66;&#x6A;/g, '&fjlig;');
				}
				// Encode non-ASCII symbols.
				if (useNamedReferences) {
					// Encode non-ASCII symbols that can be replaced with a named reference.
					string = string.replace(regexEncodeNonAscii, function(string) {
						// Note: there is no need to check `has(encodeMap, string)` here.
						return '&' + encodeMap[string] + ';';
					});
				}
				// Note: any remaining non-ASCII symbols are handled outside of the `if`.
			} else if (useNamedReferences) {
				// Apply named character references.
				// Encode `<>"'&` using named character references.
				if (!allowUnsafeSymbols) {
					string = string.replace(regexEscape, function(string) {
						return '&' + encodeMap[string] + ';'; // no need to check `has()` here
					});
				}
				// Shorten escapes that represent two symbols, of which at least one is
				// `<>"'&`.
				string = string
					.replace(/&gt;\u20D2/g, '&nvgt;')
					.replace(/&lt;\u20D2/g, '&nvlt;');
				// Encode non-ASCII symbols that can be replaced with a named reference.
				string = string.replace(regexEncodeNonAscii, function(string) {
					// Note: there is no need to check `has(encodeMap, string)` here.
					return '&' + encodeMap[string] + ';';
				});
			} else if (!allowUnsafeSymbols) {
				// Encode `<>"'&` using hexadecimal escapes, now that they’re not handled
				// using named character references.
				string = string.replace(regexEscape, escapeBmpSymbol);
			}
			return string
				// Encode astral symbols.
				.replace(regexAstralSymbols, function($0) {
					// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
					var high = $0.charCodeAt(0);
					var low = $0.charCodeAt(1);
					var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
					return escapeCodePoint(codePoint);
				})
				// Encode any remaining BMP symbols that are not printable ASCII symbols
				// using a hexadecimal escape.
				.replace(regexBmpWhitelist, escapeBmpSymbol);
		};
		// Expose default options (so they can be overridden globally).
		encode.options = {
			'allowUnsafeSymbols': false,
			'encodeEverything': false,
			'strict': false,
			'useNamedReferences': false,
			'decimal' : false
		};

		var decode = function(html, options) {
			options = merge(options, decode.options);
			var strict = options.strict;
			if (strict && regexInvalidEntity.test(html)) {
				parseError('malformed character reference');
			}
			return html.replace(regexDecode, function($0, $1, $2, $3, $4, $5, $6, $7) {
				var codePoint;
				var semicolon;
				var decDigits;
				var hexDigits;
				var reference;
				var next;
				if ($1) {
					// Decode decimal escapes, e.g. `&#119558;`.
					decDigits = $1;
					semicolon = $2;
					if (strict && !semicolon) {
						parseError('character reference was not terminated by a semicolon');
					}
					codePoint = parseInt(decDigits, 10);
					return codePointToSymbol(codePoint, strict);
				}
				if ($3) {
					// Decode hexadecimal escapes, e.g. `&#x1D306;`.
					hexDigits = $3;
					semicolon = $4;
					if (strict && !semicolon) {
						parseError('character reference was not terminated by a semicolon');
					}
					codePoint = parseInt(hexDigits, 16);
					return codePointToSymbol(codePoint, strict);
				}
				if ($5) {
					// Decode named character references with trailing `;`, e.g. `&copy;`.
					reference = $5;
					if (has(decodeMap, reference)) {
						return decodeMap[reference];
					} else {
						// Ambiguous ampersand. https://mths.be/notes/ambiguous-ampersands
						if (strict) {
							parseError(
								'named character reference was not terminated by a semicolon'
							);
						}
						return $0;
					}
				}
				// If we’re still here, it’s a legacy reference for sure. No need for an
				// extra `if` check.
				// Decode named character references without trailing `;`, e.g. `&amp`
				// This is only a parse error if it gets converted to `&`, or if it is
				// followed by `=` in an attribute context.
				reference = $6;
				next = $7;
				if (next && options.isAttributeValue) {
					if (strict && next == '=') {
						parseError('`&` did not start a character reference');
					}
					return $0;
				} else {
					if (strict) {
						parseError(
							'named character reference was not terminated by a semicolon'
						);
					}
					// Note: there is no need to check `has(decodeMapLegacy, reference)`.
					return decodeMapLegacy[reference] + (next || '');
				}
			});
		};
		// Expose default options (so they can be overridden globally).
		decode.options = {
			'isAttributeValue': false,
			'strict': false
		};

		var escape = function(string) {
			return string.replace(regexEscape, function($0) {
				// Note: there is no need to check `has(escapeMap, $0)` here.
				return escapeMap[$0];
			});
		};

		/*--------------------------------------------------------------------------*/

		var he = {
			'version': '1.1.1',
			'encode': encode,
			'decode': decode,
			'escape': escape,
			'unescape': decode
		};

		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return he;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}	else if (freeExports && !freeExports.nodeType) {
			if (freeModule) { // in Node.js, io.js, or RingoJS v0.8.0+
				freeModule.exports = he;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (var key in he) {
					has(he, key) && (freeExports[key] = he[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.he = he;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)(module), (function() { return this; }())))

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('text', {
	    staticClass: ["iconfont"],
	    style: {
	      color: _vm.color,
	      fontSize: _vm.size,
	      'font-family': 'iconfont'
	    },
	    on: {
	      "click": function($event) {
	        _vm._click($event)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.getFontName))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(40)

	/* template */
	var __vue_template__ = __webpack_require__(41)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-image.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    computed: {
	        "imagePath": function imagePath() {
	            if (this.src.indexOf("http") >= 0) {
	                return this.src;
	            }
	            var bundleUrl = weex.config.bundleUrl;
	            var url = bundleUrl.split('/').slice(0, -1).join('/');
	            if (bundleUrl.indexOf("weex.html") > 0) {
	                url += "/dist/";
	            }
	            return url + this.src;
	        },
	        "placeholderPath": function placeholderPath() {
	            if (this.placeholder != "") {
	                if (this.placeholder.indexOf("http") >= 0) {
	                    return this.placeholder;
	                }
	                var bundleUrl = weex.config.bundleUrl;
	                var url = bundleUrl.split('/').slice(0, -1).join('/');
	                if (bundleUrl.indexOf("weex.html") > 0) {
	                    url += "/dist/";
	                }
	                return url + this.placeholder;
	            }
	        }
	    },
	    props: {
	        width: { default: '0px' },
	        height: { default: '0px' },
	        src: {
	            type: String
	        },
	        resize: {
	            type: String,
	            default: "stretch"
	        },
	        placeholder: {
	            type: String,
	            default: ""
	        },
	        radius: {
	            default: "0px"
	        }
	    },
	    data: function data() {
	        return {};
	    },
	    methods: {
	        "_click": function _click(event) {
	            this.$emit('click', event);
	        },
	        "_load": function _load() {
	            this.$emit('load');
	        }
	    }
	};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('image', {
	    style: {
	      'border-radius': _vm.radius,
	      'width': _vm.width,
	      'height': _vm.height
	    },
	    attrs: {
	      "src": _vm.imagePath,
	      "placeholder": _vm.placeholderPath,
	      "resize": _vm.resize
	    },
	    on: {
	      "click": function($event) {
	        _vm._click($event)
	      },
	      "load": function($event) {
	        _vm._load()
	      }
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(43)
	)

	/* script */
	__vue_exports__ = __webpack_require__(44)

	/* template */
	var __vue_template__ = __webpack_require__(45)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-lazy-render.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-17e88d9f"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	module.exports = {
	  "lazy-tip": {
	    "textAlign": "center",
	    "fontSize": 30
	  },
	  "lazy-load-mask": {
	    "height": 60,
	    "paddingTop": 10,
	    "opacity": 1
	  }
	}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	'use strict';

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

	exports.default = {
	    data: function data() {
	        return {
	            show: true // 是否渲染组件
	        };
	    },
	    props: {
	        data: Array, // 需要在组件内渲染的数据
	        maskClass: String, // 遮罩层样式
	        tip: {
	            type: String,
	            default: function _default() {
	                return '正在渲染,请稍候';
	            }
	        },
	        time: { // 延迟渲染的时间
	            type: Number,
	            default: function _default() {
	                return 10;
	            }
	        },
	        limit: { // 超过多少条数据开启延迟渲染
	            type: Number,
	            default: function _default() {
	                return 30;
	            }
	        },
	        trackByData: Boolean, // 是否跟踪data的变化来渲染列表
	        immediately: Boolean // 是否立即重新渲染
	    },
	    created: function created() {
	        this.showLazy();
	    },
	    watch: {
	        data: function data() {
	            // 数据变化时重新渲染
	            if (this.trackByData) {
	                this.showLazy();
	            }
	        },
	        // 路由变化,重新渲染
	        $route: function $route() {
	            if (!this.trackByData) {
	                this.showLazy();
	            }
	        },
	        // 立即重新变为true时,重新渲染
	        immediately: function immediately() {
	            if (this.immediately) {
	                this.showLazy();
	            }
	        }
	    },
	    methods: {
	        //延迟渲染数据,在数据渲染完成后触发loaded事件
	        showLazy: function showLazy() {
	            if (this.data && this.data.length > this.limit || !this.data) {
	                // 如果数据存在并且数据的数量比限定的数量大,则开启延迟渲染 如果不是列表调用组件,也开启延迟渲染
	                this.syncLoader();
	            } else {
	                // 其他情况,不开启延迟渲染
	                this.show = true;
	                this.$emit('loaded');
	            }
	        },
	        //延迟渲染
	        syncLoader: function syncLoader() {
	            var _this = this;

	            this.show = false;
	            setTimeout(function () {
	                _this.show = true;
	                _this.$emit('loaded');
	            }, parseInt(this.time));
	        }
	    }
	};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["lazy-load"]
	  }, [(_vm.show) ? _vm._t("default") : _vm._e(), (!_vm.show) ? _c('div', {
	    ref: "mask",
	    class: [_vm.maskClass ? _vm.maskClass : 'lazy-load-mask']
	  }, [_c('text', {
	    staticClass: ["lazy-tip"]
	  }, [_vm._v(_vm._s(_vm.tip))])]) : _vm._e()], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(47)
	)

	/* script */
	__vue_exports__ = __webpack_require__(48)

	/* template */
	var __vue_template__ = __webpack_require__(49)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-load.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5db5bf06"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 47 */
/***/ (function(module, exports) {

	module.exports = {
	  "load-block": {
	    "position": "fixed",
	    "left": 280,
	    "right": 280,
	    "height": 150,
	    "backgroundColor": "#000000",
	    "opacity": 0.7,
	    "top": 350,
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "borderRadius": 15,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "load-text": {
	    "color": "#ffffff",
	    "fontSize": 30
	  },
	  "load-icon": {
	    "width": 64,
	    "height": 64,
	    "fontSize": 50,
	    "textAlign": "center"
	  }
	}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule('animation');
	module.exports = {
	    props: {
	        show: {
	            type: Boolean,
	            default: false
	        },
	        message: {
	            type: String,
	            default: '努力加载中...'
	        }
	    },
	    data: function data() {
	        return {};
	    },
	    components: {
	        'bui-mask': __webpack_require__(9)
	    },
	    methods: {
	        //点击mask遮罩层
	        "layoutClick": function layoutClick() {
	            var _this = this;
	            _this.$emit("close");
	        }

	    },
	    created: function created() {}

	};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["load-layout"]
	  }, [(_vm.show) ? _c('bui-mask', {
	    on: {
	      "click": _vm.layoutClick
	    }
	  }) : _vm._e(), (_vm.show) ? _c('div', {
	    staticClass: ["load-block"]
	  }, [_c('bui-icon', {
	    staticClass: ["load-icon"],
	    attrs: {
	      "name": "icon-loadding"
	    }
	  }), _c('text', {
	    staticClass: ["load-text"]
	  }, [_vm._v(_vm._s(_vm.message))])], 1) : _vm._e()], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(51)
	)

	/* script */
	__vue_exports__ = __webpack_require__(52)

	/* template */
	var __vue_template__ = __webpack_require__(53)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-panel.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-9f1b7dd8"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 51 */
/***/ (function(module, exports) {

	module.exports = {
	  "panel": {
	    "marginBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "panel-primary": {
	    "borderColor": "#3399ff"
	  },
	  "panel-success": {
	    "borderColor": "#00cc66"
	  },
	  "panel-info": {
	    "borderColor": "#5BC0DE"
	  },
	  "panel-warning": {
	    "borderColor": "#ff9900"
	  },
	  "panel-danger": {
	    "borderColor": "#ff4e24"
	  },
	  "panel-header": {
	    "backgroundColor": "#f5f5f5",
	    "fontSize": 34,
	    "color": "#464c5b"
	  },
	  "panel-header-primary": {
	    "backgroundColor": "#3399ff",
	    "color": "#ffffff"
	  },
	  "panel-header-success": {
	    "backgroundColor": "#00cc66",
	    "color": "#ffffff"
	  },
	  "panel-header-info": {
	    "backgroundColor": "#5BC0DE",
	    "color": "#ffffff"
	  },
	  "panel-header-warning": {
	    "backgroundColor": "#ff9900",
	    "color": "#ffffff"
	  },
	  "panel-header-danger": {
	    "backgroundColor": "#ff4e24",
	    "color": "#ffffff"
	  }
	}

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  props: {
	    type: { default: 'default' },
	    title: { default: '' },
	    paddingBody: { default: 20 },
	    paddingHead: { default: 20 },
	    border: { default: 0 }
	  }
	};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['panel', 'panel-' + _vm.type],
	    style: {
	      borderWidth: _vm.border
	    }
	  }, [_c('text', {
	    class: ['panel-header', 'panel-header-' + _vm.type],
	    style: {
	      paddingTop: _vm.paddingHead,
	      paddingBottom: _vm.paddingHead,
	      paddingLeft: _vm.paddingHead * 1.5,
	      paddingRight: _vm.paddingHead * 1.5
	    }
	  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
	    class: ['panel-body', 'panel-body-' + _vm.type],
	    style: {
	      paddingTop: _vm.paddingBody,
	      paddingBottom: _vm.paddingBody,
	      paddingLeft: _vm.paddingBody * 1.5,
	      paddingRight: _vm.paddingBody * 1.5
	    }
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(55)
	)

	/* script */
	__vue_exports__ = __webpack_require__(56)

	/* template */
	var __vue_template__ = __webpack_require__(57)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-radio.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-620b10ea"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports = {
	  "radio-box": {
	    "alignItems": "center",
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 5,
	    "marginRight": 40,
	    "paddingRight": 20
	  },
	  "radio-label": {
	    "fontSize": 30
	  },
	  "disabled": {
	    "opacity": 0.5
	  },
	  "switch-box": {
	    "height": 80
	  },
	  "switch": {
	    "position": "absolute",
	    "right": 0,
	    "top": 0
	  },
	  "switch-label": {
	    "fontSize": 30,
	    "position": "absolute",
	    "top": 10,
	    "left": 0
	  },
	  "flex-column": {
	    "flexDirection": "column"
	  },
	  "flex-row": {
	    "flexDirection": "row"
	  }
	}

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        "direction": {
	            type: String,
	            default: 'horizontal' // horizontal | vertical
	        },
	        "items": {
	            type: Object,
	            default: []
	        },
	        "selectedColor": {
	            type: String,
	            default: "#00cc66"
	        },
	        "unSelectedColor": {
	            type: String,
	            default: "#9ea7b4"
	        }
	    },
	    computed: {
	        changeDirection: function changeDirection() {
	            return this.direction == "horizontal" ? "flex-row" : "flex-column";
	        }
	    },
	    data: function data() {
	        return {
	            radioItems: []
	        };
	    },
	    methods: {
	        "select": function select(v) {
	            if (v.disabled) return;
	            var self = this;
	            self.radioItems.forEach(function (val, index) {
	                val.select = false;
	            });
	            v.select = true;
	            this.$emit("change", v);
	        }
	    },
	    created: function created() {
	        this.radioItems = JSON.parse(JSON.stringify(this.items));
	    }
	};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: [_vm.changeDirection]
	  }, _vm._l((_vm.radioItems), function(v) {
	    return _c('div', {
	      staticClass: ["radio-box", "flex-row"],
	      class: [v.disabled ? 'disabled' : ''],
	      on: {
	        "click": function($event) {
	          _vm.select(v)
	        }
	      }
	    }, [(v.select) ? _c('div', {
	      staticClass: ["bui-icon-box"]
	    }, [_c('bui-icon', {
	      attrs: {
	        "name": "icon-radio-on",
	        "color": _vm.selectedColor
	      },
	      on: {
	        "click": function($event) {
	          _vm.select(v)
	        }
	      }
	    })], 1) : _vm._e(), (!v.select) ? _c('div', {
	      staticClass: ["bui-icon-box"]
	    }, [_c('bui-icon', {
	      attrs: {
	        "name": "icon-radio",
	        "color": _vm.unSelectedColor
	      },
	      on: {
	        "click": function($event) {
	          _vm.select(v)
	        }
	      }
	    })], 1) : _vm._e(), _c('text', {
	      staticClass: ["radio-label"]
	    }, [_vm._v(_vm._s(v.title))])])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(59)
	)
	__vue_styles__.push(__webpack_require__(60)
	)

	/* script */
	__vue_exports__ = __webpack_require__(61)

	/* template */
	var __vue_template__ = __webpack_require__(62)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-searchbar-center.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-a13bfed2"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 59 */
/***/ (function(module, exports) {

	module.exports = {
	  "flex-row": {
	    "flexDirection": "row"
	  },
	  "flex-column": {
	    "flexDirection": "column"
	  },
	  "flex-fluid": {
	    "flexWrap": "wrap"
	  },
	  "center": {
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "column-center-top": {
	    "alignItems": "center"
	  },
	  "column-center-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "center"
	  },
	  "column-center-left": {
	    "justifyContent": "center",
	    "alignItems": "flex-start"
	  },
	  "column-center-right": {
	    "justifyContent": "center",
	    "alignItems": "flex-end"
	  },
	  "column-left-top": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start"
	  },
	  "column-right-top": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-end"
	  },
	  "column-left-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-start"
	  },
	  "column-right-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-end"
	  },
	  "row-space-between": {
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  "row-center-top": {
	    "justifyContent": "center",
	    "alignItems": "flex-start"
	  },
	  "row-center-bottom": {
	    "justifyContent": "center",
	    "alignItems": "flex-end"
	  },
	  "row-center-left": {
	    "justifyContent": "flex-start",
	    "alignItems": "center"
	  },
	  "row-center-right": {
	    "justifyContent": "flex-end",
	    "alignItems": "center"
	  },
	  "row-left-top": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start"
	  },
	  "row-right-top": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-start"
	  },
	  "row-left-bottom": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-end"
	  },
	  "row-right-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-end"
	  },
	  "span1": {
	    "flex": 1
	  },
	  "span2": {
	    "flex": 2
	  },
	  "span3": {
	    "flex": 3
	  },
	  "span4": {
	    "flex": 4
	  },
	  "span5": {
	    "flex": 5
	  },
	  "span6": {
	    "flex": 6
	  },
	  "span7": {
	    "flex": 7
	  },
	  "span8": {
	    "flex": 8
	  },
	  "span9": {
	    "flex": 9
	  },
	  "span10": {
	    "flex": 10
	  },
	  "span11": {
	    "flex": 11
	  },
	  "span12": {
	    "flex": 12
	  },
	  "p-r": {
	    "position": "relative"
	  },
	  "p-a": {
	    "position": "absolute"
	  }
	}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	module.exports = {
	  "bui-searchbar": {
	    "paddingLeft": 20,
	    "paddingTop": 15,
	    "paddingRight": 20,
	    "paddingBottom": 15
	  },
	  "bui-input": {
	    "backgroundColor": "#ffffff",
	    "borderRadius": 10,
	    "paddingLeft": 20,
	    "paddingTop": 15,
	    "paddingRight": 20,
	    "paddingBottom": 15,
	    "position": "relative"
	  },
	  "bui-search-icon-box-text": {
	    "color": "#9ea7b4",
	    "fontSize": 30,
	    "paddingLeft": 15
	  },
	  "bui-search-input-text": {
	    "fontSize": 30,
	    "height": 40,
	    "paddingLeft": 10,
	    "paddingRight": 10
	  },
	  "bui-search-search": {
	    "fontSize": 30,
	    "paddingLeft": 15,
	    "paddingTop": 15,
	    "paddingRight": 10,
	    "paddingBottom": 15
	  },
	  "bui-search-bg-default": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "bui-search-text-color-default": {
	    "color": "#657180"
	  },
	  "bui-search-bg-primary": {
	    "backgroundColor": "#4ca4fe"
	  },
	  "bui-search-text-color-primary": {
	    "color": "#ffffff"
	  }
	}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        "type": {
	            type: String,
	            default: 'default'
	        },
	        "placeholder": {
	            type: String,
	            default: "请输入搜索内容"
	        },
	        "value": {
	            type: String,
	            default: ""
	        },
	        "autofocus": {
	            type: Boolean,
	            default: false
	        }
	    },
	    data: function data() {
	        return {
	            deletestatus: false,
	            searchstatus: false,
	            autofocusNew: false,
	            valueNew: ''
	        };
	    },
	    methods: {
	        //搜索框触发输入焦点
	        "onfocusFn": function onfocusFn() {
	            this.searchstatus = true;
	            this.autofocusNew = true;
	        },
	        //搜索获得输入焦点
	        "onfocus": function onfocus(event) {
	            this.$emit("focus", event);
	        },
	        //搜索失去输入焦点
	        "onblur": function onblur(event) {
	            this.autofocusNew = false;
	            this.$emit('blur', event);
	        },
	        //搜索输入值更改
	        "oninput": function oninput(event) {
	            this.valueNew = event.value;
	            if (this.valueNew.length == 0) this.deletestatus = false;else this.deletestatus = true;
	            this.$emit('input', event);
	        },
	        //清除搜索输入值
	        "onclear": function onclear(event) {
	            this.autofocusNew = false;
	            this.deletestatus = false;
	            this.valueNew = "";
	            this.$emit('clear');
	        },
	        //搜索
	        "search": function search() {
	            this.$emit("search", this.valueNew);
	        }

	    }
	};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['flex-row', 'row-center-left', 'bui-searchbar', 'bui-search-bg-' + _vm.type],
	    on: {
	      "click": function($event) {
	        _vm.onfocusFn()
	      }
	    }
	  }, [_c('div', {
	    class: ['flex-row', 'row-center-left', 'span1', 'bui-input']
	  }, [_c('div', {
	    staticClass: ["flex-row", "center"],
	    class: [!_vm.searchstatus ? 'span1' : '']
	  }, [(!_vm.deletestatus) ? _c('bui-icon', {
	    attrs: {
	      "name": 'icon-search'
	    },
	    on: {
	      "click": function($event) {
	        _vm.onfocusFn()
	      }
	    }
	  }) : _vm._e(), (!_vm.searchstatus) ? _c('text', {
	    staticClass: ["bui-search-icon-box-text"]
	  }, [_vm._v("搜索")]) : _vm._e()], 1), (_vm.searchstatus) ? _c('input', {
	    staticClass: ["span1", "bui-search-input-text"],
	    attrs: {
	      "value": _vm.valueNew,
	      "autofocus": _vm.autofocusNew,
	      "type": "text",
	      "placeholder": _vm.placeholder
	    },
	    on: {
	      "focus": function($event) {
	        _vm.onfocus($event)
	      },
	      "blur": function($event) {
	        _vm.onblur($event)
	      },
	      "input": function($event) {
	        _vm.oninput($event)
	      }
	    }
	  }) : _vm._e(), (_vm.deletestatus) ? _c('bui-icon', {
	    staticClass: ["bui-search-icon-delete"],
	    attrs: {
	      "name": 'icon-roundclosefill'
	    },
	    on: {
	      "click": function($event) {
	        _vm.onclear($event)
	      }
	    }
	  }) : _vm._e()], 1), (_vm.searchstatus) ? _c('text', {
	    class: ['bui-search-search', 'bui-search-text-color-' + _vm.type],
	    on: {
	      "click": function($event) {
	        _vm.search()
	      }
	    }
	  }, [_vm._v("搜索")]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(64)
	)
	__vue_styles__.push(__webpack_require__(65)
	)

	/* script */
	__vue_exports__ = __webpack_require__(66)

	/* template */
	var __vue_template__ = __webpack_require__(67)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-searchbar-left.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5ac0a46e"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 64 */
/***/ (function(module, exports) {

	module.exports = {
	  "flex-row": {
	    "flexDirection": "row"
	  },
	  "flex-column": {
	    "flexDirection": "column"
	  },
	  "flex-fluid": {
	    "flexWrap": "wrap"
	  },
	  "center": {
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "column-center-top": {
	    "alignItems": "center"
	  },
	  "column-center-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "center"
	  },
	  "column-center-left": {
	    "justifyContent": "center",
	    "alignItems": "flex-start"
	  },
	  "column-center-right": {
	    "justifyContent": "center",
	    "alignItems": "flex-end"
	  },
	  "column-left-top": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start"
	  },
	  "column-right-top": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-end"
	  },
	  "column-left-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-start"
	  },
	  "column-right-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-end"
	  },
	  "row-space-between": {
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  "row-center-top": {
	    "justifyContent": "center",
	    "alignItems": "flex-start"
	  },
	  "row-center-bottom": {
	    "justifyContent": "center",
	    "alignItems": "flex-end"
	  },
	  "row-center-left": {
	    "justifyContent": "flex-start",
	    "alignItems": "center"
	  },
	  "row-center-right": {
	    "justifyContent": "flex-end",
	    "alignItems": "center"
	  },
	  "row-left-top": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start"
	  },
	  "row-right-top": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-start"
	  },
	  "row-left-bottom": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-end"
	  },
	  "row-right-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-end"
	  },
	  "span1": {
	    "flex": 1
	  },
	  "span2": {
	    "flex": 2
	  },
	  "span3": {
	    "flex": 3
	  },
	  "span4": {
	    "flex": 4
	  },
	  "span5": {
	    "flex": 5
	  },
	  "span6": {
	    "flex": 6
	  },
	  "span7": {
	    "flex": 7
	  },
	  "span8": {
	    "flex": 8
	  },
	  "span9": {
	    "flex": 9
	  },
	  "span10": {
	    "flex": 10
	  },
	  "span11": {
	    "flex": 11
	  },
	  "span12": {
	    "flex": 12
	  },
	  "p-r": {
	    "position": "relative"
	  },
	  "p-a": {
	    "position": "absolute"
	  }
	}

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	module.exports = {
	  "bui-searchbar": {
	    "paddingLeft": 20,
	    "paddingTop": 15,
	    "paddingRight": 20,
	    "paddingBottom": 15
	  },
	  "bui-input": {
	    "backgroundColor": "#ffffff",
	    "borderRadius": 10,
	    "paddingLeft": 20,
	    "paddingTop": 15,
	    "paddingRight": 20,
	    "paddingBottom": 15,
	    "position": "relative"
	  },
	  "bui-search-icon-box-text": {
	    "color": "#9ea7b4",
	    "fontSize": 30,
	    "paddingLeft": 15
	  },
	  "bui-search-input-text": {
	    "fontSize": 30,
	    "height": 40,
	    "paddingLeft": 10,
	    "paddingRight": 10
	  },
	  "bui-search-search": {
	    "fontSize": 30,
	    "paddingLeft": 15,
	    "paddingTop": 15,
	    "paddingRight": 10,
	    "paddingBottom": 15
	  },
	  "bui-search-bg-default": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "bui-search-text-color-default": {
	    "color": "#657180"
	  },
	  "bui-search-bg-primary": {
	    "backgroundColor": "#4ca4fe"
	  },
	  "bui-search-text-color-primary": {
	    "color": "#ffffff"
	  }
	}

/***/ }),
/* 66 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        "type": {
	            type: String,
	            default: 'default'
	        },
	        "placeholder": {
	            type: String,
	            default: "请输入搜索内容"
	        },
	        "value": {
	            type: String,
	            default: ""
	        },
	        "autofocus": {
	            type: Boolean,
	            default: false
	        }
	    },
	    data: function data() {
	        return {
	            deletestatus: false,
	            searchstatus: false,
	            autofocusNew: false,
	            valueNew: ''
	        };
	    },
	    created: function created() {
	        this.autofocusNew = this.autofocus;
	        this.valueNew = this.value;
	    },
	    methods: {
	        //搜索框触发输入焦点
	        "onfocusFn": function onfocusFn(event) {
	            this.autofocusNew = true;
	        },
	        //搜索获得输入焦点
	        "onfocus": function onfocus(event) {
	            console.log(event);
	            console.log('onfocus11');
	            this.searchstatus = true;
	            this.$emit("focus", event);
	        },
	        //搜索失去输入焦点
	        "onblur": function onblur(event) {
	            this.autofocusNew = false;
	            this.$emit('blur', event);
	        },
	        //搜索输入值更改
	        "oninput": function oninput(event) {
	            this.valueNew = event.value;
	            if (this.valueNew.length == 0) this.deletestatus = false;else this.deletestatus = true;
	            this.$emit('input', event);
	        },
	        //清除搜索输入值
	        "onclear": function onclear(event) {
	            this.autofocusNew = false;
	            this.deletestatus = false;
	            this.valueNew = "";
	            this.$emit('clear');
	        },
	        //搜索
	        "search": function search() {
	            this.$emit("search", this.valueNew);
	        }

	    }
	};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['flex-row', 'row-center-left', 'bui-searchbar', 'bui-search-bg-' + _vm.type],
	    on: {
	      "click": function($event) {
	        _vm.onfocusFn()
	      }
	    }
	  }, [_c('div', {
	    class: ['flex-row', 'row-center-left', 'span1', 'bui-input']
	  }, [_c('bui-icon', {
	    attrs: {
	      "name": 'icon-search'
	    }
	  }), _c('input', {
	    staticClass: ["span1", "bui-search-input-text"],
	    attrs: {
	      "value": _vm.valueNew,
	      "autofocus": _vm.autofocusNew,
	      "type": "text",
	      "placeholder": _vm.placeholder
	    },
	    on: {
	      "focus": function($event) {
	        _vm.onfocus($event)
	      },
	      "blur": function($event) {
	        _vm.onblur($event)
	      },
	      "input": function($event) {
	        _vm.oninput($event)
	      }
	    }
	  }), (_vm.deletestatus) ? _c('bui-icon', {
	    staticClass: ["bui-search-icon-delete"],
	    attrs: {
	      "name": 'icon-roundclosefill'
	    },
	    on: {
	      "click": function($event) {
	        _vm.onclear($event)
	      }
	    }
	  }) : _vm._e()], 1), (_vm.searchstatus) ? _c('text', {
	    class: ['bui-search-search', 'bui-search-text-color-' + _vm.type],
	    on: {
	      "click": function($event) {
	        _vm.search()
	      }
	    }
	  }, [_vm._v("搜索")]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(69)
	)
	__vue_styles__.push(__webpack_require__(70)
	)

	/* script */
	__vue_exports__ = __webpack_require__(71)

	/* template */
	var __vue_template__ = __webpack_require__(72)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-slider-bar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2535fcc7"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 69 */
/***/ (function(module, exports) {

	module.exports = {
	  "bui-slider-bar-box": {
	    "position": "fixed",
	    "width": 600,
	    "top": 0,
	    "bottom": 0,
	    "backgroundColor": "#ffffff",
	    "padding": 0,
	    "flexDirection": "column"
	  },
	  "bui-left-slider-bar-box": {
	    "left": -600
	  },
	  "bui-right-slider-bar-box": {
	    "right": -600
	  },
	  "bui-slider-title": {
	    "marginTop": 50,
	    "textAlign": "center"
	  },
	  "bui-slider-content": {
	    "marginTop": 50,
	    "flexDirection": "column",
	    "flex": 1
	  }
	}

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	module.exports = {
	  "button": {
	    "backgroundColor": "#ff503f",
	    "fontSize": 40,
	    "color": "#ffffff",
	    "height": 80,
	    "paddingTop": 15,
	    "textAlign": "center"
	  }
	}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule('animation');
	module.exports = {
	    props: {
	        show: {
	            type: Boolean,
	            default: false
	        },
	        type: {
	            type: String,
	            default: 'left'
	        }
	    },
	    components: {
	        'bui-mask': __webpack_require__(9)
	    },
	    methods: {
	        //动画操作
	        animationFn: function animationFn(el, translate, timing, fn) {
	            animation.transition(el, {
	                styles: {
	                    transform: translate,
	                    transformOrigin: 'center center'
	                },
	                duration: 300, //ms
	                timingFunction: timing,
	                delay: 0 //ms
	            }, function () {
	                fn && fn();
	            });
	        },
	        //打开左侧滑动栏
	        "openBar": function openBar() {
	            var navbar = this.$refs['navbar'];
	            if (this.type == 'left') {
	                this.animationFn(navbar, 'translate(600px, 0)', 'ease-in');
	            } else {
	                this.animationFn(navbar, 'translate(-600px, 0)', 'ease-in');
	            }
	        },
	        //点击mask遮罩层
	        "layoutClick": function layoutClick() {
	            var _this = this;
	            var navbar = this.$refs['navbar'];

	            switch (this.type) {
	                case "left":
	                    this.animationFn(navbar, 'translate(-600px, 0px)', 'ease-in', function () {
	                        _this.show = false;
	                        _this.$emit("close");
	                    });
	                    break;
	                case "right":
	                    this.animationFn(navbar, 'translate(600px, 0px)', 'ease-in', function () {
	                        _this.show = false;
	                        _this.$emit("close");
	                    });
	                    break;
	                default:
	                    console.log("6666");
	            }
	        },
	        //手势
	        "onSwipe": function onSwipe(event) {
	            console.log('onSwipe' + 11111);
	            switch (this.type) {
	                case "left":
	                    if (event.direction == 'left') {
	                        this.layoutClick();
	                    }
	                    break;
	                case "right":
	                    if (event.direction == 'right') {
	                        this.layoutClick();
	                    }
	                    break;
	                default:
	                    console.log("手势无效");
	            }
	        }
	    }
	};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["bui-slider-bar"]
	  }, [(_vm.show) ? _c('bui-mask', {
	    on: {
	      "click": _vm.layoutClick
	    }
	  }) : _vm._e(), (_vm.show) ? _c('div', {
	    ref: "navbar",
	    staticClass: ["bui-slider-bar-box"],
	    class: ['bui-' + _vm.type + '-slider-bar-box'],
	    on: {
	      "swipe": function($event) {
	        _vm.onSwipe($event)
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["bui-slider-title"]
	  }, [_vm._v(_vm._s(_vm.type == 'left' ? '左' : '右') + "侧滑动栏题")]), _c('div', {
	    staticClass: ["bui-slider-content"]
	  }, [_c('scroller', [_vm._t("default")], 2)]), _c('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.confirm
	    }
	  }, [_vm._v("确定")])]) : _vm._e()], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(74)
	)

	/* script */
	__vue_exports__ = __webpack_require__(75)

	/* template */
	var __vue_template__ = __webpack_require__(76)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-switch.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-033f4f58"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 74 */
/***/ (function(module, exports) {

	module.exports = {
	  "radio-box": {
	    "alignItems": "center",
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 5,
	    "marginRight": 40,
	    "paddingRight": 20
	  },
	  "radio-label": {
	    "fontSize": 30
	  },
	  "disabled": {
	    "opacity": 0.5
	  },
	  "switch-box": {
	    "height": 80
	  },
	  "switch": {
	    "position": "absolute",
	    "right": 0,
	    "top": 0
	  },
	  "switch-label": {
	    "fontSize": 30,
	    "position": "absolute",
	    "top": 10,
	    "left": 0
	  },
	  "flex-column": {
	    "flexDirection": "column"
	  },
	  "flex-row": {
	    "flexDirection": "row"
	  }
	}

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        "title": { //文本
	            type: String
	        },
	        "checked": { //默认值为 false，表明按钮是否开启 is on or not.
	            type: Boolean,
	            default: false
	        },
	        "disabled": { //默认值为 false，表明是否激活按钮
	            type: Boolean,
	            default: false
	        }

	    },
	    methods: {
	        "onchange": function onchange(event) {
	            this.checked = event.value;
	            this.$emit("change", this.checked);
	        }
	    }
	};

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["switch-box"]
	  }, [_c('switch', {
	    staticClass: ["switch"],
	    attrs: {
	      "checked": _vm.checked,
	      "disabled": _vm.disabled
	    },
	    on: {
	      "change": _vm.onchange
	    }
	  }), _c('text', {
	    staticClass: ["switch-label"]
	  }, [_vm._v(_vm._s(_vm.title))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(78)

	/* template */
	var __vue_template__ = __webpack_require__(79)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-tabbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 78 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        tabItems: { default: [] },
	        currentTab: { default: "" },
	        height: { default: "100px" },
	        iconSize: { default: "45px" },
	        titleSize: { default: '22px' },
	        background: { default: '#f7f7f7' },
	        selectedBackground: { default: '#f7f7f7' },
	        normalColor: { default: '#818181' },
	        selectedColor: { default: '#4ca4fe' },
	        containerStyle: { type: Object, default: {} },
	        itemStyle: { type: Object, default: {} },
	        showSelectedLine: { type: Boolean, default: false }
	    },
	    created: function created() {
	        var index = 0;
	        //指定默认加载第一个tab内容
	        if (!this.currentTab) {
	            this.currentTab = this.tabItems[0].tabId;
	            this.$set(this.tabItems[0], "titleColor", this.selectedColor);
	            this.$set(this.tabItems[0], "iconColor", this.selectedColor);
	            this.$set(this.tabItems[0], "borderBottomColor", this.selectedColor);
	            this.$set(this.tabItems[0], "background", this.selectedBackground);
	        } else {
	            //指定激活哪个tab内容
	            for (var i = 0; i < this.tabItems.length; i++) {
	                var item = this.tabItems[i];
	                if (item.tabId == this.currentTab) {
	                    this.$set(this.tabItems[i], "titleColor", this.selectedColor);
	                    this.$set(this.tabItems[i], "iconColor", this.selectedColor);
	                    this.$set(this.tabItems[i], "borderBottomColor", this.selectedColor);
	                    this.$set(this.tabItems[i], "background", this.selectedBackground);
	                    index = i;
	                }
	            }
	        }
	        this.$emit('load', this.currentTab, index);
	    },
	    watch: {
	        currentTab: function currentTab() {
	            for (var i = 0; i < this.tabItems.length; i++) {
	                var item = this.tabItems[i];
	                if (item.tabId == this.currentTab) {
	                    this.$set(this.tabItems[i], "titleColor", this.selectedColor);
	                    this.$set(this.tabItems[i], "iconColor", this.selectedColor);
	                    this.$set(this.tabItems[i], "borderBottomColor", this.selectedColor);
	                    this.$set(this.tabItems[i], "background", this.selectedBackground);
	                } else {
	                    this.$set(this.tabItems[i], "titleColor", this.normalColor);
	                    this.$set(this.tabItems[i], "iconColor", this.normalColor);
	                    this.$set(this.tabItems[i], "borderBottomColor", this.background);
	                    this.$set(this.tabItems[i], "background", this.background);
	                }
	            }
	        }
	    },
	    methods: {
	        //tabbar扩展样式
	        "getContainerStyle": function getContainerStyle() {
	            //合并样式
	            var style = { 'flex-direction': 'row', 'height': this.height };
	            style = Object.assign(style, this.containerStyle);
	            return style;
	        },
	        //item扩展样式
	        "getItemStyle": function getItemStyle(item) {
	            //底部border
	            var borderBottomColor;
	            //如果显示底部border
	            if (this.showSelectedLine) {
	                borderBottomColor = !item.borderBottomColor ? this.background : item.borderBottomColor;
	            } else {
	                borderBottomColor = !item.background ? this.background : item.background;
	            }

	            //合并样式
	            var style = {
	                'flex': 1,
	                'align-items': 'center',
	                'justify-content': 'center',
	                'border-bottom-width': '5px',
	                'border-bottom-style': 'solid',
	                'border-bottom-color': borderBottomColor,
	                'backgroundColor': !item.background ? this.background : item.background
	            };
	            style = Object.assign(style, this.itemStyle);
	            return style;
	        },
	        //文本样式
	        "getTitleStyle": function getTitleStyle(item) {
	            var style = {
	                'color': !item.titleColor ? this.normalColor : item.titleColor,
	                'font-size': !item.titleSize ? this.titleSize : item.titleSize
	            };
	            return style;
	        },
	        "itemClick": function itemClick(e, item, index) {
	            for (var i = 0; i < this.tabItems.length; i++) {
	                if (index == i) {
	                    this.$set(this.tabItems[i], "titleColor", this.selectedColor);
	                    this.$set(this.tabItems[i], "iconColor", this.selectedColor);
	                    this.$set(this.tabItems[i], "borderBottomColor", this.selectedColor);
	                    this.$set(this.tabItems[i], "background", this.selectedBackground);
	                } else {
	                    this.$set(this.tabItems[i], "titleColor", this.normalColor);
	                    this.$set(this.tabItems[i], "iconColor", this.normalColor);
	                    this.$set(this.tabItems[i], "borderBottomColor", this.background);
	                    this.$set(this.tabItems[i], "background", this.background);
	                }
	            }
	            this.$emit('itemClick', e, item.tabId, index);
	        }
	    }
	};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    style: _vm.getContainerStyle()
	  }, _vm._l((_vm.tabItems), function(item, index) {
	    return _c('div', {
	      style: _vm.getItemStyle(item),
	      on: {
	        "click": function($event) {
	          _vm.itemClick($event, item, index)
	        }
	      }
	    }, [(item.icon) ? _c('bui-icon', {
	      attrs: {
	        "name": item.icon,
	        "color": (!item.iconColor ? _vm.normalColor : item.iconColor),
	        "size": (!item.iconSize ? _vm.iconSize : item.iconSize)
	      },
	      on: {
	        "click": function($event) {
	          _vm.itemClick($event, item, index)
	        }
	      }
	    }) : _vm._e(), (item.title) ? _c('text', {
	      style: _vm.getTitleStyle(item),
	      on: {
	        "click": function($event) {
	          _vm.itemClick($event, item, index)
	        }
	      }
	    }, [_vm._v(_vm._s(item.title))]) : _vm._e()], 1)
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(81)
	)

	/* script */
	__vue_exports__ = __webpack_require__(82)

	/* template */
	var __vue_template__ = __webpack_require__(83)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-tabbar-item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-208e659c"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 81 */
/***/ (function(module, exports) {

	module.exports = {
	  "span1": {
	    "flex": 1
	  }
	}

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//

	module.exports = {
	    data: function data() {
	        return {
	            iosfix: false
	        };
	    },
	    watch: {},
	    props: {
	        tabId: {},
	        currentTab: {}
	    },
	    methods: {},
	    created: function created() {
	        var env = weex.config.env.platform.toLowerCase();
	        if (env == "ios") {
	            this.iosfix = true;
	        }
	    }
	};

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: _vm.tabId,
	    class: [_vm.iosfix ? 'span1' : '']
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(85)

	/* template */
	var __vue_template__ = __webpack_require__(86)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-tabbar-item-a.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 85 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//

	module.exports = {
	    data: function data() {
	        return {
	            left: 0
	        };
	    },
	    watch: {
	        currentTabIndex: function currentTabIndex() {
	            if (this.index == this.currentTabIndex) {
	                this.left = 0;
	            } else {
	                this.left = this.width;
	            }
	        }
	    },
	    props: {
	        index: {},
	        currentTabIndex: {},
	        height: {},
	        width: { default: 750 }
	    },
	    methods: {},
	    created: function created() {
	        if (this.index == 0) {
	            this.left = 0;
	        } else {
	            this.left = this.width;
	        }
	    }
	};

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    style: {
	      'position': 'absolute',
	      'top': '0px',
	      'left': _vm.left,
	      'bottom': '0px',
	      'right': '0px'
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(88)
	)

	/* script */
	__vue_exports__ = __webpack_require__(89)

	/* template */
	var __vue_template__ = __webpack_require__(94)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-tabbar-scroll.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-9f2eb3a8"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 88 */
/***/ (function(module, exports) {

	module.exports = {
	  "bui-tabbar-wrapper": {
	    "width": 750,
	    "flex": 1
	  },
	  "bui-tabbar-content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 100
	  },
	  "bui-tabbar": {
	    "flexDirection": "row",
	    "height": 100
	  },
	  "bui-tabbar-item-container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderTopWidth": 1,
	    "borderTopStyle": "solid",
	    "borderTopColor": "#d7dde4"
	  },
	  "bui-tabbar-text": {
	    "marginTop": 5,
	    "textAlign": "center"
	  },
	  "bui-scroller-bar-top": {
	    "height": 80,
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#d7dde4"
	  },
	  "bui-scroller-tabbar-content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 80,
	    "marginBottom": 0
	  },
	  "bui-scroller-tabbar": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "bui-scroller-tabbar-row": {
	    "height": 80,
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "paddingLeft": 50,
	    "paddingRight": 50
	  },
	  "actived": {
	    "position": "absolute",
	    "bottom": 0,
	    "left": 40,
	    "right": 40,
	    "borderBottomWidth": 5,
	    "borderBottomStyle": "solid"
	  },
	  "text": {
	    "color": "#9ea7b4",
	    "textAlign": "center"
	  }
	}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        scroll: {},
	        tabItems: { default: [] },
	        selectedColor: { default: '#3399ff' },
	        unselectedColor: { default: '#8a8a8a' },
	        titleSize: {},
	        top: { default: "0px" }, //内容区域离顶部的距离
	        selectedIndex: { default: 0 //当前选中的索引
	        } },
	    data: function data() {
	        return {};
	    },
	    components: {
	        tabitem: __webpack_require__(90)
	    },
	    created: function created() {
	        this.select(this.selectedIndex);
	    },
	    methods: {
	        tabItemOnClick: function tabItemOnClick(e) {
	            this.selectedIndex = e.index;
	            this.select(e.index);
	            this.$emit('tabItemOnClick', e);
	        },
	        select: function select(index) {
	            for (var i = 0; i < this.tabItems.length; i++) {
	                var tabItem = this.tabItems[i];
	                if (i == index) {
	                    tabItem.selected = true;
	                    tabItem.titleColor = this.selectedColor;
	                    tabItem.visibility = 'visible';
	                } else {
	                    tabItem.selected = false;
	                    tabItem.titleColor = this.unselectedColor;
	                    tabItem.visibility = 'hidden';
	                }
	            }
	        }
	    }
	};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(91)
	)

	/* script */
	__vue_exports__ = __webpack_require__(92)

	/* template */
	var __vue_template__ = __webpack_require__(93)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-tabbar-scroll-item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-52bdcf78"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 91 */
/***/ (function(module, exports) {

	module.exports = {
	  "bui-tabbar-wrapper": {
	    "width": 750,
	    "flex": 1
	  },
	  "bui-tabbar-content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 100
	  },
	  "bui-tabbar": {
	    "flexDirection": "row",
	    "height": 100
	  },
	  "bui-tabbar-item-container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderTopWidth": 1,
	    "borderTopStyle": "solid",
	    "borderTopColor": "#d7dde4"
	  },
	  "bui-tabbar-text": {
	    "marginTop": 5,
	    "textAlign": "center"
	  },
	  "bui-scroller-bar-top": {
	    "height": 80,
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#d7dde4"
	  },
	  "bui-scroller-tabbar-content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 80,
	    "marginBottom": 0
	  },
	  "bui-scroller-tabbar": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "bui-scroller-tabbar-row": {
	    "height": 80,
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "paddingLeft": 50,
	    "paddingRight": 50
	  },
	  "actived": {
	    "position": "absolute",
	    "bottom": 0,
	    "left": 40,
	    "right": 40,
	    "borderBottomWidth": 5,
	    "borderBottomStyle": "solid"
	  },
	  "text": {
	    "color": "#9ea7b4",
	    "textAlign": "center"
	  }
	}

/***/ }),
/* 92 */
/***/ (function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        index: { default: 0 },
	        title: { default: '' },
	        titleColor: { default: '#000000' },
	        titleSize: { default: '28' },
	        selected: { default: false },
	        length: {},
	        scroll: { default: true }
	    },
	    methods: {
	        onclickitem: function onclickitem(e) {
	            var params = {
	                index: this.index
	            };
	            this.$emit('tabItemOnClick', params);
	        }
	    },
	    computed: {
	        width: function width() {
	            if (this.scroll) return;
	            var i = 750 / this.length;
	            return i;
	        }
	    }
	};

/***/ }),
/* 93 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["bui-scroller-tabbar-row"],
	    style: {
	      'width': _vm.width
	    },
	    on: {
	      "click": _vm.onclickitem
	    }
	  }, [_c('text', {
	    staticClass: ["text"],
	    style: {
	      'color': _vm.titleColor,
	      'font-size': _vm.titleSize
	    }
	  }, [_vm._v(_vm._s(_vm.title))]), (_vm.selected) ? _c('text', {
	    staticClass: ["actived"],
	    style: {
	      'border-bottom-color': _vm.titleColor
	    }
	  }) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["bui-tabbar-wrapper"]
	  }, [_c('div', {
	    staticClass: ["bui-scroller-bar-top"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('scroller', {
	    staticClass: ["bui-scroller-tabbar"],
	    attrs: {
	      "scrollDirection": "horizontal",
	      "showScrollbar": "false"
	    }
	  }, _vm._l((_vm.tabItems), function(item) {
	    return _c('tabitem', {
	      key: item.index,
	      attrs: {
	        "index": item.index,
	        "title": item.title,
	        "titleColor": item.titleColor,
	        "titleSize": _vm.titleSize,
	        "selected": item.selected,
	        "length": _vm.tabItems.length,
	        "scroll": _vm.scroll
	      },
	      on: {
	        "tabItemOnClick": _vm.tabItemOnClick
	      }
	    })
	  }))]), _vm._l((_vm.tabItems), function(item, i) {
	    return _c('embed', {
	      key: i,
	      staticClass: ["bui-scroller-tabbar-content"],
	      style: {
	        visibility: item.visibility
	      },
	      attrs: {
	        "src": item.src,
	        "type": "weex"
	      }
	    })
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(96)
	)

	/* script */
	__vue_exports__ = __webpack_require__(97)

	/* template */
	var __vue_template__ = __webpack_require__(98)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-tip.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-66e8122b"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 96 */
/***/ (function(module, exports) {

	module.exports = {
	  "tip": {
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "borderRadius": 10,
	    "marginBottom": 10
	  },
	  "tip-txt": {
	    "fontSize": 30
	  },
	  "tip-success": {
	    "backgroundColor": "#dff0d8",
	    "borderColor": "#d6e9c6"
	  },
	  "tip-txt-success": {
	    "color": "#3c763d"
	  },
	  "tip-info": {
	    "backgroundColor": "#d9edf7",
	    "borderColor": "#bce8f1"
	  },
	  "tip-txt-info": {
	    "color": "#31708f"
	  },
	  "tip-warning": {
	    "backgroundColor": "#fcf8e3",
	    "borderColor": "#faebcc"
	  },
	  "tip-txt-warning": {
	    "color": "#8a6d3b"
	  },
	  "tip-danger": {
	    "backgroundColor": "#f2dede",
	    "borderColor": "#ebccd1"
	  },
	  "tip-txt-danger": {
	    "color": "#a94442"
	  }
	}

/***/ }),
/* 97 */
/***/ (function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        type: { default: 'success' },
	        value: { default: '' }
	    },
	    data: function data() {
	        return {
	            style: {}
	        };
	    }
	};

/***/ }),
/* 98 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['tip', 'tip-' + _vm.type]
	  }, [_c('text', {
	    class: ['tip-txt', 'tip-txt-' + _vm.type]
	  }, [_vm._v(_vm._s(_vm.value))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(100)

	/* template */
	var __vue_template__ = __webpack_require__(101)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-video.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 100 */
/***/ (function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        'src': { default: '' },
	        'playstatus': { default: 'pause' },
	        'autoplay': { default: false },
	        'seek': { default: 0 }
	    },
	    data: function data() {
	        return {};
	    },
	    methods: {
	        "statusChange": function statusChange(status) {
	            this.$emit(status);
	        },
	        "progress": function progress(res) {
	            this.$emit("progress", res.total, res.progress);
	        }
	    }
	};

/***/ }),
/* 101 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('video-ex', {
	    attrs: {
	      "src": _vm.src,
	      "playstatus": _vm.playstatus,
	      "autoplay": _vm.autoplay,
	      "seek": _vm.seek
	    },
	    on: {
	      "pause": function($event) {
	        _vm.statusChange('pause')
	      },
	      "start": function($event) {
	        _vm.statusChange('start')
	      },
	      "finish": function($event) {
	        _vm.statusChange('finish')
	      },
	      "fail": function($event) {
	        _vm.statusChange('fail')
	      },
	      "progress": _vm.progress
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(103)

	/* template */
	var __vue_template__ = __webpack_require__(104)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-content.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 103 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        padded: { default: false },
	        padding: { default: "20px" } //default 20px
	    },
	    methods: {}
	};

/***/ }),
/* 104 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    style: {
	      'padding': _vm.padded == 'true' ? _vm.padding : '0px'
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(106)

	/* template */
	var __vue_template__ = __webpack_require__(107)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-content-scroll.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 106 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        padded: { default: false },
	        padding: { default: "20px" } //default 20px
	    },
	    methods: {}
	};

/***/ }),
/* 107 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    style: {
	      'padding': _vm.padded == 'true' ? _vm.padding : '0px'
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(109)
	)

	/* script */
	__vue_exports__ = __webpack_require__(110)

	/* template */
	var __vue_template__ = __webpack_require__(111)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\node_modules\\bui-weex\\src\\components\\bui-image-slider.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-237ee133"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 109 */
/***/ (function(module, exports) {

	module.exports = {
	  "indicator": {
	    "width": 750,
	    "height": 100,
	    "position": "absolute",
	    "bottom": 0,
	    "left": 0,
	    "itemColor": "#ffffff",
	    "itemSelectedColor": "#747474",
	    "itemSize": 20,
	    "opacity": 0.8
	  }
	}

/***/ }),
/* 110 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        sliderStyle: {
	            default: {
	                "width": "750px",
	                "height": "400px"
	            }
	        },
	        indicatorStyle: {
	            default: ""
	        },
	        items: {
	            default: []
	        },
	        interval: {
	            default: 2000
	        },
	        autoplay: {
	            default: true
	        },
	        infinite: {
	            default: true
	        },
	        imgResize: {
	            default: "stretch"
	        },
	        imgWidth: {
	            default: "750px"
	        },
	        imgHeight: {
	            default: "750px"
	        },
	        placeholder: {
	            default: ""
	        }
	    },
	    data: function data() {
	        return {};
	    },
	    methods: {
	        "_change": function _change(e) {
	            this.$emit("change", e);
	        },
	        "_click": function _click(e, index) {
	            this.$emit("itemClick", e, index);
	        }
	    }
	};

/***/ }),
/* 111 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('slider', {
	    style: _vm.sliderStyle,
	    attrs: {
	      "interval": _vm.interval,
	      "autoPlay": _vm.autoplay,
	      "infinite": _vm.infinite
	    },
	    on: {
	      "change": _vm._change
	    }
	  }, [_vm._l((_vm.items), function(item, index) {
	    return _c('div', [_c('bui-image', {
	      attrs: {
	        "width": _vm.imgWidth,
	        "resize": _vm.imgResize,
	        "height": _vm.imgHeight,
	        "placeholder": _vm.placeholder,
	        "src": item.url
	      },
	      on: {
	        "click": function($event) {
	          _vm._click($event, index)
	        }
	      }
	    })], 1)
	  }), _c('indicator', {
	    staticClass: ["indicator"],
	    style: _vm.indicatorStyle
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var navigator = weex.requireModule('navigator');

	var buiweex = __webpack_require__(5);
	var mixins = {
	    data: function data() {
	        return {};
	    },
	    components: {
	        'bui-header': buiweex.buiHeader,
	        'bui-icon': buiweex.buiIcon,
	        'bui-button': buiweex.buiButton,
	        'bui-image': buiweex.buiImage
	    },
	    methods: {}
	};

	exports.default = mixins;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(132)
	)

	/* script */
	__vue_exports__ = __webpack_require__(133)

	/* template */
	var __vue_template__ = __webpack_require__(134)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\workeSpace\\MyBuiWeex\\src\\views\\chart.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-a1251a36"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 132 */
/***/ (function(module, exports) {

	module.exports = {
	  "item": {
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "height": 200,
	    "justifyContent": "center",
	    "borderBottomWidth": 1,
	    "borderColor": "#dddddd",
	    "backgroundColor": "#ffffff",
	    "backgroundColor:active": "#aeaeae"
	  },
	  "item-title": {
	    "fontSize": 40,
	    "color": "#555555"
	  },
	  "item-content": {
	    "marginTop": 5,
	    "fontSize": 32,
	    "color": "#31A9A5"
	  },
	  "item-time": {
	    "fontSize": 32,
	    "color": "#31A9A5",
	    "textAlign": "right"
	  }
	}

/***/ }),
/* 133 */
/***/ (function(module, exports) {

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

	exports.default = {
	  data: function data() {
	    return {
	      datas: [{
	        viewName: "bailu.weex.js",
	        title: "白露",
	        content: "白露是农历二十四节气中的第十五个节气，当太阳到达黄经165度时为白露。",
	        time: "2017-09-07"
	      }],
	      title: "",
	      content: "",
	      time: ""

	    };
	  },

	  methods: {
	    click: function click(i) {
	      weex.requireModule('event').openView(this.datas[i].viewName, this.datas[i].title);
	    }
	  }
	};

/***/ }),
/* 134 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('list', _vm._l((_vm.datas), function(item, i) {
	    return _c('cell', {
	      key: i,
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('div', {
	      staticClass: ["item"],
	      on: {
	        "click": function($event) {
	          _vm.click(i)
	        }
	      }
	    }, [_c('text', {
	      staticClass: ["item-title"]
	    }, [_vm._v(_vm._s(item.title))]), _c('text', {
	      staticClass: ["item-content"]
	    }, [_vm._v(_vm._s(item.content))]), _c('text', {
	      staticClass: ["item-time"]
	    }, [_vm._v(_vm._s(item.time))])])])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);