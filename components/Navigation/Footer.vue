<template>
  <v-footer color="#eee">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          :class="$vuetify.breakpoint.smAndDown ? 'ma-0 pa-0' : ''"
        >
          <v-list
            color="#eee"
            :class="$vuetify.breakpoint.smAndDown ? 'ma-0 pa-0' : ''"
          >
            <nuxt-link to="/">Abhyas for business</nuxt-link>
            <nuxt-link to="/">Teach on Abhyas</nuxt-link>
            <nuxt-link to="/">Get the app</nuxt-link>
            <nuxt-link to="/">About us</nuxt-link>
            <nuxt-link to="/">Contact us</nuxt-link>
          </v-list>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          :class="$vuetify.breakpoint.smAndDown ? 'ma-0 pa-0' : ''"
        >
          <v-list
            color="#eee"
            :class="$vuetify.breakpoint.smAndDown ? 'ma-0 pa-0' : ''"
          >
            <nuxt-link to="/">Careers</nuxt-link>
            <nuxt-link to="/">Blog</nuxt-link>
            <nuxt-link to="/">Help and support</nuxt-link>
            <nuxt-link to="/">Affiliate</nuxt-link>
          </v-list>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-avatar><v-img src="/images/v.png"></v-img></v-avatar>
        </v-col>
        <v-col cols="12" md="6">
          <SearchBarInNav :search="search" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          {{ new Date().getFullYear() }} - Abhyass | All rights reserved
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    }
  },
}
</script>

<style>
a {
  margin: 0.3em;
}
.v-list > * {
  display: block;
}
</style>
