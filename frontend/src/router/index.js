import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '@/components/SignUp.vue'
import LogIn from '@/components/LogIn.vue'
import Dashboard from '@/components/Dashboard.vue'
import DocView from '../views/DocView.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/docview/:id',
    name: 'DocView',
    component: DocView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
