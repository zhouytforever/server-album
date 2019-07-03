const MC = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const db = 'se'
const collection = 'album'

const openAlbum = (op) => {
  MC.connect(url, { useNewUrlParser: true }, async (err, client) => {
    if (err) throw err
    console.log('数据库已经连接')
    await op(client.db(db).collection(collection))
    db.close()
  })
}

const findOnePage = (pageNum = 1, pageSize = 20) => new Promise((resolve, reject) => {
  openAlbum((album) => {
    album.find().skip((pageNum - 1) * pageSize).limit(pageSize).toArray((err, arr) => {
      if (err) reject(err)
      resolve(arr)
    })
  })
})

module.exports = {
  openAlbum,
  findOnePage
}
