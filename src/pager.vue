<template>
  <div class="gulu-pager">
    <span v-for="page in pages">
      {{page}}
    </span>
  </div>
</template>
<script>
  export default {
    name: 'GuluPager',
    props: {
      totalPage: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      },
      hideIfOnePage: {
        type: Boolean,
        default: true
      }
    },
    data () {
      let pages = [1, this.totalPage, this.currentPage, this.currentPage-1,this.currentPage-2, this.currentPage + 1, this.currentPage +2]
      let u = unique(pages.sort((a, b)=> a - b))
      let u2 = u.reduce((prev, current, index) => {
        prev.push(current)
        u[index + 1] !== undefined && u[index + 1] - u[index] > 1&& prev.push('...')
        return prev
      },[])
      return {
        pages: u2
      }
    }
}
function unique (array) {
    // return [...new Set(array)]
  const object = {}
  array.map((number) => {
    object[number] = true
  })
  return Object.keys(object).map((s) => parseInt(s, 10))
}
</script>
<style lang='scss' scoped>

</style>
