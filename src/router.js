import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Header from '@/views/Header.vue'
import StatisticAnalysis from '@/views/homePage/statisticAnalysis.vue'

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
            }
          ]
        }
      ]
    }
  ]
})
