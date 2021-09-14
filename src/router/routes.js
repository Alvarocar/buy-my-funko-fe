import { validateCategoryType } from '@/util/category'
import ERoutes from '@/constants/ERoutes'

export const routes = [
  {
    path: '/home',
    component: () => import('@/pages/Home.vue'),
    alias: '/',
    name: ERoutes.HOME
  },
  {
    path: '/category/:category',
    component: () => import('@/pages/Category.vue'),
    name: ERoutes.CATEGORY,
    beforeEnter: (to, from, next) => {
      const result = validateCategoryType(to.params.category)
      if (!result) {
        next({ name: ERoutes.HOME })
      }
      next()
    }
  },
  {
    path: '/search',
    component: () => import('@/pages/SearchProducts.vue'),
    name: ERoutes.SEARCH_PRODUCTS
  }
]