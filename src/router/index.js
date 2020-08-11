import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 1. use, VueRouter是一个插件
Vue.use(VueRouter)
// 2. 生命一个路由表
  const routes = [ // url和组件的映射表
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
// 创建一个router实例
const router = new VueRouter({
  routes
})

export default router
