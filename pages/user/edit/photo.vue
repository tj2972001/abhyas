<template>
  <v-card class="edit-photo" outlined>
    <HeadingBlackH2 class="edit-photo__heading">Photo</HeadingBlackH2>
    <v-divider></v-divider>
    <div class="edit-photo__info">
      Add a nice photo of yourself for your profile.
    </div>
    <v-divider></v-divider>
    <div class="edit-photo__edit">
      <img class="edit-photo__edit--old-image" src="/images/tejasfb.jpg" />
      <v-file-input
        label="Upload profile pic"
        class="edit-photo__edit--file-picker"
      >
      </v-file-input>
    </div>
    <v-card-actions
      ><v-btn rounded class="white--text pa-5" color="teal lighten-1"
        >update photo</v-btn
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

.edit-photo {
  @include userEdit;

  &__heading {
    @include userEditHeading;
  }
  &__info {
    padding: 1rem 0.5rem;
  }
  &__edit {
    display: flex;
    margin-left: 0.6rem;
    align-content: center;
    align-items: center;
    //ma-5 d-flex flex-column flex-md-row align-md-center
    &--old-image {
      border-radius: 50%;
      height: 10rem;
      width: 10rem;
      margin-top: 1rem;

      //rounded-circle mt-2 mr-md-5
    }
    &--file-picker {
      margin-top: 1rem;
    }
  }
}
</style>
