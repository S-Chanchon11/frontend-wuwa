<template>
  <v-app>
    <v-main>
      <v-container class="d-flex justify-center align-center fill-height">
        <v-card-text>
          <div class="profile-info" v-if="!editMode">
            <button class="edit" @click="edit">edit</button>
            <div>
              <h5
                style="justify-content: center; font-weight: bold; color: white"
              >
                EMAIL / Username
              </h5>
              <input
                type="text"
                class="input"
                placeholder="Email"
                v-model="User.email"
                disabled
              />
              <h5
                style="justify-content: center; font-weight: bold; color: white"
              >
                <br />USERNAME
              </h5>
              <input
                type="text"
                class="input"
                placeholder="username"
                v-model="User.username"
                disabled
              />
            </div>
          </div>
          <div class="profile-info" v-else>
            <button class="edit" @click="edit">cancel</button>
            <button
              class="edit"
              @click="update(this.editEmail, this.editUsername)"
            >
              save
            </button>
            <h5
              style="justify-content: center; font-weight: bold; color: white"
            >
            EMAIL / Username
            </h5>
            <input
              type="text"
              class="input"
              placeholder="email"
              v-model="editEmail"
            />
            <h5
              style="justify-content: center; font-weight: bold; color: white"
            >
              <br />USERNAME
            </h5>
            <input
              type="text"
              class="input"
              placeholder="username"
              v-model="editUsername"
            />
          </div>

          <!-- <br> -->
          <v-form>
            <div class="text-center my-3">
              <h5
                style="
                  text-align: left;
                  text-transform: uppercase;
                  font-weight: bold;
                "
              >
                Your Characters
              </h5>
            </div>
          </v-form>
          <v-card class="pa-5 rounded-card" max-width="800">
            <v-row justify="center" align-items="center">
              <v-col
                v-for="(name, key) in User.character_list"
                :key="key"
                cols="4"
                md="4"
              >
                <v-card class="char-card">
                  <v-card class="character-card">
                    <v-img
                      :src="`./src/assets/characters_icons/${name}.png`"
                      aspect-ratio="1"
                      class="rounded-img"
                    ></v-img>
                    <v-card-title class="text-center" style="color: white">{{
                      name
                    }}</v-card-title>
                  </v-card>
                </v-card>
              </v-col>
            </v-row>
          </v-card>

          <button class="edit" @click="logout">Logout</button>
        </v-card-text>
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
      User: {
        email: "",
        username: "",
      },
      editEmail: "",
      editUsername: "",
      editMode: false,
    };
  },
  methods: {
    edit() {
      this.editMode = !this.editMode;
    },
    logout() {
      this.$store.dispatch("logout").then(() => {
        if (!this.$store.state.isLoggedIn) {
          this.$router.push("/");
          console.log("logged out");
        }
      });
    },
    update(email, username) {
      const id = localStorage.getItem("id");
      const token = localStorage.getItem("accessToken");
      const body = {
        email: email,
        username: username,
      };
      axios
        .put("http://127.0.0.1:3427/users/" + id, body, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          
          this.editMode = !this.editMode;
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
        
    }
  },
  mounted() {
    const id = localStorage.getItem("id");
      const token = localStorage.getItem("accessToken");
      console.log(id);
      axios
        .get("http://127.0.0.1:3427/users/" + id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.User = response.data["user"];
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  },
};
</script>

<style scoped>
@import "bootstrap/dist/css/bootstrap.min.css";

.profile-info {
  margin: 20px 0;
}

.profile-info label {
  display: block;
  font-weight: bold;
  color: white;
}

.edit {
  margin: 5px 5px;
  height: 30px;
  border-radius: 25px;
  background-color: lightgray; /* Light blue background to match the image */
  width: 55px;
  border-radius: 10px;
  text-align: center;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.541);
}
.input {
  margin: 0px 0px;
  height: 50px;
  border-radius: 25px;
  background-color: #eedebf; /* Light blue background to match the image */
  width: 40%;
  box-shadow: inset 4px 4px 10px #886f3d;
  border-radius: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}
.v-card {
  /* padding: 20px; */
  border-radius: 25px;
  background-color: #eedebf; /* Light blue background to match the image */
  width: 100%; /* Adjust width as per your requirement */
  box-shadow: inset 4px 4px 10px #886f3d;
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
  background: radial-gradient(
    111.11% 111.11% at 50% 16.81%,
    rgba(19, 109, 141, 0.8) 0%,
    rgb(19, 109, 141) 24.15%,
    rgb(2, 72, 105) 47.06%,
    rgb(0, 24, 42) 100%
  );
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
  background-color: #3b1b19;
  width: 100%;
}

.char-card {
  background: linear-gradient(
    165.52deg,
    #eec26b -4.93%,
    #eec26b -4.91%,
    #b38121 31.25%,
    #f8ebd1 48.25%,
    #eec26b 55.76%,
    #b38121 85.52%,
    #eec26b 109.45%
  );
  padding: 10px;
  text-align: center;
  width: 100%;
}

.character-card .v-card-title {
  margin: 10px 0 0;
  font-weight: bold;
  color: white;
}

.rounded-img {
  border-radius: 25px;
}

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
