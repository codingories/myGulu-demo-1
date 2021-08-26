<template>
  <div class="gulu-pager">
    <span v-for="page in pages" class="gulu-pager-item"
      :class="{active: page === currentPage, separator: page === '...'}"
    >
      {{page}}
     </span>
  </div>
</template>
<style scoped lang="scss">
  @import "./styles/var";
  .gulu-pager {
    &-item {
      border: 1px solid #e1e1e1;
      border-radius: $border-radius;
      padding: 0 4px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      min-width: 20px;
      height: 20px;
      margin: 0 4px;
      cursor: pointer;
      &.separator {
        border: none;
      }
      &.active, &:hover {
        border-color: $blue;
      }
      &.active {
        cursor: default;
      }
    }
  }
</style>
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
