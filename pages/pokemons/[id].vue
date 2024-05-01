<script setup lang="ts">
  import type { z } from "zod";
  import PokemonDetail from "@/components/PokemonDetail.vue";
  import type { pokemonSchema } from "@/schemas/pokemon";

  type Pokemon = z.infer<typeof pokemonSchema>;
  const route = useRoute();

  const { data: pokemonData, pending } = useFetch<Pokemon>(
    () => `https://pokeapi.co/api/v2/pokemon/${route.params.id}/`
  );
</script>

<template>
  <div v-if="pending && !pokemonData" class="text-center text-2xl">
    Loading ...
  </div>
  <PokemonDetail v-if="pokemonData" :data="pokemonData" />
</template>

<style lang="scss" scoped></style>
