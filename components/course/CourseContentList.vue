<template>
  <v-card class="mt-5 ma-0 px-1 px-md-3 ml-8 ml-md-15" flat>
    <v-card-title
      class="text--primary text-h4 font-weight-bold"
      style="word-break: keep-all"
      >Course Content</v-card-title
    >
    <v-expansion-panels accordion multiple>
      <v-expansion-panel v-for="(item, i) in 5" :key="i">
        <v-expansion-panel-header
          disable-icon-rotate
          color="grey lighten-3"
          class="font-weight-medium text-subtitle-1"
        >
          The Internals of Node
          <template v-slot:actions>
            <v-icon color="error"> mdi-alert-circle </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <ul class="pl-0 pt-4">
            <li class="d-flex align-center mt-3">
              <v-icon class="pr-5">mdi-video-outline</v-icon>
              <div class="mr-5">
                THe internals of node backed by C++ by Ryan Dahl
              </div>
              <div class="ml-auto">preview</div>
            </li>
            <li class="d-flex align-center mt-3">
              <v-icon class="pr-5">mdi-video-outline</v-icon>
              <div class="mr-5">
                THe internals of node backed by C++ by Ryan Dahl
              </div>
              <div class="ml-auto">preview</div>
            </li>
            <li class="d-flex align-center mt-3">
              <v-icon class="pr-5">mdi-video-outline</v-icon>
              <div class="mr-5">
                THe internals of node backed by C++ by Ryan Dahl
              </div>
              <div class="ml-auto">preview</div>
            </li>
            <li class="d-flex align-center mt-3">
              <v-icon class="pr-5">mdi-video-outline</v-icon>
              <div class="mr-5">
                THe internals of node backed by C++ by Ryan Dahl
              </div>
              <div class="ml-auto mr-5">17:02</div>
              <div>preview</div>
            </li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>
