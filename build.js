const minify = require('html-minifier').minify
const fs = require('fs')

function doMinify(paths) {
  paths.forEach(p => {
    const source = fs.readFileSync(p, 'utf-8')
    const result = minify(source, {
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true,
      minifyCSS: true
    })

    fs.writeFileSync(p.replace('-src', ''), result, 'utf-8')
  })
}

doMinify(['./index-src.html', './anime-list-src.html'])
