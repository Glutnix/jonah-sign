'use strict'

const resolve = require('path').resolve

module.exports = {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Jonah Sign',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', size: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', size: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', size: '16x16' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#413F64' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  },

  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/css/main.scss', lang: 'scss' }
  ],

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#413F64' },

  /*
  ** Point to resources
  */
  srcDir: resolve(__dirname, '..', 'resources'),

  build: {
    vendor: ['axios', 'vuetify']
  },

  plugins: [
    '~plugins/slides',
    '~plugins/axios',
    '~plugins/vuetify'
  ]
}
