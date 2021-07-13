import path from 'path'
import i18n from './locales'

function resolve (dir) {
  return path.join(__dirname, dir)
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BitDAO',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: 'BitDAO' },
      { hid: 'description', name: 'description', content: 'Supporting open finance and a decentralized tokenized economy.' },
      { name: 'og:title', content: 'BitDAO' },
      { name: 'og:description', content: 'Supporting open finance and a decentralized tokenized economy.' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://www.bitdao.io/' },
      { name: 'og:image', content: 'https://www.bitdao.io/twitter-card.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://www.bitdao.io/' },
      { name: 'twitter:title', content: 'BitDAO' },
      { name: 'twitter:description', content: 'Supporting open finance and a decentralized tokenized economy.' },
      { name: 'twitter:creator', content: '@BitDAO_Official' },
      { name: 'twitter:image', content: 'https://www.bitdao.io/twitter-card.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/layout.css',
    '~/assets/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vue_plugins.js',
    { src: '~plugins/ga.js', mode: 'client' },
    { src: '@/plugins/element-ui', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
    'nuxt-i18n',
    '@nuxtjs/gtm'
  ],
  gtm: {
    enabled: true,
    id: 'G-9K9NSNF0QY'
  },
  i18n,
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs',
      [
        'markdown-it-anchor',
        {
          level: 1,
          // slugify: string => string,
          permalink: true,
          // renderPermalink: (slug, opts, state, permalink) => {},
          permalinkClass: 'header-anchor',
          permalinkSymbol: '¶',
          permalinkBefore: true
        }
      ],
      'markdown-it-toc-done-right'
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // proxy: true
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ['component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    },
    // transpile: ['ant-design-vue'],
    // babel: {
    //   plugins: [
    //     [
    //       'import',
    //       {
    //         libraryName: 'ant-design-vue',
    //         libraryDirectory: 'es',
    //         // 选择子目录 例如 es 表示 ant-design-vue/es/component
    //         // lib 表示 ant-design-vue/lib/component
    //         style: true
    //         // 默认不使用该选项，即不导入样式 , 注意 ant-design-vue 使用 js 文件引入样式
    //         // true 表示 import  'ant-design-vue/es/component/style'
    //         // 'css' 表示 import 'ant-design-vue/es/component/style/css'
    //       }
    //     ]
    //   ]
    // },
    // loaders: {
    //   less: {
    //     lessOptions: {
    //       javascriptEnabled: true,
    //       // modifyVars 可用来自定义主题
    //       modifyVars: {
    //         'primary-color': '#41b883',
    //         'layout-body-background': '#fff'
    //       }
    //     }
    //   }
    // },
    // postcss: [
    //   require('postcss-px2rem')({
    //     remUnit: 15
    //   })
    // ],
    extend (config, { isDev, isClient }) {
      if (isClient) {
        config.module.rules.forEach((rule) => { // 移除默认处理svg的配置
          if (~rule.test.source.indexOf('|svg')) {
            rule.exclude = [resolve('icons/svg')]
          }
        })

        config.module.rules.push({ // 使用svg
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
          include: [resolve('icons/svg')], // include => 只处理指定的文件夹下的文件
          options: {
            symbolId: 'icon-[name]'
          }
        })
      }
    }
  },
  proxy: {
    '/api': {
      target: 'http://www.public-test-1.bitdao.io',
      changeOrigin: true
    },
    '/api-test': {
      target: 'http://www.public-test-1.bitdao.io',
      changeOrigin: true
    }
  }
}
