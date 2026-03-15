<script setup>
import { ref } from 'vue'
import SideBar from "@/components/SideBar.vue"
import NavBar from "@/components/NavBar.vue"
import Anuncios from "@/components/views/Anuncios.vue"
import BancoApuntes from "@/components/views/BancoApuntes.vue"
import MiCarrera from "@/components/views/MiCarrera.vue"
import PlanEstudios from "@/components/views/PlanEstudios.vue"
import DondeCurso from "@/components/views/DondeCurso.vue"

const currentSection = ref('anuncios')
const selectedCarrera = ref(null)
</script>

<template>
  <div class="grid max-h-screen w-screen grid-cols-12 justify-stretch overflow-hidden">
    <SideBar v-model="currentSection" />
    <div class="col-span-10 flex h-screen flex-col">
      <NavBar />
      <div class="flex-1 overflow-y-auto">
        <Anuncios v-if="currentSection === 'anuncios'" />
        <BancoApuntes v-else-if="currentSection === 'apuntes'" />
        <MiCarrera
          v-else-if="currentSection === 'carrera'"
          @ver-plan="(c) => { selectedCarrera = c; currentSection = 'plan' }"
        />
        <PlanEstudios
          v-else-if="currentSection === 'plan' && selectedCarrera"
          :carrera="selectedCarrera"
          @volver="() => { currentSection = 'carrera' }"
        />
        <DondeCurso v-else-if="currentSection === 'donde'" />
      </div>
    </div>
  </div>
</template>
