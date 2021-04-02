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
      <img class="logo-nav" src="/images/v.png" />
      <v-toolbar-title
        ><h2 class="blueishLinearGrad">Abhyas</h2></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <SearchBarInNav />
      <navigation-link>My courses</navigation-link>
      <navigation-link>Teach</navigation-link>
      <Menu name="xsx" icon="dxed" />
      <span class="ma-5"
        ><fa-icon scale="1.6" name="regular/heart"></fa-icon
      ></span>
      <v-avatar rounded="false"
        ><v-img src="https://picsum.photos/400/250"></v-img
      ></v-avatar>
    </v-app-bar>
    <v-app-bar class="hidden-sm-and-up" absolute app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
  </div>
</template>

<script>
import NavigationLink from '../other/NavigationLink.vue'
export default {
  components: { NavigationLink },
  data() {
    return {
      drawer: false,
    }
  },
}
// अभ्यास
</script>

<style scoped>
.logo-nav {
  height: 3rem;
  width: 3rem;
}
</style>
