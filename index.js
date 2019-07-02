const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()

const Koa = require('koa')

const server = new Koa()

const commonTemplate = (html) => `
<!DOCTYPE html>
<html lang="en">
  <head><title>Hello</title></head>
  <body>${html}</body>
</html>
`

const template = `
<div>Hello vue app</div>
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

server.use(async ctx => {
  ctx.body = await createApp(template)
})

server.listen(3000)
