<script setup>
import { ANUNCIOS } from '@/data/anuncios.js'

function formatearFecha(fechaStr) {
  const [anio, mes, dia] = fechaStr.split('-').map(Number)
  const fecha = new Date(anio, mes - 1, dia)
  return fecha.toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })
}
</script>

<template>
  <div class="h-full overflow-y-auto p-6">
    <h1 class="font-(family-name:ubuntu) text-light mb-6 text-3xl font-bold">Anuncios y novedades</h1>
    <div class="flex flex-col gap-4">
      <div
        v-for="anuncio in ANUNCIOS"
        :key="anuncio.id"
        class="bg-secondary rounded-2xl p-6"
      >
        <h2 class="font-(family-name:ubuntu) text-light mb-3 text-2xl font-semibold">{{ anuncio.titulo }}</h2>
        <p class="font-(family-name:ubuntu) text-light mb-4 leading-relaxed opacity-90">{{ anuncio.contenido }}</p>
        <div class="flex flex-row items-center gap-3">
          <span class="bg-enfasis font-(family-name:ubuntu) text-light rounded-full px-3 py-1 text-sm font-medium">
            {{ anuncio.autor }}
          </span>
          <span class="font-(family-name:ubuntu) text-light text-sm opacity-70">
            {{ formatearFecha(anuncio.fecha) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
