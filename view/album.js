const createApp = require('../utils/createApp')
const PicGroup = require('../components/pic-group')
const { findOnePage } = require('../utils/db')

const template = `
<div class="album-container">
  <header>
    <h3>{{current.title}}</h3>
  </header>
  <pic-group :pics="current.pics"></pic-group>
    <a class="pre">
      <span class="arrow-left"></span>
      <span class="title">{{pre.title}}</span>
    </a>
    <a class="suf" @click="next">
      <span class="title">{{suf.title}}</span>
      <span class="arrow-right"></span>
    </a>
  <footer>&copy;&nbsp;闲散游客</footer>
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
      next (current) {
        alert('next')
      }
    },
    mounted () {
      alert('mounted')
    }
  }
  return createApp(app)
}
module.exports = dbapp()
