export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'enSwadesFront',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/style.css','~/assets/css/v-tooltip.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/vuelidate.js', '~/plugins/v-tooltip.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  loading: '~/components/LoadingBar.vue',

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast'
  ],

  auth: {
  strategies: {
    local: {
      token: {
        property: 'token',
        // required: true,
        // type: 'Bearer'
      },
      user: {
        property: 'user',
        // autoFetch: true
      },
      endpoints: {
        login: { url: '/api/login', method: 'post' },
        logout: { url: '/api/logout', method: 'delete' },
        user: { url: '/api/user', method: 'get' }
      }
    }
  }
},

  axios: {
    // proxy: true
    baseURL:process.env.BASE_URL
  },

  // Register custom toasts
  toast: {
    position: 'top-center',
    theme: "toasted-primary",
    position: "top-right",
    duration : 3000
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
