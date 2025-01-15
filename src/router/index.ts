import { createRouter, createWebHistory } from 'vue-router'
import DashBoardView from '../views/DashBoard.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashBoardView
    },
  ],
})

// 路由守卫
router.beforeEach((to, from, next) => {
  console.log('Navigating to:', to.path); // 添加日志
  next();  // 确保调用 next()，让路由继续
});

export default router
