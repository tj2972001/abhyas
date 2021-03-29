<template>
  <div class="mx-10">
    <section>
      <HeadingTealH2 class="mt-10">Best express-js courses</HeadingTealH2>
      <CourseCarousel />
    </section>
    <section>
      <HeadingTealH2 class="my-3">Hottest Express.js Courses</HeadingTealH2>
      <CourseCarousel />
    </section>
    <section>
      <HeadingTealH2 class="my-3"
        >Begineers favorite Express.js Courses</HeadingTealH2
      >
      <CourseCarousel />
    </section>
    <section>
      <HeadingTealH2 class="my-3"
        >Editor's choice Express.js Courses</HeadingTealH2
      >
      <CourseCarousel />
    </section>
    <section>
      <HeadingTealH2 class="my-3"
        >All Express.js courses (12000 courses)</HeadingTealH2
      >
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
