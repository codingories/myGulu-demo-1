<template>
   <button class="g-button">
      <svg class="icon" v-if="icon" :class="{[`icon-${iconPosition}`]: true}">
         <use :xlink:href="`#i-${icon}`"></use>
      </svg>
      <div class="content">
         <slot></slot>
      </div>
   </button>
</template>
<script>
  export default {
     // props: ['icon', 'iconPosition']
     props: {
        icon: {},
        iconPosition: {
           type: String,
           default: 'left',
           validator(value){
              if (value !== 'left' && value !=='right'){
                 return false
              } else {
                 return true
              }
           }
        }
     }
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
      display: inline-flex;justify-content: center;align-items: center;
      vertical-align: middle;
     &:hover {
       border-color: var(--border-color-hover);
     }
     &:active {
       background-color: var(--button-active-bg);
     }
     &:focus {
       outline: none;
     }
      > .content {
         order: 2;
      }
      > .icon {
         order: 1;
         margin-right: .3em;
      }

      & .icon-right{
         > .icon {
            order: 2
         }
         > .content {
            order: 1;
            margin-left: .3em;
            margin-right: 0;
         }
      }
   }
</style>
