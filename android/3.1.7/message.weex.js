// { "framework": "Vue" }
!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=67)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=(weex.requireModule("navigator"),{data:function(){return{}},methods:{}});t.default=i},1:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}weex.requireModule("modal");e.exports={parseQueryString:function(e){if(-1===e.indexOf("?")||-1===e.indexOf("="))return null;e=e.split("?")[1];for(var t=/(([^?&=]+)(?:=([^?&=]*))*)/g,n={},i=void 0,o=void 0,a=void 0;i=t.exec(e);)"hot-reload_controller"!==(o=i[2])&&"_wx_tpl"!==o&&(a=i[3]||"",n[o]=decodeURIComponent(a));return n},toDateString:function(e){var t=void 0;return t=this.isNotNull(e)?new Date(e):new Date,t.getFullYear()+"-"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-"+(t.getDate()<10?"0"+t.getDate():t.getDate())+" "+(t.getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":"+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())},toTimeSpan:function(){var e=new Date(strtime.replace(/-/g,"/"));return Date.parse(e)},compareDate:function(e,t){var n=new Date(e.replace(/-/g,"/")),i=new Date(t.replace(/-/g,"/"));return!(""!==e&&""!==t&&n>i)},isNotNull:function(e){return void 0!==e&&""!==e&&null!=e},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,o=t.getDate(),a=n+"-";return i<10&&(a+="0"),a+=i+"-",o<10&&(a+="0"),a+=1===e?"1":o},checkPicurl:function(e,t){var n=new Image;n.src=e;var i=0;if(n.onerror=function(){return i=0,t(i)},n.complete)return i=n.width/n.height,t(0===i?0:750/i);n.onload=function(){return i=n.width/n.height,n.onload=null,t(0===i?0:750/i)}},getFontSize:function(e){if(this.isweb()){var t=document.body.clientWidth;return"android"===weex.config.env.osName.toLocaleString()?2*e+"px":t>900?e*weex.config.env.scale+"px":t>750?2*e*weex.config.env.scale+"px":4*e*weex.config.env.scale+"px"}return(e*(750/weex.config.env.deviceWidth)*weex.config.env.scale).toFixed(0)},getMatchSize:function(e){return this.isweb()?e*weex.config.env.scale+"px":e},delHtmlTag:function(e){return e.replace(/<[^>]+>/g,"").replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">")},isweb:function(){return"web"===weex.config.env.platform.toLocaleLowerCase()},is_weixn:function(){return"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)},registerModules:function(){if(this.isweb()){var e;weex.registerModule("event",(e={openWeexView:function(e,t){"android"===weex.config.env.osName.toLowerCase()&&ltwc.openWeexView(e,t)}},i(e,"openWeexView",function(e,t,n){"android"===weex.config.env.osName.toLowerCase()&&ltwc.openWeexView(e,t,n)}),i(e,"openWebView",function(e,t){"android"===weex.config.env.osName.toLowerCase()&&ltwc.openWebView(e,t)}),i(e,"openWebView",function(e,t,n){"android"===weex.config.env.osName.toLowerCase()&&ltwc.openWebView(e,t,n)}),i(e,"openView",function(e){"android"===weex.config.env.osName.toLowerCase()&&ltwc.openView(e)}),i(e,"getFilePath",function(e,t,n){"android"===weex.config.env.osName.toLowerCase()&&(window.getFilePathCallback=n,ltwc.getFilePath(e,t,n))}),i(e,"showMessage",function(e){"android"===weex.config.env.osName.toLowerCase()&&ltwc.showMessage(e)}),i(e,"getVersion",function(e){"android"===weex.config.env.osName.toLowerCase()&&(window.getVersionCallback=e,ltwc.getVersion(e))}),i(e,"update",function(e){"android"===weex.config.env.osName.toLowerCase()&&ltwc.update(e)}),i(e,"setConfig",function(e,t,n){"android"===weex.config.env.osName.toLowerCase()&&ltwc.setConfig(e,t,n)}),i(e,"playVideo",function(e,t,n){"android"===weex.config.env.osName.toLowerCase()&&ltwc.playVideo(e,t,n)}),e)),weex.registerModule("net",{requestNetData:function(e,t,n,i,o,a){"android"===weex.config.env.osName.toLowerCase()&&(window.requestNetDataCallback=a,ltwc.requestNetData(e,t,n,i,o))}})}}},e.exports.isweb()&&(window.getReturnData=function(e,t){"getFilePath"===e?window.getFilePathCallback(t):"requestNetData"===e?window.requestNetDataCallback(t):"getVersion"===e&&window.getVersionCallback(t)})},101:function(e,t){e.exports={item:{paddingTop:"25",paddingBottom:"25",paddingLeft:"35",paddingRight:"35",minHeight:"200",justifyContent:"center",borderBottomWidth:"1",borderColor:"#dddddd","backgroundColor:active":"rgb(240,240,240)"},"item-title":{fontSize:"40",color:"#303030"},"item-content":{marginTop:"5",fontSize:"32",color:"#000000"},"item-time":{fontSize:"32",color:"#6c6c6c",textAlign:"right"}}},116:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("list",e._l(e.datas,function(t,i){return n("cell",{key:i,appendAsTree:!0,attrs:{append:"tree"}},[n("div",{staticClass:["item"],style:{backgroundColor:e.bgColor},on:{click:function(t){e.click(i)}}},[n("text",{staticClass:["item-title"]},[e._v(e._s(t.title))]),n("text",{staticClass:["item-content"]},[e._v(e._s(t.content))]),n("text",{staticClass:["item-time"]},[e._v(e._s(t.time))])])])}))},staticRenderFns:[]},e.exports.render._withStripped=!0},51:function(e,t,n){var i,o,a=[];a.push(n(101)),i=n(86);var r=n(116);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=i=i.default),"function"==typeof o&&(o=o.options),o.__file="E:\\workSpace\\workSpace\\oldWork\\rili_weex\\src\\views\\message.vue",o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-0cee72e6",o.style=o.style||{},a.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,a),e.exports=i},67:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(51),a=i(o),r=n(0),s=i(r);Vue.mixin(s.default),a.default.el="#root",new Vue(a.default)},8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={channels:"头条&新闻&财经&体育&娱乐&军事&教育&科技&NBA&股票&星座&女性&健康&育儿",adImgUrl:"http://imengu.cn/Ahuangshang/img/dragonBoatFestival/dragonBoatFestival.jpg",adImgSchemeUrl:"className=cn.ltwc.cft.weex.WeexActivity&ltkj&jsName=dragonBoatFestival&ltkj&webTitle=端午节&ltkj&shareUrl=http://imengu.cn/Ahuangshang/html/dragonBoatFestival.html",newVersion:318318,updateUrl:"http://imengu.cn/Ahuangshang/html/downLoadApp.html",downLoadUrl:"http://imengu.cn/Ahuangshang/apk/latest.apk",HostImgUrl:"http://imengu.cn/Ahuangshang/img/",defaultHost:"http://imengu.cn/",getContent:function(e){var t='\n<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"> <style>img{width: 100%;height:auto;}</style><style>video{width:100%; height:auto;max-height: 320px; position: static; margin: 0}</style><style type=\'text/css\'>body{color:rgba(28,28,28,0.95);font-size: 16px}</style></head><style>  body{    -webkit-user-select: none;    -webkit-tap-highlight-color: transparent;  }</style><body>'+this.getButtonInfo(e)+"</body></html>";return t=encodeURI(t)},getButtonInfo:function(e){var t=e.content.replace(/(<\/?a.*?>)/g,"");return"<h2>"+e.title+"</h2>"+t+"<p style='color: #88000000;font-size: 13px'>&nbsp;&nbsp;本文系第三方观点，不代表李唐科技的观点和立场</p><p  onClick='linkThird()' style='color: #33B5E5;font-size: 13px'>&nbsp;&nbsp;原文链接>></p><script>function linkThird() {ltwc.linkThird();}<\/script>"},getWeatherTypeImg:function(e){return this.contains(e,"晴")?"qing.jpg":this.contains(e,"阴")?"yin.jpg":this.contains(e,"多云")?"duoyun.gif":this.contains(e,"小雨")||this.contains(e,"中雨")?"xiaoyu.gif":this.contains(e,"大雨")||this.contains(e,"暴雨")?"dayu.gif":this.contains(e,"小雪")||this.contains(e,"中雪")?"xiaoxue.gif":this.contains(e,"大雪")||this.contains(e,"暴雪")?"daxue.gif":this.contains(e,"雪")?"xiaoxue.gif":this.contains(e,"雨")?"xiaoyu.gif":void 0},contains:function(e,t){return e.indexOf(t)>-1},getWeatherDec:function(e,t){var n=e.replace("高温","");return(n=n.replace("℃",""))+" ~"+t.replace("低温","")},newsTabTitles:[{title:"头条"},{title:"新闻"},{title:"财经"},{title:"体育"},{title:"娱乐"},{title:"军事"},{title:"教育"},{title:"科技"},{title:"NBA"},{title:"股票"},{title:"星座"},{title:"女性"},{title:"健康"},{title:"育儿"}],newsTabStyles:{bgColor:"#ffffff",titleColor:"#dd000000",activeTitleColor:"#31A9A5",activeBgColor:"#ffffff",isActiveTitleBold:!0,iconWidth:70,iconHeight:70,width:160,height:75,fontSize:28,hasActiveBottom:!0,activeBottomColor:"#31A9A5",activeBottomHeight:1,activeBottomWidth:160,textPaddingLeft:10,textPaddingRight:10,normalBottomColor:"rgba(0,0,0,0.4)",normalBottomHeight:1,hasRightIcon:!0,rightOffset:100},jokeTabTitles:[{title:"脑筋急转弯",netUrl:"https://api.bmob.cn/1/classes/funny_iq/"},{title:"时尚物语",netUrl:"https://api.bmob.cn/1/classes/funny_ganwu/"},{title:"节日祝福",netUrl:"https://api.bmob.cn/1/classes/funny_zhufu/"}],jokeTabStyles:{bgColor:"#ffffff",titleColor:"#dd000000",activeTitleColor:"#31A9A5",activeBgColor:"#ffffff",isActiveTitleBold:!0,iconWidth:70,iconHeight:70,width:250,height:75,fontSize:28,hasActiveBottom:!0,activeBottomColor:"#31A9A5",activeBottomHeight:1,activeBottomWidth:250,textPaddingLeft:10,textPaddingRight:10,normalBottomColor:"rgba(0,0,0,0.4)",normalBottomHeight:1,hasRightIcon:!0,rightOffset:100}}},86:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=i(o),r=n(8),s=i(r);t.default={data:function(){return{datas:[{viewName:"dragonBoatFestival",title:"端午节",content:"农历五月初五是端午节，中国传统节日。又称“端阳节”、“午日节”等，中国国家法定节假日之一，已并被列入世界非物质文化遗产名录。",time:"2019-05-30",shareUrl:s.default.defaultHost+"Ahuangshang/html/dragonBoatFestival.html",shareImagePaht:s.default.HostImgUrl+"dragonBoatFestival/dragonBoat_1.jpg"},{viewName:"yuanxiao",title:"元宵节",content:"元宵佳节赏花灯，吉祥之星为你升；正月十五团圆夜，全家一起猜花灯。",time:"2018-03-02",shareUrl:"http://mp.weixin.qq.com/s/O29M03SiniaMhB-bieVNVg",shareImagePaht:""},{viewName:"springFestival",title:"春节",content:"春节是指汉字文化圈传统上的农历新年，俗称“年节”，传统名称为新年、大年、新岁，但口头上又称度岁、庆新岁、过年。",time:"2018-02-15",shareUrl:s.default.defaultHost+"Ahuangshang/html/springFestival.html",shareImagePaht:s.default.HostImgUrl+"springFestival/img_1.jpg"},{viewName:"dongzhi",title:"冬至",content:"冬至是农历的重要节气，也是中华民族的传统节日。早在春秋时代，中国就已经用土圭观测出冬至，古人认为自冬至起阳气回升，代表着下一个循环的开始。冬至是重要的养生时期，应注意防寒保暖、保肝护肝。",time:"2017-12-22",shareUrl:s.default.defaultHost+"Ahuangshang/html/dongzhi.html",shareImagePaht:s.default.HostImgUrl+"dongzhi/dongzhi_1.jpg"},{viewName:"yieryisan",title:"国家公祭日",content:"南京大屠杀死难者国家公祭仪式于12月13日上午10时举行。",time:"2017-12-12",shareUrl:s.default.defaultHost+"Ahuangshang/html/yieryisan.html",shareImagePaht:""},{viewName:"mid-autumn-festival",title:"中秋节",content:"中秋节自古便有祭月、赏月、拜月、吃月饼、赏桂花、饮桂花酒等习俗，流传至今，久经不息。中秋节以月之圆兆人之团圆，为寄托思念故乡，思念亲人之情，祈盼丰收、幸福，成为丰富多彩、弥足珍贵的文化遗产。中秋节与端午节、春节、清明节并称为中国四大传统节日。",time:"2017-10-04",shareUrl:s.default.defaultHost+"Ahuangshang/html/mid-Autumn-festival.html",shareImagePaht:s.default.HostImgUrl+"mid_autumn/mid-autumn.jpg"},{viewName:"guanggao",title:"开业大吉",content:"视频VIP豪送|庆国庆、迎中秋，万份视频VIP等你来领！",time:"2017-10-01",shareUrl:s.default.defaultHost+"Ahuangshang/html/guanggao.html",shareImagePaht:s.default.HostImgUrl+"advertisement/ad.jpg"},{viewName:"bailu",title:"白露",content:"白露是农历二十四节气中的第十五个节气，当太阳到达黄经165度时为白露。",time:"2017-09-07",shareUrl:s.default.defaultHost+"Ahuangshang/html/bailu.html",shareImagePaht:s.default.HostImgUrl+"bailu/img_1.jpg"}],bgColor:"#ffffff",title:"",content:"",time:""}},methods:{click:function(e){"yuanxiao"===this.datas[e].viewName?weex.requireModule("event").openView("className=cn.ltwc.cft.activity.MyX5WebView&ltkj&webUrl="+this.datas[e].shareUrl+"&ltkj&webTitle="+this.datas[e].title+"&ltkj&shareUrl="+this.datas[e].shareUrl):weex.requireModule("event").openView("className=cn.ltwc.cft.weex.WeexActivity&ltkj&jsName="+this.datas[e].viewName+"&ltkj&webTitle="+this.datas[e].title+"&ltkj&shareUrl="+this.datas[e].shareUrl+"&ltkj&shareImagePath="+this.datas[e].shareImagePaht)}},created:function(){a.default.isweb()&&(window.temp_this=this,a.default.registerModules())}}}});