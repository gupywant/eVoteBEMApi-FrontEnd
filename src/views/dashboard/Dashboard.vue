<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        lg="6"
      >
        <base-material-card
          color="success"
          class="px-5 py-3"
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light text-center">
              Hasil Perolehan Sementara
            </div>
          </template>
          <bar-chart />
        </base-material-card>
      </v-col>
      <v-col
        cols="12"
        lg="6"
      >
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light text-center">
              Status Mahasiswa
            </div>

            <div class="subtitle-1 font-weight-light text-center">
              Data Mahasiswa Universitas Gunadarma
            </div>
          </template>

          <v-card-text>
            <template>
              <v-data-table
                :headers="headers1"
                :items="desserts"
                :items-per-page="5"
                class="elevation-1"
              />
            </template>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
      >
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light text-center">
              Status Kandidat
            </div>

            <div class="subtitle-1 font-weight-light text-center">
              Data Kandidat Calon Ketua / Wakil Ketua BEM FIKTI Universitas Gunadarma
            </div>
          </template>

          <v-card-text>
            <template>
              <v-data-table
                :headers="headers"
                :items="desserts"
                :items-per-page="5"
                class="elevation-1"
              >
                <template v-slot:top>
                  <v-dialog
                    v-model="dialog"
                    max-width="500px"
                  >
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                      </v-card-title>

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
  import BarChart from './pages/BarChart.vue'
  export default {
    name: 'DashboardDashboard',
    components: { BarChart },
    data () {
      return {
        el: '#chart',
        headers1: [
          {
            text: 'NPM',
            sortable: true,
            value: 'npm',
          },
          { text: 'Nama Mahasiswa', value: 'name', sortable: true },
        ],
        desserts: [
          {
            npm: '12345678',
            name: 'Frozen Yogurt',
            date: '25/01/2021',
            status: 'Sudah Vote',
            total: '75',
          },
          {
            npm: '12345678',
            name: 'Ice cream sandwich',
            date: '-',
            status: 'Belum Vote',
            total: '75',
          },
          {
            npm: '12345678',
            name: 'Eclair',
            date: '25/01/2021',
            status: 'Sudah Vote',
            total: '75',
          },
          {
            npm: '12345678',
            name: 'Cupcake',
            date: '-',
            status: 'Belum Vote',
            total: '75',
          },
          {
            npm: '12345678',
            name: 'Gingerbread',
            date: '25/01/2021',
            status: 'Sudah Vote',
            total: '75',
          },
          {
            npm: '12345678',
            name: 'Jelly bean',
            date: '-',
            status: 'Belum Vote',
            total: '75',
          },
          {
            npm: '12345678',
            name: 'Lollipop',
            date: '25/01/2021',
            status: 'Sudah Vote',
            total: '75',
          },
          {
            npm: '12345678',
            name: 'Honeycomb',
            date: '-',
            status: 'Belum Vote',
            total: '75',
          },
          {
            npm: '12345678',
            name: 'Donut',
            date: '25/01/2021',
            status: 'Sudah Vote',
            total: '75',
          },
          {
            npm: '12345678',
            name: 'KitKat',
            date: '-',
            status: 'Belum Vote',
            total: '75',
          },
        ],
        dialog: false,
        dialogDelete: false,
        headers: [
          {
            text: 'No',
            sortable: true,
            value: 'npm',
            align: 'start',
          },
          { text: 'Nama Ketua', value: 'name' },
          { text: 'NPM', value: 'npm' },
          { text: 'Kelas', value: 'name' },
          { text: 'Nama Wakil', value: 'name' },
          { text: 'NPM', value: 'npm' },
          { text: 'Kelas', value: 'total' },
          { text: 'Total', value: 'total' },
          { text: 'Aksi', value: 'actions' },
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
        watch: {
          dialog (val) {
            val || this.close()
          },
          dialogDelete (val) {
            val || this.closeDelete()
          },
        },
        news: [],
      }
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
    },
  }
</script>
