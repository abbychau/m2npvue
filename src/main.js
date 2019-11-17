import Vue from 'vue'
import Antd from 'ant-design-vue'

import App from './App'
import router from './router'
import store from './store'
import FBSignInButton from 'vue-facebook-signin-button'
import 'ant-design-vue/dist/antd.css'
import VueCookies from 'vue-cookies'
import './directives'


Vue.use(VueCookies)
Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(FBSignInButton)
VueCookies.config('7d')

router.beforeEach((to, from, next) => {

  let isLogin = Vue.cookies.isKey('token');
  if (!isLogin) {
      if (to.path !== '/login') {
          return next({path: '/login'});
      }else {
          next();
      }
  }else {
      if (to.path === '/login') {
          return next({path: '/'});
      }
      next();
  }

})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
