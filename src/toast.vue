<template>
  <div class="wrapper gulu-toast" :class="toastClass">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span v-if="closeButton" class="close" @click="onClickClose">
        {{closeButton.text}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GuluToast',
    props: {
      autoClose: {
        type: [ Boolean, Number],
        default: 50,
        validator(value) {
          return value === false || typeof value === 'number';
        }
      },
      closeButton: {
        type: Object,
        default: () => { return {
          text: '关闭',
          callback: undefined
        }}
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator (value) {
          return ['top' ,'bottom', 'middle'].indexOf(value) >= 0
        }
      }
    },
    mounted () {
      this.updateStyles()
      this.execAutoClose()
    },
    computed: {
      toastClass () {
        return {
          [` position-${this.position}`]: true
        }
      }
    },
    methods: {
      execAutoClose(){
        if (this.autoClose) {
          setTimeout( ()=>{
            this.close()
          } , this.autoClose * 1000)
        }
      },
      updateStyles(){
        this.$nextTick(() => {
            this.$refs.line.style.height =
              `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      },
      close () {
        this.$el.remove()
        this.$emit('close')
        this.$destroy()
      },
      onClickClose () {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback(this) // 当前toast实例
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0,0,0,0.75);
  $animation-duration: 300ms;
  .wrapper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    &.position-top {
      top: 0;
      .toast {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slider-down $animation-duration;
      }
    }
    &.position-bottom {
      bottom: 0;
      .toast {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: slider-up $animation-duration;
      }
    }
    &.position-middle {
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      animation: slider-in $animation-duration;
    }
  }

  @keyframes slider-up {
    0% { opacity: 0; transform: translateY(100%);}
    100% { opacity: 1; transform: translateY(0%);}
  }
  @keyframes slider-down {
    0% { opacity: 0; transform: translateY(-100%);}
    100% { opacity: 1; transform: translateY(0);}
  }
  @keyframes slider-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  .toast {
    font-size: $font-size;
    line-height: 1.8;
    min-height: $toast-min-height;
    color: white;
    display: flex;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgb(0,0,0,0.75);
    padding: 0 16px;
    .message {
      padding: 8px;
    }
    .close {
      padding-left: 16px;
      flex-shrink: 0;
    }
    .line {
      height: 100%;
      border-left: 1px solid #666;
      margin-left: 16px;
    }
  }
</style>

