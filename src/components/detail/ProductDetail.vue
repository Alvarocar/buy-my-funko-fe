<template>
  <div class="content">
    <h1>Funciona</h1>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions, mapState } from 'vuex'

export default defineComponent({
    name: 'ProductDetail',
    props: {
      /**
      * typedef {string} id
      */
      id: {
        required: true,
        type: String,
      },
    },
    methods: {
      ...mapActions('product', [
        'getProductById'
      ])
    },
    beforeMount() {
      this.getProductById(Number(this.id))
    },
    computed: {
      ...mapState('product', {
        product: 'productSelected'
      })
    }
})
</script>

<style lang="scss" scoped>
.content {
    background-color: red;
}
</style>
