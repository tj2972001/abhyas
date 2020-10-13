<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <v-row class="text--secondary font-weight-bold text-uppercase text-h5">
          <v-col> Instructor</v-col>
        </v-row>
        <v-row class="text--primary font-weight-bold text-uppercase text-h4">
          <v-col> Jonas Schemdtmann</v-col>
        </v-row>
        <v-row class="text--primary text-uppercase text-body-1">
          <v-col>Web Developer, Designer, and Teacher </v-col>
        </v-row>
        <v-row style="display: flex; justify-content: start" class="mt-5">
          <div class="pr-10">
            <p class="font-weight-bold text-primary">Total students</p>
            <p class="font-weight-light text-h5">123232134140233</p>
          </div>
          <div class="pr-10">
            <p class="font-weight-bold text-primary">Total students</p>
            <p class="font-weight-light text-h5">123232134140233</p>
          </div>
        </v-row>
        <v-row>
          <v-col class="text-h5 font-weight-bold" cols="12"> About me </v-col>
          <v-col cols="12" class="text-body-1">
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
          </v-col>
        </v-row>
        <v-row class="font-weight-black text-h5 my-3"> My courses (5) </v-row>
        <CourseCard />
      </v-col>
      <v-col cols="12" md="4">
        <v-row class="text-center">
          <v-col>
            <img
              class="roundedImg"
              :height="$vuetify.breakpoint.md ? 250 : 150"
              :width="$vuetify.breakpoint.md ? 250 : 150"
              src="/tejasfb.jpg"
          /></v-col>
        </v-row>
        <v-row class="text-center">
          <v-col cols="12">
            <v-btn
              width="60%"
              outlined
              color="teal lighten-2
"
            >
              Linkedin |
              <v-icon class="pa-2">mdi-linkedin</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn
              width="60%"
              outlined
              color="teal lighten-2
"
            >
              Facebook |
              <v-icon class="pa-2">mdi-facebook</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn
              width="60%"
              outlined
              color="teal lighten-2
"
            >
              Instagram |
              <v-icon class="pa-2">mdi-instagram</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn
              width="60%"
              outlined
              color="teal lighten-2
"
            >
              Personal site |
              <v-icon class="pa-2">mdi-web</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import CourseCard from '@/components/CourseCard.vue'
export default {}
</script>

<style></style>
