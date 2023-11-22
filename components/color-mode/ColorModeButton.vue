<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton
      :icon="isDark ? appConfig.ui.icons.dark : appConfig.ui.icons.light"
      v-bind="$ui.button.secondary as any"
      :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
      @click="isDark = !isDark"
    />

    <template #fallback>
      <div class="h-8 w-8" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
  const colorMode = useColorMode();
  const appConfig = useAppConfig();

  // Computed

  const isDark = computed({
    get() {
      return colorMode.value === "dark";
    },
    set() {
      colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    },
  });
</script>
