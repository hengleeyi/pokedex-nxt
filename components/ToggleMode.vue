<script setup lang="ts">
  import { Icon } from "@iconify/vue";
  const mode = useColorMode();
</script>

<template>
  <Button
    variant="outline"
    size="icon"
    v-if="$colorMode.preference === 'light'"
    @click="$colorMode.preference = 'dark'"
    class="hover:cursor-pointer hover:text-primary"
  >
    <Icon icon="lucide:moon" :ssr="true" class="w-6 h-6"/>
  </Button>
  <Button
    variant="outline"
    size="icon"
    v-if="$colorMode.preference === 'dark'"
    @click="$colorMode.preference = 'light'"
    class="hover:cursor-pointer hover:text-primary"
  >
    <Icon icon="lucide:sun" :ssr="true" class="w-6 h-6"/>
  </Button>
</template>
