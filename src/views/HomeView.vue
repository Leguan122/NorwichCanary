<script setup>
import { ref } from 'vue';

// Pole s obrázkami
const images = [
  new URL('@/assets/images/1_menu.jpg', import.meta.url).href,
  new URL('@/assets/images/2_menu.jpg', import.meta.url).href,
  new URL('@/assets/images/3_menu.jpg', import.meta.url).href,
  new URL('@/assets/images/4_menu.jpg', import.meta.url).href,
  new URL('@/assets/images/3_menu.jpg', import.meta.url).href,
];

// Reaktívna premená pre zvolený obrázok
const selectedImage = ref(images[0]);

// Funkcia na výber obrázka
const selectImage = (image) => {
  selectedImage.value = image;
};
</script>

<template>
<div class="w-full h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-8 flex flex-col justify-center items-center">
    <!-- Hlavný obrázok -->
    <div class="w-full max-w-5xl h-3/4 mb-4 bg-white shadow-lg rounded-lg flex justify-center items-center">
      <img :src="selectedImage" alt="Selected image" class="w-full h-full object-cover rounded-lg" />
    </div>

    <!-- Posuvná galéria s obrázkami -->
    <div class="w-full max-w-5xl flex space-x-4 overflow-x-auto px-2">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="flex-none w-24 h-24 cursor-pointer"
        @click="selectImage(image)"
      >
        <img :src="image" alt="Gallery image" class="w-full h-full object-cover rounded-lg border-2 border-transparent hover:border-yellow-500 transition-all" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Prispôsobenie posuvnej galérie */
.flex {
  scrollbar-width: thin;
  scrollbar-color: #e2e8f0 #f7fafc;
}

.flex::-webkit-scrollbar {
  height: 8px;
}

.flex::-webkit-scrollbar-thumb {
  background-color: #e2e8f0;
  border-radius: 10px;
}
</style>
