<template>
  <transition name="silde">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="visible=false">close</button>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'GuluSider',
    data() {
      return {
        visible: true
      }
    },
    methods: {}
  }
</script>
<style lang="scss" scoped>
  .sider {
    position: relative;
    > button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .silde-enter-active, .silde-leave-active {
    transition: all .5s;
  }
  .silde-enter, .silde-leave-to {
    margin-left: -200px;
  }
</style>

