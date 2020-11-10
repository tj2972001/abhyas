<template>
  <div>
    <div class="mt-5 font-weight-bold text-h6">
      <nuxt-link to="/">Categories > </nuxt-link>
      <nuxt-link to="/">Business </nuxt-link>
    </div>
    <section>
      <HeadingTealH2
        ><v-icon color="light-blue darken-2" x-large class="mx-2"
          >mdi-star</v-icon
        >Best Business Courses</HeadingTealH2
      >
      <CourseCarousel />
    </section>
    <section>
      <HeadingTealH2
        ><v-icon color="amber darken-1" x-large class="mx-2">mdi-fire</v-icon
        >Hottest Business Courses</HeadingTealH2
      >
      <CourseCarousel />
    </section>
    <section>
      <HeadingTealH2
        ><v-icon color="pink lighten-2" x-large class="mx-2"
          >mdi-head-lightbulb-outline</v-icon
        >Begineers favorite Business Courses</HeadingTealH2
      >
      <CourseCarousel />
    </section>
    <section>
      <HeadingTealH2
        ><v-icon color="purple darken-2" x-large class="mx-2"
          >mdi-bookmark-multiple-outline</v-icon
        >Editor's choice Business Courses</HeadingTealH2
      >
      <CourseCarousel />
    </section>
    <section>
      <HeadingTealH2 class="mb-10"
        ><v-icon color="light-green accent-3" x-large class="mx-2"
          >mdi-library</v-icon
        >All Business courses (12000 courses)</HeadingTealH2
      >
      <CourseCardMedium />
      <CourseCardMedium />
      <CourseCardMedium />
      <CourseCardMedium />
      <CourseCardMedium />
      <CourseCardMedium />
      <CourseCardMedium />
    </section>
  </div>
</template>
