<template>
  <div>


    <div style="padding: 20px">
      <g-cascader :source.sync="source"
                  :selected.sync = 'selected'
                  popover-height = "200px"
                  :load-data="loadData"
      ></g-cascader>

    </div>
    <div style="padding: 20px">
      <g-cascader :source.sync="source"
                  :selected.sync = 'selected'
                  popover-height = "200px"
                  :load-data="loadData"
      ></g-cascader>

    </div>
    <g-popover>
      <template>
        <button>点我</button>
      </template>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>


  </div>
</template>
<script>
  import Cascader from './cascader'
  import db from './db'
  import Popover from './popover'
  import {removeListener} from './click-outside'
  // 返回一个promise
  function ajax2 ( parent_id = 0 ) {
    return new Promise((success, fail) => {
      setTimeout(()=>{
        let result = db.filter((item) => item.parent_id === parent_id)
        result.forEach(node=>{
          if(db.filter(item => item.parent_id === node.id).length > 0) {
            node.isLeaf = false
          } else {
            node.isLeaf = true
          }
        })
        success(result)
      },300)
    })
  }


  export default {
    name: '',
    components: {
      'g-cascader': Cascader,
      'g-popover': Popover
    },
    data(){
      return {
        selected: [],
        source: []
      }
    },
    created () {
      ajax2(0).then((result)=> {
        console.log('fuck f result', result)
        this.source = result
      })
    },
    destroyed(){
      removeListener()
    },

    methods: {
      loadData({id} ,updateSource){
        ajax2(id).then(result => {
          updateSource(result) // 回调: 把别人传的函数调用一下
        })
      },
    }
}
</script>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  img {
    max-width: 100%
  }
  html {
    --font-size: 14px;
  }
  body {
    font-size: var(--font-size)
  }
</style>
