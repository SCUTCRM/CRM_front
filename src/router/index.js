import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Login_beta1 from '@/components/Login_beta1'
import Home from '@/components/Home'
import System from '@/components/System'
import Register from '@/components/Register'
import Loginbeta from '@/components/Loginbeta2'
import Organization from '@/components/Organization'
import Organization_table from '@/components/Organization_table'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/Login_beta1',
            name: 'Login_beta1',
            component: Login_beta1
        },
        {

            path: '/Loginbeta',
            name: 'Loginbeta',
            component: Loginbeta
        },
        {
            path: '/System',
            name: 'System',
            component: System,
            children: [
                {
                    path: '/System/Home',
                    name: 'Home',
                    component: Home
                }
            ]
        },
        {
            path:'/Register',
            name:'Register',
            component:Register
        },
        {
            path:'/System/Organization',
            name:'Organization',
            component:Organization,
            children: [
                {
                    path:'/System/OrganizationTable',
                    name:'Organization_table',
                    component:Organization_table
                }
            ]
        }
    ]
})
