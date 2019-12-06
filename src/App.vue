<template>
  <div id="app">
    <router-link to="/hoge1/main">Go to "hoge1"</router-link>/
    <router-link to="/fuga2/main">Go to "fuga2"</router-link>
    <hr />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
