// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === "development" },
  modules: ["@nuxt/ui"],
  experimental: {
    localLayerAliases: true,
  },
  tailwindcss: {
    viewer: process.env.NODE_ENV === "development",
  },
})
