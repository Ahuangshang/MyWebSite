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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 1:
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
        var date = new Date(value);
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

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(60)

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
__vue_options__.__file = "E:\\workSpace\\workSpace\\oldWork\\rili_weex\\src\\views\\bailu.vue"
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

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bailu = __webpack_require__(29);

var _bailu2 = _interopRequireDefault(_bailu);

var _mixins = __webpack_require__(0);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.mixin(_mixins2.default);

_bailu2.default.el = '#root';

new Vue(_bailu2.default);

/***/ }),

/***/ 60:
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

//  var buiweex = require("bui-weex");
var modal = weex.requireModule('modal');
var util = __webpack_require__(1);
exports.default = {
  props: {
    img_w_top: {
      default: 750
    },
    img_w: {
      default: 718
    },
    img_1_h: {
      default: 469
    },
    img_2_h: {
      default: 277
    },

    img_3_h: {
      default: 489
    },

    img_4_h: {
      default: 490
    },
    img_5_h: {
      default: 370
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
      default: "        白露是农历二十四节气中的第十五个节气，当太阳到达黄经165度时为白露。因天气渐转凉，夜晚水汽遇冷，凝结在地面和叶子上，清晨会看见晶莹剔透的露珠，故名白露。"
    },
    content_1: {
      default: "        白露是农历二十四节气之一，当太阳到达黄经一百六十五度时交白露节气。白露是秋天的第三个节气，表示孟秋时节的结束和仲秋时节的开始。露水是由于温度降低，水汽在地面或近地物体上凝结而成的水珠。所以，白露实际上是表征天气已经转凉。这时，人们就会明显地感觉到炎热的夏天已过，而凉爽的秋天已经到来了。昼夜温差可达十多度。阳气是在夏至达到顶点，物极必反，阴气也在此时兴起。到了白露，阴气逐渐加重，清晨的露水随之日益加厚，凝结成一层白白的水滴，所以就称之为白露。俗语云：“处暑十八盆，白露勿露身。”这两句话的意思是说，处暑仍热，每天须用一盆水洗澡，过了十八天，到了白露，就不要赤膊裸体了，以免着凉。还有句俗话：“白露白迷迷，秋分稻秀齐。”意思是说，白露前后若有露，则晚稻将有好收成。\n" + "        “白露”是反映自然界气温变化的节令。露是“白露”节气后特有的一种自然现象。此时的天气，正如《礼记》中所云的：“凉风至，白露降，寒蝉鸣。”据《月令七十二候集解》对“白露”的诠释——“水土湿气凝而为露，秋属金，金色白，白者露之色，而气始寒也”。古人在《孝纬经》中也云：“处暑后十五日为白露”，阴气渐重，露凝而白也。”其实，气象学表明：节气至此，由于天气逐渐转凉，白昼阳光尚热，然太阳一归山，气温便很快下降，至夜间空气中的水汽便遇冷凝结成细小的水滴，非常密集地附着在花草树木的绿色茎叶或花瓣上，呈白色，尤其是经早晨的太阳光照射，看上去更加晶莹剔透、洁白无瑕，煞是惹人喜爱，因而得“白露”美名。"
    },
    content_2: {
      default: "物侯\n" + "\n" + "        鸿雁来：鸿大雁小，自北而来南也，不谓南乡，非其居耳。详见雨水节下。\n" + "        玄鸟归：玄鸟解见春分，此时自南而往北也，燕乃北方之鸟，故曰归。\n" + "        群鸟养羞：三兽以上为群，群者，众也，《礼记》注曰：“羞者，所美之食。”养羞者，藏之以备冬月之养也。\n" + "\n" + "        诗《白露》：“衰荷滚玉闪晶光，一夜西风一夜凉。雁阵声声蚊欲静，枣红点点桂流香。”（左河水）\n" + "天气\n" + "\n" + "        植物开始有露水进入白露节气后，夏季风逐步被冬季风所代替，冷空气转守为攻，暖空气逐渐退避三舍。冷空气分批南下，往往带来一定范围的降温幅度。人们爱用“白露秋风夜，一夜凉一夜”的谚语来形容气温下降速度加快的情形。\n" + "\n" + "        此时，中国北方地区降水明显减少，秋高气爽，比较干燥。长江中下游地区在此时期，第一场秋雨往往可以缓解前期的缺水情况，但是如果冷空气与台风相会，或冷暖空气势均力敌，双方较量进退维艰时，形成的暴雨或低温连阴雨对秋季作物生长不利。西南地区东部、华南和华西地区也往往出现连阴雨天气。东南沿海，特别是华南沿海还可能会有热带天气系统(台风)造成的大暴雨。另外，此时部分地区还有可能出现秋旱、森林火险、初霜等天气。如果长江中下游地区的伏旱、华西地区、华南地区的夏旱，得不到秋雨的滋润，都可能形成夏秋连旱。有谚语形容：“春旱不算旱，秋旱减一半。春旱盖仓房，秋旱断种粮。”北方部分地区，如西北的陕西、山西、甘肃、华北等地，秋季降水本来偏少，如果出现严重秋旱不仅影响秋季作物收成，还延误秋播作物的播种和出苗生长，影响来年收成。另外，伴随秋旱，特别是山地林区，空气干燥、风力加大，森林火险开始进入秋季高发期。\n" + "\n" + "        八月十五雁门开，雁儿头上带霜来”。霜冻是由于冷空气的入侵，日平均气温在0℃以上，地表温度骤降到0℃以下，农作物细胞之间的水分结冰，并不断吸收细胞内部的水分，形成细胞脱水，导致农作物枯萎或死亡的灾害。 有时虽然植物表面没有白霜，但由于地表温度在0℃以下，农作物依然受到冻害，称作黑霜，也是霜冻的一种类型。"
    },
    content_3: {
      default: "白露节气生活小贴士\n" + "\n" + "        俗语云：“处暑十八盆，白露勿露身。”这句话的意思是表示，处暑还会热，每天需要用一盆水洗澡，在过了十八天，到了白露节气，就不能赤膊露体了，会着凉受寒。\n" + "\n" + "        白露即为典型的秋季气候，容易出现口干、唇干、鼻干、咽干及大便干结、皮肤干裂等症状。预防秋燥的方法很多，可适当地多服一些富含维生素的食品，也可选用一些宣肺化痰、滋阴益气的中药，如人参、沙参、西洋参、百合、杏仁、川贝等，对缓解秋燥多有良效。对普通大众来说，简单实用的药膳、食疗似乎更容易接受。\n" + "\n" + "        春捂秋冻是一条经典的养生保健要诀。当然，秋冻并非人人皆宜。如糖尿病患者局部供血较差，如果血管一下子受到冷空气刺激，很容易发生血管痉挛，使血流量进一步减少，易引起组织坏死和糖尿病足，再加上糖尿病和心脑血管疾病常常伴发，冷空气刺激更易诱发心脑血管疾病，甚至导致心梗等后果。因此，糖尿病患者最好不要秋冻。除此之外，像体质较弱的老人和儿童、心脑血管疾病患者、慢性支气管炎患者、哮喘病患者和关节炎患者都不适合“秋冻”。\n" + "\n" + "        早晚温差大就应该及时添加衣被，否则，极容易患上感冒，而支气管炎、哮喘、消化性溃疡等慢性病患者，也容易诱发或加重病情。肚脐部位的表皮最薄，皮下没有脂肪组织，但有丰富的神经末梢和神经丛，对外部刺激敏感。若防护不当，晚上睡觉暴露腹部或爱美穿露脐装，寒气极易通过肚脐侵入人体。如果寒气直中肠胃，就会发生急性腹痛、腹泻、呕吐；天长日久，寒气逐渐积聚在小腹，还会导致泌尿生殖系统疾病。脚部分布着人体的6条重要经脉，并且脚远离心脏，血液循环最为不畅。所以，有“寒从脚起，热从头散”的说法。研究证实，双脚受凉是引发感冒、支气管炎、消化不良、失眠等病症的元凶。因此，白露应注意脚的保暖，鞋袜宜宽松、舒适、吸汗。\n" + "清茶\n" + "\n" + "        到了白露节气，秋意渐浓。旧时南京人十分重视节气的“来”和“去”，逐渐形成了具有南京地方特色的节气习俗。\n" + "\n" + "        说到白露，爱喝茶的老南京都十分青睐“白露茶”，此时的茶树经过夏季的酷热，白露前后正是它生长的极好时期。白露茶既不像春茶那样鲜嫩，不经泡，也不像夏茶那样干涩味苦，而是有一种独特甘醇清香味，尤受老茶客喜爱。再者，家中存放的春茶已基本“消耗”得差不多了，此时白露茶正接上，所以到了白露前后，有的茶客就托人买点白露茶。\n" + "\n" + "米酒\n" + "\n" + "        资兴兴宁、三都、蓼江一带历来有酿酒习俗。每年白露节一到，家家酿酒，待客接人必喝“土酒”。其酒温中含热，略带甜味，称“白露米酒”。白露米酒中的精品是“程酒”，是因取程江水酿制而得名。程酒，古为贡酒，盛名入远。《水经注》记载：“郴县有渌水，出县东侯公山西北，流而南屈注于耒，渭之程水溪，郡置酒馆酝于山下，名曰‘程酒’，献 同也。” 、渌酒均系传世美酒。《晋书.武帝纪》：“荐 、渌于太庙”，可见程酒当与、渌媲美。 《九域志》亦云：“程水在今郴州兴宁县，其源自程乡来也，此水造酒，自名‘程酒’，与 酒别。”程乡即今三都、蓼江一带。资兴从南宋到民国初年称兴宁，故有郴州兴宁县之说。 白露米酒的酿制除取水、选定节气颇有讲究外，方法也相当独特。先酿制白酒（俗称“土烧”）与糯米糟酒，再按1：3的比例，将白酒倒入糟酒里， 装坛待喝。如制程酒，须掺入适量糁子水（糁子加水熬制） ，然后入坛密封，埋入地下或者窖藏，亦有埋入鲜牛栏淤中的，待数年乃至几十年才取出饮用。埋藏几十 年的程酒色呈褐红，斟之现丝，易于入口，清香扑鼻，且后劲极强。清光绪元年（1875）纂修的《兴宁县志》云：“色碧味醇，愈久愈香”，“酿可千日，至家而 醉”。《水经注》还记载，南朝梁文学家任与友刘 杳闲谈，“任谓刘杳曰：‘酒有千里，当是虚言？’杳曰：‘桂阳程乡有千里酒，饮之至家而醒，亦其例也。’南朝梁时，兴宁隶属于桂阳郡。在苏南籍和浙江籍的老南京中还有自酿白露米酒的习俗，旧时苏浙一带乡下人家每年白露一到，家家酿酒，用以待客，常有人把白露米酒带到城市。白露酒用糯米、高粱等五谷酿成，略带甜味，故称“白露米酒”。直到上世纪三四十年代，南京城里酒店里还有零拷的白露米酒，后来逐渐消失。"
    },
    content_4: {
      default: "        这一时节冷空气日趋活跃，常出现秋季低温天气，影响晚稻抽穗扬花，因此要预防低温冷害和病虫害。冷空气入侵时，可采用灌水保温，低温之前灌水二寸以上，可增温1~2℃。低温来时，晴天可日排夜灌浅水；阴雨天则要灌厚水；一般天气应干干湿湿，以湿为主。这个节气暑气渐消，秋高气爽，玉露生凉，丹桂飘香，是黄金旅游季节。“白露”正处夏、秋转折关头，气温日际变化大，“白露身不露”，老、弱、病者要更注意适时增减衣服，以防受凉。\n" + "蔬菜\n" + "\n" + "        白露后的天气有利于蔬菜生产，蔬菜生产进入了繁忙季节。\n" + "\n" + "        ⒈培育好壮苗\n" + "\n" + "        ⑴茄果类。育苗最好在有地模覆盖的大棚内进行。用新园土3/4，腐熟栏肥1/4，草木灰10%，钙镁磷肥5%，代森锌0.03%混配。亩播种量：番茄、茄子25-30克，甜椒30-50克每亩。种子用温汤浸种法凉干播种。精细做畦，播后勤水分管理，以促进全苗壮苗。\n" + "\n" + "        ⑵绿叶蔬菜。种皮较厚要进行种子处理并浸透水催芽播种，苗床和生产用地要深翻晒白，精细做畦，播后勤水分管理，以促进全苗壮苗。\n" + "\n" + "        ⒉做好病虫害防治工作\n" + "\n" + "        ⑴十字花科蔬菜害虫主要有斜纹夜蛾、甜菜夜蛾、小菜蛾、菜青虫等，用除尽或抑太保加杀虫双或农地乐或京保尔（甲维盐）或杜邦安打或海正三令等防治；病害主要有花菜黑玉病，小白菜、大白菜白斑病，用代森锌、百菌清或新万生防治；甘蓝黑腐病和大、小白菜软腐病用农用链霉素，或可杀得或猛克菌加清腐等药剂。\n" + "\n" + "        ⑵茄果类等秧苗，主要防治猝倒病，定期用托布津或百菌清轮换喷治。\n" + "\n" + "        ⑶为了让市民吃上“放心菜”，除严禁使用剧毒农药外，采收前必须掌握用药安全间隔期。\n" + "果树\n" + "\n" + "        1.柑橘：\n" + "        ⑴遇旱及时灌溉，结合树盘覆盖减少裂果。\n" + "        ⑵抹除晚秋梢，对果多的弱树可喷洒叶面肥1--2次。\n" + "        ⑶病虫防治重点是红蜘蛛、黑刺粉虱、蚧类及炭疽病；早熟品种还应注意果实黑点病的防治。\n" + "        ⑷作好抗台风准备。\n" + "\n" + "        2.杨梅\n" + "        ⑴继续抓好抗旱防台工作，视旱情浇水保墒，促使秋梢生长充实，促进花芽分化。\n" + "        ⑵剪除枯枝与自根部及主干上发生的无效萌蘖。\n" + "        ⑶摘除大蓑蛾护囊，并用速扑杀1500倍液，或杀灭菊酯2000倍液喷雾。蚧壳虫发生严重的应喷药再行防治。捕杀树干基部天牛幼虫。\n" + "\n" + "        3.枇杷\n" + "        以晾根、施花前肥为中心，以促进花芽充实、延长开花期、增强花果防冻能力。做好第四代枇杷黄毛虫的防治。\n" + "\n" + "        4.桃\n" + "\n" + "        继续进行夏季修剪，做好刺蛾、军配虫、天牛等害虫的防治工作，结合喷药进行叶面施肥。\n" + "\n" + "        5.樱桃\n" + "        以施秋肥为中心，继续做好刺蛾、蓑蛾、桃小叶蝉、军配虫等害虫的防治。\n" + "\n" + "        6.葡萄\n" + "        以适时采摘为中心，加强霜霉病等病害的防治。葡萄采收后树势较弱的可以施一次补肥。肥料种类最好用进口三要素复合肥或磷酸二氨，每亩地施用量在10--15公斤。\n" + "\n" + "        7.梨\n" + "        以治虫保叶为中心，施好根外追肥，重施采后越冬基肥，加强军配虫等为害叶片的病虫防治工作。防止落叶太早而诱发二次开花，影响次年花量和产量。\n" + "\n" + "畜牧\n" + "\n" + "        九月份中旬以后，天气由热转凉。畜禽生产要注意做好以下几项工作：\n" + "\n" + "        1.是水牛长膘和繁殖的黄金季节，必须及时抓好秋膘，及时做好配种繁殖工作。\n" + "\n" + "        2.秋季天气凉爽，野生青草茂盛，必须做好越冬干草的贮存工作。贮备时要留有余地，尽可能多贮存一些。\n" + "\n" + "        3.是长毛兔繁殖最佳季节，养兔专业户要着手做好秋繁工作，使长毛兔达到全配满怀。要注意采取保温措施。\n" + "\n" + "        4.生猪要做好消毒隔离工作，防止高热症为特征的传染病的发生。山羊做好羊痘疫苗预防接种。\n" + "\n" + "        5.种鹅休蛋期接近尾声，应提高加强营养，保证下一产蛋期的营养。"
    },

    content_5: {
      default: "        《白露》（唐：杜甫）\n" + "        白露团甘子，清晨散马蹄。\n" + "        圃开连石树，船渡入江溪。\n" + "        凭几看鱼乐，回鞭急鸟栖。\n" + "        渐知秋实美，幽径恐多蹊。\n" + "\n" + "        《秋露》（唐·雍陶）\n" + "        白露暧秋色，月明清漏中。\n" + "        痕沾珠箔重，点落玉盘空。\n" + "        竹动时惊鸟，莎寒暗滴虫。\n" + "        满园生永夜，渐欲与霜同。\n" + "\n" + "        《南湖晚秋》 （唐·白居易）\n" + "        八月白露降，湖中水方老。\n" + "        旦夕秋风多，衰荷半倾倒。\n" + "        手攀青枫树，足蹋黄芦草。\n" + "        惨澹老容颜，冷落秋怀抱。\n" + "        有兄在淮楚，有弟在蜀道。\n" + "        万里何时来，烟波白浩浩。\n" + "\n" + "        《杂诗》 (魏晋·左思)\n" + "        秋风何冽冽，白露为朝霜。\n" + "        柔条旦夕劲，绿叶日夜黄。\n" + "        明月出云崖，皦皦流素光。\n" + "        披轩临前庭，嗷嗷晨雁翔。\n" + "        高志局四海，块然守空堂。\n" + "        壮齿不恒居，岁暮常慨慷。\n" + "\n" + "        《月夜忆舍弟》（唐杜甫）\n" + "        戍鼓断人行，边秋一雁声。\n" + "        露从今夜白，月是故乡明。\n" + "        有弟皆分散，无家问死生。\n" + "        寄书长不达，况乃未休兵。\n" + "\n" + "        《衰荷》（唐·白居易）\n" + "        白露凋花花不残，凉风吹叶叶初乾。\n" + "        无人解爱萧条境，更绕衰丛一匝看。\n" + "\n" + "        《蒹葭》 出自《诗经·国风·秦风》\n" + "        蒹葭苍苍，白露为霜。所谓伊人，在水一方。溯洄从之，道阻且长。溯游从之，宛在水中央。\n" + "        蒹葭萋萋，白露未晞。所谓伊人，在水之湄。溯洄从之，道阻且跻。溯游从之，宛在水中坻。\n" + "        蒹葭采采，白露未已。所谓伊人，在水之涘。溯洄从之，道阻且右。溯游从之，宛在水中沚。"
    }
  },
  methods: {
    font: function font(size) {
      return util.getFontSize(size);
    }
  }
};

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('div', [_c('image', {
    style: {
      width: _vm.img_w_top,
      height: _vm.img_1_h
    },
    attrs: {
      "src": "https://www.imengu.cn:8888/Ahuangshang/img/bailu/img_1.jpg",
      "placeholder": ""
    }
  }), _c('div', {
    style: {
      marginLeft: _vm.font(_vm.contentMargin),
      marginRight: _vm.font(_vm.contentMargin)
    }
  }, [_c('text', {
    staticStyle: {
      color: "#334f16"
    },
    style: {
      fontSize: _vm.font(_vm.tex_size_1),
      marginTop: _vm.font(_vm.topMargin),
      margin: _vm.font(_vm.contentMargin),
      lineHeight: _vm.font(_vm.line_height)
    },
    attrs: {
      "value": _vm.title
    }
  }), _c('text', {
    style: {
      fontSize: _vm.font(_vm.tex_size_2),
      marginTop: _vm.font(_vm.contentMargin)
    }
  }, [_vm._v(" 由来")]), _c('text', {
    staticStyle: {
      color: "#334f16"
    },
    style: {
      fontSize: _vm.font(_vm.tex_size_1),
      marginTop: _vm.font(_vm.topMargin),
      margin: _vm.font(_vm.contentMargin),
      lineHeight: _vm.font(_vm.line_height)
    },
    attrs: {
      "value": _vm.content_1
    }
  }), _c('image', {
    style: {
      width: _vm.img_w,
      height: _vm.img_2_h
    },
    attrs: {
      "src": "https://www.imengu.cn:8888/Ahuangshang/img/bailu/img_2.jpg",
      "placeholder": ""
    }
  }), _c('text', {
    staticStyle: {
      marginTop: "15px"
    },
    style: {
      fontSize: _vm.font(_vm.tex_size_2)
    }
  }, [_vm._v(" 气候特征")]), _c('text', {
    staticStyle: {
      color: "#334f16"
    },
    style: {
      fontSize: _vm.font(_vm.tex_size_1),
      marginTop: _vm.font(_vm.topMargin),
      margin: _vm.font(_vm.contentMargin),
      lineHeight: _vm.font(_vm.line_height)
    },
    attrs: {
      "value": _vm.content_2
    }
  }), _c('image', {
    style: {
      width: _vm.img_w,
      height: _vm.img_3_h
    },
    attrs: {
      "src": "https://www.imengu.cn:8888/Ahuangshang/img/bailu/img_3.jpg",
      "placeholder": ""
    }
  }), _c('text', {
    staticStyle: {
      marginTop: "15px"
    },
    style: {
      fontSize: _vm.font(_vm.tex_size_2)
    }
  }, [_vm._v(" 民俗")]), _c('text', {
    staticStyle: {
      color: "#334f16"
    },
    style: {
      fontSize: _vm.font(_vm.tex_size_1),
      marginTop: _vm.font(_vm.topMargin),
      margin: _vm.font(_vm.contentMargin),
      lineHeight: _vm.font(_vm.line_height)
    },
    attrs: {
      "value": _vm.content_3
    }
  }), _c('image', {
    style: {
      width: _vm.img_w,
      height: _vm.img_4_h
    },
    attrs: {
      "src": "https://www.imengu.cn:8888/Ahuangshang/img/bailu/img_4.jpg",
      "placeholder": ""
    }
  }), _c('text', {
    staticStyle: {
      marginTop: "15px"
    },
    style: {
      fontSize: _vm.font(_vm.tex_size_2)
    }
  }, [_vm._v(" 农事")]), _c('text', {
    staticStyle: {
      color: "#334f16"
    },
    style: {
      fontSize: _vm.font(_vm.tex_size_1),
      marginTop: _vm.font(_vm.topMargin),
      margin: _vm.font(_vm.contentMargin),
      lineHeight: _vm.font(_vm.line_height)
    },
    attrs: {
      "value": _vm.content_4
    }
  }), _c('image', {
    style: {
      width: _vm.img_w,
      height: _vm.img_5_h
    },
    attrs: {
      "src": "https://www.imengu.cn:8888/Ahuangshang/img/bailu/img_5.jpg",
      "placeholder": ""
    }
  }), _c('text', {
    staticStyle: {
      marginTop: "15px"
    },
    style: {
      fontSize: _vm.font(_vm.tex_size_2)
    }
  }, [_vm._v("诗词")]), _c('text', {
    staticStyle: {
      color: "#334f16"
    },
    style: {
      fontSize: _vm.font(_vm.tex_size_1),
      marginTop: _vm.font(_vm.topMargin),
      margin: _vm.font(_vm.contentMargin),
      lineHeight: _vm.font(_vm.line_height)
    },
    attrs: {
      "value": _vm.content_5
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });