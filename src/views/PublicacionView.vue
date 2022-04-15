<template>
  <div class="fondo">
    <HeaderComponent />

        <h3>PUBLICACION DE PRODUCTO</h3>
            
    <section class="d-flex flex-wrap justify-content-evenly padre">

          

      <section>
   <br>
          
         <div class="formu">
              <b-form inline>


       <div class="mb-3">
           <label for="formFile" class="form-label">Foto del producto</label>
          <input class="form-control" type="file" id="formFile">
       </div>
       <br>
 <div>
          <b-form inline>
            <label class="mr-sm-2" for="inline-form-custom-select-pref"
              >Ciudad a la que pertenece el producto : </label>
              
            <b-form-select
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              :options="[
                { text: 'Ciudades', value: null },
                'Pasto',
                'Popayan',
                'Cali',
                'Bogota',
                'Medellin',
                'Cartagena',
                'Armenia',
                'Barranquilla',
                'Cucuta',
                'Ibagué tolima'
              ]"
              :value="null"
            ></b-form-select>
          </b-form>
        </div>
        <br>
       <div class="row g-3">
     <label for="formFile" class="form-label">Datos del agricultor</label>
  <div class="col">
    <input type="text" class="form-control" placeholder="Nombre..." aria-label="Nombre">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Apellido..." aria-label="Apellido...">
  </div>
  

  
  
   <hr />
</div>
 <label class="sr-only" for="inline-form-input-username">Correo Electronico</label>
        <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input
            id="inline-form-input-username"
            placeholder="ejem@gmail.com"
          ></b-form-input>
        </b-input-group>

        <br>
        
 <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Contraseña</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword">
    </div>
  </div>

 <hr />

        <div>
          <b-form inline>
            <label class="mr-sm-2" for="inline-form-custom-select-pref"
              >Nombre de organizacion</label
            >
            <b-form-select
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              :options="[
                { text: 'Opciones', value: null },
                'Agricultor indeoendiente',
                'Organizacion 1',
                'Organizacion 2',
                'Organizacion 3',
                'Organizacion 4',
                'Organizacion 5'
              ]"
              :value="null"
            ></b-form-select>
          </b-form>
        </div>

        <hr /> 

      </b-form>
         </div>

      </section>

      
      <section>

             <br>
             
         <div class="formu">
              <b-form inline>

        <div>
            <label for="text">Nombre del producto </label>
            <b-form-input
              placeholder="Nombre del producto..."
            ></b-form-input>
        </div>

         <br>

         <div>
            <label for="text">Numero para communicar...</label>
            <b-form-input
              placeholder="Numero de Telefono..."
            ></b-form-input>
        </div>

        <br>

        

        <br>

        <div>
            <fieldset class="row mb-3">
       <legend class="col-form-label col-sm-2 pt-0">Filtro de : </legend>
         <div class="col-sm-10">
          <div class="">
             
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
            
           <label class="form-check-label" for="gridRadios1">
          Verdura
            </label>
          </div>
          <div class="">
           <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="form-check-label" for="gridRadios2">
          Frutas
          </label>
          </div>
           <div class="">
           <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="form-check-label" for="gridRadios2">
          Grano
          </label>
          </div>
    </div>
  </fieldset>
        </div>


            <hr />


      <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Descripcion del producto </label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Descripcion...</textarea>

</div>

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

      </b-form>
         </div>

      </section>


    </section>
    
        <b-button variant="success">Hacer Registro</b-button> 


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
  background-image: url(../assets/1.png);
}
</style>