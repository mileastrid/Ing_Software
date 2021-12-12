<template>
  <div class="modal" tabindex="-1">
    <div class="contenedorProducto">
      <div id="head">
        <h4 id="titulo">Agregar producto</h4>
        <img src="../assets/cerrar.png" alt="" @click="changeModal" />
      </div>
      <br />
      <form name="frmOperador" v-on:submit.prevent="registrarProducto">
        <div class="form-group">
          <label for="txtInfo" id="label"><b>Imagen: </b></label><br />
          <input
            type="text"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Pegar URL"
            v-model="product.imageurl"
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
            v-model="product.name"
          />
        </div>

        <div class="form-group">
          <label for="txtInfo" id="label"><b>Referencia:</b></label
          ><br />
          <input
            type="text"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Ingresar referencia"
            v-model="product.reference"
          />
        </div>

        <div class="form-group">
          <label for="txtInfo" id="label"><b>Precio:</b> </label><br />
          <input
            type="number"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Ingresar precio"
            v-model="product.price"
          />
        </div>

        <div class="form-group">
          <label for="txtInfo" id="label"><b>Material: </b></label><br />
          <input
            type="text"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Ingresar material"
            v-model="product.material"
          />
        </div>

        <div class="form-group">
          <label for="txtInfo" id="label"><b>Suela: </b></label><br />
          <input
            type="text"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Ingresar suela"
            v-model="product.sole"
          />
        </div>

        <div class="form-group">
          <label for="txtInfo" id="label"><b>Talla: </b></label><br />
          <input
            type="text"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Ingresar talla"
            v-model="product.size"
          />
        </div>
        <div class="form-group">
          <label for="txtInfo" id="label"><b>Categoria: </b></label><br />
          <input
            type="text"
            name="txtInfo"
            id="txtInfo"
            class="form-control"
            placeholder="Ingresar categoria"
            v-model="product.category"
          />
        </div>
        <div id="footer">
          <button id="btn" align="center"><b>Guardar producto</b></button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "RegistrarProducto",
  data(){
      return {
          product:{
              reference: "",
              name: "",
              price: "",
              sole: "",
              material: "",
              imageURL: "",
              size: "",
              category: ""
          }
      }
  },
  methods: {
    changeModal() {
      let showModal = false;
      this.$emit("updateModal", showModal);
    },
    registrarProducto(){
        axios
        .post("https://app-calzado.herokuapp.com/prod", this.product, {
          headers: {},
        })
        .then((result) => {
          if (result.data.detail) {
              console.log(result.data.detail);
            Swal.fire({
              icon: "error",
              title: "Fallo al crear",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              icon: "success",
              title: "Producto registrado",
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
.contenedorProducto {
  width: 350px;
  height: 644px;
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