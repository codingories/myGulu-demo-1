<template>
  <transition name="slide">
    <div class="g-slides-item" v-if="visible">
      <slot></slot>
    </div>
  </transition>

</template>
<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
         selected: undefined
      }
    },
    computed: {
      visible () {
        return this.selected === this.name
      }
    }
  }
</script>
<style lang='scss' scoped>
  .g-slides-item {

  }
  .slide-leave-active {
    position: absolute;
    left: 0;
    top: 0;
    background: red !important;
    border: 10px solid red;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 1s;
  }
  .slide-enter {
    transform: translateX(100%);
  }
  .slide-leave-to {
    transform: translateX(-100%);
  }
</style>
