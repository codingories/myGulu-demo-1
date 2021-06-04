import Toast from "./toast"

export default {
  install (Vue, options) {
    Vue.prototype.$toast = function ( message ) {
      // 下面两句死记硬背
      let Constructor = Vue.extend( Toast )
      let toast = new Constructor()
      // 传了一个插槽
      toast.$slots.default = [message]
      // 如果不mount,toast所有的生命周期的钩子都不会执行
      toast.$mount()
      // mount之后把元素放到body里面
      document.body.appendChild(toast.$el)
    }
  }
}


