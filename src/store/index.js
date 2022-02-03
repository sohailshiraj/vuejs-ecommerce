import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[
      {
          id:1,
          name:'Apple iPhone 11 Pro',
          description: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
          type:'Electronics',
          price:'885.00',
          rating: 5,
          src:require('../assets/images/pages/card-basic-mobile.png'),
      },
      {
          id:2,
          name:'Apple iPhone 11 Pro',
          description: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
          type:'Electronics',
          price:'899.00',
          rating: 5,
          src:require('../assets/images/pages/card-basic-mobile.png'),
      },
      {
          id:3,
          name:'Apple iPhone 11 Pro',
          description: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
          type:'Electronics',
          price:'899.00',
          rating: 5,
          src:require('../assets/images/pages/card-basic-mobile.png'),
      },
      {
          id:4,
          name:'Apple iPhone 11 Pro',
          description: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
          type:'Electronics',
          price:'899.00',
          rating: 5,
          src:require('../assets/images/pages/card-basic-mobile.png'),
      }
  ],
  },
  mutations: {},
  actions: {},
  modules: {},
})
