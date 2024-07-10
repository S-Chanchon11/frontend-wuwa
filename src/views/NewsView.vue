<!-- /news -->
<template>
  <v-app>
    <!-- <NavBar></NavBar> -->
    <v-main>
      <v-container class="d-flex justify-center">
        <div
          class="accordion accordion-flush"
          id="accordionFlushExample"
          style="width: 70%"
        >
          <div
            v-for="(item, index) in accordionItems"
            :key="index"
            class="accordion-item"
          >
            <div v-if="item.events_type === 'update'">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="'#flush-collapse' + index"
                  aria-expanded="false"
                  :aria-controls="'flush-collapse' + index"
                  style="background-color: #eedebf; font-weight: bold;"
                >
                  {{ item.events_type.toUpperCase() }} &nbsp;&nbsp;
                  {{ item.events_name }}
                </button>
              </h2>
              <div
                :id="'flush-collapse' + index"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body" style="background-color: #eedebf">
                  {{ item.date }} &nbsp;&nbsp;<br>{{ item.events_desc }}
                </div>
              </div>
            </div><!-- if -->
            <div v-if="item.events_type === 'event'">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="'#flush-collapse' + index"
                  aria-expanded="false"
                  :aria-controls="'flush-collapse' + index"
                  style="background-color: #b5e0f9; font-weight: bold;"
                >
                  {{ item.events_type.toUpperCase() }} &nbsp;&nbsp;
                  {{ item.events_name }}
                </button>
              </h2>
              <div
                :id="'flush-collapse' + index"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body" style="background-color: #b5e0f9">
                  {{ item.date }} &nbsp;&nbsp;<br>{{ item.events_desc }}
                </div>
              </div>
            </div><!-- if -->
          </div>
        </div>  
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      //sample data
      accordionItems: [
      //   {
      //     events_type: 'event',
      //     events_name: "name",
      //     events_desc: "description",
      //     date: '2/2/2'
      //   },
      //   {
      //     events_type: 'update',
      //     events_name: "name",
      //     events_desc: "description",
      //     date: '2/2/2'
      // }    
      ]  
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:3427/events')
    .then((response)=>{
      console.log(response.data)
      this.accordionItems = response.data

    })
  },
};
</script>

<style scoped>
@import "bootstrap/dist/css/bootstrap.min.css";

.v-container {
  padding-top: 100px;
}

.v-main {
  /* background color */
  background: radial-gradient(
    111.11% 111.11% at 50% 16.81%,
    rgba(19, 109, 141, 0.8) 0%,
    rgb(19, 109, 141) 24.15%,
    rgb(2, 72, 105) 47.06%,
    rgb(0, 24, 42) 100%
  );
}

/* Accordion styles */
.accordion-button {
  color: #000; /* Button text color */
}

.accordion-body {
  color: #000; /* Body text color */
}
</style>
