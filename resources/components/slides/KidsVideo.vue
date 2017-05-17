<template>
  <div class="slide" :style="background">
    {{ signName }}

    <p>
      {{ slideProps.video }}
    </p>
  </div>
</template>

<script>

export default {
  props: {
    slideProps: {
      default() {
        return {
          video: ''
        }
      }
    }
  },
  computed: {
    signName() {
      return this.$route.params.slug
    },
    background() {
      return `background-image: url(/storage/${this.slideProps.video})`
    }
  }
}
</script>

<style lang="scss" scoped>
.slide {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
