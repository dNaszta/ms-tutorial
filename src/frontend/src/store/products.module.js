import axios from "axios";

export default {
    namespaced: true,
    state: {
        all: []
    },
    actions: {
        fetchProducts ({commit}) {
            return new Promise((resolve => {
                axios.get("http://localhost:3000/product")
                    .then(request => {
                        commit('setProducts', request.data);
                        resolve()
                    });
            }));
        }
    },
    mutations: {
        setProducts(state, products) {
            state.all = products;
        },
    }
}