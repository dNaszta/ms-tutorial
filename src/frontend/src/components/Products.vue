<template>
        <div>
            <h1>Product list</h1>
            <img v-if="loading"
                    src="https://i.imgur.com/JfOoqOa.gif">
            <ul v-else>
                <li v-for="product in products" v-bind:key="product.id">
                    {{ product.name }} - {{ product.price }}
                    <button @click="addProductToCart(product)">Add to cart</button>
                </li>
            </ul>
            <hr />
            <Cart />
        </div>
</template>

<script>
    import Cart from "./Cart";
    import { mapState, mapActions } from 'vuex';

    export default {
        name: "Products",
        components: {
          Cart
        },
        data() {
            return {
                loading: false
            }
        },
        computed: {
            ...mapState('products', {
                products: state => state.all
            })
        },
        methods: {
            ...mapActions('cart', {
                addProductToCart: 'addProductToCart',

            }),
            ...mapActions('products', {
                fetchProducts: 'fetchProducts'
            })
        },
        created() {
            this.loading = true
            this.fetchProducts().then(
                () => {
                    this.loading = false;
                }
            )
        }
    }
</script>

<style scoped>

</style>