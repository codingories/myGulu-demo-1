<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="action-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'GuluTabsHead',
    inject: ['eventBus'],
    created(){
      this.eventBus.$on('update:selected', (item, vm) => {
        console.log(item, vm)
      })
    }
  }
</script>
<style scoped lang="scss">
  $tab-height: 40px;
  $blue: blue;
  .tabs-head {
    display: flex;
    height: $tab-height;
    border: 1px solid red;
    position: relative;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom:1px solid $blue;
      width: 100px;
    }
    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>

