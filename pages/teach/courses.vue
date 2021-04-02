<template>
  <section class="teacher-courses">
    <InstructorPanel />

    <HeadingBlackH2 class="teacher-courses__heading">Courses</HeadingBlackH2>
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
          height="15"
          class="teacher-courses__list-item--progress"
        >
          <strong>{{ Math.ceil(knowledge) }}% completed</strong>
        </v-progress-linear>
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
          height="15"
          class="teacher-courses__list-item--progress"
        >
          <strong>{{ Math.ceil(knowledge) }}% completed</strong>
        </v-progress-linear>
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
    }
    &--finish {
    }
    &--progress {
      max-width: 40%;
      margin-left: 1.7rem;
      strong {
        font-size: 0.7rem;
      }
    }
  }
}
</style>
