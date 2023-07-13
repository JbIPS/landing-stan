<script setup lang="ts">
import { useData } from "vitepress";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData();
</script>

<template>
  <nav class="py-2 me-6">
    <button role="menu" id="button-menu">
      <img
        src="/assets/images/MOBILE/Siteweb_Stan_elements_M_menu-blanc.svg"
        alt="Ouvrir le menu"
      />
    </button>
  </nav>
  <div v-if="frontmatter.home">
    <section id="title" class="flex flex-col">
      <div class="grow justify-center">
        <h1>
          <img
            class="pure-img"
            src="/assets/images/PNG/STAN_Logo-Blanc.png"
            alt="{{site.title}}"
          />
        </h1>
      </div>
      <div class="px-16 text-2xl font-extrabold">
        <h2>{{ site.description }}</h2>
      </div>
      <div class="flex-col px-8 grow justify-around">
        <p>
          Nous <span class="text-white font-bold">démêlons</span> -
          <span class="text-red font-bold">facilitions</span> -
          <span class="text-blue-light font-bold">revalorisons</span> vos données grâce à un outil de
          confiance et souverain pour vous aider à créer de la valeur au sein de
          votre entreprise.
        </p>
        <a href="#contact" class="button"
          >Prendre rendez-vous pour une démonstration</a
        >
      </div>
      <div class="justify-center">
        <a href="#"><img class="h-10 mt-12" src="/assets/images/MOBILE/Siteweb_Stan_elements_M_HOMEPAGE_fleche-bleue.svg"></a>
      </div>
    </section>
    <section class="text-left">
      <div class="text-blue-dark opacity-15 text-7xl font-extrabold translate-y-9 -z-10 relative px-8" aria-hidden="true">ALERTE</div>
      <h2 class="text-4xl font-extrabold mb-6 px-8">ALERTE AUX DONNÉES MAL TRAITÉES</h2>
      <p class="my-6 px-8 -mb-6">Au sein de vos entreprises, une denrée précieuse circule, se perd, dépérit, n’est pas protégée. Ce sont vos données ! Et pourtant elles représentent une partie importante de votre activité et peuvent être une nouvelle ressource économique !</p>
      <div class="bg-white p-8 text-blue-dark font-bold text-center me-8 translate-y-14 relative z-20">
        <p class="text-2xl mb-6">Les données représentent jusqu’à 15.5% du PIB mondial*</p>
        <p class="text-xs">*RAPPORT L’ÉCONOMIE NUMÉRIQUE 2019 de L’ONU</p>
      </div>
      <div class="bg-blue-dark ms-8 p-8 pt-16 relative translate-y-7 z-10">
        <p class="text-xl"><strong class="font-extrabold">Et oui, vos données aussi méritent le meilleur et pourtant elles sont souvent malmenées, mal traitées voire maltraitées !</strong></p>
        <p class="my-6">La maltraitance, (d’une donnée chez Stan !) c’est mettre une donnée en situation de vulnérabilité lorsqu’une action ou un défaut d’action compromet ou porte atteinte à son développement, à ses droits, à ses besoins fondamentaux ou à sa santé et que cette atteinte intervient dans une relation de confiance, de dépendance, de soin ou d’accompagnement. Les situations de maltraitance (oui on parle toujours de la donnée !) peuvent être ponctuelles ou durables, intentionnelles ou non. Leur origine peut être individuelle, collective ou institutionnelle.</p>
        <p class="text-xl font-extrabold text-blue-light">Vos données méritent d’être mieux traitées, mieux gérées, mieux protégées, et mieux exploitées !</p>
      </div>
    </section>
    <section class="bg-white">
      <h2>DÉCOUVREZ NOS OFFRES</h2>
        <p class="text-xl"><strong class="font-extrabold">Et oui, vos données aussi méritent le meilleur et pourtant elles sont souvent malmenées, mal traitées voire maltraitées !</strong></p>
        <p class="my-6">La maltraitance, (d’une donnée chez Stan !) c’est mettre une donnée en situation de vulnérabilité lorsqu’une action ou un défaut d’action compromet ou porte atteinte à son développement, à ses droits, à ses besoins fondamentaux ou à sa santé et que cette atteinte intervient dans une relation de confiance, de dépendance, de soin ou d’accompagnement. Les situations de maltraitance (oui on parle toujours de la donnée !) peuvent être ponctuelles ou durables, intentionnelles ou non. Leur origine peut être individuelle, collective ou institutionnelle.</p>
        <p class="text-xl font-extrabold text-blue-light">Vos données méritent d’être mieux traitées, mieux gérées, mieux protégées, et mieux exploitées !</p>
    </section>
  </div>
  <div v-else>
    <a href="/">Home</a>
    <Content />
  </div>
</template>
