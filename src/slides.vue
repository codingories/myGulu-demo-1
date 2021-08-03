<template>
  <div class="g-slides">
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="g-slides-dots">
      <span v-for="n in childrenLength" :class="{active: selectedIndex === n-1}"
      @click="select(n-1)"
      >
        {{ n }}
      </span>
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
    data() {
      return {
        childrenLength: 0,
        lastSelectedIndex: undefined
      }
    },
    mounted() {
      // 显示第一个
      this.updateChildren()
      this.playAutomatically()
      this.childrenLength = this.$children.length
      this.lastSelectedIndex = this.selectedIndex
    },
    updated () {
      console.log('fuck this.lastSelectedIndex 1111', this.lastSelectedIndex)
      console.log('fuck this.lastSelectedIndex 2222', this.selectedIndex)
      this.updateChildren()
    },
    computed: {
      selectedIndex() {
        return this.names.indexOf(this.selected) || 0
      },
      names() {
        return this.$children.map(vm => vm.name)
      }
    },
    methods: {
      playAutomatically() {
        let index = this.names.indexOf(this.getSelected())
        // 周期性的说selected要变
        console.log(`index fuck1`, index)
        let run = () => {
          let newIndex = index - 1
          // index = newIndex
          console.log('newIndex2', newIndex)
          if ( newIndex === -1 ) {newIndex = this.names.length - 1}
          if ( newIndex === this.names.length ) { newIndex = 0 }
          console.log(`this.names[newIndex]`, this.names[newIndex])
          // this.$emit('update:selected', this.names[newIndex])
          this.select(newIndex)
          setTimeout(run, 3000)
        }
        // setTimeout(run, 3000)
        // 老手a不用setInterval,如果忘记clear就会一直运行，用setTimeout模拟setInterval好处就是自动停止
      },
      select(index){
        this.$emit('update:selected', this.names[index])
      },
      getSelected() {
        let first = this.$children[0]
        return this.selected || first.name
      },
      updateChildren() {
        let selected = this.getSelected()
        // let first = this.$children[0]
        this.$children.forEach((vm)=>{
          vm.selected = selected
          let newIndex = this.names.indexOf(selected)
          let oldIndex = this.names.indexOf(vm.name)
          vm.reverse = newIndex > oldIndex ? false : true
          console.log('vm.reverse', vm.reverse)
        })
      },
    },
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
  &-dots {
    > span {
      &.active {
        background-color: red;
      }
    }
  }
}
</style>
