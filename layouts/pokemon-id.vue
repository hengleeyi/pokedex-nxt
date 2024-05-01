<script setup lang="ts">
  import { useRoute } from "vue-router";

  const route = useRoute();
  const pokemonName = route.query.pokemonName as string;
  const capitalName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
</script>
<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold mb-4">{{ capitalName }}</h1>
    <slot />
  </div>
</template>
