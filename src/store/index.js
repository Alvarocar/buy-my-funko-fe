import { createStore } from 'vuex'
import product from './product'
const store = createStore({
  modules: {
    product
  }
})

export default store