import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import ChatDashBoard from './views/ChatDashBoard.vue'

Vue.use(Router)

export default new router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatDashBoard,
    }
  ]
})

export default router
