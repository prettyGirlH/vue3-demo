import type { RouteRecordRaw } from "vue-router";
// import index from '@/views/Index.vue'
import { defineAsyncComponent } from "vue";
const index = defineAsyncComponent(()=> import('@/views/Index.vue'));
const indexRoute: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/index',
    },
    {
        path: '/index',
        name: 'index',
        component: index,
        meta: {
            title:'首页'
        }
    }

]
export default indexRoute;