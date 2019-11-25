import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Messenger from './views/Messenger.vue'
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
      path: '/messenger',
      name: 'messenger',
      component: Messenger
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
