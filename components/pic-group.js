const Vue = require('vue')

const template = `
<section class="pic-group">
  <div v-for="e in pics" class="pic-container">
    <img :src="e" class="pic"></img>
  </div>
</section>
`
const app = {
  template,
  props: ['pics']
}

module.exports = Vue.component('pic-group', app)
