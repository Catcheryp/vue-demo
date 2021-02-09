import Vue from 'vue'
import App from './App'
import router from './router';

Vue.config.productionTip = false

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })

new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>',
  render: h => h(App),
}).$mount('#appTitle');

