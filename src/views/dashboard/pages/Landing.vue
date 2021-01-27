<template>
  <v-app light>
    <v-toolbar class="white">
      <v-toolbar-title
        style="padding-left:200px"
        v-text="title"
      />
      <v-spacer />
      <v-toolbar-items style="padding-right:200px;">
        <v-btn
          style="color:black;"
          plain
          href="/Landing"
        >
          Home
        </v-btn>
        <v-btn
          style="color:black;"
          plain
          href="/News"
        >
          News
        </v-btn>
        <v-dialog
          transition="dialog-top-transition"
          max-width="600"
          plain
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mr-3"
              min-width="0"
              text
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar
                color="primary"
                dark
              >
                Data Mahasiswa
              </v-toolbar>
              <v-card-text>
                <div class="text-h2 pa-12">
                  Nama : Admin<br>
                  NPM : 12345678<br>
                  Kelas : 4KA21
                </div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  @click="dialog.value = false"
                >
                  Tutup
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
        <v-btn
          elevation="10"
          plain
          style="color:black; background:#06BAD4"
          href="/Login"
        >
          Sign In
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <section style="margin-top:20px">
          <v-parallax
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          >
            <v-row
              align="center"
              justify="center"
            >
              <div class="justify-content-center text-center">
                <h1
                  class="mb-3"
                  style="text-shadow: 3px 2px #000000;"
                >
                  Selamat datang di website Pemilihan Raya Ketua Umum & Wakil
                  Ketua Umum BEM FIKTI Periode 2020/2021
                </h1>
                <v-btn
                  elevation="10"
                  outlined
                  rounded
                  class="blue lighten-2 mt-5"
                  dark
                  large
                  href="/Login"
                >
                  Voting Sekarang
                </v-btn>
              </div>
            </v-row>
          </v-parallax>
        </section>
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="10">
            <v-card elevation="20">
              <section style="margin-top:50px;">
                <v-row
                  align="center"
                  justify="center"
                >
                  <v-col cols="10">
                    <v-container style="margin-top:-15px; margin-bottom:-15px;">
                      <v-row align="center">
                        <v-col cols="12">
                          <h1
                            align="center"
                            class="mt-5"
                          >
                            Kandidat
                          </h1>
                          <v-row align="center">
                            <v-col
                              v-for="(item, i) in paslon"
                              :key="i"
                              cols="12"
                              md="6"
                            >
                              <template>
                                <v-card
                                  class="mx-auto"
                                  max-width="600"
                                >
                                  <v-img
                                    src="https://cdn.discordapp.com/attachments/655087305266298891/800988265117253642/1.jpg"
                                    height="350"
                                  />

                                  <h3 class="text-center my-2">
                                    Paslon {{ paslon[i].id_candidate }}
                                  </h3>
                                  <h1 class="text-center my-3">
                                    Nama PASLON
                                  </h1>

                                  <v-card-text class="mt-3">
                                    <h3>Visi</h3>
                                    <div class="my-3">
                                      <div v-if="paslon[i].vision.length < 100">
                                        {{ paslon[i].vision }}
                                      </div>
                                      <div v-else>
                                        {{
                                          paslon[i].vision.substring(0, 98) +
                                            '..'
                                        }}
                                      </div>
                                    </div>
                                    <h3>Misi</h3>
                                    <div class="my-3">
                                      <div
                                        v-if="paslon[i].mission.length < 100"
                                      >
                                        {{ paslon[i].mission }}
                                      </div>
                                      <div v-else>
                                        {{
                                          paslon[i].mission.substring(0, 98) +
                                            '..'
                                        }}
                                      </div>
                                    </div>
                                    <div v-if="misi.length < 100">
                                      <!-- Tidak Ada Aksi -->
                                    </div>
                                    <div v-else>
                                      <template>
                                        <div>
                                          <v-dialog
                                            v-model="dialog"
                                            width="500"
                                          >
                                            <template
                                              v-slot:activator="{ on, attrs }"
                                            >
                                              <v-btn
                                                x-small
                                                color="red lighten-2"
                                                dark
                                                v-bind="attrs"
                                                v-on="on"
                                              >
                                                Lihat Detail
                                              </v-btn>
                                            </template>

                                            <v-card>
                                              <v-card-title
                                                class="headline grey lighten-2"
                                              >
                                                Visi & Misi
                                              </v-card-title>

                                              <v-card-text>
                                                <h3>Visi</h3>
                                                {{ paslon[i].vision }}
                                                <h3>Visi</h3>
                                                {{ paslon[i].mission }}
                                              </v-card-text>

                                              <v-divider />

                                              <v-card-actions>
                                                <v-spacer />
                                                <v-btn
                                                  color="primary"
                                                  text
                                                  @click="dialog = false"
                                                >
                                                  Tutup
                                                </v-btn>
                                              </v-card-actions>
                                            </v-card>
                                          </v-dialog>
                                        </div>
                                      </template>
                                    </div>
                                  </v-card-text>

                                  <v-divider class="mx-4" />

                                  <div class="text-center">
                                    <v-btn
                                      class="ma-2"
                                      :loading="loading"
                                      :disabled="loading"
                                      color="info"
                                      @click="loader = 'loading'"
                                    >
                                      Pilih
                                    </v-btn>
                                  </div>
                                </v-card>
                              </template>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-col>
                </v-row>
              </section>

              <section>
                <v-row
                  align="center"
                  justify="center"
                >
                  <v-col cols="10">
                    <v-container style="margin-bottom:50px;">
                      <h1
                        align="center"
                        class="mb-5"
                      >
                        Hasil Perolehan Sementara
                      </h1>
                      <v-row align="center">
                        <v-col
                          cols="12"
                          md="6"
                        >
                          <pie-chart />
                        </v-col>
                        <v-col
                          cols="12"
                          md="6"
                        >
                          <bar-chart />
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-col>
                </v-row>
              </section>
            </v-card>
          </v-col>
        </v-row>

        <section>
          <v-row align="center">
            <v-col cols="12">
              <v-container style="margin-top:-15px; margin-bottom:-15px;">
                <v-row align="center">
                  <v-col
                    cols="12"
                    md="4"
                    style="height:242px;"
                  >
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-center">
                        <v-icon
                          x-large
                          class="blue--text text--lighten-2"
                          style="text-shadow: 1px 1px #000000;"
                        >
                          Bebas
                        </v-icon>
                      </v-card-text>
                      <v-card-title
                        primary-title
                        class="layout justify-center"
                      />
                      <v-card-text>
                        Gunakanlah hak pilih anda untuk memilih calon Ketua dan
                        Wakil Ketua BEM FIKTI sesuai hati nurani anda, tanpa ada
                        tekanan dan paksaan dari siapapun.
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col
                    cols="12"
                    md="4"
                    style="height:242px;"
                  >
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-center">
                        <v-icon
                          x-large
                          class="blue--text text--lighten-2"
                          style="text-shadow: 1px 1px #000000;"
                        >
                          Rahasia
                        </v-icon>
                      </v-card-text>
                      <v-card-title
                        primary-title
                        class="layout justify-center"
                      />
                      <v-card-text>
                        Jangan beritahukan calon Ketua dan Wakil Ketua BEM FIKTI
                        pilihan anda kepada siapapun, biarkan hal tersebut hanya
                        diketahui oleh diri anda sendiri.
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col
                    cols="12"
                    md="4"
                    style="height:242px;"
                  >
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-center">
                        <v-icon
                          x-large
                          class="blue--text text--lighten-2"
                          style="text-shadow: 1px 1px #000000;"
                        >
                          Jujur
                        </v-icon>
                      </v-card-text>
                      <v-card-title
                        primary-title
                        class="layout justify-center"
                      />
                      <v-card-text>
                        Menjunjung tinggi kejujuran pada pemilihan calon Ketua
                        dan Wakil Ketua BEM FIKTI bagi semua pihak yang
                        terlibat.
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </section>

        <section style="margin-bottom:20px">
          <v-parallax
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            height="380"
          >
            <v-row
              align="center"
              justify="center"
            >
              <div align="center">
                <div
                  class="headline white--text text-center mt-3 mb-5"
                  style="text-shadow: 3px 2px #000000;"
                >
                  Gunakanlah Hak Pilih Anda Dengan Bijak
                </div>
                <v-btn
                  elevation="10"
                  outlined
                  rounded
                  class="blue lighten-2"
                  dark
                  large
                  href="/pre-made-themes"
                  style="margin-bottom: -50px"
                >
                  Voting Sekarang
                </v-btn>
              </div>
            </v-row>
            <v-row
              justify="space-around"
              style="margin-bottom:-150px; margin-top:50px"
            >
              <v-icon x-large>
                fab fa-facebook-f
              </v-icon>

              <v-icon x-large>
                fab fa-twitter
              </v-icon>

              <v-icon x-large>
                fab fa-youtube
              </v-icon>

              <v-icon x-large>
                fab fa-instagram
              </v-icon>

              <v-icon x-large>
                fab fa-discord
              </v-icon>
            </v-row>
          </v-parallax>
        </section>
      </v-container>

      <v-footer style="background:#06BAD4">
        <v-row align="center">
          <v-col
            cols="12"
            class="text-center"
          >
            <div
              class="black--text ml-3"
              style="text-shadow: 1px 1px #d9e4dd;"
            >
              Copyright © {{ new Date().getFullYear() }} —
              <strong>Kelompok 2 P.Web 4KA21 | All Rights Reserved</strong>
            </div>
          </v-col>
        </v-row>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
  import BarChart from './BarChart.vue'
  import PieChart from './PieChart.vue'
  export default {
    name: 'App',
    components: {
      BarChart,
      PieChart,
    },

    data: function () {
      return {
        title: 'E-Vote BEM FIKTI',
        tabs: null,
        paslon: [],
      }
    },
    created () {
      console.log(localStorage.getItem('token'))
      this.fetchPaslon()
    },
    methods: {
      fetchPaslon () {
        this.$store
          .dispatch('fetchPaslon')
          .then(response => {
            this.paslon = response.data.data
          })
          .catch(error => {
            console.log(error)
          })
      },
    },
  }
</script>
