<template>
  <div class="user-edit-wrapper">
    <HeadingBlackH2 class="user-edit-wrapper__heading"
      >Accounts Settings</HeadingBlackH2
    >
    <v-tabs class="user-edit-wrapper__options" next-icon prev-icon show-arrows>
      <v-tab
        v-for="option in profileEditOptions"
        :key="option"
        :to="`${option.link}`"
        class="user-edit-wrapper__options--option"
      >
        <fa-icon class="px-2" :name="option.icon" scale="2"></fa-icon>
        {{ option.name }}
      </v-tab>
    </v-tabs>
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
<style lang="scss" scoped>
.user-edit-wrapper {
  margin-top: 3rem;
  &__heading {
    margin-bottom: 2rem;
  }
  &__options {
    &--option {
    }
  }
}
</style>
