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
    login(state,isAuth) {
      state.isLoggedIn = isAuth;
    },
    signup(state,isAuth) {
      state.isLoggedIn = isAuth;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    setAuthentication(state, { status, token }) {
      state.isLoggedIn = status;
      state.authToken = token;
      if (status) {
        localStorage.setItem('accessToken', token);
      } else {
        localStorage.removeItem('accessToken');
      }
    },
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
  },
  actions: {
    async login({ commit }, credentials) {
  
        try {

          const response = await axios.post("http://127.0.0.1:3427/auth/login", credentials)

          if (response.status === 200) {

            const accessToken = response.data["token"];

            localStorage.setItem("accessToken", accessToken);

            commit('login',true)
            return response;
          }
        }
        catch (error) {
          alert("Invalid username or password");
        };
      
    },
    async signup({ commit },credentials) {
      try {

        const response = await axios.post("http://127.0.0.1:3427/auth/register",credentials)

        if (response.status === 200) {

          const accessToken = response.data["token"];

          localStorage.setItem("accessToken", accessToken);

          commit('signup',true)
          return response;
        }
      }
      catch (error) {
        alert("Invalid username or password");
      };
    },
    async logout({ commit }) {
      localStorage.removeItem('accessToken')
      commit('logout');
    },
  },
});