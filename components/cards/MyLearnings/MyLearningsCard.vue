<template>
  <v-card width="80%" max-width="290" class="mx-auto my-2" flat outlined>
    <v-img
      src="/images/jonasjscourseimage.jpg"
      width="100%"
      max-width="200"
      height="auto"
      class="mx-auto mt-2 mt-md-5"
    >
    </v-img>
    <v-card-title
      class="text-body-2 text-md-body-1 font-weight-medium"
      style="word-break: keep-all"
      >The complete Javascript Bootcamp 2020 : Build Real Projects</v-card-title
    >
    <v-card-subtitle class="text-secondary py-1">
      Brad traversy
    </v-card-subtitle>

    <v-progress-linear
      v-model="knowledge"
      :height="$vuetify.breakpoint.mdAndUp ? 20 : 15"
      class="mx-auto my-3"
      style="width: 90%"
    >
      <strong class="text-caption text-md-body-1">33% completed</strong>
    </v-progress-linear>
  </v-card>
</template>
