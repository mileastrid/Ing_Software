<template>
<transition name="fade">
    <div class="modal-overlay" v-if="showModal"></div>
  </transition>
  <transition name="fade">
    <div class="modal" v-if="showModal">
      <RegistrarOperador v-on:updateModal="updateModal"></RegistrarOperador>
    </div>
  </transition>
<div class="conta">
      <div class="contendoroperador">
    <div class="titadm">
    <h1 class="titularadministrar">ADMINISTRAR OPERADORES</h1>
    <button class="btnoperador" @click="showModal = true">Agregar operador</button>
    </div>
      </div>
<div class="ctntabla">
       <table class="greyGridTable">
      <thead>
        <tr>
          <th>Usuario</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Acciones</th>
        </tr>
      </thead>
     
      <tbody>
        <tr v-for="operador in operadores" :key="operador.username">
            <td>{{ operador.username }}</td>
            <td>{{ operador.name }}</td>
            <td>{{ operador.email }}</td>
            <td>
              <form v-on:submit.prevent="delOperador">
                <input
                  type="hidden"
                  name="operador"
                  v-bind:value="operador.username"
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
import RegistrarOperador from "../components/registrarOperador.vue";
import axios from "axios";
import Swal from "sweetalert2";
export default {
    name: 'AgregarOpd',
    data(){
      return {
        operadores: [],
        showModal: false
      }
    },
    components: {RegistrarOperador},
    methods: {
    updateModal(modal) {
      this.loadOperadores();
      this.showModal = modal;
    },
    loadOperadores(){
      axios
        .get("https://app-calzado.herokuapp.com/user", {
          headers: {},
        })
        .then((result) => {
          this.operadores = result.data.filter(op =>  op.rol==0 );
        })
        .catch((error) => {
          alert(error);
        });
    },
    delOperador(submitEvent){
      let ope= {
        username: submitEvent.target.elements.operador.value
      }
      axios.delete("https://app-calzado.herokuapp.com/user/" + ope.username, {
        headers: {}
      })
      .then((result)=>{
        if(result.status==201){
          Swal.fire({
              icon: "success",
              title: "Operador eliminado",
              showConfirmButton: false,
              timer: 1500,
            });
            this.loadOperadores();
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
    this.loadOperadores();
  }
}
</script>

<style>
.btnoperador{
  border: 4px solid #FFFFFF;
  background: rgba(181, 19, 19, 0.75); 
  color: #FFFFFF;
  font-size: 30px;
  font-weight: 900;
  padding: 5px;
}


.conta{
  padding: 50px;
  background: rgba(181, 19, 19, 0.75); 
}
</style>