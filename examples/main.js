import Vue from 'vue'
import App from './App.vue'
import tzui from '../packages/tzui'
import router from './router'

Vue.use(tzui)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')