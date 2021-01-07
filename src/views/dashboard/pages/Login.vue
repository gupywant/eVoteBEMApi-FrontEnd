<template>
  <div id="app">
    <v-app
      id="inspire"
      :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }"
    >
      <v-container>
        <v-row>
          <v-col
            sm="12"
            md="6"
            offset-md="3"
          >
            <v-card
              elevation="4"
              light
              tag="section"
            >
              <v-card-title>
                <v-row
                  align="center"
                  justify="space-between"
                >
                  <h3 class="headline">
                    {{ platformName }}
                  </h3>
                  <v-col>
                    <v-img
                      :alt="platformName"
                      class="ml-3"
                      contain
                      height="48px"
                      position="center right"
                      src="https://www.mobygames.com/images/i/12/25/1435075.png"
                    />
                  </v-col>
                </v-row>
              </v-card-title>
              <v-divider />
              <v-card-text>
                <p>Sign in with your username and password:</p>
                <v-form>
                  <v-text-field
                    v-model="username"
                    outline
                    label="Username"
                    type="text"
                  />
                  <v-text-field
                    v-model="password"
                    outline
                    hide-details
                    label="Password"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-divider />
              <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                <v-btn
                  color="info"
                >
                  Forgot password?
                </v-btn>
                <v-spacer />
                <v-btn
                  color="info"
                  :loading="isLoading"
                  :class="$vuetify.breakpoint.smAndUp"
                  width="200px"
                  @click="login"
                >
                  <v-icon left>
                    mdi-lock
                  </v-icon>
                  Login
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col
            sm="12"
            md="6"
            offset-md="3"
          >
            <v-row
              align="center"
              justify="space-between"
            >
              <p
                class="caption my-3"
              >
                <a href="#">Privacy Policy</a>
                |
                <a href="#">Terms of Service</a>
              </p>
              <p
                class="caption my-3"
              >
                Powered by
                <a href="#">StaffCircle</a>
              </p>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        platformName: '',
        username: '',
        password: '',
        isLoading: false,
      }
    },
    methods: {
      login () {
        this.isLoading = true
        const payload = {
          username: this.username,
          password: this.password,
        }
        this.$store.dispatch('login', payload)
          .then(() => {
            this.isLoading = false
            setTimeout(() => (this.isLoading = false), 3000)
          })
          .catch(error => {
            console.log(error.message)
            setTimeout(() => (this.isLoading = false), 3000)
          })
      },
    },
  }
</script>
