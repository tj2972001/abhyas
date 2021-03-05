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
        <v-avatar><v-img src="images/abhyas_logo.jpeg"></v-img></v-avatar>
      </v-app-bar-nav-icon>
      <v-toolbar-title
        ><h2 class="blueishLinearGrad">Abhyas</h2></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <SearchBarInNav />
      <v-btn text rounded>My courses</v-btn>
      <v-btn text rounded>Teach </v-btn>
      <Menu name="xsx" icon="" />
      <v-btn icon class="mx-1"
        ><fa-icon scale="1.6" class="mr-2" name="regular/heart"></fa-icon
      ></v-btn>
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
    }
  },
}
// अभ्यास
</script>

<style></style>
