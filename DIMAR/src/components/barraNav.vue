<template>
  <div class="barraNavegacion">
    <div class="datos">
      <ul class="ulNav">
        <li class="datosL" @click="goInicio">INICIO</li>
        <li class="datosL" @click="goConocenos">CONOCENOS</li>
      </ul>
    </div>
    <div class="sesion">
        <img src="../assets/iconUser.png" alt="" class="icon">
      <button class="btn" @click="showModal = true" v-if="!auth">INICIAR SESIÓN</button>
      <a href="" class="btnAuth" v-if="rol==0 && auth" @click="goPanelOperador">Operador</a>
      <a href="" class="btnAuth" v-if="rol==1 && auth" @click="goPanelAdmin">Administrador</a>
      <a href="" v-if="auth" @click="clearSession"><img src="../assets/exit.png" alt="" class="icnexit"></a>
    </div>
    <transition name="fade">
      <div class="modal-overlay" v-if="showModal"></div>
    </transition>
    <transition name="fade">
      <div class="modal" v-if="showModal">
        <SingUp v-on:updateModal="updateModal" v-on:updateLogin="updateLogin"></SingUp>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import SingUp from '../components/singUp.vue';
export default {
  name: "Navi",
  data(){
    return {
      showModal: false,
      auth: sessionStorage.getItem("isAuth") || false,
      rol: sessionStorage.getItem("rol") || 0
    }
  },
  components: {SingUp},
  methods: {
    goInicio(){
      this.$router.push({path: '/'});
    },
    goConocenos(){
      this.$router.push({path: '/conocenos'});
    },
    goPanelAdmin(){
      this.$router.push({path: '/panelAd'});
    },
    goPanelOperador(){
      this.$router.push({path: '/panelOp'});
    },
    updateModal(modal){
      this.showModal = modal;
    },
    updateLogin(){
      this.verifyToken();
    },
    verifyToken() {
      let token = { token: sessionStorage.getItem("token") };
      axios
        .post("https://app-calzado.herokuapp.com/auth/verify", token, {
          headers: {},
        })
        .then((result) => {
          if (result.data.message) {
            console.log("Token invalido");
          } else {
            sessionStorage.setItem("rol", result.data.user.rol);
            this.rol = sessionStorage.getItem("rol");
            this.auth= sessionStorage.getItem("isAuth");
            this.showModal = false;
          }
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    },
    clearSession(){
      sessionStorage.clear();
      this.$router.push({path: '/'});
    }
  },
  mounted(){
    //this.verifyToken();
  }
};
</script>

<style>
.barraNavegacion {
  display: flex;
  justify-content: space-evenly;
  font-size: 25px;
  color: white;
  border: 2px #b51313 solid;
}
.ulNav {
  display: flex;
  list-style: none;
}
.datos {
  display: flex;
}

.datosL {
  margin: 15px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: white;
  color: #b51313;
  border: 1px #b51313 solid;
  border-radius: 30px;
  text-align: center;
  box-shadow: 1px 2px 11px 1px rgba(0, 0, 0, 0.6);
  font-weight: bold;
}

.datosL:hover {
  margin: 15px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #b51313;
  color: white;
  border-radius: 30px;
  text-align: center;
  box-shadow: inset 0px 10px 27px -8px #141414,
    inset 0px -10px 27px -8px #a31925, 1px 2px 11px 1px rgba(0, 0, 0, 0);
}

.btn {
  background-color: #b51313;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 30px;
  box-shadow: 1px 2px 11px 1px rgba(0, 0, 0, 0.6);
   font-weight: bold;
}
.btn:hover{
    box-shadow: inset 0px 10px 27px -8px #141414,
    inset 0px -10px 27px -8px #a31925, 1px 2px 11px 1px rgba(0, 0, 0, 0); 
}

.sesion{
    display: flex;
    align-items: center;
}
.icon{
    margin-right: 12px;
}

.modal-overlay{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
}

.modal{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 101;
}

.btnAuth{
  text-decoration: none;
  color: #a31925;
}
.icnexit{
  margin-top: 12px;
  margin-left: 12px;
}
fade-enter{

}
</style>