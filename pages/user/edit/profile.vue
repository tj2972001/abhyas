<template>
  <v-card width="800" max-width="90%" class="mx-auto mt-10" outlined>
    <v-card-title class="justify-center">Public profile</v-card-title>
    <v-card-text>
      <v-form
        ><v-text-field
          :dense="$vuetify.breakpoint.xsOnly"
          label="Name"
          outlined
        ></v-text-field
        ><v-text-field
          :dense="$vuetify.breakpoint.xsOnly"
          label="Last Name"
          outlined
        ></v-text-field
        ><v-text-field
          :dense="$vuetify.breakpoint.xsOnly"
          label="Email"
          outlined
        ></v-text-field
        ><v-text-field
          :dense="$vuetify.breakpoint.xsOnly"
          append-icon="mdi-facebook"
          label="Facebook username"
          outlined
        ></v-text-field
        ><v-text-field
          :dense="$vuetify.breakpoint.xsOnly"
          append-icon="mdi-twitter"
          label="Twitter username"
          outlined
        ></v-text-field
        ><v-text-field
          :dense="$vuetify.breakpoint.xsOnly"
          append-icon="mdi-linkedin"
          label="Linkedin username"
          outlined
        ></v-text-field
        ><v-text-field
          :dense="$vuetify.breakpoint.xsOnly"
          append-icon="mdi-web"
          label="Personal site"
          outlined
        ></v-text-field>
        <v-card-actions
          ><v-btn rounded class="white--text pa-5" color="teal lighten-1"
            >Submit</v-btn
          ></v-card-actions
        >
      </v-form></v-card-text
    >
  </v-card>
</template>

<script>
export default {
  layout: 'profileEdit',
}
</script>

<style></style>
