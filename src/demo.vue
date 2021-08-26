<template>
  <div>
    <g-pager :total-page="20" :current-page="3" ></g-pager>
  </div>
</template>
<script>
  import Gpager from './pager'
  console.log(Gpager)
  export default {
    name: '',
    components: {
      'g-pager':Gpager
    },
    data(){
      return {}
    },
}
</script>
<style>
* {margin: 0; padding: 0; box-sizing: border-box;}
</style>
