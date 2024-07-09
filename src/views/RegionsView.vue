<template>
  <div class="app">

    <ImageRegion />
</div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ImageRegion from "@/components/ImageRegion.vue";

export default {
  name: "LeafletMap",
  components: {
    ImageRegion
  }
};
</script>

<style scoped>
@import "leaflet/dist/leaflet.css";
#leaflet-map {
  height: 100%;
  width: 100%;
  overflow: hidden;
  
}
.app {
  background: #00000A
}
</style>
