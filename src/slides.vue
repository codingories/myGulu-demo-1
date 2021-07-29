<template>
  <div class="g-slides">
    <div class="g-slides-window" ref="window">
      <div class="g-slider-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      selected: {
        type: String,
      },
      autoPlay: {
        type: Boolean,
        default: true
      }
    },
    mounted() {
      // 显示第一个
      this.updateChildren()
    },
    updated () {
      this.updateChildren()
    },
    methods: {
      playAutomatically() {
        // 周期性的说selected要变

      },
      updateChildren(selected) {
        let first = this.$children[0]
        selected = this.selected || first.name
        this.$children.forEach((vm)=>{
          vm.selected = selected
        })
      },
    },
    data(){
      return {

      }
    }
}
</script>
<style lang='scss' scoped>
.g-slides {
  display: inline-block;
  border: 1px solid black;
  &-window {

  }
  &-wrapper {
    position: relative;
  }
}
</style>
