import ProductRepository from '@/repositories/productRepository'

/**
 * @typedef {Object} ProductState
 * @property {'loading' | 'idle' | 'fail'} status
 * @property {import("@/model/product").ProductDto[]} products
 */

export default {
  
  namespaced: true,
  
  /**
   * @type {ProductState} initialState
   */
  state: {
    status: 'idle',
    products: []
  },

  /**
   * @type {import("vuex").ActionTree<ProductState>}
   */
  actions: {
    /**
     * type {number} payload 
     */
    async getProducts ( { commit } , /**@type {number}*/ payload ) {
      const repo = new ProductRepository()
      try {
        const products = await repo.getProducts(payload)
        commit('setProducts', products)
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
    }
  }
}
