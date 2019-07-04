const view = require('../view')

const router = async (req) => {
  let result = view
  switch (req.url) {
    case '/album':
      result = require('../view/album')
      break
    default: result = view
  }
  return result
}

module.exports = router
