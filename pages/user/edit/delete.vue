<template>
  <v-card width="800" max-width="90%" class="mx-auto mt-10" outlined>
    <v-card-title>Close account </v-card-title>
    <v-divider></v-divider>
    <v-card-subtitle>Close your account permanently.</v-card-subtitle>
    <v-divider></v-divider>
    <v-card-text class="font-weight-medium text-body-1 black--text">
      <div class="mb-3">Close Your Account</div>
      <div>
        <span style="color: red">Warning:</span> If you close your account, you
        will be unsubscribed from your 1 course, and will lose access forever.
      </div>
    </v-card-text>
    <v-card-actions
      ><v-btn rounded class="pa-5" color="red white--text"
        >Delete your account permanantly</v-btn
      ></v-card-actions
    >
  </v-card>
</template>

<script>
export default {
  layout: 'profileEdit',
}
</script>

<style></style>
