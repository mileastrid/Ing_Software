import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Conocenos from './views/conocenos.vue';
import Calzado from './views/calzado.vue';
import CalzadoC from './views/calzadoC.vue';
import CalzadoN from './views/calzadoN.vue';
import panelOp from './views/panelOperador.vue';
import panelAd from './views/panelAdmin.vue';
import Balances from './views/Balances.vue';
import inicio from './views/inicio.vue';
import adminpro from './views/AdmProductos.vue';
import pedido from './views/pedido.vue';
import agregaropd from './views/AgregarOpd.vue';
import agcliente from './views/Agregarcliente.vue';
import agregarmaterial from './views/Agregarmaterial';
import agregarprov from './views/AgregarProv.vue';
import agregarop from './views/AgregarOpd.vue';
const routes = [
{
  path: '/',
  name: 'root',
  component: inicio
},
{
  path: '/calzado-dama',
  name: 'caldama',
  component: Calzado
},
{
  path: '/calzado-caballero',
  name: 'calcaballero',
  component: CalzadoC
},
{
  path: '/calzado-ninos',
  name: 'calniños',
  component: CalzadoN
},
{
  path: '/conocenos',
  name: 'conocenos',
  component: Conocenos
},
{
  path:'/panelAd',
  name: 'paneladmin',
  component: panelAd
},
{
  path: '/panelOp',
  name: 'panelOp',
  component: panelOp
},
{
  path: '/agregar-cliente',
  name: 'AgCliente',
  component: agcliente
},
{
  path: '/agregar-proveedor',
  name: 'AgProveedor',
  component: agregarprov
},
{
  path: '/agregar-operador',
  name: 'AgOperador',
  component: agregarop
},
{
  path:'/administrar-productos',
  name: 'adminpro',
  component: adminpro
},
{
  path: '/administrar-materiales',
  name: 'AgMaterial',
  component: agregarmaterial
},
{
  path: '/balance',
  name: 'Balances',
  component: Balances
},
{
  path: '/registrar-pedido',
  name:  'Pedido',
  component: pedido
},

]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
