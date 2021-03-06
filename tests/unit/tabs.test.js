const expect = chai.expect;
import Vue from 'vue'
import Tabs from '@/tabs/tabs'
import TabsHead from '@/tabs/tabs-head'
import TabsBody from '@/tabs/tabs-body'
import TabsItem from '@/tabs/tabs-item'
import TabsPane from '@/tabs/tabs-pane'

Vue.config.productionTip = false
Vue.config.devtools = false

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

describe('Tabs', (done) => {
  it('存在.', () => {
    expect(Tabs).to.exist //不是false值就ok
  })

  it('接受 selected 属性', (done)=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
       <g-tabs selected = "finance">
        <g-tabs-head>
          <g-tabs-item name="woman"> 美女 </g-tabs-item>
          <g-tabs-item name="finance"> 财经 </g-tabs-item>
          <g-tabs-item name="sports"> 体育 </g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="woman">美女相关资讯</g-tabs-pane>
          <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
          <g-tabs-pane name="sports">体育相关资讯</g-tabs-pane>
        </g-tabs-body>
  `
    const vm = new Vue({
      el: div
    })
    setTimeout(()=>{
      let x = vm.$el.querySelector('.tabs-item[data-name="finance"]')
      expect(x.classList.contains('active')).to.be.true
      done()
    }, 1000)
  })

  it('可以接受 direction prop', () => {

  })
})
