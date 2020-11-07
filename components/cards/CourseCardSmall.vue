<template>
  <v-card class="d-flex mb-5 align-center py-3" height="max-content">
    <img
      src="/images/jonasjscourseimage.jpg"
      style="height: 64px; width: 64px"
    />
    <div class="ml-4">
      <h4 class="text-h6 font-weight-medium mb-2">
        Complete Javascript Guide 2020: Build real projects
      </h4>
      <p class="text--secondary font-weight-medium text-caption mb-0">
        Tejas Jadhav
      </p>
      <div class="mb-1 d-flex align-center">
        <span style="color: #d49b1e"> 4.8 ratings </span>
        <v-rating
          v-model="rating"
          class="pa-2"
          style="display: inline-block"
          readonly
          dense
          color="#d49b1e"
          half-increments
        ></v-rating>
      </div>
      <div>
        <span class="font-weight-bold text-body-1 orange--text"> $700 </span>
        <span class="text-decoration-line-through font-weight-thin ml-4"
          >$1200</span
        >
      </div>
    </div>
  </v-card>
</template>
