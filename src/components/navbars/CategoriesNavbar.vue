<template>
    <nav>
        <ul class="categories">
            <li><router-link :to="getCategoryLink(categories.MARVEL)">Marvel</router-link></li>
            <li><router-link :to="getCategoryLink(categories.DC)">DC</router-link></li>
            <li><router-link :to="getCategoryLink(categories.STAR_WARS)">Star Wars</router-link></li>
            <li><router-link :to="getCategoryLink(categories.JUEGOS)">Juegos</router-link></li>
            <li><router-link :to="getCategoryLink(categories.ANIME)">Anime</router-link></li>
        </ul>
    </nav>
</template>
<script>
import ERoutes from '@/constants/ERoutes'
import { ECategoryByProduct } from '@/model/product'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CategoryNavbar',
  data(){
    return {
      categories: ECategoryByProduct
    }
  },
  methods: {
    /**
     * The recive de category name to returns an object to redirect
     * to category page.
     * @param {string} category category name
     * @returns {{name: string, params: { category: string }}} 
     * An Object to redirect to Category page.
     */
    getCategoryLink(category){
      return { name: ERoutes.CATEGORY, params: { category } }
    }
  }
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
