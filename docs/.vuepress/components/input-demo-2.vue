<template>
  <div style="padding-top: 16px;">
    <g-input v-model="value"></g-input>
    <div>
      value: {{value}}
    </div>
  </div>
</template>
<script>
  import GInput from '@/input'

  export default {
    components: {GInput},
    data () {
      return {
        value: '1',
      }
    }
  }
</script>
