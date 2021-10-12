<template>
  <div class="gulu-uploader">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <div ref="temp" style="width: 0;height: 0;  overflow:hidden;"></div>
    <ol>
      <li v-for="file in fileList" :key="file.name">
        <template v-if="file.status === 'uploading'">
          菊花
        </template>
        <img :src="file.url" width="100" height="100" alt="">
        <button @click="onRemoveFile(file)">x</button>
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
    onRemoveFile(file) {
      let answer = window.confirm('你确定要删除这玩意儿吗')
      if (answer) {
        let copy = [...this.fileList]
        let index = copy.indexOf(file)
        copy.splice(index, 1)
        this.$emit('update:fileList', copy)
      }
    },
    onClickUpload() {
      let input = this.createInput()
      input.addEventListener('change', () => {
        this.uploadFile(input.files[0])
        input.remove()
      })
      input.click()
    },
    afterUploadFile(newName, url) {
      // 首先从fileList找到要更新的file同时拿到它的index
      let file = this.fileList.filter(f => f.name === newName)[0]
      let index = this.fileList.indexOf(file)
      // copy一下这个file，然后改它的两个内容一个是url一个是status

      let fileCopy = JSON.parse(JSON.stringify(file))
      fileCopy.url = url
      fileCopy.status = 'success'
      let fileListCopy = [...this.fileList]
      fileListCopy.splice(index, 1, fileCopy)
      // 得到新的fileList然后emit出去
      this.$emit('update:fileList', fileListCopy)
    },
    uploadFile(rawFile) {
      let {name, size, type} = rawFile
      let newName = this.generateName(name)
      this.beforeUploadFile(rawFile, newName)
      let formData = new FormData();
      formData.append(this.name, rawFile);
      this.doUploadFile(formData, (response) => {
        let url = this.parseResponse(response)
        this.url = url
        // 生成新的name
        this.afterUploadFile(newName,  url)  // file 1 文件实体 2 {name, type, size} 自己定义的对象
      })
    },
    generateName(name) {
      while (this.fileList.filter(f => f.name === name).length > 0) {
        let dotIndex = name.lastIndexOf('.')
        let nameWithoutExtension = name.substring(0, dotIndex)
        let extension = name.substring(dotIndex)
        name = nameWithoutExtension + '(1)' + extension
      }
      return name
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
    },
    beforeUploadFile(rawFile, newName, url) {
      let {size, type} = rawFile
      this.$emit('update:fileList', [...this.fileList, {name: newName, type, size, status: "uploading"}])
    }
  }
}
</script>
<style lang='scss' scoped>
.gulu-uploader {

}
</style>
