<script setup lang="ts">
  import { useFavoriteStore } from "../stores/favoriteStore";
  import { typesResultSchema } from "../schemas/types";
  import type { z } from "zod";
  import { badgeVariants } from "~/components/ui/badge";
  import { pokemonsByTypeSchema } from "~/schemas/pokemonsByType";
  import PokemonCard from "~/components/PokemonCard.vue";

  type TypesResult = z.infer<typeof typesResultSchema>;
  type PokemonsByTypeResult = z.infer<typeof pokemonsByTypeSchema>;
  const favoritesStore = useFavoriteStore();

  const route = useRoute();
  const { data: pokemonsByTypeData, pending } = useFetch<PokemonsByTypeResult>(
    () =>
      route.query.typeId
        ? `https://pokeapi.co/api/v2/type/${route.query.type}/`
        : ""
  );

  const { data } = await useAsyncData<TypesResult>("allTypes", () =>
    $fetch("https://pokeapi.co/api/v2/type/")
  );

  const validation = typesResultSchema.safeParse(data.value);
  if (!validation.success) {
    console.error("response type incorrect:", validation.error);
  }

  const getTypeRoute = (typeObj: { name: string; url: string }) => {
    return {
      path: "/",
      query: {
        type: typeObj.name,
        typeId: typeObj.url.split("/").slice(-2)[0],
      },
    };
  };
</script>

<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold mb-12">Pokemon Master</h1>
    <section class="mb-8">
      <h2 class="text-xl mb-4">Types</h2>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-6">
        <NuxtLink
          v-for="pType in data?.results"
          :key="pType.name"
          :to="getTypeRoute(pType)"
          :class="badgeVariants()"
          >{{ pType.name }}</NuxtLink
        >
      </div>
    </section>
    <div v-if="pending" class="text-center text-2xl">Loading ...</div>
    <PokemonCardSection
      :data="pokemonsByTypeData"
      v-if="pokemonsByTypeData && !pending"
    />
  </div>
</template>

<style lang="scss" scoped></style>
