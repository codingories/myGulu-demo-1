<template>
  <div>
    <div style="margin:20px;">
      <g-table :columns="columns" :data-source="dataSource" bordered @changeItem="x"></g-table>
    </div>
    <div style="margin:20px;">
      <g-table :columns="columns" :data-source="dataSource" bordered compact :striped="false"></g-table>
    </div>
    <div style="margin:20px;">
      <g-pager :total-page="10" :current-page.sync="currentPage" hide-if-one-page></g-pager>
    </div>
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
        currentPage: 1,
        columns: [
          {text:'姓名', field:'name'},
          {text:'分数', field:'score'},
        ],
        dataSource: [
          {id: 1, name: '方方', score: 100},
          {id: 2, name: '圆圆', score: 99},
          {id: 3, name: '张三', score: 99},
          {id: 4, name: '李四', score: 99},
          {id: 5, name: '我', score: 99},
          {id: 6, name: '的', score: 99},
          {id: 7, name: '请求', score: 99},

        ]
      }
    },
    methods: {
      x(object) {
        console.log(object)
        let {selected, item ,index} = object
        console.log(selected)
        console.log(item)
        console.log(index)
      }
    }
}
</script>
<style>
* {margin: 0; padding: 0; box-sizing: border-box;}
</style>
