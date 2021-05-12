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

import chai from 'chai'
const expect = chai.expect

{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  button.$mount('')
  let useElement = button.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-settings')
}

{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  button.$mount('')
  let useElement = button.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
}
