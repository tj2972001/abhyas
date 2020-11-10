<template>
  <v-row>
    <div v-if="$vuetify.breakpoint.smAndUp" class="d-flex flex-wrap">
      <MyLearningsCard v-for="i in 10" :key="i" />
    </div>
    <div class="my-5 mx-auto">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </div>
  </v-row>
</template>
