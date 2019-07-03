const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()

const commonTemplate = (html) => `
<!DOCTYPE html>
<html>
  <head>
    <title>偷偷看</title>
    <meta charset="utf-8"></meta>
    <link rel="icon" href="favicon.ico"></link>
  </head>
  <body>${html}</body>
`
const createApp = (template) => {
  let vueApp = new Vue({ template })
  return new Promise((resolve, reject) => {
    renderer.renderToString(vueApp, (err, html) => {
      if (err) reject(err)
      resolve(commonTemplate(html))
    })
  })
}
module.exports = {
  commonTemplate,
  createApp
}
