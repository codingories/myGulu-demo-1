<template>
  <div class="gulu-uploader">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <div ref="temp" style="width: 0;height: 0;  overflow:hidden;"></div>
    <ol>
      <li v-for="file in fileList" :key="file.name">
        <img :src="file.url" width="100" height="100" alt="">
        {{ file.name }}
      </li>
    </ol>
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
    },
    fileList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      url: 'about:blank'
    }
  },
  methods: {
    onClickUpload() {
      let input = this.createInput()
      input.addEventListener('change', () => {
        let file = input.files[0]
        this.uploadFile(file)
        input.remove()
      })
      input.click()
    },
    uploadFile(file) {
      let formData = new FormData();
      formData.append(this.name, file);
      let {name, size, type} = file
      this.doUploadFile(formData, (response) => {
        let url = this.parseResponse(response)
        this.url = url
        while (this.fileList.filter(f => f.name === name).length > 0) {
          let dotIndex = name.lastIndexOf('.')
          let nameWithoutExtension = name.substring(0, dotIndex)
          let extension = name.substring(dotIndex)
          name = nameWithoutExtension + '(1)' + extension
        }
        console.log(`name2`, name)
        this.$emit('update:fileList', [...this.fileList, {name, type, size, url}])
      })
    },
    doUploadFile(formData, success) {
      let xhr = new XMLHttpRequest()
      xhr.open(this.method, this.action)
      xhr.onload = () => {
        success(xhr.response)
      }
      xhr.send(formData)
    },

    createInput() {
      let input = document.createElement('input')
      input.type = 'file'
      this.$refs.temp.appendChild(input)
      return input
    }
  }
}
</script>
<style lang='scss' scoped>
.gulu-uploader {

}
</style>
