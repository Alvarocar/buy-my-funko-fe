import ProductRepository from '@/repositories/productRepository'

/**
 * @typedef {Object} ProductState
 * @property {'loading' | 'idle' | 'fail'} status
 * @property {import("@/model/product").ProductDto[]} products
 * @property {import("@/model/product").ProductDto[]} productsFiltered Products filtered by Category
 * @property {number} pageCount Total pages for main products
 * @property {number} pageCountFiltered Total pages for products filtered by category
 */

export default {
  
  namespaced: true,
  
  /**
   * @type {ProductState} initialState
   */
  state: {
    status: 'idle',
    products: [],
    productsFiltered: [],
    pageCount: 0,
    pageCountFiltered: 0
  },

  /**
   * @type {import("vuex").ActionTree<ProductState>}
   */
  actions: {
   
    async getProducts ( { commit } , /**@type {number}*/ payload ) {
      const repo = new ProductRepository()
      try {
        const { products, pageCount } = await repo.getProducts(payload)
        commit('setProducts', products)
        commit('setPageCount', pageCount)
      } catch (error) {
       throw new Error(error.message)
      }
    },

    async getProductsByCategory({ commit },
       /**@type {{page: number, category: string}}*/ payload) {

      const repo = new ProductRepository()
      try {
        const { products, pageCount } = await repo.getProductsByCategory(payload.page, payload.category)
        commit('setProductsFiltered', products)
        commit('setPageCountFiltered', pageCount)
      } catch (error) {
        throw new Error(error.message)
      }
    }
  },

  /**
   * @type {import("vuex").MutationTree<ProductState>}
   */
  mutations:{
    setProducts (state,
      /**@type {import("@/model/product").ProductDto[]} */products) {
      state.products = products
    },
    setProductsFiltered (state,
      /**@type {import("@/model/product").ProductDto[]} */products) {
        state.productsFiltered = products
    },
    setPageCount(state, /**@type {number} */ pageCount) {
      state.pageCount = pageCount
    },
    setPageCountFiltered(state, /**@type {number} */ pageCount) {
      state.pageCountFiltered = pageCount
    }
  }
}
