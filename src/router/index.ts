import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
const modules = import.meta.glob('./module/*.ts',{
    eager: true,
    import: 'default'
});
const routes = Object.values(modules).reduce<RouteRecordRaw[]>((acc, module) => {
    if (Array.isArray(module)) {
      acc.push(...module);
    } else if (module) {
      acc.push(module as RouteRecordRaw);
    }
    return acc;
  }, []);
const router = createRouter({
    history: createWebHistory('/vue3-demo/'),
    routes:routes
})

export default router;