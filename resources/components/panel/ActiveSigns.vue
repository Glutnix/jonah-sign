<template>
  <div>
    <v-list two-line subheader v-if="signs">
      <v-subheader>Active Signs</v-subheader>
      <v-list-item v-for="sign in signs" :key="sign.id">
        <v-list-tile avatar ripple :href="signHref(sign)" nuxt router>
          <v-list-tile-content>
            <v-list-tile-title>{{ sign.name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ sign.default_slide }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import axios from '~plugins/axios';

export default {
  data () {
    return {
      signs: null
    }
  },
  mounted () {
    return axios.get(`/api/sign`)
    .then((res) => {
      console.log(res.data, this)
      this.$data.signs = res.data;
    })
  },
  methods: {
    signHref(sign) {
      return `signs/${sign.slug}/edit`
    }
  }
}
</script>
