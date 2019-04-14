export default {
  bind (el) {
    el.__onFocusHandler__ = event => {
      event.target.select()
    }
    el.addEventListener('focus', el.__onFocusHandler__)
  },
  unbind (el) {
    el.removeEventListener('focus', el.__onFocusHandler__)
  },
}
