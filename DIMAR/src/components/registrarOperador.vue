<template>
  <div class="modal" tabindex="-1">
    <div class="contenedorOperador">
      <div id="head">
        <h4 id="titulo">Agregar operador</h4>
        <img src="../assets/cerrar.png" alt="" @click="changeModal" />
      </div>
      <br />
      <form name="frmOperador" v-on:submit.prevent="registrarOperador">
        <div class="form-group">
          <label for="txtInfo" id="label"><b>Usuario: </b></label><br />
          <input
            type="text"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Ingresar usuario"
            v-model="operador.username"
          />
        </div>

        <div class="form-group">
          <label for="txtInfo" id="label"><b>Nombre: </b></label><br />
          <input
            type="text"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Ingresar nombre"
            v-model="operador.name"
          />
        </div>

        <div class="form-group">
          <label for="txtInfo" id="label"><b>Contraseña:</b></label
          ><br />
          <input
            type="password"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Ingresar contraseña"
            v-model="operador.password"
          />
        </div>

        <div class="form-group">
          <label for="txtInfo" id="label"><b>Correo:</b> </label><br />
          <input
            type="text"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Ingresar correo"
            v-model="operador.email"
          />
        </div>
        <div id="footer">
          <button id="btn" align="center"><b>Guardar operador</b></button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "RegistrarOperador",
  data() {
    return {
      operador: {
        username: "",
        name: "",
        password: "",
        email: "",
      },
    };
  },
  methods: {
    changeModal() {
      let showModal = false;
      this.$emit("updateModal", showModal);
    },
    registrarOperador(){
        axios
        .post("https://app-calzado.herokuapp.com/user", this.operador, {
          headers: {},
        })
        .then((result) => {
          if (result.data.detail) {
            Swal.fire({
              icon: "error",
              title: "Fallo al crear",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              icon: "success",
              title: "Operador registrado",
              showConfirmButton: false,
              timer: 1500,
            });
            this.changeModal();
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Fallo al crear",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  },
};
</script>

<style>
.contenedorOperador {
  width: 350px;
  height: 383px;
  margin: auto;
  background: #fff;
  box-shadow: 1px 7px 25px rgba(0, 0, 0, 0.4);
  transition: all 500ms ease;
  margin-top: 5%;
  margin-bottom: 5%;
  font-size: 20px;
}
.form-control {
  color: black;
  border-color: black;
  font-family: "Red Hat Text", sans-serif;
  margin-left: 30px;
  width: 275px;
  height: 25px;
  margin-bottom: 10px;
}
#label {
  font-family: "Red Hat Text", sans-serif;
  margin-left: 30px;
  color: black;
}
#titulo {
  color: white;
  font-family: "Red Hat Text", sans-serif;
  margin-left: 30px;
  font-size: 23px;
  top: 10px;
  position: relative;
}
#head {
  background: #b51313;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
}
#footer {
  background: rgba(0, 0, 0, 0.75);
  color: white;
  height: 45px;
}
#btn {
  border-color: white;
  margin-left: 80px;
  margin-top: 10px;
  font-family: "Red Hat Text", sans-serif;
  color: white;
  background: 0;
  font-size: 15px;
  width: 190px;
}
#btn:hover {
  background-color: white;
  color: rgba(51, 51, 51);
}
#close {
  height: 30px;
  width: 30px;
  background: 0;
  position: fixed;
  margin-left: 300px;
  top: 80px;
  border: none;
  color: white;
  font-size: 25px;
}
</style>