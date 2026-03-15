<script setup>
import { ref } from 'vue'
import { APUNTES } from '@/data/apuntes.js'

const abiertos = ref(new Set())

function toggleMateria(materiaId) {
  if (abiertos.value.has(materiaId)) {
    abiertos.value.delete(materiaId)
  } else {
    abiertos.value.add(materiaId)
  }
}
</script>

<template>
  <div class="h-full overflow-y-auto p-6">
    <h1 class="font-(family-name:ubuntu) text-light mb-6 text-3xl font-bold">Banco de Apuntes</h1>
    <div class="flex flex-col gap-2">
      <div
        v-for="item in APUNTES"
        :key="item.materiaId"
        class="bg-secondary rounded-2xl overflow-hidden"
      >
        <div
          class="hover:bg-primary flex cursor-pointer flex-row items-center justify-between p-4 transition-colors"
          @click="toggleMateria(item.materiaId)"
        >
          <div class="flex flex-row items-center gap-3">
            <span class="bg-enfasis font-(family-name:ubuntu) text-light rounded-lg px-2 py-0.5 text-xs font-bold">
              {{ item.materiaId }}
            </span>
            <h2 class="font-(family-name:ubuntu) text-light text-lg font-semibold">{{ item.materia }}</h2>
          </div>
          <span class="text-light text-xl transition-transform" :class="abiertos.has(item.materiaId) ? 'rotate-180' : ''">▾</span>
        </div>
        <div v-if="abiertos.has(item.materiaId)" class="px-4 pb-4">
          <div class="flex flex-col gap-2">
            <div
              v-for="apunte in item.apuntes"
              :key="apunte.cajon"
              class="bg-dark flex flex-row items-center justify-between rounded-xl p-3"
            >
              <span class="font-(family-name:ubuntu) text-light">{{ apunte.nombre }}</span>
              <span class="bg-primary font-(family-name:ubuntu) text-light rounded-full px-3 py-0.5 text-sm font-medium">
                Cajón {{ apunte.cajon }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
