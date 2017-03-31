<template>
  <div class="Sign">
    <nuxt/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '~assets/css/variables';

html, body {
  height: 100%;
}

body {
  background-color: $black;
  color: $white;
  font-size: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 3vw 0;
  font-weight: normal;
}

small {
  font-size: 0.6em;
}

.Sign {
  flex: 0 1 auto;
  text-align: center;
  padding: 0.5em;
}

</style>
