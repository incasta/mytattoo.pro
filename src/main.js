import '@/scss/main.scss'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AppIcon from './components/common/app-icon.vue'
import VScrollLock from 'v-scroll-lock'

Vue.component('app-icon', AppIcon)
Vue.use(VScrollLock, {
  bodyScrollOptions: {
    reserveScrollBarGap: true,
  },
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
