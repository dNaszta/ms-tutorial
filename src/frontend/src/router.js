import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Products from "./components/Products";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/products',
            name: 'products',
            component: Products
        }
    ]
})