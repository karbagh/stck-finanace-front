import i18n from "./config/i18n";

export default {
  target: 'static',

  head: {
    title: process.env.VUE_APP_NAME,
    htmlAttrs: {
      lang: process.env.VUE_APP_I18N_LOCALE
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href:'/favicon.ico'}
    ]
  },

  css: [
    '@/assets/css/fonts.css',
    '@/assets/css/forms.css',
    '@/assets/css/public.css',
    '@/assets/css/social-icon-sprite.css',
  ],

  plugins: [
    {
      src: '~/plugins/vuelidate.js',
    },
  ],

  components: true,

  buildModules: [],

  modules: [
    'bootstrap-vue/nuxt',
    'nuxt-i18n',
  ],

  i18n: {
    vueI18nLoader: true,
    defaultLocale: process.env.VUE_APP_I18N_LOCALE,
    locales: [
      {
        code: process.env.VUE_APP_I18N_LOCALE,
        name: 'Հայերեն'
      },
    ],
    vueI18n: i18n
  },

  build: {},

  publicRuntimeConfig: {
    productionName: process.env.VUE_APP_NAME,
    apiUrl: process.env.VUE_APP_API_URL,
    categoryDefaultImage: 'defaults/emptyMain.jpg',
  }
}
