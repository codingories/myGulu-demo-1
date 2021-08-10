<template>
  <div class="tabs-tabs">
    <slot></slot>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'GuluTabsTabs',
    data(){
      return {
        eventBus: new Vue()
      }
    },
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator (value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    methods: {
      checkChildren(){
        // 这个children是子组件，不是子元素
        if(this.$children.length === 0) {
          console && console.warn &&
          console.warn('tabs的子组件应该是tabs-head和tabs-nav,但你没有报子组件')
        }
      },
      selectTab(){
        this.$children.forEach(vm=>{
          if (vm.$options.name === 'GuluTabsHead') {
            vm.$children.forEach((childVm) => {
              if (childVm.$options.name === 'GuluTabsItem' && childVm.name === this.selected) {
                this.eventBus.$emit('update:selected', this.selected, childVm)
              }
            })
          }
        })
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    created(){
    },
    mounted() {
      this.checkChildren()
      this.selectTab()
    }
  }
</script>
<style>
  .tabs-tabs {

  }
</style>

