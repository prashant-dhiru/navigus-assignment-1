import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '@/components/Dashboard.vue'
import DocView from '../views/DocView.vue'
import NotAuth from '@/components/NotAuth.vue'
import PageNotFound from '@/components/PageNotFound.vue'
import store from "../store/index.js"

Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/docview/:id',
    name: 'DocView',
    component: DocView,
    beforeEnter: (to,from,next)=>{
      if(to.params.id != '1' && to.params.id != '2')
        next('/pagenotfound')
      else if (to.params.id == 2 && store.state.user.data.emailVerified == false)
        next('/notauth')
      else if(store.state.user.loggedIn === false)
        next('/notauth')
      else next()
    }
  },
  {
    path: '/notauth',
    name: 'NotAuth',
    component: NotAuth
  },
  {
    path: '/pagenotfound',
    name: 'PageNotFound',
    component: PageNotFound
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
