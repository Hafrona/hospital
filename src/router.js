import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Header from '@/views/Header.vue'
import StatisticAnalysis from '@/views/homePage/statisticAnalysis.vue'
import Record from '@/views/homePage/record.vue'
import Notice from '@/views/homePage/notice.vue'
import Userfile from '@/views/homePage/userfile.vue'
import Setting from '@/views/homePage/setting.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      redirect: {path:"/home/header/statisticAnalysis"},
      children: [
        {
          path: 'header',
          name: 'header',
          component: Header,
          children: [
            {
              path: "statisticAnalysis",
              name: "statisticAnalysis",
              component: StatisticAnalysis
            },
            {
              path: "record",
              name: "record",
              component: Record
            },
            {
              path: "notice",
              name: "notice",
              component: Notice
            },
            {
              path: "userfile",
              name: "userfile",
              component: Userfile
            },
            {
              path: "setting",
              name: "setting",
              component: Setting
            },
          ]
        }
      ]
    }
  ]
})
