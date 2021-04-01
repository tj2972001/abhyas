<template>
  <div class="course-details-container">
    <section class="course-details">
      <h4 class="course-details__title">
        Spring MVC For Beginners - Build Java Web App in 25 Steps
      </h4>
      <p class="course-details__subtitle">
        Get advanced with Node.Js! Learn caching with Redis, speed up through
        clustering, and add image upload with S3 and Node!
      </p>
      <div class="course-details__ratings">
        <span class="course-details__ratings--rating-number">
          4.8 ratings
        </span>
        <v-rating
          v-model="rating"
          class="course-details__ratings--rating-bar"
          style="display: inline-block"
          readonly
          dense
          color="#d49b1e"
          half-increments
        ></v-rating>
        <span class="course-details__ratings--total-students-count"
          >243455 students</span
        >
      </div>
      <div class="course-details__created-by">
        Created by <nuxt-link to="/instructor/tejas">Stphan Grider</nuxt-link>
      </div>
      <div class="course-details__update">
        <div class="course-details__update--last-updated">
          <fa-icon class="course-details__icon" name="exclamation"></fa-icon>
          Last updated : september 2020
        </div>
        <div class="course-details__update--language">
          <fa-icon class="course-details__icon" name="globe-asia"></fa-icon>
          English
        </div>
      </div>
      <div class="course-details__buttons">
        <v-btn color="#fff" outlined>
          Wishlist
          <fa-icon
            class="course-details__icon"
            name="regular/heart"
            scale="1.7"
          ></fa-icon
        ></v-btn>
        <v-btn color="#fff" outlined>
          Share
          <fa-icon
            class="course-details__icon"
            name="regular/share-square"
            scale="1.7"
          ></fa-icon
        ></v-btn>
        <v-btn color="#fff" outlined>
          Gift this course<fa-icon
            scale="1.7"
            class="course-details__icon"
            name="gift"
          ></fa-icon>
        </v-btn>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  layout: '',
}
</script>
<style lang="scss" scoped>
@import '/assets/scss/abstracts/variables';
.course-details-container {
  width: 100vw;
  background-color: $color-black-pure;
  margin-bottom: 3rem;
}
.course-details {
  margin-top: 1.5rem;
  color: $color-white-pure;
  padding: 3rem 5rem;
  margin-top: 0;
  width: 65%;
  font-family: 'Roboto', sans-serif;
  & > * {
    margin-top: 0.7rem;
  }
  &__title {
    font-weight: 700;
    font-size: 2rem;
  }
  &__subtitle {
    font-size: 1.2rem;
  }
  &__ratings {
    display: flex;
    margin-top: 1rem;
    align-items: baseline;
    & > *:not(:last-child) {
      margin-right: 1rem;
    }
    &--rating-number {
    }
    &--rating-bar {
    }
    &--total-students-count {
    }
  }
  &__created-by {
  }
  &__update {
    display: flex;
    & > *:not(:first-child) {
      margin-left: 2rem;
    }
    &--last-updated {
      display: flex;
      align-items: baseline;
    }
    &--language {
      display: flex;
      align-items: baseline;
    }
  }
  &__buttons {
    display: flex;
    & > *:not(:last-child) {
      margin-right: 1rem;
    }
  }
  &__icon {
    color: $color-white-pure;
    margin: 0.5rem;
  }
}
</style>
