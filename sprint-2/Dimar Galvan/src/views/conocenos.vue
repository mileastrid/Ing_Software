<template>
  <div id="app" class="app">
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
  </div>
 <Descripcion></Descripcion>
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
import Descripcion from "../components/descripcion.vue";
export default {
    name: "Conocenos",
    components: {Descripcion}
}
</script>

<style>
.datosHeader {
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  background: rgba(0, 0, 0, 0.84);
  color: white;
  font-size: 25px;
}

.cLi {
  display: flex;
  margin-top: 12px;
}

.cLi,
li {
  padding-left: 15px;
}
.piePagina {
  display: flex;
  justify-content: space-evenly;
  background: rgba(0, 0, 0, 0.86);
  color: white;
  font-size: 25px;
  text-align: center;
}
.pList {
  list-style: none;
  justify-content: start;
}
.pLocation {
  display: flex;
}
.pPhone {
  display: flex;
}
.info {
  margin: 30px;
}
.fcategorias{
  margin: 30px;
 
}
</style>