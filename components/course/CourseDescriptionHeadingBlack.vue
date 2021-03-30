<template>
  <div>
    <h4>Node JS: Advanced Concepts</h4>
    <p>
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
        <fa-icon color="#fff" name="exclamation" class="mr-1"></fa-icon> Last
        updated : september 2020
      </div>
      <div class="mr-md-3 py-2 py-md-0">
        <fa-icon class="mr-1" color="#fff" name="globe-asia"></fa-icon> English
      </div>
    </div>
    <div class="mt-5 d-flex flex-column flex-md-row">
      <v-btn color="#fff" class="ma-2" outlined>
        Wishlist
        <fa-icon class="pl-2" name="regular/heart" scale="1.7"></fa-icon
      ></v-btn>
      <v-btn color="#fff" class="ma-2" outlined>
        Share
        <fa-icon name="regular/share-square" class="pl-2" scale="1.7"></fa-icon
      ></v-btn>
      <v-btn color="#fff" class="ma-2" outlined>
        Gift this course<fa-icon scale="1.7" name="gift" class="pl-2"></fa-icon>
      </v-btn>
    </div>
  </div>
</template>
