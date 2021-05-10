<template>
   <button class="g-button">
      <svg class="icon" v-if="icon" :class="{[`icon-iconPosition`]: true}">
         <use :xlink:href="`#i-${icon}`"></use>
      </svg>
      <slot></slot>
   </button>
</template>
<script>
  export default {
     props: ['icon', 'iconPosition']
  }
</script>
<style lang="scss">
   .g-button {
     font-size: var(--font-size);
     height: var(--button-height);
     /*加宽度不好用padding*/
     padding: 0 1em; /*width*/
     border-radius: var(--border-radius);
     border: 1px solid var(--border-color);
     background: var(--button-bg);
     &:hover {
       border-color: var(--border-color-hover);
     }
     &:active {
       background-color: var(--button-active-bg);
     }
     &:focus {
       outline: none;
     }
   }
</style>
