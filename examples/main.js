import Vue from 'vue'
import App from './App.vue'
import { Button } from '../packages/tzui.js'

Vue.use(Button)

new Vue({
  render: h => h(App)
}).$mount('#app')