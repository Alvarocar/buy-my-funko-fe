<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top-left">
        <router-link to="/">
          <img src="@/assets/funko-logo.png" />
        </router-link>
      </div>
      <div class="header-top-right">
        <search-input @onSubmit="onSearch"/>
        <button class="cart-button" ><span class="cart-icon"><i class="fas fa-shopping-cart"></i></span></button>
      </div>
    </div>
    <categories-navbar/>
  </header>
</template>
<script>
import CategoriesNavbar from '@/components/navbars/CategoriesNavbar.vue'
import { defineComponent } from 'vue'
import SearchInput from '@/components/forms/SearchInput.vue'

export default defineComponent({
  components: { CategoriesNavbar, SearchInput },
    name: 'MainHeader',
    methods: {
      //Emit
      onSearch(query) {
        this.$emit('onSearch', query)
      }
    }
})
</script>
<style lang="scss" scoped>
  .header {
    padding: 1rem 0 0;
    color: #212121;
    background-color: #FC4442;
    & > .header-top {
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & .header-top-right{
        display: flex;
        justify-content: flex-end;
        gap: 2rem;
        width: 20rem;
        .cart-button {
          padding: 0 .8rem;
          border:none;
          border-radius: 10px;
          background-color: #9CCC65;
          &:hover {
            background-color: #4CAF50;
            transition: .5s;
          }
          .cart-icon {
            color: #fff;
            font-size: 1.5rem;
          }
        }
      }
      .header-top-left {
        width: 10rem;
        & img {
          width: 100%;
          height: auto;
        }
      }
    }
    
  }
</style>
