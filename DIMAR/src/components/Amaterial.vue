<template>
  <transition name="fade">
    <div class="modal-overlay" v-if="showModal"></div>
  </transition>
  <transition name="fade">
    <div class="modal" v-if="showModal">
      <RegistrarMaterial v-on:updateModal="updateModal"></RegistrarMaterial>
    </div>
  </transition>
  <div class="conta">
    <div class="contendoroperador">
      <div class="titadm">
        <h1 class="titularadministrar">ADMINISTRAR MATERIAL</h1>
        <button class="btnoperador" @click="showModal = true">
          Agregar material
        </button>
      </div>
    </div>
    <div class="ctntabla">
      <table class="greyGridTable">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Color</th>
            <th>Cantidad</th>
            <th>Costo</th>
            <th>Proveedor</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="material in materiales" :key="material.codigo">
          <td>{{ material.codigo }}</td>
          <td>{{ material.nombre }}</td>
          <td>{{ material.color }}</td>
          <td>{{ material.cantidad }}</td>
          <td>{{ this.formatPeso.format(material.costo) }}</td>
          <td>{{ material.cedula }}</td>
          <td>
            <form v-on:submit.prevent="delMaterial">
              <input
                type="hidden"
                name="material"
                v-bind:value="material.codigo"
              />
              <button class="delBtn" href="" type="submit">
                <img src="../assets/delete.png" alt="" />
              </button>
            </form>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import RegistrarMaterial from "./registrarMaterial.vue";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "Agregarmaterial",
  components: { RegistrarMaterial },
  data() {
    return {
      materiales: [],
      showModal: false,
      formatPeso: new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
      }),
    };
  },
  methods: {
    updateModal(modal) {
      this.loadMateriales();
      this.showModal = modal;
    },
    loadMateriales() {
      axios
        .get("https://app-calzado.herokuapp.com/mat", {
          headers: {},
        })
        .then((result) => {
          this.materiales = result.data;
        })
        .catch((error) => {
          alert(error);
        });
    },
    delMaterial(submitEvent) {
      let mat = {
        codigo: submitEvent.target.elements.material.value,
      };
      axios
        .delete("https://app-calzado.herokuapp.com/mat/" + mat.codigo, {
          headers: {},
        })
        .then((result) => {
          if (result.status == 201) {
            Swal.fire({
              icon: "success",
              title: "Material eliminado",
              showConfirmButton: false,
              timer: 1500,
            });
            this.loadMateriales();
          } else {
            Swal.fire({
              icon: "error",
              title: "Fallo al eliminar",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.loadMateriales();
  },
};
</script>