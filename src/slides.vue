<template>
  <div class="g-slides" @mouseenter="onMouseEnter"
       @mouseleave="onmouseleave"
       @touchstart="onTouchStart"
       @touchmove="onTouchMove"
       @touchend="onTouchEnd"
  >
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="g-slides-dots">
      <span @click="onClickPrev">
        <g-icon name="left"></g-icon>
      </span>
      <span v-for="n in childrenLength" :class="{active: selectedIndex === n-1}"
      @click="select(n-1)"
      >
        {{ n }}
      </span>
      <span @click="onClickNext">
        <g-icon name="right"></g-icon>
      </span>
    </div>
  </div>
</template>
<script>
import GIcon from './icon'
  export default {
  components: {GIcon},
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
        timeId: undefined,
        startTouch: undefined,
      }
    },
    mounted() {
      // 显示第一个
      this.childrenLength = this.items.length
      console.log(`this.items.length`, this.items.length)
      this.updateChildren()
      // this.playAutomatically()
    },
    updated () {
      this.updateChildren()
    },
    computed: {
      selectedIndex() {
        let index = this.names.indexOf(this.selected)
        return index === -1 ? 0 : index
      },
      names() {
        return this.items.map(vm => vm.name)
      },
      items() {
        // console.log(`this.$children.filter(vm => vm.$options.name === 'GuluSlidesItem').length`, this.$children.filter(vm => vm.$options.name === 'GuluSlidesItem').length)
        return this.$children.filter(vm => vm.$options.name === 'GuluSlidesItem')
      }
    },
    methods: {
      onClickPrev() {
        this.select(this.selectedIndex - 1)
        console.log('Prev')
      },
      onClickNext() {
        this.select(this.selectedIndex + 1)
        console.log('Next')
      },
      onMouseEnter() {
        this.timerId = undefined
      },
      onmouseleave() {
        this.playAutomatically()
      },
      onTouchStart(e) {
        this.pause()
        if (e.touches.length > 1) {return}
        this.startTouch = e.touches[0]
        // console.log(e.touches[0])
        // console.log('摸')
      },
      onTouchMove() {
        console.log('边摸边动')
      },
      onTouchEnd(e) {
        // console.log(e.touches[0])
        let endTouch = e.changedTouches[0]
        let {clientX:x1, clientY:y1} = this.startTouch
        let {clientX:x2, clientY:y2} = endTouch


        let distance = Math.sqrt(Math.pow(x2-x1,2)) + Math.sqrt(Math.pow(y2-y1,2))
        console.log('distance')
        console.log(distance)
        let deltaY = Math.abs(y2 - y1)

        let rate = distance / deltaY
        console.log('rate')
        console.log(rate)

        if(rate>2) {
          console.log('在滑动我')
          if(x2 > x1) {
            this.select(this.selectedIndex - 1)
          } else {
            this.select(this.selectedIndex + 1)
          }
        }
        this.$nextTick(()=> {
          this.playAutomatically()
        })
        console.log('摸完了')
      },
      playAutomatically() {
        // 周期性的说selected要变
        console.log('this.timerIdthis.timerId',this.timerId)
        if (this.timerId)  {
          console.log('1111111111')
          return
        }
        let run = () => {
          let index = this.names.indexOf(this.getSelected())
          let newIndex = index + 1
          this.select(newIndex) // 告诉外界选中 newIndex
          this.timerId = setTimeout(run, 3000)
        }
        this.timerId = setTimeout(run, 3000)
      },
      pause () {
        window.clearTimeout(this.timerId)
        this.timerId = undefined
      },
      select(newIndex){
        this.lastSelectedIndex = this.selectedIndex
        if ( newIndex === -1 ) {newIndex = this.names.length - 1}
        if ( newIndex === this.names.length ) { newIndex = 0 }
        this.$emit('update:selected', this.names[newIndex])
      },
      getSelected() {
        let first = this.items[0] ? this.items[0] : []
        console.log('first', first)
        console.log('111')
        return this.selected || first.name
        // return []
      },
      updateChildren() {
        let selected = this.getSelected()
        this.items.forEach((vm)=>{
          let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
          if (this.timerId) {
            if (this.lastSelectedIndex === this.items.length - 1 && this.selectedIndex === 0) {
              reverse = false
            }
            if (this.lastSelectedIndex === 0 && this.selectedIndex === this.items.length - 1) {
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
