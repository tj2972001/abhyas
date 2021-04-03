<template>
  <div class="course-manage-wrapper">
    <v-tabs
      class="course-manage-wrapper__options"
      next-icon
      prev-icon
      show-arrows
      background-color="#eee"
      vertical
    >
      <v-tab
        v-for="option in profileEditOptions"
        :key="option"
        :to="`${option.link}`"
        class="course-manage-wrapper__options--option"
      >
        <v-icon class="px-2">{{ option.icon }}</v-icon>
        <span>{{ option.name }}</span>
      </v-tab>
    </v-tabs>
  </div>
</template>
<script>
export default {
  data: () => ({
    model: null,
    profileEditOptions: [
      {
        name: 'Curicculum',
        link: '/teach/course/java-course/manage/curriculum',
        icon: 'mdi-video',
      },

      {
        name: 'Course Landing page',
        link: '/teach/course/java-course/manage/basics',
        icon: 'mdi-card-bulleted',
      },
      {
        name: 'Pricing',
        link: '/teach/course/java-course/manage/pricing',
        icon: 'mdi-currency-inr',
      },
      {
        name: 'Course messages',
        link: '/teach/course/java-course/manage/messages',
        icon: 'mdi-message',
      },
      {
        name: 'Course reviews',
        link: '/teach/course/java-course/manage/reviews',
        icon: 'mdi-star',
      },
    ],
  }),
}
</script>
<style lang="scss" scoped>
@import '/assets/scss/abstracts/variables';
.course-manage-wrapper {
  position: relative;
  display: inline-block;
  margin-top: 2rem;
  margin-left: 3rem;

  &__options {
    &--option {
      display: flex;
      justify-content: start;
    }
  }
}
</style>
