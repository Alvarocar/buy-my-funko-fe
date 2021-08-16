<template>
    <div class="card">
        <router-link to="/">
            <img :src="product.image" />
            <figcaption>
                <p class="title">{{ product.title }}</p>
                <span class="price">$ {{ product.price }}</span>
            </figcaption>
        </router-link>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CardProduct',
    props: {
      /**
      * typedef {Object} product
      * property {string} title The title or name of the product.
      * property {string} price The price of the product.
      * property {string} image The url image of the product.
      * property {number} id The id of the product.
      * property {string} category The product category.
      */
      product: {
        required: true,
        type: Object,
      },
    },
})
</script>
<style lang="scss" scoped>
.card {
    background-color: #fff;
    padding: 0 0 2rem;
    border-radius: 10px;
    box-shadow: 2px 0px 10px #9e9e9e;
    & img {
        width: 100%;
        height: auto;
        border-radius: 10px 10px 0 0;
    }
    & a {
        text-decoration: none;
        color: #212121;
        &:hover {
            opacity: 0.8;
        }
    }
    & .title {
        opacity: 0.7;
        font-size: 0.85rem;
    }
    & .price {
        font-weight: bolder;
        font-size: 1.2rem;
    }
}
</style>
