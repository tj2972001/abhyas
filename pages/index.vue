<template>
  <div>
    <!--TODO pass as prop-->
    <HeadingWelcomeBack>Welcome Back , TEJAS</HeadingWelcomeBack>
    <div class="purple--text font-weight-bold text-h6">
      <div>Start learning where you left off</div>
    </div>
    <div class="mt-5">
      <VideoSimple />
    </div>
    <section>
      <HeadingTealH2>Explore more courses in Vue.js</HeadingTealH2>
      <CourseCarousel />
    </section>
    <section>
      <HeadingTealH2>Students who bought React.js also bought</HeadingTealH2>
      <CourseCarousel />
    </section>
    <section>
      <HeadingTealH2>What to learn next ?</HeadingTealH2>
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
export default {}
</script>

<style lang="scss" scoped></style>
