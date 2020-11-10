<template>
  <v-card
    v-if="$vuetify.breakpoint.smAndUp"
    width="290"
    class="ma-5"
    flat
    outlined
  >
    <v-img src="/images/jonasjscourseimage.jpg" width="100%" height="auto">
    </v-img>
    <v-card-title
      class="text-h6 font-weight-medium"
      style="word-break: keep-all"
      >The complete Javascript Bootcamp 2020 : Build Real Projects</v-card-title
    >
    <v-card-subtitle class="text-secondary py-1">
      Brad traversy
    </v-card-subtitle>

    <v-progress-linear
      v-model="knowledge"
      height="25"
      class="mx-auto my-3"
      style="width: 90%"
    >
      <strong>{{ Math.ceil(knowledge) }}% completed</strong>
    </v-progress-linear>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    knowledge: 33,
  }),
}
</script>
