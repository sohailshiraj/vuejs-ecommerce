<template>
  <div>
    <v-container>
      <p class="display-3 font-weight-light text-center pa-4">Checkout Cart</p>
      <v-row>
        <v-col :cols="12" md="9" sm="12">
          <v-simple-table  v-if="cart.length > 0">
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
                <tr :key="item.productId" v-for="(item, index) in cart">
                  <td>
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-img
                          :src="require('../../assets/img/shop/1.jpg')"
                        ></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>{{ getProduct(item.productId).name }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </td>
                  <td>${{ getDiscountedValue(getProduct(item.productId).price, getProduct(item.productId).discount) }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>${{ getDiscountedValue(getProduct(item.productId).price, getProduct(item.productId).discount) * item.quantity }}</td>
                  <td><a @click="removeFromCart(item.productId, index)">X</a></td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <template v-if="cart.length == 0">
            <p class="display-1 font-weight-light pa-1" style="background: transparent">Your cart is empty!</p>
          </template>
        </v-col>
        <v-col :cols="12" md="3" sm="12" style="background-color: lightgray">
          <p class="headline">Order Summary</p>
          <p class="overline">
            Shipping and additional costs are calculated based on values you
            have entered.
          </p>
          <v-simple-table v-if="cart">
            <template v-slot:default>
              <tbody>
                <tr>
                  <td>Order Subtotal</td>
                  <td class="text-right" style="width: 50px">${{getSubTotal()}}</td>
                </tr>
                <tr>
                  <td>Shipping Charges</td>
                  <td class="text-right" style="width: 50px">${{cart.length > 0? 10.00: 0.00}}</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td class="text-right" style="width: 50px">${{calculateTax()}}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td class="text-right" style="width: 50px"><b>${{calculateTotal()}}</b></td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="text-center">
            <v-btn class="white--text mt-5" outlined
              @click="proceedToBuy()"
              >Proceed to Buy</v-btn
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
    },
    purchases() {
      return this.$store.state.purchases.filter((items) => items.userId == this.$$store.state.session.userId);
    },
    userId() {
      return this.$store.state.session.userId;
    }
  },
  methods: {
    getProduct(id) {
      return this.products.filter((product) => product.id == id)[0];
    },
    getDiscountedValue(price, discount){
      return price - ( price/100 * discount);
    },
    getSubTotal(){
      var sum = 0;
      this.cart.forEach(element => {
        var product = this.getProduct(element.productId);
        var price = this.getDiscountedValue(product.price, product.discount);
        sum += price * element.quantity;
      });
      return sum
    },
    calculateTax(){
      return this.getSubTotal()/100 * 13;
    },
    calculateTotal(){
      return this.getSubTotal() + this.calculateTax() + (this.cart.length > 0? 10: 0);
    },
    proceedToBuy(){
      this.cart.forEach((cart) => {
        cart['product'] = this.getProduct(cart.productId)
      });
      var purchaseItem = {
        items: this.cart,
        total: this.calculateTotal(),
        id: this.purchases.length + 1,
        userId: this.userId
      }
      this.$store.commit('addPurchaseItem', purchaseItem);
      this.$store.commit('clearCart');
      this.$router.push('/confirmation');
    },
    clearCart(){
      this.$store.commit('clearCart');
    },
    removeFromCart(productId, index) {
      if(this.cart){
        this.cart.splice(index, 1);
      }
      // this.$store.commit('removeFromCart', id);
    }
  }
}
</script>
