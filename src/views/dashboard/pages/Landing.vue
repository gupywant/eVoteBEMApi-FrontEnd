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
          href="\Landing"
        >
          Home
        </v-btn>
        <v-btn
          style="color:black;"
          plain
          href="\News"
        >
          News
        </v-btn>
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
                  href="\Login"
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
                              cols="12"
                              md="6"
                            >
                              <template>
                                <v-card
                                  :loading="loading"
                                  class="mx-auto"
                                  max-width="600"
                                >
                                  <v-img
                                    src="https://asset.kompas.com/crops/x8aWyfcHQTFX8n15dkblm7cTuqQ=/0x52:1000x719/750x500/data/photo/2019/01/08/3152843810.jpg"
                                    height="350"
                                  />

                                  <h1 class="text-center my-3">
                                    Nama PASLON
                                  </h1>

                                  <v-card-text class="mt-3">
                                    <h3>Visi</h3>
                                    <div class="my-3">
                                      <div v-if="visi.length < 100">
                                        {{ visi }}
                                      </div>
                                      <div v-else>
                                        {{ visi.substring(0, 98) + '..' }}
                                      </div>
                                    </div>
                                    <h3>Misi</h3>
                                    <div class="my-3">
                                      <div v-if="misi.length < 100">
                                        {{ misi }}
                                      </div>
                                      <div v-else>
                                        {{ misi.substring(0, 98) + '..' }}
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
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute
                                                irure dolor in reprehenderit in
                                                voluptate velit esse cillum
                                                dolore eu fugiat nulla pariatur.
                                                Excepteur sint occaecat
                                                cupidatat non proident, sunt in
                                                culpa qui officia deserunt
                                                mollit anim id est laborum.
                                                <h3>Visi</h3>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute
                                                irure dolor in reprehenderit in
                                                voluptate velit esse cillum
                                                dolore eu fugiat nulla pariatur.
                                                Excepteur sint occaecat
                                                cupidatat non proident, sunt in
                                                culpa qui officia deserunt
                                                mollit anim id est laborum.
                                              </v-card-text>

                                              <v-divider />

                                              <v-card-actions>
                                                <v-spacer />
                                                <v-btn
                                                  color="primary"
                                                  text
                                                  @click="dialog = false"
                                                >
                                                  I accept
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
                            <v-col
                              cols="12"
                              md="6"
                            >
                              <template>
                                <v-card
                                  :loading="loading"
                                  class="mx-auto"
                                  max-width="600"
                                >
                                  <v-img
                                    src="https://asset.kompas.com/crops/x8aWyfcHQTFX8n15dkblm7cTuqQ=/0x52:1000x719/750x500/data/photo/2019/01/08/3152843810.jpg"
                                    height="350"
                                  />

                                  <h1 class="text-center my-3">
                                    Nama PASLON
                                  </h1>

                                  <v-card-text class="mt-3">
                                    <h3>Visi</h3>
                                    <div class="my-3">
                                      <div v-if="visi.length < 100">
                                        {{ visi }}
                                      </div>
                                      <div v-else>
                                        {{ visi.substring(0, 98) + '..' }}
                                      </div>
                                    </div>
                                    <h3>Misi</h3>
                                    <div class="my-3">
                                      <div v-if="misi.length < 100">
                                        {{ misi }}
                                      </div>
                                      <div v-else>
                                        {{ misi.substring(0, 98) + '..' }}
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
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute
                                                irure dolor in reprehenderit in
                                                voluptate velit esse cillum
                                                dolore eu fugiat nulla pariatur.
                                                Excepteur sint occaecat
                                                cupidatat non proident, sunt in
                                                culpa qui officia deserunt
                                                mollit anim id est laborum.
                                                <h3>Visi</h3>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute
                                                irure dolor in reprehenderit in
                                                voluptate velit esse cillum
                                                dolore eu fugiat nulla pariatur.
                                                Excepteur sint occaecat
                                                cupidatat non proident, sunt in
                                                culpa qui officia deserunt
                                                mollit anim id est laborum.
                                              </v-card-text>

                                              <v-divider />

                                              <v-card-actions>
                                                <v-spacer />
                                                <v-btn
                                                  color="primary"
                                                  text
                                                  @click="dialog = false"
                                                >
                                                  I accept
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
                  href="/Login"
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
        visi:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus deserunt ipsum obcaecati facere nostrum, ipsa alias autem quis, praesentium ducimus quaerat nulla quo, doloremque magni id quas est nesciunt rem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati id corporis perspiciatis repellat quaerat! Maxime voluptates reiciendis sit eius modi officiis, aliquid, consequuntur est cupiditate aperiam nobis fugit, dolorum rerum.',
        misi:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus deserunt ipsum obcaecati facere nostrum, ipsa alias autem quis, praesentium ducimus quaerat nulla quo, doloremque magni id quas est nesciunt rem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati id corporis perspiciatis repellat quaerat! Maxime voluptates reiciendis sit eius modi officiis, aliquid, consequuntur est cupiditate aperiam nobis fugit, dolorum rerum.',
        login: {
          to: '/Login',
        },
      }
    },
  }
</script>
