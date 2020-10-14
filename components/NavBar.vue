<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      class="hidden-sm-and-up"
      fixed
      width="80%"
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in itemss"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      height="80"
      color="grey lighten-5"
      absolute
      app
      class="hidden-sm-and-down"
    >
      <v-app-bar-nav-icon>
        <v-avatar rounded="false"><v-img src="/v.png"></v-img></v-avatar>
      </v-app-bar-nav-icon>
      <v-toolbar-title><h3>Abhyas</h3></v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="navItem text--black text-body-1">My courses</span>
      <span class="navItem text--black text-body-1">Teach </span>
      <v-btn icon title="wishlist" class="navItem"
        ><v-icon>mdi-heart</v-icon></v-btn
      >
      <div class="searchBar">
        <input v-model="search" type="text" placeholder="Search for anything" />
        <v-btn icon><v-icon>mdi-text-search</v-icon></v-btn>
      </div>

      <v-avatar rounded="false"><v-img src="/tejasfb.jpg"></v-img></v-avatar>
    </v-app-bar>
    <v-app-bar class="hidden-md-and-up" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-icon large>mdi-amazon</v-icon>
      <v-spacer />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      search: '',
      benched: 0,

      itemss: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      courses: [
        {
          title: 'Express',
          img: 'https://picsum.photos/200/300',
        },
        {
          title: 'Complete MongoDB developers guide',
          img: 'https://picsum.photos/200/300',
        },
        {
          title: 'Node',
          img: 'https://picsum.photos/200/300',
        },
        {
          title: 'Postgres',
          img: 'https://picsum.photos/200/300',
        },
        {
          title: 'Complete MongoDB developers guide',
          img: '/v.png',
        },
      ],
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
