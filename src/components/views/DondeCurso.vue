<script setup>
import { ref } from 'vue'
import { PLANES } from '@/data/carreras.js'

const plan = PLANES['lic-sistemas']

const materiaSeleccionada = ref('')
const comisionSeleccionada = ref('')

const comisiones = ['Comisión A', 'Comisión B', 'Comisión C', 'Comisión D']

function buscar() {
  console.log('buscar:', materiaSeleccionada.value, comisionSeleccionada.value)
}
</script>

<template>
  <div class="h-full overflow-y-auto p-6">
    <h1 class="font-(family-name:ubuntu) text-light mb-6 text-3xl font-bold">¿Dónde curso?</h1>

    <div class="bg-secondary rounded-2xl p-6 max-w-lg flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <label class="font-(family-name:ubuntu) text-light font-semibold text-lg">Materia</label>
        <select
          v-model="materiaSeleccionada"
          class="bg-dark text-light font-(family-name:ubuntu) rounded-2xl p-3 cursor-pointer outline-none border-2 border-transparent focus:border-primary"
        >
          <option value="" disabled>Seleccioná una materia</option>
          <optgroup
            v-for="cuatri in plan.cuatrimestres"
            :key="cuatri.numero"
            :label="cuatri.label"
          >
            <option
              v-for="materia in cuatri.materias"
              :key="materia.id"
              :value="materia.id"
            >
              {{ materia.nombre }}
            </option>
          </optgroup>
        </select>
      </div>

      <div class="flex flex-col gap-2">
        <label class="font-(family-name:ubuntu) text-light font-semibold text-lg">Comisión</label>
        <select
          v-model="comisionSeleccionada"
          class="bg-dark text-light font-(family-name:ubuntu) rounded-2xl p-3 cursor-pointer outline-none border-2 border-transparent focus:border-primary"
        >
          <option value="" disabled>Seleccioná una comisión</option>
          <option v-for="comision in comisiones" :key="comision" :value="comision">
            {{ comision }}
          </option>
        </select>
      </div>

      <button
        class="bg-primary hover:bg-enfasis text-light font-(family-name:ubuntu) rounded-2xl p-3 font-semibold text-lg cursor-pointer transition-colors"
        @click="buscar"
      >
        Buscar
      </button>
    </div>
  </div>
</template>
