<script lang="ts" setup>
const items = [
  {
    label: "Dashboard",
    to: "/",
    icon: "i-heroicons-home",
  },
  {
    label: "Team",
    to: "/admin",
    icon: "i-heroicons-users",
  },
  {
    label: "Projects",
    to: "/projects",
    icon: "i-heroicons-folder",
    children: [
      {
        label: "Calendar",
        to: "/links/11",
        icon: "i-heroicons-calendar",
      },
      {
        label: "Documents",
        to: "/links/22",
        icon: "i-heroicons-document-text",
      },
    ],
  },
  {
    label: "Reports",
    to: "/reports",
    icon: "i-heroicons-chart-pie",
  },
]
</script>

<template>
  <div class="container mx-auto p-10">
    <UDivider
      class="my-1"
      icon="i-heroicons-arrow-path-rounded-square"
    />

    <NavigationTree
      :links="items"
      :default-open="false"
    />

    <UDivider
      class="my-1"
      icon="i-heroicons-arrow-path-rounded-square"
    />
  </div>
</template>

<style scoped></style>
