const Koa = require('koa')
const router = require('./router')

const server = new Koa()

server.use(async ctx => {
  ctx.body = await router(ctx.request)
})

server.listen(3000)
