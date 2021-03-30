<template>
  <section class="instructor">
    <div class="app-row">
      <div class="app-col-3-of-4 instructor__intro">
        <div class="instructor__intro--title">Instructor</div>
        <div class="instructor__intro--name">
          <span> Jonas Schemdtmann</span>
        </div>
        <div class="instructor__intro--designation">
          Web Developer, Designer, and Teacher
        </div>
        <div class="instructor__intro--stats">
          <div class="app-col-1-of-2">
            <p class="font-weight-bold text-primary">Total students</p>
            <p class="font-weight-light text-h5">1222</p>
          </div>
          <div class="app-col-1-of-2">
            <p class="font-weight-bold text-primary">Total Courses</p>
            <p class="font-weight-light text-h5">23</p>
          </div>
        </div>
        <div class="instructor__intro--about">
          <div class="instructor__intro--about__heading">About me</div>
          <div class="text-body-1 instructor__intro--about__body">
            Hi, I'm Jonas! I have been identified as one of Udemy's Top
            Instructors and all my premium courses have recently earned the
            best-selling status for outstanding performance and student
            satisfaction. I'm a full-stack web developer and designer with a
            passion for building beautiful things from scratch. I've been
            building websites and apps since 2007 and also have a Master's
            degree in Engineering. It was in college where I first discovered my
            passion for teaching and helping others by sharing all I knew. And
            that passion brought me to Udemy in 2015, where my students love the
            fact that I take the time to explain important concepts in a way
            that everyone can easily understand. Do you want to learn how to
            build awesome websites with advanced HTML and CSS? Looking for a
            complete JavaScript course that takes you from beginner to advanced
            developer? Or maybe you want to build modern and fast back-end
            applications with Node.js? Then don't waste your time with random
            tutorials or incomplete videos. All my courses are easy-to-follow,
            all-in-one packages that will take your skills to the next level.
            These courses are exactly the courses I wish I had when I was first
            getting into web development! So see for yourself, enroll in one of
            my courses (or all of them :D) and join my 500,000+ happy students
            today.
          </div>
        </div>
      </div>
      <div class="app-col-1-of-4 instructor__info">
        <div>
          <img class="instructor__info--image" src="/images/tejasfb.jpg" />
        </div>
        <div class="instructor__info--social">
          <div>
            <v-btn class="instructor__info--social--btn" outlined>
              Linkedin |
              <v-icon class="pa-2" color="blue darken-2">mdi-linkedin</v-icon>
            </v-btn>
          </div>
          <div>
            <v-btn class="instructor__info--social--btn" outlined>
              Facebook |
              <v-icon class="pa-2" color="blue darken-1">mdi-facebook</v-icon>
            </v-btn>
          </div>
          <div>
            <v-btn class="instructor__info--social--btn" outlined>
              Instagram |
              <v-icon class="pa-2" color="pink darken-1">mdi-instagram</v-icon>
            </v-btn>
          </div>
          <div>
            <v-btn
              class="instructor__info--social--btn"
              outlined
              color="teal lighten-2
        "
            >
              Personal site |
              <v-icon class="pa-2" color="black">mdi-web</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <div class="app-row instructor__courses-list">
      <div class="instructor__courses-list--number">My Courses (25)</div>
      <div class="instructor__courses__list--carousel">
        <InstructorCoursesList />
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import '/assets/scss/abstracts/variables';
.instructor {
  margin-top: 4rem;
  & :first-child {
    position: relative;
  }
  &__intro {
    & > * {
      margin-top: 1rem;
    }
    &--title {
      font-size: 1.3rem;
      font-weight: 500;
      font-family: 'Roboto Slab', Serif;
      color: $color-grey-medium;
      text-transform: uppercase;
      /*text--secondary font-weight-bold text-uppercase text-h5*/
    }
    &--name {
      font-size: 1.6rem;
      font-weight: 700;
      font-family: 'Roboto', sans-serif;
      color: $color-black-pure;
      text-transform: uppercase;
      /*text--primary font-weight-bold text-uppercase text-h4*/
    }
    &--designation {
      text-transform: uppercase;
      font-family: 'Roboto', sans-serif;
      font-size: 1.4rem;
      /*text--primary text-uppercase text-body-1*/
    }
    &--stats {
    }
    &--about {
      &__heading {
        font-size: 1.3rem;
        font-weight: 500;
        margin-bottom: 1rem;
      }
      &__body {
      }
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    position: sticky;
    top: 10rem;
    &--social {
      &--btn {
        width: 100%;
        color: $color-teal-light;
        margin-top: 1rem;
      }
    }
    &--image {
      border-radius: 50%;
      height: 10rem;
      width: 10rem;
    }
  }
  &__courses-list {
    &--number {
      font-size: 1.4rem;
      font-weight: 500;
      margin-bottom: 1rem;
      font-family: 'Roboto', sans-serif;
    }
    &--carousel {
    }
  }
}
</style>
