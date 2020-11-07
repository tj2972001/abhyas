<template>
  <v-row class="mt-5 ma-0 pa-1 pa-md-3 ml-8 ml-md-15">
    <v-col class="text--primary text-h4 font-weight-bold" cols="12"
      >Instructor</v-col
    >

    <v-col cols="12" class="text-h6">Robert Bunch</v-col>
    <v-col cols="12" class="font-weight-light">
      Code school instructor, software architect and engineer
    </v-col>
    <v-col class="d-flex justify-start" cols="12">
      <img
        src="/images/tejasfb.jpg"
        alt=""
        class="rounded-circle mr-10"
        :height="$vuetify.breakpoint.xs ? 120 : 200"
        :width="$vuetify.breakpoint.xs ? 120 : 200"
      />
      <div class="d-flex flex-column align-start">
        <div class="d-flex mt-3 justify-space-between">
          <v-icon color="#d49b1e">mdi-star-outline</v-icon>
          <div class="ml-2">2.4 Instructor ratings</div>
        </div>
        <div class="d-flex mt-3 justify-space-between">
          <v-icon color="#d49b1e">mdi-account-group-outline</v-icon>
          <div class="ml-2">233443 students</div>
        </div>
        <div class="d-flex mt-3 justify-space-between">
          <v-icon color="#d49b1e">mdi-star-circle-outline</v-icon>
          <div class="ml-2">2223 reviews</div>
        </div>
        <div class="d-flex mt-3 justify-space-between">
          <v-icon color="#d49b1e">mdi-video-vintage</v-icon>
          <div class="ml-2">10 courses</div>
        </div>
      </div>
    </v-col>
    <v-col class="text-body-1">
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
    </v-col>
  </v-row>
</template>
