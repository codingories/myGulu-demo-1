<template>
  <div>
    <g-cascader :source="source" popover-height = "150px" ></g-cascader>
  </div>
</template>
<script>
  import Cascader from './cascader'
  export default {
    name: '',
    components: {
      'g-cascader': Cascader
    },
    data(){
      return {
        source: [{
          name: '浙江',
          children: [
            {
              name: '杭州',
              children: [
                { name: '上城' },
                { name: '下城' },
                { name: '江干' },
              ]
            },
            {name: '嘉兴',
              children: [
                { name: '南湖' },
                { name: '秀洲' },
                { name: '嘉善' },
              ]
            },
          ],
        }, {
          name: '福建',
          children: [
            {name: '福州',
              children: [
                { name: '鼓楼' },
                { name: '台山' },
                { name: '仓山' },
              ]},
            {name: '厦门'},
            {name: '莆田'},
            {name: '三明'},
            {name: '泉州'},
          ],
        },
          {
            name: '安徽',
            children: [
              {
                name: '合肥',
                children: [{
                  name: '瑶海'
                },{
                  name: '庐阳'
                }]
              }
            ]
          }
        ]
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
