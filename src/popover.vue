<template>
  <div class="popover" @click="onClick" ref="popover">
    {{position}}
    <div ref="contentWrapper" class="content-wrapper"  v-show="visible"
      :class="{[`position-${position}`] : true}"
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
      <slot></slot>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'GuluPopover',
    data(){
      return {
        visible: false
      }
    },
    // props: ['position'],

    props: {
      position: {
        type: String,
        default: 'top',
        validator (value) {
          console.log('valie',12,value)
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
        }
      }
    },
    mounted(){
    },
    methods: {
      positionContent() {
        document.body.appendChild(this.$refs.contentWrapper)
        let { width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
        if (this.position === 'top') {
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapper.style.top = top + window.scrollY+ 'px'
        } else if (this.position === 'bottom') {
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapper.style.top = top + height + window.scrollY+ 'px'
        }

      },
      onClickDocument (e) {
        // div已经移到popover外面去了，当用户点击popover的时候还是点击Popover外面
        if (this.$refs.popover &&
          (this.$refs.popover === e.target ||
            this.$refs.popover.contains(e.target))
        ) {return }
        // 再加个判断，如果this.$refs有contentWrapper,而且点的东西就是contentWrapper,或者点的东西在contentWrapper里面就return
        if (this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target ||
            this.$refs.contentWrapper.contains(e.target))
        ) { return }
        this.close()
      },
      open (){
        setTimeout(()=>{
          this.visible = true
          this.positionContent()
          document.addEventListener('click', this.onClickDocument)
        })
      },
      close() {
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      onClick (event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if( this.visible === true )  {
            this.close()
          } else {
            this.open()
          }
        }
      },
    }
}
</script>
<style lang='scss' scoped>
  $border-color: #333;
  $border-radius: 4px;
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    /*box-shadow: 0 0 3px rgb(0,0,0, 0.5);*/
    filter: drop-shadow(0 1px 1px rgb(0,0,0, 0.5));
    background: white;
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;
    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }
    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      &::before, &::after {
        left: 10px;
      }
      &::before {
        border-top-color: black;
        top: 100%;
      }
      &::after {
        border-top-color: white;
        top: calc(100% - 1px);
      }
    }
    &.position-bottom {

      margin-top: 10px;
      &::before, &::after {
        left: 10px;
      }
      &::before {
        border-bottom-color: black;
        bottom: 100%;
      }
      &::after {
        border-bottom-color: white;
        bottom: calc(100% - 2px);
      }

    }
  }
</style>
