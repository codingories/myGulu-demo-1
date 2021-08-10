<template>
  <div class="wrapper">
    <GButton>你好</GButton>
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
  import GSlides from './slides/slides'
  import GSlidesItem from './slides/slides-item'
  import GButton from './button/button'


  export default {
    name: '',
    components: {
      GSlides, GSlidesItem, GButton
    },
    data(){
      return {
        selected: undefined
      }
    },

    created() {},
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>
