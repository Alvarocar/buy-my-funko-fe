<template>
    <div class="content">
      <article :key="product.id" v-for="product in products">
        <card-products :product="product"/>
      </article>
    </div>
</template>
<script>

import { defineComponent} from 'vue'
import { mapActions, mapState} from 'vuex'
import CardProducts from '@/components/cards/CardProducts.vue'
export default defineComponent({
  components: { CardProducts },
   name:'ProductList',
       mounted(){
    this.getProducts(0)
  },
  methods:{
    ...mapActions ('product',[
      'getProducts'
    ])
  },
   computed: {
     ...mapState('product',{ 
       products:(state)=> state.products
     })
   }
})
</script>
<style lang="scss" scoped>
  .content {
    min-height: 50vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax( 15rem, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(20rem, 1fr));
    column-gap: 1rem;
    row-gap: 1rem;
    padding: 1rem;
  }
</style>
