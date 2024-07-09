<template>
  <v-app>
    <v-main>
      <v-container class="d-flex justify-center align-center fill-height">
        <v-card class="pa-5 rounded-card" max-width="600">
          <v-card-title class="text-h5 text-center">Sign Up</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Email"
                v-model="formData.email"
                prepend-icon="mdi-email"
                class="rounded-input"
                outlined
                dense
                hide-details
              ></v-text-field>
              <v-text-field
                label="Username"
                v-model="formData.username"
                prepend-icon="mdi-account"
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
              <v-text-field
                label="Re-enter Password"
                v-model="formData.reenteredPassword"
                type="password"
                prepend-icon="mdi-lock"
                class="rounded-input"
                outlined
                dense
                hide-details
                :error-messages="
                  passwordsMatch ? [] : ['Passwords do not match']
                "
                :error="!passwordsMatch"
              ></v-text-field>
              <div class="text-center my-3"></div>
              <v-btn class="w-100 rounded-btn secondary-btn" @click="signUp"
                >SIGN UP</v-btn
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
        email: "",
        username: "",
        password: "",
        reenteredPassword: "",
      },
    };
  },
  computed: {
    passwordsMatch() {
      return this.password === this.reenteredPassword;
    },
  },
  methods: {
    signUp() {
      let credentials = {
        email: this.formData.email,
        username: this.formData.username,
        password: this.formData.password,
      };
      this.$store.dispatch("signup", credentials).then(() => {
        if (this.$store.state.isLoggedIn) {
          this.$router.push("/");
        }
      });
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
  height: 400px; /* Adjust height as per your requirement */
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

.secondary-btn {
  background-color: #ffb300; /* Orange button colour */
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
