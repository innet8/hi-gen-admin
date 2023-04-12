import type {NavigationGuardNext, RouteLocationNormalized, Router} from 'vue-router'

/**
 * 允许不登录的页面，已登录者访问会被重定向
 * */
const notLoginPath = ['/login', '/register']

async function beforeRouter(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
) {
    return next()
}

function setupPageGuard(context: Router) {
    context.beforeEach(beforeRouter)

    context.afterEach(async (to, from) => {
        // Do something
    })

// 路由跳转错误
    context.onError((error) => {
        console.log(error)
    })
}

export default function createRouteGuard(ctx: Router) {
    setupPageGuard(ctx)
}
