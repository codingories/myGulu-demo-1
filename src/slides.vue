<template>
  <div class="g-slides" @mouseenter="onMouseEnter" @mouseleave="onmouseleave">
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
        lastSelectedIndex: undefined,
        timeId: undefined
      }
    },
    mounted() {
      // 显示第一个
      this.updateChildren()
      this.playAutomatically()
      this.childrenLength = this.$children.length
    },
    updated () {
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
      onMouseEnter() {
        this.pause()
        this.timerId = undefined
      },
      onmouseleave() {
        this.playAutomatically()
      },
      playAutomatically() {
        // 周期性的说selected要变
        if (this.timerId)  { return }
        let run = () => {
          let index = this.names.indexOf(this.getSelected())
          let newIndex = index + 1
          if ( newIndex === -1 ) {newIndex = this.names.length - 1}
          if ( newIndex === this.names.length ) { newIndex = 0 }
          this.select(newIndex) // 告诉外界选中 newIndex
          this.timerId = setTimeout(run, 3000)
        }
        this.timerId = setTimeout(run, 3000)
      },
      pause () {
        window.clearTimeout(this.timerId)
      },
      select(index){
        this.lastSelectedIndex = this.selectedIndex
        this.$emit('update:selected', this.names[index])
      },
      getSelected() {
        let first = this.$children[0]
        return this.selected || first.name
      },
      updateChildren() {
        let selected = this.getSelected()
        this.$children.forEach((vm)=>{
          let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
          if (this.timerId) {
            if (this.lastSelectedIndex === this.$children.length - 1 && this.selectedIndex === 0) {
              reverse = false
            }
            if (this.lastSelectedIndex === 0 && this.selectedIndex === this.$children.length - 1) {
              reverse = true
            }
          }

          vm.reverse = reverse
          this.$nextTick(() => {
            vm.selected = selected
          })
        })
      },
    },
}
</script>
<style lang='scss' scoped>
.g-slides {
  //display: inline-block;
  &-window {
    overflow: hidden !important;
  }
  &-wrapper {
    position: relative;
  }
  &-dots {
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      width: 20px;
      height: 20px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background: #ddd;
      border-radius: 50%;
      margin: 0 8px;
      font-size: 12px;
      &:hover {
        cursor: pointer;
      }
      &.active {
        background-color: black;
        color: white;
        cursor: default;
      }
    }
  }
}
</style>
