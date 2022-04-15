import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from  'bootstrap-vue' 

// Importar archivos Bootstrap y BootstrapVue CSS (el orden es importante) 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/js/dist/carousel'
import 'bootstrap-vue/dist/bootstrap-vue'

// Haga que BootstrapVue esté disponible en todo su proyecto 
Vue.use(BootstrapVue) 
// Opcionalmente, instale el complemento de componentes de iconos de BootstrapVue 
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
