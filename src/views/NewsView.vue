<!-- /news -->
<template>
    <v-app>
      <v-main>
        <v-container class="d-flex justify-center align-center fill-height">
          <div class="accordion accordion-flush" id="accordionFlushExample" style="width: 70%;">
            <div v-for="(item, index) in accordionItems" :key="index" class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#flush-collapse' + index" aria-expanded="false" :aria-controls="'flush-collapse' + index" style="background-color: #dcceaf">
                  {{ item.date }} &nbsp;&nbsp; {{ item.type }} &nbsp;&nbsp; {{ item.title }}
                </button>
              </h2>
              <div :id="'flush-collapse' + index" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body" style="background-color:#dcceaf">{{ item.content }}{{ item.content }}{{ item.content }}</div>
              </div>
            </div>
          </div>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        //sample data
        accordionItems: [
          {
            date: "05/07/24",
            type: "PATCH",
            title: "UPDATE 1.0",
            content: "DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION ",
            headerColor: "#DCBE99", // Header background color
            bodyColor: "#FFD700" // Body background color
          },
          {
            date: "04/07/24",
            type: "EVENTS",
            title: "NEW YEAR CELEBRATION",
            content: "DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION",
            headerColor: "#ADD8E6", // Header background color
            bodyColor: "#FFFACD" // Body background color
          },
          {
            date: "04/07/24",
            type: "PATCH",
            title: "UPDATE 0.9",
            content: "DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION",
            headerColor: "#DCBE99", // Header background color
            bodyColor: "#FFD700" // Body background color
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  @import 'bootstrap/dist/css/bootstrap.min.css';
  
  .v-container {
    padding: 0;
  }
  
  .v-main { 
    /* background color */
    background: radial-gradient(111.11% 111.11% at 50% 16.81%, rgba(19, 109, 141, 0.8) 0%, rgb(19, 109, 141) 24.15%, rgb(2, 72, 105) 47.06%, rgb(0, 24, 42) 100%);
  }
  
  /* Accordion styles */
  .accordion-button {
    color: #000; /* Button text color */
  }
  
  .accordion-body {
    color: #000; /* Body text color */
  }
  </style>
  