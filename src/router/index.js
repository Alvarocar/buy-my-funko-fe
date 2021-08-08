import { createRouter, createWebHistory } from "vue-router";
import { routes } from '@/router/routes'
export default createRouter({
  history: createWebHistory('/buy-my-funko-fe/'),
  routes,
})