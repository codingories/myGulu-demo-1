<template>
  <div class="gulu-table-wrapper">
    <table class="gulu-table" :class="{bordered, compact, striped: striped}">
      <thead>
        <tr>
          <th><input type="checkbox" @change="onChangeAllItems" ref="allChecked" :checked="areAllItemsSelected"/></th>
          <th v-if="numberVisible">#</th>
          <th v-for="column in columns" :key="column.field">
            <div class="gulu-table-header">
              {{column.text}}
              <hr>
              {{column.field}}
              <hr>
              {{orderBy}}
              <span v-if="column.field in orderBy" class="gulu-table-sorter" @click="changeOrderBy(column.field, 'asc')">
                <g-icon name="asc" :class="{active: orderBy[column.field] === 'asc'}"
                       ></g-icon>
                <g-icon name="desc" :class="{active: orderBy[column.field] === 'desc'}"
                ></g-icon>
               </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in dataSource" :key="item.id">
          <td><input type="checkbox" @change="onChangeItem(item, index, $event)"
            :checked="inSelectedItems(item)"
          /></td>
          <td v-if="numberVisible">{{index + 1}}</td>
          <template v-for="column in columns" >
            <td :key="column.field">{{item[column.field]}}</td>
          </template>
        </tr>
      </tbody>

    </table>
  </div>
</template>
<script>
  import GIcon from './icon'

  export default {
    components: {
      GIcon
    },
    name: 'GuluTable',
    props: {
      orderBy: {
        type: Object,
        default: () => {},
      },
      striped: {
        type: Boolean,
        default: true
      },
      selectedItems: {
        type: Array,
        default: () => []
      },
      compact: {
        type: Boolean,
        default: false,
      },
      columns: {
        type: Array,
        required: true
      },
      dataSource: {
        type: Array,
        required: true,
        validator (array) {
          return array.filter(item => item.id === undefined).length <= 0
        }
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
    },
    computed: {
      areAllItemsSelected(){
        const a = this.dataSource.map(item => item.id).sort()
        const b = this.selectedItems.map(item => item.id).sort()
        if (a.length !== b.length) {
          return false
        }
        let equal = true
        for (let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
            equal = false
            break
          }
        }
        return equal
      }
    },
    watch: {
      selectedItems () {
        console.log('selectedItems 变了')
        if(this.selectedItems.length === this.dataSource.length) {
          this.$refs.allChecked.indeterminate = false
        } else if (this.selectedItems.length === 0) {
          this.$refs.allChecked.indeterminate = false
        } else {
          this.$refs.allChecked.indeterminate = true
        }
      }
    },
    methods: {
      changeOrderBy(key, value){
        const copy = JSON.parse(JSON.stringify(this.orderBy))
        let oldValue = copy[key]
        if (oldValue === 'asc') {
          copy[key] = 'desc'
        } else if (oldValue === 'desc') {
          copy[key] = true
        } else {
          copy[key] = 'asc'
        }
        this.$emit('update:orderBy', copy)
      },
      inSelectedItems(item) {
        return this.selectedItems.filter((i) => i.id === item.id).length > 0
      },
      onChangeItem(item, index, e){
        let selected = e.target.checked
        let copy = JSON.parse(JSON.stringify(this.selectedItems))
        if (selected) {
          copy.push(item)
        } else {
          // console.log('copy.indexOf(item)',copy.indexOf(item))
          // copy.splice(copy.indexOf(item), 1)
          // console.log(copy)
          copy = copy.filter(i =>   i.id !== item.id)

        }
        this.$emit('update:selectedItems', copy)
      },
      onChangeAllItems(e){
        console.log('12345')
        let selected = e.target.checked
        console.log('selected',selected)
        console.log('ppp',selected ? this.dataSource : [])
        this.$emit('update:selectedItems', selected ? this.dataSource : [])
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
    &.compact {
      td, th {
        padding: 4px;
      }
    }

    td, th {
      border-bottom: 1px solid $grey;
      text-align: left;
      padding: 8px;
    }
    &.striped {
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
    &-sorter {
      display: inline-flex;
      flex-direction: column;
      margin: 0 4px;
      svg {
        width: 10px;
        height: 10px;
        fill: $grey;
        cursor: pointer;
        &.active {
          fill: red;
        }
        &:first-child {
          position: relative;
          bottom: -1px;
        }
        &:first-child(2) {
          position: relative;
          bottom: -1px;
        }
      }
    }
    &-header {
      align-items: center;
      display: flex;
    }
  }
</style>
