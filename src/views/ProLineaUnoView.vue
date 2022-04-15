<template>
    <div>
         <HeaderComponent />

    
    
    <div class="padre">
         <h1>Lista de Productos en linea  </h1>

          <div>
        <b-navbar class="otro" toggleable="" >
               <b-button variant="success"><router-link class="sj" to="/vistaPerfiles">Agricultores</router-link></b-button>
                  <b-button  variant="success">Lideres</b-button>
        </b-navbar>
      </div>

   

<br>
<h2>LISTA DE LIDERES </h2>

          <hr />
<div>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item lista list-group-item-success">Lideres de agrucultores  </li>
  <li class="list-group-item list-group-item-success">Nombre de la Organizacion que tiene a cargo</li>
    <li class="list-group-item list-group-item-success">Numero de todos los agricultores a cargo </li>

</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item lista">Jose Ramiro</li>
  <li class="list-group-item ">Nombre de la Organizacion: Organizacion 1</li>
<li class="list-group-item list-group-item-success lista2">Numero de agricultores : 30 agricultores </li>
</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item lista">Maria del Mar </li>
  <li class="list-group-item ">Nombre de la Organizacion: Organizacion 2</li>
<li class="list-group-item list-group-item-success">Numero de agricultores : 10 agricultores </li>
</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item lista">Sandra Jhoana Camo </li>
  <li class="list-group-item ">Nombre de la Organizacion: Organizacion 3</li>
  <li class="list-group-item list-group-item-success">Numero de agricultores : 20 agricultores</li>
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
    flex-basis: 90%;
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