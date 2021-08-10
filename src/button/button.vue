<template>
   <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
      <g-icon class="icon"  v-if="icon && !loading" :name="icon"></g-icon>
      <g-icon class="loading icon" v-if="loading" :name="'loading'"></g-icon>
      <div class="content">
         <slot></slot>
      </div>
   </button>
</template>
<script>
  import Icon from '../icon'
  export default {
      components: {
         'g-icon': Icon
      },
     props: {
        icon: {},
        loading: {
           type: Boolean,
           default: false
        },
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
<style lang="scss" scoped>
   @import "../styles/var";
   .box-shadow {
     box-shadow: 0 0 5px rgba(0,0,0,0.15)
   }

   @keyframes spin {
     0% {transform: rotate(0deg);}
     100% {transform: rotate(360deg);}
   }


   .g-button {
     font-size: $font-size;
     height: $button-height;
     /*加宽度不好用padding*/
     padding: 0 1em; /*width*/
     border-radius: $border-radius;
     border: 1px solid $border-color;
     background: $button-bg;
      display: inline-flex;justify-content: center;align-items: center;
      vertical-align: middle;
     &:hover {
       border-color: $border-color-hover;
     }
     &:active {
       background-color: $button-active-bg;
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
