<template>
    <div>
        <text :style="{ fontSize: tex_size_1,marginTop: contentMargin, margin:contentMargin,lineHeight:line_height}"
              style="color:#555555">{{year}}</text>
        <text :style="{ fontSize: title_size,marginTop: contentMargin, marginBottom:contentMargin,lineHeight:line_height}"
              style="color:#000000;justify-content: center;text-align: center;">{{title}}</text>
        <list>
            <cell v-for="item in dealPicUrl">
                <image :style="{ width: img_w, height:item.height}" :src=item.url></image>
                <text :style="{ fontSize: tex_size_1,lineHeight:line_height}"
                      style="color:#555555;justify-content: center;text-align: center;">{{item.title}}</text>
            </cell>
        </list>
        <text :style="{ fontSize: tex_size_2,marginTop: topMargin,lineHeight:line_height}"
              style="color:#0a0a0a">{{content}}</text>
    </div>
</template>

<script>
    var stream = weex.requireModule('stream')
    var mtd = require('../js/methods.js');

    export default {
        data() {
            return {
                ss: "测试页面",
                title: "",
                content: "",
                year: "",
                picUrl: [],
                dealPicUrl: [],
                img_w: 0,
                contentMargin: 16,
                tex_size_1: 30,
                tex_size_2: 35,
                title_size: 50,
                topMargin: 40,
                line_height: 55,
            }
        },
        methods: {
            testWeb: function (eid, type, callback) {
                return stream.fetch({
                    method: 'GET',
                    type: type,
                    url: 'http://v.juhe.cn/todayOnhistory/queryDetail.php?e_id=' + eid + '&key=4b38076dc77166f1d610d1697315c07d'
                }, callback);
            },
            getOptions: function () {
                var env = this.$getConfig().env;
                if (env.platform.toLocaleLowerCase() == 'web') {
                    var bundleUrl = this.$getConfig().bundleUrl;
                    var urlParams = mtd.parseQueryString(bundleUrl);
                    this.year = urlParams.year;
                    this.testWeb(urlParams.e_id, 'jsonp', res => {
                        this.dealBack(JSON.stringify(res));
                    })
                } else {
                    this.year = this.$getConfig().year;
                    this.testWeb(this.$getConfig().e_id, 'json', res => {
                        this.dealBack(JSON.stringify(res));
                    })
                }
            },
            dealBack: function (e) {
                var data = JSON.parse(e).data;
                var result = data.result;
                this.title = result[0].title;
                this.content = result[0].content;
                this.picUrl = result[0].picUrl;
                var that = this;
                this.getDealList(res => {
                    that.dealPicUrl = res;
                });
            },
            /**
             * 获取显示图片的高度
             * @param ratio
             */
            getShowImgHeight: function (ratio) {
                var env = this.$getConfig().env;
                if (env.platform.toLocaleLowerCase() == 'web') {
                    var clientWidth = document.body.clientWidth;
                    return ratio == 0 ? 0 : clientWidth / ratio;
                }
                return 0;
            },
            getDealList: function (callback) {
                var that = this;
                var env = this.$getConfig().env;
                if (env.platform.toLocaleLowerCase() == 'web') {
                    var dealPicUrl = [];
                    this.picUrl.map((item) => {
                        console.log(item.url)
                        mtd.checkPicurl(item.url, res => {
                            dealPicUrl.push({
                                height: res + "px",
                                title: res == 0 ? "" : (item.pic_title || "王朝黄历--历史上的今天"),
                                url: item.url,
                            })
                        });
                    })
                    return callback(dealPicUrl);
                }
            }
        },

        created: function () {
            this.getOptions();
            var env = this.$getConfig().env;
            if (env.platform.toLocaleLowerCase() == 'web') {
                var clientWidth = document.body.clientWidth;
                this.img_w = clientWidth;
                var ratio = clientWidth / 750;
                this.contentMargin = ratio * this.contentMargin + "px";
                this.tex_size_1 = ratio * this.tex_size_1 + "px";
                this.tex_size_2 = ratio * this.tex_size_2 + "px";
                this.topMargin = ratio * this.topMargin + "px";
                this.line_height = ratio * this.line_height + "px";
                this.title_size = ratio * this.title_size + "px";
            }
        },
    };


</script>