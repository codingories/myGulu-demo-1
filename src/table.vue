<template>
  <div class="gulu-table-wrapper">
    <table class="gulu-table" :class="{bordered}">
      <thead>
        <tr>
          <th><input type="checkbox"/></th>
          <th v-if="numberVisible">#</th>
          <th v-for="column in columns">
            {{column.text}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in dataSource">
          <td><input type="checkbox"/></td>
          <td v-if="numberVisible">{{index + 1}}</td>
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
      },
      numberVisible: {
        type: Boolean,
        default: false
      },
      bordered: {
        type: Boolean,
        default: false
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
    &.bordered {
      border: 1px solid $grey;
      td, th {
        border: 1px solid $grey;
      }
    }
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
