<template>
 <footer>&copy; 2021</footer>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name:'MainFooter'
})
</script>
<style lang="scss" scoped>
  footer {
    width: 100%;
    text-align: center;
    padding: 2rem 0;
    background-color: #212121;
    position: relative;
    color: #fff;
    bottom: 0;
  }
</style>
