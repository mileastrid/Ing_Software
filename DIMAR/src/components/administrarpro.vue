<template>
  <transition name="fade">
    <div class="modal-overlay" v-if="showModal"></div>
  </transition>
  <transition name="fade">
    <div class="modal" v-if="showModal">
      <RegistrarProducto v-on:updateModal="updateModal"></RegistrarProducto>
    </div>
  </transition>
  <div class="contendoradministrar">
    <div class="titadm">
      <h1 class="titularadministrar">ADMINISTRAR PRODUCTOS</h1>
      <button class="btnadministrar" @click="showModal = true">
        Agregar producto
      </button>
    </div>
    <table class="greyGridTable">
      <thead>
        <tr>
          <th>Referencia</th>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Material</th>
          <th>Suela</th>
          <th>Talla</th>
          <th>Categoria</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="producto in productos" :key="producto.reference">
          <td>{{ producto.reference }}</td>
          <td>
            <img :src="producto.imageurl" alt="" width="100" height="100" />
          </td>
          <td>{{ producto.name }}</td>
          <td>{{ this.formatPeso.format(producto.price) }}</td>
          <td>{{ producto.material }}</td>
          <td>{{ producto.sole }}</td>
          <td>{{ producto.size }}</td>
          <td>{{ producto.category }}</td>
          <td>
            <form v-on:submit.prevent="delProducto">
              <input
                type="hidden"
                name="producto"
                v-bind:value="producto.reference"
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
</template>

<script>
import RegistrarProducto from "./registrarProducto.vue";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "Admprod",
  components: { RegistrarProducto },
  data() {
    return {
      productos: [],
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
      this.loadProductos();
      this.showModal = modal;
    },
    loadProductos() {
      axios
        .get("https://app-calzado.herokuapp.com/prod", {
          headers: {},
        })
        .then((result) => {
          this.productos = result.data;
        })
        .catch((error) => {
          alert(error);
        });
    },
    delProducto(submitEvent) {
      let prod = {
        reference: submitEvent.target.elements.producto.value,
      };
      axios
        .delete("https://app-calzado.herokuapp.com/prod/" + prod.reference, {
          headers: {},
        })
        .then((result) => {
          if (result.status == 201) {
            Swal.fire({
              icon: "success",
              title: "Producto eliminado",
              showConfirmButton: false,
              timer: 1500,
            });
            this.loadProductos();
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
    this.loadProductos();
  },
};
</script>

<style>
.titadm {
  display: flex;
  justify-content: space-between;
  padding: 30px;
}
.btnadministrar {
  border: 4px solid #ffffff;
  background-color: rgba(181, 19, 19, 0.75) !important;
  color: #ffffff;
  font-size: 30px;
  font-weight: 900;
  padding: 5px;
}
.contendoradministrar {
  background-color: rgba(181, 19, 19, 0.75);
  padding: 50px;
}
.titularadministrar {
  font-size: 50px;
  font-weight: 900;
  color: #ffffff;
}
table.greyGridTable {
  border: 2px solid #ffffff;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  background-color: #ffffff;
}
table.greyGridTable td,
table.greyGridTable th {
  border: 2px solid #000000;
  padding: 3px 4px;
}
table.greyGridTable tbody td {
  font-size: 18px;
}
table.greyGridTable td:nth-child(even) {
  background: #ebebeb;
}
table.greyGridTable thead {
  background: #ffffff;
  border: 2px solid #000000;
}
table.greyGridTable thead th {
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  text-align: center;
  border: 2px solid #000000;
}
table.greyGridTable thead th:first-child {
  border-left: none;
}

table.greyGridTable tfoot {
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  border: 4px solid #000000;
}
table.greyGridTable tfoot td {
  font-size: 14px;
}
</style>