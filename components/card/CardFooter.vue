<script lang="ts" setup>
  const props = withDefaults(
    defineProps<{
      class?: string;
    }>(),
    {
      class: "",
    }
  );
</script>

<template>
  <div :class="cn('flex items-center p-6 pt-0', props.class)">
    <slot />
  </div>
</template>

<style scoped></style>
