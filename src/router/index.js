
import {
    createRouter, 
    createWebHistory
 } from 'vue-router'
 import welcome from '../components/welcome.vue'
 import chat from '../components/chat.vue'

const routes = [
    {
        path:'/',
        name:'welcome',
        component:welcome
    },
    {
        path:'/chat',
        name:'chat',
        component:chat,
        props:true,
        // to accept props as parameters when we redirect to this routes 
        beforeEnter:(to,from,next)=>{
          //before this route is entered or before this component is loaded
          // console.log(to.params.name)
          //fire before the chat component is loaded,
          //and it is going to look for this param and if there is a name prop on it
          if(to.params.name){
            next( )
          }else{
            next({name:'welcome'})
          }
        }
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