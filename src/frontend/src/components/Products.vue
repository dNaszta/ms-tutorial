<template>
    <div>
        <h1>Product list</h1>
        <ul>
            <li v-for="product in products" v-bind:key="product.id">{{ product.name }} - {{ product.price }}</li>
        </ul>
    </div>
</template>

<script>
    import store from "../store";

    export default {
        name: "Products",
        computed: {
            products () {
                return store.state.products;
            }
        },
        created() {
            store.dispatch('fetchProducts');
        }
    }
</script>

<style scoped>

</style>