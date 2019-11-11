import Vue from 'vue'
import Antd from 'ant-design-vue'

import App from './App'
import router from './router'
import store from './store'
import FBSignInButton from 'vue-facebook-signin-button'
import 'ant-design-vue/dist/antd.css'

import './directives'

Vue.config.productionTip = false
Vue.use(Antd)

Vue.use(FBSignInButton)


var Auth = {
  loggedIn: false,
  login: function() { this.loggedIn = true },
  logout: function() { this.loggedIn = false }  
};

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !Auth.loggedIn) {
    next({ path: '/login', query: { redirect: to.fullPath }});
  }else if (to.matched.some(record => record.meta.loggedInThenRedirect) && Auth.loggedIn) {
    next({ path: record.meta.loggedInThenRedirect });
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
