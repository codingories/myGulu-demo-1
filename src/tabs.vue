<template>
  <div class="tabs-tabs">
    <slot></slot>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'GuluTabsTabs',
    data(){
      return {
        eventBus: new Vue()
      }
    },
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator (value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    created(){
      // this.$emit('update:selected', '这是 this $emit 出来的数据')
      // this.eventBus.$emit('update:selected', '这是 this eventBus $emit 出来的数据')
    },
    mounted() {
      this.eventBus.$emit('update:selected', this.selected)
    }
  }
</script>
<style>
  .tabs-tabs {

  }
</style>

