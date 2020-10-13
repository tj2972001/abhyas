<template>
  <v-footer color="#eee">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-list color="#eee">
            <v-list-item
              ><nuxt-link to="/">Abhyas for business</nuxt-link></v-list-item
            >
            <v-list-item
              ><nuxt-link to="/">Teach on Abhyas</nuxt-link></v-list-item
            >
            <v-list-item><nuxt-link to="/">Get the app</nuxt-link></v-list-item>
            <v-list-item><nuxt-link to="/">About us</nuxt-link></v-list-item>
            <v-list-item><nuxt-link to="/">Contact us</nuxt-link></v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" sm="6">
          <v-list color="#eee">
            <v-list-item><nuxt-link to="/">Careers</nuxt-link></v-list-item>
            <v-list-item><nuxt-link to="/">Blog</nuxt-link></v-list-item>
            <v-list-item
              ><nuxt-link to="/">Help and support</nuxt-link></v-list-item
            >
            <v-list-item><nuxt-link to="/">Affiliate</nuxt-link></v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-avatar><v-img src="/v.png"></v-img></v-avatar>
        </v-col>
        <v-col cols="12" md="6">
          <div class="searchBar">
            <input type="text" placeholder="Search for anything" />
            <v-btn icon><v-icon>mdi-text-search</v-icon></v-btn>
          </div>
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
export default {}
</script>

<style>
a {
  text-decoration: none;
}
</style>
