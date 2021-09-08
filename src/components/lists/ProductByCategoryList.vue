<template>
  <div class="content">
    <article :key="product.id" v-for="product in products">
        <card-products :product="product"/>
    </article>
  </div>
  <el-pagination
    :page-count="pageCount"
    layout="prev, pager, next"
    class="pagination"
    @current-change="changePage"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions, mapState } from 'vuex'
import CardProducts from '../cards/CardProducts.vue'

export default defineComponent({
  components: { CardProducts },
  props: {
    category: {
      required: true,
      type: String
    }
  },
  /**
   * When the component is mounted the a getProductByCategory action
   * is executed.
   */
  mounted() {
    this.getProductsByCategory({category: this.category, page: 0})
  },
  watch: {
    /**
     * When category prop change then getProductByCategory action
     * is dispached.
     */
    category() {
      this.getProductsByCategory({category: this.category, page: 0})
    }
  },
  methods: {
    ...mapActions('product', [
      'getProductsByCategory'
    ]),
    /**
     * The method send getProductsByCategory action to
     * products module in the store.
     * @param {number} page
     * @returns {void}
     */
    changePage(page) {
      this.getProductsByCategory({category: this.category, page: page-1})
    }
  },
  computed: {
    ...mapState('product', {
      products: (state) => state.productsFiltered,
      pageCount: (state) => state.pageCountFiltered,
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
  .pagination {
    margin: 1rem auto;
  }
</style>