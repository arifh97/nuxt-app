
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta:{
      title: 'Next 3 Practice',
      
    },
    css:[
        '@/assets/css/tailwind.css'
    ],
    build: {
        postcss: {
          postcssOptions:{
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
              },
          },
        },
      }
})
