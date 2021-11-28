import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Conocenos from './views/conocenos.vue';
import Calzado from './views/calzado.vue';
import CalzadoC from './views/calzadoC.vue';
import CalzadoN from './views/calzadoN.vue';
import barraNavegacion from './components/barraNav.vue';

const routes = [
{
  path: '/',
  name: 'root',
  component: Conocenos
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
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
