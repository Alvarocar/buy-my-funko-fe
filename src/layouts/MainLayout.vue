<template>
  <slot name="header"><main-header @onSearch="search"/></slot>
  <slot><main></main></slot>
  <slot name="footer"><main-footer/></slot>
</template>

<script>
import MainHeader from '@/components/topbars/MainHeader.vue'
import MainFooter from '@/components/footers/MainFooter.vue'
import ERoutes from '@/constants/ERoutes'
export default {
  components: { MainHeader, MainFooter },
  name: 'MainLayout',
  methods: {
    /**
     * 
     * @param {string} q
     */
    search(q) {
      this.$router.push({ name: ERoutes.SEARCH_PRODUCTS, query: { q } })
    }
  }
}
</script>

<style lang="scss" scopped>
  body {
    margin: 0;
    background-color: #F2F2F2;
  }
  #app {
    margin: 0;
    min-height: 100%;
  }
</style>