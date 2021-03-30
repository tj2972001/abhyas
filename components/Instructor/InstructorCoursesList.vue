<template>
  <v-row>
    <div v-if="$vuetify.breakpoint.smAndUp" class="d-flex flex-wrap">
      <CourseCardLarge v-for="i in 10" :key="i" class="ma-2" />
    </div>
    <div v-else class="d-flex flex-column">
      <CourseCardHorizontalT1 v-for="i in 10" :key="i" />
    </div>
    <div class="my-5 mx-auto">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </div>
  </v-row>
</template>
