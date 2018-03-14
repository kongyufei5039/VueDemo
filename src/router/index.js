import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index'
import DetailPage from '../pages/detail'
import Analysis from '../pages/detail/analysis'
import Count from '../pages/detail/count'
import Forecast from '../pages/detail/forecast'
import Publish from '../pages/detail/publish'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailPage,
      redirect: 'detail/analysis',
      children: [
        {
          path: 'analysis',
          name: 'analysis',
          component: Analysis
        },
        {
          path: 'count',
          name: 'count',
          component: Count
        },
        {
          path: 'forecast',
          name: 'forecast',
          component: Forecast
        },
        {
          path: 'publish',
          name: 'publish',
          component: Publish
        }
      ]
    }
  ]
})
