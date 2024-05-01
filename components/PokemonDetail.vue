<script setup lang="ts">
  import type { pokemonSchema } from "~/schemas/pokemon";
  import { z } from "zod";
  import { badgeVariants } from "./ui/badge";

  type Pokemon = z.infer<typeof pokemonSchema>;
  const props = defineProps<{
    data: Pokemon;
  }>();

  const frontDefaultImg = props.data.sprites.front_default;
  const backDefaultImg = props.data.sprites.back_default;
  const frontShinyImg = props.data.sprites.front_shiny;
  const backShinyImg = props.data.sprites.back_shiny;

  const layout = "pokemon-id";

  const abilities = props.data.abilities.reduce((all, elm) => {
    if (!all) return elm.ability.name;
    all = `${all}, ${elm.ability.name}`;
    return all;
  }, "");
</script>
<template>
  <NuxtLayout :name="layout">
    <Card data-testid="pokemon-detail-card">
      <CardHeader>
        <CardDescription>
          <NuxtLink
            v-for="typeData in data?.types"
            :to="{ path: '/', query: { type: typeData.type.name } }"
            :key="typeData.type.name"
            :class="badgeVariants({ variant: 'default' }) + ' mr-2'"
            >{{ typeData.type.name }}</NuxtLink
          >
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex flex-wrap-reverse gap-16 justify-center">
          <div>
            <div class="flex mb-4 gap-4">
              <NuxtImg
                provider="pokemon"
                :src="frontDefaultImg"
                width="96"
                height="96"
                loading="lazy"
                decoding="auto"
              />
              <NuxtImg
                provider="pokemon"
                :src="backDefaultImg"
                width="96"
                height="96"
                loading="lazy"
                decoding="auto"
              />
              <NuxtImg
                provider="pokemon"
                :src="frontShinyImg"
                width="96"
                height="96"
                loading="lazy"
                decoding="auto"
              />
              <NuxtImg
                provider="pokemon"
                :src="backShinyImg"
                width="96"
                height="96"
                loading="lazy"
                decoding="auto"
              />
            </div>
            <div class="flex flex-col gap-5">
              <div>
                <p class="text-lg font-medium leading-none">Name</p>
                <p class="text-lg text-muted-foreground">
                  {{ props.data.name }}
                </p>
              </div>
              <div>
                <p class="text-lg font-medium leading-none">Height</p>
                <p class="text-lg text-muted-foreground">
                  {{ props.data.height }}
                </p>
              </div>
              <div>
                <p class="text-lg font-medium leading-none">Weight</p>
                <p class="text-lg text-muted-foreground">
                  {{ props.data.weight }}
                </p>
              </div>
              <div>
                <p class="text-lg font-medium leading-none">Abilities</p>
                <p class="text-lg text-muted-foreground">
                  {{ abilities }}
                </p>
              </div>
              <div>
                <p class="text-lg font-medium leading-none">Base experience</p>
                <p class="text-lg text-muted-foreground">
                  {{ props.data.base_experience }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex-1 max-w-[30rem]">
            <h3 class="text-xl">Status values</h3>
            <p class="text-muted-foreground">
              These are the default values in battles
            </p>
            <!-- <RadarChart data={data.stats} /> -->
          </div>
        </div>
      </CardContent>
    </Card>
  </NuxtLayout>
</template>

<style lang="scss" scoped></style>
