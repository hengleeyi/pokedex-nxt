<script setup lang="ts">
  defineEmits(["toCardDetail"]);
  const router = useRouter();
  const props = defineProps<{
    name: string;
    url: string;
  }>();

  const pokemonId = props.url.split("/").slice(-2)[0];
  const handleClick = () => {
    router.push({
      path: `/pokemons/${pokemonId}`,
      query: {
        pokemonName: props.name,
      },
    });
  };
</script>

<template>
  <Card @card-click="handleClick">
    <CardHeader>
      <CardTitle>{{ props.name }}</CardTitle>
      <CardDescription>{{ props.name }}</CardDescription>
    </CardHeader>
  </Card>
</template>

<style lang="scss" scoped></style>
