<template>
  <div class="g-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script lang="js">

export default {
  name: "GuluNavItem",
  inject: ['root'],
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
  created() {
    // 非常耦合，但是代码很简单
    this.root.addItem(this)
  },
  methods: {
    onClick() {
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

