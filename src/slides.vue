<template>
  <div class="g-slides">
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
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
          let newIndex = index - 1
          if ( newIndex === -1 ) {index = names.length - 1}
          if ( newIndex === names.length ) { newIndex = 0 }
          this.$emit('update:selected', names[newIndex])
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
          const names = this.$children.map(vm => vm.name)
          let newIndex = names.indexOf(selected)
          let oldIndex = names.indexOf(vm.name)
          vm.reverse = newIndex > oldIndex ? false : true
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
  //display: inline-block;
  border: 1px solid black;
  &-window {
    overflow: hidden !important;
  }
  &-wrapper {
    position: relative;
  }
}
</style>
