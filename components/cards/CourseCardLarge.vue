<template>
  <v-card v-if="$vuetify.breakpoint.smAndUp" width="280" class="ma-5">
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
    <v-card-actions class="ratingsBlock">
      <span class="ratingNumber">{{ rating }}</span>
      <v-rating
        v-model="rating"
        class="pa-1"
        style="display: inline-block"
        readonly
        dense
        half-increments
      ></v-rating>
      <span class="text--secondary font-weight-medium">554 ratings</span>
    </v-card-actions>
    <v-card-actions
      class="ratingsBlock text--secondary font-weight-light d-flex align-center justify-center"
    >
      <span> 15 total hours </span>
      <span class="ml-2"> 23 sections</span>
      <span class="ml-2"> all levels </span>
    </v-card-actions>
  </v-card>
</template>
