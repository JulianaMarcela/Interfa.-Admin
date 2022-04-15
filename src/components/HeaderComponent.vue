<template>
  <div class="hello">
    <header>
      <div>
        <b-navbar class="ver" toggleable="sm" type="dark">
          <img src="../assets/logoWeb.png" alt="" />

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>



          <b-collapse id="nav-collapse" is-nav>

            <b-navbar-nav>
              <b-nav-item ><router-link class="js" to="/vistaInicio"> INICIO</router-link> </b-nav-item>
                  <b-nav-item ><router-link class="js" to="/vistaAyuda">AYUDA</router-link></b-nav-item>
              </b-navbar-nav>
          
              
              <b-navbar-nav>
              <b-nav-item ><b-link v-b-toggle.sidebar-border class="js">OPCIONES DE USUARIO</b-link></b-nav-item>
            </b-navbar-nav>


              <!-- <b-nav-item-dropdown text="PERFIL">
                <b-button class="frut btn btn-outline-success my-1"
                  >Perfil
                </b-button>
                <b-button class="frut btn btn-outline-success my-1"
                  >Cerar sesion
                </b-button>
                <b-button class="frut btn btn-outline-success my-1"
                  >Ayuda
                </b-button>
                <b-button class="frut btn btn-outline-success my-1"
                  >
                  <router-link to="../views/InicioSesionView.vue">IniciarSesion</router-link>
                  <b-link v-b-toggle.sidebar-border>IniciarSesion</b-link>
                </b-button>
              </b-nav-item-dropdown> -->
    
          </b-collapse>
        </b-navbar>
      </div>
      <br />
      <b-sidebar id="sidebar-border" sidebar-class="border-right border-danger">
      <b-card class="">
       <div class="  ">
    <div class="card  fondo">
        <div class=" image d-flex flex-column justify-content-center align-items-center"> <button class="btn date"> <img src="../assets/iconoAdmin.png" height="100" width="100" /></button> <span class="name mt-3">Camila Cotazo</span>
        <h6 class="text">Administrador@</h6>
        <hr/>
            <div class=" d-flex mt-2"> <button class="btn1 btn-dark">Editar perfil</button> </div>
            <br>
            <div class=" d-flex mt-2"> <button class="btn1 btn-dark">Ver mi info.</button> </div>
            <br>
            <div class=" d-flex mt-2"> <button class="btn1 btn-dark">Ayuda</button> </div>
            <br>
            <div class=" d-flex mt-2"> <button class="btn1 btn-dark">Salir</button> </div>
        </div>
    </div>
</div>
      </b-card>
    </b-sidebar>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
.ver {
  background-color: rgb(73, 143, 64);
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


.js{
  list-style: none;
  text-decoration: none;
  color:rgba(255, 255, 255, 0.55);;
}
.sj{
     list-style: none;
     text-decoration: none;
}


body {
    background-color: #000
}

.card {
    width: 300px;
    border: none;
    cursor: pointer;
    transition: all 0.5s
}

.image img {
    transition: all 0.5s
}

.card:hover .image img {
    transform: scale(1.5)
}

.btn {
    height: 140px;
    width: 140px;
    border-radius: 50%
}

.name {
    font-size: 22px;
    font-weight: bold
}

.idd {
    font-size: 14px;
    font-weight: 600
}

.idd1 {
    font-size: 1px
}

.number {
    font-size: 22px;
    font-weight: bold
}

.btn1 {
    height: 40px;
    width: 150px;
    border: none;
    background-color: rgb(73, 143, 64);
    color: #0a0101;
    font-size: 15px
}

.text span {
    font-size: 13px;
    color:rgb(73, 143, 64)
  
}

.icons i {
    font-size: 19px
}

hr .new1 {
    border: 1px solid
}


.date {
    background-color: rgb(73, 143, 64)
}
.fondo{
 background-image: url(../assets/3.png);
  padding-block-end: 58%;
  padding-block-start: 0%;

  
}
</style>