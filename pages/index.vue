<template>
  <div class="home">
    <!--TODO pass as prop-->
    <HeadingBlackH2 class="home__welcome">Welcome Back , TEJAS</HeadingBlackH2>
    <HeadingBlackH4 class="home__start-again"
      >Start learning where you left off</HeadingBlackH4
    >

    <div class="home__video">
      <VideoSimple />
    </div>
    <section class="home__explore-more">
      <HeadingBlackH2 class="home__explore-more--heading"
        >Explore more courses in Vue.js</HeadingBlackH2
      >
      <CourseCarousel />
    </section>
    <section class="home__also-bought">
      <HeadingBlackH2 class="home__also-bought--heading"
        >Students who bought React.js also bought</HeadingBlackH2
      >
      <CourseCarousel />
    </section>
    <section class="home__what-to-learn-next">
      <HeadingBlackH2 class="home__what-to-learn-next--heading"
        >What to learn next ?</HeadingBlackH2
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
