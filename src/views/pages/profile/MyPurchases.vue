<template>
  <v-card flat class="mt-5">
    <v-form>
      <div>
        <v-row v-if="purchases.length > 0">
          <v-col md="6" lg="8" cols="12" :key="purchase.id" v-for="purchase in purchases">
            <v-card class="overflow-hidden" style="margin: 10px">
              <v-row class="ma-0 h-full">
                <v-col cols="12" sm="8" md="12" lg="8" order="2" order-lg="1">
                  <v-card-title>Purchase # {{ purchase.id }}</v-card-title>
                  <v-card-text :key="purchase.id + item.id" v-for="(item, index) in purchase.items">
                    {{ index + 1 }}. Product: <b>{{ item.product.name }}</b
                    >, Quantity: <b>{{ item.quantity }}</b>
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
                      <sup style="font-size: 3rem; top: 9px" class="font-weight-semibold">{{ purchase.total.toFixed(2) }}</sup>
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
import { ref } from '@vue/composition-api'

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
  computed: {
    purchases() {
      console.log(this.$store.state.purchases)
      return this.$store.state.purchases.filter(items => items.userId == this.$store.state.session.userId)
    },
    products() {
      return this.$store.state.products
    },
    getProductById(id) {
      return this.products.filter(product => product.id == id)[0]
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
