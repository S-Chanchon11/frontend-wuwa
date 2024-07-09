<template>
  <NavBar></NavBar>
  <RouterView />
 
  
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },

}
</script>

<style>
@font-face {
  font-family: "TR Heavy";
  src: url('src/assets/fonts/TR Heavy.ttf');
}
#app {
  /* font-family: "TR Heavy"; */
}
</style>
