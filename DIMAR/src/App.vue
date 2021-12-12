<template>
  <div id="app" class="app">
  
    <router-view></router-view>
     
  </div>
</template>
<script>


export default {
  name: "App",
 
};
</script>
 
<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Red Hat Display", sans-serif;
}

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
.fcategorias {
  margin: 30px;
}
</style>