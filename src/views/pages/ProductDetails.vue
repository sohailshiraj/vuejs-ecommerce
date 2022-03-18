<template>
  <div>
    <v-container>
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <v-img :src="require('../../assets/img/shop/' + product.image)"></v-img>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12">
          <div class="pl-6">
            <p class="display-1 mb-0">{{ product.name }}</p>
            <v-card-actions class="pa-0">
              <p class="headline font-weight-light pt-3">${{ getDiscountedValue(product.price, product.discount) }}
                <del class="subtitle-1 font-weight-thin">${{ product.price }}</del>
              </p>
              <v-spacer></v-spacer>
              <v-rating v-model="product.rating" background-color="warning lighten-3" color="warning" densereadonly></v-rating>
            </v-card-actions>
            <p class="subtitle-1 font-weight-thin">{{ product.description }}</p>
            <p class="title">SIZE</p>
            <v-radio-group v-model="row" row>
              <v-radio label="Mini" value="XS"></v-radio>
              <v-radio label="Standard" value="s"></v-radio>
              <v-radio label="Pro" value="m"></v-radio>
              <v-radio label="Pro Max" value="l"></v-radio>
            </v-radio-group>
            <p class="title">STORAGE</p>
            <v-radio-group v-model="row" row>
              <v-radio label="64" value="XS"></v-radio>
              <v-radio label="128" value="s"></v-radio>
              <v-radio label="256" value="m"></v-radio>
            </v-radio-group>
            <p class="title">ITEMS</p>
            <v-text-field outlined style="width: 100px" :value="1" v-model="quantity" dense></v-text-field>
            <v-btn class="white--text" outlined tile dense @click="addToCart(product.id, quantity)"><v-icon>mdi-cart</v-icon> ADD TO CART</v-btn>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12">
          <v-tabs>
            <v-tab>Description</v-tab>
            <v-tab>Reviews</v-tab>
            <v-tab-item>
              <p class="pt-10 subtitle-1 font-weight-thin">{{ product.longDescription }}</p>
            </v-tab-item>
            <v-tab-item>
              <v-list three-line="true" avatar="true">
                <v-list-item-group v-model="item" color="primary">

                  <v-list-item v-for="(item, i) in rev" :key="i" inactive="true">
                    <v-list-item-content>
                      <v-list-item-title v-html="item.user_id.name"></v-list-item-title>
                      <v-rating v-model="item.rating" background-color="warning lighten-3" color="warning" dense readonly></v-rating>
                      <v-list-item-subtitle v-html="item.comment"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item v-if="havePurchasedProduct(id)">
                    <v-list-item-content>
                      <v-text-field outlined style="width: 100px" :value="1" v-model="review" placeholder="Post a review" dense></v-text-field>
                      <v-rating v-model="newRating" background-color="warning lighten-3" color="warning" value="0" dense></v-rating>
                      <v-btn class="white--text" outlined tile dense @click="addReview(id, newRating, review)"><v-icon>mdi-cart</v-icon>Post review</v-btn>
                    </v-list-item-content>
                  </v-list-item>

                </v-list-item-group>
              </v-list>
            </v-tab-item>
          </v-tabs>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    rating: 4.5,
    item: 5,
    product: {},
    rev: {},
  }),
  async created() {
    this.id = this.$route.params.id
    this.getProductDetail(this.id)
    this.getReviewDetail(this.id)
  },
  methods: {
    async getProductDetail(id) {
      this.axios
        .get('http://localhost:5000/api/product/'+id)
        .then(response => {
          console.log(response.data)
          this.product = response.data;
        })
        .catch(error => {
          console.log(error)
        })
    },


    async getReviewDetail(id) {
      this.axios
        .get('http://localhost:5000/api/review/'+id)
        .then(response => {
          console.log(response.data)
          this.rev = response.data;
        })
        .catch(error => {
          console.log(error)
        })
    },


    getDiscountedValue(price, discount) {
      return price - (price / 100) * discount
    },
    getReviewsCount(product) {
      return product.reviews.length
    },
    addToCart(productId, quantity) {
      const item = {
        productId: productId,
        quantity: quantity,
      }
      this.$store.commit('addToCart', item)
    },
    addReview(id, rating, review) {
      this.axios
        .post('http://localhost:5000/api/review', {
          rating: rating,
          comment: review,
          user_id: this.$store.state.session.userId,
          product_id: id,
        })
        .then(response => {
          console.log(response)
          this.getReviewDetail(id)
        })
        .catch(error => {
          console.log(error)
        })
      this.clearFields()
    },
    clearFields() {
      this.newRating = 0
      this.review = ''
    },
    havePurchasedProduct(id) {
      const currUserId = this.$store.state.session.userId
      let flag = true

      this.$store.state.purchases.forEach(element => {
        if ((element.userId === currUserId)) {
          if (element.items.filter(item => item.productId === id).length > 0) {
            flag = true
          }
        }
      })

      return flag
    },
  },
}
</script>
