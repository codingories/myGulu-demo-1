<template>
  <div class="gulu-pager" :class="{hide: hideIfOnePage === true && totalPage <= 1}">
    <span class="gulu-pager-nav prev" :class="{disabled: currentPage === 1}"
      @click="onClickPage(currentPage-1)"
    >
      <g-icon name="left"></g-icon>
    </span>
    <template v-for="page in pages">
      <template v-if="page === currentPage">
        <span class="gulu-pager-item current"> {{page}} </span>
      </template>
      <template v-else-if="page === '...'">
        <g-icon class="gulu-pager-separator" name="dots"></g-icon>
      </template>
      <template v-else>
        <span href="#" class="gulu-pager-item" @click="onClickPage(page)">{{page}}</span>
      </template>
    </template>
    <span class="gulu-pager-nav next" :class="{disabled: currentPage === totalPage}"
      @click="onClickPage(currentPage + 1)"
    >
      <g-icon name="right"></g-icon>
    </span>
  </div>
</template>

<style scoped lang="scss">
  @import "./styles/var";

  .gulu-pager {
    user-select: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    $width: 20px;
    $height: 20px;
    $font-size: 12px;
    &.hide {
      display: none;
    }
    &-separator {
      width: $width;
      font-size: $font-size;
    }

    &-item {
      height: $height;
      font-size: $font-size;
      border: 1px solid #e1e1e1;
      border-radius: $border-radius;
      padding: 0 4px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      min-width: 20px;
      margin: 0 4px;
      cursor: pointer;
      &.separator {
        border: none;
      }
      &.current, &:hover {
        border-color: $blue;
      }
      &.current {
        cursor: default;
      }
    }
    &-nav {
      margin: 0 4px;
      display: inline-flex;
      justify-content: center;
      align-items:center;
      background: $grey;
      height: $height;
      width: $width;
      border-radius: $border-radius;
      font-size: $font-size;
      cursor: pointer;
      &.disabled {
        svg {
          cursor: default;
          fill: darken($grey, 30%);
        }
      }
    }
  }
</style>
<script>
import GIcon from './icon'
  export default {
    name: 'GuluPager',
    components: {GIcon},
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
        default: false
      }
    },
    data () {
      return {
      }
    },
    computed: {
      pages() {
        console.log('运行了')
        let pages = [1, this.totalPage, this.currentPage, this.currentPage-1,this.currentPage-2, this.currentPage + 1, this.currentPage +2]
        let u = unique(pages
            .filter((n) => n >= 1 && n <= this.totalPage)
            .sort((a, b)=> a - b))
        let u2 = u.reduce((prev, current, index) => {
          prev.push(current)
          u[index + 1] !== undefined && u[index + 1] - u[index] > 1&& prev.push('...')
          return prev
        },[])
        return u2
      }
    },
    methods: {
      onClickPage (n) {
        if (n >= 1 && n <= this.totalPage) {
          this.$emit('update:currentPage', n)
        }
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
