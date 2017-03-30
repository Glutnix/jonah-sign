{{{{raw}}}}
<template>
  <section class="container">
    <img src="~assets/img/jonah-whale.svg" alt="" />
    <h1 class="title">
      {{ error.statusCode }}
    </h1>
    <h2 class="info">
      {{ error.message }}
    </h2>
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
      Homepage
    </nuxt-link>
  </section>
</template>
{{{{/raw}}}}
<script>
export default {
  props: ['error']
}
</script>

<style lang="scss" scoped>
@import '~assets/css/variables';

.title
{
  margin-top: 15px;
  font-size: 5em;
}
.info
{
  font-weight: 300;
  color: $lightgray;
  margin: 0;
}
.button
{
  margin-top: 50px;
}
</style>
