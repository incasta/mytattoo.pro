import '@/scss/main.scss'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AppIcon from './components/common/app-icon.vue'

Vue.component('app-icon', AppIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

