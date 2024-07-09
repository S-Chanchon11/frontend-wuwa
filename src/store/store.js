// import Vue from 'vue';
// import Vuex from 'vuex';
import axios from "axios";
import { createStore } from 'vuex'
// Vue.use(Vuex);

export default createStore({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      if (window.sessionStorage.getItem("token")) {
        token = JSON.parse(window.sessionStorage.getItem("token"));
      } else {
        try {

          const response = await axios.post("http://127.0.0.1:3427/auth/login", credentials)

          if (response.status === 200) {

            const accessToken = response.data["token"];

            window.sessionStorage.setItem("accessToken", accessToken);

            commit('login')
            return response;
          }
        }
        catch (error) {
          alert("Invalid username or password");
        };
      }
    },
    async logout({ commit }) {
      window.sessionStorage.removeItem('accessToken')
      commit('logout');
    },
  },
});