<template>
  <div class="home">
    <!--TODO pass as prop-->
    <HeadingBlackH2>Let's start learning, Tejas</HeadingBlackH2>
    <HeadingBlackH4>Start learning where you left off</HeadingBlackH4>
    <vue-horizontal-list :items="items" :options="optionsVHL">
      <template>
        <ResumeLearning />
      </template>
    </vue-horizontal-list>
    <section>
      <HeadingBlackH2>Explore more courses in Vue.js</HeadingBlackH2>
      <CourseCarousel />
    </section>
    <section>
      <HeadingBlackH2
        >What people who learn Spring Boot take next</HeadingBlackH2
      >
      <v-tabs class="tabs-courses">
        <v-tab v-for="option in optionsTakeNext" :key="option">
          {{ option }}
        </v-tab>
      </v-tabs>
      <CourseCarousel />
    </section>
    <section>
      <HeadingBlackH2>Students who bought React.js also bought</HeadingBlackH2>
      <CourseCarousel />
    </section>
    <section>
      <HeadingBlackH2>What to learn next ?</HeadingBlackH2>
      <HeadingBlackH4>Recommended for you</HeadingBlackH4>
      <CourseCarousel />
    </section>
    <section>
      <HeadingBlackH2>Featured courses in Spring Boot</HeadingBlackH2>
      <v-tabs class="tabs-courses">
        <v-tab v-for="option in optionsFeatured" :key="option">
          {{ option }}
        </v-tab>
      </v-tabs>
      <CourseCarousel />
    </section>
  </div>
</template>

<script>
import VueHorizontalList from 'vue-horizontal-list'

export default {
  layout: 'courseDescription',
  components: {
    VueHorizontalList,
  },
  data() {
    return {
      items: [
        { title: 'Item 0', content: 'Content item with description' },
        { title: 'Item 0', content: 'Content item with description' },
        { title: 'Item 0', content: 'Content item with description' },
        { title: 'Item 0', content: 'Content item with description' },
        { title: 'Item 0', content: 'Content item with description' },
        { title: 'Item 0', content: 'Content item with description' },
      ],
      optionsVHL: {
        responsive: [
          { end: 576, size: 1 },
          { start: 576, end: 668, size: 2 },
          { start: 668, end: 1150, size: 2 },
          { size: 3 },
        ],
      },
      optionsFeatured: ['Most popular', 'Intermediate and advanced'],
      optionsTakeNext: ['Dependancy Injection', 'Spring MVC', 'Netbeans IDE'],
    }
  },
}
</script>

<style lang="scss" scoped>
.home {
  margin: 2rem 2.6rem;
}
.tabs-courses {
  margin: 0.4rem 0;
}
</style>
