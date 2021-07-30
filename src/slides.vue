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
      this.playAutomatically()
    },
    updated () {
      this.updateChildren()
    },
    methods: {
      playAutomatically() {
        // 周期性的说selected要变
        const names = this.$children.map(vm => vm.name)
        let index = names.indexOf(this.getSelected())

        let run = () => {
          if (index === names.length) { index = 0 }
          this.$emit('update:selected', names[index + 1])
          index++
          setTimeout(run, 3000)
        }

        setTimeout(run, 3000)

        // 老手不用setInterval,如果忘记clear就会一直运行，用setTimeout模拟setInterval好处就是自动停止

      },
      getSelected() {
        let first = this.$children[0]
        return this.selected || first.name
      },
      updateChildren() {
        let selected = this.getSelected()
        let first = this.$children[0]
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
