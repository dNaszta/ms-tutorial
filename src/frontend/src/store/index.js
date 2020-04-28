import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart.module'
import products from './products.module'
import { account } from './account.module'
import { alert } from './alert.module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cart,
        products,
        account,
        alert
    }
})