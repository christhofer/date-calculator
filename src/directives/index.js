import SelectOnFocus from './SelectOnFocus'

export default {
  install (Vue) {
    Vue.directive('select-on-focus', SelectOnFocus)
  },
}
