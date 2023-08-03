<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li class="glide__slide" v-for="(slot, idx) in $slots">
          <slot :name="idx"></slot>
        </li>
      </ul>
    </div>
    <div class="glide__bullets" data-glide-el="controls[nav]">
      <button class="glide__bullet" :data-glide-dir="`=${idx}`" v-for="(slot, idx) in $slots"></button>
    </div>
  </div>
</template>
<script setup lang="ts">
import {onMounted, onBeforeMount} from 'vue'

import '@glidejs/glide/dist/css/glide.core.min.css'
import Glide, { Controls, Swipe, Autoplay } from '@glidejs/glide/dist/glide.modular.esm'

onMounted(() => {
    new Glide('.glide', {
      gap: 0,
      autoplay: 10000,
      type: 'carousel'
  }).mount({ Controls, Swipe, Autoplay })
})
</script>
<style>
.glide__bullets {
  display: flex;
  justify-content: center; 
  margin-bottom: 1rem;
}

.glide__bullets > .glide__bullet {
  background-image: url(/assets/images/dot_blue.svg);
  width: .6rem;
  height: .6rem;
  margin: 0 .3rem;
}

.glide__bullets > .glide__bullet--active {
  background-image: url(/assets/images/dot_teal.svg);
}
</style>
