import { RouteRecordRaw } from 'vue-router'

import Login from '@/views/Login/index.vue'
const Users = () => import('@/views/Users/index.vue')

export const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/users', component: Users },
    // { path: '/about', component: About },
]
