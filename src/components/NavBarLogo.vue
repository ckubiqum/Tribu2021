<template>
  <v-app>
    <div class="toolbar">
      <Burger />
      <img class="logo" src="../assets/logo-toolbar.svg" margin-right="20px" />
    </div>
  </v-app>
</template>

<script>
import Burger from "../components/Burger";
export default {
  components: {
    Burger
  },
</script>

<style scoped>
.toolbar {
  background-color: #695c5c !important;
  min-width: 100%;
  position: fixed !important;
  margin: 0px !important;
}
.v-application {
  max-height: 60px !important;
}
.menu {
  margin: 7px;
}
</style>