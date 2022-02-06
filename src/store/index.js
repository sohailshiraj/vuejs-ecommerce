import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: [
            {
                id: 1,
                name: '',
                email: '',
                password: '',
            }
        ],
        session: {
            userId: '',
            cart: []
        },
        products: [
            {
                id: 1,
                name: 'Apple iPhone 11 Pro',
                description: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
                longDescription: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
                type: 'Electronics',
                price: '885.00',
                discount: 20,
                rating: 5,
                reviews: [
                    {
                        userId: 1,
                        rating: 5,
                        review: "Some review"
                    }
                ],
                images: [
                    require('../assets/images/pages/card-basic-mobile.png'),
                    require('../assets/images/pages/card-basic-mobile.png'),
                    require('../assets/images/pages/card-basic-mobile.png')
                ],
                src: require('../assets/images/pages/card-basic-mobile.png')
            },
            {
                id: 2,
                name: 'Apple iPhone 11 Pro',
                description: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
                longDescription: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
                type: 'Electronics',
                price: '885.00',
                discount: 20,
                rating: 5,
                reviews: [
                    {
                        rating: 5,
                        review: "Some review"
                    }
                ],
                images: [
                    require('../assets/images/pages/card-basic-mobile.png'),
                    require('../assets/images/pages/card-basic-mobile.png'),
                    require('../assets/images/pages/card-basic-mobile.png')
                ],
                src: require('../assets/images/pages/card-basic-mobile.png')
            },
            {
                id: 3,
                name: 'Apple iPhone 11 Pro',
                description: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
                longDescription: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
                type: 'Electronics',
                price: '885.00',
                discount: 20,
                rating: 5,
                reviews: [
                    {
                        rating: 5,
                        review: "Some review"
                    }
                ],
                images: [
                    require('../assets/images/pages/card-basic-mobile.png'),
                    require('../assets/images/pages/card-basic-mobile.png'),
                    require('../assets/images/pages/card-basic-mobile.png')
                ],
                src: require('../assets/images/pages/card-basic-mobile.png')
            },
            {
                id: 4,
                name: 'Apple iPhone 11 Pro',
                description: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
                longDescription: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
                type: 'Electronics',
                price: '885.00',
                discount: 20,
                rating: 5,
                reviews: [
                    {
                        rating: 5,
                        review: "Some review"
                    }
                ],
                images: [
                    require('../assets/images/pages/card-basic-mobile.png'),
                    require('../assets/images/pages/card-basic-mobile.png'),
                    require('../assets/images/pages/card-basic-mobile.png')
                ],
                src: require('../assets/images/pages/card-basic-mobile.png')
            },
        ],
    },
    mutations: {
        addToCart(state, item) {
            state.session.cart.push(item);
        }
    },
    actions: {},
    modules: {},
})
