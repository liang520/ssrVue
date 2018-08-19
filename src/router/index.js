import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'

Vue.use(Router);


export function CreateRouter(){
  return new Router({
    mode:"history",
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },{
        path:'/hi',
        name:"hi",
        component:Hi
      }
    ]
  })
}