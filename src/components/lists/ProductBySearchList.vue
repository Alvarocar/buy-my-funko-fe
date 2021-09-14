<template>
  <h2 class="title-section">Resultados por la B&uacute;squeda: "<span class="query-section">{{ q }}</span>"</h2>
  <div class="content" v-if="status==='idle'">
    <article :key="product.id" v-for="product in products">
      <card-products :product="product"/>
    </article>
  </div>
  <el-pagination
    :page-count="page"
    layout="prev, pager, next"
    class="pagination"
    @current-change="changePage"
  />
</template>

<script>
import { defineComponent } from "vue"
import { mapActions, mapState } from "vuex"
import CardProducts from '@/components/cards/CardProducts.vue'
export default defineComponent({
  name: 'ProductBySearchList',
  components: {
    CardProducts
  },
  props: {
    //query to search products
    q: {
      type: String,
      required: true,
    }
  },
  beforeMount() {
    const q = this.q
    this.getProducts({ q, page: 0 })
  },
  methods: {
    ...mapActions('product', {
      getProducts: 'getProductByQuery'
    }),
    /**
     * The method send getProducts action to
     * products module in the store.
     * @param {number} page
     * @returns {void}
     */
    changePage(page) {
      const q = this.q
      page--
      this.getProducts({ q, page })
    }
  },
  computed: {
    ...mapState('product', {
      status: 'status',
      products:'productsSearched',
      page: 'pageCountSearch'
    })
  },
  watch: {
    q() {
      const q = this.q
      this.getProducts({ q, page: 0 })
    }
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
  .query-section {
    opacity: .8;
  }
</style>