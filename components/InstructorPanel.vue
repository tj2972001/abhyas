<template>
  <v-navigation-drawer permanent expand-on-hover height="100vh" color="#52143e">
    <v-list class="amber--text">
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>

    <v-list nav dense class="white--text pa-0">
      <nuxt-link to="/" class="d-flex align-center darkenSideBarOnHover">
        <fa-icon class="mr-1" color="#fff" scale="1.9" name="film"></fa-icon>
        <span class="sideNavBarText">Courses</span>
      </nuxt-link>
      <nuxt-link to="/" class="d-flex align-center darkenSideBarOnHover">
        <fa-icon
          class="mr-1"
          color="#fff"
          scale="1.9"
          name="regular/envelope"
        ></fa-icon>
        <span class="sideNavBarText">Communication</span>
      </nuxt-link>
      <nuxt-link to="/" class="d-flex align-center darkenSideBarOnHover">
        <fa-icon
          class="mr-1"
          color="#fff"
          scale="1.9"
          name="chart-bar"
        ></fa-icon>
        <span class="sideNavBarText">Performance</span>
      </nuxt-link>
      <nuxt-link to="/" class="d-flex align-center darkenSideBarOnHover">
        <fa-icon class="mr-1" color="#fff" scale="1.9" name="tools"></fa-icon>
        <span class="sideNavBarText">Tools</span>
      </nuxt-link>
      <nuxt-link to="/" class="d-flex align-center darkenSideBarOnHover">
        <fa-icon
          class="mr-1"
          color="#fff"
          scale="1.9"
          name="question-circle"
        ></fa-icon>
        <span class="sideNavBarText">Resources</span>
      </nuxt-link>
    </v-list>
  </v-navigation-drawer>
</template>
<style scoped>
.sideNavBarText {
  font-size: 1.4em;
  font-weight: 300;
  margin-left: 1.3em;
}
.darkenSideBarOnHover {
  padding: 1.5em 0.4em;
}
.darkenSideBarOnHover:hover {
  border-left: 0.3em solid #ec5252;
  background-color: #81386a;
}
a {
  text-decoration: none;
  color: #fff;
}
</style>
