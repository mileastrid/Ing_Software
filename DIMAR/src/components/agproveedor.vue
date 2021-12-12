<template>
  <transition name="fade">
    <div class="modal-overlay" v-if="showModal"></div>
  </transition>
  <transition name="fade">
    <div class="modal" v-if="showModal">
      <RegistrarProveedor v-on:updateModal="updateModal"></RegistrarProveedor>
    </div>
  </transition>
  <div class="conta">
    <div class="contendoroperador">
      <div class="titadm">
        <h1 class="titularadministrar">ADMINISTRAR PROVEEDORES</h1>
        <button class="btnoperador" @click="showModal = true">
          Agregar proveedor
        </button>
      </div>
    </div>
    <div class="ctntabla">
      <table class="greyGridTable">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Identificación</th>
            <th>Celular</th>
            <th>Empresa</th>
            <th>NIT</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="proveedor in proveedores" :key="proveedor.cedula">
            <td>{{ proveedor.nombre }}</td>
            <td>{{ proveedor.cedula }}</td>
            <td>{{ proveedor.celular }}</td>
            <td>{{ proveedor.empresa }}</td>
            <td>{{ proveedor.nit }}</td>
            <td>
              <form v-on:submit.prevent="delProveedor">
                <input
                  type="hidden"
                  name="proveedor"
                  v-bind:value="proveedor.cedula"
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
import RegistrarProveedor from "../components/registrarProveedor.vue";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "AgregarProv",
  data() {
    return {
      proveedores: [],
      showModal: false,
    };
  },
  components: { RegistrarProveedor },
  methods: {
    updateModal(modal) {
      this.loadProveedores();
      this.showModal = modal;
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
    delProveedor(submitEvent){
      let prov= {
        cedula: parseInt(submitEvent.target.elements.proveedor.value)
      }
      axios.delete("https://app-calzado.herokuapp.com/prov/" + prov.cedula, {
        headers: {}
      })
      .then((result)=>{
        if(result.status==201){
          Swal.fire({
              icon: "success",
              title: "Proveedor eliminado",
              showConfirmButton: false,
              timer: 1500,
            });
            this.loadProveedores();
        }else{
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
    }
  },
  mounted(){
    this.loadProveedores();
  }
};
</script>

<style>
.modal-overlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
}

.btnoperador {
  border: 4px solid #ffffff;
  background: rgba(181, 19, 19, 0.75);
  color: #ffffff;
  font-size: 30px;
  font-weight: 900;
  padding: 5px;
}

.conta {
  padding: 50px;
  background: rgba(181, 19, 19, 0.75);
}
</style>