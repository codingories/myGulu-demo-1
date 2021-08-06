<template>
  <transition name="slide">
    <div class="g-slides-item" v-if="visible" :class="{reverse}">
      <slot></slot>
    </div>
  </transition>

</template>
<script>
  export default {
    name: 'GuluSlidesItem',
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        selected: undefined,
        reverse: false
      }
    },
    computed: {
      visible () {
        // console.log(`我的name是${this.name}`)
        // console.log(`我的方向是${this.reverse ? '反向' : '正向'}`)
        return this.selected === this.name
      }
    }
  }
</script>
<style lang='scss' scoped>
  .slide-leave-active {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
  }
  .slide-enter {
    transform: translateX(100%);
  }
  .slide-enter.reverse{
    transform: translateX(-100%);
  }
  .slide-leave-to {
    transform: translateX(-100%);
  }
  .slide-leave-to.reverse {
    transform: translateX(100%);
  }
</style>
