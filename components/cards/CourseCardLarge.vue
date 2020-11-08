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
    <v-card-actions>
      <span class="ratingNumber">{{ rating }}</span>
      <v-rating
        v-model="rating"
        class="pa-1"
        style="display: inline-block"
        readonly
        dense
        half-increments
        :small="$vuetify.breakpoint.mdAndDown"
      ></v-rating>
      <span class="text--secondary font-weight-medium">554 ratings</span>
    </v-card-actions>

    <v-card-actions>
      <span class="font-weight-bold text-body-1 orange--text"> $700 </span>
      <span class="text-decoration-line-through font-weight-thin ml-4"
        >$1200</span
      >
    </v-card-actions>
    <v-card-text
      class="text--secondary d-flex flex-space-between font-weight-medium text-body-2"
    >
      <div>15 total hours |</div>
      <div class="ml-1">23 sections |</div>
      <div class="ml-1">all levels</div>
    </v-card-text>
  </v-card>
</template>
