<template>
  <div class="cascader" ref="cascader" v-click-outside="close">
    <div class="trigger" @click="toggle">
      {{result || '&nbsp'}}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
       <cascader-items :items="source" class="popover" :selected = "selected"
                       :loadData="loadData"
                       @update:selected="onUpdateSelected"
                      :height="popoverHeight"></cascader-items>
    </div>
  </div>
</template>
<script>
  import CascaderItems from './cascader-items'
  import ClickOutside from './click-outside'
  export default {
    name: 'GuluCascader',
    components: {CascaderItems},
    directives: {ClickOutside},
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
      open(){
        console.log('open')
        this.popoverVisible = true
      },
      close(){
        console.log('close')
        this.popoverVisible = false
      },
      toggle(){
        if(this.popoverVisible === true) {
          this.close()
        } else {
          this.open()
        }
      },
      onUpdateSelected(newSelected){
        this.$emit('update:selected', newSelected)
        let lastItem = newSelected[newSelected.length - 1]

        let simplest = (children, id) => {
          return children.filter(item => item.id === id)[0]
        }

        let complex = (children, id) => {
          let noChildren = []
          let hasChildren = []
          children.forEach(item => {
            if (item.children) {
              hasChildren.push(item)
            } else {
              noChildren.push(item)
            }
          })
          let found = simplest(noChildren, id)
          if (found) {
            return found
          } else {
            found = simplest(hasChildren, id)
            if (found) {return found}
            else {
              for (let i=0; i<hasChildren.length; i++) {
                found = complex( hasChildren[i].children, id)
                if(found) {
                  return found
                }
              }
              return undefined
            }
          }
        }

        let updateSouce = (result) => {
          // copy就是最新的source
          let copy = JSON.parse(JSON.stringify(this.source))
          // 把children 挂到source
          let toUpdate = complex(copy, lastItem.id)
          // this.$set(toUpdate, 'children', result)
          toUpdate.children = result
          this.$emit('update:source', copy)
        }

        // 不是叶子才去加载数据
        if (!lastItem.isLeaf) {
          this.loadData && this.loadData(lastItem, updateSouce) // 回调: 把别人传的函数调用一下
          // 调回调的时候再传入一个回调函数，函数理论上应该被调用
        }
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
    display: inline-block;
    position: relative;
    border: 1px soli d red;
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
