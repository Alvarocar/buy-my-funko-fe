<template>
  <form class="search-box" ref="form" @submit.prevent="onSubmit">
    <button type="submit" class="btn-search"><i class="fas fa-search"></i></button>
    <input type="search" v-model="form.search" class="input-search" placeholder="Busca un Funko..."/>
  </form>
</template>

<script>
  import { defineComponent } from 'vue'

  /**
   * The SearchInput Component is in charge of emit an event
   * with the data store in the form.
   * @displayName SearchInput.
   * @event submit content: {string} querySearch.
   */
  export default defineComponent({
    name: 'SearchInput',
    data() {
      return {
        rules: {
          search: [
            { required: true }
          ]
        },
        /**
         * @type {{search: string}} FormData
         * 
         */
        form: {
          search: ''
        }
      }
    },
    methods: {
      /**
       * The method send a custom event called submit if all fields in
       * the form are valid.
       * @returns {void}
       */
      onSubmit() {
        if (!this.validate())
          return
        /**
         * Emit the submit event when all fields of the form are valid.
         * @property {string} search the search field value in the form.
         */
        this.$emit('onSubmit', this.form.search)
        this.$refs.form?.reset()
      },
      /**
       * This method validate all fields in the form.
       * @returns {boolean} True if all validations pass, false in other case.
       */
      validate() {
        if (this.form.search.trim().length <= 0)
          return false
        return true
      }
    }
  })
</script>


<style lang="scss" scoped>

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance:none;
  }
  .search-box {
    width: fit-content;
    height: fit-content;
    position: relative;
    .input-search {
      height: 50px;
      width: 50px;
      border-style: none;
      padding: 10px;
      font-size: 18px;
      letter-spacing: 2px;
      outline: none;
      border-radius: 25px;
      transition: all .5s ease-in-out;
      background-color: #d90b09;
      padding-right: 40px;
      color:#fff;
      &::placeholder{
        color:rgba(255,255,255,.5);
        font-size: 18px;
        letter-spacing: 2px;
        font-weight: 100;
      }

      &:focus{
        width: 300px;
        border-radius: 0px;
        background-color: transparent;
        border-bottom:1px solid rgba(255,255,255,.5);
        transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
      }
    }

    .btn-search {
      width: 50px;
      height: 50px;
      border-style: none;
      font-size: 20px;
      font-weight: bold;
      outline: none;
      cursor: pointer;
      border-radius: 50%;
      position: absolute;
      right: 0px;
      color:#ffffff ;
      background-color:transparent;
      pointer-events: painted;  
      &:focus ~ .input-search {
        width: 300px;
        border-radius: 0px;
        background-color: transparent;
        border-bottom:1px solid rgba(255,255,255,.5);
        transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
      }
    }
  }
</style>