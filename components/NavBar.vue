<script setup lang="ts"></script>
<template>
  <nav className="flex justify-between sticky top-0 p-4 bg-white dark:bg-black">
    <div className="flex gap-2 items-center">
      <NuxtLink href="/">Home</NuxtLink>
    </div>
    <div className="flex gap-2 items-center">
      <ClientOnly>
        <ToggleMode />
      </ClientOnly>
    </div>
  </nav>
</template>
