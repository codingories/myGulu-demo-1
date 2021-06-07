import Toast from "./toast"

export default {
  install (Vue, options) {
    Vue.prototype.$toast = function ( message, toastOptions ) {
      let Constructor = Vue.extend( Toast )
      let toast = new Constructor({
        // 把closeButton从用户的选项里拿出来，作为propsData传给toast
        propsData: {
          closeButton: toastOptions.closeButton
        }
      })
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}


