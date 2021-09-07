<template>
  <div v-if="status==='idle'"  >
  <el-row :gutter="20" justify="center">
    <el-col :span="10" class="product-image">
      <img class="image" :src="product.image" />
    </el-col>
    <el-col :span="10" class="product-description" align="left" >
      <div> 
        <h1 class="title">{{product.title}}</h1> 
        <h2 class="description">{{product.description}}</h2>
        <h2 class="price">Precio: ${{product.price}}</h2>
        <label class="description">Cantidad: </label> 
        <select class="drop-cantidad">
          <option class="option" value="volvo" :key="product.id" v-for="count in counterInventory" >{{count}}</option>
        </select>
        <button type="success" class="btn-add-car" ><i class="fas fa-cart-plus"></i> Agregar al carrito</button>
      </div> 
    </el-col>
  </el-row>

    <div class="comment">
    <div class="title-comment">
      <h1 align="left">Opiniones de los usuarios</h1>
    </div> 
    <h4 align="left">Comentario 1</h4>
    <h4 align="left">Comentario 1</h4>
    <h4 align="left">Comentario 1</h4>
  </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions, mapState } from 'vuex'

export default defineComponent({
    name: 'ProductDetail',
    data(){
      return{
        counterInventory: [],
        inventory:5

      }
    },
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
      /**
       * This method create an arry with the 
       * the quantity available from inventory 
       */
      createdInventoryArray (){
        for(var i = 1; i <= this.inventory; i++){
          this.counterInventory.push(i)
        }
      },
        ...mapActions('product', ['getProductById']),
    },
    beforeMount() {
        this.createdInventoryArray()
        this.getProductById(Number(this.id))
    },
    computed: {
        ...mapState('product', {
            product: 'productSelected',
            status: 'status'
        }),
    },
})
</script>

<style lang="scss" scoped>
  .option{
    background-color: #fefefe;
    color: #000000;
  }
  .drop-cantidad{
    background-color: #FF2626;
    border: none;
    color: #fefefe;
    padding: 15px 25px;
    text-align: center;
    font-size: 18px;
    border-radius: 10px;
    margin-top: 5%;
    margin-left:2%
  }
  .el-icon-arrow-down {
    font-size: 14px;
  }
.btn-add-car{
  background-color: #9CCC65;
  border: none;
  color: white;
  padding: 15px 10%;
  text-align: center;
  font-size: 18px;
  border-radius: 10px;
  margin-top: 5%;
  margin-left:2%
}
.product-description{
  margin: 23px;
  height: 750px;
  background-color: #FEFEFE;
}
.product-image{
  padding-left: 10%;
  padding-right: 10%;
  background-color: #FEFEFE;
  margin: 23px;
  height: 750px;
}
.return-btn{
  position: absolute;
  left: 1rem;
  top: 1rem;
}
.image {
    width: 90%;
    height: 750px;
}
.title{
  padding-top: 20%;
  padding-bottom: 5%;
  color:#FF2626;
  font-size: 40px;
  padding-left: 22  px;
}
.description{
  font-size:25px;
  flex: auto;
  padding-left: 22px;
}
.price{
    font-size: 30px;
    padding-left: 22px;
}
.comment{
   background-color: #FEFEFE;
   padding: 1%;
  
}
.title-comment{
     color: #BD1616;
   }

</style>
