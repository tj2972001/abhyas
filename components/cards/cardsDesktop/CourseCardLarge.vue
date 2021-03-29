<template>
  <v-card
    v-if="$vuetify.breakpoint.smAndUp"
    class="course-card-large"
    flat
    outlined
  >
    <img
      src="/images/jonasjscourseimage.jpg"
      class="course-card-large__image"
    />

    <div class="course-card-large__title">
      The complete Javascript Bootcamp 2020 : Build Real Projects
    </div>
    <div class="text-secondary course-card-large__author">Brad traversy</div>
    <div class="course-card-large__ratings">
      <v-rating
        v-model="rating"
        class="course-card-large__ratings--ratingsBar"
        readonly
        dense
        half-increments
        :small="$vuetify.breakpoint.mdAndDown"
      ></v-rating>
      <span class="text-secondary course-card-large__ratings--ratingsCount"
        >554 ratings</span
      >
    </div>

    <div class="course-card-large__price">
      <span class="course-card-large__price--amount"> $700 </span>
      <span class="course-card-large__price--discountedAmount">$1200</span>
    </div>
    <div class="course-card-large__details">
      <span>13 hours - 23 sections - All levels </span>
    </div>
  </v-card>
</template>
<script></script>
<style scoped lang="scss">
@import '/assets/scss/abstracts/variables';
.course-card-large {
  width: 20rem;
  & > *:not(:first-child) {
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }
  &__image {
    width: 100%;
  }
  &__title {
    margin-top: 0.625rem;
    word-break: keep-all;
    font-family: 'Roboto', Serif;
    font-weight: 500;
    font-size: 1.125rem;
  }
  &__author {
    margin-top: 0.5rem;
    font-size: 0.875rem;
  }
  &__ratings {
    height: 0.625rem;
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    margin-top: 0.625rem;
    margin-bottom: 0.5rem;
    &--ratingsBar {
    }
    &--ratingsCount {
      margin-left: 0.625rem;
      align-self: center;
    }
  }
  &__price {
    margin-top: 0.625rem;
    &--amount {
      font-weight: bold;
      color: $color-orange-medium;
      font-size: 1.125rem;
    }
    &--discountedAmount {
      text-decoration: line-through;
      margin-left: 1.25rem;
      font-size: 1rem;
    }
  }
  &__details {
    margin-top: 0.3rem;
    font-family: 'Roboto', Serif;
    font-weight: 500;
    font-size: 0.875rem;
    margin-bottom: 0.625rem;
    word-break: keep-all;
  }
}
</style>
