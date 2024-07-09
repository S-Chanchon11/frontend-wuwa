<template>
  <div>
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script>
import videojs from "video.js";

export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      player: null,
    };
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log("onPlayerReady", this);
      this.player.ready(() => {
        this.player.muted(true);
        const promise = this.player.play();
        
        if (promise !== undefined) {
          promise
            .then(() => {
              // Autoplay started!
              console.log("Autoplay started!");
            })
            .catch((error) => {
              // Autoplay was prevented.
              console.error("Autoplay was prevented.", error);
            });
        }
      });
    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>

<style></style>
