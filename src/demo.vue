<template>
  <div>
    <g-slides  :selected.sync="selected">
      <g-slides-item name="你好">
         <div class="box">1</div>
      </g-slides-item>
      <g-slides-item name="hello">
        <div class="box">2</div>
      </g-slides-item>
      <g-slides-item name="world">
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
        selected: undefined
      }
    },

    created() {
      let n = 1
      setInterval(() => {
        if(n === 4) {
          n = 1
        }
        this.selected = n.toString()
        n ++
      }, 3000)
    },

    methods: {

    }
}
</script>
<style>
* {margin: 0; padding: 0; box-sizing: border-box;}
.box {
  widtH: 200px;
  height: 150px;
  background-color: #ddd;
  border: 1px solid red;
}
</style>
