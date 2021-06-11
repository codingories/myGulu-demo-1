<template>
  <div class="tabs-tabs">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'GuluTabsTabs',
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
    created(){
      // 这个组件必须要触发update:selected事件才能使外面.sync有用
      // this.$emit('update:selected', 'xxx')
    }
  }
</script>
<style>
  .tabs-tabs {

  }
</style>

