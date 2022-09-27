import { RouteRecordRaw, RouterView } from 'vue-router';
const routes: RouteRecordRaw = {
    path: '/order',
    name: '',
    component: RouterView,
    children: [
        {
            path: 'order_list',
            name: 'order_list',
            component: ()=>import('@/views/order/list/index.vue'),
        },
        {
            path: 'offline',
            name: 'offline',
            component: ()=>import('@/views/order/offline/index.vue'),
        }
    ]
}
export default routes