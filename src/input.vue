<template>
    <div class="wrapper">
      <input v-bind:value="value" type="text">
    </div>
</template>
<script>
    export default {
      name:"GuluInput",
      props: {
        value:{
          type: String
        }
      },
        data(){
            return {

            }
        }
    }
</script>
<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  .wrapper {
    font-size: $font-size;
    > input{
      font-size: inherit;
      height: 32px;
      border: 1px solid $border-color;
      border-radius: 4px;
      padding: 0 8px;
      &:hover {
        border-color: $border-color-hover;
      }
    }
  }

</style>

