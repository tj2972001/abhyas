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
      <nav class="tabs">
        <button class="tabs__item tabs__item_active">Tab 1</button>
        <button class="tabs__item">Dependancy injection</button>
        <button class="tabs__item">Spring MVC</button>
        <div class="tabs__active-line"></div>
      </nav>
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
      <nav class="tabs">
        <button class="tabs__item">Begineers</button>
        <button class="tabs__item">Intermediate and Advanced</button>
        <div class="tabs__active-line"></div>
      </nav>
      <CourseCarousel />
    </section>
  </div>
</template>

<script>
import VueHorizontalList from 'vue-horizontal-list'
// import Tabs from 'vue-tabs-with-active-line'
export default {
  layout: 'courseDescription',
  components: {
    VueHorizontalList,
    //    Tabs,
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
  width: 90%;
  max-width: 1300px;
  margin: 3rem auto;
}
.tabs-courses {
  margin: 0.4rem 0;
}
section {
  margin-top: 4rem;
  margin-bottom: 4rem;
}
.tabs {
  position: relative;
  margin: 0 auto;

  &__active-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: black;
    transition: transform 0.4s ease, width 0.4s ease;
  }

  &__item {
    display: inline-block;
    margin: 0 5px;
    padding: 10px;
    padding-bottom: 8px;
    font-size: 16px;
    letter-spacing: 0.8px;
    color: black;
    text-decoration: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.25s;

    &_active {
      color: black;
    }

    &:hover {
      border-bottom: 2px solid gray;
      color: black;
    }

    &:focus {
      outline: none;
      border-bottom: 2px solid gray;
      color: black;
    }

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
