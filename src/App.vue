<template>
  <v-app>
    <v-content :class="this.$route.name == 'Home' ? 'medic': ''">
      <v-container class="fill-height" v-if="this.$route.name == 'Home'">
        <v-row>
          <v-col class="text-center" cols="12">
            <v-icon class="display-4 primary--text mb-10">mdi-hospital-box</v-icon>
          </v-col>
          <v-col class="text-center">
            <h1
              class="text-center"
              :class="(this.$vuetify.breakpoint.mdAndUp)? 'display-3': ''"
              id="drop-shadow"
            >Sistem Pakar</h1>
            <h1
              class="text-center"
              :class="(this.$vuetify.breakpoint.mdAndUp)? 'display-3': ''"
              id="drop-shadow"
            >Diagnosa Penyakit Umum Manusia</h1>
            <v-container :class="(this.$vuetify.breakpoint.mdAndUp)? 'button-nav': 'mt-10'">
              <v-row justify="center">
                <v-col cols="12" md="4" class="text-center">
                  <v-btn
                    :x-large="this.$vuetify.breakpoint.mdAndUp"
                    class="glow"
                    color="primary"
                    to="checkup"
                  >Check Up</v-btn>
                </v-col>
                <v-col cols="12" md="4" class="text-center">
                  <v-btn
                    :x-large="this.$vuetify.breakpoint.mdAndUp"
                    color="primary"
                    outlined
                    to="about"
                  >About</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>

      <v-toolbar v-else color="secondary">
        <v-btn icon @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title>{{this.$route.name}}</v-toolbar-title>
      </v-toolbar>
      <router-view></router-view>
    </v-content>

    <v-footer  class="font-weight-medium" color="secondary" v-if="this.$route.name == 'About'">
      <v-col class="text-right" cols="12">
        Made with ❤ by <a href="https://github.com/arifirdaus3/">Ari Firdaus</a>
      </v-col>
    </v-footer>
  </v-app>
</template>

<style>
#app,
.v-application .display-3,
.v-btn__content,
#drop-shadow {
  font-family: "Cagliostro" !important;
}
#drop-shadow {
  text-shadow: 0px 4px 8px rgba(90, 186, 74, 0.5);
  letter-spacing: 0.105em !important;
}
.button-nav {
  margin-top: 150px;
}
.medic {
  background: linear-gradient(
      0deg,
      rgba(235, 238, 234, 0.7),
      rgba(235, 238, 234, 0.7)
    ),
    url("./assets/undraw_medicine_b1ol.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: contain;
}
.glow {
  animation: glowing 2s linear infinite;
}
@keyframes glowing {
  0%,
  100% {
    box-shadow: 0px 0px 0px 0px #5aba4a;
  }
  50% {
    box-shadow: 0px 0px 50px 0px #5aba4a;
  }
}
</style>

<script>
export default {
  mounted() {
    console.log(this.$route);
  }
};
</script>
