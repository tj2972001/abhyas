<template>
  <v-app>
    <section class="course">
      <CourseDescriptionHeadingBlack />
      <CourseDescriptionCard />
      <div class="app-row">
        <div class="app-col-3-of-4 course__info">
          <CourseLearnList />
          <CourseContentList />
          <CourseRequirements />
          <CourseDescription />
          <CourseInstructor />
        </div>
      </div>
    </section>
  </v-app>
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
  &__info > * {
    margin-bottom: 3rem;
  }
}
</style>
