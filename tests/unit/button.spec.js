// import chai, {expect} from 'chai'
// import sinon from 'sinon'
// import sinonChai from 'sinon-chai'
// import {shallowMount, mount} from "@vue/test-utils"
// import Button from '@/button/button.vue'
// import Vue from "vue"
// chai.use(sinonChai)
//
//
// describe('Button.vue', () => {
//   it('存在', () => {
//     const wrapper = shallowMount(Button, {
//       propsData: {icon: 'settings'}
//     })
//     expect(Button).to.exist //不是false值就ok
//
//   })
//   it('可以设置icon.', () => {
//     const wrapper = mount(Button, {
//       propsData: {
//         icon: 'settings'
//       }
//     })
//     const useElement = wrapper.find('use')
//     expect(useElement.attributes()['href']).to.equal('#i-settings')
//   })
//   it('可以设置loading.', () => {
//     const wrapper = mount(Button, {
//       attachTo: document.body,
//       propsData: {
//         icon: 'settings',
//         loading: true
//       }
//     })
//     const vm = wrapper.vm
//     const useElements = vm.$el.querySelectorAll('use')
//     expect(useElements.length).to.equal(1)
//     expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
//   })
//
//   it('icon 默认的 order 是 1', () => {
//     const wrapper = mount(Button, {
//       attachTo: document.body,
//       propsData: {
//         icon: 'settings',
//       }
//     })
//     const vm = wrapper.vm
//     const icon = vm.$el.querySelector('svg')
//     expect(getComputedStyle(icon).order).to.eq('1')
//    })
//   it('设置 iconPosition 可以改变 order', () => {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'settings',
//         iconPosition: 'right'
//       }
//     }).$mount(div)
//     const icon = vm.$el.querySelector('svg')
//     expect(getComputedStyle(icon).order).to.eq('2')
//     vm.$el.remove()
//     vm.$destroy()
//   })
//   it('点击 button 触发 click 事件', () => {
//
//     const wrapper = mount(Button, {
//       propsData: {
//         icon: 'settings',
//       }
//     })
//
//     const vm = wrapper.vm
//
//     const callback = sinon.fake();
//     vm.$on('click', callback)
//     vm.$el.click()
//     expect(callback).to.have.been.called
//   })
//
//
// })
