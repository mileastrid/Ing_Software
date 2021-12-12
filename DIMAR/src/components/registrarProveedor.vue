<template>
  <div class="modal" tabindex="-1">
    <div class="contenedor">
      <div id="head">
        <h4 id="titulo">Agregar proveedor</h4>
        <img src="../assets/cerrar.png" alt="" @click="changeModal" />
      </div>
      <br />
      <form name="frmOperador" v-on:submit.prevent="registrarProveedor">
        <div class="form-group">
          <label for="txtInfo" id="label"><b>Nombre: </b></label><br />
          <input
            type="text"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Ingresar nombre"
            v-model="proveedor.nombre"
          />
        </div>

        <div class="form-group">
          <label for="txtInfo" id="label"><b>Identificación:</b></label
          ><br />
          <input
            type="text"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Ingresar identificación"
            v-model="proveedor.cedula"
          />
        </div>

        <div class="form-group">
          <label for="txtInfo" id="label"><b>Celular:</b> </label><br />
          <input
            type="text"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Ingresar celular"
            v-model="proveedor.celular"
          />
        </div>

        <div class="form-group">
          <label for="txtInfo" id="label"><b>Empresa: </b></label><br />
          <input
            type="text"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Ingresar empresa"
            v-model="proveedor.empresa"
          />
        </div>

        <div class="form-group">
          <label for="txtInfo" id="label"><b>Nit: </b></label><br />
          <input
            type="text"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Ingresar nit"
            v-model="proveedor.nit"
          />
        </div>

        <br />
        <div id="footer">
          <button id="btn" align="center"><b>Guardar proveedor</b></button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "RegistrarProveedor",
  data(){
      return {
        proveedor: {
            nombre: "",
            cedula: "",
            celular: "",
            empresa: "",
            nit: ""
        },
      }
  },
  methods: {
    changeModal() {
      let showModal = false;
      this.$emit("updateModal", showModal);
    },
    registrarProveedor(){
        axios
        .post("https://app-calzado.herokuapp.com/prov", this.proveedor, {
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
              title: "Proveedor registrado",
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
.contenedor {
  width: 350px;
  height: 474px;
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