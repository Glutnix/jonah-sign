<template>
  <div>
    <component :is="slide" :slide-props="slideProps"></component>
  </div>
</template>

<script>
import SlideList from '~plugins/mixins/slideList';
import axios from '~plugins/axios';
export default {
  mixins: [
    SlideList
  ],

  layout: 'sign-layout',

  async asyncData ({ params }) {
    let apiRes = await axios.get(`/api/sign/${params.slug}`)
    let data = apiRes.data;

    return {
      slide: data.default_slide,
      slideProps: data.slide_props
    }
  },

  computed: {
    signName () {
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
