<template>
  <div class="pl-5 pl-md-10">
    <h4 class="white--text text-h4 font-weight-bold">
      Node JS: Advanced Concepts
    </h4>
    <p class="font-weight-medium text-subtitle-1 mt-3 mb-0">
      Get advanced with Node.Js! Learn caching with Redis, speed up through
      clustering, and add image upload with S3 and Node!
    </p>
    <div class="mt-3 d-flex justify-space-around justify-sm-start">
      <span style="color: #d49b1e" class="text-subtitle-1 pa-2">
        4.8 ratings
      </span>
      <v-rating
        v-model="rating"
        class="pa-2"
        style="display: inline-block"
        readonly
        dense
        color="#d49b1e"
        half-increments
      ></v-rating>
      <span class="text-subtitle-1 pa-2">243455 students</span>
    </div>
    <div class="mt-3">
      Created by <nuxt-link to="/">Stphan Grider</nuxt-link>
    </div>
    <div class="mt-3 d-md-flex">
      <div class="mr-md-3 py-2 py-md-0">
        <v-icon color="#fff">mdi-exclamation</v-icon> Last updated : september
        2020
      </div>
      <div class="mr-md-3 py-2 py-md-0">
        <v-icon class="mr-1" color="#fff">mdi-web</v-icon> English
      </div>
    </div>
    <div class="mt-5 d-flex flex-column flex-md-row">
      <v-btn color="#fff" class="ma-2" outlined>
        Wishlist
        <v-icon class="pl-2">mdi-heart</v-icon></v-btn
      >
      <v-btn color="#fff" class="ma-2" outlined>
        Share
        <v-icon class="pl-2">mdi-share</v-icon></v-btn
      >
      <v-btn color="#fff" class="ma-2" outlined> Gift this course </v-btn>
    </div>
  </div>
</template>
