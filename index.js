const Koa = require('koa')
const path = require('path')
const router = require('./router')
const assets = require('koa-static')
const staticPath = './statics'

const server = new Koa()
server.use(assets(
  path.join(__dirname, staticPath)
))

server.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://176.122.150.118:8080')
  ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  await next()
})

server.use(router.routes())

server.listen(3000)

let date = new Date()

console.log('服务器启动···' + date.toDateString() + ' ' + date.toTimeString())
