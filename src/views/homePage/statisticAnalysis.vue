<template>
  <div class="statistic">
    <h2 class="statistic-title">财政费用统计</h2>
    <div class="statistic-content">
      <div class="statistic-contentTop">
        <div class="contentTop-left">
          <p>科室接诊信息统计</p>
          <div class="contentLeft-data">
              <visual/>
          </div>
        </div>
        <div class="contentTop-right">
          <p>科室疾病开药盈利信息统计</p>
          <div class="contentRight-data"></div>
        </div>
      </div>
      <div class="statistic-contentBottom">
        <p>接诊单位科室盈利信息统计</p>
        <div class="contentBottom-data"></div>
      </div>
    </div>
  </div>
</template>
<script>
import visual from "@/views/homePage/component/datavisual.vue"
export default {
    components:{
        visual
    }
};
</script>
<style lang='less' scoped>
* {
  box-sizing: border-box;
}
@theme: #7d79c3;
.statistic {
  height: 100%;
  background-color: #f0f0f3;
  .statistic-title {
    width: 100%;
    height: 51px;
    background-color: #fff;
    padding-left: 38px;
    padding-top: 16px;
    font-size: 18px;
    color: #656565;
  }
  .statistic-content {
    width: 100%;
    height: 94%;
    padding: 28px 28px 0;
    .statistic-contentTop {
      width: 100%;
      height: 680px;
      display: flex;
      margin-bottom: 20px;
      .contentTop-left {
        border: 1px solid #cccccc;
        border-radius: 10px;
        flex: 1;
        height: 100%;
        background-color: #fff;
        margin-right: 13px;
        p {
          border-radius: 10px 10px 0 0;
          display: block;
          height: 37px;
          background-color: @theme;
          line-height: 37px;
          color: #f4f4f4;
          font-size: 18px;
          padding-left: 33px;
        }
      }
      .contentTop-right {
        border: 1px solid #cccccc;
        border-radius: 10px;
        flex: 1;
        height: 100%;
        background-color: #fff;
        p {
          color: #f4f4f4;
          border-radius: 10px 10px 0 0;
          display: block;
          height: 37px;
          background-color: @theme;
          line-height: 37px;
          font-size: 18px;
          padding-left: 33px;
        }
      }
    }
    .statistic-contentBottom {
      border: 1px solid #cccccc;
      width: 100%;
      height: 480px;
      background-color: #fff;
      border-radius: 10px;
      p {
        color: #f4f4f4;
        border-radius: 10px 10px 0 0;
        display: block;
        height: 37px;
        background-color: @theme;
        line-height: 37px;
        font-size: 18px;
        padding-left: 33px;
      }
    }
  }
}
</style>