// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  vite: {
    server: {
      hmr: {
        clientPort: 24600,
        port: 24600
      }
    }  
  }
})
