<template>
  <div class="cascaderItem">
    {{ sourceItem.name }}
    <gulu-cascader-Item
      v-if="sourceItem.children"
      v-for="item in sourceItem.children"
      :sourceItem="item"
    >
    </gulu-cascader-Item>
  </div>
</template>
<script>
   export default {
    name: 'GuluCascaderItem',
    props: {
      sourceItem: {
        type: Object
      }
    }
  }
</script>
<style lang='scss' scoped>
  .cascaderItem {
    border: 1px solid red;
    margin: 10px;
  }
</style>
