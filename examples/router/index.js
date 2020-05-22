import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('../views/button.vue')
    },
    {
      path: '/testcell',
      name: 'testcell',
      component: () => import('../views/testcell.vue')
    }
  ]
})
