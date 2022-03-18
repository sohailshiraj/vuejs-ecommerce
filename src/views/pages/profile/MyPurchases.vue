<template>
  <v-card flat class="mt-5">
    <v-form>
      <div>
        <v-row v-if="purchases.length > 0">
          <v-col md="6" lg="8" cols="12" :key="purchase._id" v-for="purchase in purchases">
            <v-card class="overflow-hidden" style="margin: 10px">
              <v-row class="ma-0 h-full">
                <v-col cols="12" sm="8" md="12" lg="8" order="2" order-lg="1">
                  <v-card-title>Purchase # {{ purchase._id }}</v-card-title>
                  <v-card-text :key="purchase._id + item._id" v-for="(item, index) in purchase.products">
                    {{ index + 1 }}. Product: <b>{{ getProductById(item.productId).name }}</b>, Quantity: <b>{{ item.quantity }}</b>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                  md="12"
                  lg="4"
                  order="1"
                  order-lg="2"
                  class="memberpricing-bg"
                  style="background-color: rgba(94, 86, 105, 0.04)"
                >
                  <div class="membership-pricing">
                    <p class="mt-16 text--primary">
                      <sub class="text-2xl">$</sub>
                      <sup style="font-size: 3rem; top: 9px" class="font-weight-semibold">{{ purchase.sub_total }}</sup>
                      <sub class="text-xl">CAD</sub>
                    </p>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <p class="font-weight-light pa-1" v-if="purchases.length == 0">You have no purchases!</p>
    </v-form>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiKeyOutline, mdiLockOpenOutline, mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiKeyOutline,
        mdiLockOpenOutline,
        mdiEyeOffOutline,
        mdiEyeOutline,
      },
    }
  },
  data: () => ({
    purchases: [],
    products: [],
    total,
  }),
  created() {
    this.getAllProducts();
    this.getAllPurchases();
  },
  methods: {
    getAllPurchases() {
      this.axios
        .get("http://localhost:5000/api/order/"+ this.$store.state.session.userId)
        .then((response) => {
          console.log(response);
          this.purchases = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAllProducts() {
      this.axios
        .get("http://localhost:5000/api/product")
        .then((response) => {
          console.log(response);
          this.products = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProductById(id) {
         this.axios
        .get("http://localhost:5000/api/product")
        .then((response) => {
          console.log(response);
          this.products = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      //return this.products.filter(product => product.id === id)[0]
    },
  },
}
</script>

<style lang="scss" scoped>
.two-factor-auth {
  max-width: 25rem;
}
.security-character {
  position: absolute;
  bottom: -0.5rem;
}
</style>
