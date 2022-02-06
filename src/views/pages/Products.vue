<template>
  <div>
    <v-row>
      <v-col lg="4" sm="6" cols="12" class="align-self-start" :key="pro.id" v-for="pro in products">
        <v-card>
          <router-link :to="{ name: 'product-details', params: { id: pro.id } }">
            <v-img :src="pro.src"></v-img>
          </router-link>
          <v-card-title>{{ pro.name }}</v-card-title>
          <v-card-text>
            <p class="text--primary text-base">${{ pro.price }}</p>
            {{ pro.description }}
          </v-card-text>
          <v-card-actions class="d-flex justify-space-between dense">
            <v-btn text color="primary" dark>
              <v-icon>{{ icons.mdiCartPlus }}</v-icon>
              <span class="ms-2">Add to cart</span>
            </v-btn>
            <v-text-field
              class="pt-10"
              label="Outlined"
              style="width: 80px"
              single-line
              outlined
              value="0"
              type="number"
            ></v-text-field>
          </v-card-actions>
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
  data: () => ({
    range: [0, 10000],
    select: 'Popularity',
    options: ['Default', 'Popularity', 'Relevance', 'Price: Low to High', 'Price: High to Low'],
    quantity: [1, 2, 3, 4, 5],
  }),
  computed: {
    products() {
      return this.$store.state.products
    }
  }
}
</script>
