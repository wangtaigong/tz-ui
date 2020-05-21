import Vue from 'vue'
import App from './App.vue'
import tzui from '../packages/tzui'

Vue.use(tzui)

new Vue({
  render: h => h(App)
}).$mount('#app')