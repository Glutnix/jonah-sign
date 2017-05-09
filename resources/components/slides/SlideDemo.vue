<template>
  <div>

    <img src="~assets/img/jonah-whale.svg" alt="" class="Whale" />
    <h1>Jonah Sign</h1>
    <hr />
    <h2>
      sign id: <code>{{ signName }}</code>
    </h2>
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
    <p>
      From the database: {{ slideProps.banana }}
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
    signName() {
      return this.$route.params.slug
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
