<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    max-height="500px"
    :nudge-bottom="60"
    offset-x
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn text rounded class="mx-1" v-bind="attrs" v-on="on"
        ><v-icon v-if="icon">mdi-{{ icon }}</v-icon
        >{{ name }}</v-btn
      >
    </template>

    <v-card>
      <template v-if="!showSkeleton">
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>John Leider</v-list-item-title>
              <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="message" color="purple"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable messages</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="hints" color="purple"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable hints</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="menu = false"> Cancel </v-btn>
          <v-btn color="primary" text @click="menu = false"> Save </v-btn>
        </v-card-actions>
      </template>
      <template v-show="showSkeleton">
        <v-skeleton-loader
          class="mx-auto"
          max-width="300"
          type="card"
        ></v-skeleton-loader>
      </template>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Menu',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
    showSkeleton: true,
  }),
}
</script>
