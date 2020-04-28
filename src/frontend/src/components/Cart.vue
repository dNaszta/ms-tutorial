<template>
    <div>
        <h1>Shopping Cart</h1>
        <ul>
           <li v-for="product in products" v-bind:key="product.id">
               {{ product.name }} - {{ product.price }} - {{ product.quantity }}
           </li>
        </ul>
        <p>Total: {{total}}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "Cart",
        computed: {
            ...mapGetters('cart',
                {
                    products: 'cartProducts',
                    total: 'cartTotal'
                }
            )
        }
    }
</script>

<style scoped>

</style>