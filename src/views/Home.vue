<template>
  <div class="home">
    <el-container>
      <!-- 左侧导航菜单 -->
      <el-aside width="300px">
        <h1>
          <span>#</span>远程诊疗系统
        </h1>
        <div class="aside">
          <ul>
            <li v-for='(item,index) in leftNav' :key="index" @click="hoverColor(index)">
              <router-link :to="item.to">
                <span></span>{{item.navName}}
              </router-link>
            </li>
          </ul>
        </div>
      </el-aside>
      <!-- 右侧头部和内容区域 -->
      <el-container>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "home",
  data(){
    return{
      leftNav:[
        {navName:"统计分析",icon:"",id:"1",to:"about",navtia:true},
        {navName:"基础医疗统计",icon:"",id:"2",to:"about",navtia:false},
        {navName:"公共卫生统计",icon:"",id:"3",to:"about",navtia:false},
        {navName:"妇幼保健统计",icon:"",id:"4",to:"about",navtia:false},
        {navName:"财经费用统计",icon:"",id:"5",to:"/home/header",navtia:false}
      ]
    }
  },
  methods:{
    hoverColor(index){
      console.log(index)
    }
  }
};
</script>

<style lang="less" scoped>
*{
  box-sizing: border-box;
}
.home {
  height: 100%;
  .el-container{
    height:100%;
  }
}
@theme: #404072;
.el-aside {
  height:100%;
  background-color: #404072;
  color: #333;
  text-align: center;
  h1 {
    height: 90px;
    font-size: 20px;
    background-color: @theme;
    margin: 0;
    line-height: 90px;
    color: #fff;
    padding-left: 73px;
    text-align: left;
  }
  .aside {
    ul {
      li {
        color: #f8f8fb;
        background-color: #454577;
        height: 62px;
        border-bottom: 1px @theme solid;
        line-height: 62px;
        font-size: 16px;
        text-align: left;
        a{
          display: block;
          width: 100%;
          height:100%;
          padding-left: 25%;
        }
        span {
          display: inline-block;
          width: 10px;
          height: 10px;
          background-color: #a29fd1;
          border-radius: 50%;
          margin-right: 14px;
        }
      }
    }
  }
}
.action{
  background-color: #7d79c3;
}
</style>
