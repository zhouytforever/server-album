const Koa = require('koa')
const router = require('./router')

const server = new Koa()

server.use(async ctx => {
  ctx.body = await router(ctx.request)
})

server.listen(3000)

let date = new Date()

console.log('服务器启动···' + date.toDateString() + ' ' + date.toTimeString())
