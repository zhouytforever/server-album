const Router = require('koa-router')
const { findOnePage } = require('../utils/db')

const router = new Router()

router
  .post('/login', async (ctx, next) => {
    console.log('登录')
    console.log(ctx.request.body)
    console.log(JSON.stringify(ctx.params, null, 2))
    ctx.body = { msg: 'success' }
  })
  .get('/album/page/:pageNum', async (ctx, next) => {
    console.log('album')
    const page = await findOnePage(ctx.params.pageNum)
    ctx.body = page
  })

module.exports = router
