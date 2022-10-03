import { createPinia } from 'pinia'
// 引入持久化插件
import piniaPluginPersist from 'pinia-plugin-persist'
const pinia = createPinia()
// 使用该插件
pinia.use(piniaPluginPersist)

//导出
export default pinia