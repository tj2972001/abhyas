<template>
  <div class="course-card-large">
    <img src="https://picsum.photos/400/250" class="course-card-large__image" />

    <div class="course-card-large__title">
      The complete Javascript Bootcamp 2020 : Build Real Projects
    </div>
    <div class="course-card-large__author">Brad traversy</div>
    <div class="course-card-large__ratings">
      <span class="course-card-large__ratings--ratingsNumber">{{
        rating
      }}</span>
      <star-rating
        v-model="rating"
        :show-rating="false"
        star-size="12"
        :increment="0.1"
        :inline="true"
        active-border-color="#ffd055"
        read-only="true"
        class="course-card-large__ratings--ratingsBar"
      />
      <span class="course-card-large__ratings--ratingsCount">(322,165)</span>
    </div>

    <div class="course-card-large__price">
      <span class="course-card-large__price--amount"> $700 </span>
      <!-- <span class="course-card-large__price--discountedAmount">$1200</span> -->
    </div>
  </div>
</template>
<script>
import StarRating from 'vue-star-rating'
export default {
  components: {
    StarRating,
  },
  data() {
    return {
      rating: (Math.random() * 5).toFixed(1),
    }
  },
}
</script>
<style scoped lang="scss">
@import '/assets/scss/abstracts/variables';
.course-card-large {
  width: 100%;
  max-width: 18rem;
  padding: 0;
  margin: 0;
  &__image {
    width: 100%;
  }
  &__title {
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
    line-height: 1.2;
    word-break: keep-all;
    font-family: 'Roboto', Serif;
    font-weight: 700;
    font-size: 1rem;
  }
  &__author {
    line-height: 1.05;
    font-size: 0.75rem;
    font-weight: 400;
    text-overflow: ellipsis;
    margin-bottom: 0.25rem;
    color: $color-grey-medium;
  }
  &__ratings {
    height: 0.625rem;
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    margin-top: 0.625rem;
    margin-bottom: 0.5rem;
    line-height: 1.05rem;

    &--ratingsNumber {
      font-size: 0.875rem;
      font-weight: 700;
      margin-right: 0.25rem;
      color: $color-orange-dark;
    }
    &--ratingsBar {
    }
    &--ratingsCount {
      font-size: 0.75rem;
      font-weight: 500;
      margin-left: 0.25rem;
      color: $color-grey-dark;
    }
  }
  &__price {
    padding: 0.25rem 0;
    color: $color-black-pure;
    &--amount {
      font-weight: 700;
      font-size: 1rem;
    }
    &--discountedAmount {
      text-decoration: line-through;
      font-weight: 700;
      font-size: 0.7rem;
    }
  }
}
</style>
