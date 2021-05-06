
import {
    createRouter, 
    createWebHistory
 } from 'vue-router'
 import welcome from '../components/welcome.vue'

const routes = [
    {
        path:'/',
        name:'welcome',
        component:welcome
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes:routes,
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }
    }
  })

//   const router = new VueRouter({
//     Routes // short for `routes: routes`
//   })

export default router