<template>
  <nav class="bg-yellow-500 p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="text-white font-bold text-xl">
        <router-link to="/">NorwichCanary</router-link>
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
      <ul :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="lg:flex lg:space-x-6 hidden font-semibold">
        <!--<li>
          <router-link to="/" class="text-white hover:text-yellow-200">{{ $t('nav.home') }}</router-link>
        </li>-->
        <li>
          <router-link to="/about" class="text-white hover:text-yellow-200">{{ $t('nav.about') }}</router-link>
        </li>
        <!--<li>
          <router-link to="/sucasnost-chovu" class="text-white hover:text-yellow-200">{{ $t('nav.present') }}</router-link>
        </li>-->
        <li>
          <router-link to="/norwich" class="text-white hover:text-yellow-200">{{ $t('nav.photo_norwich') }}</router-link>
        </li>
        <li>
          <!--<router-link to="/video" class="text-white hover:text-yellow-200">{{ $t('nav.video') }}</router-link>-->
          <a href="https://www.youtube.com/channel/UCfWGDBQTuwgWOimkbe92YLg" class="text-white hover:text-yellow-200" target="_blank">Video
          </a>
        </li>
        <li>
          <router-link to="/fife-fancy" class="text-white hover:text-yellow-200">{{ $t('nav.photo_fifefancy') }}</router-link>
        </li>
        <li>
          <router-link to="/foto-zariadenie" class="text-white hover:text-yellow-200">{{ $t('nav.breeding_facilities') }}</router-link>
        </li>
        <!--<li>
          <router-link to="/kontakt" class="text-white hover:text-yellow-200">{{ $t('nav.contact') }}</router-link>
        </li>-->
      </ul>
    <!-- Jazykový prepínač s vlajkami -->
    <div class="flex items-center space-x-2">
        <!-- Tlačidlo pre opačný jazyk -->
        <button @click="changeLanguage(oppositeLanguage)" class="flex items-center">
          <img :src="flagSrc(oppositeLanguage)" :alt="oppositeLanguage === 'sk' ? 'Slovenčina' : 'English'" class="w-8 h-5" />
        </button>
      </div>
    </div>
  </nav>

  <RouterView/>


<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" class="hover:underline">NorwichCanary.eu</a>. All Rights Reserved.
    </span>
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">norwich.canary.sk@gmail.com </span>
    <ul  class="lg:flex lg:space-x-6 text-sm text-gray-500 sm:text-center dark:text-gray-400">
        <!--<li>
          <router-link to="/" class="text-white hover:text-yellow-200">{{ $t('nav.home') }}</router-link>
        </li>-->
        <li>
          <router-link to="/about" class="">{{ $t('nav.about') }}</router-link>
        </li>
        <!--<li>
          <router-link to="/sucasnost-chovu" class="">{{ $t('nav.present') }}</router-link>
        </li>-->
        <li>
          <router-link to="/norwich" class="">{{ $t('nav.photo_norwich') }}</router-link>
        </li>
        <li>
          <!--<router-link to="/video" class="">{{ $t('nav.video') }}</router-link>-->
          <a href="https://www.youtube.com/channel/UCfWGDBQTuwgWOimkbe92YLg" target="_blank">Video
          </a>
        </li>
        <li>
          <router-link to="/fife-fancy" class="">{{ $t('nav.photo_fifefancy') }}</router-link>
        </li>
        <li>
          <router-link to="/foto-zariadenie" class="">{{ $t('nav.breeding_facilities') }}</router-link>
        </li>
        <!--<li>
          <router-link to="/kontakt" class="">{{ $t('nav.contact') }}</router-link>
        </li>-->
      </ul>
    </div>
</footer>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const currentLocale = ref(locale.value);

// Definícia stavu menu (otvorené alebo zatvorené)
const isMenuOpen = ref(false);

// Funkcia na prepnutie stavu menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const changeLanguage = (lang) => {
  locale.value = lang;
  currentLocale.value = lang;
};

// Vypočíta opačný jazyk na základe aktuálneho jazyka
const oppositeLanguage = computed(() => {
  return currentLocale.value === 'sk' ? 'en' : 'sk';
});

const flagSrc = (lang) => {
  if (lang === "sk") {
    return new URL(`@/assets/images/sk.jpg`, import.meta.url).href;
  } else {
    return new URL(`@/assets/images/en.jpg`, import.meta.url).href;
  }
};

const skFlag = new URL('@/assets/images/sk.jpg', import.meta.url).href;
const enFlag = new URL('@/assets/images/en.jpg', import.meta.url).href;
</script>

<style scoped>
/* Custom styles for mobile menu */
@media (min-width: 1024px) {
  ul {
    display: flex !important;
  }
}
</style>
