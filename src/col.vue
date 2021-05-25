<template>
  <div class="col">
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
  .col {
    height: 100px;
    background-color: blue;
    width: 50%;
    border: 1px solid red;

    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }
</style>
