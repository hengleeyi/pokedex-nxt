<script setup lang="ts">
  import type { HTMLAttributes } from "vue";
  import { cn } from "@/lib/utils";

  const props = defineProps<{
    class?: HTMLAttributes["class"];
    onCardClick?: (payload: MouseEvent) => void;
  }>();

  defineEmits(["cardClick"]);

  const classAtr = cn(
    "rounded-lg border bg-card text-card-foreground shadow-sm",
    props.onCardClick && "cursor-pointer",
    props.onCardClick && "hover:dark:bg-gray-900 hover:bg-slate-100",
    props.class
  );
</script>

<template>
  <div :class="classAtr" @click="$emit('cardClick')">
    <slot />
  </div>
</template>
