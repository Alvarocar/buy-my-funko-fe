import { ECategoryByProduct } from "@/model/product"

/**
     * The function validate if category name is in ECategoryByPropduct.
     * If the validate fail, then returns undefined.
     * @param {string | string[]} category category name
     * @returns {string | undefined} category name 
     */
 export const validateCategoryType = (category) => {
  const [ result ] = Object.values(ECategoryByProduct).filter( value => category === value)
  return result
}