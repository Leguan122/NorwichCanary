<template>
    <div class="container mx-auto p-8 bg-gray-50 min-h-screen">
      <!-- Nadpis -->
      <h1 class="text-4xl font-bold text-center text-yellow-700 mb-8">{{ $t('history_title') }}</h1>
  
      <!-- Obsah -->
      <div class="flex flex-col lg:flex-row items-center lg:space-x-8">
        <!-- Obrázok na ľavej strane (desktop) alebo hore (mobil) -->
        <div class="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img
            :src="imageSrc"
            alt="História chovu kanárikov"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
  
        <!-- Text na pravej strane (desktop) alebo dole (mobil) -->
        <div class="w-full lg:w-1/2 text-gray-700">
          <p class="mb-4">
            Počiatok chovu kanárikov je datovaný začiatkom 16.storočia a je spojený s Kanárskymi ostrovmi. Tu miestny chovatelia dobytka začali s odchytom divých kanárikov, ktorých predávali obchodníkom na lodiach. Tí ich následne previezli do Európy a Japonska, kde zdobili dvor zámožných rodín. V tom čase si monopol na chov kanárikov udržali španielski chovatelia, pretože predávali len spievajúcich samčekov a tak zamedzili množeniu v iných častiach kontinentu.
          </p>
          <p class="mb-4">
            Tým docielili že kanárik sa stal symbolom vznešenosti a noblesy a mohol si ho kúpiť len majetný človek. Časom sa kanáriky dostali aj medzi prostý ľud, ktorý si ich množením a predajom pomáhal v neľahkej dobe. O niekoľko desiatok rokov neskôr, pri prenasledovaní protestantov, ušlo z Belgicka a Holandska mnoho ľudí do Anglicka a usadili sa v okolí Nottingamu, Norwichu a iných miest. Popri iných veciach si zo sebou zobrali aj svojich miláčikov - kanáriky.
          </p>
          <p class="mb-4">
            Na Britských ostrovoch tak dlhodobým šľachtením vznikali popri farebných kanárikoch aj postavové plemená. Tie dostali pomenovanie podľa lokality, v ktorej sa chovali, ako napríklad "yorkshire" , "border fancy" , či "norwich". V tom čase sa chov týchto nádherných vtákov rozšíril aj do Európy, kde okrem krásneho spevu a pestrých farieb, sa kanárik používal aj ako pomocník pri práci.
          </p>
          <p>
            Najmä v Anglicku a Tirolsku ho baníci používali na identifikáciu hromadiaceho sa plynu v bani. Okrem farby a postavy sa kanáriky chovali aj na spev a práve v okolí severovýchodného Nemecka sa pohorie Harz stalo domovom výborného speváka - harzkého kanárika. Postupným mnohoročným šľachtením tak vznikli nové farebné mutácie a druhy kanárikov, aké poznáme aj dnes.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const imageSrc = new URL('@/assets/images/1_menu.jpg', import.meta.url).href;

  </script>
  
  <style scoped>
  </style>
  