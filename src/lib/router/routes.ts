import { RouteRecordRaw } from 'vue-router'
import Login from '@/views/Login/index.vue'
const Users = () => import('@/views/Users/index.vue')
const Node = () => import('@/views/Node/index.vue')
const Network = () => import('@/views/Network/index.vue')
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
        path: '/Node',
        component: Node,
        meta: {
            useLayout: true,
        }
    },
    {
        path: '/Network',
        component: Network,
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
