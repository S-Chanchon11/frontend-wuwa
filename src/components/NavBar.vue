<template>
  <nav
    class="nav nav-pills nav-fill all-caps navbar-custom text-uppercase font-weight-bold"
  >
    <li class="nav-item">
      <a class="nav-link text-white" href="/character">Characters</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" href="/region">Regions</a>
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
      <a class="nav-link text-white" href="/news">News</a>
    </li>
    <li class="nav-item">
      <a v-if="!isLoggedIn" class="nav-link text-white" href="/signin">Login</a>
      <a v-if="isLoggedIn" class="nav-link text-white" @click="logout" href="/">Logout</a>
    </li>
  </nav>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: "NavBar",
  methods: {
    goHome() {
      this.$router.replace("/");
    },
    logout(){
        window.sessionStorage.removeItem('accessToken')
        console.log('logged out')
    }
  },
  computed: {
    ...mapState(['isLoggedIn']),
  },
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
