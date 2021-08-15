<template>
  <main-layout>
    <main>
      <product-list/>
    </main>
  </main-layout>
</template>

<script>
import { defineComponent } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import titles from '@/constants/titles'
import ProductList from '@/components/lists/ProductList.vue'
export default defineComponent({
  name: 'Home',
  setup() {
    document.title = `${titles.documentTitle} | Home`
  },
  components: {
    MainLayout,
    ProductList,
  }
})
</script>

<style lang="scss">
  
</style>