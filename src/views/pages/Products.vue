<template>
  <div>
    <p class="display-1 font-weight-light pa-1" style="background: transparent">Hello! {{ this.$route.params.username }}</p>
    <v-row>
      <v-col lg="4" sm="6" cols="12" class="align-self-start" :key="pro._id" v-for="pro in products">
        <v-card>
          <router-link :to="{ name: 'product-details', params: { id: pro._id } }">
            <v-img :src="require('../../assets/img/shop/' + pro.image)" style="height: 400px"></v-img>
          </router-link>
          <div style="display: flex; justify-content: space-between">
            <v-card-title>{{ pro.name }}</v-card-title>
            <v-rating v-model="pro.rating" background-color="warning lighten-3" color="warning" dense style="align-self: center; padding-right: 20px"></v-rating>
          </div>
          <v-card-text>
            <p class="text--primary text-base">${{ getDiscountedValue(pro.price, pro.discount) }}<del class="subtitle-1 font-weight-thin">${{ pro.price }}</del></p>
            {{ pro.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  data: () => ({
    products: [],
  }),
  created() {
    this.getAllProducts()
  },
  methods: {
    getAllProducts() {
      this.axios
        .get('http://localhost:5000/api/product')
        .then(response => {
          console.log(response)
          this.products = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    getDiscountedValue(price, discount) {
      return price - (price / 100) * discount
    },
  },
}
</script>
