<template>
  <v-app left-fixed-sidebar>
    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="sidebar = !sidebar" />
      <v-toolbar-title>
        <img class="logo" src="~assets/img/jonah-whale.svg" alt="" />
        Jonah Sign
      </v-toolbar-title>
    </v-toolbar>
    <main>
      <v-sidebar left fixed drawer v-model="sidebar">
        <v-list>
          <v-list-item>
            <v-list-tile nuxt router href="/">
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile nuxt router href="/about">
              <v-list-tile-title>About</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-sidebar>
      <v-content>
        <v-container fluid>
          <nuxt/>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
export default {
  asyncData() {
    return {
      sidebar: false
    }
  },
  data() {
    return {
      sidebar: false
    }
  }
}
</script>

<style lang="scss">
.logo {
  height: 30px;
  vertical-align: middle;
}
.toolbar__title a {
  text-decoration: none;
  color: #fff;
}
</style>

<style lang="styl">
@require '~assets/vuetify/app.styl'
</style>
