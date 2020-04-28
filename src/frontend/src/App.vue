<template>
  <div id="app">
    <NavBar/>
    <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
    <b-container>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>

import NavBar from "./components/NavBar"
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    NavBar
  },
  computed: {
    ...mapState({
      alert: state => state.alert
    })
  },
  methods: {
    ...mapActions({
      clearAlert: 'alert/clear'
    })
  },
  watch: {
    $route (){
      // clear alert on location change
      this.clearAlert();
    }
  }
}
</script>
