<template>
    <div>
        <h1>Shopping Cart</h1>
        <img v-if="loading"
             src="https://i.imgur.com/JfOoqOa.gif">
        <ul v-else>
           <li v-for="product in products" v-bind:key="product.id">
               {{ product.name }} - {{ product.price }} - {{ product.quantity }}
           </li>
        </ul>
        <p>Total: {{total}}</p>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "Cart",
        data() {
            return {
                loading: false
            }
        },
        computed: {
            ...mapGetters('cart',
                {
                    products: 'cartProducts',
                    total: 'cartTotal'
                }
            ),
        },
        methods: {
            ...mapActions('cart', {
                fetchCart: 'fetchCart'
            })
        },
        created() {
            this.loading = true;
            this.fetchCart().then(
                () => {
                    this.loading = false;
                }
            )
        }
    }
</script>

<style scoped>

</style>