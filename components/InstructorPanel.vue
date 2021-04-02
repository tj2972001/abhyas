<template>
  <v-navigation-drawer permanent expand-on-hover class="instructor-panel">
    <v-list nav dense class="white--text pa-0 instructor-panel__list">
      <nuxt-link to="/" class="d-flex align-center">
        <v-icon color="white" large>mdi-play-box-outline</v-icon>
        <span>Courses</span>
      </nuxt-link>
      <nuxt-link to="/" class="d-flex align-center">
        <v-icon color="white" large>mdi-email-outline</v-icon>
        <span>Communication</span>
      </nuxt-link>
      <nuxt-link to="/" class="d-flex align-center">
        <v-icon color="white" large>mdi-chart-box-outline</v-icon>
        <span>Performance</span>
      </nuxt-link>
      <nuxt-link to="/" class="d-flex align-center">
        <v-icon color="white" large>mdi-tools</v-icon>
        <span>Tools</span>
      </nuxt-link>
      <nuxt-link to="/" class="d-flex align-center">
        <v-icon color="white" large>mdi-comment-question-outline</v-icon>
        <span>Resources</span>
      </nuxt-link>
    </v-list>
  </v-navigation-drawer>
</template>
<script></script>
<style scoped lang="scss">
@import '/assets/scss/abstracts/variables';
.instructor-panel {
  display: inline-block;
  --color-pink: rgb(82, 20, 62);
  background-color: var(--color-pink);
  &__list {
    margin-top: 5rem;
    height: 100vh;
    background-color: var(--color-pink);
    a {
      padding: 1rem 0.2rem;
      border-left: 0.3rem solid;
      border-color: var(--color-pink);
      text-decoration: none;
      color: $color-white-pure !important;
      &:hover {
        border-left: 0.3rem solid #de0f28;
        background-color: rgb(120, 16, 85);
      }
      span {
        font-size: 1.4rem;
        margin-left: 1.3rem;
      }
    }
  }
}
</style>
