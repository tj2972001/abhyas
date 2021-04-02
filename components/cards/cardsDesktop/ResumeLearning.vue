<template>
  <v-card flat outlined class="resume-learning">
    <img
      src="https://picsum.photos/400/250"
      alt="course-image"
      class="resume-learning__course-image"
    />
    <div class="resume-learning__details">
      <div class="resume-learning__details--course-name">
        Decision Making: Solve Problems with Emotional Intelligence
      </div>
      <div class="resume-learning__details--topic-name">
        5.Custom components
      </div>
    </div>
  </v-card>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '/assets/scss/abstracts/variables';
.resume-learning {
  display: flex;
  &__course-image {
    width: 12rem;
    height: 8rem;
  }
  &__details {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-family: 'Roboto', serif;
    margin-right: 1rem;
    margin-left: 1rem;
    &--course-name {
      font-weight: 700;
      color: $color-black-pure;
      font-size: 1rem;
    }
    &--topic-name {
      color: $color-grey-medium;
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
}
</style>
>
