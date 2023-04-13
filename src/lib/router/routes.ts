import { RouteRecordRaw } from 'vue-router'

import Login from '@/views/Login/index.vue'
const Users = () => import('@/views/Users/index.vue')
const Settings = () => import('@/views/Settings/index.vue')
const SettingsGeneral = () => import('@/views/Settings/children/General.vue')
const SettingsUserManage = () => import('@/views/Settings/children/UserManagement.vue')

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        component: Login,
        meta: {
            useLayout: false,
        }
    },
    {
        path: '/users',
        component: Users,
        meta: {
            useLayout: true,
        }
    },
    {
        path: '/settings',
        component: Settings,
        meta: {
            useLayout: true,
        },
        redirect: '/settings/general',
        children: [
            {
                path: '/settings/general',
                component: SettingsGeneral
            },
            {
                path: '/settings/user',
                component: SettingsUserManage
            }
        ]
    },
    // { path: '/about', component: About },
]
