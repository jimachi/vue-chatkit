import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import ChatDashBoard from './views/ChatDashBoard.vue'

Vue.use(Router)

export default new router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  
})

export default router
