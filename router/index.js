const view = require('../view')
const fs = require('fs')

const router = async (req) => {
  let result = view
  console.log(req.url)
  switch (req.url) {
    case '/favicon.ico':
      result = fs.readFileSync(new URL('file://localhost/home/joyt/project/album-server/assets/favicon.ico'))
      break
    case '/album':
      result = require('../view/album')
      break
    default: result = view
  }
  return result
}

module.exports = router
