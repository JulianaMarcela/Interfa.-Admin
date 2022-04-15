import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import vistaFormularioIn from '../views/FormularioInView.vue'
import vistaPerfiles from '../views/PerfilesAgriView.vue'
import vistaAnunciosLinea from '../views/AnunciosLineaView.vue'
import vistaAnunciosLineaDos from '../views/AnunciosLineaDosView.vue'
import vistaAnunciosLineaTres from '../views/AnunciosLineaTresView.vue'
import vistaAnunciosLineaCuatro from '../views/AnunciosLineaCuatroView.vue'
import vistaProLineaUno from '../views/ProLineaUnoView.vue'
import vistaPerfilesLider from '../views/PerfilesLiderView.vue'
import vistaPublicacion from '../views/PublicacionView.vue'
import vistaFormularioIn2 from '../views/FormularioIn2View.vue'
import vistaInicio from '../views/InicioView.vue'
import vistaAyuda from '../views/AyudaView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: vistaInicio
  },
  {
    path: '/vistaInicio',
    name: 'inicio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/InicioView.vue')
  },

  {
    path: '/vistaAnunciosLinea',
    name: 'vistaAnunciosLinea',
    component:vistaAnunciosLinea
  },
  {
    path: '/vistaAnunciosLineaDos',
    name: 'vistaAnunciosLineaDos',
    component:vistaAnunciosLineaDos
  },
  {
    path: '/vistaAnunciosLineaTres',
    name: 'vistaAnunciosLineaTres',
    component:vistaAnunciosLineaTres
  },
  {
    path: '/vistaAnunciosLineaCuatro',
    name: 'vistaAnunciosLineaCuatro',
    component:vistaAnunciosLineaCuatro
  },
  {
    path: '/vistaProLineaUno',
    name: 'vistaProLineaUno',
    component:vistaProLineaUno
  },
  {
    path: '/vistaFormularioIn2',
    name: 'vistaFormularioIn2',
    component: vistaFormularioIn2
  },
  {
    path: '/vistaPerfilesLider',
    name: 'vistaPerfilesLider',
    component: vistaPerfilesLider
  },
  {
    path: '/vistaPerfiles',
    name: 'vistaPerfiles',
    component: vistaPerfiles
  },
  {
    path: '/vistaPublicacion',
    name: 'vistaPublicacion',
    component: vistaPublicacion
  },
  {
    path: '/vistaFormularioIn',
    name: 'vistaFormularioIn',
    component: vistaFormularioIn
  },
  {
    path: '/vistaInicio',
    name: 'vistaInicio',
    component: vistaInicio
  },
  {
    path: '/vistaInicio',
    name: 'vistaInicio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/InicioView.vue')
  },

  {
    path: '/vistaAyuda',
    name: 'vistaAyuda',
    component: vistaAyuda
  },
  {
    path: '/vistaAyuda',
    name: 'vistaAyuda',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AyudaView.vue')
  }


]

const router = new VueRouter({
  routes
})

export default router
