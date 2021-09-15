<template>
  <div>
    <div style="margin:20px;">
      <g-table :columns="columns" :data-source="dataSource" bordered :selectedItems.sync="selected" :order-by.sync="orderBy"
      @update:orderBy="x" :loading="loading" :height="400" expend-field="description"
               checkable
      ></g-table>
    </div>
<!--    <div style="margin:20px;">-->
<!--      <g-table :columns="columns" :data-source="dataSource" bordered compact :striped="false"></g-table>-->
<!--    </div>-->
<!--    <div style="margin:20px;">-->
<!--      <g-pager :total-page="10" :current-page.sync="currentPage" hide-if-one-page></g-pager>-->
<!--    </div>-->
  </div>
</template>
<script>
  import Gpager from './pager'
  import GTable from './table'

  export default {
    name: '',
    components: {
      'g-pager':Gpager,
      'g-table': GTable
    },

    data(){
      return {
        loading: false,
        selectedItems: [],
        currentPage: 1,
        columns: [
          {text:'姓名', field:'name', width: 100},
          {text:'分数', field:'score' },
        ],
        orderBy: {
          score: 'desc'
        },
        selected: [],
        dataSource: [
          {id: 1, name: '方方', score: 100, description: '11111'},
          {id: 2, name: '圆圆', score: 99, description: '22222'},
          {id: 3, name: '张三', score: 99},
          {id: 4, name: '李四', score: 99},
          {id: 5, name: '我', score: 99},
          {id: 6, name: '的', score: 99},
          {id: 7, name: '请求', score: 99},
          {id: 8, name: '我', score: 99},
          {id: 9, name: '的', score: 99},
          {id: 10, name: '请求', score: 99},
          {id: 11, name: '方方', score: 100},
          {id: 12, name: '圆圆', score: 99},
          {id: 13, name: '张三', score: 99},
          {id: 14, name: '李四', score: 99},
          {id: 15, name: '我', score: 99},
          {id: 16, name: '的', score: 99},
          {id: 17, name: '请求', score: 99},
          {id: 18, name: '我', score: 99},
          {id: 19, name: '的', score: 99},
          {id: 20, name: '请求', score: 99},
        ]
      }
    },
    methods: {
      // x(object) {
      //   console.log(object)
      //   let {selected, item ,index} = object
      //   console.log(selected)
      //   console.log(item)
      //   console.log(index)
      // }
      x() {
        console.log('x')
        this.loading = true
        setTimeout(()=>{
          this.dataSource = this.dataSource.sort((a, b) => a.score - b.score)
          this.loading = false
        },3000)
      }
    }
}
</script>
<style>
* {margin: 0; padding: 0; box-sizing: border-box;}
</style>
