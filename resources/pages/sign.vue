<template>
  <div>
    <img src="~assets/img/jonah-whale.svg" alt="" class="Whale" />
    <h1>Jonah Sign</h1>
    <hr />
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <p>
      Some regular text that wraps, complete with 😇 👼 emoji
    </p>
    <p>
      <small>Some smaller text</small>
    </p>
  </div>
</template>

<script>
export default {
  layout: 'sign-layout'
}
</script>

<style lang="scss">
@import '~assets/css/variables';

.Whale {
  width: 50vw;
  height: auto;
}

</style>
