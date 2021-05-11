<template>
   <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
      <g-icon class="icon" v-if="icon" :name="icon"></g-icon>
      <g-icon class="loading" :name="'loading'"></g-icon>

      <div class="content">
         <slot></slot>
      </div>
   </button>
</template>
<script>
  export default {
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
   @keyframes spin {
      0% {transform: rotate(0deg);}
      100% {transform: rotate(360deg);}
   }
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
         margin-right: .1em;
      }

      &.icon-right{
         border: 1px solid red;

         > .content {
            order: 1;
            margin-left: .1em;
            margin-right: 0;
         }
         > .icon {
            order: 2
         }
      }
      .loading {
         animation: spin 2s infinite linear;
      }
   }
</style>
