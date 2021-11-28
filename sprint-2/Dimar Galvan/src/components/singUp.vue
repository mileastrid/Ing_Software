<template>
  <div class="logIn_user">
    <div class="container_logIn_user">
      <div class="cabeceraLogin">
        <h2>Iniciar sesión</h2>
        <img src="../assets/cerrar.png" alt="" />
      </div>
      <form class="formulario">
        <p>USUARIO:</p>
        <input type="text" class="entrada" />
        <br />
        <p>CONTRASEÑA:</p>
        <input type="password" class="entrada" />
        <br />  
      </form>
      <div class="containerbtn">
        <img src="../assets/enter.png" alt="">
          <button type="submit">Ingresar</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingUp",
};
</script>

<style>
.logIn_user {
  margin: 30px;
  padding: 0%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container_logIn_user {
  border: 3px solid #000000;
  border-radius: 10px;
  width: 450px;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logIn_user h2 {
  color: #ffffff;
}

.logIn_user form {
  padding-top: 70px;
  width: 80%;
  font-size: 25px;
  font-weight: 700;
}
.logIn_user input {
  width: 350px;
  height: 55px;
  background: #ffffff;
  border: 2px solid #000000;
  box-sizing: border-box;
}
.logIn_user button {
  width: 40%;
  height: 40px;
  color: #e5e7e9;
  background-color: rgba(51, 51, 51);
  border: 3px solid #e5e7e9;
  padding: 0px 25px;
  margin: 5px 0;
  font-size: 25px;
  font-weight: 700;
}
.logIn_user button:hover{
  background-color: white;
  color: rgba(51, 51, 51);
}

.cabeceraLogin {
  background-color: #b51313;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  font-size: 25px;
  width: 426px;
}
.containerbtn {
  display: flex;
  margin-top: 30px;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.8);
  width: 390px;
  justify-content: center;

}
.entrada {
  width: 499px;
  height: 55px;
  left: 48px;
  top: 174px;
  background: #ffffff;
  border: 2px solid #000000;
  box-sizing: border-box;
}

</style>