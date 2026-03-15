<template>
  <div
    class="bg-primary row-span-2 flex w-full items-center justify-end gap-1 p-4"
  >
    <div class="bg-enfasis rounded-3xl p-2">
      <User />
    </div>
    <div class="hover:bg-enfasis h-8 cursor-pointer rounded-3xl p-2">
      <Down />
    </div>
  </div>
</template>
<script setup>
import User from "./icons/User.vue";
import Down from "./icons/Down.vue";
</script>