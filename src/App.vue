<template>
  <nav class="bg-yellow-500 p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="text-white font-bold text-xl">
        <router-link to="/">Kanáriky Hobby</router-link>
      </div>

      <!-- Hamburger Button for mobile -->
      <div class="lg:hidden">
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <!-- Links -->
      <ul :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="lg:flex lg:space-x-6 hidden">
        <li>
          <router-link to="/" class="text-white hover:text-yellow-200">{{ $t('nav.home') }}</router-link>
        </li>
        <li>
          <router-link to="/historia-chovu" class="text-white hover:text-yellow-200">História chovu kanárikov</router-link>
        </li>
        <li>
          <router-link to="/sucasnost-chovu" class="text-white hover:text-yellow-200">Súčasnosť chovu kanárikov</router-link>
        </li>
        <li>
          <router-link to="/foto-norwich" class="text-white hover:text-yellow-200">Foto Norwich</router-link>
        </li>
        <li>
          <router-link to="/video" class="text-white hover:text-yellow-200">Video</router-link>
        </li>
        <li>
          <router-link to="/foto-fifefancy" class="text-white hover:text-yellow-200">Foto Fifefancy</router-link>
        </li>
        <li>
          <router-link to="/foto-zariadenie" class="text-white hover:text-yellow-200">Foto chovné zariadenie</router-link>
        </li>
        <li>
          <router-link to="/kontakt" class="text-white hover:text-yellow-200">Kontakt</router-link>
        </li>
      </ul>
    </div>
  </nav>

  <RouterView/>
  <button @click="changeLanguage('sk')">Slovenčina</button>
    <button @click="changeLanguage('en')">English</button>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

// Definícia stavu menu (otvorené alebo zatvorené)
const isMenuOpen = ref(false);

// Funkcia na prepnutie stavu menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const changeLanguage = (lang) => {
  locale.value = lang;
};
</script>

<style scoped>
/* Custom styles for mobile menu */
@media (min-width: 1024px) {
  ul {
    display: flex !important;
  }
}
</style>
