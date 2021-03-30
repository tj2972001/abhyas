<template>
  <section class="app-row signup">
    <div class="signup__header">Create a new account</div>
    <v-divider></v-divider>
    <div class="signup__social-auth">
      <v-btn outlined color="amber"
        ><v-icon class="signup__icon">mdi-google</v-icon
        ><span> Signup with google</span>
      </v-btn>
      <v-btn outlined color="blue"
        ><v-icon class="signup__icon">mdi-microsoft</v-icon
        ><span> Signup with Microsoft</span>
      </v-btn>
      <v-btn outlined color="grey"
        ><v-icon class="signup__icon">mdi-github</v-icon
        ><span> Signup with github</span>
      </v-btn>
    </div>
    <v-divider></v-divider>
    <div class="signup__form">
      <v-text-field
        label="Name"
        class="signup__form--name"
        outlined
        dense
        append-icon="mdi-account"
      ></v-text-field>
      <v-text-field
        label="Email"
        class="signup__form--email"
        type="email"
        outlined
        dense
        style="margin-top: -20px"
        append-icon="mdi-email"
      ></v-text-field>
      <v-text-field
        label="Password"
        class="signup__form--password"
        type="password"
        append-icon="mdi-key"
        outlined
        dense
        style="margin-top: -20px"
      ></v-text-field>
      <v-text-field
        label="Confirm Password"
        class="signup__form--confirm-password"
        type="password"
        append-icon="mdi-lock"
        outlined
        dense
        style="margin-top: -20px"
      ></v-text-field>
      <v-card-actions class="justify-center"
        ><v-btn color="red accent-2 white--text pa-5" rounded
          >Signup</v-btn
        ></v-card-actions
      >
    </div>
  </section>
</template>

<script>
export default {
  layout: 'courseDescription',
  head() {
    return {
      title: 'Signup | Abhyass',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '/assets/scss/abstracts/variables';
.signup {
  &__header {
    margin-top: 3rem;
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    color: $color-black-pure;
    font-weight: 700;
    text-align: center;
  }
  &__social-auth {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    & > * {
      margin: 0.4rem auto;
      width: 90%;
      max-width: 40em;
      display: block;
    }
  }
  &__form {
    margin-top: 1.5rem;
  }
  &__icon {
    margin: 0.4rem;
  }
}
</style>
