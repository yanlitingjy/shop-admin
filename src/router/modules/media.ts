import { RouteRecordRaw, RouterView } from 'vue-router';
const routes: RouteRecordRaw = {
    path: '/media',
    name: '',
    component: RouterView,
    children: [
        {
            path: 'media_list',
            name: 'media_list',
            component: ()=>import('@/views/order/media/index.vue'),
        }
    ]
}
export default routes