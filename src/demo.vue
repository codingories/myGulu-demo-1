<template>
  <div>
    <p>{{selected && selected[0] && selected[0].name || '空'}}</p>
    <p>{{selected && selected[1] && selected[1].name || '空'}}</p>
    <p>{{selected && selected[2] && selected[2].name || '空'}}</p>

    <div style="padding: 20px">
      <g-cascader :source.sync="source"
                  :selected.sync = 'selected'
                  popover-height = "200px"
                  :load-data="loadData"
      ></g-cascader>
<!--      @update:selected="xxx"-->

      {{source}}
    </div>

  </div>
</template>
<script>
  import Cascader from './cascader'
  import db from './db'

  // 返回一个timeId
  // function ajax1 ( parent_id = 0 , success, fail) {
  //   let id = setTimeout(() => {
  //     let result = db.filter((item) => item.parent_id === parent_id)
  //     success(result)
  //   }, 3000)
  //   return id
  // }

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
      'g-cascader': Cascader
    },
    data(){
      return {
        // ['浙江', '杭州']
        selected: [],
        source: []
      }
    },
    created () {
      // ajax1(0, (result) => {
      //   this.source = result
      // })

      // ajax2(0).then((result)=> {
      //   console.log('fuck f result', result)
      //   this.source = result
      // })

      this.source = db

    },

    methods: {
      loadData({id} ,updateSource){
        ajax2(id).then(result => {
          updateSource(result) // 回调: 把别人传的函数调用一下
        })
      },
      // xxx() {
      //   const id = this.selected[0].id
      //   ajax2(id).then((result)=>{
      //     let lastLevelSelected = this.source.filter(item => item.id===id)[0]
      //     // lastLevelSelected.children = result
      //     this.$set(lastLevelSelected, 'children', result)
      //     // this.$set(lastLevelSelected, 'children', result)
      //   })
      // }
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
