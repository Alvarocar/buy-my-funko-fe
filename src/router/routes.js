export const routes = [
  {
    path: '/home',
    component: () => import('@/pages/Home.vue'),
    alias: '/',
    name: 'Home'
  },
  {
    path: '/category/:category',
    component: () => import('@/pages/Category.vue'),
    name: 'Category'
  },
  {
    path: '/product/:id',
    component: () => import('@/pages/Product.vue'),
    name: 'Product'
  }
]