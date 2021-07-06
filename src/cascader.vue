<template>
  <div class="cascader" >
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{result || '&nbsp'}}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
       <cascader-items :items="source" class="popover" :selected = "selected"
                       @update:selected="onUpdateSelected"
                      :height="popoverHeight"></cascader-items>
    </div>
  </div>
</template>
<script>
  import CascaderItems from './cascader-items'
  export default {
    name: 'GuluCascader',
    components: {CascaderItems},
    props: {
      source: {
        type: Array,
      },
      popoverHeight: {
        type: String
      },
      selected: {
        type: Array,
        default: () => {
          return []
        }
      },
      loadData: {
        type: Function
      }
    },
    data() {
      return {
        popoverVisible: false,
      }
    },
    methods: {
      onUpdateSelected(newSelected){
        this.$emit('update:selected', newSelected)
        let lastItem = newSelected[newSelected.length - 1]

        console.log(lastItem)
        console.log(this.source)

        let updateSouce = (result) => {
          let toUpdate = this.source.filter(item=>item.id === lastItem.id)[0]
          this.$set(toUpdate, 'children', result)
        }

        this.loadData(lastItem, updateSouce) // 回调: 把别人传的函数调用一下
        // 调回调的时候再传入一个回调函数，函数理论上应该被调用
      }
    },
    computed: {
      result () {
        return this.selected.map((item) => item.name).join('/')
      }
    }
}
</script>
<style lang='scss' scoped>
  @import "var";
  .cascader {
    position: relative;
    .trigger {
      height: $input-height;
      display: inline-flex;
      align-items: center;
      padding: 0 1em;
      min-width: 10em;
      border: 1px solid $border-color;
      border-radius: $border-radius;
    }
    .popover-wrapper {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: white;
      display: flex;
      @extend .box-shadow;
      margin-top: 8px;
    }
  }
</style>
