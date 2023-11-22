<template>
  <ClientOnly>
    <UToggle
      v-model="isDark"
      :on-icon="appConfig.ui.icons.dark"
      :off-icon="appConfig.ui.icons.light"
      :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
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
