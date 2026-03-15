<script setup>
import SideBar from "@/components/SideBar.vue";
import NavBar from "@/components/NavBar.vue"
</script>

<template>
  <div class="grid max-h-screen w-screen grid-cols-12 justify-stretch">
    <SideBar />
    <div class="col-span-10 grid h-full w-full grid-rows-24 justify-stretch">
      <NavBar />
    </div>
  </div>
</template>

<style scoped></style>
