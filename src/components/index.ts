import { type App } from 'vue'
import AppButton from './app-button.vue'
import FaIcon from './fa-icon.vue'

export default {
  install (app: App) {
    app.component('AppButton', AppButton)
    app.component('FaIcon', FaIcon)
  },
}

declare module 'vue' {
  export interface GlobalComponents {
    AppButton: typeof AppButton,
    FaIcon: typeof FaIcon,
  }
}
