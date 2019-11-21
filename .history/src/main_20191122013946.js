import Vue from 'vue'
import BootStrapVue from 'bootstrap-vue'
import VueChatScroll from 'vue-chat-scroll'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
