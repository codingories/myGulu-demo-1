<template>
  <div class="gulu-sticky" ref="wrapper" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluSticky',
  data() {
    return {
      sticky: false
    }
  },
  mounted() {
  },
  created() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > this.top()) {
        console.log('滚过了元素的顶部')
        this.sticky = true
      } else {
        console.log('没滚过元素的顶部')
        this.sticky = false
      }
    })
  },
  computed: {
    classes(){
      return {
        sticky: this.sticky
      }
    }
  },
  methods: {
    top() {
      let top = this.$refs.wrapper.getBoundingClientRect().top
      return top + window.scrollY
    }
  }
}
</script>
<style lang='scss' scoped>
.gulu-sticky {
  &.sticky {
    background: red;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>
