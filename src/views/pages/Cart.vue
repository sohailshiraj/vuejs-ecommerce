<template>
  <div>
    <v-container>
      <p class="display-3 font-weight-light text-center pa-4">SHOPPING CART</p>
      <v-row>
        <v-col :cols="12" md="9" sm="12">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">ITEM</th>
                  <th class="text-center">PRICE</th>
                  <th class="text-center">QUANTITY</th>
                  <th class="text-center">TOTAL</th>
                  <th class="text-center"></th>
                </tr>
              </thead>
              <tbody>
                <tr :key="item.productId" v-for="item in cart">
                  <td>
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-img
                          :src="require('../../assets/img/shop/1.jpg')"
                        ></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>{{ getProduct(item.productId).name }}</v-list-item-title>
                        <!-- <v-list-item-subtitle>{{ getProduct(item.productId).description }}</v-list-item-subtitle> -->
                      </v-list-item-content>
                    </v-list-item>
                  </td>
                  <td>${{ getDiscountedValue(getProduct(item.productId).price, getProduct(item.productId).discount) }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>${{ getDiscountedValue(getProduct(item.productId).price, getProduct(item.productId).discount) * item.quantity }}</td>
                  <td><a>X</a></td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col :cols="12" md="3" sm="12" style="background-color: lightgray">
          <p class="headline">Order Summary</p>
          <p class="overline">
            Shipping and additional costs are calculated based on values you
            have entered.
          </p>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr>
                  <td>Order Subtotal</td>
                  <td class="text-right" style="width: 50px">$160.00</td>
                </tr>
                <tr>
                  <td>Shipping Charges</td>
                  <td class="text-right" style="width: 50px">$10.00</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td class="text-right" style="width: 50px">$5.00</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td class="text-right" style="width: 50px"><b>$175.00</b></td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="text-center">
            <v-btn class="primary white--text mt-5" outlined
              >PROCEED TO PAY</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.session.cart;
    },
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    getProduct(id) {
      return this.products.filter((product) => product.id == id)[0];
    },
    getDiscountedValue(price, discount){
      return price - ( price/100 * discount);
    },
  }
}
</script>
