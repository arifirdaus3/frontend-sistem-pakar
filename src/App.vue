<template>
  <v-app>
    <v-content>
      <div class="d-flex flex-column justify-center fill-height medic">
        <v-icon class="display-4 primary--text mb-10">mdi-hospital-box</v-icon>
        <h1 class="text-center display-3" id="drop-shadow">Sistem Pakar</h1>
        <h1 class="text-center display-3" id="drop-shadow">Diagnosa Penyakit Umum Manusia</h1>
        <v-container class="button-nav">
          <v-row justify="center">
            <v-col cols="4" class="text-center">
              <v-btn x-large class="headline " color="primary" >Check Up</v-btn>
            </v-col>
            <v-col cols="4" class="text-center">
              <v-btn x-large class="headline " color="primary" outlined>About</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-content>
  </v-app>
</template>

<style>
  .overlay{
    position: absolute;
    height: 100vh;
    width: 100vh;
  }
  #app, .v-application .d-flex .display-3, .v-btn__content{
    font-family: 'Cagliostro' !important;
  }
  #drop-shadow{
    text-shadow: 0px 4px 8px rgba(90, 186, 74, 0.5);
    letter-spacing: 0.105em !important;
  }
  .button-nav{
    margin-top:150px;
  }
  .medic{
    background: url('./assets/undraw_medicine_b1ol.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: fit;
  }
</style>

<script>
</script>
