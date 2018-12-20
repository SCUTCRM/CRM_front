import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/common/Home'
import System from '@/components/System/System'
import Register from '@/components/Register'
import Organization from '@/components/System/Organization'
import Organization_table from '@/components/System/Organization_table'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path:'/Register',
            name:'Register',
            component:Register
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
                    path:'/System/Organization/OrganizationTable',
                    name:'Organization_table',
                    component:Organization_table
                }
            ]
        },
        {
            path:'/System/OrganizationTable',
            name:'Organization_table',
            component:Organization_table
        }
    ]
})
