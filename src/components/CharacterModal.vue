<template>
  <div
    class="modal fade"
    id="myModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title" id="exampleModalLabel">
            {{ title }}
          </h1>

        </div>
        <div class="modal-body">
          {{ detail }}<br><br>
          <h3>Element : {{ element }}</h3>
          <h3>Weapon : {{ weapon }}</h3>
          <h3>Type : {{ type }}</h3>
          <h3>Gender : {{ gender }}</h3>
          <h3>Rarity : {{ rarity }}</h3>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterModal",
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    element: {
      type: String,
      required: true,
    },
    weapon: {
      type: String,
      required: true,
    },
    rarity: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    }
  }
};
</script>

<style>



.modal-body,.modal-header {
  background-color: #EEDEBF;
}

.modal-header {
  font-weight: bold;
}

</style>