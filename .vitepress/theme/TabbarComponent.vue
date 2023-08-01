<template>
  <div :class="`mb-8 ${color}`">
    <div class="flex mb-6 justify-center">
      <div v-for="tab in tabs" :key="tab.id" class="flex-grow">
        <input type="radio" :name="`navtab_${id}`" :id="`${id}_${tab.id}`" class="hidden" :value="tab" v-model="currentTab">
        <label :for="`${id}_${tab.id}`">{{ tab.label }}</label>
      </div>
    </div>
    <div :class="`text-${textColor}`">
      <slot :name="currentTab.id"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  id: string
  tabs:  Array<{
    id: string
    label: string
  }>
  color: 'white' | 'red' | 'blue' | 'blue-light'
  textColor: 'white' | 'blue' | 'blue-dark'
}>();
const currentTab = ref(props.tabs[0])
</script>
<style scoped>
/* Blue style */
.blue input + label {
  background: rgb(var(--blue));
  color: rgb(var(--white));
  border-color: rgb(var(--blue));
}
.blue input:checked + label {
  background: rgb(var(--white));
  color: rgb(var(--blue));
}
/* Red style */
.red input + label {
  background: rgb(var(--red));
  color: rgb(var(--white));
  border-color: rgb(var(--red));
}
.red input:checked + label {
  background: rgb(var(--white));
  color: rgb(var(--red));
}
/* Blue light style */
.blue-light input + label {
  background: rgb(var(--blue-light));
  color: rgb(var(--white));
  border-color: rgb(var(--blue-light));
}
.blue-light input:checked + label {
  background: rgb(var(--white));
  color: rgb(var(--blue-light));
}
/* White style */
.white input + label {
  background: rgb(var(--white));
  color: rgb(var(--blue));
  border-color: rgb(var(--blue));
}
.white input:checked + label {
  background: rgb(var(--blue));
  color: rgb(var(--white));
  border-color: rgb(var(--blue));
}

.text-white :deep(p) {
  color: rgb(var(--white));
}

.text-blue :deep(p) {
  color: rgb(var(--blue));
}

.text-blue-dark :deep(p) {
  color: rgb(var(--blue-dark));
}

label {
  text-decoration: none;
  border: 1px solid;
  font-weight: 900;
  text-transform: uppercase;
  padding: .3rem .4rem;
  display: flex;
  align-items: center;
  text-align: center;
  height: 100%;
  border: 2px solid;
}

:deep(a) {
  text-decoration: underline;
  margin-bottom: 1rem;
}

:deep(ul) {
  padding-left: 2rem;
  margin-top: .75rem;
}

:deep(li ::before) {
  color: red !important;
}
</style>
