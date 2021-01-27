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

          <v-form @submit="submitCandidate">
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                >
                  <v-text-field
                    id="nm_1"
                    v-model="nm_1"
                    class="purple-input my-3"
                    label="Masukkan Nama Lengkap Ketua Umum"
                    name="nm_1"
                  />
                  <v-text-field
                    id="npm_1"
                    v-model="npm_1"
                    class="purple-input my-3"
                    label="Masukkan NPM Ketua Umum"
                    name="npm_1"
                  />
                  <v-text-field
                    id="kelas_1"
                    v-model="kelas_1"
                    class="purple-input my-3"
                    label="Masukkan Kelas Ketua Umum"
                    name="kelas_1"
                  />
                </v-col>
                <v-col
                  cols="6"
                  md="6"
                >
                  <v-text-field
                    id="nm_2"
                    v-model="nm_2"
                    class="purple-input my-3"
                    label="Masukkan Nama Lengkap Wakil Ketua Umum"
                    name="nm_2"
                  />
                  <v-text-field
                    id="npm_2"
                    v-model="npm_2"
                    class="purple-input my-3"
                    label="Masukkan NPM Wakil Ketua Umum"
                    name="npm_2"
                  />
                  <v-text-field
                    id="kelas_2"
                    v-model="kelas_2"
                    class="purple-input my-3"
                    label="Masukkan Kelas Wakil Ketua Umum"
                    name="kelas_2"
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
                    @click="submitCandidate"
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
          v-if="imageData.length > 0"
          class="v-card-profile"
          :avatar="imageData"
        >
          <v-card-text class="text-center">
            <h6 class="display-1 mb-3">
              <input
                type="file"
                accept="image/*"
                @change="previewImage"
              >
            </h6>
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
        nm_1: '',
        npm_1: '',
        kelas_1: '',
        nm_2: '',
        npm_2: '',
        kelas_2: '',
        total_vote: '',
        content1: '<h3>Visi</h3>',
        content2: '<h3>Misi</h3>',
        imageData: 'https://api-private.atlassian.com/users/0a617eab91f8135ff9cb328209be67f2/avatar',
      }
    },
    methods: {
      async submitCandidate () {
        const payload = {
          vision: this.content1,
          mission: this.content2,
          total_vote: 0,
          image: 'xxxx',
        }
        this.$store
          .dispatch('submitCandidate', payload)
          .then(async (response) => {
            const id = await response.data.data.id
            await this.submitCandidateDataKetua(id)
            await this.submitCandidateDataWakil(id)
          })
          .catch(error => {
            console.log('Gagal')
            console.log(error.message)
          })
      },
      submitCandidateDataKetua (id) {
        const payload = {
          id_candidate: id,
          npm: this.npm_1,
          name: this.nm_1,
          candidate_class: this.kelas_1,
          status: 1,
        }
        this.$store
          .dispatch('submitCandidateData', payload)
          .then((response) => {
            console.log(response.data)
          })
          .catch(error => {
            console.log('Gagal')
            console.log(error.message)
          })
      },
      submitCandidateDataWakil (id) {
        const payload = {
          id_candidate: id,
          npm: this.npm_2,
          name: this.nm_2,
          candidate_class: this.kelas_2,
          status: 2,
        }
        this.$store
          .dispatch('submitCandidateData', payload)
          .then((response) => {
            console.log(response.data)
          })
          .catch(error => {
            console.log('Gagal')
            console.log(error.message)
          })
      },
      previewImage: function (event) {
        // Reference to the DOM input element
        var input = event.target
        // Ensure that you have a file before attempting to read it
        if (input.files && input.files[0]) {
          // create a new FileReader to read this image and convert to base64 format
          var reader = new FileReader()
          // Define a callback function to run, when FileReader finishes its job
          reader.onload = (e) => {
            // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
            // Read image as base64 and set to imageData
            this.imageData = e.target.result
          }
          // Start the reader job - read file as a data url (base64 format)
          reader.readAsDataURL(input.files[0])
        }
      },
    },
  }
</script>
