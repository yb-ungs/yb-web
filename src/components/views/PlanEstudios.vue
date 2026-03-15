<script setup>
import { ref, computed, onMounted } from 'vue'
import { PLANES } from '@/data/carreras.js'

const props = defineProps({
  carrera: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['volver'])

const estadoMaterias = ref({})

const plan = computed(() => PLANES[props.carrera.id])

const storageKey = computed(() => `yb-plan-${props.carrera.id}`)

onMounted(() => {
  const guardado = localStorage.getItem(storageKey.value)
  if (guardado) {
    estadoMaterias.value = JSON.parse(guardado)
  }
})

function guardar() {
  localStorage.setItem(storageKey.value, JSON.stringify(estadoMaterias.value))
}

function getEstado(materiaId) {
  return estadoMaterias.value[materiaId] || 'pendiente'
}

function avanzarEstado(materiaId) {
  const estadoActual = getEstado(materiaId)
  const ciclo = { pendiente: 'cursando', cursando: 'aprobada', aprobada: 'pendiente' }
  estadoMaterias.value[materiaId] = ciclo[estadoActual]
  guardar()
}

function claseEstado(materiaId) {
  const estado = getEstado(materiaId)
  if (estado === 'aprobada') return 'bg-green-700 hover:bg-green-600'
  if (estado === 'cursando') return 'bg-enfasis hover:opacity-90'
  return 'bg-dark hover:bg-secondary'
}

const totalMaterias = computed(() => {
  if (!plan.value) return 0
  return plan.value.cuatrimestres.reduce((acc, c) => acc + c.materias.length, 0)
})

const materiasAprobadas = computed(() => {
  return Object.values(estadoMaterias.value).filter(e => e === 'aprobada').length
})

const porcentaje = computed(() => {
  if (totalMaterias.value === 0) return 0
  return Math.round((materiasAprobadas.value / totalMaterias.value) * 100)
})
</script>

<template>
  <div class="h-full overflow-y-auto p-6">
    <div class="flex flex-row items-center gap-4 mb-4">
      <button
        class="bg-secondary hover:bg-primary text-light font-(family-name:ubuntu) rounded-2xl px-4 py-2 transition-colors cursor-pointer"
        @click="emit('volver')"
      >
        ← Volver
      </button>
      <h1 class="font-(family-name:ubuntu) text-light text-3xl font-bold">{{ carrera.nombre }}</h1>
    </div>

    <div class="bg-secondary rounded-2xl p-4 mb-6">
      <div class="flex flex-row items-center justify-between mb-2">
        <span class="font-(family-name:ubuntu) text-light font-semibold">Progreso</span>
        <span class="font-(family-name:ubuntu) text-light text-sm">{{ materiasAprobadas }} / {{ totalMaterias }} materias aprobadas</span>
      </div>
      <div class="bg-dark rounded-full h-3 w-full overflow-hidden">
        <div
          class="bg-green-600 h-3 rounded-full transition-all"
          :style="{ width: porcentaje + '%' }"
        ></div>
      </div>
      <p class="font-(family-name:ubuntu) text-light text-sm mt-1 opacity-70">{{ porcentaje }}% completado</p>
    </div>

    <div v-if="plan" class="flex flex-col gap-6">
      <div v-for="cuatri in plan.cuatrimestres" :key="cuatri.numero">
        <h2 class="font-(family-name:ubuntu) text-light text-xl font-semibold mb-3">{{ cuatri.label }}</h2>
        <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="materia in cuatri.materias"
            :key="materia.id"
            class="rounded-2xl p-4 cursor-pointer transition-colors"
            :class="claseEstado(materia.id)"
            @click="avanzarEstado(materia.id)"
          >
            <div class="flex flex-row items-start justify-between gap-2 mb-2">
              <span class="font-(family-name:ubuntu) text-light font-semibold leading-tight">{{ materia.nombre }}</span>
              <span class="bg-dark text-light font-(family-name:ubuntu) rounded-lg px-2 py-0.5 text-xs font-bold shrink-0">{{ materia.id }}</span>
            </div>
            <div class="flex flex-row items-center gap-2 flex-wrap">
              <span class="font-(family-name:ubuntu) text-light text-xs opacity-70">{{ materia.creditos }} créditos</span>
              <span v-if="materia.requisitos.length > 0" class="font-(family-name:ubuntu) text-light text-xs opacity-70">
                · Req: {{ materia.requisitos.join(', ') }}
              </span>
            </div>
            <div class="mt-2">
              <span
                class="font-(family-name:ubuntu) text-xs font-medium rounded-full px-2 py-0.5"
                :class="{
                  'bg-green-900 text-green-200': getEstado(materia.id) === 'aprobada',
                  'bg-yellow-900 text-yellow-200': getEstado(materia.id) === 'cursando',
                  'text-light opacity-50': getEstado(materia.id) === 'pendiente',
                }"
              >
                {{ getEstado(materia.id) === 'aprobada' ? '✓ Aprobada' : getEstado(materia.id) === 'cursando' ? '⏳ Cursando' : 'Pendiente' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
