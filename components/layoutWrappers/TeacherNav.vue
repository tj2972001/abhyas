<template>
  <div class="user-edit-wrapper">
    <HeadingBlackH2 class="user-edit-wrapper__heading"
      >Instructor panel</HeadingBlackH2
    >
    <nuxt-link to="/">
      <button
        class="user-edit-wrapper__switch-btn btn btn-medium btn-pinkviolet"
      >
        Switch to Student view
      </button></nuxt-link
    >
    <v-tabs class="user-edit-wrapper__options" next-icon prev-icon show-arrows>
      <v-tab
        v-for="option in profileEditOptions"
        :key="option"
        :to="`${option.link}`"
        class="user-edit-wrapper__options--option"
      >
        <fa-icon class="px-2" :name="option.icon" scale="2"></fa-icon>
        {{ option.name }}
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
        name: 'Courses',
        link: '/teach/courses',
        icon: 'photo-video',
      },

      {
        name: 'Communication',
        link: '/teach/communication',
        icon: 'regular/envelope',
      },
      {
        name: 'Performance',
        link: '/teach/performance',
        icon: 'chart-pie',
      },
      {
        name: 'Tools',
        link: '/teach/tools',
        icon: 'wrench',
      },
      {
        name: 'Resources',
        link: '/teach/resources',
        icon: 'regular/question-circle',
      },
    ],
  }),
}
</script>
<style lang="scss" scoped>
@import '/assets/scss/abstracts/variables';
.user-edit-wrapper {
  position: relative;
  margin-top: 3rem;
  &__heading {
    margin-bottom: 2rem;
  }
  &__options {
    &--option {
    }
  }
  &__switch-btn {
    position: absolute;
    top: 1rem;
    right: 0;
    border-radius: 5px;
  }
}
</style>
