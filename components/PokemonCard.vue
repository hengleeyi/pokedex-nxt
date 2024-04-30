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
      path: `/pokemon/${pokemonId}`,
    });
  };
</script>

<template>
  <Card @card-click="handleClick">
    <CardHeader>
      <CardTitle>{{ props.name }}</CardTitle>
    </CardHeader>
  </Card>
</template>

<style lang="scss" scoped></style>
