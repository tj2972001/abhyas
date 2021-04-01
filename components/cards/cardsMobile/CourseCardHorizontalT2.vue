<template>
  <v-card
    class="d-flex my-2 align-center py-1 pr-1"
    height="max-content"
    outlined
  >
    <img
      src="https://picsum.photos/400/250"
      style="height: auto; width: 100%; max-width: 64px; max-height: 150px"
    />
    <div class="ml-4">
      <h4 class="text-body-2 font-weight-medium">
        Complete Javascript Guide 2020: Build real projects
      </h4>
      <p class="mt-2 mb-1 font-weight-light" style="font-size: 12px">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
        doloremque ullam nisi...
      </p>
      <p class="text--secondary font-weight-regular text-caption my-1">
        Tejas Jadhav
      </p>
      <div class="d-flex align-center" style="margin-top: -10px">
        <span style="color: #d49b1e; font-size: 12px"> 4.8 ratings </span>
        <v-rating
          v-model="rating"
          class="pa-1"
          style="display: inline-block"
          readonly
          dense
          size="16"
          color="#d49b1e"
          half-increments
        ></v-rating>
        <span style="color: #d49b1e; font-size: 12px">( 1000 )</span>
      </div>
      <div style="margin-top: -5px">
        <span class="font-weight-bold text-body-2 orange--text"> $700 </span>
        <span
          class="text-decoration-line-through text-body-2 font-weight-thin ml-4"
          >$1200</span
        >
      </div>
      <div class="d-flex flex-start">
        <div class="text--secondary font-weight-regular text-caption my-1">
          15 hours total
        </div>
        <div class="text--secondary font-weight-regular text-caption my-1">
          &bull; 23 sections
        </div>
        <div class="text--secondary font-weight-regular text-caption my-1">
          &bull; All levels
        </div>
      </div>
    </div>
  </v-card>
</template>
