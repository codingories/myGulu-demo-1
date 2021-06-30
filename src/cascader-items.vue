<template>
  <div class="cascaderItem">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected = item">
        {{item.name}}
      </div>
    </div>
    <div class="right">

    </div>
  </div>
</template>
<script>
   export default {
    name: 'GuluCascaderItems',
    props: {
      items: {
        type: Array
      }
    },
     data(){
        return {
          leftSelected: null
        }
     },
     computed: {
        rightItems(){
          if (this.leftSelected && this.leftSelected.children) {
            return this.leftSelected.children
          } else {
            return null
          }
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
