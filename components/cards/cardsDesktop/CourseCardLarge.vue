<template>
  <v-card v-if="$vuetify.breakpoint.smAndUp" width="290" flat outlined>
    <v-img src="/images/jonasjscourseimage.jpg" width="100%" height="auto">
    </v-img>
    <v-card-title
      class="text-body-1 text-lg-h6 font-weight-medium py-1"
      style="word-break: keep-all"
      >The complete Javascript Bootcamp 2020 : Build Real Projects</v-card-title
    >
    <v-card-subtitle
      class="text-secondary text-caption text-lg-body-1 my-1 py-0"
    >
      Brad traversy
    </v-card-subtitle>
    <v-card-actions class="py-0 mt-1 mb-2">
      <span class="ratingNumber">{{ rating }}</span>
      <v-rating
        v-model="rating"
        style="display: inline-block"
        readonly
        dense
        half-increments
        :small="$vuetify.breakpoint.mdAndDown"
      ></v-rating>
      <v-card-subtitle
        class="text-secondary text-caption text-lg-body-1 py-0 my-0"
        >554 ratings</v-card-subtitle
      >
    </v-card-actions>

    <v-card-subtitle class="py-0 my-1">
      <span class="font-weight-bold text-body-1 orange--text"> $700 </span>
      <span class="text-decoration-line-through font-weight-thin pl-2"
        >$1200</span
      >
    </v-card-subtitle>
    <v-card-actions class="mt-2 mb-3 py-0">
      <v-card-subtitle
        class="text-secondary text-caption text-lg-body-1 pa-0 ma-0"
      >
        15 hours &#8211;
      </v-card-subtitle>
      <v-card-subtitle
        class="text-secondary text-caption text-lg-body-1 pa-0 ma-0"
        >23 sections &#8211;</v-card-subtitle
      >
      <v-card-subtitle
        class="text-secondary text-caption text-lg-body-1 pa-0 ma-0"
        >all levels</v-card-subtitle
      >
    </v-card-actions>
  </v-card>
</template>
