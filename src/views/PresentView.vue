<template>
    <div class="container mx-auto p-6">
      <!-- Sekcia 1: Norwich kanáriky -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-4">{{ $t('present.norwich_title') }}</h2>
        <p class="mb-4">{{ $t('present.norwich_text') }}</p>
        
      </section>
  
      <!-- Sekcia 2 -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-4">{{ $t('present.section2_title') }}</h2>
        <p class="mb-4">{{ $t('present.section2_text') }}</p>
        
      </section>
  
      <!-- Sekcia 3 -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-4">{{ $t('present.section3_title') }}</h2>
        <p class="mb-4">{{ $t('present.section3_text') }}</p>
        
      </section>
  
      <!-- Sekcia 4 -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-4">{{ $t('present.section4_title') }}</h2>
        <p class="mb-4">{{ $t('present.section4_text') }}</p>
        
      </section>
  
      <!-- Galéria obrázkov -->
      <section>
        <h2 class="text-2xl font-bold mb-4">{{ $t('present.gallery_title') }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img v-for="image in galleryImages" :key="image" :src=image  class="w-full h-auto rounded shadow-md" />
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n';
  
  const { t } = useI18n();
  
  // Galéria obrázkov
  const galleryImages = [
  new URL('@/assets/images/1_menu.jpg', import.meta.url).href,
  new URL('@/assets/images/2_menu.jpg', import.meta.url).href,
  new URL('@/assets/images/3_menu.jpg', import.meta.url).href,
  new URL('@/assets/images/4_menu.jpg', import.meta.url).href,
  new URL('@/assets/images/3_menu.jpg', import.meta.url).href,
];
  </script>
  
  <style scoped>
  img {
    object-fit: cover;
  }
  </style>
  