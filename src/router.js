import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/shiba',
      name: 'shiba',
      component: () => import ('./container/shibaContainer.vue')
    }, {
      path: '/cate',
      name: 'cate',
      component: () => import ('./container/cateContainer.vue')
    }
  ]
})
