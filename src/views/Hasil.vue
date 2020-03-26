<template>
  <v-container :style="this.$vuetify.breakpoint.mdAndUp? 'height: 70%':''">
    <div class="d-flex flex-column fill-height justify-center align-center" style="width: 100%">
      <v-img
        class="my-10"
        src="../assets/undraw_medical_research_qg4d.svg"
        max-width="300px"
        max-height="300px"
        contain
      ></v-img>
      <h1
        class="text-center mb-10"
      >Berdasarkan gejala-gejala yang ada, {{penyakit}}</h1>
      <h3 class="mt-10 text-center">Silahkan hubungi dokter untuk keterangan lebih lanjut</h3>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      penyakit: ""
    };
  },
  mounted() {
    let db = this.$cookies.get('gejala').split(',')
    this.penyakit = this.createRule(db)
    if(this.penyakit == 'Nope'){
        this.penyakit = " belum terdapat penyakit berdasarkan database kami!"
    }else{
        let temp = this.penyakit
        this.penyakit = ` Anda menderita penyakit ${temp}`
    }
  },
  methods: {
    createRule(db) {
      let rule1 =
          db.includes("G001") && db.includes("G002") && db.includes("G003"),
        rule2 =
          db.includes("G004") && db.includes("G005") && db.includes("G003"),
        rule3 =
          db.includes("G006") &&
          db.includes("G007") &&
          db.includes("G008") &&
          db.includes("G009"),
        rule4 =
          db.includes("G006") &&
          db.includes("G003") &&
          db.includes("G010") &&
          db.includes("G011"),
        rule5 =
          db.includes("G012") && db.includes("G013") && db.includes("G014"),
        rule6 =
          db.includes("G015") && db.includes("G013") && db.includes("G014"),
        rule7 =
          db.includes("G016") && db.includes("G017") && db.includes("G018"),
        rule8 =
          db.includes("G019") &&
          db.includes("G020") &&
          db.includes("G021") &&
          db.includes("G022"),
        rule9 =
          db.includes("G023") &&
          db.includes("G024") &&
          db.includes("G025") &&
          db.includes("G021"),
        rule10 =
          db.includes("G026") && db.includes("G027") && db.includes("G028");

     if(rule1) return 'Urticaria'
     else if(rule2) return 'Versicolor'
     else if(rule3) return 'Combustio'
     else if(rule4) return 'Varicella'
     else if(rule5) return 'Laringitis'
     else if(rule6) return 'Faringitis'
     else if(rule7) return 'Pulpitis'
     else if(rule8) return 'Conjuctivitis'
     else if(rule9) return 'Hordeolum'
     else if(rule10) return 'Nyctalopia'
     else return 'Nope'
    }
  }
};
</script>

<style>
</style>