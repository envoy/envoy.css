var postcss = require('postcss')

module.exports = {
  use: [
    'postcss-import',
    'postcss-custom-media',
    'postcss-custom-properties',
    'postcss-calc',
    'postcss-discard-comments',
    'postcss-remove-root',
    'autoprefixer',
    'postcss-reporter'
  ],
  input: 'src/envoy.css',
  dir: 'css'
}
