import '@/scss/main.scss';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import AppIcon from './components/common/app-icon.vue';
import VScrollLock from 'v-scroll-lock';
import VueFlicking from "@egjs/vue-flicking";
import Sticky from 'vue-sticky-directive';
import VueTippy, { TippyComponent } from "vue-tippy";
import VueClipboard from 'vue-clipboard2';


Vue.use(VueClipboard);

// Vue.use(VueTippy);
// Vue.component("tippy", TippyComponent);

Vue.use(VueTippy, {
  directive: "tippy", // => v-tippy
  flipDuration: 0,
  popperOptions: {
    modifiers: {
      preventOverflow: {
        enabled: false
      }
    }
  }
});
Vue.component("tippy", TippyComponent);
// import "tippy.js/themes/translucent.css";

Vue.use(Sticky);

Vue.use(VueFlicking);

Vue.component('app-icon', AppIcon);


Vue.use(VScrollLock, {
  bodyScrollOptions: {
    reserveScrollBarGap: true,
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
