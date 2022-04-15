<template>
  <div  class="l1">
    <HeaderComponent />

    
    
    <div class="padre">
         <h1>Lista de Agricultores y lideres </h1>

          <div>
        <b-navbar class="otro" toggleable="" >
               <b-button variant="success">Agricultores</b-button>
                  <b-button  variant="success"><router-link class="sj" to="/vistaPerfilesLider">Lideres</router-link> </b-button>
        </b-navbar>
      </div>

   

<br>
<h2>LISTA DE AGRICULTORES </h2>

          <hr />
<div>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item lista list-group-item-success">Agricultores </li>
  <li class="list-group-item list-group-item-success">Organizacion a la que pertenece</li>
    <li class="list-group-item list-group-item-success">Publicaciones</li>
  <li class="list-group-item lista list-group-item-success">Puntuacion por satisfaccion</li>
</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item lista">Jose Ramiro</li>
  <li class="list-group-item ">Organizacion 1</li>
<li class="list-group-item list-group-item-success lista2">5 Publicaciones</li>
  <li class="list-group-item lista">60%  de satisfaccion</li>
</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item lista">Maria del Mar </li>
  <li class="list-group-item ">Organizacion 2</li>
<li class="list-group-item list-group-item-success">3 Publicaciones</li>
  <li class="list-group-item lista">100%  de satisfaccion</li>
</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item lista">Sandra Jhoana Camo </li>
  <li class="list-group-item ">Organizacion 3</li>
  <li class="list-group-item list-group-item-success">2 Publicaciones</li>
  <li class="list-group-item lista">100%  de satisfaccion</li>
</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item lista">Gustavo Hernandez</li>
  <li class="list-group-item ">Organizacion 1</li>
  <li class="list-group-item list-group-item-success">4 Publicaciones</li>
  <li class="list-group-item lista">50%  de satisfaccion</li>
</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item lista">Jaime Barrera </li>
  <li class="list-group-item ">Organizacion 2</li>
  <li class="list-group-item list-group-item-success">2 Publicaciones</li>
  <li class="list-group-item lista">100%  de satisfaccion</li>
</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item lista">Jose Correa </li>
  <li class="list-group-item ">Organizacion 1</li>
  <li class="list-group-item list-group-item-success">4 Publicaciones</li>
  <li class="list-group-item lista">30%  de satisfaccion</li>
</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item lista">Jesus Ordoñes</li>
  <li class="list-group-item ">Organizacion 3</li>
  <li class="list-group-item list-group-item-success">1 Publicaciones</li>
  <li class="list-group-item lista">100%  de satisfaccion</li>
</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item lista">Martin  Elias </li>
  <li class="list-group-item ">agricultor independiente </li>
  <li class="list-group-item list-group-item-success">3 Publicaciones</li>
  <li class="list-group-item lista">100%  de satisfaccion</li>
</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item lista">Julian Lopez </li>
  <li class="list-group-item ">Agricultor independiente</li>
  <li class="list-group-item list-group-item-success">5 Publicaciones</li>
  <li class="list-group-item lista">100% de satisfaccion</li>
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
  background-image: url(../assets/1.png);
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