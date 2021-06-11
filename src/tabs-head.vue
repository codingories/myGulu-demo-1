<template>
  <div class="tabs-head">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'GuluTabsHead',
    inject: ['eventBus'],
    created(){
      console.log('爷爷给爸爸的eventBus')
      console.log(this.eventBus)
    }
  }
</script>
<style>
.tabs-head {

}
</style>

