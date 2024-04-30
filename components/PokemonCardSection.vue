<script setup lang="ts">
  import type { z } from "zod";
  import type { pokemonsByTypeSchema } from "~/schemas/pokemonsByType";

  type PokemonsByTypeResult = z.infer<typeof pokemonsByTypeSchema>;

  const props = defineProps<{
    data: PokemonsByTypeResult;
  }>() 
</script>

<template>
  <section>
    <div class="grid grid-cols-1 gap-2 md:grid-cols-6">
      <PokemonCard
        v-for="pokemonData in props.data.pokemon"
        :key="pokemonData.pokemon.name"
        :name="pokemonData.pokemon.name"
        :url="pokemonData.pokemon.url"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
