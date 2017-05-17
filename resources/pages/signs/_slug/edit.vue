<template>
  <section>
    <v-row>
      <v-col xs12>
        <h2>Edit Sign {{ sign.name }}</h2>
        <v-text-field
          v-model="sign.name"
          label="Sign Name"
          required
          class="mt-4"
          ></v-text-field>

        <v-text-field
          v-model="sign.slug"
          label="Sign Slug"
          hint="Used by the sign computer to load the correct sign"
          persistent-hint
          required
          class="mt-4"
          ></v-text-field>

        <v-text-field multi-line
          v-model="sign.description"
          label="Description"
          class="mt-5"
          ></v-text-field>

        <v-select
          v-model="sign.default_slide"
          :items="slides"
          label="Current Slide"
          required
          class="mt-4"
        ></v-select>
        {{ sign }}
      </v-col>
    </v-row>
  </section>
</template>

<script>
import axios from '~plugins/axios';
export default {

  async asyncData ({ params }) {
    let apiRes = await axios.get(`/api/sign/${params.slug}`)
    let data = apiRes.data;

    return {
      sign: data,
      slides: ['SlideDemo', 'KidsVideo']
    }
  }

}
</script>
