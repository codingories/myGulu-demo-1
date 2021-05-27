<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'GuluRow',
    props: {
      gutter: {
        type: [Number, String]
      }
    },
    created() {
    },
    mounted() {
    },
    computed: {
      rowStyle(){
        let { gutter } = this
        return {marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}
      }
    }
  }
</script>
<style lang="scss" scoped>
  .row {
    display: flex;
  }
</style>
