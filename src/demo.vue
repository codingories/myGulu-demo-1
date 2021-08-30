<template>
  <div>
  <div style="margin:20px;">
    <g-table :columns="columns" :data-source="dataSource"></g-table>
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
          {id: 1, name: '方方', source: 100},
          {id: 2, name: '圆圆', source: 99},
        ]
      }
    },
}
</script>
<style>
* {margin: 0; padding: 0; box-sizing: border-box;}
</style>
