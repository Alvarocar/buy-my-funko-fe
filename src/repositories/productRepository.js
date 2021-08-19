/**
 * @module Repositories
 */

import { data } from '@/api/fakeApi'


export default  class ProductRepository {
  /**
   * The method return a paginated product list.
   * @param {number} page number of the page (start in zero).
   * @param {{limit: number}} [config] config params.
   * 
   * @returns {Promise<{products: import('@/model/product').ProductDto[], pageCount: number}>} a product list with
   * total pages avalibles.
   * @throws {Error} If there is a network error.
   * @throws {Error} If the page is negative.
   */
  async getProducts(page, config = { limit: 10 }) {    
    try {

      if (page < 0)
        throw new Error('The page must be positive')

      const start = page*config.limit
      /**
       * @type {import('@/model/product').ProductDto[]}
       */
      let products = []
      for (let i = 0; i < config.limit; i++) {
        if (!data[start+i])
          break
        products = [...products, data[start+i]];
      }
      const pageCount = Math.ceil(data.length / config.limit)
      return { products, pageCount }
    } catch (err) {
      throw new Error(err.message)
    }
  }

  /**
   * The method return a paginated product list by category.
   * @param {number} page number of the page (start in zero).
   * @param {string} category category name of the product.
   * @param {{limit: number}} [config] config params.
   * 
   * @returns {Promise<{products: import('@/model/product').ProductDto[], pageCount: number}>} a product list with
   * total pages avalibles.
   * @throws {Error} If there is a network error.
   * @throws {Error} If the page is negative.
   */
  async getProductsByCategory(page, category, config = { limit: 10} ){
    try {
      if (page < 0)
      throw new Error('The page must be positive')
      
    const filteredData = data.filter( product => product.category === category );

      const start = page*config.limit
      /**
       * @type {import('@/model/product').ProductDto[]}
       */
      let products = []
      for (let i = 0; i < config.limit; i++) {
        if (!filteredData[start+i])
          break
        products = [...products, filteredData[start+i]];
      }
      const pageCount = Math.ceil(filteredData.length / config.limit)
      return { products, pageCount }
    } catch (err) {
      throw new Error(err.message)
    }
  }
}