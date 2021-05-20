const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
  it('存在.', () => {
    expect(Input).to.exist //不是false值就ok
  })

  describe('props', ()=>{
    it('接受 value', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('1234')
      vm.$destroy()
    })
    it('接受 disabled', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
      vm.$destroy()
    })

    it('接受 readonly', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
      vm.$destroy()
    })

    it('接受 error', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          error: "你错了"
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
      const errorMessage = vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerText).to.equal('你错了')
      vm.$destroy()
    })
  })
})
