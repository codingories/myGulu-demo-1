<template>
  <div>
    <div class="toast">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GuluToast'
  }
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0,0,0,0.75);
  .toast {
    font-size: $font-size;
    line-height: 1.8;
    height: $toast-height;
    position: fixed;
    color: white;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgb(0,0,0,0.75);
    padding: 0 16px;
  }
</style>

