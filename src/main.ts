import { createApp } from 'vue'
import App from './App.vue'
import elementPlus from './plugins/element-plus'
import router from './router/index'
import pinia from './plugins/pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 加载全局样式
import './styles/index.scss'

const app = createApp(App)
/**引入element中的图标 */
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router).use(pinia).use(elementPlus).mount('#app')