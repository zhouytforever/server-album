const Vue = require('vue')

const template = `
<section>
  <div v-for="e in pics">
    <img :src="e"></img>
  </div>
</section>
`
const app = {
  template,
  props: ['pics']
}

module.exports = Vue.component('pic-group', app)
