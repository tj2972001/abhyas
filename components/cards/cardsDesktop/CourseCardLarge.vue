<template>
  <v-card v-if="$vuetify.breakpoint.smAndUp" width="290" flat outlined>
    <v-img src="/images/jonasjscourseimage.jpg" width="100%" height="auto">
    </v-img>
    <v-card-title
      class="text-h6 font-weight-body-1 py-2"
      style="word-break: keep-all"
      >The complete Javascript Bootcamp 2020 : Build Real Projects</v-card-title
    >
    <v-card-subtitle class="text-secondary my-0 py-0">
      Brad traversy
    </v-card-subtitle>
    <v-card-actions>
      <span class="ratingNumber">{{ rating }}</span>
      <v-rating
        v-model="rating"
        class="py-1"
        style="display: inline-block"
        readonly
        dense
        half-increments
        :small="$vuetify.breakpoint.mdAndDown"
      ></v-rating>
      <span class="text--secondary font-weight-medium">554 ratings</span>
    </v-card-actions>

    <v-card-subtitle class="py-1">
      <span class="font-weight-bold text-body-1 orange--text"> $700 </span>
      <span class="text-decoration-line-through font-weight-thin pl-2"
        >$1200</span
      >
    </v-card-subtitle>
    <v-card-text
      class="text--secondary d-flex flex-space-between font-weight-medium text-body-2 py-1"
    >
      <div>15 total hours |</div>
      <div class="ml-1">23 sections |</div>
      <div class="ml-1">all levels</div>
    </v-card-text>
  </v-card>
</template>
