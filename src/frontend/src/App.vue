<template>
  <div id="app">
    <NavBar/>
    <b-container>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>

import NavBar from "./components/NavBar";

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
