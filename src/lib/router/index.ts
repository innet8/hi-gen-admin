import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
import {type App} from 'vue'
import createRouteGuard from "./guard"

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export async function setupRouter(app: App) {
    app.use(router)
    // 路由准备就绪后挂载APP实例
    await router.isReady()
}

createRouteGuard(router)

export default router
