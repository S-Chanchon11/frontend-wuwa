<template>
  
  <v-app>
    
    <v-main>
      <v-container class="d-flex justify-center align-center fill-height">
        <v-card class="pa-5 rounded-card" max-width="600">
          <v-card-title class="text-h5 text-center" style="color: #5d4037"
            >Sign In</v-card-title
          >
          <v-card-text>
            <v-form>
              <v-text-field
                label="EMAIL / Username"
                v-model="formData.username"
                prepend-icon="mdi-email"
                class="rounded-input"
                outlined
                dense
                hide-details
              ></v-text-field>
              <v-text-field
                label="Password"
                v-model="formData.password"
                type="password"
                prepend-icon="mdi-lock"
                class="rounded-input"
                outlined
                dense
                hide-details
              ></v-text-field>
              <div class="text-center my-3"></div>
              <v-btn class="w-100 rounded-btn primary-btn" @click="logIn"
                >SIGN IN</v-btn
              >
              <div class="text-center my-3">or</div>
              <!-- Button to redirect to SignUp.vue -->
              <v-btn
                class="w-100 rounded-btn secondary-btn"
                @click="redirectToSignUp"
                >New around here? JOIN THE FUN!</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    logIn() {
      let credentials = {
        account: this.formData.username,
        password: this.formData.password,
      };
      this.$store.dispatch('login',credentials).then(() => {

        if (this.$store.state.isLoggedIn) {

          this.$router.push('/')
        }
      })
    },
    redirectToSignUp() {
      // Programmatically navigate to SignUp.vue
      this.$router.push({ name: "SignUp" });
    },
  },
};
</script>

<style scoped>
@import "bootstrap/dist/css/bootstrap.min.css";

/* General styles */
.v-card {
  border-radius: 25px;
  background-color: #dcceaf; /* Light beige background to match the image */
  width: 400px; /* Adjust width as per your requirement */
  height: 350px; /* Adjust height as per your requirement */
}

.v-card-title {
  color: #5d4037; /* Dark brown colour */
}

.v-card-text {
  padding: 0;
}

.v-container {
  padding: 0;
}

.v-main {
  background: radial-gradient(111.11% 111.11% at 50% 16.81%, rgba(19, 109, 141, 0.8) 0%, rgb(19, 109, 141) 24.15%, rgb(2, 72, 105) 47.06%, rgb(0, 24, 42) 100%);
}
/* Input field styles */
.v-text-field--outlined .v-input__control {
  border-radius: 25px;
}

.rounded-input .v-input__control {
  border-radius: 25px;
}

/* Button styles */
.v-btn {
  border-radius: 25px;
  font-weight: bold;
}

.primary-btn {
  background-color: #ffb300; /* Yellow button colour */
  color: white;
}

.secondary-btn {
  background-color: #ff7043; /* Orange button colour */
  color: white;
}

.rounded-btn {
  border-radius: 25px;
}

.text-center {
  text-align: center;
}

.my-3 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #7f6e49;
}
</style>
