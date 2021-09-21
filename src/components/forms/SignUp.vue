import SearchInput from '@/components/forms/SearchInput.vue';
import ProductBySearchList from '@/components/lists/ProductBySearchList.vue';
<template>
    <div class="register-div">
      <img src="@/assets/777771.png" class="image"/>
      <form class="register-form">
        <h1 class="text-title">Registro</h1>
          <p>
        <label class="text" for="email">Correo </label>
         <input type="text" class="input-register" id="email"/>
        </p>
        <p>
        <label class="text" for="name">Nombre  </label>
        <input type="text" class="input-register" id="name"/>
        </p>
        <p>
        <label class="text" for="password">Contraseña  </label>
        <input type="password" class="input-register" id="password"/>
        </p>
        <p>
        <label class="text" for="passwordConfirm">Confirmar contraseña  </label>
        <input type="password" class="input-register" id="passwordConfirm"/>
        </p>
        <input type="submit" class="register" value="Registrar"/>
      </form>
    </div>
</template>
<script>
export default {
  name: 'SignUp'
}
</script>
<style lang="scss" scoped>
.register-div{
  display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
  background-image:url("@/assets/Recurso 1.png");
  min-height: 1030px;
  
}
.image{
  margin: 0;
}
.register-form{
  // background-color: #4CAF50;
  background: linear-gradient(90deg, rgba(255,230,230,1) 0%, rgba(156,204,101,1) 0%, rgba(76,175,80,1) 100%);
  margin-left: 30%;  
  margin-right: 30%;  
  padding: 20px;
  border-radius: 25px;
  min-height: 500px;
  width: 40%;
  box-shadow:10px 5px 5px rgb(214, 214, 214);
  text-align: start;
  }
.text-title{
  font-size: 40px;
  color: white;
  font-weight: bold;
  margin-left: 45%;
}
.text{
  font-size: 25px;
  margin: 20px;
  display: inline-block;
  color: white;
  margin-left: 20%;
  width: 30%;
}
.input-register{
  background-color: white;
  width: 30%;
  height: 35px;
  border-color: white;
  border-radius: 5px;
  margin: 1%;
}
.register{
  background-color: #FFE6E6;
  width: 25%;
  height: 40px;
  border-color: #FFE6E6;
  font-size: 20px;
  border-radius: 10px;
  margin-left: 40%;
          &:hover {
            background-color:#A2CC8C ;
            color: white;
            transition: .5s;
          }
}
</style>