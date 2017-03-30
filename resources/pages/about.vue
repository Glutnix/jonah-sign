{{{{raw}}}}
<template>
  <section class="container">
    <img src="../assets/img/jonah-whale.svg" alt="$" class="logo" />
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
{{{{/raw}}}}
<script>
export default {
  asyncData ({ req }) {
    return {
      name: req ? 'server' : 'client'
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
@import '../assets/css/variables';

.title
{
  margin-top: 50px;
}
.info
{
  font-weight: 300;
  color: $gray;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 50px;
}
</style>
