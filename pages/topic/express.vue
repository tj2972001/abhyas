<template>
  <section class="app topic">
    <div>
      <HeadingBlackH2>Best express-js courses</HeadingBlackH2>
      <CourseCarousel />
    </div>
    <div>
      <HeadingBlackH2>Hottest Express.js Courses</HeadingBlackH2>
      <CourseCarousel />
    </div>
    <div>
      <HeadingBlackH2>Begineers favorite Express.js Courses</HeadingBlackH2>
      <CourseCarousel />
    </div>
    <div>
      <HeadingBlackH2>Editor's choice Express.js Courses</HeadingBlackH2>
      <CourseCarousel />
    </div>
    <div>
      <HeadingBlackH2>All Express.js courses (12000 courses)</HeadingBlackH2>
      <CourseCardMedium />
      <CourseCardMedium />
      <CourseCardMedium />
      <CourseCardMedium />
      <CourseCardMedium />
      <CourseCardMedium />
      <CourseCardMedium />
    </div>
  </section>
</template>
<script>
export default {
  layout: 'courseDescription',
}
</script>
<style lang="scss" scoped>
.topic {
  margin: 2rem 2.6rem;
}
</style>
