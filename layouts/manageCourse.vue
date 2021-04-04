<template>
  <v-app>
    <NavBarCourseManage />
    <v-main style="background-color: #eee">
      <div class="course-manage-header">
        <h1 class="course-manage-course-title">
          VueJs: The Compleate Guide (2020)
        </h1>
        <button class="btn btn-medium btn-pinkviolet rounded-pill">
          Back to all courses
        </button>
      </div>
      <v-container class="pa-0" fluid>
        <ManageCourse />
        <nuxt />
      </v-container>
    </v-main>
    <Footer style="background-color: #fff" />
  </v-app>
</template>
<style lang="scss" scoped>
@import '/assets/scss/abstracts/variables';
.container {
  display: flex;
}
.course-manage-header {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.course-manage-course-title {
  margin: 2rem;
  font-weight: 700;
  font-size: 1.6rem;
  font-family: 'Roboto', sans-serif;
  color: $color-teal-dark;
}
</style>
