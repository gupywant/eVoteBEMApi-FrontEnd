<template>
  <v-container
    id="alerts"
    fluid
    tag="section"
  >
    <base-v-component
      heading="Alerts"
      link="components/alerts"
    />

    <v-row>
      <v-col
        cols="12"
        md="10"
        offset-md="1"
      >
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Votes
            </div>

            <div class="subtitle-1 font-weight-light">
              Gunakanlah hak memilih anda dengan bijak.
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row justify="center">
                <v-col
                  cols="12"
                  md="6"
                >
                  <template>
                    <v-card
                      :loading="loading"
                      class="mx-auto"
                      max-width="500"
                    >
                      <template slot="progress">
                        <v-progress-linear
                          color="deep-purple"
                          height="10"
                          indeterminate
                        ></v-progress-linear>
                      </template>

                      <v-img
                        src="https://asset.kompas.com/crops/x8aWyfcHQTFX8n15dkblm7cTuqQ=/0x52:1000x719/750x500/data/photo/2019/01/08/3152843810.jpg"
                        height="350"
                      ></v-img>

                        <h1 class="text-center my-3">
                        Nama PASLON
                        </h1>

                      <v-card-text
                      class="mt-3"
                      >

                        <h3>Visi</h3>
                        <div class="my-3">
                          <div v-if="visi.length<100">{{ visi }}</div>
                          <div v-else>{{ visi.substring(0,98)+".." }}</div>
                        </div>
                        <h3>Misi</h3>
                        <div class="my-3">
                          <div v-if="misi.length<100">{{ misi }}</div>
                          <div v-else>{{ misi.substring(0,98)+".." }}</div>
                        </div>
                        <div v-if="misi.length<100">
                          <!-- Tidak Ada Aksi -->
                        </div>
                        <div v-else>
                          <template>
                            <div>
                              <v-dialog
                                v-model="dialog"
                                width="500"
                              >
                                <template v-slot:activator="{ on, attrs }">
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
                                  <v-card-title class="headline grey lighten-2">
                                    Visi & Misi
                                  </v-card-title>

                                  <v-card-text>
                                    <h3>Visi</h3>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    <h3>Visi</h3>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                  </v-card-text>

                                  <v-divider></v-divider>

                                  <v-card-actions>
                                    <v-spacer></v-spacer>
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

                      <v-divider class="mx-4"></v-divider>

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
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'DashboardNotifications',

    data: () => ({
      visi: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus deserunt ipsum obcaecati facere nostrum, ipsa alias autem quis, praesentium ducimus quaerat nulla quo, doloremque magni id quas est nesciunt rem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati id corporis perspiciatis repellat quaerat! Maxime voluptates reiciendis sit eius modi officiis, aliquid, consequuntur est cupiditate aperiam nobis fugit, dolorum rerum.',
      misi: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus deserunt ipsum obcaecati facere nostrum, ipsa alias autem quis, praesentium ducimus quaerat nulla quo, doloremque magni id quas est nesciunt rem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati id corporis perspiciatis repellat quaerat! Maxime voluptates reiciendis sit eius modi officiis, aliquid, consequuntur est cupiditate aperiam nobis fugit, dolorum rerum.',
      color: 'info',
      colors: [
        'info',
        'success',
        'warning',
        'error',
      ],
      dialog: false,
      dialog2: false,
      dialog3: false,
      direction: 'top center',
      directions: [
        'top left',
        'top center',
        'top right',
        'bottom left',
        'bottom center',
        'bottom right',
      ],
      snackbar: false,
      content1: 'Masukkan Pengumuman',
    }),

    computed: {
      parsedDirection () {
        return this.direction.split(' ')
      },
    },
    methods: {
      randomColor () {
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)]
      },
    },

  }
</script>
