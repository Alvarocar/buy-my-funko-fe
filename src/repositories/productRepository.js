/**
 * @module Repositories
 */

import { data } from '@/api/fakeApi'


export default  class ProductRepository {
  /**
   * The method return a paginated product list.
   * @param {number} page number of the page (start in zero).
   * @param {{limit: number}} config config params.
   * 
   * @returns {Promise<import('@/model/product').ProductDto[]>} a product list.
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
      let result = []
      for (let i = 0; i < config.limit; i++) {
        if (!data[start+i])
          break
        result = [...result, data[start+i]];
      }
      return result
    } catch (err) {
      throw new Error(err.message)
    }
  }
}