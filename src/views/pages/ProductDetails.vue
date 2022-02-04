<template>
  <div>
    <v-card class="overflow-hidden">
      <v-row class="ma-0 h-full">
        <v-col cols="12" sm="8" md="12" lg="8" order="2" order-lg="1">
          <v-img :src="product.src" height="50%" width="50%"></v-img>
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-text>{{ product.description }}</v-card-text>
          <v-card-text>${{ product.price }}</v-card-text>
          <v-card-text>{{ product.rating }}</v-card-text>
          <v-card-text>
            <v-divider></v-divider>
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <div class="me-auto pe-4">
              <p class="d-flex align-center mb-6">
                <v-icon color="primary">
                  {{ icons.mdiLockOpenOutline }}
                </v-icon>
                <span class="ms-3">Full Access</span>
              </p>
              <p class="d-flex align-center mb-0">
                <v-icon color="primary">
                  {{ icons.mdiAccountOutline }}
                </v-icon>
                <span class="ms-3">15 Members</span>
              </p>
            </div>

            <v-divider v-if="$vuetify.breakpoint.smAndUp" vertical inset> </v-divider>

            <div class="ms-auto ps-4">
              <p class="d-flex align-center mb-6">
                <v-icon color="primary">
                  {{ icons.mdiStarOutline }}
                </v-icon>
                <span class="ms-3">Access all Features</span>
              </p>
              <p class="d-flex align-center mb-0">
                <v-icon color="primary">
                  {{ icons.mdiTrendingUp }}
                </v-icon>
                <span class="ms-3">Lifetime Free Update</span>
              </p>
            </div>
          </v-card-actions>
        </v-col>
        <v-col cols="12" sm="4" md="12" lg="4" order="1" order-lg="2" class="memberpricing-bg">
          <div class="membership-pricing">
            <p class="mt-16 text--primary">
              <sub class="text-2xl">$</sub>
              <sup class="font-weight-semibold">899</sup>
              <sub class="text-xl">USD</sub>
            </p>
            <p class="my-6 text--secondary text-sm">5 Tips For Offshore Software Development</p>
            <v-btn color="primary" class="mt-6"> Contact Now </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import {
  mdiChevronUp,
  mdiChevronDown,
  mdiCartPlus,
  mdiShareVariantOutline,
  mdiLockOpenOutline,
  mdiStarOutline,
  mdiAccountOutline,
  mdiTrendingUp,
  mdiHelpCircleOutline,
} from '@mdi/js'

export default {
  setup() {
    const isCardDetailsVisible = false
    const rating = ref(5)

    return {
      isCardDetailsVisible,
      rating,

      // icons
      icons: {
        mdiChevronUp,
        mdiChevronDown,
        mdiCartPlus,
        mdiShareVariantOutline,
        mdiLockOpenOutline,
        mdiStarOutline,
        mdiAccountOutline,
        mdiTrendingUp,
        mdiHelpCircleOutline,
      },
    }
  },
  created() {
    this.id = this.$route.params.id
  },
  computed: {
    product() {
        return this.$store.state.products[this.id]
    },
  },
}
</script>
