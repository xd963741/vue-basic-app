import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import NotifyView from '../views/NotifyView.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  { path: '/notify', component: NotifyView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
