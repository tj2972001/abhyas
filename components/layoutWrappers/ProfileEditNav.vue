<template>
  <div>
    <div class="mt-10 mb-3 text-h4 text-md-h3 font-weight-bold black--text">
      Account Settings
    </div>
    <v-sheet class="mx-auto mt-10">
      <v-slide-group multiple show-arrows>
        <v-slide-item v-for="option in profileEditOptions" :key="option.name">
          <v-btn
            :small="$vuetify.breakpoint.smAndDown"
            class="mx-2"
            active-class="purple white--text"
            depressed
            rounded
            :to="`${option.link}`"
          >
            <v-icon class="px-1">{{ option.icon }}</v-icon>
            {{ option.name }}
          </v-btn>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>
<script>
export default {
  data: () => ({
    model: null,
    profileEditOptions: [
      {
        name: 'profile',
        link: '/user/edit/profile',
        icon: 'mdi-account',
      },

      {
        name: 'photo',
        link: '/user/edit/photo',
        icon: 'mdi-image',
      },
      {
        name: 'view public profile',
        link: '/user/edit/public',
        icon: 'mdi-account-lock',
      },
      {
        name: 'account',
        link: '/user/edit/account',
        icon: 'mdi-shield-account',
      },
      {
        name: 'delete',
        link: '/user/edit/delete',
        icon: 'mdi-alert',
      },
    ],
  }),
}
</script>
