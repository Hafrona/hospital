<template>
<div class="visual">
  <h2>科室接诊情况</h2>
  <!-- 筛选部分 -->
  <div class="screen">
    <div class="screenCure">
      <div class="unit">
        <span>诊疗单位</span>
        <input class="oneipt" type="text" placeholder="莆田市第一卫生所" v-model="input" />
      </div>
      <div class="classify">
        <span>科目分类</span>
        <input class="ipt" type="text" placeholder="内科" v-model="subject" />
        <div class="popup" @mouseenter="isShow=true" @mouseleave="isShow=false"></div>
        <div
          v-show="isShow"
          class="showpopupData"
          @mouseenter="isShow=true"
          @mouseleave="isShow=false"
        >
          <div class="popupData" v-for="(item,index) in popup" :key="index">
            <p @click="popupClick(index)">{{item.name}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 年季月筛选 -->
    <div class="yearQuarMonth">
      <div class="date">
        <span>年份筛选</span>
        <input class="date-ipt" type="button" v-model="subject" />
        <div class="date-popup"></div>
      </div>
      <div class="date">
        <span>年份筛选</span>
        <input class="date-ipt" type="button" v-model="subject" />
        <div class="date-popup"></div>
      </div>
      <div class="date">
        <span>年份筛选</span>
        <input class="date-ipt" type="button" v-model="subject" />
        <div class="date-popup"></div>
      </div>
    </div>
    <!-- 数据统计图 -->
    <div class="dataStatistics">
      <div class="dataStatistics-hint">
        <span></span>本月
        <span></span>上个月
      </div>
      <body>
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="main" style="width: 600px;height:400px;"></div>
      </body>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      input: "",
      subject: "你好",
      popup: [
        { name: "内科", id: "1" },
        { name: "皮肤科", id: "2" },
        { name: "妇科", id: "3" },
        { name: "儿科", id: "4" },
        { name: "牙科", id: "5" }
      ],
      //   年份季度月份
      yearInput: "",
      quarInput: "",
      monthInput: ""
    };
  },
  methods: {
    popupClick(index) {
      this.subject = this.popup[index].name;
    }
  },
  mounted() {
    var myChart = this.$echarts.init(document.getElementById("main"));
    var option = {
      legend: {},
      tooltip: {},
      dataset: {
        // dimensions: ["product", "2015", "2016", "2017"],
        source: [
          { product: "Matcha Latte", "2015": 43.3, "2016": 85.8, "2017": 93.7 },
          {
            product: "Walnut Brownie",
            "2015": 72.4,
            "2016": 53.9,
            "2017": 39.1
          }
        ]
      },
      xAxis: { type: "category"},
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
};
</script>
<style lang="less" scoped>
.visual {
  h2 {
    color: #656565;
    font-size: 24px;
    padding: 20px 33px;
  }
  .screen {
    padding: 0 0 0 33px;
    .screenCure {
      height: 40px;
      display: flex;
      margin-bottom: 18px;
      .unit {
        margin-right: 10px;
        span {
          font-size: 16px;
          margin-right: 15px;
        }
        .oneipt {
          width: 296px;
          height: 28px;
          margin-right: 18px;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding-left: 10px;
        }
      }
      .classify {
        position: relative;
        span {
          font-size: 16px;
          margin-right: 15px;
        }
        .ipt {
          width: 140px;
          height: 28px;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding-left: 10px;
        }
        .popup {
          width: 0;
          height: 0;
          border: 10px solid red;
          border-color: #8a8a8a transparent transparent transparent;
          position: absolute;
          top: 12px;
          right: 10px;
        }
        .showpopupData {
          width: 150px;
          background-color: #999;
          border-radius: 5px;
          position: absolute;
          top: 33px;
          right: 4px;
          padding: 10px 10px;
          z-index: 100;
          p {
            display: block;
            height: 30px;
            line-height: 30px;
            background-color: #ccc;
            border-bottom: 1px solid #fff;
            text-align: center;
          }
        }
      }
    }
    .yearQuarMonth {
      width: 100%;
      display: flex;
      margin-bottom: 25px;
      .date {
        position: relative;
        margin-right: 33px;
        span {
          font-size: 16px;
          margin-right: 15px;
        }
        .date-ipt {
          height: 32px;
          width: 98px;
          background-color: #fff;
          border: 1px solid #ccc;
          text-align: left;
          padding: 0 10px;
          border-radius: 5px;
        }
        .date-popup {
          width: 0;
          height: 0;
          border: 10px solid red;
          border-color: #8a8a8a transparent transparent transparent;
          position: absolute;
          top: 12px;
          right: 13px;
        }
      }
    }
    .dataStatistics {
      // background: linear-gradient(to right, #6666c2 , #4f4f8c);
      .dataStatistics-hint {
        text-align: right;
        padding-right: 35px;
        span {
          display: inline-block;
          width: 31px;
          height: 12px;
          margin-right: 13px;
          background: linear-gradient(to right, #6666c2, #4f4f8c);
          &:nth-child(2) {
            margin-left: 27px;
            background: linear-gradient(to right, #afa4e6, #827cc2);
          }
        }
      }
    }
  }
}
</style>