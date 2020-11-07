<template>
  <div>
    <h2 class="text-h4 text-md-h3 teal--text mt-10 font-weight-bold">
      Courses by Tejas Jadhav
    </h2>
    <h4 class="text-h5 text-md-h4 font-weight-bold teal--text my-5">
      23 courses
    </h4>
    <div v-if="$vuetify.breakpoint.smAndUp" class="d-flex flex-wrap">
      <CourseCardLarge v-for="i in 10" :key="i" />
    </div>
    <div v-else class="d-flex flex-column">
      <CourseCardSmall v-for="i in 10" :key="i" />
    </div>
    <div class="text-center mt-5">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
