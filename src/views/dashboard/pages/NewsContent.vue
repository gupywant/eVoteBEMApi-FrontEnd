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
            <v-card
              elevation="20"
              min-height="500"
            >
              <section style="margin-top:50px;">
                <v-row
                  align="center"
                  justify="center"
                >
                  <v-col cols="10">
                    <v-container style="margin-top:-15px; margin-bottom:-15px;">
                      <v-row
                        align="center"
                      >
                        <v-col cols="12">
                          <h1
                            align="center"
                            class="mt-5"
                          >
                            Word of the Day
                          </h1>
                          <!-- List Pengumuman -->
                          <div class="text--primary text-justify my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae ducimus est exercitationem itaque optio at consequatur eveniet fuga illum totam aspernatur, ex quis, accusamus nam molestiae alias, rerum debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cumque dolores illo? A, accusamus. Corporis soluta, exercitationem mollitia dolor aliquam praesentium rem tempore in repellendus quos, quo consequatur debitis incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repudiandae iure iusto enim? Non consectetur minima, nulla, asperiores beatae dolor facilis quo, tempora repellat expedita ab quam officiis laborum ducimus!
                          </div>
                          <v-row justify="end">
                          <v-btn
                            color="primary"
                            href="News"
                          >
                            Back
                          </v-btn>
                          </v-row>
                          <!-- Tutup List Pengumuman -->
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
  export default {
    name: 'App',
    components: {
    },

    data: function () {
      return {
        reveal: false,
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
