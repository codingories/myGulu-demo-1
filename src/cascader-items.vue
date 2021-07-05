<template>
  <div class="cascaderItem" :style="{height: height}">
    <div>
      selected : {{selected && selected[level] && selected[level].name }}
      level: {{level}}
    </div>
    <div class="left">
      <div class="label" v-for="(item, index) in items" @click="onClickLabel(item)" :key="index">
        {{item.name}}
        <icon class="icon" v-if="item.children" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-items :items="rightItems"
                           :selected="selected"
                           :level="level+1"
                           @update:selected="onUpdateSelected"
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
          let currentSelect = this.selected[this.level]
          if (currentSelect && currentSelect.children) {
            return currentSelect.children
          } else {
            return null
          }
        }
     },
     methods: {
      onClickLabel(item){
        let copy = JSON.parse(JSON.stringify(this.selected))
        copy[this.level] = item
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
