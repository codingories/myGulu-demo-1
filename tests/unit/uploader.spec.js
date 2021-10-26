import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from "@vue/test-utils"
import Uploader from '../../src/uploader'
import Vue from "vue"
chai.use(sinonChai)


describe('Uploader.vue', () => {
  it('存在', () => {
    expect(Uploader).to.exist
    // const wrapper = shallowMount(Button, {
    //   propsData: {icon: 'settings'}
    // })
    // expect(Button).to.exist //不是false值就ok

  })
  it('可以上传一个文件', ()=> {
    const wrapper = mount(Uploader, {
      propsData: {
        name: 'file',
        action: '/xxx',
        parseResponse: ()=> {}
      },
      slots: {
        default: `<button id="x">click me</button>`
      }
    })
    console.log(wrapper.html())
    wrapper.find('#x').trigger('click')
    console.log(wrapper.html())

    // js把文件放到input
    // 封装的对象
    let inputWrapper = wrapper.find('input[type="file"]')
    // 元素的对象
    let input = inputWrapper.element
    // 直接往input里放两个参数
    let file1 = new File(['xxxxxxxxx'], 'xxx.txt')
    let file2 = new File(['yyyyyyyyy'], 'yyy.txt')
    // 只有新浏览器才支持，声明DataTransfer对象add
    console.log(`new DataTransfer();`,new DataTransfer())
    // const data = new DataTransfer();
    // console.log('fuck data', data)
    data.items.add(file1)
    data.items.add(file2)
    input.files = data.files;

  })
})
