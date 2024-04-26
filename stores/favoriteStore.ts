import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

type FavorPokemon = {
  id: number;
  name: string;
};

export const useFavoriteStore = defineStore("favorites", () => {
  const favoritePokemons = useLocalStorage<FavorPokemon[]>('favoritePokemons', [{id: 1, name: 'bulbasaur'}])

  return {
    favoritePokemons,
  };
});
