import { basketService } from "../services/basket.service";

export default {
    namespaced: true,
    state: {
        all: [],
        requestId: 0
    },

    getters: {
        cartProducts (state) {
            return state.all
        },

        cartTotal (state, getters) {
            return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
        }
    },

    actions: {
        fetchCart({commit}) {
            basketService.getBasket()
                .then(
                    data => commit('refreshCart', data.items)
                );
        },
        addProductToCart({ state, commit }, product) {
            commit('increment')
            basketService.addToBasket(product.id, state.requestId)
                .then(
                    data => commit('refreshCart', data.items)
                );
        }
    },

    mutations: {
        refreshCart(state, items) {
            state.all = items;
        },
        increment(state) {
            state.requestId += 1;
        }
    }
}