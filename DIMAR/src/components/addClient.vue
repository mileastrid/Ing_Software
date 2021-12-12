<template>
  <div class="modal" tabindex="-1">
    <div class="contenedor_2">
      <div id="head">
        <h4 id="titulo">Agregar cliente</h4>
        <img src="../assets/cerrar.png" alt="" @click="changeModal" />
      </div>
      <br />
      <form name="frmOperador" v-on:submit.prevent="registrarCliente">
        <div class="form-group">
          <label for="txtInfo" id="label"><b>Nombre: </b></label><br />
          <input
            type="text"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Ingresar nombre"
            v-model="cliente.nombre"
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
            v-model="cliente.cedula"
          />
        </div>

        <div class="form-group">
          <label for="txtInfo" id="label"><b>Empresa:</b> </label><br />
          <input
            type="text"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Ingresar empresa"
            v-model="cliente.empresa"
          />
        </div>

        <div class="form-group">
          <label for="txtInfo" id="label"><b>Celular: </b></label><br />
          <input
            type="text"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Ingresar celular"
            v-model="cliente.celular"
          />
        </div>
        <div id="footer">
          <button id="btn" align="center"><b>Guardar cliente</b></button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "AddClient",
  data() {
    return {
      cliente: {
        nombre: "",
        cedula: "",
        celular: "",
        empresa: "",
      },
    };
  },
  methods: {
    changeModal() {
      let showModal = false;
      this.$emit("updateModal", showModal);
    },
    registrarCliente() {
      axios
        .post("https://app-calzado.herokuapp.com/cli", this.cliente, {
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
              title: "Cliente registrado",
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
    },
  },
};
</script>

<style>
.contenedor {
  width: 350px;
  height: 503px;
  margin: auto;
  background: #fff;
  box-shadow: 1px 7px 25px rgba(0, 0, 0, 0.4);
  transition: all 500ms ease;
  margin-top: 5%;
}
.contenedor_2 {
  width: 350px;
  height: 356px;
  margin: auto;
  background: #fff;
  box-shadow: 1px 7px 25px rgba(0, 0, 0, 0.4);
  transition: all 500ms ease;
  margin-top: 5%;
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
.form-control_2 {
  color: black;
  border-color: black;
  font-family: "Red Hat Text", sans-serif;
  margin-left: 30px;
  width: 235px;
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
  display: flex;
  justify-content: space-between;
  background: #b51313;
  height: 50px;
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
#calendario {
  background: #b51313;
  color: white;
  border-color: #b51313;
  margin-left: 5px;
  font-size: 20px;
  width: 35px;
}
</style>