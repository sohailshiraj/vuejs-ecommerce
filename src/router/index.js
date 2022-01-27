import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../components/Layout";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Shop from "@/components/Shop.vue";
import Product from "@/components/Product.vue";
import Cart from "@/components/Cart.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/shop",
        component: Shop,
        name: "Shop",
      },
      {
        path: "/product",
        component: Product,
        name: "Product",
      },
      {
        path: "/cart",
        component: Cart,
        name: "Cart",
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
