import ProductRepository from '@/repositories/productRepository'

/**
 * @typedef {Object} ProductState
 * @property {'loading' | 'idle' | 'fail'} status
 * @property {import("@/model/product").ProductDto[]} products
 * @property {import("@/model/product").ProductDto[]} productsFiltered Products filtered by Category
 * @property {number} pageCount Total pages for main products
 * @property {number} pageCountFiltered Total pages for products filtered by category
 * @property {null | import("@/model/product").ProductDto} productSelected is a product that has been filtered by id
 */

const statusState = {
  idle: 'idle',
  loading: 'loading',
  fail: 'fail'
}
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
    pageCountFiltered: 0,
    productSelected: null
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
    },

    async getProductById({commit},/** @type { number } id of the product */ payload){
      const repo = new ProductRepository()
      try {
        commit('setStatus', statusState.loading)
        const product = await repo.getProductById(payload)
        commit('setProductSelected', product.productDto)
        commit('setStatus', statusState.idle)
      } catch (error) {
        commit('setStatus', statusState.fail)
        commit('setProductSelected', null)
        throw new Error(error.message)
      }
    },
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
    },
    setProductSelected(state, /**@type {import("@/model/product").ProductDto | null}  */ product ){
      state.productSelected = product
    },
    setStatus (state, /**@type {'loading' | 'idle' | 'fail'}*/status){
      state.status = status
    }

  }
}
