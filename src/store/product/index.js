import ProductRepository from '@/repositories/productRepository'

/**
 * @typedef {import("@/model/product").ProductDto[]} ProductDto
 */

/**
 * @typedef {Object} ProductState
 * @property {'loading' | 'idle' | 'fail'} status
 * @property {ProductDto[]} products
 * @property {ProductDto[]} productsFiltered Products filtered by Category
 * @property {ProductDto[]} productsSearched Products filtered by search query
 * @property {number} pageCount Total pages for main products
 * @property {number} pageCountFiltered Total pages for products filtered by category
<<<<<<< HEAD
 * @property {null | ProductDto} productSelected is a product that has been filtered by id
=======
>>>>>>> ba9c3e3b26b6c8c47ddec6ce6f2469fc415bb665
 * @property {number} pageCountSearch Total pages for products filtered by search query
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
    productsSearched: [],
    pageCount: 0,
    pageCountFiltered: 0,
    productSelected: null,
    pageCountSearch: 0,
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
        commit('setStatus', statusState.loading)
        const { products, pageCount } = await repo.getProductsByCategory(payload.page, payload.category)
        commit('setProductsFiltered', products)
        commit('setPageCountFiltered', pageCount)
        commit('setStatus', statusState.idle)
      } catch (error) {
        commit('setProductsFiltered', [])
        commit('setPageCountFiltered', 0)
        commit('setStatus', statusState.fail)
        throw new Error(error.message)
      }
    },

<<<<<<< HEAD
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
=======
>>>>>>> ba9c3e3b26b6c8c47ddec6ce6f2469fc415bb665
    /**
     * The action gets a product list filtered by text match.
     */
    async getProductByQuery({ commit }, /**@type {{q: string, page: number, limit?: number}} */ payload){
      const repo = new ProductRepository()
      try {
        commit('setStatus', statusState.loading)
        const { products, pageCount } = await repo.getProductsByQuery(payload.page, payload.q, { limit: payload.limit })
        commit('setProductsSearched', products)
        commit('setPageCountSearch', pageCount)
        commit('setStatus', statusState.idle)
      } catch (e) {
        commit('setProductsSearched', [])
        commit('setPageCountSearch', 0)
        commit('setStatus', statusState.fail)
        throw new Error(e.message)
      }
    }
  },

  /**
   * @type {import("vuex").MutationTree<ProductState>}
   */
  mutations:{
    setProducts (state,
      /**@type {ProductDto[]} */products) {
      state.products = products
    },
    setProductsFiltered (state,
      /**@type {ProductDto[]} */products) {
        state.productsFiltered = products
    },
    setPageCount(state, /**@type {number} */ pageCount) {
      state.pageCount = pageCount
    },
    setPageCountFiltered(state, /**@type {number} */ pageCount) {
      state.pageCountFiltered = pageCount
    },
<<<<<<< HEAD
    setProductSelected(state, /**@type {ProductDto | null}  */ product ){
      state.productSelected = product
    },
=======
>>>>>>> ba9c3e3b26b6c8c47ddec6ce6f2469fc415bb665
    setStatus(state, /**@type {'loading' | 'idle' | 'fail'} */ status) {
      state.status = status
    },
    setProductsSearched (state, /**@type {ProductDto[]} */products) {
        state.productsSearched = products
    },
    setPageCountSearch (state, /**@type {number}*/ page) {
      state.pageCountSearch = page
    }

  }
}
