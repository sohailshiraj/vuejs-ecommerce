<template>
  <div>
    <v-container>
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <v-carousel>
            <v-carousel-item :src="require('../../assets/img/home/slider4.jpg')"> </v-carousel-item>
            <v-carousel-item :src="require('../../assets/img/home/slider2.jpg')"> </v-carousel-item>
            <v-carousel-item :src="require('../../assets/img/home/slider3.jpg')"> </v-carousel-item>
            <v-carousel-item :src="require('../../assets/img/home/slider1.jpg')"> </v-carousel-item>
          </v-carousel>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12">
          <v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs>
          <div class="pl-6">
            <p class="display-1 mb-0">{{ product.name }}</p>
            <v-card-actions class="pa-0">
              <p class="headline font-weight-light pt-3">
                ${{ getDiscountedValue(product.price, product.discount) }}
                <del style="" class="subtitle-1 font-weight-thin">${{product.price}}</del>
              </p>
              <v-spacer></v-spacer>
              <v-rating v-model="product.rating" class="" background-color="warning lighten-3" color="warning" dense></v-rating>
              <span class="body-2 font-weight-thin">{{getReviewsCount(product)}} REVIEWS</span>
            </v-card-actions>
            <p class="subtitle-1 font-weight-thin">
              {{product.description}}
            </p>
            <p class="title">SIZE</p>
            <v-radio-group v-model="row" row>
              <v-radio label="XS" value="XS"></v-radio>
              <v-radio label="S" value="s"></v-radio>
              <v-radio label="M" value="m"></v-radio>
              <v-radio label="L" value="l"></v-radio>
              <v-radio label="XL" value="xl"></v-radio>
            </v-radio-group>
            <p class="title">ITEMS</p>

            <v-text-field outlined style="width: 100px" :value="1" v-model="quantity" dense></v-text-field>
            <v-btn class="primary white--text" outlined tile dense @click="addToCart(id, quantity)"><v-icon>mdi-cart</v-icon> ADD TO CART</v-btn>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12">
          <v-tabs>
            <v-tab>Description</v-tab>
            <v-tab>Reviews</v-tab>
            <v-tab-item>
              <p class="pt-10 subtitle-1 font-weight-thin">
                {{ product.longDescription }}
              </p>
            </v-tab-item>
            <v-tab-item>
              <v-list three-line="true" avatar="true">
                <v-list-item-group v-model="item" color="primary">
                  <v-list-item v-for="(item, i) in items" :key="i" inactive="true">
                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-html="item.title"></v-list-item-title
                      ><v-rating
                        v-model="rating"
                        class=""
                        background-color="warning lighten-3"
                        color="warning"
                        dense
                      ></v-rating>
                      <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
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
    breadcrums: [
      {
        text: 'Home',
        disabled: false,
        href: 'breadcrumbs_home',
      },
      {
        text: 'Clothing',
        disabled: false,
        href: 'breadcrumbs_clothing',
      },
      {
        text: 'T-Shirts',
        disabled: true,
        href: 'breadcrumbs_shirts',
      },
    ],
    item: 5,
    items: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Lorem ipsum dolor?',
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.\n" +
          '\n',
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Lorem ipsum dolor <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Lorem ipsum dolor',
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Lorem ipsum dolor',
        subtitle: '',
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Lorem ipsum dolor',
        subtitle:
          "<span class='text--primary'>Britta Holt</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
  }),
  created() {
    this.id = this.$route.params.id
  },
  computed: {
    product() {
      return this.$store.state.products[this.id]
    },
  },
  methods: {
    getDiscountedValue(price, discount){
      return price - ( price/100 * discount);
    },
    getReviewsCount(product){
      return product.reviews.length
    },
    addToCart(productId, quantity) {
      var item = {
          productId: productId,
          quantity: quantity
      };
      this.$store.commit('addToCart', item);
    }
  }
}
</script>
