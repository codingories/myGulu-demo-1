<template>
  <div class="g-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script lang="js">

export default {
  name: "GuluNavItem",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selected: false
    }
  },
  methods: {
    onClick() {
      console.log('xxx')
      this.$emit('add:selected', this.name)
    }
  }
}

</script>

<style lang="scss" scoped>
.g-nav-item {
  padding: 10px 20px;
  &.selected {
    background: red;
  }
}
</style>

