const Router = require('koa-router')
const { findOnePage } = require('../utils/db')

const router = new Router()

router.all('/', async (ctx, next) => {
  console.log('router all')
})
router.get('/album/page/:pageNum', async (ctx, next) => {
  const page = await findOnePage(ctx.params.pageNum)
  ctx.body = page
})

module.exports = router
