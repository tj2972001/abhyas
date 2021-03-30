<template>
  <section class="course">
    <!-- <CourseDescriptionHeadingBlack /> -->
    <div class="app-row">
      <div class="app-col-3-of-4 course__info">
        <CourseLearnList />
        <CourseContentList />
        <CourseRequirements />
        <CourseDescription />
        <CourseInstructor />
      </div>
      <!-- <div class="app-col-1-of-4">
        <CourseDescriptionCard />
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  layout: 'courseDescription',
  head() {
    return {
      title: 'Advanced Node Bootcamp',
    }
  },
}
</script>
<style scoped lang="scss">
@import '/assets/scss/abstracts/variables';
.course {
  &__heading {
    background-color: $color-black-pure;
    width: 100vw;
    margin: 0;
  }

  &__info {
    & > * {
      margin-top: 3rem;
    }
    &:last-child {
      margin-bottom: 5rem;
    }
  }
}
</style>
