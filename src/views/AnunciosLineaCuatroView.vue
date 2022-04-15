<template>
  <div  class="l1">
    <HeaderComponent />

    
    
    <div class="padre">
         <h1>Lista de Productos en linea </h1>

          <div>
        <b-navbar class="otro" toggleable="" >
          
               <b-button variant="success"><router-link class="sj" to="/vistaAnunciosLinea">Organizacion 1</router-link> </b-button>
               <b-button variant="success"><router-link class="sj" to="/vistaAnunciosLineaDos">Organizacion 2</router-link> </b-button>
               <b-button  variant="success"><router-link class="sj" to="/vistaAnunciosLineaTres">Organizacion 3</router-link> </b-button>
               <b-button variant="success">Agricultores Independientes </b-button>
            
        </b-navbar>
      </div>

   

<br>
<h2>Lista de preoductos AGRICULTORES INDEPENDIENTES</h2>

          <hr />
<div>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item lista list-group-item-success">Agricultores </li>
    <li class="list-group-item list-group-item-success">Publicaciones</li>
  <li class="list-group-item lista list-group-item-success">Agotar Publicaciones</li>
</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item lista">Sandra Jhoana Camo </li>
  <li class="list-group-item list-group-item-success">2 Publicaciones</li>
  <li class="list-group-item lista"> <div>
          <b-form inline>
            <label class="mr-sm-2" for="inline-form-custom-select-pref"
              >selecciona publicacion a agotar</label
            >
            <b-form-select
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              :options="[
                { text: 'Seleccionar', value: null },
                'Publicacion 1',
                'Publicacion 2',
              ]"
              :value="null"
            ></b-form-select>
          </b-form>
        </div></li>
</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item lista">Jesus Ordoñes</li>
  <li class="list-group-item list-group-item-success">1 Publicaciones</li>
  <li class="list-group-item lista"> <div>
          <b-form inline>
            <label class="mr-sm-2" for="inline-form-custom-select-pref"
              >selecciona publicacion a agotar</label
            >
            <b-form-select
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              :options="[
                { text: 'Seleccionar', value: null },
                'Publicacion 1',
              ]"
              :value="null"
            ></b-form-select>
          </b-form>
        </div></li>
</ul>


<br>

</div>





      </div>
            
  
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "../components/FooterComponent.vue"
import HeaderComponent from "../components/HeaderComponent.vue"
export default {
  name: "RegistroView",
  components: {
    FooterComponent,
    HeaderComponent,
  } 
};
</script>

<style scoped>

.lista{
    padding-inline:10% ;
    flex-basis: 90%;
    -ms-flex-line-pack: center;
}


.padre {
  margin-top: 2%;
  padding-left: 10%;
  padding-right: 10%;
  color: rgb(56, 165, 42);
  display: block;
  border: solid #ced4da;
  border-radius: 0.3rem;
  background-image: url(../assets/3.png);
}
.formu{
    margin-top: 3%;
  padding-left: 20%;
  padding-right: 20%;
  color: rgb(56, 165, 42);
  display: block;
  border: solid #dad7ce;
  border-radius: 0.3rem;
  
}

</style>