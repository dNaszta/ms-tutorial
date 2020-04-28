import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart.module'
import products from './products.module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cart,
        products
    }
})