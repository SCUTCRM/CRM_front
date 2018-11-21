import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import System from '@/components/System'
import Register from'@/components/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/System',
      name:'System',
      component:System,
      children:[
        {
          path:'/Home',
          name:'Home',
          component:Home
        }
      ]
    },
      {
        path:'/Register',
        name:'Register',
        component:Register
      }
  ]
})
