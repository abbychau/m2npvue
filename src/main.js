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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
