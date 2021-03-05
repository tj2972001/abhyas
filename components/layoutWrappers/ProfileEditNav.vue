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
            active-class="purple white--text"
            depressed
            rounded
            :to="`${option.link}`"
          >
            <fa-icon
              class="px-2"
              :name="option.icon"
              scale="2"
              color="#000"
            ></fa-icon>
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
        icon: 'regular/user',
      },

      {
        name: 'photo',
        link: '/user/edit/photo',
        icon: 'regular/image',
      },
      {
        name: 'view public profile',
        link: '/user/edit/public',
        icon: 'regular/address-card',
      },
      {
        name: 'account',
        link: '/user/edit/account',
        icon: 'shield-alt',
      },
      {
        name: 'delete',
        link: '/user/edit/delete',
        icon: 'skull-crossbones',
      },
    ],
  }),
}
</script>
