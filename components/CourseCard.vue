<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card :width="$vuetify.breakpoint.sm ? 350 : 420">
          <v-img src="/jonasjscourseimage.jpg" width="100%" height="auto">
          </v-img>
          <v-card-title
            class="text-h6 font-weight-medium"
            style="word-break: keep-all"
            >The complete Javascript Bootcamp 2020 : Build Real
            Projects</v-card-title
          >
          <v-card-subtitle class="text-secondary py-1">
            Brad traversy
          </v-card-subtitle>
          <v-card-actions class="ratingsBlock">
            <span class="ratingNumber">{{ rating }}</span>
            <v-rating
              v-model="rating"
              class="pa-1"
              style="display: inline-block"
              readonly
              dense
              half-increments
            ></v-rating>
            <span class="text--secondary font-weight-medium">554 ratings</span>
          </v-card-actions>
          <v-card-actions
            class="ratingsBlock text--secondary font-weight-light"
          >
            <span> 15 total hours | </span>
            <span> 23 sections | </span>
            <span> all levels </span>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card :width="$vuetify.breakpoint.sm ? 350 : 420">
          <v-img src="/jonasjscourseimage.jpg" width="100%" height="auto">
          </v-img>
          <v-card-title
            class="text-h6 font-weight-medium"
            style="word-break: keep-all"
            >The complete Javascript Bootcamp 2020 : Build Real
            Projects</v-card-title
          >
          <v-card-subtitle class="text-secondary py-1">
            Brad traversy
          </v-card-subtitle>
          <v-card-actions class="ratingsBlock">
            <span class="ratingNumber">{{ rating }}</span>
            <v-rating
              v-model="rating"
              class="pa-1"
              style="display: inline-block"
              readonly
              dense
              half-increments
            ></v-rating>
            <span class="text--secondary font-weight-medium">554 ratings</span>
          </v-card-actions>
          <v-card-actions
            class="ratingsBlock text--secondary font-weight-light"
          >
            <span> 15 total hours | </span>
            <span> 23 sections | </span>
            <span> all levels </span>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card :width="$vuetify.breakpoint.sm ? 350 : 420">
          <v-img src="/jonasjscourseimage.jpg" width="100%" height="auto">
          </v-img>
          <v-card-title
            class="text-h6 font-weight-medium"
            style="word-break: keep-all"
            >The complete Javascript Bootcamp 2020 : Build Real
            Projects</v-card-title
          >
          <v-card-subtitle class="text-secondary py-1">
            Brad traversy
          </v-card-subtitle>
          <v-card-actions class="ratingsBlock">
            <span class="ratingNumber">{{ rating }}</span>
            <v-rating
              v-model="rating"
              class="pa-1"
              style="display: inline-block"
              readonly
              dense
              half-increments
            ></v-rating>
            <span class="text--secondary font-weight-medium">554 ratings</span>
          </v-card-actions>
          <v-card-actions
            class="ratingsBlock text--secondary font-weight-light"
          >
            <span> 15 total hours | </span>
            <span> 23 sections | </span>
            <span> all levels </span>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card :width="$vuetify.breakpoint.sm ? 350 : 420">
          <v-img src="/jonasjscourseimage.jpg" width="100%" height="auto">
          </v-img>
          <v-card-title
            class="text-h6 font-weight-medium"
            style="word-break: keep-all"
            >The complete Javascript Bootcamp 2020 : Build Real
            Projects</v-card-title
          >
          <v-card-subtitle class="text-secondary py-1">
            Brad traversy
          </v-card-subtitle>
          <v-card-actions class="ratingsBlock">
            <span class="ratingNumber">{{ rating }}</span>
            <v-rating
              v-model="rating"
              class="pa-1"
              style="display: inline-block"
              readonly
              dense
              half-increments
            ></v-rating>
            <span class="text--secondary font-weight-medium">554 ratings</span>
          </v-card-actions>
          <v-card-actions
            class="ratingsBlock text--secondary font-weight-light"
          >
            <span> 15 total hours | </span>
            <span> 23 sections | </span>
            <span> all levels </span>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      rating: 2.3,
    }
  },
}
</script>

<style></style>
