<template>
  <main-layout>
    <main class="container">
      <product-detail :id="id"/>
    </main>
  </main-layout>
</template>
<script>
import ProductDetail from '@/components/detail/ProductDetail.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { computed, defineComponent} from 'vue'
import { useRouter } from 'vue-router'
/**
 * The page show the detail of the product that was selected
 */
export default defineComponent({
  components: { MainLayout, ProductDetail },
  setup(){
    const { currentRoute } = useRouter()
    const id = computed(() => currentRoute.value.params.id)
    return { id }
  }
})
</script>
<style lang="scss" scoped>
  .container{
    position: relative;
  }
</style>