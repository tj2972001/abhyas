<template>
  <v-card outlined class="course-learn-list noBullets">
    <HeadingBlackH2 class="course-learn-list__heading"
      >What you will learn?</HeadingBlackH2
    >
    <ul class="course-learn-list__list">
      <li>
        <v-icon>mdi-check</v-icon>
        <span>Absolutely master the Event Loop and understand each of its</span>
      </li>
      <li>
        <v-icon>mdi-check</v-icon>
        <span
          >Speed up database queries with caching for MongoDB backed by
          Redis</span
        >
      </li>
      <li>
        <v-icon>mdi-check</v-icon>
        <span
          >Apply scalable image and file upload to your app, utilizing AWS
          S3</span
        >
      </li>
      <li>
        <v-icon>mdi-check</v-icon>
        <span
          >Utilize Worker Threads and Clustering to dramatically improve the
          performance of Node servers</span
        >
      </li>
      <li>
        <v-icon>mdi-check</v-icon>
        <span>Absolutely master the Event Loop and understand each of its</span>
      </li>
      <li>
        <v-icon>mdi-check</v-icon>
        <span
          >Speed up database queries with caching for MongoDB backed by
          Redis</span
        >
      </li>
      <li>
        <v-icon>mdi-check</v-icon>
        <span
          >Speed up database queries with caching for MongoDB backed by
          Redis</span
        >
      </li>
      <li>
        <v-icon>mdi-check</v-icon>
        <span
          >Speed up database queries with caching for MongoDB backed by
          Redis</span
        >
      </li>
      <li>
        <v-icon>mdi-check</v-icon>
        <span
          >Write comprehensive tests to ensure each service works as
          designed</span
        >
      </li>
      <li>
        <v-icon>mdi-check</v-icon>
        <span
          >Write nothing but production-level code. No cutting corners!</span
        >
      </li>
      <li>
        <v-icon>mdi-check</v-icon>
        <span
          >Communicate data between services using a lightning-fast event
          bus</span
        >
      </li>
    </ul>
  </v-card>
</template>
<style scoped lang="scss">
@import '/assets/scss/abstracts/variables';
.course-learn-list {
  background-color: $color-grey-light;
  &__list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    max-width: 100%;
    li {
      display: flex;
      width: 48%;
      margin-bottom: 1rem;
      justify-content: space-between;
      span {
        margin-left: 1rem;
      }
    }
  }
  &__heading {
    padding: 1.3rem;
  }
}
// @media screen and (max-width: 700px) {
//   .course-learn-list__list {
//     display: block;
//     padding-left: 0 !important; /*Vuetify is adding padding on ul by default */
//     li {
//       width: 100%;
//     }
//   }
// }
</style>
