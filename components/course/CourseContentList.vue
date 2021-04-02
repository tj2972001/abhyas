<template>
  <v-card flat>
    <v-card-title class="no-word-break"
      ><HeadingBlackH2>Course Content</HeadingBlackH2></v-card-title
    >
    <v-expansion-panels accordion multiple>
      <v-expansion-panel v-for="(item, i) in 5" :key="i">
        <v-expansion-panel-header
          disable-icon-rotate
          color="grey lighten-3"
          class="font-weight-medium text-subtitle-1"
        >
          Java collections
          <template v-slot:actions>
            <v-icon color="error"> mdi-alert-circle </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <ul class="pl-0 pt-4">
            <li class="d-flex align-center mt-3">
              <v-icon class="pr-5">mdi-video-outline</v-icon>
              <div class="mr-5">Introduction to Java collections</div>
              <div class="ml-auto">preview</div>
            </li>
            <li class="d-flex align-center mt-3">
              <v-icon class="pr-5">mdi-video-outline</v-icon>
              <div class="mr-5">Introduction to Java collections</div>
              <div class="ml-auto">preview</div>
            </li>
            <li class="d-flex align-center mt-3">
              <v-icon class="pr-5">mdi-video-outline</v-icon>
              <div class="mr-5">Introduction to Java collections</div>
              <div class="ml-auto">preview</div>
            </li>
            <li class="d-flex align-center mt-3">
              <v-icon class="pr-5">mdi-video-outline</v-icon>
              <div class="mr-5">Introduction to Java collections</div>
              <div class="ml-auto mr-5">17:02</div>
              <div>preview</div>
            </li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>
