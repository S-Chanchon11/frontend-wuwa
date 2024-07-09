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
          {{ detail }}<br>
          Element : {{ element }}<br>
          Weapon : {{ weapon }}<br>
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
  },
  data() {
    return {};
  },
  methods: {},
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