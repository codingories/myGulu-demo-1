---

title: Input

---

# 输入框


## 预览
<ClientOnly>
<input-demo-1></input-demo-1>
</ClientOnly>

## 代码

```vue

<template>
  <div style="padding-top: 16px;">
    <g-input value="中文"></g-input>
    <g-input value="中文" disabled></g-input>
    <g-input value="中文" readonly></g-input>
  </div>
</template>

<script>
  import GInput from '@/src/input'
  export default {
    components: {GInput},
    data () {
      return {
      }
    }
  }

</script>

```

## 双向绑定
<ClientOnly>
<input-demo-2></input-demo-2>
</ClientOnly>

## 代码

```vue

<template>
  <div style="padding-top: 16px;">
    <g-input v-model="value"></g-input>
    <div>
      value: {{value}}
    </div>
  </div>
</template>

<script>

import GInput from '@/input'
export default {
  components: {GInput},
  data () {
    return {
      value: '1',
    }
  }
}

</script>

```
