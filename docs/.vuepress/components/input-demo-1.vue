<template>
  <div style="padding-top: 16px;">
    <g-input value="中文"></g-input>
    <g-input value="中文" disabled></g-input>
    <g-input value="中文" readonly></g-input>
  </div>
</template>
<script>
  import GInput from '@/input'

  export default {
    components: {GInput},
    data () {
      return {

      }
    }
  }
</script>
