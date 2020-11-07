<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      class="hidden-sm-and-up"
      fixed
      width="80%"
      app
    >
      <v-list> </v-list>
    </v-navigation-drawer>
    <v-app-bar
      height="80"
      color="grey lighten-5"
      absolute
      app
      class="hidden-sm-and-down"
    >
      <v-app-bar-nav-icon>
        <v-avatar rounded="false"><v-img src="/images/v.png"></v-img></v-avatar>
      </v-app-bar-nav-icon>
      <v-toolbar-title><h3>Abhyas</h3></v-toolbar-title>
      <v-spacer></v-spacer>
      <SearchBarInNav />
      <v-btn text rounded color="indigo darken-2">My courses</v-btn>
      <v-btn text rounded color="indigo darken-2">Teach </v-btn>
      <v-btn icon class="mx-1" title="wishlist"
        ><v-icon>mdi-heart-outline</v-icon></v-btn
      >
      <v-btn icon class="mx-1" title="wishlist"
        ><v-icon>mdi-cart-outline</v-icon></v-btn
      >
      <v-avatar rounded="false"
        ><v-img src="/images/tejasfb.jpg"></v-img
      ></v-avatar>
    </v-app-bar>
    <v-app-bar class="hidden-md-and-up" absolute app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,

      title: 'Abhyas',
    }
  },
  computed: {
    items() {
      return Array.from({ length: this.length }, (k, v) => v + 1)
    },
    length() {
      return 7000
    },
  },
}
</script>

<style></style>
