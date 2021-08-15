<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top-left">
        <router-link to="/">
          <img src="@/assets/funko-logo.png" />
        </router-link>
      </div>
      <div class="header-top-right">
        <div>
          <input type="search" />
          <button>search</button>
        </div>
        <button>Carrito</button>
      </div>
    </div>
    <categories-navbar/>
  </header>
</template>
<script>
import CategoriesNavbar from '@/components/navbars/CategoriesNavbar.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { CategoriesNavbar },
    name: 'MainHeader',
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
        justify-content: space-around;
        width: 20rem;
      }
      .header-top-left {
        width: 12rem;
        & img {
          width: 100%;
          height: auto;
        }
      }
    }
    
  }
</style>
