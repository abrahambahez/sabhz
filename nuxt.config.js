
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
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/normalize.css',
    '@/assets/css/standard.css'
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
  ],
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
            const anchorText = /#.+/
            if(permalink.search(anchorText) == -1){
                return `/${permalink}`
              } else {
                  let fixedAnchor = permalink.match(anchorText)[0].toLowerCase()
                  return `/${permalink.replace(anchorText,'')}${fixedAnchor.replace(/%20/g,'-')}`
            }
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
    fullTextSearchFields: ['title', 'slug', 'text'],
    yaml: {},
    csv: {}
  },
  hooks: {
    'content:file:beforeInsert': (document) => {
      // Regex to find wikilinks:
      const wikilinkRegExp = /\[\[.+?\]\]/g
      const wikilinkAlias = /\[\[.+?\|/g
      const cleanMarkdown = /^\s|#|\*+|>+|_+|\]+|\[+|\(http.+\)|^---|^-\s/g
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
