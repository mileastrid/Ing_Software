<template>
  <div class="contenedorbalance">
    <h1 class="titularbalance">BALANCES</h1>
    <div class="tbalances">
      <div class="pnlb">
        <h3>Balances general de gastos en materiales</h3>
        <br />
        <div class="bal">
          <p>{{ this.formatPeso.format(balanceMat) }}</p>
          <img src="../assets/entrar.png" alt="" />
        </div>
      </div>
      <div class="pnlb">
        <h3>Balance general de ventas de productos</h3>
        <br />
        <div class="bal">
          <p>{{ this.formatPeso.format(balancePed) }}</p>
          <img src="../assets/entrar.png" alt="" />
        </div>
      </div>
      <div class="pnlb">
        <h3>Balance general de ganancias</h3>
        <br />
        <div class="bal">
          <p>{{ this.formatPeso.format(balancePed-balanceMat) }}</p>
          <img src="../assets/entrar.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "Balances",
  data() {
    return {
      balanceMat: "",
      balancePed: "",
      formatPeso: new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
      }),
    };
  },
  methods: {
    loadBalanceMats() {
      axios
        .get("https://app-calzado.herokuapp.com/bal/materiales", {
          headers: {},
        })
        .then((result) => {
          let bal = result.data;
          this.balanceMat = bal[0].sum;
        })
        .catch((error) => {
          alert(error);
        });
    },
    loadBalancePeds() {
      axios
        .get("https://app-calzado.herokuapp.com/bal/pedidos", {
          headers: {},
        })
        .then((result) => {
          let bal = result.data;
          this.balancePed = bal[0].sum;
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
  mounted() {
    this.loadBalanceMats();
    this.loadBalancePeds();
  },
};
</script>
<style>
.contenedorbalance {
  background: rgba(181, 19, 19, 0.75);
  padding-bottom: 30px;
}
.titularbalance {
  padding-top: 30px;
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 50px;
}

.tbalances {
  padding: 30px;
  display: grid;
  margin-top: 30px;
  margin-right: 300px;
  margin-left: 300px;
  grid-template-columns: repeat(1, 2fr);
  grid-gap: 10px;
  background-color: white;
  border-radius: 15px;
  align-items: center;
}

.pnlb {
  margin-left: 160px;
  padding-left: 12px;
  border: 5px solid #b51313;
  width: 360px;
  height: 200px;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 46px;
  color: #b51313;
  border-radius: 12px;
  background-color: white;
}

.btnadmin {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  position: relative;
  left: 300px;
  top: 20px;
}

.bal {
  display: flex;
  text-align: center;
}
</style>
