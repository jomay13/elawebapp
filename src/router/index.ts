import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/Login.vue'

import Home from '@/views/main/Home.vue'
import Showlogs from '@/views/main/forms/Showlogs.vue'
import Addnewela from '@/views/main/forms/Addnewela.vue'
import Editela from '@/views/main/forms/Editela.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  // {
  //   path: '/Showlogs',
  //   name: '/Showlogs',
  //   component: Showlogs
  // },
 

  {
    path: '/home',
    name: 'Home',
    props:true,
    component: Home,
    children:[
      {
        path: '/Showlogs',
        name: 'Showlogs',
        component: Showlogs
      }, {
        path: '/Addnew',
        name: 'Addnew',
        component: Addnewela
      }, {
        path: '/Editela',
        name: 'Editela',
        component: Editela
      },
    ]

  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
