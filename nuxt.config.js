export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: process.env.GHPAGES ? '/stau-app-website/' : '/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'St. Augustine CHS App',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'The official St. Augustine CHS app. Encouraging student leadership, involvement, and inclusivity within our student body one app at a time.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/persistedState.ts'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyBllofITGBhdkIlSIspxhOHDXhCOomoKeE',
          authDomain: 'staugustinechsapp.firebaseapp.com',
          databaseURL: 'https://staugustinechsapp.firebaseio.com',
          projectId: 'staugustinechsapp',
          storageBucket: 'staugustinechsapp.appspot.com',
          messagingSenderId: '448336593725',
          appId: '1:448336593725:web:46ed94f7d7db79f524fb54',
        },
        services: {
          auth: {
            initialize: {
              onAuthStateChangedMutation: 'onAuthStateChangedMutation',
              onAuthStateChangedAction: 'onAuthStateChangedAction',
            },
          },
          firestore: true,
          functions: true,
          storage: true,
        },
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
