<template>
  <v-card class="mt-5 ma-0 pa-1 pa-md-3 ml-8 ml-md-15">
    <v-card-title
      class="text--primary text-h4 font-weight-bold"
      style="word-break: keep-all"
      >What you will learn</v-card-title
    >
    <v-row v-if="$vuetify.breakpoint.smAndUp">
      <v-col cols="12" md="6">
        <ul>
          <li>
            <v-icon class="pa-1">mdi-check</v-icon>
            Absolutely master the Event Loop and understand each of its
          </li>
          <li>
            <v-icon class="pa-1">mdi-check</v-icon>
            Speed up database queries with caching for MongoDB backed by Redis
          </li>
          <li>
            <v-icon class="pa-1">mdi-check</v-icon>
            Apply scalable image and file upload to your app, utilizing AWS S3
          </li>
          <li>
            <v-icon class="pa-1">mdi-check</v-icon>
            Utilize Worker Threads and Clustering to dramatically improve the
            performance of Node servers
          </li>
        </ul>
      </v-col>
      <v-col cols="12" md="6">
        <ul>
          <li>
            <v-icon class="pa-1">mdi-check</v-icon>
            Absolutely master the Event Loop and understand each of its
          </li>
          <li>
            <v-icon class="pa-1">mdi-check</v-icon>
            Speed up database queries with caching for MongoDB backed by Redis
          </li>
          <li>
            <v-icon class="pa-1">mdi-check</v-icon>
            Apply scalable image and file upload to your app, utilizing AWS S3
          </li>
          <li>
            <v-icon class="pa-1">mdi-check</v-icon>
            Utilize Worker Threads and Clustering to dramatically improve the
            performance of Node servers
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <ul>
          <li>
            <v-icon class="pa-1">mdi-check</v-icon>
            Absolutely master the Event Loop and understand each of its
          </li>
          <li>
            <v-icon class="pa-1">mdi-check</v-icon>
            Speed up database queries with caching for MongoDB backed by Redis
          </li>
          <li>
            <v-icon class="pa-1">mdi-check</v-icon>
            Apply scalable image and file upload to your app, utilizing AWS S3
          </li>
          <li>
            <v-icon class="pa-1">mdi-check</v-icon>
            Utilize Worker Threads and Clustering to dramatically improve the
            performance of Node servers
          </li>
          <li>
            <v-icon class="pa-1">mdi-check</v-icon>
            Absolutely master the Event Loop and understand each of its
          </li>
          <li>
            <v-icon class="pa-1">mdi-check</v-icon>
            Speed up database queries with caching for MongoDB backed by Redis
          </li>
          <li>
            <v-icon class="pa-1">mdi-check</v-icon>
            Apply scalable image and file upload to your app, utilizing AWS S3
          </li>
          <li>
            <v-icon class="pa-1">mdi-check</v-icon>
            Utilize Worker Threads and Clustering to dramatically improve the
            performance of Node servers
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-card>
</template>
