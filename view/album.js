const createApp = require('../utils/createApp')
const PicGroup = require('../components/pic-group')
const { findOnePage } = require('../utils/db')

const template = `
<div class="album-continer">
  <header>
    < class="pre">{{pre.title}}</a>
    <h2>{{current.title}}</h2>
    <a class="suf">{{suf.title}}</a>
  </header>
  <pic-group :pics="current.pics"></pic-group>
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
        currentIndex: 0,
        page,
        pageNum: 1
      }
    },
    components: { PicGroup },
    computed: {
      current: ({ currentIndex, page }) => page[currentIndex],
      pre: ({ currentIndex, page }) => currentIndex - 1 < 0 ? { title: '没有了' } : page[currentIndex - 1],
      suf: ({ currentIndex, page }) => currentIndex === page.length - 1 ? { title: '没有了' } : page[currentIndex + 1]
    },
    methods: {
      next: (current) => {
      }
    },
    mounted () {
      alert('mounted')
    }
  }
  return createApp(app)
}
module.exports = dbapp()
