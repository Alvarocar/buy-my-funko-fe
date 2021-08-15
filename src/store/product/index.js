import ProductRepository from '@/repositories/productRepository'
import { createStore } from 'vuex'

/**
 * @typedef {Object} ProductState
 * @property {'loading' | 'idle' | 'fail'} status
 * @property {import("@/model/product").ProductDto[]} products
 */

const productStore = createStore({
  state:()=> ({
    status: 'idle',
    products: []
  }),

  actions: {
    /**
     * type {number} payload 
     */
    async getProducts ( {commit}, payload ) {
      const repo = new ProductRepository()
      try {
        const products = await repo.getProducts(payload)
        commit('setProducts', products)
      } catch (error) {
       throw new Error(error.message)
      }
    }
  },

  mutations:{
    setProducts (state, products){
      state.products = products
    }
  }
})

export default productStore