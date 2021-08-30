<template>
  <div class="gulu-table-wrapper">
    <table class="gulu-table">
      <thead>
        <tr>
          <th>#</th>
          <th v-for="column in columns">
            {{column.text}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in dataSource">
          <td>{{index}}</td>
          <template v-for="column in columns">
            <td>{{item[column.field]}}</td>
          </template>
        </tr>
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
  @import './styles/var';
  $grey: darken($grey, 10%);
  .gulu-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-bottom: 1px solid $grey;
    td, th {
      border-bottom: 1px solid $grey;
      text-align: left;
      padding: 8px;
    }
    tbody {
      > tr {
        &:nth-child(odd) {
          background: white;
        }
        &:nth-child(even) {
          background: darken($grey, 10%);;
        }
      }
    }
  }
</style>
