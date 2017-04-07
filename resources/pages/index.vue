<template>
  <div>
    <v-list two-line subheader>
    <v-subheader>Active Signs</v-subheader>
    <v-list-item>
      <v-list-tile avatar ripple>
        <v-list-tile-content>
          <v-list-tile-title>Kids A</v-list-tile-title>
          <v-list-tile-sub-title>demo</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list-item>
    <v-list-item>
      <v-list-tile avatar v-ripple="{ class: 'green--text text--darken-2' }">
        <v-list-tile-content>
          <v-list-tile-title>Kids B</v-list-tile-title>
          <v-list-tile-sub-title>demo</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list-item>
  </v-list>
  </div>
</template>

<style lang="scss" scoped>
</style>
