
/**
 * The function recive an array to paginate it.
 * Also recive like an optional params a page and a limit. the page indicates
 * the number where start (start in zero), and limit indicates the size of the result.
 * @template T
 * @param {{page?: number, limit?: number, array: Array<T>}} params
 * @default {page: 0, limit: 10} 
 * 
 * @returns {[result:T[], totalPages:number]} An array that wraps a 
 * paginated array, and the total number of pages.
 */
export const paginateAnArray = ({
  page=0,
  limit=10,
  array
}) => {
  if (page < 0 || array.length <= 0) {
    return [ [], 0 ]
  }
  const start = page*limit
  /**
   * @type T[]
   */
  let result = []
  for (let i = 0; i < limit; i++) {
    if (!array[start+i])
      break
    result = [...result, array[start+i]];
  }
  const totalPages = Math.ceil(array.length / limit)
  return [ result, totalPages ]
}