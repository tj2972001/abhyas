<template>
  <v-row>
    <p class="text-h5 font-weight-bold">My courses (23)</p>
    <div v-if="$vuetify.breakpoint.smAndUp" class="d-flex flex-wrap">
      <CourseCardLarge v-for="i in 10" :key="i" />
    </div>
    <div v-else class="d-flex flex-column">
      <CourseCardSmall v-for="i in 10" :key="i" />
    </div>
    <div class="mt-5 mx-auto">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </div>
  </v-row>
</template>
