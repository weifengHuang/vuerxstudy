import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Elevator from '@/components/elevator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/elevator',
      name: 'elevator',
      component: Elevator
    }
  ]
})
