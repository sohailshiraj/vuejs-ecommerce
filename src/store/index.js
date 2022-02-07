import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: [
            {
                id: 1,
                name: 'Sohail Shiraj',
                email: 'admin@gmail.com',
                password: 'admin',
            }
        ],
        session: {
            userId: '',
            cart: [],
        },
        purchases: [],
        products: [
            {
                id: 1,
                name: 'Black Tshirt',
                description: 'Black tee shirt for mens',
                longDescription: 'Black tshirt for mens. Available in all sizes. Limited Stock',
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
                    require('../assets/img/shop/1.jpg'),
                    require('../assets/img/shop/2.jpg')
                ],
                src: require('../assets/img/shop/1.jpg')
            },
            {
                id: 2,
                name: 'Apple iPhone 11 Pro',
                description: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
                longDescription: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
                type: 'Electronics',
                price: '885.00',
                discount: 20,
                rating: 4.5,
                reviews: [
                    {
                        id: 1,
                        rating: 5,
                        review: "Some review",
                        personName: "Kumavat, Sutariya",
                        reviewDescription: "Very good product, easy to use"
                    },
                    {
                        id: 2,
                        rating: 3.5,
                        review: "Some review",
                        personName: "Kumavat, Sutariya",
                        reviewDescription: "Very good product, easy to use"
                    }
                ],
                images: [
                    require('../assets/img/shop/9.jpg'),
                    require('../assets/img/shop/11.jpg')
                ],
                src: require('../assets/img/shop/9.jpg')
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
                        id: 1,
                        rating: 5,
                        review: "Some review",
                        personName: "Kumavat, Sutariya",
                        reviewDescription: "Very good product, easy to use"
                    },
                    {
                        id: 2,
                        rating: 3.5,
                        review: "Some review",
                        personName: "Kumavat, Sutariya",
                        reviewDescription: "Very good product, easy to use"
                    }
                ],
                images: [
                    require('../assets/img/shop/1.jpg'),
                    require('../assets/img/shop/2.jpg')
                ],
                src: require('../assets/img/shop/1.jpg')
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
                        id: 1,
                        rating: 5,
                        review: "Some review",
                        personName: "Kumavat, Sutariya",
                        reviewDescription: "Very good product, easy to use"
                    },
                    {
                        id: 2,
                        rating: 3.5,
                        review: "Some review",
                        personName: "Kumavat, Sutariya",
                        reviewDescription: "Very good product, easy to use"
                    }
                ],
                images: [
                    require('../assets/img/shop/1.jpg'),
                    require('../assets/img/shop/2.jpg')
                ],
                src: require('../assets/img/shop/1.jpg')
                // images: [
                //     require('../assets/images/pages/card-basic-mobile.png'),
                //     require('../assets/images/pages/card-basic-mobile.png'),
                //     require('../assets/images/pages/card-basic-mobile.png')
                // ],
                // src: require('../assets/images/pages/card-basic-mobile.png')
            },
        ],
    },
    mutations: {
        addToCart(state, item) {
            state.session.cart.push(item);
        },
        setUserIdSession(state, userId) {
            console.log(userId)
            state.session.userId = userId;
            console.log(state.session.userId);
        },
        clearUserIdSession(state){
            state.session.userId = null
        },
        addPurchaseItem(state, item) {
            state.purchases.push(item);
        },
        clearCart(state) {
            state.session.cart = [];
        }
    },
    actions: {},
    modules: {},
})
