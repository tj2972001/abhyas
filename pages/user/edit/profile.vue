<template>
  <v-card class="edit-profile" outlined>
    <HeadingBlackH2 class="edit-profile__heading"
      >Public profile</HeadingBlackH2
    >
    <v-form class="edit-profile__form"
      ><v-text-field label="Name" outlined dense></v-text-field
      ><v-text-field label="Last Name" outlined dense></v-text-field
      ><v-text-field label="Email" outlined dense></v-text-field>
      <div class="edit-profile__form--social-sites">
        <div class="edit-profile__form--social-sites-url">
          https://www.facebook.com/
        </div>
        <v-text-field
          dense
          append-icon="mdi-facebook"
          label="Facebook username"
          outlined
        ></v-text-field>
      </div>
      <div class="edit-profile__form--social-sites">
        <div class="edit-profile__form--social-sites-url">
          https://www.twitter.com/
        </div>
        <v-text-field
          dense
          append-icon="mdi-twitter"
          label="twitter username"
          outlined
        ></v-text-field>
      </div>
      <div class="edit-profile__form--social-sites">
        <div class="edit-profile__form--social-sites-url">
          https://www.linkidin.com/
        </div>
        <v-text-field
          dense
          append-icon="mdi-twitter"
          label="Linkidin username"
          outlined
        ></v-text-field>
      </div>
      <v-text-field
        dense
        append-icon="mdi-web"
        label="Personal site"
        outlined
      ></v-text-field>
      <v-card-actions
        ><v-btn rounded class="white--text pa-5" color="teal lighten-1"
          >save changes</v-btn
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

<style scoped lang="scss">
@import '/assets/scss/abstracts/mixins';

.edit-profile {
  @include userEdit;
  &__heading {
    @include userEditHeading;
  }
  &__form {
    &--social-sites {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & > :first-child {
      margin-top: 1rem;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
    & > *:not(:last-child, :first-child) {
      margin: 0 1.5rem;
    }
    &--social-sites-url {
      @include socialLink;
    }
  }
}
</style>
