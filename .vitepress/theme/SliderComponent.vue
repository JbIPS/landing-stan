<template>
  <div class="glide" ref="glider">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li class="glide__slide" v-for="(slot, idx) in $slots">
          <slot :name="idx"></slot>
        </li>
      </ul>
    </div>
    <div v-if="showArrows" class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<">←</button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">→</button>
    </div>
    <div v-if="!hideControls" class="glide__bullets" data-glide-el="controls[nav]">
      <button class="glide__bullet" :data-glide-dir="`=${idx}`" v-for="(slot, idx) in $slots"></button>
    </div>
  </div>
</template>
<script setup lang="ts">
import {onMounted, ref } from 'vue'

import '@glidejs/glide/dist/css/glide.core.min.css'
import Glide, { Controls, Swipe, Autoplay } from '@glidejs/glide/dist/glide.modular.esm'

defineProps<{
  hideControls?: boolean
  showArrows?: boolean
}>();

const glider = ref(null)

onMounted(() => {
    new Glide(glider.value, {
      gap: 0,
      autoplay: 10000,
      type: 'carousel'
  }).mount({ Controls, Swipe, Autoplay })
})
</script>
<style>
.glide__arrow {
  position: absolute;
  color: rgb(var(--blue));
  font-size: 2rem;
  top: calc(50% - 2rem);
  padding: 0 .5rem;
}

.glide__arrow--right {
  right: 0;
}

.glide__bullets {
  display: flex;
  justify-content: center; 
  padding-bottom: 1rem;
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
