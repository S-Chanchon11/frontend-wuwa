<template>
  <div class="app">
    <NavBar></NavBar>
    <div>
      <video-player :options="videoOptions" />
    </div>
    <div class="card-container">
      <div class="row">
        <div class="col card-columns" v-for="card in cards" :key="card.id">
          <CharacterCard :imageSrc="card.image" :text="card.text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import VideoPlayer from "../components/VideoPlayer.vue";
import CharacterCard from "../components/CharacterCard.vue";


export default {
  name: "Home",
  components: {
    VideoPlayer,
    NavBar,
    CharacterCard,
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
      cards: [
        {
          id: 1,
          title: "Card 1",
          text: "This is card 1",
          image: "./src/assets/characters/anke.png",
        },
        {
          id: 2,
          title: "Card 2",
          text: "This is card 2",
          image: "./src/assets/characters/yuanwu.png",
        },
        {
          id: 3,
          title: "Card 3",
          text: "This is card 3",
          image: "./src/assets/characters/chixia.png",
        },
        {
          id: 4,
          title: "Card 5",
          text: "This is card 4",
          image: "./src/assets/characters/danjin.png",
        },
      ],
      selectedCard: {},
    };
  },
  computed: {
    cardGroups() {
      let groups = [];
      for (let i = 0; i < this.cards.length; i += 3) {
        groups.push(this.cards.slice(i, i + 3));
      }
      return groups;
    },
    
  },
  mounted() {
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
.app {
  background: radial-gradient(111.11% 111.11% at 50% 16.81%, rgba(19, 109, 141, 0.8) 0%, rgb(19, 109, 141) 24.15%, rgb(2, 72, 105) 47.06%, rgb(0, 24, 42) 100%);
}

.card-columns {
  display: flex;
  /* justify-content: center; */
  /* flex-wrap: wrap; */
}

.image-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;

  /* justify-content: center; Center the image horizontally */
  /* align-items: start; Align the image to the top */
}

.image-container img {
  margin-top: 350px;
  width: 800px;
  /* Keep the image width as it is */
  height: 480px;
  /* Keep the image height as it is */
  object-fit: cover;
  transform: scale(2.5);
  /* transform: translateY(12px); */
}

.card-container {
  padding-top: 100px;
  /* margin-bottom: 300px; */
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
}

.card-img-top {
  overflow: hidden;
}
</style>
