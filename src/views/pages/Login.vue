<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link to="/" class="d-flex align-center">
            <v-img
              :src="require('@/assets/logo/logo.svg')"
              max-height="30px"
              max-width="30px"
              alt="logo"
              contain
              class="me-3"
            ></v-img>
            <h2 class="text-2xl font-weight-semibold">VueKart</h2>
          </router-link>
        </v-card-title>
        <v-card-text>
          <p class="text-2xl font-we bight-semibold text--primary mb-2">Welcome to VueKart!</p>
          <p class="mb-2">Please sign-in to your account and explore the world</p>
        </v-card-text>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="email"
              outlined
              label="Email"
              placeholder="john@example.com"
              hide-details
              class="mb-3"
            ></v-text-field>
            <v-text-field
              v-model="password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Password"
              placeholder="············"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>
            <div class="d-flex align-center justify-space-between flex-wrap">
              <v-checkbox label="Remember Me" hide-details class="me-3 mt-1"> </v-checkbox>
            </div>
            <v-btn block color="primary" class="mt-6" v-on:click="login()"> Login </v-btn>
            <p v-if="message">{{ message }}</p>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isPasswordVisible = ref(false)
    const email = ref('')
    const password = ref('')

    return {
      isPasswordVisible,
      email,
      password,

      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
    }
  },
  data: () => ({
    message: null,
  }),
  computed: {
    users() {
      return this.$store.state.users
    },
  },
  methods: {
    login() {
      if (this.email !== '' && this.password !== '') {
        this.axios
          .get('http://localhost:10962/api/account/' +this.email)
          .then(response => {
            console.log(response)
            if (response.data[0].email === this.email && response.data[0].password === this.password) {
              this.message = null
              this.$store.commit('setUserIdSession', response.data[0].id)
              this.$router.push({name: "products", params: {username: response.data[0].name}});
            } else {
              this.message = 'Invalid username or password'
            }
          })
          .catch(error => {
            console.log(error)
            this.message = 'Invalid username or password'
          })
      } else {
        this.message = 'Email and password required!'
      }
    },
  },
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
