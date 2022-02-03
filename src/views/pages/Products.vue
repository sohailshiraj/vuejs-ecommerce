<template>
  <div>
    <v-row>
        <v-col sm="6" cols="12">
            <v-card class="d-flex align-center">
            <div class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
                <div class="mx-auto">
                <v-img width="220" height="100%" src="@/assets/images/pages/card-basic-mobile.png"></v-img>
                </div>
                <v-divider :vertical="$vuetify.breakpoint.mdAndUp"></v-divider>
                <div>
                <v-card-title> Apple iPhone 11 Pro </v-card-title>
                <v-card-text>
                    Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic
                </v-card-text>
                <v-card-text class="text--primary text-base">
                    <span>Price :</span> <span class="font-weight-bold">$899</span>
                </v-card-text>
                <v-card-actions class="d-flex justify-space-between dense">
                    <v-btn text color="primary" dark>
                    <v-icon>{{ icons.mdiCartPlus }}</v-icon>
                    <span class="ms-2">Add to cart</span>
                    </v-btn>
                    <v-btn icon>
                    <v-icon>{{ icons.mdiShareVariantOutline }}</v-icon>
                    </v-btn>
                </v-card-actions>
                </div>
            </div>
            </v-card>
        </v-col>
    </v-row>
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
}
</script>