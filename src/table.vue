<template>
  <div>
    <table>

    </table>
  </div>
</template>
<script>
  export default {
    name: 'GuluTable',
    props: {
      columns: {
        type: Array,
        required: true
      },
      data: {
        type: Array,
        required: true
      }
    },
    data(){
      return {

      }
    }
}
</script>
<style lang='scss' scoped>

</style>
