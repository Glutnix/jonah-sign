<template>
  <section class="container">
    <img src="~assets/img/jonah-whale.svg" alt="" class="logo" />
    <h1 class="title">
      This page is loaded from the {{ name }}
    </h1>
    <h2 class="info" v-if="name === 'client'">
      Please refresh the page
    </h2>
    <nuxt-link class="button" to="/">
      Home page
    </nuxt-link>
  </section>
</template>

<script>
export default {
  asyncData ({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  },
  data() {
    return {
      name: 'client'
    }
  },
  head () {
    return {
      title: `About Page (${this.name}-side)`
    }
  }
}
</script>

<style lang="scss" scoped>

.logo {
  width: 340px;
  height: auto;
}

</style>
