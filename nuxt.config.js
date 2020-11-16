
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.css',
    '@/assets/css/normalize.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/global-components'
  ],
  colorMode: {
    preference: 'dark',
    fallback: 'dark' // fallback value if not system preference found
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/content',
    'nuxt-i18n'
  ],
  i18n: {
    detectBrowserLanguage: false,
    strategy: 'prefix_except_default',
    defaultLocale: 'es',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English'
      },
      {
        code: 'es',
        iso: 'es-MX',
        file: 'es-MX.js',
        name: 'Español'
      }
    ],
    langDir: 'i18n/',
    lazy: true
  },
  content: {
    markdown: {
      remarkPlugins: () => [
        ['remark-wiki-link', {
          pageResolver: (name) => [name.replace(/ /g, '%20')],
          hrefTemplate: (permalink) => `/${permalink}`,
          aliasDivider: ' | '
        }],
        ['remark-mark-plus']
      ]
    },
    liveEdit: false,
    //nestedProperties: ['toc[].id'],
    apiPrefix: '_content',
    dir: 'content',
    fullTextSearchFields: ['title', 'description', 'slug', 'text'],
    yaml: {},
    csv: {}
  },
  ignore: ['content/.obsidian/', 'content/templates/' ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
