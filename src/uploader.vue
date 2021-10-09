<template>
  <div class="gulu-uploader">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <div ref="temp" style="width: 0;height: 0;  overflow:hidden;"></div>
    <img :src="url"  alt=""/>
  </div>
</template>
<script>
export default {
  name: 'GuluUploader',
  props: {
    name: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    },
    method: {
      type: String,
      default: 'POST'
    },
    parseResponse: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      url: 'about:blank'
    }
  },
  methods: {
    onClickUpload() {
      let input = document.createElement('input')
      input.type = 'file'
      this.$refs.temp.appendChild(input)
      input.addEventListener('change', () => {
        let file = input.files[0]
        input.remove()
        console.log(file)
        let formData = new FormData();
        formData.append(this.name, file);
        var xhr = new XMLHttpRequest()
        xhr.open(this.method, this.action)
        xhr.onload = () => {
          let url = this.parseResponse(xhr.response)
          this.url = url
        }
        xhr.send(formData)
      })
      input.click()
    }
  }
}
</script>
<style lang='scss' scoped>
.gulu-uploader {

}
</style>
