import Vue from 'vue'
import Router from 'vue-router'
import Timeline from './views/Timeline/Main.vue'
import Login from './views/Login.vue'
import Messenger from './views/Messenger.vue'
import FbCallback from './views/FbCallback.vue'
import Settings from './views/Settings.vue'
import MyDay from './views/MyDay.vue'
import About from './views/About.vue'
Vue.use(Router)

let router = new Router({
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
      name: 'timeline',
      component: Timeline
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
router.beforeEach((to, from, next) => {
  //TODO: finish Auth
  let isLogin = Vue.cookies.isKey('token');
  if (!isLogin) {
    if (to.path !== '/login') {
      return next({ path: '/login' });
    } else {
      next();
    }
  } else {
    if (to.path === '/login') {
      return next({ path: '/' });
    }
    next();
  }

})
export default router
