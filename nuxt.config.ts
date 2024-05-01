// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
    "@nuxt/image",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  alias: {
    "@": resolve(__dirname),
  },
  colorMode: {
    preference: "dark",
    classSuffix: "",
  },
  experimental: {
    payloadExtraction: true,
  },
  image: {
    providers: {
      myProvider: {
        name: "pokemon", // optional value to overrider provider name
        provider: "~/providers/pokemon.ts", // Path to custom provider
        options: {
          // ... provider options
          // baseURL: "https://raw.githubusercontent.com",
        },
      },
    },
  },
});
