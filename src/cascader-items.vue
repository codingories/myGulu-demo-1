<template>
  <div class="cascaderItem" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="(item, index) in items" @click="onClickLabel(item)" :key="index">
        {{item.name}}
        <icon class="icon" v-if="item.children" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-items :items="rightItems"
                           :selected="selected"
                           @update:selected="onUpdateSelected"
                           :level="level+1"
                           :height="height"></gulu-cascader-items>
    </div>
  </div>
</template>
<script>
  import Icon from './icon'
   export default {
    name: 'GuluCascaderItems',
     components: {Icon},
    props: {
      items: {
        type: Array
      },
      height: {
        type: String
      },
      selected: {
        type: Array,
        default: () => {
          return []
        }
      },
      level: {
        type: Number,
        default: 0
      }
    },
     data(){
        return {}
     },
     computed: {
        rightItems(){
          console.log('计算属性')
          console.log('this.selected', this.selected)

          if ( this.selected[this.level] ) {
            let selected = this.items.filter((item) => item.name === this.selected[this.level].name)
            if ( selected && selected[0].children && selected[0].children.length > 0) {
              return selected[0].children
            }
          }
        }
     },
     methods: {
      onClickLabel(item){
        let copy = JSON.parse(JSON.stringify(this.selected))
        copy[this.level] = item
        // 之后的值全部删掉,一句话搞定
        copy.splice(this.level + 1)
        this.$emit(`update:selected`, copy)
      },
       onUpdateSelected(newSelected) {
          this.$emit('update:selected', newSelected)
       }
     }
  }
</script>
<style lang='scss' scoped>
  @import "var";
  .cascaderItem {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .left {
      height: 100%;
      padding: .3em 0;
      overflow: auto;
    }
    .right {
      border-left: 1px solid $border-color-light;
    }
    .label {
      padding: .3em 1em;
      display: flex;
      align-items: center;
      .icon {
        margin-left: 1em;
        transform: scale(0.8)
      }
    }
    .right {
    }
  }
</style>
