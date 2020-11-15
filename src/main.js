import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.devtools = true
Vue.config.productionTip = false

var vm = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})

vm()
