import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { setupRouter } from '@/lib/router'
import microApp from '@micro-zoe/micro-app'

microApp.start()

const app = createApp(App)

async function setupApp() {
    // 挂载vuex状态管理
    app.use(createPinia())
    // 挂载路由
    await setupRouter(app)
    // 挂载
    app.mount('#app')
}

setupApp().then(r => {}).catch(e => {
    console.log('Error on application setup: ', e)
})
