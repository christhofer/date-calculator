import Vue from 'vue'
import App from './App'
import './registerServiceWorker'

import moment from 'moment'

import Component from './components'

Vue.config.productionTip = false

Vue.use(Component)

Object.defineProperty(Vue.prototype, '$moment', { value: moment })

new Vue({
  render: function (h) {
    return h(App)
  },
}).$mount('#app')
