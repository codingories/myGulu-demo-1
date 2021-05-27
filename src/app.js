import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false
  },
  created(){
    // setTimeout(()=>{
    //   let event = new Event('change')
    //   let inputElement = this.$el.querySelector('input')
    //   inputElement.dispatchEvent(event)
    // },3000)
  },
  methods: {
    inputChange(e){
      console.log(e)
    }
  }
})




















