import Vue from 'vue'
import App from './App'
import './registerServiceWorker'

import moment from 'moment'

import Component from './components'
import Directives from './directives'

Vue.config.productionTip = false

Vue.use(Component)
Vue.use(Directives)

Object.defineProperty(Vue.prototype, '$moment', { value: moment })

new Vue({
  render: function (h) {
    return h(App)
  },
}).$mount('#app')
