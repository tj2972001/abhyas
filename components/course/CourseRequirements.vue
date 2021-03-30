<template>
  <v-card class="course-requirements" outlined width="100%">
    <div class="course-requirements__heading no-word-break">
      <HeadingBlackH2> Course Requirements </HeadingBlackH2>
    </div>
    <ol class="course-requirements__list">
      <li>Basic understanding of Node and express</li>
      <li>Basic understanding of Node and express</li>
      <li>Basic understanding of Node and express</li>
      <li>Basic understanding of Node and express</li>
    </ol>
  </v-card>
</template>
<style lang="scss" scoped>
.course-requirements {
  &__heading {
    padding: 1.3rem;
  }
  &__list {
    font-size: 1rem;
    font-family: 'Roboto', serif;
    line-height: 1.7;
    padding-left: 2rem;
    padding-bottom: 1.3rem;
  }
}
</style>
