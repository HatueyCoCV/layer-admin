<script setup>
  const links = [
    {
      label: "DocsAccordion",
      icon: "i-heroicons-academic-cap",
      to: "/",
    },
    {
      label: "DocsSearch",
      icon: "i-heroicons-document-magnifying-glass",
      children: [
        {
          label: "DocsSearchButton",
          to: "/path/docs-search-button",
          badge: "New",
        },
        {
          label: "DocsSearchInput",
          to: "/path/docs-search-input",
        },
        {
          label: "DocsSearchResults",
          to: "/path/docs-search-results",
        },
      ],
    },
    {
      label: "DocsSearchButton",
      to: "/path/docs-search-button",
      icon: "i-heroicons-magnifying-glass",
      badge: "New",
    },
    {
      label: "DocsSurround",
      to: "/path/docs-surround",
      icon: "i-heroicons-arrows-right-left",
    },
    {
      label: "DocsToc",
      to: "/path/docs-toc",
      icon: "i-heroicons-list-bullet",
    },
  ];
</script>

<template>
  <div class="container mx-auto py-20">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div class="col-span-1">
        <NavigationTree :links="links" :default-open="false" />
      </div>
    </div>
  </div>
</template>
