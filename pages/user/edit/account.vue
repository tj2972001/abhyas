<template>
  <v-card class="edit-account" outlined>
    <HeadingBlackH4 class="edit-account__heading">Account</HeadingBlackH4>
    <v-divider></v-divider>
    <div class="edit-account__info">
      Edit your account settings and change your password here.
    </div>
    <v-divider></v-divider>

    <v-form class="edit-account__form">
      <v-text-field
        dense
        label="Current Password"
        append-icon="mdi-key-outline"
        class="edit-account__form--old-password"
        outlined
      ></v-text-field
      ><v-text-field
        dense
        label="New Password"
        append-icon="mdi-key-outline"
        class="edit-account__form--new-password"
        outlined
      ></v-text-field
      ><v-text-field
        dense
        label="Confirm New Password"
        append-icon="mdi-lock"
        class="edit-account__form--confirm-new-password"
        outlined
      ></v-text-field>
      <v-card-actions
        ><v-btn rounded class="white--text pa-5" color="teal lighten-1"
          >Update Password</v-btn
        ></v-card-actions
      >
    </v-form>
  </v-card>
</template>

<script>
export default {
  layout: 'profileEdit',
}
</script>

<style lang="scss" scoped>
@import '/assets/scss/abstracts/mixins';
.edit-account {
  @include userEdit;
  &__heading {
    @include userEditHeading;
  }
  &__info {
    padding: 1rem 0.5rem;
  }
  &__form {
    & > :first-child {
      margin-top: 1rem;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
    & > *:not(:last-child, :first-child) {
      margin: 0 1.5rem;
      // height: 3rem;
    }
  }
}
</style>
