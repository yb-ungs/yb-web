<script setup>
import { ref, computed, onMounted } from 'vue'
import { CARRERAS_DISPONIBLES } from '@/data/carreras.js'

const emit = defineEmits(['ver-plan'])

const carrerasUsuario = ref([])

onMounted(() => {
  const guardado = localStorage.getItem('yb-carreras')
  if (guardado) {
    carrerasUsuario.value = JSON.parse(guardado)
  }
})

function guardar() {
  localStorage.setItem('yb-carreras', JSON.stringify(carrerasUsuario.value))
}

function agregarCarrera(carrera) {
  carrerasUsuario.value.push(carrera)
  guardar()
}

function quitarCarrera(carreraId) {
  carrerasUsuario.value = carrerasUsuario.value.filter(c => c.id !== carreraId)
  guardar()
}

const carrerasDisponiblesParaAgregar = computed(() => {
  const idsUsuario = new Set(carrerasUsuario.value.map(c => c.id))
  return CARRERAS_DISPONIBLES.filter(c => !idsUsuario.has(c.id))
})
</script>

<template>
  <div class="h-full overflow-y-auto p-6">
    <h1 class="font-(family-name:ubuntu) text-light mb-6 text-3xl font-bold">Mi Carrera</h1>

    <div v-if="carrerasUsuario.length === 0" class="bg-secondary rounded-2xl p-6 mb-6">
      <p class="font-(family-name:ubuntu) text-light opacity-70">No tenés carreras agregadas todavía.</p>
    </div>

    <div v-else class="flex flex-col gap-3 mb-6">
      <div
        v-for="carrera in carrerasUsuario"
        :key="carrera.id"
        class="bg-secondary hover:bg-primary flex cursor-pointer flex-row items-center justify-between rounded-2xl p-4 transition-colors"
      >
        <span
          class="font-(family-name:ubuntu) text-light text-xl font-semibold flex-1"
          @click="emit('ver-plan', carrera)"
        >
          {{ carrera.nombre }}
        </span>
        <button
          class="bg-dark hover:bg-enfasis text-light rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg transition-colors ml-4"
          @click.stop="quitarCarrera(carrera.id)"
        >
          ✕
        </button>
      </div>
    </div>

    <div v-if="carrerasDisponiblesParaAgregar.length > 0">
      <h2 class="font-(family-name:ubuntu) text-light mb-3 text-xl font-semibold">Agregar carrera</h2>
      <div class="flex flex-col gap-2">
        <div
          v-for="carrera in carrerasDisponiblesParaAgregar"
          :key="carrera.id"
          class="bg-secondary hover:bg-primary flex cursor-pointer flex-row items-center justify-between rounded-2xl p-4 transition-colors"
          @click="agregarCarrera(carrera)"
        >
          <span class="font-(family-name:ubuntu) text-light text-lg">{{ carrera.nombre }}</span>
          <span class="bg-enfasis text-light rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold">+</span>
        </div>
      </div>
    </div>
  </div>
</template>
