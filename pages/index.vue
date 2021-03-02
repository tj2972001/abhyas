<template>
  <div class="mx-10">
    <!--TODO pass as prop-->
    <HeadingTealH2 class="mt-10">Welcome Back , TEJAS</HeadingTealH2>
    <HeadingBlackH4>Start learning where you left off</HeadingBlackH4>

    <div class="mt-5">
      <VideoSimple />
    </div>
    <section>
      <HeadingTealH2 class="my-3">Explore more courses in Vue.js</HeadingTealH2>
      <CourseCarousel />
    </section>
    <section>
      <HeadingTealH2 class="my-3"
        >Students who bought React.js also bought</HeadingTealH2
      >
      <CourseCarousel />
    </section>
    <section>
      <HeadingTealH2 class="my-3">What to learn next ?</HeadingTealH2>
      <HeadingBlackH4>Recommended for you</HeadingBlackH4>
      <CourseCarousel />
    </section>
    <section>
      <HeadingTealH2>Explore courses in Abhyas course explorer</HeadingTealH2>
      <v-btn outlined color="pink" class="mt-5">Explore </v-btn>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'courseDescription',
}
</script>

<style lang="scss" scoped></style>
