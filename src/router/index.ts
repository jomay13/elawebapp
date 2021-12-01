import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/Login.vue'

import Home from '@/views/main/Home.vue'
import About from '@/views/main/About.vue'
import Ela from '@/views/main/forms/Ela.vue'
import Add from '@/views/main/forms/Add.vue'
import Edit from '@/views/main/forms/Edit.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'Login',
    component: Login,
    props:true,
  },
  // {
  //   path: '/Showlogs',
  //   name: '/Showlogs',
  //   component: Showlogs
  // },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children:[
      {
        path: '/Home/Ela',
        name: 'Ela',
        component: Ela,
        props:true
      }, 
      {
        path: '/Home/Ela/Add',
        name: 'Add',
        component: Add,
        props:true
      },
      {
        path: '/Home/Ela/Edit',
        name: 'Edit',
        component: Edit,
        props:true
      },
    
    ]
  }
  , 
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
