<template>
  <section class="teacher-courses">
    <HeadingBlackH4 class="teacher-courses__heading"
      >Your courses</HeadingBlackH4
    >
    <div class="teacher-courses__list">
      <div class="teacher-courses__list-item">
        <img
          src="https://picsum.photos/400/250"
          class="teacher-courses__list-item--image"
        />
        <div class="teacher-courses__list-item--title">vue complete pack</div>
        <div class="teacher-courses__list-item--finish">Finish your course</div>
        <v-progress-linear
          v-model="knowledge"
          class="teacher-courses__list-item--progress"
          color="rgb(159, 207, 207)"
          height="20"
        >
          <strong>{{ Math.ceil(knowledge) }}% completed</strong>
        </v-progress-linear>
        <nuxt-link to="/teach/course/java-course/manage/basics">
          <button class="teacher-courses__list-item--manage-course">
            Manage course &rarr;
          </button></nuxt-link
        >
      </div>
      <div class="teacher-courses__list-item">
        <img
          src="https://picsum.photos/400/250"
          class="teacher-courses__list-item--image"
        />
        <div class="teacher-courses__list-item--title">vue complete pack</div>
        <div class="teacher-courses__list-item--finish">Finish your course</div>
        <v-progress-linear
          v-model="knowledge"
          class="teacher-courses__list-item--progress"
          color="rgb(159, 207, 207)"
          height="20"
        >
          <strong>{{ Math.ceil(knowledge) }}% completed</strong>
        </v-progress-linear>
        <nuxt-link to="/teach/course/java-course/manage/basics">
          <button class="teacher-courses__list-item--manage-course">
            Manage course &rarr;
          </button></nuxt-link
        >
      </div>
      <div class="teacher-courses__list-item">
        <img
          src="https://picsum.photos/400/250"
          class="teacher-courses__list-item--image"
        />
        <div class="teacher-courses__list-item--title">vue complete pack</div>
        <div class="teacher-courses__list-item--finish">Finish your course</div>
        <v-progress-linear
          v-model="knowledge"
          class="teacher-courses__list-item--progress"
          color="rgb(159, 207, 207)"
          height="20"
        >
          <strong>{{ Math.ceil(knowledge) }}% completed</strong>
        </v-progress-linear>
        <nuxt-link to="/teach/course/java-course/manage/basics">
          <button class="teacher-courses__list-item--manage-course">
            Manage course &rarr;
          </button></nuxt-link
        >
      </div>
      <div class="teacher-courses__list-item">
        <img
          src="https://picsum.photos/400/250"
          class="teacher-courses__list-item--image"
        />
        <div class="teacher-courses__list-item--title">vue complete pack</div>
        <div class="teacher-courses__list-item--finish">Finish your course</div>
        <v-progress-linear
          v-model="knowledge"
          class="teacher-courses__list-item--progress"
          color="rgb(159, 207, 207)"
          height="20"
        >
          <strong>{{ Math.ceil(knowledge) }}% completed</strong>
        </v-progress-linear>
        <nuxt-link to="/teach/course/java-course/manage/basics">
          <button class="teacher-courses__list-item--manage-course">
            Manage course &rarr;
          </button></nuxt-link
        >
      </div>
    </div>
  </section>
</template>
<script>
export default {
  layout: 'noNavBar',
  data() {
    return {
      knowledge: Math.random() * 100,
    }
  },
}
</script>
<style scoped lang="scss">
@import '/assets/scss/abstracts/variables';
.teacher-courses {
  &__heading {
    margin-top: 3rem;
  }
  &__list {
  }
  &__list-item {
    display: flex;
    margin: 2rem auto;
    align-items: center;
    border: 1px solid $color-grey-light;
    padding-right: 1rem;
    &--image {
      width: 10rem;
      height: auto;
      margin-left: 0;
    }
    &--title {
      margin-right: auto;
      margin-left: 1rem;
      font-weight: 500;
      font-size: 1.125rem;
    }
    &--finish {
      font-weight: 400;
      font-size: 0.875rem;
    }
    &--progress {
      max-width: 40%;
      margin-left: 1.7rem;
      strong {
        color: $color-black-pure;
        font-size: 0.7rem;
      }
    }
    &--manage-course {
      background-color: $color-teal-dark;
      padding: 0.5rem;
      font-size: 0.8rem;
      color: $color-white-pure;
      border-radius: 5px;
      margin-left: 1rem;
      &:hover {
        background-color: lighten($color-teal-dark, 2);
      }
    }
  }
}
</style>
