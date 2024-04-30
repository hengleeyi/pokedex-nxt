<script setup lang="ts"></script>
<template>
  <nav class="flex justify-between sticky top-0 p-4 bg-white dark:bg-black h-[4.5rem]">
    <div class="flex gap-2 items-center">
      <NuxtLink href="/">Home</NuxtLink>
    </div>
    <div class="flex gap-2 items-center">
      <ClientOnly>
        <ToggleMode />
      </ClientOnly>
    </div>
  </nav>
</template>
