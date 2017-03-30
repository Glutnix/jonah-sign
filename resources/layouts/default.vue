<template>
  <div>
    <nav-bar/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~components/Footer.vue';
import NavBar from '~components/NavBar.vue';

export default {
  components: {
    MyFooter,
    NavBar
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/variables';

.container
{
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}

.button, .button:visited
{
  display: inline-block;
  color: $purple;
  letter-spacing: 1px;
  background-color: $white;
  border: 2px solid $purple;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: $white;
  background-color: $purple;
}

.title
{
  color: $gray;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
