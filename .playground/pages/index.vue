<script setup>
  const links = [
    {
      label: "DocsSearch",
      to: "/pro/components/docs/docs-search",
      icon: "i-heroicons-document-magnifying-glass",
      children: [
        {
          label: "DocsSearchButton",
          to: "/pro/components/docs/docs-search-button",
          badge: "New",
        },
        {
          label: "DocsSearchInput",
          to: "/pro/components/docs/docs-search-input",
        },
        {
          label: "DocsSearchResults",
          to: "/pro/components/docs/docs-search-results",
        },
      ],
    },
    {
      label: "DocsSearchButton",
      to: "/pro/components/docs/docs-search-button",
      icon: "i-heroicons-magnifying-glass",
      badge: "New",
    },
    {
      label: "DocsSurround",
      to: "/pro/components/docs/docs-surround",
      icon: "i-heroicons-arrows-right-left",
    },
    {
      label: "DocsToc",
      to: "/pro/components/docs/docs-toc",
      icon: "i-heroicons-list-bullet",
    },
  ];
</script>

<template>
  <div class="container mx-auto py-20">
    <NavigationTree :links="links" />
  </div>
</template>
