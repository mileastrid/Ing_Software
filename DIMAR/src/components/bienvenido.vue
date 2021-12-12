<template>
  <div class="welcome">
    <div class="imagenWelcome">
      <img src="../assets/Fotocabecera.png" alt="" />
    </div>
    <div class="txtWelcome">
      <h1 class="titular">Bienvenido(a) a</h1>
      <h2 class="calzado">Calzado Jermyl</h2>
      <p class="texto">¡Qué agrado tenerte con nosotros!</p>
    </div>
  </div>
  <div class="tipoCalzado">
    <div class="calDama" @click="goDama">
      <p>Calzado para Dama</p>
      <img src="../assets/mujer.png" alt="" class="imgTipo"  id="dama"/>
    </div>
    <div class="calHombre" @click="goCaballero">
      <p>Calzado para Caballero</p>
      <img src="../assets/hombre.png" alt="" class="imgTipo"/>
    </div>
    <div class="calNiño" @click="goNiño">
      <p>Calzado para Niños</p>
      <img src="../assets/niños.png" alt="" class="imgTipo" id="niño"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "Welcome",
  methods:{
    goDama(){
      this.$router.push({path: '/calzado-dama'});
    },
    goCaballero(){
      this.$router.push({path: '/calzado-caballero'});
    },
    goNiño(){
      this.$router.push({path: '/calzado-ninos'});
    }
  }
};
</script>

<style>
.welcome {
  display: flex;
  justify-content: center;
  background-color: #fdf6e2;
  border-bottom: 2px #b51313 solid;
}
.imagenWelcome {
  transform: rotate(35deg);
}
.titular {
  font-family: "Parisienne", cursive;
  font-size: 80px;
  color: #b51313;
}
.calzado {
  font-family: "Courgette", cursive;
  font-size: 60px;
}
.texto {
  font-family: "Red Hat Text";
  font-style: italic;
  font-weight: 800;
  font-size: 30px;
}
.imgTipo {
  width: 350px;
  height: 350px;
}
.tipoCalzado {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  font-family: Red Hat Text;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  color: #000000;
}

.tipoCalzado p {
  align-self: center;
  position: absolute;
  background: rgba(255, 255, 255, 0.4);
  border: 4px solid #ffffff;
  margin: 12px;
  margin-left: 30px;
}
#dama{
    margin-left: -12px;
}
#niño{
    margin-left: -12px;
}
</style>