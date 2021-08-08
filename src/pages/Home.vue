<template>
  <main-layout >
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
export default defineComponent({
  name: 'Home',
  setup() {
    document.title = `${titles.documentTitle} | Home`
  },
  components: {
    MainLayout,
  }
})
</script>

<style lang="scss">
  .content {
    min-height: 100vh;
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