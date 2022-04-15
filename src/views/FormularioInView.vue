<template>
  <div  class="l1">
    <HeaderComponent />

    
    
    <div class="padre">
         <h1>REGISTRO</h1>

         <h6>Selecciona un tipo de registro segun corresponda,
            recuerda que dependiendo de la forma en la que te 
            registres tus funciones cambiaran. Las personas 
            registradas como Agricultores contaran con un perfil 
            dentro de la plataforma y contara con opciones y 
            opciones de usuario propias de este tipo de usuario.
            
            Los registros estimados como lideres, tendran un trato
            total mente diferete, aunque si se creara un perfil para 
            estos tipos de usuario </h6>
            
            <br>  <br>
            
   <div>
        <b-navbar class="otro" toggleable="" >
               <b-button variant="success">Agricultor</b-button>
                  <b-button  variant="success"><router-link class="sj" to="/VistaFormularioIn2">Lider</router-link> </b-button>
        </b-navbar>
      </div>
    

         <div class="formu">

             <h4>REGISTRO AGRICULTOR</h4>

              <b-form inline>
        <label class="sr-only" for="inline-form-input-name">Nombre </label>
        <b-form-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Nombre..."
        ></b-form-input>

        <label class="sr-only" for="inline-form-input-name">Apellidos </label>
        <b-form-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Apellido..."
        ></b-form-input>

        <label class="sr-only" for="inline-form-input-username">Correo Electronico</label>
        <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input
            id="inline-form-input-username"
            placeholder="Correo Electronico..."
          ></b-form-input>
        </b-input-group>

        
        <div>
          <b-form @submit.stop.prevent>
            <label for="text-password"> Contraseña</label>
            <b-form-input
              type="password"
              id="text-password"
              placeholder="**********"
              aria-describedby="password-help-block"
            ></b-form-input>
            <b-form-text id="password-help-block" class="texto">
              Su contraseña debe tener entre 10 a 15 caracteres, contener letras
              y números, caracteres especiales.
            </b-form-text>
          </b-form>
        </div>

          <hr />

        <label class="sr-only" for="inline-form-input-name">Telefono </label>
        <b-form-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Telefono..."
        ></b-form-input>

        <label class="sr-only" for="inline-form-input-name">Direccion </label>
        <b-form-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Direccion..."
        ></b-form-input>

        <label class="sr-only" for="inline-form-input-name">Ciudad</label>
        <b-form-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Ciudad..."
        ></b-form-input>



        <hr />

        <div>
          <b-form inline>
            <label class="mr-sm-2" for="inline-form-custom-select-pref"
              >Comunidad a la que pertenece</label
            >
            <b-form-select
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              :options="[
                { text: 'Seleccionar', value: null },
                'Indígenas',
                'Afrodescendientes',
                'Desplazado',
                'Victima de Conflicto armado',
                'otra',
              ]"
              :value="null"
            ></b-form-select>
          </b-form>
        </div>
        <hr />

        <b-button variant="success">Hacer Registro</b-button>
      </b-form>

         </div>
       
       <br>  <br>

     
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

h1{
    margin-top: 2%;
    color: rgb(56, 165, 42);
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


hr {
  color: black;
}

.texto {
  color: black;
}

.ver {
  background-color: rgb(73, 143, 64);
}
.otro {
  
  margin-inline-start: 150px;
  margin-inline-end: 100px;
}


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  color: #42b983;
}
.frut {
  background-color: rgb(255, 255, 255);
}

.inve {
  display: flex;
}
.inicio {
  margin-top: 5%;
  /* border: 3px solid #2E86C1; */
  /* border-radius: 50px; */
  padding: 20px;
}

.formulario {
  color: black;
}

.boton1 {
  background-color: #198754;
}

.boton2 {
  background-color: #761212c1;
}

.js{
  list-style: none;
  text-decoration: none;
  color:rgba(255, 255, 255, 0.55);;
}
.sj{
     list-style: none;
     text-decoration: none;
}
</style>