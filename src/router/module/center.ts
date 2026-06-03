import type { RouteRecordRaw } from "vue-router";
// import center from '@/views/Center.vue'
import { defineAsyncComponent } from "vue";
const center = defineAsyncComponent(()=> import('@/views/Center.vue'));
const centerRoute: RouteRecordRaw[] = [
    {
        path: '/center',
        name: 'center',
        component: center,
        meta:{
            title: '个人中心'
        }
    }
]
export default centerRoute;