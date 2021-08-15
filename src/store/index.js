import { createStore } from 'vuex'
import product from './product'
const store = createStore({
  modules: {
    product:{
      ...product,
      namespaced:true
    }
  }
})

export default store