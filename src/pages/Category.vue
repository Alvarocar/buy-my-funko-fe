<template>
  <main-layout>
    <main>
      <product-by-category-list :category="category" />
    </main>
  </main-layout>
</template>
<script>
import ProductByCategoryList from '@/components/lists/ProductByCategoryList.vue'
import titles from '@/constants/titles'
import ERoutes from '@/constants/ERoutes'
import MainLayout from '@/layouts/MainLayout.vue'
import { onBeforeRouteUpdate } from 'vue-router'
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { validateCategoryType } from '@/util/category'

/**
 * The page show a product list by category
 */
export default defineComponent({
  components: { MainLayout, ProductByCategoryList },
  setup() {
    const { currentRoute } = useRouter()
    const category = computed(() => currentRoute.value.params.category)
    document.title = `${titles.documentTitle} | ${category.value}`

    onBeforeRouteUpdate(( from, to, next ) => {
      if ( to.name !== ERoutes.CATEGORY )
        return
      const result = validateCategoryType(to.params.category)
      if (!result) {
        next({ name: ERoutes.HOME })
        return
      }
      document.title = `${titles.documentTitle} | ${to.params.category}`
      next()
    })

    return { category }
  },
})
</script>
