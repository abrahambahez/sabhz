
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
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    preference: 'dark',
    fallback: 'dark' // fallback value if not system preference found
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/content'
  ],
  content: {
    markdown: {
      remarkPlugins: () => [
        ['remark-wiki-link', {
          pageResolver: (name) => [name.replace(/ /g, '%20')],
          hrefTemplate: function(permalink) {
            return `/${permalink}`
          },
          aliasDivider: '|'
        }],
        ['remark-mark-plus']
      ],
      prism: {
        theme:  'prism-themes/themes/prism-vsc-dark-plus.css'
      }
    },
    liveEdit: false,
    apiPrefix: '_content',
    dir: 'content',
    fullTextSearchFields: ['title', 'description', 'slug', 'text'],
    yaml: {},
    csv: {}
  },
  hooks: {
    'content:file:beforeInsert': (document) => {
      // Regex to find wikilinks:
      const wikilinkRegExp = /\[\[.+?\]\]/g
      const wikilinkAlias = /\[\[.+?\|/g
      const cleanMarkdown = /^\s|#|\*+|>+|_+|\]+|\[+|\(http.+\)|^\-\s/g
      // array value to save
      document.internalLinks = []
      // get wikilinks values from the markdown files & append them to array
      if (document.extension === '.md') {
        const wikiLinks = (document.text.match(wikilinkRegExp) || [])
          .map(link => { document.internalLinks.push(link
            .slice(2,-2)
            .split('|')[0]) })
        // set excerpt
        document.excerpt = document.text.substring(0,180).replace(wikilinkAlias,'').replace(cleanMarkdown,'') + '...'
      }
      

    }

  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
