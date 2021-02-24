import '@/scss/main.scss'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AppIcon from './components/common/app-icon.vue'

let handleOutsideClick
Vue.directive('closable', {
	bind (el, binding, vnode) {
		handleOutsideClick = (e) => {
			e.stopPropagation()
			const { handler, exclude } = binding.value
			let clickedOnExcludedEl = false
			exclude.forEach(refName => {
				if (!clickedOnExcludedEl) {
					const excludedEl = vnode.context.$refs[refName]
					clickedOnExcludedEl = excludedEl.contains(e.target)
				}
			})
			if (!el.contains(e.target) && !clickedOnExcludedEl) {
				vnode.context[handler]()
			}
		}
		document.addEventListener('click', handleOutsideClick)
		document.addEventListener('touchstart', handleOutsideClick)
	},

	unbind () {
		document.removeEventListener('click', handleOutsideClick)
		document.removeEventListener('touchstart', handleOutsideClick)
	}
})



// Vue.directive('click-outside', {
// 	priority: 700,
// 	bind () {
// 		let self  = this
// 		this.event = function (event) {
// 			console.log('emitting event')
// 			self.vm.$emit(self.expression,event)
// 		}
// 		this.el.addEventListener('click', this.stopProp)
// 		document.body.addEventListener('click',this.event)
// 	},

// 	unbind() {
// 		console.log('unbind')
// 		this.el.removeEventListener('click', this.stopProp)
// 		document.body.removeEventListener('click',this.event)
// 	},
// 	stopProp(event) {event.stopPropagation() }
// })

Vue.component('app-icon', AppIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
