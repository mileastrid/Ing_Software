<template>
  <div id="app" class="app">
    <div class="header">
      <ul class="datosHeader">
        <div class="cLi">
          <li><img src="../assets/iconLocation.png" alt="" /></li>
          <li>Calle 2 #9-69 Barrio Santander / Villa del Rosario</li>
        </div>
        <div class="cLi">
          <li><img src="../assets/iconPhone.png" alt="" /></li>
          <li>3156252089</li>
        </div>
      </ul>
    </div>
  </div>
  <Header></Header>
  <Navi></Navi>
  <div>
    <h1 class="dama">CALZADO PARA DAMA</h1>
    <hr />
    <div class="productos">
      <div
        class="product"
        v-for="product in productos"
        :key="product.reference"
      >
        <div class="img"><img :src="product.imageurl" alt="" /></div>
        <div>
          <h3>{{ product.name }}</h3>
        </div>
        <div>
          <p>Ref. {{ product.reference }}</p>
        </div>
        <div class="añadir">
          <h3>{{ this.formatPeso.format(product.price) }}</h3>
          <form v-on:submit.prevent="addtocar">
            <input
              type="hidden"
              name="producto"
              v-bind:value="product.reference"
            />
            <input type="hidden" name="precio" v-bind:value="product.price" />
            <button type="submit" class="trans">
              <img src="../assets/agregar.png" alt="" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <footer class="piePagina">
    <div class="info">
      <h2>INFORMACIÓN</h2>
      <ul class="pList">
        <div class="pLocation">
          <li><img src="../assets/iconLocation.png" alt="" /></li>
          <li>Calle 2 #9-69 Barrio Santander / Villa del Rosario</li>
        </div>
        <div class="pPhone">
          <li><img src="../assets/iconPhone.png" alt="" /></li>
          <li>3156252089</li>
        </div>
      </ul>
    </div>
    <div class="fcategorias">
      <h2>CATEGORÍAS</h2>
      <p>Dama / Caballero / Niños</p>
    </div>
  </footer>
</template>

<script>
import axios from "axios";
import Header from "../components/header.vue";
import Navi from "../components/barraNav.vue";
import Paneloperador from "../components/paneloperador.vue";
import Swal from "sweetalert2";
export default {
  name: "Calzado",
  data() {
    return {
      productos: [],
      formatPeso: new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
      }),
    };
  },
  components: { Header, Navi, Paneloperador },
  methods: {
    getAll() {
      axios
        .get("https://app-calzado.herokuapp.com/prod", {
          headers: {},
        })
        .then((result) => {
          this.productos = result.data.filter(
            (prod) => prod.category == "Dama"
          );
        })
        .catch((error) => {
          alert(error);
        });
    },
    addtocar(submitEvent) {
      let prod = {
        reference: submitEvent.target.elements.producto.value,
        price: submitEvent.target.elements.precio.value,
      };
      let carro = JSON.parse(sessionStorage.getItem("car")) || [];
      let insertar = true;
      let item = {
        reference_prod: prod.reference,
        cant_dp: 1,
        precio_dp: prod.price,
      };
      for (let items of carro) {
            if (item.reference_prod === items.reference_prod) {
                insertar = false;
                items.cant_dp += item.cant_dp;
            }
        }
        if (insertar) {
            carro.push(item);
        }
      sessionStorage.setItem("car", JSON.stringify(carro));
      Swal.fire({
        icon: "success",
        title: "Producto agregado",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
  mounted() {
    this.getAll();
  },
};
</script>

<style>
.datosHeader {
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  background: rgba(0, 0, 0, 0.84);
  color: white;
  font-size: 25px;
}

.cLi {
  display: flex;
  margin-top: 12px;
}

.cLi,
li {
  padding-left: 15px;
}
.piePagina {
  display: flex;
  justify-content: space-evenly;
  background: rgba(0, 0, 0, 0.86);
  color: white;
  font-size: 25px;
  text-align: center;
}
.pList {
  list-style: none;
  justify-content: start;
}
.pLocation {
  display: flex;
}
.pPhone {
  display: flex;
}
.info {
  margin: 30px;
}
.fcategorias {
  margin: 30px;
}

.dama {
  margin-top: 2rem;
  margin-left: 2rem;
  font-weight: bold;
}

.productos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 60px;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.product {
  width: 220px;
  margin-left: 1rem;
  padding: 1rem;
  box-shadow: 2px 3px 13px -6px #000000;
}

.img img {
  width: 100%;
  height: 220px;
}

.añadir {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.trans {
  background: none;
  border: none;
}
</style>