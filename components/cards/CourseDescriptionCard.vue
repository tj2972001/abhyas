<template>
  <v-card
    class="hidden-sm-and-down mx-auto"
    :width="Number(width)"
    height="max-content"
    style="margin-top: 100px"
  >
    <video
      src="/videos/delicate.mp4"
      controls
      poster="/images/tejasfb.jpg"
      width="100%"
      height="auto"
    ></video>
    <v-card-title class="d-flex">
      <div class="text-h4 mr-4 font-weight-bold">$499</div>
      <div
        class="text-subtitle-1 mr-4 text-decoration-line-through font-weight-medium"
      >
        $1200
      </div>
      <div class="text-subtitle-2 text--secondary font-weight-medium">
        95% off
      </div></v-card-title
    >
    <v-card-actions class="d-flex flex-column">
      <v-btn width="80%" class="white--text" color="pink lighten-1">
        Buy Now</v-btn
      >
      <v-btn width="80%" class="mt-3" color="pink lighten-1" outlined>
        Add to cart</v-btn
      >
    </v-card-actions>
    <div class="font-weight-medium text--secondary text-body-1 pl-3 mt-4">
      This course includes
    </div>
    <v-card-actions class="d-flex flex-column text-body-2 align-start">
      <div class="d-flex mt-2">
        <v-icon small class="px-3">mdi-television-play</v-icon>
        <div>12 hrs of on-demand video</div>
      </div>
      <div class="d-flex mt-2">
        <v-icon small class="px-3">mdi-clipboard-text-outline</v-icon>
        <div>70 articles</div>
      </div>
      <div class="d-flex mt-2">
        <v-icon small class="px-3">mdi-folder-download-outline</v-icon>
        <div>20 downloadable resources</div>
      </div>
      <div class="d-flex mt-2">
        <v-icon small class="px-3">mdi-infinity</v-icon>
        <div>full lifetime access</div>
      </div>
      <div class="d-flex mt-2">
        <v-icon small class="px-3">mdi-certificate</v-icon>
        <div>Certificate of completion</div>
      </div>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ['width'],
}
</script>
