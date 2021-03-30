<template>
  <div class="app-row login">
    <div class="login__header">Login to your account</div>
    <v-divider></v-divider>
    <div class="my-3">
      <div class="login__social-auth">
        <v-btn outlined color="amber"
          ><fa-icon
            class="login__icon"
            name="brands/google"
            scale="1.2"
          ></fa-icon
          ><span> Login with google</span>
        </v-btn>
        <v-btn outlined color="blue"
          ><fa-icon
            class="login__icon"
            name="brands/microsoft"
            scale="1.2"
          ></fa-icon
          ><span> Login with Microsoft</span>
        </v-btn>
        <v-btn
          outlined
          color="grey"
          class="mx-auto mt-1 d-block"
          style="width: 80%"
          ><fa-icon name="brands/github" class="mx-2" scale="1.2"></fa-icon
          ><span> Login with github</span>
        </v-btn>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="login__form">
      <v-text-field
        label="Email"
        type="email"
        class="login__form--email"
        outlined
        dense
        append-icon="mdi-email"
      ></v-text-field>
      <v-text-field
        label="Password"
        type="password"
        class="login__form--password"
        append-icon="mdi-key"
        outlined
        dense
        style="margin-top: -20px"
      ></v-text-field>
      <v-card-actions class="justify-center"
        ><v-btn color="red accent-2 white--text pa-5" rounded
          >Login</v-btn
        ></v-card-actions
      >
    </div>
  </div>
</template>

<script>
export default {
  layout: 'courseDescription',
  head() {
    return {
      title: 'Login | Abhyass',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '/assets/scss/abstracts/variables';

.login {
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
