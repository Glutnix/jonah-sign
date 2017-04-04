<template>
  <div>

    <img src="~assets/img/jonah-whale.svg" alt="" class="Whale" />
    <h1>Jonah Sign</h1>
    <hr />
    <h2>
      sign id: <code>{{ slug }}</code>
    </h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <p>
      Some regular text that wraps, complete with 😇 {{ slideProps.banana }}👼 emoji
    </p>
    <p>
      <small>Some smaller text</small>
    </p>

  </div>
</template>

<script>
export default {
  props: {
    slideProps: {
      default() {
        return {
          banana: '🗑'
        }
      }
    }
  },
  computed: {
    slug() {
      return this.$route.params.slug
    }
  }
}
</script>
