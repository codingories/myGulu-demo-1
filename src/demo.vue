<template>
  <div>
    <div style="padding: 20px">
      <g-cascader :source="source"
                  :selected.sync = 'selected'
                  popover-height = "200px" ></g-cascader>
    </div>

  </div>
</template>
<script>
  import Cascader from './cascader'
  import db from './db'

  function ajax ( parent_id = 0 ) {
    return db.filter((item) => item.parent_id === parent_id)
  }

  console.log(ajax())

  export default {
    name: '',
    components: {
      'g-cascader': Cascader
    },
    data(){
      return {
        // ['浙江', '杭州']
        selected: [],
        source: ajax()
      }
    }
}
</script>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  img {
    max-width: 100%
  }
  html {
    --font-size: 14px;
  }
  body {
    font-size: var(--font-size)
  }
</style>
