const Koa = require('koa')
const path = require('path')
const router = require('./router')
const assets = require('koa-static')
const staticPath = './statics'
var bodyParser = require('koa-bodyparser')

const server = new Koa()
server
  .use(assets(
    path.join(__dirname, staticPath)
  ))
  .use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS, HEAD')
    // ctx.set('Cache-Control', 'no-cache')
    // ctx.set('Content-Encoding', 'gzip')
    // ctx.set('Content-type', 'application/json;charset=utf-8')
    await next()
  })
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

server.listen(3000)

let date = new Date()

console.log('服务器启动···' + date.toDateString() + ' ' + date.toTimeString())
