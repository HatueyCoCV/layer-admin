// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  experimental: {
    localLayerAliases: true
  },
  tailwindcss: {
    viewer: false,
  }
})
