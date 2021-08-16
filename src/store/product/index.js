import ProductRepository from '@/repositories/productRepository'

/**
 * @typedef {Object} ProductState
 * @property {'loading' | 'idle' | 'fail'} status
 * @property {import("@/model/product").ProductDto[]} products
 * @property {import("@/model/product").ProductDto[]} productsFiltered Products filtered by Category
 */

export default {
  
  namespaced: true,
  
  /**
   * @type {ProductState} initialState
   */
  state: {
    status: 'idle',
    products: [],
    productsFiltered: []
  },

  /**
   * @type {import("vuex").ActionTree<ProductState>}
   */
  actions: {
   
    async getProducts ( { commit } , /**@type {number}*/ payload ) {
      const repo = new ProductRepository()
      try {
        const products = await repo.getProducts(payload)
        commit('setProducts', products)
      } catch (error) {
       throw new Error(error.message)
      }
    },

    async getProductsByCategory({ commit },
       /**@type {{page: number, category: string}}*/ payload) {

      const repo = new ProductRepository()
      try {
        const products = await repo.getProductsByCategory(payload.page, payload.category)
        commit('setProductsFiltered', products)
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
      /**@type {import("@/model/product").ProductDto[]} */products){
      state.products = products
    },
    setProductsFiltered (state,
      /**@type {import("@/model/product").ProductDto[]} */products){
        state.productsFiltered = products
      }
  }
}
