const createApp = require('../utils/createApp')
const PicGroup = require('../components/pic-group')
const { findOnePage } = require('../utils/db')

const template = `
  <div class="album-continer">
    <header>
      {{current.title}}
    </header>
    <section>
      <pic-group :pics="current.pics"></pic-group>
    </section>
    <footer>
      &copy;闲散游客
    </footer>
  </div>
`

const dbapp = async () => {
  let page = await findOnePage()
  const app = {
    template,
    data: function () {
      return {
        current: page[0],
        page,
        pageNum: 1
      }
    },
    components: { PicGroup },
    methods: {
      next: (current) => {
      }
    },
    mounted () {
    }
  }
  return createApp(app)
}
module.exports = dbapp()
