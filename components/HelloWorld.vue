<script setup lang="ts">
  const { uiLayer } = useAppConfig();
</script>

<template>
  <div class="space-y-1.5">
    <h1>Hello World!</h1>
    <pre class="text-xs text-red-700">{{ uiLayer }}</pre>
  </div>
</template>
