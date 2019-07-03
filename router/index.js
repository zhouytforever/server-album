const view = require('../view')
const fs = require('fs')

const router = async (req) => {
  let result = view
  console.log(req.url)
  switch (req.url) {
    case '/favicon.ico':
      console.log('favicon.ico')
      console.log(fs.readFileSync(new URL('/home/joyt/project/album-server/assets/favicon.ico')))
      result = fs.readFileSync(new URL('/home/joyt/project/album-server/assets/favicon.ico'))
      break
    default: result = view
  }
  return result
}

module.exports = router
