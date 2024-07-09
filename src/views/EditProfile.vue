<!-- /edit -->
<template>
    <v-app >
      <!-- <NavBar></NavBar> -->
      <v-main >
        <v-container class="d-flex justify-center align-center fill-height">
            <v-card-text >
              <div class="profile-info" >
                <h5 style="justify-content: center;font-weight: bold; color: white;">
                   EMAIL 
                   <!-- <button class="update" @click="updateUser">update</button> -->
                </h5>
                  <input type="text" class="input" placeholder="Email" v-model = "this.email" >
              <h5 style="justify-content: center;font-weight: bold; color: white;">
               <br> USERNAME
                <!-- <button class="edit" @click="editUser">edit</button>  -->
              </h5> 
              <input type="text" class="input" placeholder="username" v-model = "this.username" >               
            </div>
            <div style="text-align: center; width: 40%;">
            <button class="confirm" @click="updateUser">Confirm</button>
            <button class="confirm" @click="cancel">Cancel</button>  
            </div>
            <!-- <br> -->
              <v-form >
                <div class="text-center my-3">
                  <h5 style="text-align: left; text-transform: uppercase; font-weight: bold;">Your Characters</h5>
                <v-card class="pa-5 rounded-card" max-width="800">
                  <v-row justify="center" align-items="center">
                    <v-col v-for="character in characters" :key="character.id" cols="12" md="4">
                      <v-card class="char-card">
                      <v-card class="character-card">
                        <v-img :src="`./src/assets/${character.image}`" aspect-ratio="1" class="rounded-img"></v-img>
                        <v-card-title class="text-center" style="color: white;">{{ character.name }}</v-card-title>
                      </v-card>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card>
                </div>
              </v-form>
            </v-card-text>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import NavBar from "@/components/NavBar.vue";
import axios from "axios"
  export default {
    components:{
      NavBar
    },
    data() {
      return {
        //sample data (same as profileview)
        email: 'sample@mail.com',
        username: 'Sample1234',
        characters: [
          { id: 1, name: 'NAME', image: 'character.png' },
          { id: 2, name: 'NAME', image: 'character.png'  },
          { id: 3, name: 'NAME', image: 'character.png' }
        ]
      }
    },
    methods: {
        cancel(){
            this.$router.replace('/profile')
        },
        updateUser() {
            // axios.post('http://127.0.0.1:3427/users/'+this.$route.params.userId, this.User)
            //   .then ((response) => {
            //     console.log(response)
            //   })
            //   .catch((error) => {
            //         console.log(error)
            //   })
            this.$router.replace('/profile')
        },
        // mounted(){
        // axios.get('http://127.0.0.1:3427/users/'+this.$route.params.userId)
        // .then ((response) => {
        //         this.User = response.data
        //         console.log(response.data)
        //       })
        //       .catch((error) => {
        //             console.log(error)
        //       })
        //  }
    }
  };
  </script>
  
  <style scoped>
  @import 'bootstrap/dist/css/bootstrap.min.css';
  
  /* General styles */
  .profile-info {
  margin: 20px 0;
}

.profile-info label {
  display: block;
  font-weight: bold;
  color: white;
}
.update{
  margin: 5px 5px;
  height: 25px;
  border-radius: 25px;
  background-color:  lightgray; /* Light blue background to match the image */
  width: 65px;
  border-radius: 10px;
  text-align: center; 
  font-size: 15px;
  color: rgba(0, 0, 0, 0.541);
}
.confirm{
  margin: 5px 5px;
  height: 40px;
  border-radius: 25px;
  background-color:  lightgray; /* Light blue background to match the image */
  width: 90px;
  border-radius: 10px;
  text-align: center; 
  font-size: 15px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.541);
}
.input {
  margin: 0px 0px;
  height: 50px;
  border-radius: 25px;
  background-color:  #EEDEBF; /* Light blue background to match the image */
  width: 40%;
  box-shadow: inset 4px 4px 10px #886F3D;
  border-radius: 15px;
  text-align: center; 
  font-weight: bold;
  font-size: 20px;
}
  .v-card {
    /* padding: 20px; */
    border-radius: 25px;
    background-color:  #EEDEBF; /* Light blue background to match the image */
    width: 100%; /* Adjust width as per your requirement */
  box-shadow: inset 4px 4px 10px #886F3D;
  border-radius: 25px;
  }
  
  .v-card-title {
    color: #ffc107; /* Gold color */
  }
  
  .v-card-text {
    padding: 0;
  }
  
  .v-container {
    padding: 0;
  }
  
  .v-main {
    /* background-color: #0575b7;  */
    /* 052536 */
  /* Rectangle 6 */
    background: radial-gradient(111.11% 111.11% at 50% 16.81%, rgba(19, 109, 141, 0.8) 0%, rgb(19, 109, 141) 24.15%, rgb(2, 72, 105) 47.06%, rgb(0, 24, 42) 100%);
    background-blend-mode: plus-darker;

}
  
  /* Input field styles */
  .v-text-field--outlined .v-input__control {
    /* border-radius: 25px; */
    margin: 10px 0;
  }
  
  .rounded-input .v-input__control {
    border-radius: 25px;
  }
  
  /* Character card styles */
  .character-card {
    padding: 10px;
    text-align: center;
    background-color: #3B1B19; 
    width: 100%;
  }

  .char-card {
    background: linear-gradient(165.52deg, #EEC26B -4.93%, #EEC26B -4.91%, #B38121 31.25%, #F8EBD1 48.25%, #EEC26B 55.76%, #B38121 85.52%, #EEC26B 109.45%);
    padding: 10px;
    text-align: center;
    width: 100%;
  }
  
  .character-card .v-card-title {
    margin: 10px 0 0;
    font-weight: bold;
    color: white;
  }
  
  /* Image styles */
  .rounded-img {
    border-radius: 25px;
  }
  
  /* Text styles */
  .text-center {
    text-align: center;
  }
  
  .my-3 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: white;
  }
  </style>
  