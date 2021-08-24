<template>
  <div style="margin-top:20px">
    <g-tabs :selected="selected">
      <g-tabs-head>
        <g-tabs-item name="1">1</g-tabs-item>
        <g-tabs-item name="2">2</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">content 1</g-tabs-pane>
        <g-tabs-pane name="2">content 2</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>

<script>
import Button from '@/button/button.vue'
import GTabs from '@/tabs/tabs'
import GTabsBody from '@/tabs/tabs-body'
import GTabsHead from '@/tabs/tabs-head'
import GTabsItem from '@/tabs/tabs-item'
import GTabsPane from '@/tabs/tabs-pane'

export default {
  data() {
    return {
      selected:'1'
    }
  },
  components: {
    'g-button': Button,
    GTabs,GTabsBody,GTabsHead,GTabsItem,GTabsPane
  }
}
</script>
