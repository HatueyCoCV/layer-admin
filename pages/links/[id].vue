<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div>
    Page: foo - id: <code>{{ route.params.id }}</code>
  </div>
</template>

<style scoped></style>
