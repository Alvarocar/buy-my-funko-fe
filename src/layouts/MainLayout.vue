<template>
  <header class="header">
    <div class="header-top">
     <div class="header-top-left">
      <router-link to="/">
        <img src="../assets/funko-logo.png" />
      </router-link>
     </div>
     <div class="header-top-right">
       <div>
        <input type="search"/>
        <button>search</button>
       </div>
       <button>Carrito</button>
     </div>
    </div>
    <nav>
      <ul class="categories">
        <li><router-link to="/">Marvel</router-link></li>
        <li><router-link to="/">DC</router-link></li>
        <li><router-link to="/">Star Wars</router-link></li>
        <li><router-link to="/">Juegos</router-link></li>
        <li><router-link to="/">Anime</router-link></li>
      </ul>
    </nav>
  </header>
  <slot><main></main></slot>
  <footer>&copy; 2021</footer>
</template>

<script>
export default {
  setup() {
    
  },
}
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
    & nav {
      margin: auto 0;
      width: 30rem;
      height: 3rem;
      display: flex;
      width: 100%;
      justify-content: center;
      background-color: #d90b09;
      & .categories {
        display: flex;
        justify-content: space-around;
        list-style: none;
        width: 35rem;
        margin: 0;
        & li {
          height: 100%;
          vertical-align: center;
          & a {
            color: #F2F2F2;
            flex-direction: column;
            display: flex;
            justify-content: center;
            height: 100%;
            padding: 0 1rem;
            text-decoration: none;
            font-weight: 600;
            &:hover{
              transition-duration: .5s;
              background-color: #F0E19E;
              color: #212121;
            }
          }  
        }
      }
    }
  }

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

<style>
  body {
    margin: 0;
    background-color: #F2F2F2;
  }
  #app {
    margin: 0;
    min-height: 100%;
  }
</style>