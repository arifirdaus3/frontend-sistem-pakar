<template>
  <v-container fluid class="pa-0 mb-10">
    <v-row justify="center" class="pa-10 primary white--text">
      <v-col cols="12" class="text-center">
        <h1>UAS Sistem Pakar</h1>
      </v-col>
      <v-col cols="12" class="text-center">
        <h3>Diagnosa Penyakit Umum Manusia</h3>
      </v-col>
    </v-row>
    <v-row class="mt-5" justify="center">
      <v-col cols="12" class="text-center">
        <h1>About Us</h1>
      </v-col>
      <v-col md="3">
        <v-card class="mx-auto" max-width="400">
          <v-img src="../assets/09021381722129.jpg"></v-img>
          <v-card-text class="text--primary text-center">
            <h3>Ari Firdaus</h3>
            <h3>09012381722129</h3>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="3">
        <v-card class="mx-auto" max-width="400">
          <v-img src="../assets/09021381722133.jpg"></v-img>
          <v-card-text class="text--primary text-center">
            <h3>Rizki Ramadandi</h3>
            <h3>09012381722133</h3>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <p>
          Aplikasi ini dibuat berdasarkan paper yang berjudul
          <a
            href="http://docplayer.info/70760131-Sistem-pakar-diagnosis-penyakit-umum-pada-manusia-menggunakan-php-dan-mysql.html"
          >"SISTEM PAKAR DIAGNOSIS PENYAKIT UMUM PADA MANUSIA MENGGUNAKAN PHP DAN MYSQL"</a>
        </p>
        <p>Algoritma yang dipakai adalah <strong>Forward Chain</strong>.</p>
        <p>Untuk tabel gejala, table penyakit, dan table rule sebagai berikut.</p>
        <h3 class="my-5">Tabel gejala</h3>
        <v-card max-width="800px" class="mx-auto">
          <v-simple-table class="text-left" dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Kode</th>
                  <th class="text-left">Gejala</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in tabelGejala" :key="item.code">
                  <td>{{ item.code }}</td>
                  <td>{{ item.gejala }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
        <h3 class="my-5">Tabel penyakit</h3>
        <v-card max-width="800px" class="mx-auto">
          <v-simple-table class="text-left" dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Kode</th>
                  <th class="text-left">Penyakit</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in tabelPenyakit" :key="item.code">
                  <td>{{ item.code }}</td>
                  <td>{{ item.penyakit }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
        <h3 class="my-5">Tabel rule</h3>
        <v-card max-width="800px" class="mx-auto">
          <v-simple-table class="text-left" dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Kode</th>
                  <th class="text-left">Anteseden</th>
                  <th class="text-left">Konsekuen</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in tabelRule" :key="item.kode">
                  <td>{{ item.kode }}</td>
                  <td>{{ item.anteseden }}</td>
                  <td>{{ item.konsekuen }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tabelGejala: [
        { code: "G001", gejala: "Memiliki Alergi", question: "" },
        { code: "G002", gejala: "Bentol bentol", question: "" },
        { code: "G003", gejala: "Gatal", question: "" },
        { code: "G004", gejala: "Bercak bersisik terang/gelap", question: "" },
        { code: "G005", gejala: "Kulit kasar", question: "" },
        { code: "G006", gejala: "Kulit kemerahan", question: "" },
        { code: "G007", gejala: "melepuh, mengelupas", question: "" },
        { code: "G008", gejala: "Bengkak", question: "" },
        { code: "G009", gejala: "Terkena bahan panas", question: "" },
        { code: "G010", gejala: "Ruam kulit diseluruh tubuh", question: "" },
        {
          code: "G011",
          gejala: "Lepuhan kecil berisi cairan (vesikel)",
          question: ""
        },
        { code: "G012", gejala: "Suara serak bahkan hilang", question: "" },
        { code: "G013", gejala: "Sakit menelan", question: "" },
        { code: "G014", gejala: "Batuk", question: "" },
        { code: "G015", gejala: "Amandel membengkak", question: "" },
        { code: "G016", gejala: "Gigi berlubang", question: "" },
        { code: "G017", gejala: "Gigi terasa sakit", question: "" },
        { code: "G018", gejala: "Tumbuh daging di gigi", question: "" },
        { code: "G019", gejala: "Mata terasa gatal", question: "" },
        { code: "G020", gejala: "Mata merah", question: "" },
        { code: "G021", gejala: "Mata berair", question: "" },
        { code: "G022", gejala: "Kotoran mata makin banyak", question: "" },
        { code: "G023", gejala: "Sakit/nyeri dikelopak", question: "" },
        { code: "G024", gejala: "Kelopak mata bengkak", question: "" },
        {
          code: "G025",
          gejala: "Benjolan merah di kelopak mata",
          question: ""
        },
        {
          code: "G026",
          gejala: "Penglihatan menurun waktu gelap",
          question: ""
        },
        { code: "G027", gejala: "Penglihatan menurun perlahan", question: "" },
        {
          code: "G028",
          gejala: "Perlu waktu terbiasa terhadap cahaya",
          question: ""
        }
      ],
      tabelPenyakit: [
        { code: "P001", penyakit: "Urticaria" },
        { code: "P002", penyakit: "Tinea versicolor" },
        { code: "P003", penyakit: "Combustio" },
        { code: "P004", penyakit: "Varicella" },
        { code: "P005", penyakit: "Laryngitis" },
        { code: "P006", penyakit: "Faringitis" },
        { code: "P007", penyakit: "Pulpitis" },
        { code: "P008", penyakit: "Conjuctivitis" },
        { code: "P009", penyakit: "Hordeolum" },
        { code: "P010", penyakit: "Nyctalopia" }
      ],
      tabelRule: [
        {
          kode: "Rule[1]",
          anteseden: "IF Alergi AND Bentol bentol AND Gatal",
          konsekuen: "THEN Urticaria"
        },
        {
          kode: "Rule[2]",
          anteseden:
            "IF Gatal AND Kulit kasar AND Bercak bersisik gelap/terang",
          konsekuen: "THEN Tinea Versicolor"
        },
        {
          kode: "Rule[3]",
          anteseden:
            "IF Kulit kemerahan AND Melepuh AND bengkak AND terkena bahan panas",
          konsekuen: "THEN Combustio"
        },
        {
          kode: "Rule[4]",
          anteseden:
            "IF Kulit kemerahan AND Gatal AND Ruam diseluruh tubuh AND Lapisan kecil berisi air",
          konsekuen: "THEN Varicella"
        },
        {
          kode: "Rule[5]",
          anteseden: "IF Suara serak AND Sakit menelan AND Batuk",
          konsekuen: "THEN Laringitis"
        },
        {
          kode: "Rule[6]",
          anteseden: "IF Sakit menelan AND Batuk AND Amandel bengkak",
          konsekuen: "THEN Faringitis"
        },
        {
          kode: "Rule[7]",
          anteseden:
            "IF Gigi berlubang AND Gigi terasa sakit AND tumbuh daging di gigi",
          konsekuen: "THEN Pulpitis"
        },
        {
          kode: "Rule[8]",
          anteseden:
            "IF Mata terasa gatal AND mata merah AND mata berair AND Kotoran mata makin banyak",
          konsekuen: "THEN Conjuctivitis"
        },
        {
          kode: "Rule[9]",
          anteseden:
            "IF Sakit/Nyeri dikelopak AND kelopak mata bengkak AND benjolan merah di kelopak AND Mata berair",
          konsekuen: "THEN Hordeolum"
        },
        {
          kode: "Rule[10]",
          anteseden:
            "IF Penglihatan menurun perlahan AND Penglihatan menurun waktu gelap AND Perlu waktu terbiasa terhadap cahaya",
          konsekuen: "THEN Nyctalopia"
        }
      ]
    };
  }
};
</script>

<style>
</style>