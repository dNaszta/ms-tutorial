<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand :to="{ name: 'home' }">Ms Tut</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :to="{ name: 'products' }">Products</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto" v-if="!isLoggedIn">
                    <b-nav-item :to="{ name: 'register' }">Register</b-nav-item>
                    <b-nav-item :to="{ name: 'login' }">Login</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto" v-else>
                    <b-nav-item :to="{ name: 'logout' }">Logout</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "NavBar",
        computed: {
            ...mapGetters('account',{
                isLoggedIn: 'isLoggedIn'
            })
        }
    }
</script>

<style scoped>

</style>