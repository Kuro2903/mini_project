import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '../views/CreateView.vue'
import TodoDetail from '@/views/todoDetail.vue'
import ListView from '@/views/ListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView,
    },
    {
      path: '/todo/:id',
      name: 'todoDetail',
      component: TodoDetail,
    },
    {
      path: '/list',
      name: 'list',
      component: ListView,
    },
  ],
})

export default router
