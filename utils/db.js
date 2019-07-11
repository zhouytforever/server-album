const MC = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const db = 'se'
const collection = 'album'

const openAlbum = (op) => {
  MC.connect(url, { useNewUrlParser: true }, async (err, client) => {
    if (err) throw err
    await op(client.db(db).collection(collection))
    client.close()
  })
}

const findOnePage = (pageNum = 1, pageSize = 3) => new Promise((resolve, reject) => {
  openAlbum((album) => {
    console.log('数据库已经连接')
    album.find().skip((pageNum - 1) * pageSize).limit(pageSize).toArray((err, arr) => {
      console.log('查找第[' + pageNum + ']页')
      if (err) reject(err)
      resolve(arr)
    })
  })
})

module.exports = {
  openAlbum,
  findOnePage
}
