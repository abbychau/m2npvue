import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import AfterLogin from './views/AfterLogin.vue'
import FbCallback from './views/FbCallback.vue'
import Settings from './views/Settings.vue'
import MyDay from './views/MyDay.vue'
import About from './views/About.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/myday',
      name: 'myday',
      component: MyDay
    },
    {
      path: '/',
      name: 'landing',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login

    },
    {
      path: '/timeline',
      name: 'timeline',
      component: AfterLogin
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login/facebook/callback',
      name: 'callback',
      component: FbCallback
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    }
  ]
})
