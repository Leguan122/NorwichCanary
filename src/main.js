import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import sk from './locales/sk.json';

const i18n = createI18n({
    locale: 'sk', // Predvolený jazyk
    fallbackLocale: 'en', // Ak chýba preklad v SK, použije sa angličtina
    messages: {
      en,
      sk,
    },
  });

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
