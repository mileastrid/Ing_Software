<template>
  <div class="barraNavegacion">
    <div class="datos">
      <ul class="ulNav">
        <li class="datosL">INICIO</li>
        <li class="datosL">CONOCENOS</li>
        <li class="datosL">PRODUCTOS</li>
      </ul>
    </div>
    <div class="sesion">
        <img src="../assets/iconUser.png" alt="" class="icon">
      <button class="btn">INICIAR SESIÓN</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navi",
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
</style>