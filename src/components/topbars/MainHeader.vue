<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top-left">
        <router-link to="/">
          <img src="@/assets/funko-logo.png" />
        </router-link>
      </div>
      <div class="col">
        <div class="header-top-right">
          <button class="register-button" @click="register">
            <span class="door-icon"><i class="fas fa-door-open"></i></span>Registrar
          </button>

          <button class="register-button" @click="register">
            <span class="door-icon"><i class="fas fa-sign-in-alt"></i></span>Ingresar
          </button>
        </div>
        <div class="header-top-right">
          <search-input @onSubmit="onSearch"/>
          <button class="cart-button" ><span class="cart-icon"><i class="fas fa-shopping-cart"></i></span></button>
        </div>
      </div>
    </div>
    <categories-navbar/>
  </header>
</template>
<script>
import CategoriesNavbar from '@/components/navbars/CategoriesNavbar.vue'
import { defineComponent } from 'vue'
import SearchInput from '@/components/forms/SearchInput.vue'
import ERoutes from '@/constants/ERoutes';

export default defineComponent({
  components: { CategoriesNavbar, SearchInput },
    name: 'MainHeader',
    methods: {
      //Emit
      onSearch(query) {
        this.$emit('onSearch', query)
      },
      /**
      * Sent to register page 
      */
      register() {
        this.$router.push({ name: ERoutes.SIGN_UP })
    }
    }
})
</script>
<style lang="scss" scoped>
  .register-button{
          border:none;
          border-radius: 10px;
          background-color: #FC4442;
          color: #FFE6E6;
          font-weight: bold;
          font-size: 1.1rem;
        &:hover {
        text-decoration: underline;
        transition: .5s;
      }
        .door-icon {
          color: #FFE6E6;
          padding: 0 .2rem;
      }
   }
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
        gap: 2rem;
        display: flex;
        justify-content: flex-end;
        width: 20rem;
        margin-top: 5%;
        margin-bottom: 5%;
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
