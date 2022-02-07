<template>
  <div>
    <v-row>
      <v-col lg="4" sm="6" cols="12" class="align-self-start" :key="pro.id" v-for="pro in products">
        <v-card>
          <router-link :to="{ name: 'product-details', params: { id: pro.id } }">
            <v-img :src="pro.src" style="height: 300px"></v-img>
            <v-btn
              text
              color="primary"
              dark
              style="position: absolute; top: 10px; right: 10px; background: white;
    border-radius: 62px;
    max-width: 50px;
    min-width: 52px;"
            >
              <v-icon>{{ icons.mdiAlertCircleOutline }}</v-icon>
            </v-btn>
          </router-link>
          <v-card-title>{{ pro.name }}</v-card-title>
          <v-card-text>
            <p class="text--primary text-base">
              ${{ getDiscountedValue(pro.price, pro.discount) }}
              <del style="" class="subtitle-1 font-weight-thin">${{ pro.price }}</del>
            </p>
            {{ pro.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import store from '../../store/index'
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
  mdiEyeOffOutline,
  mdiEyeCircleOutline,
  mdiEye,
  mdiAlertCircleOutline,
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
        mdiEyeOffOutline,
        mdiEyeCircleOutline,
        mdiEye,
        mdiAlertCircleOutline,
      },
    }
  },
  data: () => ({
    range: [0, 10000],
    select: 'Popularity',
    options: ['Default', 'Popularity', 'Relevance', 'Price: Low to High', 'Price: High to Low'],
    quantity: [1, 2, 3, 4, 5],
  }),
  computed: {
    products() {
      return this.$store.state.products
    },
  },
  methods: {
    getDiscountedValue(price, discount) {
      return price - (price / 100) * discount
    },
  },
}
</script>
