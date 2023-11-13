<script setup lang="ts">
const { myLayer } = useAppConfig()
</script>

<template>
  <div class="space-y-1.5">
    <h1>Hello World!</h1>
    <pre class="text-red-700 text-xs">{{ myLayer }}</pre>
  </div>
</template>
