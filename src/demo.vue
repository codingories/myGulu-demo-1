<template>
  <div class="wrapper">
    <g-slides  :selected.sync="selected">
      <g-slides-item name="11">
         <div class="box">1</div>
      </g-slides-item>
      <g-slides-item name="22">
        <div class="box">2</div>
      </g-slides-item>
      <g-slides-item name="33">
        <div class="box">3</div>
      </g-slides-item>
    </g-slides>
  </div>
</template>
<script>
  import GSlides from './slides'
  import GSlidesItem from './slides-item'



  export default {
    name: '',
    components: {
      GSlides, GSlidesItem
    },
    data(){
      return {
        selected: '33'
      }
    },

    created() {
      // let n = 1
      // setInterval(() => {
      //   if(n === 4) {
      //     n = 1
      //   }
      //   this.selected = n.toString()
      //   n ++
      // }, 3000)
    },
}
</script>
<style>
* {margin: 0; padding: 0; box-sizing: border-box;}
.wrapper {
  margin: 40px;
}
.box {
  width: 100%;
  height: 300px;
  background-color: #ddd;
  border: 1px solid red;
}
</style>
