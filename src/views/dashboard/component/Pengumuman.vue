<template>
  <v-container
    id="alerts"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="10"
      >
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Pengumuman
            </div>

            <div class="subtitle-1 font-weight-light">
              List Pengumuman / Buat Pengumuman Baru
            </div>
          </template>

          <v-card-text>
            <template>
              <v-data-table
                :headers="headers"
                :items="news"
                :items-per-page="5"
                class="elevation-1"
              >
                <template v-slot:top>
                  <v-toolbar
                    flat
                  >
                    <v-toolbar-title>List Pengumuman</v-toolbar-title>
                    <v-dialog
                      v-model="dialog"
                      max-width="500px"
                    >
                      <v-card>
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col
                                cols="12"
                                sm="6"
                                md="4"
                              >
                                <v-text-field
                                  v-model="editedItem.name"
                                  label="Dessert name"
                                />
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="4"
                              >
                                <v-text-field
                                  v-model="editedItem.calories"
                                  label="Calories"
                                />
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="4"
                              >
                                <v-text-field
                                  v-model="editedItem.fat"
                                  label="Fat (g)"
                                />
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="4"
                              >
                                <v-text-field
                                  v-model="editedItem.carbs"
                                  label="Carbs (g)"
                                />
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="4"
                              >
                                <v-text-field
                                  v-model="editedItem.protein"
                                  label="Protein (g)"
                                />
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer />
                          <v-btn
                            color="blue darken-1"
                            text
                            @click="close"
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                            color="blue darken-1"
                            text
                            @click="save"
                          >
                            Save
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                    <v-dialog
                      v-model="dialogDelete"
                      max-width="500px"
                    >
                      <v-card>
                        <v-card-title>
                          Are you sure you want to delete this item?
                        </v-card-title>
                        <v-card-actions>
                          <v-spacer />
                          <v-btn
                            color="blue darken-1"
                            text
                            @click="closeDelete"
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                            color="blue darken-1"
                            text
                            @click="deleteItemConfirm"
                          >
                            OK
                          </v-btn>
                          <v-spacer />
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-toolbar>
                </template>
                <template v-slot:item.actions="{ item }">
                  <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
                  >
                    {{ icons.mdiEye }}
                  </v-icon>
                  <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
                  >
                    {{ icons.mdiPencil }}
                  </v-icon>
                  <v-icon
                    small
                    @click="deleteItem(item)"
                  >
                    {{ icons.mdiDelete }}
                  </v-icon>
                </template>
              </v-data-table>
            </template>
          </v-card-text>

          <v-divider
            inset
            class="mb-5"
          />

          <div class="display-2 font-weight-bold text-center my-3">
            Buat Pengumuman Baru
          </div>

          <v-form @click="submitNews">
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                  md="12"
                >
                  <v-row>
                    <v-col cols="8">
                      <v-img
                        src="https://picsum.photos/350/165?random"
                        height="275"
                        class="grey darken-4 mt-3"
                      />
                    </v-col>
                    <v-col cols="4">
                      <v-file-input
                        label="Masukkan Gambar"
                        filled
                        prepend-icon="mdi-camera"
                        class="mt-3"
                      />
                      <v-text-field
                        v-model="title"
                        class="purple-input my-3"
                        label="Masukan Judul Pengumuman"
                      />
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <div id="app">
                    <vue-editor
                      v-model="content"
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
                    @click="submitNews"
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
  import {
    mdiPencil,
    mdiDelete,
    mdiEye,
  } from '@mdi/js'
  import { VueEditor } from 'vue2-editor'
  export default {
    name: 'DashboardNotifications',

    // Content WYSYS
    components: {
      VueEditor,
    },

    data () {
      return {
        title: '',
        content: 'Masukkan Pengumuman',
        dialog: false,
        dialogDelete: false,
        news: [],
        headers: [
          {
            text: 'Judul',
            sortable: true,
            value: 'title',
          },
          { text: 'Konten', value: 'content', sortable: false },
          { text: 'Tanggal Post', value: 'created_at', sortable: true },
          { text: 'Tanggal Post', value: 'actions', sortable: true },
        ],
        editedIndex: -1,
        editedItem: {
          name: '',
          calories: 0,
          fat: 0,
          carbs: 0,
          protein: 0,
        },
        defaultItem: {
          name: '',
          calories: 0,
          fat: 0,
          carbs: 0,
          protein: 0,
        },
        icons: {
          mdiPencil,
          mdiDelete,
          mdiEye,
        },
      }
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    mounted () {
      this.$store
        .dispatch('fetchNews')
        .then(async (response) => {
          await response.data.data.map((item) => {
            this.news.push({ title: item.title, content: `${item.content.substr(0, 10)}...`, created_at: item.created_at.substr(0, 10) })
          })
          console.log(this.news)
        })
        .catch(error => {
          console.log(error)
        })
    },
    methods: {
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
      async submitNews () {
        const payload = {
          title: this.title,
          content: this.content,
          id_admin: localStorage.getItem('id_admin'),
          image: 'xxxx',
        }
        this.$store
          .dispatch('submitNews', payload)
          .then((response) => {
          })
          .catch(error => {
            console.log('Gagal')
            console.log(error.message)
          })
      },
    },
  }
</script>
