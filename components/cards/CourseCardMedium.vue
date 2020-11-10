<template>
  <v-card class="d-flex mb-5 align-center" height="max-content" outlined>
    <img
      src="/images/tejasfb.jpg"
      style="height: 100%; max-height: 200px; width: 100%; max-width: 200px"
    />
    <div class="ml-10">
      <h4 class="text-h5 font-weight-medium my-2">
        Complete Javascript Guide 2020: Build real projects
      </h4>
      <p class="font-weight-bold text-body-2 mb-0">Tejas Jadhav</p>
      <p class="my-2 text-body-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        aspernatur natus suscipit facilis vel odit beatae commodi! Molestiae,
        reiciendis ratione voluptas cupiditate fugit nisi quasi ut assumenda
        repudiandae, neque iusto!
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
      <div class="d-flex flex-start my-3">
        <div
          class="text--secondary font-weight-medium text--darken-1 text-body-1"
        >
          15 hours total
        </div>
        <div
          class="text--secondary font-weight-medium text--darken-1 text-body-1"
        >
          &bull; 23 sections
        </div>
        <div
          class="text--secondary font-weight-medium text--darken-1 text-body-1"
        >
          &bull; All levels
        </div>
      </div>
    </div>
  </v-card>
</template>
