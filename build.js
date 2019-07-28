const minify = require('html-minifier').minify
const fs = require('fs')

const source = fs.readFileSync('./index-src.html', 'utf-8')
const result = minify(source, {
  collapseWhitespace: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
  minifyCSS: true
})

fs.writeFileSync('./index.html', result, 'utf-8')
