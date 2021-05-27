<template>
  <div class="col" :class="rowStyle"
    :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'GuluCol',
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
      gutter: {
        type: [Number, String]
      }
    },
    created() {
    },
    mounted() {
      this.$children.forEach((vm)=>{
        vm.gutter = this.gutter
      })
    },
    computed: {
      rowStyle(){
        let { span, offset } = this
        return [span && `col-${span}`,offset && `offset-${offset}`]
      },
      colStyle(){
        return {
          paddingLeft: this.gutter/2 + 'px',
          paddingRight: this.gutter/2+ 'px'
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .col {
    height: 100px;
    width: 50%;
    padding: 0 10px;
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
</style>
