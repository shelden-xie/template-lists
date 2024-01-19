import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ] as unknown as RouteRecordRaw[]
})

// 根据自身需求处理路由钩子逻辑
router.beforeEach(async (_to, _from, next) => {
  next()
})

router.afterEach((_to) => {
  console.log(_to)
})

export default router
