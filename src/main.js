import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
import './directives'
import Lightbox from 'vue-easy-lightbox'

Vue.use(Lightbox)
Vue.use(VueCookies)
Vue.mixin({
  methods: {
    trimToDots(str, len) {
      return str.length > len ? str.substring(0, len) + '...' : str;
    }
  }
})
Vue.config.productionTip = false
VueCookies.config('7d')

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
