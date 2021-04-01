<template>
  <v-card class="course-purchase">
    <video
      src="/videos/delicate.mp4"
      controls
      class="course-purchase__preview-video"
    ></video>
    <div class="d-flex course-purchase__heading">
      <div class="course-purchase__heading--price">$499</div>
      <div class="font-weight-medium course-purchase__heading--dicounted-price">
        $1200
      </div>
      <div class="course-purchase__heading--total-off">95% off</div>
    </div>
    <v-card-actions class="d-flex flex-column course-purchase__purchase">
      <v-btn
        width="80%"
        class="white--text course-purchase__purchase--buy-now"
        color="pink lighten-1"
      >
        Buy Now</v-btn
      >
      <v-btn
        width="80%"
        class="mt-3 course-purchase__purchase--add-to-cart"
        style="transform: translateX(-1%)"
        color="pink lighten-1"
        outlined
      >
        Add to cart</v-btn
      >
    </v-card-actions>
    <div class="course-purchase__includes">This course includes</div>
    <div class="course-purchase__features">
      <div class="course-purchase__features--duration">
        <v-icon small>mdi-television-play</v-icon>
        <div>
          12 hrs of on-demand video Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Mollitia sint vel tempora facere possimus, et a ipsa
          adipisci at nisi obcaecati, omnis porro nihil neque exercitationem
          provident esse praesentium architecto.
        </div>
      </div>
      <div course-purchase__features--total-articles>
        <v-icon small>mdi-clipboard-text-outline</v-icon>
        <div>70 articles</div>
      </div>
      <div class="course-purchase__features--total-resources">
        <v-icon small>mdi-folder-download-outline</v-icon>
        <div>20 downloadable resources</div>
      </div>
      <div class="course-purchase__features--access-time">
        <v-icon small>mdi-infinity</v-icon>
        <div>full lifetime access</div>
      </div>
      <div class="course-purchase__feature--certificate">
        <v-icon small>mdi-certificate</v-icon>
        <div>Certificate of completion</div>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.course-purchase {
  width: 25%;
  position: absolute;
  z-index: 15;
  right: 3rem;
  top: 3rem;
  &__preview-video {
    width: 100%;
    height: auto;
  }
  &__heading {
    &--price {
    }
    &--dicounted-price {
    }
    &--total-off {
    }
  }
}
</style>
