import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
const modules = import.meta.glob('./module/*.ts',{
    eager: true,
    import: 'default'
});
const routes = Object.values(modules).reduce<RouteRecordRaw[]>((arr, module) => {
    if (Array.isArray(module)) {
      arr.push(...module);
    } else if (module) {
      arr.push(module as RouteRecordRaw);
    }
    return arr;
  }, []);
const router = createRouter({
    history: createWebHistory('/vue3-demo/'),
    routes:routes
})

export default router;