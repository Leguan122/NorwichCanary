<template>
    <div class="container mx-auto p-8 bg-gray-50">
      <!-- Nadpis -->
      <h1 class="text-4xl font-bold text-center text-yellow-700 mb-8">{{ $t('present.norwich_title') }}</h1>
  
      <!-- Obsah -->
      <div class="flex flex-col lg:flex-row items-center lg:space-x-8">
        <!-- Obrázok na ľavej strane (desktop) alebo hore (mobil) -->
        <div class="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img
            :src="imageSrc2"
            alt="História chovu kanárikov"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
  
        <!-- Text na pravej strane (desktop) alebo dole (mobil) -->
        <div class="w-full lg:w-1/2 text-gray-700 text-lg">
          <p class="mb-4">{{ $t('present.norwich_text') }}</p>
        </div>
      </div>
    </div>




    

    <div class="container mx-auto p-8 bg-gray-50">
      
  
      <!-- Obsah -->
      <div class="container mx-auto py-10">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="image in norwichImages" :key="image" class="cursor-pointer">
        <img
          :src="image"
          alt="Norwich Canary"
          class="object-cover h-48 w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          @click="openImage(image)"
        />
      </div>
    </div>

    <!-- Modal for Enlarged Image -->
    <div v-if="selectedImage" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div class="relative">
        <img
          :src="selectedImage"
          alt="Enlarged Norwich Canary"
          class="max-h-screen max-w-full rounded-lg shadow-lg"
        />
        <button
          class="absolute top-2 right-2 text-white text-3xl font-bold"
          @click="closeImage"
        >
          &times;
        </button>
      </div>
    </div>
  </div>
    </div>


  </template>
  
  <script setup>
  import { ref } from 'vue';

  const imageSrc2 = new URL('@/assets/images/elegant-press1.png', import.meta.url).href;

const importNorwichImages = () => {
  const images = [];
  for (let i = 1; i <= 68; i++) {
    images.push(new URL(`/src/assets/images/gallery/N${i}.jpg`, import.meta.url).href);
  }
  return images;
};

const norwichImages = ref(importNorwichImages());
const selectedImage = ref(null);

const openImage = (image) => {
  selectedImage.value = image;
};

const closeImage = () => {
  selectedImage.value = null;
};
  </script>
  
  <style scoped>
  </style>
  