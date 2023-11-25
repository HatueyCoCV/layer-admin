<script lang="ts" setup>
  const route = useRoute();
  const router = useRouter();
</script>

<template>
  <div class="container mx-auto py-10">
    Page: {{ route.params?.slug }}
    <UButton @click="router.back()">Go back</UButton>
  </div>
</template>

<style scoped></style>
