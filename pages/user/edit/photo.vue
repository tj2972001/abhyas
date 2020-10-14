<template>
  <v-card width="800" max-width="90%" class="mx-auto mt-10" outlined>
    <v-card-title class="justify-center">Photo </v-card-title>
    <v-divider></v-divider>
    <v-card-subtitle
      >Add a nice photo of yourself for your profile.</v-card-subtitle
    >
    <v-divider></v-divider>
    <div class="ma-5 d-flex flex-column flex-md-row align-md-center">
      <img
        class="rounded-circle mt-2 mr-md-5"
        :height="$vuetify.breakpoint.md ? 250 : 150"
        :width="$vuetify.breakpoint.md ? 250 : 150"
        src="/tejasfb.jpg"
      />
      <v-file-input label="Upload profile pic" class="mt-2"> </v-file-input>
    </div>
    <v-card-actions
      ><v-btn rounded class="white--text pa-5" color="teal lighten-1"
        >Update profile pic</v-btn
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
