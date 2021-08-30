<template>
  <div style="margin:20px;">
    <g-pager :total-page="10" :current-page.sync="currentPage" hide-if-one-page></g-pager>
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
      return {
        currentPage: 1
      }
    },
}
</script>
<style>
* {margin: 0; padding: 0; box-sizing: border-box;}
</style>
