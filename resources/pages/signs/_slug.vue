<template>
  <div>
    <component v-bind:is="slide"></component>
  </div>
</template>

<script>
import SlidesMixin from '~plugins/slides';
import axios from '~plugins/axios';
export default {
  mixins: [
    SlidesMixin
  ],

  layout: 'sign-layout',

  async asyncData ({ params }) {
    let apiRes = await axios.get(`/api/sign/${params.slug}`)
    let data = apiRes.data;

    return {
      slide: data.slide
    }
  },

  computed: {
    slug () {
      return this.$route.params.slug;
    }
  },

  validate({ params }) {
    return /^[\w\d\-]+$/.test(params.slug);
  }
}
</script>

<style lang="scss">
@import '~assets/css/variables';

.Whale {
  width: 50vw;
  height: auto;
}

</style>
