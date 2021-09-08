/**
 * @module Model
 */

/**
 * @typedef {Object} ProductDto
 * @property {string} title The title or name of the product.
 * @property {string} description of the product.
 * @property {string} price The price of the product.
 * @property {string} image The url image of the product.
 * @property {number} id The id of the product.
 * @property {string} category The product category.
 */

/**
 * @enum {string} Category for Product.
 */
export const ECategoryByProduct = {
  MARVEL: 'marvel',
  DC: 'dc',
  STAR_WARS: 'star_wars',
  JUEGOS: 'juegos',
  ANIME: 'anime'
}