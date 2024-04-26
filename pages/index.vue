<script setup lang="ts">
  import { useFavoriteStore } from "../stores/favoriteStore";

  const favoritesStore = useFavoriteStore();
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <pre>{{ favoritesStore.favoritePokemons }}</pre>
  </div>
</template>

<style lang="scss" scoped></style>
