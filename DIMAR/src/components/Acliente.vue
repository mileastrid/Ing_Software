<template>
  <transition name="fade">
    <div class="modal-overlay" v-if="showModal"></div>
  </transition>
  <transition name="fade">
    <div class="modal" v-if="showModal">
      <AddClient v-on:updateModal="updateModal"></AddClient>
    </div>
  </transition>
  <div class="conta">
    <div class="contendoroperador">
      <div class="titadm">
        <h1 class="titularadministrar">ADMINISTRAR CLIENTE</h1>
        <button class="btnoperador" @click="showModal = true">
          Agregar cliente
        </button>
      </div>
    </div>
    <div class="ctntabla">
      <table class="greyGridTable">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Identificación</th>
            <th>Empresa</th>
            <th>Celular</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="cliente in clientes" :key="cliente.cedula">
            <td>{{ cliente.nombre }}</td>
            <td>{{ cliente.cedula }}</td>
            <td>{{ cliente.empresa }}</td>
            <td>{{ cliente.celular }}</td>
            <td>
              <form v-on:submit.prevent="delCliente">
                <input
                  type="hidden"
                  name="cedula"
                  v-bind:value="cliente.cedula"
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
import axios from "axios";
import Swal from "sweetalert2";
import AddClient from '../components/addClient.vue';
export default {
  name: "Agcliente",
  data(){
    return {
      clientes: [],
      showModal: false
    }
  },
  components: {AddClient},
  methods: {
    updateModal(modal){
      this.loadClientes();
      this.showModal = modal;
    },
    loadClientes(){
      axios
        .get("https://app-calzado.herokuapp.com/cli", {
          headers: {},
        })
        .then((result) => {
          this.clientes = result.data;
        })
        .catch((error) => {
          alert(error);
        });
    },
    delCliente(submitEvent){
      let cli= {
        cedula: parseInt(submitEvent.target.elements.cedula.value)
      }
      axios.delete("https://app-calzado.herokuapp.com/cli/" + cli.cedula, {
        headers: {}
      })
      .then((result)=>{
        if(result.status==201){
          Swal.fire({
              icon: "success",
              title: "Cliente eliminado",
              showConfirmButton: false,
              timer: 1500,
            });
            this.loadClientes();
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
    this.loadClientes();
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

.delBtn {
  background: none;
  border: none;
  cursor: pointer;
}
</style>