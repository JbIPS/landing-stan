<script setup lang="ts">
import { useData, useRoute } from "vitepress";
import Home from './Home.vue';
import APropos from './APropos.vue'
import Offre from "./Offre.vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { site } = useData<{
  title: string
  description: string
}>();
const route = useRoute()
  
</script>

<template>
  <nav :class="`py-2 pe-6 flex ${route.path === '/' ? 'justify-end' : 'justify-between'}`">
    <a v-if="route.path !== '/'" href="/"><img src="/assets/images/Stan_symbole_blanc.svg" alt="Logo Stan blanc" class="ms-4 w-7"></a>
    <button role="menu" id="button-menu">
      <img
        src="/assets/images/MOBILE/menu_open.svg"
        alt="Ouvrir le menu"
      />
    </button>
  </nav>
  <div v-if="route.path === '/'">
    <Home :description="site.description" :title="site.title"/>
  </div>
  <div v-else-if="route.path === '/a_propos'">
    <APropos />
  </div>
  <div v-else-if="route.path === '/accompagnement'">
    <Offre/>
  </div>
  <div v-else>
    <a href="/">Home</a>
    <Content />
  </div>
  <footer class="text-blue-dark flex items-center justify-center text-[8px] py-2">
      <img src="/assets/images/MOBILE/Stan_logo_bleu.svg" alt="Logo Stan" class="w-1/6 pe-2">
      <div class="flex w-1/6 border-s-2 justify-around h-6 items-center">
        <a href=""><img src="/assets/images/logo_linkedin.svg" alt="Logo LinkedIn"></a>
        <a href=""><img src="/assets/images/logo_twitter.svg" alt="Logo Twitter"></a>
        <a href=""><img src="/assets/images/logo_youtube.svg" alt="Logo YouTube"></a>
      </div>
      <div class="w-1/5 border-s-2 border-e-2 text-center h-6">
        <a href="/mentions_legales">Mentions légales</a>
        <a href="/cgv">CGV</a>
      </div>
    <p class="w-1/3 text-[8px] text-center ps-2">Pas de cookies sur notre site. La meilleure façon de protéger vos données, c’est de ne pas les garder.</p>
  </footer>
</template>
<style scoped>
</style>
