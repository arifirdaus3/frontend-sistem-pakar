import Vue from 'vue'
import VueRouter from 'vue-router'
import CheckUp from '../views/Check Up.vue'
import About from '../views/About.vue'
import Hasil from '../views/Hasil.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/checkup',
    name: 'Check Up',
    component: CheckUp,
  },
  {
    path: '/hasil',
    name: 'Hasil',
    component: Hasil
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
