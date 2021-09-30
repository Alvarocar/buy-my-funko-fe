import SearchInput from '@/components/forms/SearchInput.vue';
import ProductBySearchList from '@/components/lists/ProductBySearchList.vue';
<template>
    <div class="register-div">
      <img src="@/assets/777771.png" class="image"/>
      <el-form class="register-form" :rules="rules" :model="form">
        <h1 class="text-title">Registro</h1>
          <p>
          <el-form-item label="correo" prop="email">
            <el-input type="text" class="input-register" id="email"  v-model="form.email"/>
          </el-form-item>
        </p>
        <p>
          <el-form-item  label="nombre" prop="name">
             <el-input type="text" class="input-register" id="name" v-model="form.name"/>
          </el-form-item>
        </p>
        <p>
        <el-form-item label="Contraseña" prop="password">
          <el-input type="password" class="input-register" id="password" v-model="form.password"/>
        </el-form-item>
        </p>
        <p>
          <el-form-item label="Confirmar contraseña" prop="confirmPassword">
            <el-input type="password" class="input-register" id="passwordConfirm" v-model="form.confirmPassword"/>
          </el-form-item>
        </p>
        <input type="submit" class="account" value="¿ya tiene una cuenta?" @click="goLogin"/>
       <p>
        <input type="submit" class="back" value="Volver" @click="goHome" />
        <input type="submit" class="register" value="Registrar"/>
       </p>
      </el-form>
    </div>
</template>
<script>
import ERoutes from '@/constants/ERoutes';
import {validateSpecialchar, validateLowercase, validateUppercase, validatenumber, ValidateLength} from '@/util/validations/password'
import {isValidEmail} from '@/util/validations/email'
import {validateName, validateNameLength} from '@/util/validations/name'
export default {
  name: 'SignUp',
  data (){
    var confirmPasswordValidate = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('Debe verificar la contraseña del usuario.'));
        } else if (value !== this.form.password) {
            callback(new Error('Las contraseñas no coinciden.'));
        } else {
            callback();
        }
    };
    return{ 
      form: {email: '',
             name:'',
             password: '',
             confirmPassword:''
             },
      rules:{email:[{validator: isValidEmail('Por favor ingrese un correo válido'), trigger: 'blur'}],
        name:[{validator:validateName('Su nombre no debe tener numeros ni caracteres'), trigger:'blur'},
              { validator: validateNameLength('Su nombre debe tener al menos 3 caracteres'), trigger:'blur'}],
        password:[{validator: validateSpecialchar('Debe contener al menos un caracter especial'), trigger: 'blur'},
                  {validator: validateLowercase('La contraseña debe tener al menos una letra en minúscula'), trigger: 'blur'},
                  {validator: validateUppercase('La contraseña debe tener al menos una letra en mayúscula'), trigger:'blur'},
                  {validator: validatenumber('La contraseña debe tener al menos un número'), trigger:'blur'},
                  {validator: ValidateLength('La contraseña debe tener al menos 8 caracteres'), trigger:'blur'}
                      ],
        confirmPassword:[{validator: ValidateLength('La contraseña debe tener al menos 8 caracteres'), trigger:'blur'},
                         {validator:confirmPasswordValidate, trigger:'blur'}
                      ]
            }
    }
  },
  methods:{
     /**
      * Sent to register page 
      */
      goLogin() {
        this.$router.push({ name: ERoutes.LOG_IN })
    },
     /**
      * Sent to home page 
      */
      goHome() {
        this.$router.push({ name: ERoutes.HOME })
    }
  }
}
</script>
<style lang="scss">
.el-form-item__label {
  font-size: 25px;
  margin-right: 70px;
  display: inline-block;
  color: white;
  margin-left: 20%;
  }
  .el-form-item__error{
    font-size: 1rem;
    color: purple;
  }
</style>
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
// .text{
//   font-size: 25px;
//   margin: 20px;
//   display: inline-block;
//   color: white;
//   margin-left: 10%;
//   width: 20%;
// }
.input-register{
  background-color: white;
  width: 30%;
  height: 35px;
  border-color: white;
  border-radius: 5px;
  margin: 1%;
}
.back{
  background-color: white ;
  color: #e47aaa;
  width: 25%;
  height: 40px;
  border-color: #e47aaa;
  font-size: 20px;
  border-radius: 10px;
  margin-left: 25%;
          &:hover {
            background-color:#e47aaa ;
            color: white;
            transition: .5s;
          }}
.register{
  background-color: #e47aaa ;
  color: white;
  width: 25%;
  height: 40px;
  border-color: #e47aaa;
  font-size: 20px;
  border-radius: 10px;
  margin-left: 5%;
          &:hover {
            background-color:white ;
            color: #e47aaa;
            transition: .5s;
          }
}
.account{
  background-color: transparent ;
  color: white;
  width: 25%;
  height: 40px;
  border-color: transparent;
  font-size: 20px;
  border-radius: 10px;
  margin-left: 40%;
  margin-bottom: 2%;
          &:hover {
            background-color:transparent ;
            color: #000000;
            transition: .5s;
          }}
</style>