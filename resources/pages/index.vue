<template>
  <div>
    <v-list two-line subheader>
    <v-subheader>Active Signs</v-subheader>
    <v-list-item>
      <v-list-tile avatar ripple>
        <v-list-tile-content>
          <v-list-tile-title>Kids A</v-list-tile-title>
          <v-list-tile-sub-title>demo</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list-item>
    <v-list-item>
      <v-list-tile avatar v-ripple="{ class: 'green--text text--darken-2' }">
        <v-list-tile-content>
          <v-list-tile-title>Kids B</v-list-tile-title>
          <v-list-tile-sub-title>demo</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list-item>
  </v-list>
    <div class="pt-4">
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
