import { basketService } from "../services/basket.service";

export default {
    namespaced: true,
    state: {
        all: []
    },

    getters: {
        cartProducts (state, getters, rootState) {
            return state.all.map(cartItem => {
                const product = rootState.products.all.find(product => product.id === cartItem.id)
                return {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: cartItem.quantity
                }
            })
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
        addProductToCart({ commit }, product) {
            basketService.addToBasket(product.id)
                .then(
                    data => commit('refreshCart', data.items)
                );
        }
    },

    mutations: {
        refreshCart(state, items) {
            state.all = items;
        }
    }
}