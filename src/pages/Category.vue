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
import { ECategoryByProduct } from '@/model/product'
import { computed, defineComponent, onBeforeMount, watch } from 'vue'
import { useRouter } from 'vue-router'

/**
 * The page show a product list by category
 */
export default defineComponent({
  components: { MainLayout, ProductByCategoryList },
  setup() {
    const { currentRoute, push  } = useRouter()
    const category = computed(() => currentRoute.value.params.category)


    /**
     * The function validate if category name is in ECategoryByPropduct.
     * If the validate fail, then returns undefined.
     * @param {string | string[]} category category name
     * @returns {string | undefined} category name 
     */
    const validateRoute = (category) => {
      const [ result ] = Object.values(ECategoryByProduct).filter( value => category === value)
      return result
    }

    onBeforeMount(() => {
      const result = validateRoute(category.value)
      if(!result) {
        push({name: ERoutes.HOME})
        return
      }
      document.title = `${titles.documentTitle} | ${result.toUpperCase()}`
    })

   /**
   * watchs the value of the currentRoute and valid if the category name matches with
   * the ECategoryByProduct, if doesn't, then the watch will redirects to Home page.
   */
    watch(() => currentRoute.value, val => {
      const category = val.params.category
      const result = validateRoute(category)
      if(!result) {
        push({name: ERoutes.HOME})
        return
      }
      document.title = `${titles.documentTitle} | ${result.toUpperCase()}`
    })

    return { category }
  },
})
</script>
