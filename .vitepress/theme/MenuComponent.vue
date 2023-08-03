<template>
  <nav id="menu" class="ps-28">
    <a href="/" @click="closeMenu"><img src="/assets/images/Stan_logo_bleu.svg" alt="Logo de Stan" class="mt-6"></a>
    <label for="menu_toggle" class="absolute top-3 right-6 block w-10 cursor-pointer">
      <img src="/assets/images/menu_close.svg" alt="Fermer le menu">
    </label>
    <ul>
      <li>
        <a href="/a_propos" @click="closeMenu"><h2>À propos</h2></a>
        <ul class="arrowed">
          <li><a href="/a_propos#vision" @click="closeMenu">Vision & ambition</a></li>
          <li><a href="/a_propos#souverainete" @click="closeMenu">Notre souveraineté / nos certifications</a></li>
          <li><a href="/a_propos#equipe" @click="closeMenu">L'équipe</a></li>
          <li><a href="/a_propos#valeurs" @click="closeMenu">Nos valeurs</a></li>
        </ul>
      </li>
      <li>
        <a href="/accompagnement" @click="closeMenu"><h2>Notre accompagnement</h2></a>
        <ul class="arrowed">
          <li><a href="/accompagnement#besoins" @click="closeMenu">Vos besoins</a></li>
          <li><a href="/accompagnement#offres" @click="closeMenu">Nos offres / nos solutions</a></li>
          <li><a href="/accompagnement#cas_usage" @click="closeMenu">Cas d'usage</a></li>
        </ul>
      </li>
      <li>
        <a href="/actualites" @click="closeMenu"><h2>Blog / Actus</h2></a>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
const props = defineProps<{
  menuToggle: HTMLInputElement
}>()
function closeMenu() {
  props.menuToggle.checked = false
}
</script>
<style scoped>
#menu {
  width: 100vw;
  height: 100vh;
  background: url(/assets/images/menu_bkg.svg) 1rem / cover no-repeat, rgb(var(--white));
  position: fixed;
  top: 0;
  color: rgb(var(--blue-dark));
  z-index: 999;
  left: 100vw;
  transition: left .3s ease-out;
}

input:checked + #menu {
  left: 0;
}

ul.arrowed > li {
  text-indent: .5rem;
  margin-bottom: 1rem;
}

ul.arrowed > li::before {
  content: "→ ";
  font-size: 1.25rem;
  font-weight: 600;
  color: rgb(var(--red));
  position: relative;
  left: -.5rem;
}

h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 1.25rem;
  color: rgb(var(--blue));
}
</style>
