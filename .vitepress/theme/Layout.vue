<script setup lang="ts">
import { ref } from 'vue'
import { useData, useRoute } from "vitepress";
import Home from './Home.vue';
import APropos from './APropos.vue'
import Offre from "./Offre.vue";
import MenuComponent from "./MenuComponent.vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData();
const menuToggle = ref(null)
</script>

<template>
  <nav :class="`py-2 pe-6 flex ${frontmatter.layout === 'home' ? 'justify-end' : 'justify-between'}`">
    <a v-show="frontmatter.layout !== 'home'" href="/"><img src="/assets/images/Stan_symbole_blanc.svg" alt="Logo Stan blanc" class="ms-4 w-7"></a>
    <input type="checkbox" id="menu_toggle" class="hidden" ref="menuToggle">
    <MenuComponent :menu-toggle="menuToggle"/>
    <label for="menu_toggle" class="w-10 cursor-pointer">
      <img
        src="/assets/images/menu_open.svg"
        alt="Ouvrir le menu"
      />
    </label>
  </nav>
  <main>
    <div v-if="frontmatter.layout === 'home'">
      <Home :description="site.description" :title="site.title"/>
    </div>
    <div v-else-if="frontmatter.layout === 'a_propos'">
      <APropos />
    </div>
    <div v-else-if="frontmatter.layout === 'accompagnement'">
      <Offre/>
    </div>
  </main>
  <footer class="text-blue-dark flex items-center justify-center text-[8px] py-2">
      <img src="/assets/images/Stan_logo_bleu.svg" alt="Logo Stan" class="w-1/6 pe-2">
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
nav {
  background-color: rgb(var(--blue));
  border-bottom: 2px solid rgb(var(--dark));
  min-height: 4rem;
  align-items: center;
}

p {
  font-size: 0.9rem;
}

#button-menu {
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
}

#button-menu > img {
  width: 100%;
  height: 100%;
}

.line-bg {
  background-image: url(/assets/images/bkg_mobile.svg);
  background-position-x: right;
}
</style>
