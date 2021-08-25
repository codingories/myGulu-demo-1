---
title: Button
---

# 按钮

## 简单使用 

<ClientOnly><button-demos-1></button-demos-1> </ClientOnly>

## 代码

```vue

<template>
  <div style="margin-top:20px">
    <g-button>默认按钮</g-button>
    <g-button icon="settings">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>
  </div>
</template>
<script>
import Button from '@/button/button.vue'
export default {
  data() {
    return {}
  },
  components: {
    'g-button': Button,
  }
}
</script>
```


