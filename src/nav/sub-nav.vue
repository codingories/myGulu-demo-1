<template>
  <div class="g-sub-nav">
    <span>
      <slot name="title"></slot>
    </span>
    <div class="g-sub-nav-popover">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'GuluSubNav',
  }
</script>
<style lang='scss' scoped>
  .g-sub-nav {
    position: relative;
    padding: 10px 20px;
    &-popover {
      position: absolute;
      top: 100%;
      left: 0;
      border: 1px solid red;
      white-space: nowrap;
    }
  }
</style>
