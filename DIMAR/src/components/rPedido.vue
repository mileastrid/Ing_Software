<template>
  <div class="contendorpedido">
    <h1 class="titularpedido">REGISTRAR PEDIDO</h1>
    <div class="ctn">
      <div class="conclientes">
        <div class="cliente">
          <h3>Cliente:</h3>
          <select class="inp" v-model="Selcliente" @change="updateCli">
            <option v-for="cliente in clientes" :key="cliente.cedula">
              {{ cliente.cedula }}
            </option>
          </select>
          <button class="btnpedido" @click="realizarPedido">
            Realizar pedido
          </button>
        </div>
        <div class="fechaTotal">
          <h3>Fecha:</h3>
          <input type="text" class="inpt" v-model="pedido.fecha" />
          <h3>Total:</h3>
          <p>{{ this.formatPeso.format(pedido.total) }}</p>
        </div>
      </div>
      <hr />
      <h2>Productos</h2>

      <table class="greyGridTable">
        <thead>
          <tr>
            <th>Referencia</th>
            <th>Cantidad</th>
            <th>Costo</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in carro" :key="item.reference_prod">
            <td>{{ item.reference_prod }}</td>
            <td>{{ item.cant_dp }}</td>
            <td>{{ this.formatPeso.format(item.precio_dp) }}</td>
            <td>
              <form v-on:submit.prevent="delProducto">
                <input
                  type="hidden"
                  name="producto"
                  v-bind:value="item.reference_prod"
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
export default {
  name: "Pedido",
  data() {
    return {
      clientes: [],
      carro: JSON.parse(sessionStorage.getItem("car")) || [],
      pedido: {
        cedula: "",
        total: 0,
        fecha: "",
      },
      formatPeso: new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
      }),
    };
  },
  methods: {
    updateCli() {
      this.pedido.cedula = parseInt(this.Selcliente);
    },
    loadClientes() {
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
    delProducto(submitEvent) {
      let prod = {
        reference: submitEvent.target.elements.producto.value,
      };
      let delid = 0;
      for (let i = 0; i < this.carro.length; i++) {
        if (this.carro[i].reference_prod === prod.reference) {
          delid = i;
          this.carro.splice(delid, 1);
          sessionStorage.setItem("car", JSON.stringify(this.carro));
          Swal.fire({
            icon: "success",
            title: "Producto eliminado",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
      this.obtnTotal();
    },
    realizarPedido() {
      let pedidoID = 0;
      let itempedido;
      axios
        .post("https://app-calzado.herokuapp.com/ped", this.pedido, {
          headers: {},
        })
        .then((result) => {
          if (result.data.detail) {
            Swal.fire({
              icon: "error",
              title: "Fallo al registrar pedido",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            pedidoID = result.data.body.response[0].id;
            for (let item of this.carro) {
              itempedido = {
                id_ped: pedidoID,
                reference_prod: item.reference_prod,
                cant_dp: item.cant_dp,
                precio_dp: item.precio_dp,
              };
              axios
                .post("https://app-calzado.herokuapp.com/pedDet", itempedido, {
                  headers: {},
                })
                .then((result) => {})
                .catch((error) => {
                  alert(error);
                  Swal.fire({
                    icon: "error",
                    title: "Fallo al crear",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                });
            }
            Swal.fire({
              icon: "success",
              title: "Pedido registrado",
              showConfirmButton: false,
              timer: 1500,
            });
            sessionStorage.removeItem("car");
            this.$router.push({path: '/panelAd'});
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Fallo al crear pedido",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    obtnTotal() {
      let precio = 0;
      for (let item of this.carro) {
        precio += item.precio_dp * item.cant_dp;
      }
      this.pedido.total = precio;
    },
  },
  mounted() {
    this.loadClientes();
    this.obtnTotal();
  },
};
</script>

<style>
.contendorpedido {
  padding: 30px;
  background-color: rgba(181, 19, 19, 0.75);
}
.ctn {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  margin: 30px;
}
.cliente {
  display: flex;
  justify-content: space-evenly;
  font-size: 30px;
}
.inp {
  width: 700px;
  height: 40px;
}

.fechaTotal {
  display: flex;
  justify-content: space-evenly;
  padding: 30px;
  font-size: 30px;
}
.inpt {
  width: 370px;
  height: 40px;
}
.btnpedido {
  background-color: #b51313;
  color: white;
  font-size: 25px;
  border-radius: 30px;
  border: none;
  padding: 8px;
}

.titularpedido {
  font-weight: 900;
  color: white;
  font-size: 50px;
  text-align: center;
}
</style>