<template>
  <!-- <NavBar></NavBar> -->
  <div class="app">
  
  <div class="character-container">
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button
          class="nav-link active"
          id="nav-home-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-home"
          type="button"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
        >
          All
        </button>
        <button
          class="nav-link"
          id="nav-profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-profile"
          type="button"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false"
          @click="groupBy('element')"
        >
          Elements
        </button>
        <button
          class="nav-link"
          id="nav-contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-contact"
          type="button"
          role="tab"
          aria-controls="nav-contact"
          aria-selected="false"
          @click="groupBy('weapon')"
        >
          Weapon
        </button>
        <button
          class="nav-link"
          id="nav-gender-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-gender"
          type="button"
          role="tab"
          aria-controls="nav-gender"
          aria-selected="false"
          @click="groupBy('gender')"
        >
          Gender
        </button>
        <button
          class="nav-link"
          id="nav-rarity-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-rarity"
          type="button"
          role="tab"
          aria-controls="nav-rarity"
          aria-selected="false"
          @click="groupBy('rarity')"
        >
          Rarity
        </button>
        <button
          class="nav-link"
          id="nav-type-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-type"
          type="button"
          role="tab"
          aria-controls="nav-type"
          aria-selected="false"
          @click="groupBy('type')"
        >
          Type
        </button>
      </div>
    </nav>
  </div>
    <div class="tab-content" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="nav-home"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <div class="card-container">
          <div class="row g-4">
            <div class="col card-columns" v-for="card in characters.character" :key="card._id">
              <CharacterCard
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                @click="showModal(card)"
                :imageSrc="`src/assets/characters/${card.character_name}.png`"
                :text="card.character_name"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="nav-profile"
        role="tabpanel"
        aria-labelledby="nav-profile-tab"
      >
      <div v-for="(group, key) in groupedData" :key="key">
        <h1>{{ key }}</h1>
      <div class="card-container">
          <div class="row g-4">
            <div class="col card-columns" v-for="card in group" :key="card._id">
              <CharacterCard
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                @click="showModal(card)"
                :imageSrc="`src/assets/characters/${card.character_name}.png`"
                :text="card.character_name"
              />
            </div>
          </div>
        </div>
        </div>
    </div>
      <div
        class="tab-pane fade"
        id="nav-contact"
        role="tabpanel"
        aria-labelledby="nav-contact-tab"
      >
      <div v-for="(group, key) in groupedData" :key="key">
        <h1>{{ key }}</h1>
      <div class="card-container">
          <div class="row g-4">
            <div class="col card-columns" v-for="card in group" :key="card._id">
              <CharacterCard
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                @click="showModal(card)"
                :imageSrc="`src/assets/characters/${card.character_name}.png`"
                :text="card.character_name"
              />


            </div>
          </div>
        </div>
        </div>
    </div>
    <div
        class="tab-pane fade"
        id="nav-gender"
        role="tabpanel"
        aria-labelledby="nav-gender-tab"
      >
      <div v-for="(group, key) in groupedData" :key="key">
        <h1>{{ key }}</h1>
      <div class="card-container">
          <div class="row g-4">
            <div class="col card-columns" v-for="card in group" :key="card._id">
              <CharacterCard
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                @click="showModal(card)"
                :imageSrc="`src/assets/characters/${card.character_name}.png`"
                :text="card.character_name"
              />

            </div>
          </div>
        </div>
        </div>
    </div>
    <div
        class="tab-pane fade"
        id="nav-rarity"
        role="tabpanel"
        aria-labelledby="nav-rarity-tab"
      >
      <div v-for="(group, key) in groupedData" :key="key">
        <h1>{{ key }}  stars</h1>
      <div class="card-container">
          <div class="row g-4">
            <div class="col card-columns" v-for="card in group" :key="card._id">
              <CharacterCard
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                @click="showModal(card)"
                :imageSrc="`src/assets/characters/${card.character_name}.png`"
                :text="card.character_name"
              />

              
            </div>
          </div>
        </div>
        </div>
    </div>
    <div
        class="tab-pane fade"
        id="nav-type"
        role="tabpanel"
        aria-labelledby="nav-type-tab"
      >
      <div v-for="(group, key) in groupedData" :key="key">
        <h1>{{ key }}</h1>
      <div class="card-container">
          <div class="row g-4">
            <div class="col card-columns" v-for="card in group" :key="card._id">
              <CharacterCard
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                @click="showModal(card)"
                :imageSrc="`src/assets/characters/${card.character_name}.png`"
                :text="card.character_name"
              />

              
            </div>
          </div>
        </div>
        </div>
    </div>
    </div>
    <CharacterModal
                id="myModal"
                v-model="modalCard"
                :imageSrc="`src/assets/characters/${modalCard.character_name}.png`"
                :detail="modalCard.character_desc"
                :title="modalCard.character_name"
                :weapon="modalCard.weapon"
                :element="modalCard.element"
                :gender="modalCard.gender"
                :type="modalCard.type"
                :rarity="modalCard.rarity"
              />
  </div>

</template>

<script>
import NavBar from "../components/NavBar.vue";
import CharacterCard from "../components/CharacterCard.vue";
import CharacterModal from "../components/CharacterModal.vue";
// import $ from 'jquery'
import axios from "axios";
export default {
  name: "CharacterView",
  components: {
    NavBar,
    CharacterCard,
    CharacterModal,
  },
  data() {
    return {
      modalCard: {},
      characters:[],
      groupedData: null,
    };
  },
  mounted() {
    axios.get('http://127.0.0.1:3427/characters')
    .then((response)=>{
      console.log(response.data)
      this.characters = response.data

    })
  },
  methods: {
    showModal(card) {
      this.modalCard = card;
      console.log(this.modalCard);
    },
    groupBy(prop) {

      this.groupedData = this.characters.character.reduce((acc, character) => {
        const key = character[prop];
        // console.log(key)
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(character);
        return acc;
      }, {});
    }
  }
};
</script>

<style scoped>
.app {
  background: radial-gradient(111.11% 111.11% at 50% 16.81%, rgba(19, 109, 141, 0.8) 0%, rgb(19, 109, 141) 24.15%, rgb(2, 72, 105) 47.06%, rgb(0, 24, 42) 100%);
}
.character-container {
  padding: 100px;
}
.card:hover {
  background-color: #1F2E24;
  box-shadow: inset 4px 4px 10px #886F3D;
}
.card-container {
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  margin-left: 50px;
}

h1 {
  display: flex;
  justify-content: center;
  color: aliceblue;
  margin-bottom: 30px;
  font-size: 60px;
}

.nav-link{
  color: white;
}
.nav-item:active{
  color: white;
  font-weight:normal;
}
.nav-link:hover{
  font-weight: bold;
  color: white;
}
</style>
