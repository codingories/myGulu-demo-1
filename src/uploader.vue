<template>
  <div class="gulu-uploader">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <ol class="gulu-uploader-fileList">
      <li v-for="file in fileList" :key="file.name">

        <template v-if="file.status === 'uploading'">
          <g-icon name="loading" class="gulu-uploader-spin"></g-icon>
        </template>

        <template v-else-if="file.type.indexOf('image') === 0">
          <img class="gulu-uploader-image" :src="file.url" width="32" height="32" alt="">
        </template>
        <template v-else>
          <div class="gulu-uploader-defaultImage"></div>
        </template>
        <span class="gulu-uploader-name" :class="{[file.status]: file.status}">{{ file.name }}</span>
        <button class="gulu-uploader-remove" @click="onRemoveFile(file)">x</button>
      </li>
    </ol>
    <div ref="temp" style="width: 0;height: 0;  overflow:hidden;"></div>

  </div>
</template>
<script>
import GIcon from './icon'

export default {
  name: 'GuluUploader',
  components: {GIcon},
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
    },
    sizeLimit: {
      type: Number
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
        this.uploadFiles(input.files)
        // this.uploadFiles(input.files)
        input.remove()
      })
      input.click()
    },
    // uploadFiles(files) {
    //   let formData = new FormData()
    //   for (let i = 0; i < files.length; i++) {
    //     formData.append(this.name, files[i])
    //   }
    //   let xhr = new XMLHttpRequest()
    //   xhr.open(this.method, this.action)
    //   xhr.send(formData)
    // },
    afterUploadFiles(newName, url) {
      console.log('fuck111111')
      // 首先从fileList找到要更新的file同时拿到它的index
      let file = this.fileList.filter(f => f.name === newName)[0]
      console.log('file')
      console.log(file)
      let index = this.fileList.indexOf(file)
      // copy一下这个file，然后改它的两个内容一个是url一个是status
      let fileCopy = JSON.parse(JSON.stringify(file))
      fileCopy.url = url
      fileCopy.status = 'success'
      console.log(`fileCopy`)
      console.log(fileCopy)
      let fileListCopy = [...this.fileList]
      fileListCopy.splice(index, 1, fileCopy)
      // 得到新的fileList然后emit出去
      this.$emit('update:fileList', fileListCopy)
    },
    uploadFiles(rawFiles) {
      let newNames = []
      for (let i = 0; i < rawFiles.length; i++) {
        let rawFile = rawFiles[i]
        let {name, size, type} = rawFile
        let newName = this.generateName(name)
        newNames[i] = newName
      }

      if(!this.beforeUploadFiles(rawFiles, newNames)) {
        return
      }

      for (let i = 0; i < rawFiles.length; i++) {
        let rawFile = rawFiles[i]
        let newName = newNames[i]
        let formData = new FormData();


        // let rawFile = rawFiles[i]
        // let {name, size, type} = rawFile
        // let newName = this.generateName(name)


        formData.append(this.name, rawFile);
        this.doUploadFiles(formData, (response) => {
          let url = this.parseResponse(response)
          this.url = url
          // 生成新的name
          this.afterUploadFiles(newName, url)  // file 1 文件实体 2 {name, type, size} 自己定义的对象
        }, (xhr) => {
          this.uploadError(xhr, newName)
        })
      }


    },
    uploadError(xhr, newName) {
      let file = this.fileList.filter(f => f.name === newName)[0]
      console.log('fuck1', file)
      let index = this.fileList.indexOf(file)
      let fileCopy = JSON.parse(JSON.stringify(file))
      fileCopy.status = 'fail'
      let fileListCopy = [...this.fileList]
      fileListCopy.splice(index, 1, fileCopy)
      this.$emit('update:fileList', fileListCopy)
      let error = ''
      if (xhr.status === 0) {
        error = '网络无法连接'
      }
      this.$emit('error', error)
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
    doUploadFiles(formData, success, fail) {
      let xhr = new XMLHttpRequest()
      console.log('生成了 xhr')
      xhr.open(this.method, this.action)
      xhr.onload = () => {
        success(xhr.response)
      }
      xhr.onerror = () => {
        fail(xhr, xhr.statusCode)
      }
      xhr.send(formData)
      console.log('结束 生成了 xhr')
    },

    createInput() {
      this.$refs.temp.innerHTML = ""
      let input = document.createElement('input')
      input.accept = 'image/*'
      input.type = 'file'
      input.multiple = true
      this.$refs.temp.appendChild(input)
      return input
    },
    beforeUploadFiles(rawFiles, newNames) {
      rawFiles = Array.from(rawFiles)
      for(let i=0; i< rawFiles.length; i++) {
        let {size, type} = rawFiles[i]
        if (size > this.sizeLimit) {
          this.$emit('error', '文件大于2MB')
          return false
        }
      }

      // this.$emit('update:fileList', [...this.fileList, {name: newName, type, size, status: "uploading"}])
      let x = rawFiles.map((rawFile, i) => {
        let {type, size} = rawFile;
        return {name: newNames[i], type, size, status: "uploading"}
      })
      this.$emit('update:fileList', [...this.fileList, ...x])
      return true
    }
  }
}
</script>
<!--<style lang='scss' scoped>-->
<!--@import '../src/styles/var';-->

<!--.gulu-uploader {-->

<!--  &-fileList {-->
<!--    list-style: none;-->

<!--    > li {-->
<!--      display: flex;-->
<!--      align-items: center;-->
<!--      margin: 8px 0;-->
<!--      border: 1px solid darken($grey, 10%);-->
<!--    }-->
<!--  }-->

<!--  &-defaultImage {-->
<!--    border: 1px solid red;-->
<!--    width: 32px;-->
<!--    height: 32px;-->
<!--    margin-right: 8px;-->
<!--  }-->

<!--  &-image {-->
<!--    margin-right: 8px;-->
<!--  }-->

<!--  &-name {-->
<!--    margin-right: auto;-->

<!--    &.success {-->
<!--      color: green;-->
<!--    }-->

<!--    &.fail {-->
<!--      color: red;-->
<!--    }-->
<!--  }-->

<!--  &-remove {-->
<!--    width: 32px;-->
<!--    height: 32px;-->
<!--  }-->

<!--  &-spin {-->
<!--    width: 32px;-->
<!--    height: 32px;-->
<!--    @include spin;-->
<!--  }-->
<!--}-->
<!--</style>-->
