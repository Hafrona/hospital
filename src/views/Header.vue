<template>
  <div class="header">
    <!-- 顶部菜单 -->
    <el-header style="height:9%">
      <div class="header-left">
        <router-link :to="item.to" v-for="(item,index) in headerLeftNav" :key="index">
          <div
            class="header-left-li"
            @click="topnav(index)"
            :class="index === topnavIndex?'action':''"
          >
            <i>{{item.icon}}</i>
            <p>{{item.navText}}</p>
          </div>
        </router-link>
      </div>
      <div class="header-right">
        <div class="todeyParson" v-for="(item,index) in headerRightNav" :key="index">
          <div class="headerRight-img">
            <span>{{item.icon}}</span>
          </div>
          <div class="todeyParson-text">
            <p>{{item.navTextNum}}</p>
            <p>{{item.navText}}</p>
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
    <!-- 右侧内容区域 -->
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      topnavIndex: "",
      headerLeftNav: [
        { navText: "诊疗记录", id: "1", icon: "", to: "/home/header/record" },
        {
          navText: "统计分析",
          id: "2",
          icon: "",
          to: "/home/header/statisticAnalysis",
          action: true
        },
        { navText: "公告信息", id: "3", icon: "", to: "/home/header/notice" },
        { navText: "居民档案", id: "4", icon: "", to: "/home/header/userfile" },
        { navText: "基本设置", id: "5", icon: "", to: "/home/header/setting" }
      ],
      headerRightNav: [
        { navText: "今日候诊人数", id: "1", icon: "", navTextNum: "7000" },
        { navText: "今日就诊人数", id: "2", icon: "", navTextNum: "7000" },
        { navText: "今日预约人数", id: "3", icon: "", navTextNum: "7000" }
      ]
    };
  },
  // props:{
  //   navindex:number
  // },
  methods: {
    topnav(index) {
      this.topnavIndex = index;
    },
    routejudeg() {
      let index = 0;
      this.headerLeftNav.map(v => {
        index++;
        if (this.$route.path === v.to) {
          this.topnavIndex = index - 1;
        }
      });
    }
  },
  mounted() {
    this.routejudeg()
    console.log(this.navindex)
  },
  // watch: {
  //   $route: function() {}
  // }
};
</script>
<style lang="less" scoped>
@theme: #404072;
* {
  box-sizing: border-box;
}
.header {
  width: 100%;
  // height:100%;
}
.el-header {
  // height: 100%;
  min-height: 75px;
  background-color: #f0f0f3;
  text-align: center;
  display: flex;
  border-bottom: 2px solid @theme;
  // 头部
  .header-left {
    flex: 5;
    display: flex;
    a {
      width: 89px;
      margin: 0 12px;
      .header-left-li {
        height: 100%;
        padding: 10px 0;
        i {
          display: inline-block;
          width: 40px;
          height: 40px;
          background-color: @theme;
          border-radius: 50%;
          margin-bottom: 4px;
        }
        p {
          font-size: 16px;
        }
      }
    }
  }
  .header-right {
    flex: 4;
    display: flex;
    .todeyParson {
      flex: 1;
      display: flex;
      justify-content: center;
      min-width: 150px;
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
    font-size: 16px;
    flex: 1;
    display: flex;
    justify-content: center;
    .header-userName {
      display: flex;
      align-items: center;
      // i {
      // }
      // .user-name {
      // }
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
.el-main {
  background-color: #e9eef3;
  color: #333;
  margin: 0;
  height: 91%;
  padding: 0;
}
.action {
  background-color: #d8d8da;
}
</style>

