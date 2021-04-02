<template>
  <div class="category">
    <section>
      <HeadingBlackH2>Best express-js courses</HeadingBlackH2>
      <CourseCarousel />
    </section>
    <section>
      <HeadingBlackH2>Hottest Express.js Courses</HeadingBlackH2>
      <CourseCarousel />
    </section>
    <section>
      <HeadingBlackH2>Begineers favorite Express.js Courses</HeadingBlackH2>
      <CourseCarousel />
    </section>
    <section>
      <HeadingBlackH2>Editor's choice Express.js Courses</HeadingBlackH2>
      <CourseCarousel />
    </section>
    <section>
      <HeadingBlackH2>All Express.js courses (12000 courses)</HeadingBlackH2>
      <CourseCardMedium />
      <CourseCardMedium />
      <CourseCardMedium />
      <CourseCardMedium />
      <CourseCardMedium />
      <CourseCardMedium />
      <CourseCardMedium />
    </section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Category - Business',
    }
  },
  layout: 'courseDescription',
}
</script>
<style lang="scss" scoped>
.category {
  width: 90%;
  max-width: 1300px;
  margin: 3rem auto;
}
</style>
