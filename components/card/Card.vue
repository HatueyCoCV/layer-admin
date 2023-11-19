<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    class?: string
  }>(),
  {
    class: "",
  }
)
</script>

<template>
  <div :class="cn('bg-card text-card-foreground rounded-xl border shadow', props.class)">
    <slot />
  </div>
</template>

<style scoped></style>
