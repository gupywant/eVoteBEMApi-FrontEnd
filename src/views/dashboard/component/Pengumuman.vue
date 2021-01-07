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
              Pengumuman
            </div>

            <div class="subtitle-1 font-weight-light">
              Lengkapi pengumuman
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                  md="12"
                >
                  <v-text-field
                    class="purple-input my-3"
                    label="Masukan Judul Pengumuman"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <div id="app">
                    <vue-editor
                      v-model="content1"
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
    </v-row>
  </v-container>
</template>

<script>
  import { VueEditor } from 'vue2-editor'
  export default {
    name: 'DashboardNotifications',

    data: () => ({
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

    // Content WYSYS
    components: {
      VueEditor,
    },

  }
</script>
