<template>
  <div class="pt-4">
    <div>
      <div class="title">Change Signs</div>
      <active-signs></active-signs>
    </div>
    <file-uploader accept="gif,png,jpg" v-on:formData="fileChangedFormData"></file-uploader>
    {{ output }}
  </div>
</template>

<script>
import axios from '~plugins/axios';

import FileUploader from '~components/panel/FileUploader.vue';
import ActiveSigns from '~components/panel/ActiveSigns.vue';

export default {
  components: {
    'file-uploader': FileUploader,
    'active-signs': ActiveSigns,
  },
  data() {
    return {
      output: '',
    }
  },
  methods: {
    fileChangedFormData(formData) {
      var config = {
        onUploadProgress: function(progressEvent) {
          var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
        }
      };

      axios.put('/upload/image', formData, config)
        .then((res) => {
          this.output = res.data;
        })
        .catch((err) => {
          this.output = err.message;
        });
    }
  }
}
</script>
