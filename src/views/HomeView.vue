<template>
  <div class="app">
    <div>
      <video-player :options="videoOptions" />
    </div>
    <h1>Top Pick</h1>
    <div class="card-container">
      <div class="row" >
        <div class="col card-columns" v-for="(card,key) in Cards" :key="key">
          <CharacterCard :imageSrc="`src/assets/characters/${key}.png`" :text="key" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import VideoPlayer from "../components/VideoPlayer.vue";
import CharacterCard from "../components/CharacterCard.vue";
import axios from "axios";


export default {
  name: "Home",
  _components: {
    VideoPlayer,
    NavBar,
    CharacterCard,
  },
  get components() {
    return this._components;
  },
  set components(value) {
    this._components = value;
  },
  data() {
    return {
      videoOptions: {
        fluid: true,
        loop: true,
        sources: [
          {
            src: "src/assets/wuwa_demo.mp4",
            type: "video/mp4",
          },
        ]
      },
      Cards: {},
      selectedCard: {},
    };
  },
  mounted() {
       axios.get('http://127.0.0.1:3427/home/')
        .then ((response) => {
                this.Cards = response.data
                console.log(response.data)
              })
              .catch((error) => {
                    console.log(error)
              })
         
  },
  methods: {
    showModal(card) {
      this.selectedCard = card;
      $("#cardModal").modal("show");
    },
  },
};
</script>

<style scoped>

h1 {
  color: white;
}
.app {
  background: radial-gradient(111.11% 111.11% at 50% 16.81%, rgba(19, 109, 141, 0.8) 0%, rgb(19, 109, 141) 24.15%, rgb(2, 72, 105) 47.06%, rgb(0, 24, 42) 100%);
}

.card-columns {
  display: flex;
}

.image-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
}

.image-container img {
  margin-top: 350px;
  width: 800px;
  height: 480px;
  object-fit: cover;
  transform: scale(2.5);
}

.card-container {
  /* padding-top: 100px;
  padding-bottom: 100px; */
  padding: 100px;
  display: flex;
  justify-content: center;
}
h1 {
  padding-top: 100px;
  display: flex;
  justify-content: center;
  font-size: 60px;
}
.card-img-top {
  overflow: hidden;
}
</style>
