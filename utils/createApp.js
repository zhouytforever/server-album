const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()

const commonTemplate = (html, title = '偷偷看', css = 'default.css') => `
<!DOCTYPE html>
<html>
  <head>
    <title>${title}</title>
    <meta charset="utf-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="favicon.ico"></link>
    <link rel="stylesheet" href="${css}"></link>
  </head>
  <body>${html}</body>
`
const createApp = (vueObj) => {
  let vueApp = new Vue(vueObj)
  return new Promise((resolve, reject) => {
    renderer.renderToString(vueApp, (err, html) => {
      if (err) reject(err)
      resolve(commonTemplate(html))
    })
  })
}

module.exports = createApp
