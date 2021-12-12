<template>
    <div class="header">
      <ul class="datosHeader">
        <div class="cLi">
          <li><img src="../assets/iconLocation.png" alt="" /></li>
          <li>Calle 2 #9-69 Barrio Santander / Villa del Rosario</li>
        </div>
        <div class="cLi">
          <li><img src="../assets/iconPhone.png" alt="" /></li>
          <li>3156252089</li>
        </div>
      </ul>
    </div>
    
<Header></Header>
<Navi></Navi>
<Paneladmin></Paneladmin>

     <footer class="piePagina">
    <div class="info">
      <h2>INFORMACIÓN</h2>
      <ul class="pList">
        <div class="pLocation">
          <li><img src="../assets/iconLocation.png" alt="" /></li>
          <li>Calle 2 #9-69 Barrio Santander / Villa del Rosario</li>
        </div>
        <div class="pPhone">
          <li><img src="../assets/iconPhone.png" alt="" /></li>
          <li>3156252089</li>
        </div>
      </ul>
    </div>
    <div class="fcategorias">
      <h2>CATEGORÍAS</h2>
      <p>Dama / Caballero / Niños</p>
    </div>
  </footer>
</template>

<script>
import axios from "axios";
import Header from "../components/header.vue";
import Navi from "../components/barraNav.vue";
import Paneladmin from "../components/paneladmin.vue";    
export default {
    name: 'panelAd',
    components: {Header, Paneladmin, Navi}
}
</script>

<style>

</style>