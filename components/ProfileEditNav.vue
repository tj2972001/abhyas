<template>
  <div>
    <div class="mt-10 mb-3 text-h4 font-weight-bold">Account Settings</div>
    <v-sheet class="mx-auto mt-10" max-width="95%">
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
      },

      {
        name: 'photo',
        link: '/user/edit/photo',
      },
      {
        name: 'view public profile',
        link: '/user/edit/public',
      },
      {
        name: 'account',
        link: '/user/edit/account',
      },
      {
        name: 'delete',
        link: '/user/edit/delete',
      },
    ],
  }),
}
</script>
