<template>
 <div class="welcome">
    <div class="imagenWelcome">
      <img src="../assets/Fotocabecera.png" alt=""  class="imagenBota"/>
    </div>
    <div class="txtWelcome">
      <h2 class="calzado">Calzado Jermyl</h2>
    </div>
  </div>
  
</template>
<script>
export default {
    name: 'Cabecera'
}
</script>
<style>
.welcome {
  display: flex;
  justify-content: center;
  background-color: #fdf6e2;
  border-bottom: 2px #b51313 solid;
  align-items: center;
}
.imagenBota{
  transform: rotate(5deg);
  width: 140px;
  height: 140px;
}
.titular {
  font-family: "Parisienne", cursive;
  font-size: 80px;
  color: #b51313;
}
</style>