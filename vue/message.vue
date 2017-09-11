<template>
    <list>
        <cell v-for="(item,i) in datas " :key="i" append="tree">
            <div :style="{ backgroundColor: bgColor }" class="item" v-on:click="click(i)" >
                <text class="item-title">{{item.title}}</text>
                <text class="item-content">{{item.content}}</text>
                <text class="item-time">{{item.time}}</text>
            </div>

        </cell>


    </list>


</template>

<style scoped>
    .item {
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 35px;
        padding-right: 35px;
        height: 200px;
        justify-content: center;
        /*margin-bottom: 1px; FUTURE */
        border-bottom-width: 1px;
        border-color: #dddddd;
    }

    .item-title {
        font-size: 40px;
        color: #555;
    }

    .item-content {
        margin-top: 5px;
        font-size: 32px;
        color: #272727;
    }

    .item-time {
        font-size: 32px;
        color: #aeaeae;
        text-align: right;

    }
</style>
<script>
  export default {
    data() {
      return {
        datas: [
          {
            viewName: "bailu.weex.js",
            title: "白露",
            content: "白露是农历二十四节气中的第十五个节气，当太阳到达黄经165度时为白露。",
            time: "2017-09-07",
          },
        ],
        bgColor: "#ffffff",
        title: "",
        content: "",
        time: "",

      }
    },
    methods: {
      click: function (i) {
        weex.requireModule('event').openView(this.datas[i].viewName, this.datas[i].title);
      },
    }
  };

</script>