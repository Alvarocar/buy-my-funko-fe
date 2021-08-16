<template>
  <slot name="header"><main-header/></slot>
  <slot><main></main></slot>
  <slot name="footer"><main-footer/></slot>
</template>

<script>
import MainHeader from '@/components/topbars/MainHeader.vue'
import MainFooter from '@/components/footers/MainFooter.vue'
export default {
  components: { MainHeader, MainFooter },
  name: 'MainLayout'
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