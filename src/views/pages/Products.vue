<template>
  <div>
    <v-row>
      <v-col
        lg="4"
        sm="6"
        cols="12"
        class="align-self-start"
        :key="pro.id" v-for="pro in products"
      >
        <v-card>
          <v-img :src="pro.src"></v-img>
          <v-card-title>{{pro.name}}</v-card-title>
          <v-card-text>
            <p class="text--primary text-base">
              ${{pro.price}}
            </p>
            {{pro.description}}
          </v-card-text>
          <v-card-actions class="d-flex justify-space-between dense">
            <v-btn
                  text
                  color="primary"
                  dark
                >
                  <v-icon>{{ icons.mdiCartPlus }}</v-icon>
                  <span class="ms-2">Add to cart</span>
                </v-btn>
                <v-select
                  :items="quantity"
                  label="Quantity"
                  outlined
                ></v-select>
          </v-card-actions>
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
  data: () => ({
    range: [0, 10000],
    select:'Popularity',
    options: [
        'Default',
        'Popularity',
        'Relevance',
        'Price: Low to High',
        'Price: High to Low',
    ],
    products:[
                {
                    id:1,
                    name:'Apple iPhone 11 Pro',
                    description: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
                    type:'Electronics',
                    price:'899.00',
                    rating: 5,
                    src:require('../../assets/images/pages/card-basic-mobile.png'),
                },
                {
                    id:2,
                    name:'Apple iPhone 11 Pro',
                    description: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
                    type:'Electronics',
                    price:'899.00',
                    rating: 5,
                    src:require('../../assets/images/pages/card-basic-mobile.png'),
                },
                {
                    id:3,
                    name:'Apple iPhone 11 Pro',
                    description: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
                    type:'Electronics',
                    price:'899.00',
                    rating: 5,
                    src:require('../../assets/images/pages/card-basic-mobile.png'),
                },
                {
                    id:4,
                    name:'Apple iPhone 11 Pro',
                    description: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
                    type:'Electronics',
                    price:'899.00',
                    rating: 5,
                    src:require('../../assets/images/pages/card-basic-mobile.png'),
                }
    ],
    quantity:[
      1,
      2,
      3,
      4,
      5
    ]
  })
}
</script>

<style>
.v-select {
  height: 52px;
}
</style>