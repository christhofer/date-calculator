import DatePicker from './DatePicker'
import Numeric from './Numeric'

export default {
  install (Vue) {
    Vue.component('input-date-picker', DatePicker)
    Vue.component('input-numeric', Numeric)
  },
}
