<template>
  <div class="home">
    <el-container>
      <el-aside width="300px">
        <h1>
          <span>#</span>远程诊疗系统
        </h1>
        <div class="aside">
          <ul>
            <li>
              <router-link to="about" class="skip">
                <span></span>统计分析
              </router-link>
            </li>
            <li>
              <router-link to="about">
                <span></span>基础医疗统计
              </router-link>
            </li>
            <li>
              <router-link to="about">
                <span></span>公共卫生统计
              </router-link>
            </li>
            <li>
              <router-link to="about">
                <span></span>妇幼保健统计
              </router-link>
            </li>
            <li>
              <router-link to="about">
                <span></span>财经费用统计
              </router-link>
            </li>
          </ul>
        </div>
      </el-aside>
      <el-container>
        <el-header style="height:90px">
          <div class="header-left">
            <ul>
              <li>
                <div class="header-left-li">
                  <i></i>
                </div>
                <p>诊疗记录</p>
              </li>
              <li>
                <div class="header-left-li">
                  <i></i>
                </div>
                <p>统计分析</p>
              </li>
              <li>
                <div class="header-left-li">
                  <i></i>
                </div>
                <p>公告信息</p>
              </li>
              <li>
                <div class="header-left-li">
                  <i></i>
                </div>
                <p>居民档案</p>
              </li>
              <li>
                <div class="header-left-li">
                  <i></i>
                </div>
                <p>基本设置</p>
              </li>
            </ul>
          </div>
          <div class="header-right">
            <div class="todeyParson">
              <div class="headerRight-img">
                <span></span>
              </div>
              <div class="todeyParson-text">
                <p>7000</p>
                <p>今日就诊人数</p>
              </div>
            </div>
            <div class="todeyParson">
              <div class="headerRight-img">
                <span></span>
              </div>
              <div class="todeyParson-text">
                <p>7000</p>
                <p>今日就诊人数</p>
              </div>
            </div>
            <div class="todeyParson">
              <div class="headerRight-img">
                <span></span>
              </div>
              <div class="todeyParson-text">
                <p>7000</p>
                <p>今日就诊人数</p>
              </div>
            </div>
          </div>
          <div class="header-user">
            <div class="header-userName">
              <i>#</i>
              <span class="user-name">王明亮</span>
              <div class="user-status">
                <div class="user-border"></div>
              </div>
            </div>
          </div>
        </el-header>
        <el-main>Main</el-main>
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
        {navName:"统计分析",icon:"",id:"1"},
        {navName:"基础医疗统计",icon:"",id:"2"},
        {navName:"公共卫生统计",icon:"",id:"3"},
        {navName:"妇幼保健统计",icon:"",id:"4"},
        {navName:"财经费用统计",icon:"",id:"5"}
      ]
    }
  }
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  outline: none;
  color: #fff;
}
@theme: #404072;
.el-header {
  background-color: #f0f0f3;
  text-align: center;
  display: flex;
  border-bottom: 2px solid @theme;
  // 头部
  .header-left {
    flex: 5;
    display: flex;
    ul {
      flex: 1;
      display: flex;
      li {
        float: left;
        display: flex;
        flex-direction: column;
        font-size: 18px;
        align-items: center;
        padding: 10px 18px;
        &:hover {
          background-color: #d8d8da;
        }
        .header-left-li {
          width: 100%;
          i {
            display: inline-block;
            width: 40px;
            height: 40px;
            background-color: @theme;
            border-radius: 50%;
            margin-bottom: 4px;
          }
        }
      }
    }
  }
  .header-right {
    flex: 3;
    display: flex;
    .todeyParson {
      flex: 1;
      display: flex;
      justify-content: center;
      .headerRight-img {
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          display: flex;
          width: 33px;
          height: 33px;
          display: block;
          background-color: @theme;
          border-radius: 50%;
          color: #666666;
        }
      }
      .todeyParson-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        padding-left: 10px;
        font-size: 12px;
        p {
          &:nth-child(2) {
            font-size: 16px;
          }
        }
      }
    }
  }
  .header-user {
    flex: 1;
    display: flex;
    justify-content: center;
    .header-userName {
      display: flex;
      align-items: center;
      i {
      }
      .user-name {
      }
      .user-status {
        padding-top: 12px;
        .user-border {
          border-width: 8px;
          border-style: solid;
          border-color: #626262 transparent transparent transparent;
        }
      }
    }
  }
}
.el-aside {
  background-color: #d3dce6;
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
        padding-left: 73px;
        text-align: left;
        span {
          display: inline-block;
          width: 10px;
          height: 10px;
          background-color: #a29fd1;
          border-radius: 50%;
          margin-right: 14px;
        }
        &:hover {
          background-color: #7d79c3;
        }
      }
    }
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
body > .el-container {
  margin-bottom: 40px;
}
li {
  list-style: none;
}
</style>
