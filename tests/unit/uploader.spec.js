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
})
