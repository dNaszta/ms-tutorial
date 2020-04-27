import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)



export default new Vuex.Store({
    state: {
        products: []
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        }
    },
    actions: {
        fetchProducts (context) {
            axios.get("http://localhost:3000/product")
                .then(request => {
                    context.commit('setProducts', request.data);
            });
        }
    },
    getters: {

    }
})