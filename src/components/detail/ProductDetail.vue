<template>
  <div class="content">
    <h1>Funciona</h1>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
    name: 'ProductDetail',
    props: {
      /**
      * typedef {string} id
      */
      id: {
        required: true,
        type: String,
      },
    },
    setup(props){

      const { dispatch } = useStore('product') 
      const fetchProductDetail = (id) => dispatch('getProductById', id)

      onMounted(() =>{fetchProductDetail(props.id)})
    }
  
  
})
</script>

<style lang="scss" scoped>
.content {
    background-color: red;
}
</style>
