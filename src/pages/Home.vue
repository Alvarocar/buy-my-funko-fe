<template>
  <main-layout>
    <main class="content">
      <article class="card">
        <router-link to="/">
          <img src="https://cdn.shopify.com/s/files/1/1837/4461/products/Funko-POP-Thor-vs-Thanos-707-Avengers-Infinity-War-Marvel-Colombia-Funatic-Store_1024x1024.jpg?v=1551408285"/>
          <figcaption>
            <p class="title">FUNKO POP THOR VS THANOS 707</p>
            <span class="price">$149.000</span>
          </figcaption>
        </router-link>
      </article>
      <article class="card">
        <router-link to="/">
          <img src="https://cdn.shopify.com/s/files/1/1837/4461/products/Funko-POP-Thor-vs-Thanos-707-Avengers-Infinity-War-Marvel-Colombia-Funatic-Store_1024x1024.jpg?v=1551408285"/>
          <figcaption>
            <p class="title">FUNKO POP THOR VS THANOS 707</p>
            <span class="price">$149.000</span>
          </figcaption>
        </router-link>
      </article>
      <article class="card">
        <router-link to="/">
          <img src="https://cdn.shopify.com/s/files/1/1837/4461/products/Funko-POP-Thor-vs-Thanos-707-Avengers-Infinity-War-Marvel-Colombia-Funatic-Store_1024x1024.jpg?v=1551408285"/>
          <figcaption>
            <p class="title">FUNKO POP THOR VS THANOS 707</p>
            <span class="price">$149.000</span>
          </figcaption>
        </router-link>
      </article>
      <article class="card">
        <router-link to="/">
          <img src="https://cdn.shopify.com/s/files/1/1837/4461/products/Funko-POP-Thor-vs-Thanos-707-Avengers-Infinity-War-Marvel-Colombia-Funatic-Store_1024x1024.jpg?v=1551408285"/>
          <figcaption>
            <p class="title">FUNKO POP THOR VS THANOS 707</p>
            <span class="price">$149.000</span>
          </figcaption>
        </router-link>
      </article>
      <article class="card">
        <router-link to="/">
          <img src="https://cdn.shopify.com/s/files/1/1837/4461/products/Funko-POP-Thor-vs-Thanos-707-Avengers-Infinity-War-Marvel-Colombia-Funatic-Store_1024x1024.jpg?v=1551408285"/>
          <figcaption>
            <p class="title">FUNKO POP THOR VS THANOS 707</p>
            <span class="price">$149.000</span>
          </figcaption>
        </router-link>
      </article>
      <article class="card">
        <router-link to="/">
          <img src="https://cdn.shopify.com/s/files/1/1837/4461/products/Funko-POP-Thor-vs-Thanos-707-Avengers-Infinity-War-Marvel-Colombia-Funatic-Store_1024x1024.jpg?v=1551408285"/>
          <figcaption>
            <p class="title">FUNKO POP THOR VS THANOS 707</p>
            <span class="price">$149.000</span>
          </figcaption>
        </router-link>
      </article>
      <article class="card">
        <router-link to="/">
          <img src="https://cdn.shopify.com/s/files/1/1837/4461/products/Funko-POP-Thor-vs-Thanos-707-Avengers-Infinity-War-Marvel-Colombia-Funatic-Store_1024x1024.jpg?v=1551408285"/>
          <figcaption>
            <p class="title">FUNKO POP THOR VS THANOS 707</p>
            <span class="price">$149.000</span>
          </figcaption>
        </router-link>
      </article>
      <article class="card">
        <router-link to="/">
          <img src="https://cdn.shopify.com/s/files/1/1837/4461/products/Funko-POP-Thor-vs-Thanos-707-Avengers-Infinity-War-Marvel-Colombia-Funatic-Store_1024x1024.jpg?v=1551408285"/>
          <figcaption>
            <p class="title">FUNKO POP THOR VS THANOS 707</p>
            <span class="price">$149.000</span>
          </figcaption>
        </router-link>
      </article>
      <article class="card">
        <router-link to="/">
          <img src="https://cdn.shopify.com/s/files/1/1837/4461/products/Funko-POP-Thor-vs-Thanos-707-Avengers-Infinity-War-Marvel-Colombia-Funatic-Store_1024x1024.jpg?v=1551408285"/>
          <figcaption>
            <p class="title">FUNKO POP THOR VS THANOS 707</p>
            <span class="price">$149.000</span>
          </figcaption>
        </router-link>
      </article>
    </main>
  </main-layout>
</template>

<script>
import { defineComponent } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import titles from '@/constants/titles'
import ProductList from '@/components/lists/ProductList.vue'
export default defineComponent({
  name: 'Home',
  setup() {
    document.title = `${titles.documentTitle} | Home`
  },
  components: {
    MainLayout,
    ProductList,
  }
})
</script>

<style lang="scss">
  
</style>