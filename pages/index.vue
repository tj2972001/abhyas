<template>
  <div class="home">
    <!--TODO pass as prop-->
    <HeadingTealH2 class="home__welcome">Welcome Back , TEJAS</HeadingTealH2>
    <HeadingBlackH4 class="home__start-again"
      >Start learning where you left off</HeadingBlackH4
    >

    <div class="home__video">
      <VideoSimple />
    </div>
    <section class="home__explore-more">
      <HeadingTealH2 class="home__explore-more--heading"
        >Explore more courses in Vue.js</HeadingTealH2
      >
      <CourseCarousel />
    </section>
    <section class="home__also-bought">
      <HeadingTealH2 class="home__also-bought--heading"
        >Students who bought React.js also bought</HeadingTealH2
      >
      <CourseCarousel />
    </section>
    <section class="home__what-to-learn-next">
      <HeadingTealH2 class="home__what-to-learn-next--heading"
        >What to learn next ?</HeadingTealH2
      >
      <HeadingBlackH4 class="home__what-to-learn-next--recommended"
        >Recommended for you</HeadingBlackH4
      >
      <CourseCarousel />
    </section>
  </div>
</template>

<script>
export default {
  layout: 'courseDescription',
}
</script>

<style lang="scss" scoped>
.home {
  margin: 2rem 2.6rem;
}
</style>
