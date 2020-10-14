<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <v-row class="black py-10 pl-2 white--text">
          <v-col cols="12">
            <h4 class="white--text text-h4 font-weight-bold">
              Node JS: Advanced Concepts
            </h4>
            <div class="font-weight-medium text-subtitle-1 mt-3">
              Get advanced with Node.Js! Learn caching with Redis, speed up
              through clustering, and add image upload with S3 and Node!
            </div>
            <div class="mt-5 d-flex justify-space-around justify-sm-start">
              <span style="color: #d49b1e" class="text-subtitle-1 pa-2">
                4.7 ratings
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
            <div class="mt-2">
              Created by <nuxt-link to="/">Stphan Grider</nuxt-link>
            </div>
            <div class="mt-3 d-md-flex">
              <div class="mr-md-3 py-2 py-md-0">
                <v-icon color="#fff">mdi-exclamation</v-icon> Last updated :
                september 2020
              </div>
              <div class="mr-md-3 py-2 py-md-0">
                <v-icon class="mr-1" color="#fff">mdi-web</v-icon> English
              </div>
            </div>
            <div class="mt-5 d-flex flex-column flex-md-row">
              <v-btn color="#fff" class="ma-2" outlined>
                Wishlist
                <v-icon>mdi-heart</v-icon></v-btn
              >
              <v-btn color="#fff" class="ma-2" outlined>
                Share
                <v-icon>mdi-share</v-icon></v-btn
              >
              <v-btn color="#fff" class="ma-2" outlined>
                Gift this course
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-card class="mt-5 ma-0 pa-1 pa-md-3">
          <v-card-title
            class="text--primary text-h4 font-weight-bold"
            style="word-break: keep-all"
            >What you will learn</v-card-title
          >
          <v-row>
            <v-col cols="12" md="6">
              <ul>
                <li>
                  <v-icon class="pa-1">mdi-check</v-icon>
                  Absolutely master the Event Loop and understand each of its
                </li>
                <li>
                  <v-icon class="pa-1">mdi-check</v-icon>
                  Speed up database queries with caching for MongoDB backed by
                  Redis
                </li>
                <li>
                  <v-icon class="pa-1">mdi-check</v-icon>
                  Apply scalable image and file upload to your app, utilizing
                  AWS S3
                </li>
                <li>
                  <v-icon class="pa-1">mdi-check</v-icon>
                  Utilize Worker Threads and Clustering to dramatically improve
                  the performance of Node servers
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
                  Speed up database queries with caching for MongoDB backed by
                  Redis
                </li>
                <li>
                  <v-icon class="pa-1">mdi-check</v-icon>
                  Apply scalable image and file upload to your app, utilizing
                  AWS S3
                </li>
                <li>
                  <v-icon class="pa-1">mdi-check</v-icon>
                  Utilize Worker Threads and Clustering to dramatically improve
                  the performance of Node servers
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-card>
        <v-row class="my-2">
          <v-col class="text--primary text-h4 font-weight-bold"
            >Course content</v-col
          >
        </v-row>
        <v-row class="my-5">
          <v-col class="font-weight-medium text-subtitle-1"
            >8 sections • 166 lectures • 16h 2m total length
          </v-col>
        </v-row>
        <v-row>
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
                  <li class="sectionContents mt-3">
                    <v-icon class="pr-5">mdi-video-outline</v-icon>
                    <div class="mr-5">
                      THe internals of node backed by C++ by Ryan Dahl
                    </div>
                    <div class="ml-auto">preview</div>
                  </li>
                  <li class="sectionContents mt-3">
                    <v-icon class="pr-5">mdi-video-outline</v-icon>
                    <div class="mr-5">
                      THe internals of node backed by C++ by Ryan Dahl
                    </div>
                    <div class="ml-auto">preview</div>
                  </li>
                  <li class="sectionContents mt-3">
                    <v-icon class="pr-5">mdi-video-outline</v-icon>
                    <div class="mr-5">
                      THe internals of node backed by C++ by Ryan Dahl
                    </div>
                    <div class="ml-auto">preview</div>
                  </li>
                  <li class="sectionContents mt-3">
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
        </v-row>
        <v-row class="my-5"
          ><v-col class="text--primary text-h4 font-weight-bold" cols="12"
            >Requirements</v-col
          >
          <v-card width="100%">
            <ul class="font-weight-medium text-subtitle-1 mt-5">
              <li class="mb-3">Basic understanding of Node and express</li>
              <li class="mb-3">Basic understanding of Node and express</li>
              <li class="mb-3">Basic understanding of Node and express</li>
              <li class="mb-3">Basic understanding of Node and express</li>
            </ul>
          </v-card>
        </v-row>
        <v-row>
          <v-col class="text--primary text-h4 font-weight-bold" cols="12"
            >Description</v-col
          >
          <v-card>
            <v-card-text class="text-body-1"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              facilis, ad repudiandae hic blanditiis consequuntur a ullam sit
              sint veritatis. Rerum sunt ullam consequatur consequuntur
              cupiditate eos, ex dolor neque?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ut sint possimus aspernatur, rem
              sed, tempore consequatur error accusantium, harum itaque
              quibusdam. Asperiores velit quod repudiandae facere voluptatibus
              distinctio voluptate <fuga class="lorem"></fuga
            ></v-card-text>
          </v-card>
        </v-row>
        <v-row class="mt-5">
          <v-col class="text--primary text-h4 font-weight-bold" cols="12"
            >Instructor</v-col
          >

          <v-col cols="12" class="text-h6">Robert Bunch</v-col>
          <v-col cols="12" class="font-weight-light">
            Code school instructor, software architect and engineer
          </v-col>
          <v-col class="d-flex justify-start" cols="12">
            <img
              src="/tejasfb.jpg"
              alt=""
              class="rounded-circle mr-10"
              :height="$vuetify.breakpoint.xs ? 120 : 200"
              :width="$vuetify.breakpoint.xs ? 120 : 200"
            />
            <div class="d-flex flex-column align-start">
              <div class="d-flex mt-3 justify-space-between">
                <v-icon color="#d49b1e">mdi-star-outline</v-icon>
                <div class="ml-2">2.4 Instructor ratings</div>
              </div>
              <div class="d-flex mt-3 justify-space-between">
                <v-icon color="#d49b1e">mdi-account-group-outline</v-icon>
                <div class="ml-2">233443 students</div>
              </div>
              <div class="d-flex mt-3 justify-space-between">
                <v-icon color="#d49b1e">mdi-star-circle-outline</v-icon>
                <div class="ml-2">2223 reviews</div>
              </div>
              <div class="d-flex mt-3 justify-space-between">
                <v-icon color="#d49b1e">mdi-video-vintage</v-icon>
                <div class="ml-2">10 courses</div>
              </div>
            </div>
          </v-col>
          <v-col class="text-body-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            corrupti, nihil expedita doloribus blanditiis optio sequi, molestiae
            ad repellendus corporis aliquid? Asperiores consectetur repudiandae
            excepturi a expedita repellendus, similique eligendi! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Tempore eos rem fuga,
            aut distinctio sit, dolore eaque obcaecati excepturi animi
            voluptate, quos sapiente iure. Adipisci nisi alias rerum voluptate
            nobis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ab
            officia doloremque quam dolorum vitae dicta dolor provident
            inventore ad iusto fugit harum at amet quis, porro, nobis ratione
            sed.
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4" class="d-flex justify-center">
        <v-card class="mt-10" width="400" max-width="90%" height="max-content">
          <video
            src="/delicate.mp4"
            controls
            poster="/tejasfb.jpg"
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      rating: 5,
    }
  },
}
</script>

<style scoped></style>
