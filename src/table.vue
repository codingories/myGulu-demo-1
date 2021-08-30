<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th v-for="column in columns">
            {{column.text}}
          </th>
        </tr>
      </thead>
      <tbody v-for="item,index in dataSource">
        <td>{{index}}</td>
        <template v-for="column in columns">
          <td>{{item[column.field]}}</td>
        </template>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    name: 'GuluTable',
    props: {
      columns: {
        type: Array,
        required: true
      },
      dataSource: {
        type: Array,
        required: true
      }
    },
    data(){
      return {

      }
    }
}
</script>
<style lang='scss' scoped>

</style>
