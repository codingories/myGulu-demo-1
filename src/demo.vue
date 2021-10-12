<template>
  <div>
    {{fileList}}
    <g-uploader accept="image/*" method="POST" action="http://127.0.0.1:3000/upload" name="file"
                :parseResponse="parseResponse" :fileList.sync="fileList"
    >
      <button>上传</button>
      <template slot="tips">
        <div>只能上传 300 kb 以内的 png,jpeg 文件</div>
      </template>
    </g-uploader>
  </div>
</template>
<script>
import GUploader from './uploader'

export default {
  name: '',
  components: {
    'GUploader': GUploader,
  },

  data() {
    return {
      fileList: [],
    }
  },
  methods: {
    parseResponse(response) {
      let object = JSON.parse(response)
      let url = `http://127.0.0.1:3000/preview/${object.id}`
      return url
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
