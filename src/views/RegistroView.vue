<template>
  <div  class="l1">
    <HeaderComponent />
      <h1>REGISTRO</h1>
    <div class="padre">
      <b-form inline>
        <label class="sr-only" for="inline-form-input-name">Nombres </label>
        <b-form-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Ingrese sus nombres"
        ></b-form-input>

        <label class="sr-only" for="inline-form-input-name">Apellidos </label>
        <b-form-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Ingrese sus apellidos"
        ></b-form-input>

        <label class="sr-only" for="inline-form-input-username">Correo</label>
        <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input
            id="inline-form-input-username"
            placeholder="Ingrese su correo"
          ></b-form-input>
        </b-input-group>

        <label class="sr-only" for="inline-form-input-name">Telefono </label>
        <b-form-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Ingrese su numero telefonico"
        ></b-form-input>

        <label class="sr-only" for="inline-form-input-name">Direccion </label>
        <b-form-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Ingrese su direccion de residencia"
        ></b-form-input>

        <div>
          <b-form @submit.stop.prevent>
            <label for="text-password">contraseña</label>
            <b-form-input
              type="password"
              id="text-password"
              aria-describedby="password-help-block"
            ></b-form-input>
            <b-form-text id="password-help-block" class="texto">
              Su contraseña debe tener entre 8 y 20 caracteres, contener letras
              y números, y no debe contener espacios, caracteres especiales o
              emoji.
            </b-form-text>
          </b-form>
        </div>

        <hr />

        <div>
          <b-form inline>
            <label class="mr-sm-2" for="inline-form-custom-select-pref"
              >Sexo</label
            >
            <b-form-select
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              :options="[
                { text: 'Seleccionar', value: null },
                'Masculino',
                'Femenino',
              ]"
              :value="null"
            ></b-form-select>
          </b-form>
        </div>

        <hr />

        <div>
          <b-form inline>
            <label class="mr-sm-2" for="inline-form-custom-select-pref"
              >Cargo</label
            >
            <b-form-select
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              :options="[
                { text: 'Seleccionar', value: null },
                'Vendedor',
                'Comprador',
              ]"
              :value="null"
            ></b-form-select>
          </b-form>
        </div>

        <hr />

        <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
          >Aceptar TyC</b-form-checkbox
        >

        <hr />

        <b-button variant="success">Registrarme</b-button>
      </b-form>
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
    HeaderComponent
  }
  
};
</script>

<style scoped>

h1{
    margin-top: 2%;
    color: rgb(56, 165, 42);
}
.padre {
  margin-top: 3%;
  padding-left: 30%;
  padding-right: 30%;
  color: rgb(56, 165, 42);
  display: block;
  border: solid #ced4da;
  border-radius: 0.3rem;
  background-image: url(../assets/fondoref.jpg);
}

hr {
  color: black;
}

.texto {
  color: black;
}
</style>