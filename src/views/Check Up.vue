<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4" v-if="this.$vuetify.breakpoint.mdAndUp">
        <p
          style="margin-top: 50px"
        >*silahkan jawab pertanyaan disamping untuk mengetahui penyakit yang anda alami.</p>
        <h2 class="text-center my-10">Gejala anda</h2>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Kode</th>
                <th class="text-left">Gejala</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in table" :key="item.code">
                <td>{{ item.code }}</td>
                <td>{{ item.gejala }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col cols="12" md="8">
        <div class="d-flex flex-column">
          <v-img
            class="align-self-center my-10"
            src="../assets/undraw_doctor_kw5l.svg"
            max-width="300px"
          ></v-img>
          <v-stepper v-model="stepper">
            <v-stepper-header>
              <v-stepper-step
                v-for="i in questions.length"
                :key="i"
                :complete="stepper > i"
                step=" "
              ></v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content v-for="(question,i) in questions" :key="question.index" :step="i+1">
                <div class="text-center">
                  
                  <p class="title">{{tq}}</p>
                  <v-btn
                    color="primary"
                    class="mx-10"
                    @click="next(question.step[currentIndex],'iya')"
                  >Iya</v-btn>
                  <v-btn
                    color="primary"
                    outlined
                    class="mx-10"
                    @click="next(question.step[currentIndex],'tidak')"
                  >Tidak</v-btn>
                </div>
              </v-stepper-content>

              <v-stepper-content :step="questions.length+1">
                <div class="text-center my-10">
                  <h2 class="my-10">Silahkan klik tombol dibawah ini untuk melihat hasil anda.</h2>
                  <v-btn color="primary" @click="hasil">Lihat Hasil</v-btn>
                </div>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      stepper: 1,
      questions: [
        {
          step: [
            {
              code: "G001",
              gejala: "Memiliki Alergi",
              question: "Apakah Anda memiliki riwayat Alergi?"
            },
            {
              code: "G002",
              gejala: "Bentol-bentol",
              question: "Apakah terdapat bentol-bentol pada area tertentu?"
            },
            {
              code: "G003",
              gejala: "Gatal",
              question: "Apakah Anda terasa gatal pada area tertentu?"
            },
            {
              code: "G004",
              gejala: "Bercak bersisik terang/gelap",
              question: "Apakah kulit anda bersisik terang/gelap?"
            },
            {
              code: "G005",
              gejala: "Kulit kasar",
              question: "Apakah kulit anda terasa kasar"
            },
            {
              code: "G006",
              gejala: "Kulit kemerahan",
              question: "Apakah kulit anda kemerahan pada area tersebut?"
            }
          ],
          index: 0
        },
        {
          step: [
            { code: "G007", gejala: "melepuh, mengelupas", question: "Apakah kulit anda melepuh/mengelupas?" },
            { code: "G008", gejala: "Bengkak", question: "Apakah ada bengkak di area tertentu?" },
            { code: "G009", gejala: "Terkena bahan panas", question: "Apakah bagian yang melepuh tersebut terkena bahan panas?" },
            {
              code: "G010",
              gejala: "Ruam kulit diseluruh tubuh",
              question: "Apakah ruam kulit diseluruh tubuh(bercak merah)?"
            },
            {
              code: "G011",
              gejala: "Lepuhan kecil berisi cairan (vesikel)",
              question: "Apakah terdapat lepuhan kecil berisi air?"
            },
            { code: "G012", gejala: "Suara serak bahkan hilang", question: "Apakah suara anda serak atau bahkan hilang?" },
            { code: "G013", gejala: "Sakit menelan", question: "Apakah terasa sakit saat menelan?" }
          ],
          index: 1
        },
        {
          step: [
            { code: "G014", gejala: "Batuk", question: "Apakah anda batuk-batuk?" },
            { code: "G015", gejala: "Amandel membengkak", question: "Apakah amandel anda terasa membengkak?" },
            { code: "G016", gejala: "Gigi berlubang", question: "Apakah gigi anda berlubang?" },
            { code: "G017", gejala: "Gigi terasa sakit", question: "Apakah gigi anda terasa sakit?" },
            { code: "G018", gejala: "Tumbuh daging di gigi", question: "Apakah tumbuh daging di gigi anda?" }
          ]
        },
        {
          step: [
            { code: "G019", gejala: "Mata terasa gatal", question: "Apakah mata terasa gatal?" },
            { code: "G020", gejala: "Mata merah", question: "Apakah mata anda memerah?" },
            { code: "G021", gejala: "Mata berair", question: "Apakah mata anda terkadang mengeluarkan air tanpa anda sadari?" },
            { code: "G022", gejala: "Kotoran mata makin banyak", question: "Apakah kotoran dimata anda semakin membanyak walaupun sudah anda bersihkan?" },
            { code: "G023", gejala: "Sakit/nyeri dikelopak", question: "Apakah terasa sakit/nyeri di kelopak mata?" }
          ],
          index: 2
        },
        {
          step: [
            {
              code: "G025",
              gejala: "Benjolan merah di kelopak mata",
              question: "Apakah terdapat benjolan merah di kelopak mata anda?"
            },
            {
              code: "G026",
              gejala: "Penglihatan menurun waktu gelap",
              question: "Apakah pengelihatan anda menurun waktu gelap?"
            },
            {
              code: "G027",
              gejala: "Penglihatan menurun perlahan",
              question: "Apakah pengelihatan anda menurun perlahan?"
            },
            {
              code: "G028",
              gejala: "Perlu waktu terbiasa terhadap cahaya",
              question: "Apakah anda perlu waktu untuk terbiasa terhadap cahaya?"
            }
          ],
          index: 3
        }
      ],
      table: [],
      currentIndex: 0,
      goNext: false,
      tq: 'Apakah Anda memiliki riwayat Alergi?'
    };
  },
  methods: {
    next(data, option) {
      if (option == "iya") {
        this.table.push(data);
      }
      let size = this.questions[this.stepper - 1].step.length;
      
      if (this.currentIndex < size - 1) {
        this.currentIndex++;
      } else {
        this.stepper++;
        this.currentIndex = 0;
      }
      this.tq = this.questions[this.stepper-1].step[this.currentIndex].question
    },
    hasil() {
      let gejala = "";
      this.table.forEach((el, i) => {
        if (i == this.table.length - 1) {
          gejala += `${el.code}`;
        } else {
          gejala += `${el.code},`;
        }
      });
      this.$cookies.set("gejala", gejala);
      this.$router.push("/hasil");
    }
  }
};
</script>

<style>
</style>