<template>
  <div class="fondo">
    <HeaderComponent />
    <section class="d-flex flex-wrap justify-content-evenly padre">

      <section>
          <br>  <br>
        <div class="producto">
           <h3>Formulario Inscripcion</h3>
              <h3>Agricultor y Lider</h3>
              <img class="imagen" src="../assets/fotoAgri.jpg" />
              <br>  <br>
           <br>
           <h5>Formulario de Inscripción,para agricultoresy lideres </h5>
           <h5>y asi crear perfiles de agricultor independiente, como</h5>
           <h5>agricultor relacionado a organizacion o lider;</h5>
           <h5> o como como lideres.</h5>
            <br>
      <b-button variant="success"><router-link class="sj" to="/vistaFormularioIn">Ver formulario</router-link> </b-button>
        </div>

            <br>  <br>


        <div class="producto">
           <h3>Perfiles Acargo.</h3>
              <img class="imagen" src="../assets/agricultores.jpg" />
              <br>  <br>
           <br>
           <h5>Perfiles de agricultores que se llevan registro</h5>
            <br>
      <b-button variant="success"><router-link class="sj" to="/vistaProLineaUno">Ver perfiles</router-link> </b-button>
        </div>

          <br>  <br>

      </section>

       <section>
          <br>  <br>
        <div class="producto">
           <h3>Publicacion De productos</h3>
              <img class="imagen" src="../assets/productos.jpg" />
              <br>  <br>
           <br>
           <h5>Formulario depublicacion de productos </h5>
           <h5>de datos pasados por agricultores y lideres.</h5>
            <br>
      <b-button variant="success"><router-link class="sj" to="/vistaPublicacion">Hacer Publicacion</router-link> </b-button>
        </div>

          <br>  <br>

         <div class="producto">
           <h3>Anuncios en linea .</h3>
              <img class="imagen" src="../assets/anuncios.jpg" />
              <br>  <br>
           <br>
           <h5>Publicaciones en line de productos </h5>
            <br>
      <b-button variant="success"><router-link class="sj" to="/vistaAnunciosLinea">Ver </router-link> </b-button>
        </div>

          <br>  <br>
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
  padding-left: 10%;
  padding-right: 10%;
  padding-inline-start: 2%;
  padding-inline-end: 2%;
  color: rgb(9, 65, 2);
  display: block;
  border: solid #cedad3;
  border-radius: 0.3rem;
  background-image: url(../assets/1.png);
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
  border: 3px solid rgb(218, 201, 12); 
    color: rgb(0, 0, 0);
    
}

.producto img {
  width: 300px;
}
</style>