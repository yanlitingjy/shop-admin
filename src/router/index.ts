import { createRouter,createWebHashHistory,RouteRecordRaw } from 'vue-router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import AppLayout from '@/layout/appLayout.vue'
import productRoutes from './modules/product'
import orderRoute from './modules/order'
import mediaRoute from './modules/media'
import permissionRoute from './modules/permission'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component:AppLayout,
        children: [
            {
                path:'',
                name: 'home',
                component: ()=>import('../views/home/index.vue'),
                meta: {
                    title:'首页'
                }
            },
            productRoutes,
            orderRoute,
            mediaRoute,
            permissionRoute
        ]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(() => {
    nprogress.start()
})

router.afterEach(() => {
    nprogress.done()
})

export default router