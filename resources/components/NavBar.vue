<template>
  <nav>
    <h1>
      <nuxt-link class="button" to="/">
        <img class="logo" src="../assets/img/jonah-whale.svg" alt="" />
        Jonah Sign
      </nuxt-link>
    </h1>
  </nav>
</template>

<style lang="scss" scoped>
@import '../assets/css/variables';

nav {
  padding: 10px 1em;
  background-color: $tan;
  color: $purple;
}

h1 {
  margin: 0;
}

a {
  text-decoration: none;
}

.logo {
  height: 1em;
  width: auto;
  vertical-align: middle;
}

</style>
