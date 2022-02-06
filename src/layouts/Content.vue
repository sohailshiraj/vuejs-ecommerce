<template>
  <v-app>
    <!-- <vertical-nav-menu :is-drawer-open.sync="isDrawerOpen"></vertical-nav-menu> -->
    <v-img
      :src="require('@/assets/images/logos/logo.svg')"
      max-height="30px"
      max-width="30px"
      alt="logo"
      contain
      eager
      class="app-logo me-3"
    ></v-img>
    <h2 class="app-title text--primary">MATERIO</h2>
    <div class="vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2">
      <router-link to="/" class="d-flex align-center text-decoration-none">
        <v-img
          :src="require('@/assets/images/logos/logo.svg')"
          max-height="30px"
          max-width="30px"
          alt="logo"
          contain
          eager
          class="app-logo me-3"
        ></v-img>
        <h2 class="app-title text--primary">MATERIO</h2>
      </router-link>
    </div>
    <v-app-bar app flat :color="!$vuetify.theme.dark ? 'white' : '#28243D'">
      <div class="boxed-container w-full">
        <div class="d-flex align-center mx-12">
          <v-app-bar-nav-icon class="d-block d-lg-none me-2" @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>

          <v-spacer></v-spacer>

          <v-toolbar-items>
            <router-link to="/" :class="$vuetify.theme.dark ? 'v-btn mx-4 white--text' : 'v-btn mx-4 white--text--dark'">
              <span>Products</span>
            </router-link>
            <router-link to="/account-settings" class="v-btn mx-4 white--text">
              <span>My Account</span>
            </router-link>
          </v-toolbar-items>
          <v-spacer></v-spacer>
          <theme-switcher></theme-switcher>
          <!-- <v-btn
            icon
            small
            class="ms-3"
          >
            <v-icon>
              {{ icons.mdiBellOutline }}
            </v-icon>
          </v-btn> -->
          <router-link tag="button" v-on="on" to="/cart" icon>
            <v-badge :content="cart" :value="cart" overlap>
              <v-icon>{{ icons.mdiCartVariant }}</v-icon>
            </v-badge>
          </router-link>
          <app-bar-user-menu></app-bar-user-menu>
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <div class="app-content-container boxed-container pa-6">
        <slot></slot>
      </div>
    </v-main>

    <v-footer app inset color="transparent" absolute height="56" class="px-0">
      <div class="boxed-container w-full">
        <div class="mx-6 d-flex justify-space-between">
          <span>
            &copy; 2021
            <a href="https://themeselection.com" class="text-decoration-none" target="_blank">ThemeSelection</a></span
          >
          <span class="d-sm-inline d-none">
            <a
              href="https://themeselection.com/products/category/download-free-admin-templates/"
              target="_blank"
              class="me-6 text--secondary text-decoration-none"
              >Freebies</a
            >
            <a href="https://themeselection.com/blog/" target="_blank" class="me-6 text--secondary text-decoration-none"
              >Blog</a
            >
            <a
              href="https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free/blob/main/LICENSE"
              target="_blank"
              class="text--secondary text-decoration-none"
              >MIT Licence</a
            >
          </span>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiMagnify, mdiBellOutline, mdiGithub, mdiCartVariant } from '@mdi/js'
import VerticalNavMenu from './components/vertical-nav-menu/VerticalNavMenu.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import AppBarUserMenu from './components/AppBarUserMenu.vue'

export default {
  components: {
    VerticalNavMenu,
    ThemeSwitcher,
    AppBarUserMenu,
  },
  setup() {
    const isDrawerOpen = ref(null)

    return {
      isDrawerOpen,

      // Icons
      icons: {
        mdiMagnify,
        mdiBellOutline,
        mdiGithub,
        mdiCartVariant,
      },
    }
  },
  computed: {
    cart() {
      return this.$store.state.session.cart.length;
    }
  }
}
</script>

<style lang="scss" scoped>
.v-app-bar ::v-deep {
  .v-toolbar__content {
    padding: 0;

    .app-bar-search {
      .v-input__slot {
        padding-left: 18px;
      }
    }
  }
}

.boxed-container {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
</style>
