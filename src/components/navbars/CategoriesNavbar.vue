<template>
    <nav>
        <ul class="categories">
            <li><router-link to="/">Marvel</router-link></li>
            <li><router-link to="/">DC</router-link></li>
            <li><router-link to="/">Star Wars</router-link></li>
            <li><router-link to="/">Juegos</router-link></li>
            <li><router-link to="/">Anime</router-link></li>
        </ul>
    </nav>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CategoryNavbar',
})
</script>
<style lang="scss" scoped>
nav {
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
              color: #f2f2f2;
              flex-direction: column;
              display: flex;
              justify-content: center;
              height: 100%;
              padding: 0 1rem;
              text-decoration: none;
              font-weight: 600;
              &:hover {
                  transition-duration: 0.5s;
                  background-color: #f0e19e;
                  color: #212121;
              }
          }
      }
  }
}
</style>
