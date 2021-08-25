<template>
  <div style="margin-top:20px">
    <g-button>默认按钮</g-button>
    <g-button icon="settings">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>
  </div>
</template>

<script>
  import Button from '../../../src/button/button'
  export default {
    data() {
      return {}
    },
    components: {
      'g-button': Button,
    }
  }
</script>
