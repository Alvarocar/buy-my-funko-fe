import { createStore } from 'vuex'

/**
 * @typedef {Object} ProductState
 * @property {'loading' | 'idle' | 'fail'} status
 */

const productStore = createStore({
  /**
   * @type {ProductState}
   */
  state: {
    status: 'idle'
  }
})

export default productStore