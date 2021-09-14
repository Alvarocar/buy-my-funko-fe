<template>
<main-layout>
  <main v-if="q">
    <product-by-search-list :q="q"/>
  </main>
</main-layout>
</template>
<script>
import { defineComponent, computed } from 'vue'
import titles from '@/constants/titles'
import { useRouter } from 'vue-router'
import ERoutes from '@/constants/ERoutes'
import ProductBySearchList from '@/components/lists/ProductBySearchList.vue'
import MainLayout from '@/layouts/MainLayout.vue'
export default defineComponent({
  name: 'SearchProduct',
  setup() {
    document.title = `${titles.documentTitle} | Search`
    const { push, currentRoute } = useRouter()
    const q = computed(() => currentRoute.value.query.q) 
    if (!q.value) {
      push({ name: ERoutes.HOME })
      return
    }
    return { q }
  },
  components: {
    ProductBySearchList,
    MainLayout,
  },
})
</script>