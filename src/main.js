import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'video.js/dist/video-js.css'
import store from './store/store'
// import Vuex from 'vuex';

const icons = {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  }
  
  
  const vuetify = createVuetify({
    components,
    directives,
    icons,
  })
  const app = createApp(App)
  const storedToken = localStorage.getItem('accessToken');
  if (storedToken) {
    store.commit('setAuthentication', { status: true, token: storedToken });
  }
  app.use(router)
  app.use(vuetify)
  app.use(store)
  app.mount('#app')
  