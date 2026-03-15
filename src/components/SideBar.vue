<script setup>
import BookMark from "@/components/icons/BookMark.vue";
import Archive from "@/components/icons/Archive.vue"
import InfoCircle from "./icons/InfoCircle.vue";
import Messages from "./icons/Messages.vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: 'anuncios'
  }
})

const emit = defineEmits(['update:modelValue'])

function isActive(sectionId) {
  return props.modelValue === sectionId
}

function itemClass(sectionId) {
  return [
    'flex cursor-pointer flex-row gap-4 rounded-2xl p-4 transition-colors',
    isActive(sectionId) ? 'bg-primary' : 'hover:bg-primary'
  ]
}
</script>

<template>
  <div class="bg-dark col-span-2 h-screen w-full p-2">
    <div class="flex w-full cursor-pointer flex-row items-center justify-center p-4">
      <div class="p-2">
        <h1><span class="font-(family-name:ubuntu) text-light text-3xl">¡Ya Basta! - UNGS</span></h1>
      </div>
    </div>
    <div :class="itemClass('anuncios')" @click="emit('update:modelValue', 'anuncios')">
      <div class="bg-dark rounded-4xl p-2"><Messages /></div>
      <div class="flex h-14 items-center"><h2><span class="font-(family-name:ubuntu) text-light text-2xl">Anuncios y novedades</span></h2></div>
    </div>
    <div :class="itemClass('apuntes')" @click="emit('update:modelValue', 'apuntes')">
      <div class="bg-dark rounded-4xl p-2"><Archive /></div>
      <div class="flex h-14 items-center"><h2><span class="font-(family-name:ubuntu) text-light text-2xl">Banco de Apuntes</span></h2></div>
    </div>
    <div :class="itemClass('carrera')" @click="emit('update:modelValue', 'carrera')">
      <div class="bg-dark rounded-4xl p-2"><BookMark /></div>
      <div class="flex h-14 items-center"><h2><span class="font-(family-name:ubuntu) text-light text-2xl">Mi Carrera</span></h2></div>
    </div>
    <div :class="itemClass('donde')" @click="emit('update:modelValue', 'donde')">
      <div class="bg-dark rounded-4xl p-2"><InfoCircle /></div>
      <div class="flex h-14 items-center"><h2><span class="font-(family-name:ubuntu) text-light text-2xl">¿Donde curso?</span></h2></div>
    </div>
  </div>
</template>
