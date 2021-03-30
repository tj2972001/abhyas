<template>
  <v-card outlined class="course-instructor">
    <HeadingBlackH2 class="course-instructor__heading"
      >Instructor</HeadingBlackH2
    >
    <HeadingBlackH4 class="course-instructor__name"
      >Robert Bunch</HeadingBlackH4
    >
    <HeadingBlackH6 class="course-instructor__designation">
      Code school instructor, software architect and engineer
    </HeadingBlackH6>

    <div class="course-instructor__stats">
      <img
        src="/images/tejasfb.jpg"
        alt="instructor-image"
        class="course-instructor__photo"
      />
      <div class="course-instructor__stats__container">
        <div class="course-instructor__stats--ratings">
          <v-icon color="#d49b1e">mdi-star-outline</v-icon>
          <div class="ml-2">2.4 Instructor ratings</div>
        </div>
        <div class="course-instructor__stats--students">
          <v-icon color="#d49b1e">mdi-account-group-outline</v-icon>
          <div class="ml-2">233443 students</div>
        </div>
        <div class="course-instructor__stats--reviews">
          <v-icon color="#d49b1e">mdi-star-circle-outline</v-icon>
          <div class="ml-2">2223 reviews</div>
        </div>
        <div class="course-instructor__stats--courses">
          <v-icon color="#d49b1e">mdi-video-vintage</v-icon>
          <div class="ml-2">10 courses</div>
        </div>
      </div>
    </div>
    <div class="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero corrupti,
      nihil expedita doloribus blanditiis optio sequi, molestiae ad repellendus
      corporis aliquid? Asperiores consectetur repudiandae excepturi a expedita
      repellendus, similique eligendi! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Tempore eos rem fuga, aut distinctio sit, dolore eaque
      obcaecati excepturi animi voluptate, quos sapiente iure. Adipisci nisi
      alias rerum voluptate nobis?Lorem ipsum dolor sit, amet consectetur
      adipisicing elit. A ab officia doloremque quam dolorum vitae dicta dolor
      provident inventore ad iusto fugit harum at amet quis, porro, nobis
      ratione sed.
    </div>
  </v-card>
</template>
<style lang="scss" scoped>
.course-instructor {
  &__heading {
    padding-left: 1.3rem;
    padding-top: 1.3rem;
  }
  &__name {
    padding-left: 1.3rem;
  }
  &__designation {
    padding-left: 1.3rem;
  }
  &__photo {
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    padding: 0.6rem;
  }
  &__stats {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    &__container {
      margin-left: 3rem;
      & > div {
        display: flex;
        margin-top: 0.4rem;
      }
    }
    &--ratings {
    }
    &--students {
    }
    &--reviews {
    }
    &--courses {
    }
  }
}
</style>
