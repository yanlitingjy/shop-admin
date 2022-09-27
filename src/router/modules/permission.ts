import { RouteRecordRaw, RouterView } from 'vue-router';
const routes: RouteRecordRaw = {
    path: '/permission',
    name: 'permission',
    component: RouterView,
    children: [{
        path: 'permission_list',
        name: 'permission_list',
        component: ()=>import('@/views/permission/index.vue'),
    }]
}


export default routes