import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Cascader from './cascader'

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-cascader', Cascader)
Vue.component('g-col', Col)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-header', Header)
Vue.component('g-icon', Icon)
Vue.component('g-input', Input)
Vue.component('g-layout', Layout)
Vue.component('g-popover', Popover)
Vue.component('g-row', Row)
Vue.component('g-sider', Sider)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-toast', Toast)


Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    source: [{
      name: '浙江',
      children: [
        {
          name: '杭州',
          children: [
            { name: '上城' },
            { name: '下城' },
            { name: '江干' },
          ]
        },
        {name: '嘉兴',
          children: [
            { name: '南湖' },
            { name: '秀洲' },
            { name: '嘉善' },
          ]
        },
      ],
    }, {
      name: '福建',
      children: [
        {name: '福州',
          children: [
            { name: '鼓楼' },
            { name: '台山' },
            { name: '仓山' },
          ]},
        {name: '厦门'},
        {name: '莆田'},
        {name: '三明'},
        {name: '泉州'},
      ],
    },
      {
        name: '安徽',
        children: [
          {
            name: '合肥',
            children: [{
              name: '瑶海'
            },{
              name: '庐阳'
            }]
          }
        ]
      }

    ]
  },
  created(){

  },
  methods: {
    showToast1(){
      this.showToast('top')
    },
    showToast2(){
      this.showToast('middle')

    },
    showToast3(){
      this.showToast('bottom')
    },

    showToast( position ){
      this.$toast('你的智商需要充值!', {
        position: position,
        enableHtml: true,
        closeButton: {
          text: '已充值',
          callback () {
            console.log('他说已经充值智商了')
          }
        },
        autoClose:  3,
      })
    }
  }
})




















