import { joinURL } from "ufo";
import type { ProviderGetImage } from "@nuxt/image";
import { createOperationsGenerator } from "@nuxt/image/dist/runtime/utils/index";

const operationsGenerator = createOperationsGenerator();

export const getImage: ProviderGetImage = (
  src,
  { modifiers = {}, baseURL } = {}
) => {
  if (!baseURL) {
    // also support runtime config
    baseURL = useRuntimeConfig().public.siteUrl;
  }

  const operations = operationsGenerator(modifiers);

  return {
    url: joinURL(baseURL, src + (operations ? "?" + operations : "")),
  };
};
