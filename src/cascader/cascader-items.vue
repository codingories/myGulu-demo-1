<template>
  <div class="cascaderItem" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="(item, index) in items" @click="onClickLabel(item)" :key="index">
        <span class="name">
          {{item.name}}
        </span>
        <span class="icons">
          <template v-if="item.name === loadingItem.name">
            <icon class="loading" name="loading"></icon>
          </template>
          <template v-else>
              <icon class="next" v-if="rightArrowVisible(item)" name="right"></icon>
          </template>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-items :items="rightItems"
                           :selected="selected"
                           :loading-item="loadingItem"
                           @update:selected="onUpdateSelected"
                           :level="level+1"
                           :load-data="loadData"
                           :height="height"></gulu-cascader-items>
    </div>
  </div>
</template>
<script>
  import Icon from '../icon'
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
      loadData: {
        type: Function
      },
      level: {
        type: Number,
        default: 0
      },
      loadingItem: {
        type: Object,
        default: {}
      }
    },
     data(){
        return {}
     },
     computed: {
        rightItems(){
          if ( this.selected[this.level] ) {
            let selected = this.items.filter((item) => item.name === this.selected[this.level].name)
            if ( selected && selected[0].children && selected[0].children.length > 0) {
              return selected[0].children
            }
          }
        },
     },
     methods: {
       rightArrowVisible(item){
         return this.loadData ? !item.isLeaf : item.children
       },
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
  @import "../styles/var";
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
      padding: .5em 1em;
      display: flex;
      align-items: center;
      cursor: pointer;
      white-space: nowrap;
      &:hover {
        background-color: $grey;
      }
      > .name {
        margin-right: 1em;
        user-select: none;
      }
      .icons {
        margin-left: auto;
        .next {
          transform: scale(0.8);
        }
        .loading {
          animation: spin 2s infinite linear;
        }
      }
    }
  }
</style>
