export const routes = [
  {
    path: '/home',
    component: () => import('../pages/Home.vue'),
    alias: '/',
    name: 'Home'
  }
]