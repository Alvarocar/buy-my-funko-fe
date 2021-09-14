/**
 * @module Repositories
 */

import { data } from '@/api/fakeApi'
import { paginateAnArray } from '@/util/repositories'

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
      const { limit } = config
      const [products, pageCount] = paginateAnArray({ array: data, page, limit})
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
      const { limit } = config
      const [products, pageCount] = paginateAnArray({array: filteredData, page, limit})
      return { products, pageCount }
    } catch (err) {
      throw new Error(err.message)
    }
  }

  /**
   * The method return a paginated product list by text match (text match only applies to the product title).
   * @param {number} page number of the page (start in zero).
   * @param {string} query text for the query.
   * @param {{limit: number}} [config] config params.
   * 
   * @returns {Promise<{products: import('@/model/product').ProductDto[], pageCount: number}>} a product list with
   * total pages avalibles.
   * @throws {Error} If there is a network error.
   * @throws {Error} If the page is negative.
   */
  async getProductsByQuery(page, query, config = { limit: 10 }) {
    const filteredData = data.filter( product => product.title.toLowerCase().includes(query.toLowerCase()))
    try {
      if (page < 0)
        throw new Error('The page must be positive')
      const { limit } = config
      const [products, pageCount] = paginateAnArray({array: filteredData, page, limit})
      return { products, pageCount }
    } catch (err) {
      throw new Error(err.message)
    }
  }
  /**
   * The method return a product by id.
   * @param {number} id The id is the id of product selected.
   * 
   * @returns {Promise<{productDto: import('@/model/product').ProductDto}>} a product. 
   * @throws {Error} If there is a network error.
   * @throws {Error} If the id doesn't exist.
   */
  async getProductById(id){
    try {
      const productDto = data.find(product => product.id === id)
      if (!productDto) {
        throw new Error('Producto no encontrado')
      }
      return { productDto }
    } catch (error) {
      throw new Error(error.message)
    }
  }
}