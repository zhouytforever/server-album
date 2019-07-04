const Koa = require('koa')
const path = require('path')
const router = require('./router')
const assets = require('koa-static')
const staticPath = './assets'

const server = new Koa()

server.use(assets(
  path.join(__dirname, staticPath)
))

server.use(async ctx => {
  ctx.body = await router(ctx.request)
})

server.listen(3000)

let date = new Date()

console.log('服务器启动···' + date.toDateString() + ' ' + date.toTimeString())
