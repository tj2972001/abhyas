<template>
  <v-row>
    <v-col cols="12" md="8" class="pa-0">
      <v-row
        class="black py-10 pl-2 white--text mx-0"
        :class="{ fullWidth: checkBreakpoint }"
      >
        <CourseDescriptionHeadingBlack width="400" />
      </v-row>
      <v-row>
        <CourseLearnList />
      </v-row>
      <v-row>
        <CourseContentList />
      </v-row>
      <v-row>
        <CourseRequirements />
      </v-row>
      <v-row>
        <CourseDescription />
      </v-row>
      <CourseInstructor />
    </v-col>
    <v-col cols="12" md="4" style="z-index: 100">
      <CourseDescriptionCard width="400" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'courseDescription',
  data() {
    return {
      rating: 5,
    }
  },
  computed: {
    checkBreakpoint() {
      return this.$vuetify.breakpoint.smAndUp
    },
  },
}
</script>
<style scoped>
.fullWidth {
  width: 100vw;
}
</style>
