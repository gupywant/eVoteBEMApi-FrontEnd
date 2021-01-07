<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Kandidat
            </div>

            <div class="subtitle-1 font-weight-light">
              Lengkapi data kandidat
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                >
                  <v-text-field
                    class="purple-input my-3"
                    label="Masukan Nama Lengkap Ketua Umum"
                  />
                  <v-text-field
                    class="purple-input my-3"
                    label="Masukan NPM Ketua Umum"
                  />
                  <v-text-field
                    class="purple-input my-3"
                    label="Masukan Jurusan Ketua Umum"
                  />
                  <v-text-field
                    class="purple-input my-3"
                    label="Masukan Angkatan"
                  />
                </v-col>
                <v-col
                  cols="6"
                  md="6"
                >
                  <v-text-field
                    class="purple-input my-3"
                    label="Masukan Nama Lengkap Wakil Ketua Umum"
                  />
                  <v-text-field
                    class="purple-input my-3"
                    label="Masukan NPM Wakil Ketua Umum"
                  />
                  <v-text-field
                    class="purple-input my-3"
                    label="Masukan Jurusan Wakil Ketua Umum"
                  />
                  <v-text-field
                    class="purple-input my-3"
                    label="Masukan Angkatan"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <div id="app">
                    <vue-editor
                      v-model="content1"
                    />
                  </div>
                </v-col>
                <v-col cols="6">
                  <div id="app">
                    <vue-editor
                      v-model="content2"
                    />
                  </div>
                </v-col>

                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    color="success"
                    class="mr-0"
                  >
                    Simpan Data
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
      <!-- Ini bagian foto -->
      <v-col
        cols="12"
        md="4"
      >
        <base-material-card
          class="v-card-profile"
          avatar="https://api-private.atlassian.com/users/0a617eab91f8135ff9cb328209be67f2/avatar"
        >
          <v-card-text class="text-center">
            <h6 class="display-1 mb-3 grey--text">
              Foto Pasangan Calon
            </h6>

            <v-btn
              color="success"
              rounded
              class="mr-0"
            >
              Unggah
            </v-btn>
          </v-card-text>
        </base-material-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { VueEditor } from 'vue2-editor'

  export default {
    components: {
      VueEditor,
    },

    data () {
      return {
        content1: '<h3>Visi</h3>',
        content2: '<h3>Misi</h3>',
      }
    },
  }
</script>
