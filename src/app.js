import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false
  }
})

{
  // 直接打印Button，发现是一个对象,我们没办法通过对象实例化东西
  console.log(Button)
  // 我们需要用Vue构造一个函数

}
