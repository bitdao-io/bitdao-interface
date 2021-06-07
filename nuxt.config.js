import path from 'path'

function resolve (dir) {
  return path.join(__dirname, dir)
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BitDAO-v2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'ant-design-vue/dist/antd.css',
    '~/assets/layout.css',
    // 'ant-design-vue/lib/dropdown/style/css',
    // 'ant-design-vue/lib/menu/style/css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/plugins/antd-ui',
    '@/plugins/vue_plugins.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
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
  }
}
