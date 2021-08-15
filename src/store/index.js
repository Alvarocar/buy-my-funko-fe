import { createStore } from 'vuex'
import Product from './product'
const store = createStore({
  modules: {
    Product
  }
})

export default store