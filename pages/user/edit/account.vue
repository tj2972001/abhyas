<template>
  <v-card width="800" max-width="90%" class="mx-auto mt-10" outlined>
    <v-card-title class="justify-center">Account</v-card-title>
    <v-divider></v-divider>
    <v-card-subtitle
      >Edit your account settings and change your password
      here.</v-card-subtitle
    >
    <v-divider></v-divider>
    <v-card-text>
      <v-form>
        <v-text-field
          :dense="$vuetify.breakpoint.xsOnly"
          label="Current Password"
          append-icon="mdi-key-outline"
          outlined
        ></v-text-field
        ><v-text-field
          :dense="$vuetify.breakpoint.xsOnly"
          label="New Password"
          append-icon="mdi-key-outline"
          outlined
        ></v-text-field
        ><v-text-field
          :dense="$vuetify.breakpoint.xsOnly"
          label="Confirm New Password"
          append-icon="mdi-lock"
          outlined
        ></v-text-field>
        <v-card-actions
          ><v-btn rounded class="white--text pa-5" color="teal lighten-1"
            >Update Password</v-btn
          ></v-card-actions
        >
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  layout: 'profileEdit',
}
</script>

<style></style>
