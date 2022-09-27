import { createApp } from 'vue'
import { createPinia } from 'pinia'
//import piniaPersist from 'pinia-plugin-persist'
import router from './router/index'
import App from './App.vue'
import elementPlus from './plugins/element-plus'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 加载全局样式
import './styles/index.scss'

const pinia = createPinia()
//pinia.use(piniaPersist)

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router).use(pinia).use(elementPlus).mount('#app')