<template>
  <v-card class="my-learnings-card-large" flat outlined>
    <v-img
      src="https://picsum.photos/400/250"
      class="my-learnings-card-large__image"
    >
    </v-img>
    <div class="my-learnings-card-large__title" style="word-break: keep-all">
      The complete Javascript Bootcamp 2020 : Build Real Projects
    </div>
    <div class="my-learnings-card-large__author">Brad traversy</div>

    <v-progress-linear
      v-model="knowledge"
      height="15"
      class="my-learnings-card-large__progress"
      color="rgb(159, 207, 207)"
    >
      <strong>{{ Math.ceil(knowledge) }}% completed</strong>
    </v-progress-linear>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      knowledge: Math.random() * 100,
    }
  },
}
</script>
<style scoped lang="scss">
@import '/assets/scss/abstracts/variables';
.my-learnings-card-large {
  margin-top: 3rem;
  margin-right: auto;
  margin-left: auto;
  width: 80%;
  max-width: 15rem;
  & > *:not(:first-child) {
    padding-left: 0.7rem;
  }
  &__image {
    width: 100%;
    max-width: 20rem;
    height: auto;
  }
  &__title {
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
    line-height: 1.2;
    word-break: keep-all;
    font-family: 'Roboto', Serif;
    font-weight: 700;
    font-size: 0.9rem;
  }
  &__author {
    line-height: 1.05;
    font-size: 0.75rem;
    font-weight: 400;
    text-overflow: ellipsis;
    margin-bottom: 0.25rem;
    color: $color-grey-medium;
  }
  &__progress {
    margin: 0.5rem auto;
    width: 90%;
    strong {
      font-size: 0.7rem;
    }
  }
}
</style>
