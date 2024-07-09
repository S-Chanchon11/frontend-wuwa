<template>
  <div class="card">
    <div class="image-container">
      <img :src="imageSrc" class="card-img-top" />
    </div>
    <div class="card-body">
      <p class="card-text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterCard",
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
 
};
</script>

<style scoped>
.card {
  height: 600px;
  width: 300px;
  border-width: 2px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #31193b;
  border-image: linear-gradient(165.52deg, #EEC26B -4.93%, #EEC26B -4.91%, #B38121 31.25%, #F8EBD1 48.25%, #EEC26B 55.76%, #B38121 85.52%, #EEC26B 109.45%);
  border-width: 10px;
  border-image-slice: 1;
  border-style: solid;
  color: aliceblue;
  
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
  /* Keep the image width as it is */
  height: 480px;
  /* Keep the image height as it is */
  object-fit: cover;
  transform: scale(2.5);
  /* transform: translateY(12px); */
}

.card-img-top {
  overflow: hidden;
}
</style>
