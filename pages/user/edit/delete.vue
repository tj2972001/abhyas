<template>
  <v-card class="edit-delete" outlined>
    <HeadingBlackH4 class="edit-delete__heading">Delete Account</HeadingBlackH4>
    <v-divider></v-divider>
    <div class="edit-delete__info">Close your account permanently.</div>
    <v-divider></v-divider>
    <v-card-text class="edit-delete__warning">
      <div class="edit-delete__warning--title">Close Your Account</div>
      <div class="edit-delete__warning--message">
        <span>Warning:</span> If you close your account, you will be
        unsubscribed from your 1 course, and will lose access forever.
      </div>
    </v-card-text>
    <v-card-actions
      ><v-btn rounded class="pa-2" color="red white--text"
        >Delete account permanantly</v-btn
      ></v-card-actions
    >
  </v-card>
</template>

<script>
export default {
  layout: 'profileEdit',
}
</script>

<style scoped lang="scss">
@import '/assets/scss/abstracts/mixins';
.edit-delete {
  @include userEdit;

  &__heading {
    @include userEditHeading;
  }
  &__info {
    padding: 1rem 0.5rem;
  }
  &__warning {
    &--title {
    }
    &--message {
    }
  }
}
</style>
