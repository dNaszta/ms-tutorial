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
        addProductToCart({state, commit}, product) {
            // find cart item
            const cartItem = state.all.find(item => item.id === product.id);
            if(!cartItem) {
                commit('pushProductToCart', product.id)
            } else {
                commit('incrementItemQuantity', cartItem)
            }
        }
    },

    mutations: {
        pushProductToCart(state, productId) {
            state.all.push({
                id: productId,
                quantity: 1
            })
        },
        incrementItemQuantity(state, cartItem) {
            cartItem.quantity++
        }
    }
}