<template>
  <div class="nav-bar-main">
    <v-navigation-drawer
      v-model="drawer"
      class="hidden-sm-and-up nav-bar-main__drawer"
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
      class="hidden-sm-and-down nav-bar-main__bar"
    >
      <img class="nav-bar-main__bar--logo-nav" src="/images/v.png" />
      <v-toolbar-title class="nav-bar-main__bar--title"
        ><h2>Abhyas</h2></v-toolbar-title
      >
      <SearchBarInNav class="nav-bar-main__bar--search" />
      <div class="nav-bar-main__bar__container">
        <navigation-link class="nav-bar-main__bar--menu"
          >My courses</navigation-link
        >
        <navigation-link class="nav-bar-main__bar--menu">Teach</navigation-link>
        <span class="nav-bar-main__bar--icon"
          ><fa-icon scale="1.6" name="regular/heart"></fa-icon
        ></span>
        <span class="nav-bar-main__bar--icon"
          ><fa-icon scale="1.6" name="regular/bell"></fa-icon
        ></span>
        <v-avatar rounded="false" class="nav-bar-main__bar--avatar"
          ><v-img src="https://picsum.photos/400/250"></v-img
        ></v-avatar>
      </div>
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

<style scoped lang="scss">
@import '/assets/scss/abstracts/variables';
.v-application a {
  color: $color-black-pure;
}
.nav-bar-main {
  &__drawer {
  }
  &__bar {
    &__container {
      display: flex;
      align-items: center;
      margin-left: auto;
      & > * {
        font-size: 1.2rem;
        margin-left: 1.5rem;
      }
    }
    &--search {
      margin-left: 2rem;
    }
    &--logo-nav {
      height: 3rem;
      width: 3rem;
    }
    &--title {
      color: $color-skyblue-dark;
      text-transform: uppercase;
    }
    &--menu {
      text-decoration: none;
      &:hover {
        color: $color-pinkviolet-dark;
        transition: all 0.3s;
      }
    }
    &--icon {
    }
    &--avatar {
    }
  }
}
</style>
