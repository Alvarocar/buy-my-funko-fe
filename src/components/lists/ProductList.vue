<template>
    <div class="content" :key="product.id" v-for="product in products">
      <article class="card">
        <router-link to="/">
          <img :src="product.image"/>
          <figcaption>
            <p class="title">{{product.title}}</p>
            <span class="price">$ {{product.price}}</span>
          </figcaption>
        </router-link>
      </article>
    </div>
</template>
<script>
import { defineComponent, onMounted } from 'vue'
import { mapActions, mapState, useStore } from 'vuex'

export default defineComponent({
   name:'ProductList',
  setup(){
    const {state} = useStore() 
    console.log(state)
    // /**
    //  * @param {number} page
    //  */
    // const fetchProducts = (page)=>{
    //   dispatch('product/getProducts', page)
    // }
    // onMounted(()=>{fetchProducts(0),
    // console.log('mountedddd');
    // }
    // )
  },
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
       products:(state)=> state.product.products
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

  .card {
    background-color: #fff;
    padding: 0 0 2rem;
    border-radius: 10px;
    box-shadow: 2px 0px 10px #9E9E9E;
    & img {
      width: 100%;
      height: auto;
      border-radius: 10px 10px 0 0;
    }
    & a {
      text-decoration: none;
      color: #212121;
      &:hover {
        opacity: .8;
      }
    }
    & .title {
      opacity: .7;
      font-size: .85rem;
    }
    & .price {
      font-weight: bolder;
      font-size: 1.2rem;
    }
  }
</style>
