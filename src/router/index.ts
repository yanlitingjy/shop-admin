import { createRouter,createWebHashHistory,RouteRecordRaw } from 'vue-router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import AppLayout from '@/layout/appLayout.vue'
import productRoutes from './modules/product'
import orderRoute from './modules/order'
import mediaRoute from './modules/media'
import permissionRoute from './modules/permission'

import pinia from '@/plugins/pinia'
import { useUserInfoStore } from "@/store";
const routes: RouteRecordRaw[] = [
    {
        path:'/login',
        component:()=>import('../views/login/index.vue'),
        name:'login',
        meta:{
            title:'登陆'
        }
    },
    {
        path: '/',
        meta: {
            requiresAuth: true
        },
        component:AppLayout,
        children: [
            {
                path:'home',
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
console.log(routes)
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to,form) => {
    nprogress.start()
    const userStore = useUserInfoStore(pinia)
    console.log(userStore)
    if (to.meta.requiresAuth && !userStore.userInfo) {
        // 此路由需要授权，请检查是否已登录
        // 如果没有，则重定向到登录页面
        return {
            path: '/login',
            // 保存我们所在的位置，以便以后再来
            query: { redirect: to.fullPath }
        }
    }
})

router.afterEach(() => {
    nprogress.done()
})

export default router