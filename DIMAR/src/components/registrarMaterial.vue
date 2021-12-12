<template>
  <div class="modal" tabindex="-1">
    <div class="contenedorMaterial">
      <div id="head">
        <h4 id="titulo">Agregar material</h4>
        <img src="../assets/cerrar.png" alt="" @click="changeModal" />
      </div>
      <br />
      <form name="frmOperador" v-on:submit.prevent="registrarMaterial">
        <div class="form-group">
          <label for="txtInfo" id="label"><b>Código: </b></label><br />
          <input
            type="text"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Ingresar código"
            v-model="material.codigo"
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
            v-model="material.nombre"
          />
        </div>

        <div class="form-group">
          <label for="txtInfo" id="label"><b>Color:</b></label
          ><br />
          <input
            type="text"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Ingresar color"
            v-model="material.color"
          />
        </div>

        <div class="form-group">
          <label for="txtInfo" id="label"><b>Cantidad:</b> </label
          ><br />
          <input
            type="text"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Ingresar cantidad"
            v-model="material.cantidad"
          />
        </div>

        <div class="form-group">
          <label for="txtInfo" id="label"
            ><b>Costo:</b> </label
          ><br />
          <input
            type="number"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Ingresar costo"
            v-model="material.costo"
          />
        </div>

        <div class="form-group">
          <label for="txtInfo" id="label"><b>Proveedor: </b></label><br />
          <select class="form-control" v-model="Selproveedor" @change="updateProv">
              <option v-for="proveedor in proveedores" :key="proveedor.cedula">{{proveedor.cedula}}</option>
          </select>
        </div>
        <div id="footer">
          <button id="btn" align="center"><b>Guardar material</b></button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "RegistrarMaterial",
  data() {
    return {
      proveedores: [],
      material: {
        codigo: "",
        nombre: "",
        color: "",
        cantidad: "",
        costo: "",
        cedula: ""
      },
    };
  },
  methods: {
    updateProv() {
      this.material.cedula = parseInt(this.Selproveedor);
    },
    changeModal() {
      let showModal = false;
      this.$emit("updateModal", showModal);
    },
    registrarMaterial() {
      axios
        .post("https://app-calzado.herokuapp.com/mat", this.material, {
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
              title: "Material registrado",
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
    loadProveedores(){
      axios
        .get("https://app-calzado.herokuapp.com/prov", {
          headers: {},
        })
        .then((result) => {
          this.proveedores = result.data;
        })
        .catch((error) => {
          alert(error);
        });
    },

  },
  mounted(){
    this.loadProveedores();
  }
};
</script>

<style>
.contenedorMaterial {
  width: 350px;
  height: 512px;
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