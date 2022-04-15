<template>
  <div class="fondo">
    <HeaderComponent />

        <h1>AYUDA.</h1>
            
    <section class="d-flex flex-wrap justify-content-evenly padre">

           <div>
              <h2>Reporte de falla o busca ayuda </h2>
              <h6>Para poder reportar una falla es necesario que llenoes el formulario 
                de reporte de falla de funciones indispensables del ADMINISTRADOR.</h6>
              <h6> En caso de duda encontraras opciones de ayuda </h6>
            
            <br>  <br>
          </div>
           
      <section>
        <h2>REPORTE DE FALLA  </h2>
          <br>
          
         <div class="formu">
              <b-form inline>

        <div>
          <b-form inline>
            <label class="mr-sm-2" for="inline-form-custom-select-pref"
              >Donde se presenta el porblema  :</label
            > 
            <b-form-select
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              :options="[
                { text: 'Opciones', value: null },
                'Creacion de Formularios Agricultor lider',
                'Publucacion de Productos',
                'Perfiles al Cargo ',
                'Administracion de productos en linea ',
                'Contacto con lider ',
                'Configuraciones de perfil'
              ]"
              :value="null"
            ></b-form-select>
          </b-form>
        </div>

        <hr /> 

      </b-form>
         </div>

  

             <br>
             
         <div class="formu">
              <b-form inline>


        <div>
            <fieldset class="row mb-3">
       <legend class="col-form-label col-sm-2 pt-0">Urgencia de atencion : </legend>
         <div class="col-sm-10">
          <div class="">
             
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
            
           <label class="form-check-label" for="gridRadios1">
          Alta
            </label>
          </div>
          <div class="">
           <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="form-check-label" for="gridRadios2">
          Media
          </label>
          </div>
           <div class="">
           <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="form-check-label" for="gridRadios2">
          Baja
          </label>
          </div>
    </div>
  </fieldset>
        </div>


            <hr />


      <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Descripcion del Problema</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Descripcion...</textarea>

</div>

 <hr />

        <div>
          <b-form inline>
            <label class="mr-sm-2" for="inline-form-custom-select-pref"
              >Estimacion de respuesta y solucion</label
            >
            <b-form-select
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              :options="[
                { text: 'Seleccionar', value: null },
                '5 horas ',
                '25 horas',
                '48 horas',
                '72 horas',
                'una semana ',
              ]"
              :value="null"
            ></b-form-select>
          </b-form>
        </div>
        <br>
<h6> En caso de que la problematica no tenga respuesta en el rango de tiempo estimado, esperar respuesta. </h6>
        

        <b-button variant="success">Hacer Reporte</b-button> 
        
      </b-form>
         </div>
         
         <br>

         <hr /> 
           <h2>SOPORTE DE AYUDA. </h2>
          <br>
          
         <div class="formu">
              <b-form inline>

        <div>
          <b-form inline>
            <label class="mr-sm-2" for="inline-form-custom-select-pref"
              >Funcion para la que necesita ayuda :</label> 
            
            <b-form-select
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              :options="[
                { text: 'Opciones', value: null },
                'Creacion de Formularios Agricultor lider',
                'Publucacion de Productos',
                'Perfiles al Cargo ',
                'Administracion de productos en linea ',
                'Contacto con lider ',
                'Configuraciones de perfil'
              ]"
              :value="null"
            ></b-form-select>
          </b-form>
        </div>

        <hr /> 

      </b-form>
         </div>
             
         <div class="formu">
              <b-form inline>


      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Descripcion del Problema para ayuda </label>
         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Descripcion...</textarea>

       </div>

       

 <hr />
        <br>

        

        <b-button variant="success">Solicitar Ayuda y Asistencia </b-button> 
        
      </b-form>
         </div>
         
         <br>
         
      </section>


    </section>
    

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "InformacionView",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
/* .fondo{

} */
.padre {
  margin: 15px;
}
.mision {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 20px;
  text-align: center;
}
.vision {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 20px;
  text-align: center;
}
.top {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 20px;
  text-align: center;
}
.titulo {
  color: aliceblue;
  padding: 5px;
  background-color: rgb(56, 165, 42);
  border-radius: 15px;
}
.texto {
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
}
.tops {
  margin-top: 20px;
}
.nomT {
  margin-top: 10px;
  font-size: 25px;
}
.imgvision {
  margin-bottom: 30px;
}
.imgtop{
  margin-top: 30px;
}

.producto {
 
  /* margin: 15px solid rgb(218, 128, 12); */
  padding: 2px 30px;
  text-align: center;
  border: 1px solid rgb(47, 136, 39);
  padding: 20px;

  
  /* box-shadow: 0 8px 16px 0 rgba(199, 123, 9, 0.2); */
  /* background-color: rgb(82, 134, 78); */
}

.producto:hover {
  box-shadow: 0 8px 16px 0 rgba(26, 131, 61, 0.2);
  border: 3px solid rgb(218, 128, 12); 
    color: rgb(0, 0, 0);
    
}

.producto img {
  width: 300px;
}
.padre {
  margin-top: 2%;
  padding-left: 10%;
  padding-right: 10%;
  color: rgb(56, 165, 42);
  display: block;
  border: solid #ced4da;
  border-radius: 0.3rem;
  background-image: url(../assets/fondoref.jpg);
}
</style>