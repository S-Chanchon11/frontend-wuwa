<template>
  <nav
    class="nav nav-pills nav-fill all-caps navbar-custom text-uppercase font-weight-bold"
  >
    <li class="nav-item">
      <router-link class="nav-link text-white" to="/character">Character</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link text-white" to="/region">Region</router-link>
    </li>
    <li class="nav-item">
      <div @click="goHome()">
        <img
          src="./icons/logo.png"
          alt="Logo"
          width="150"
          class="d-inline-block align-text-top"
        />
      </div>
    </li>
    <li class="nav-item">
      <router-link class="nav-link text-white" to="/news">News</router-link>
    </li>
    <li class="nav-item">
      <router-link v-if="!isLoggedIn" class="nav-link text-white" to="/signin">Login</router-link>
      <router-link v-if="isLoggedIn" class="nav-link text-white" to="/profile">Profile</router-link>
    </li>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: "NavBar",
  methods: {
    goHome() {
      this.$router.push("/");
    },
    logout(){
      localStorage.removeItem('accessToken')
        console.log('logged out')
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  // mounted() {
  //   mapGetters(['isLoggedIn'])
  //   console.log(isLoggedIn)
  // }
};
</script>

<style>
.navbar-custom {
  /* background-image: radial-gradient(circle, #FFFFFF, #04455F); */
  background-color: #052536;
  height: 60px;
  color: #ffffff;
  display: flex;
  align-items: center;
}
.nav-link.active {
  /* color: #ffffff;  */
  background-color: #ffffff;
}
/* .clickable-item {
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: border-color 0.3s ease;
} */
.outlined {
  border-color: #fff; /* White outline color */
}
</style>
