<template>
  <div>
    <v-card flat width="600" class="mx-auto mt-10">
      <v-card-title class="text-h6 justify-center"
        >Login to your Abhyas account</v-card-title
      >
      <v-divider></v-divider>
      <div class="my-3">
        <v-btn
          outlined
          color="amber"
          class="mx-auto mt-1 d-block"
          style="width: 80%"
          ><v-icon class="ma-2">mdi-google</v-icon
          ><span> Login with google</span>
        </v-btn>
        <v-btn
          outlined
          color="blue"
          class="mx-auto mt-1 d-block"
          style="width: 80%"
          ><v-icon class="ma-2">mdi-microsoft</v-icon
          ><span> Login with Microsoft</span>
        </v-btn>
        <v-btn
          outlined
          color="grey"
          class="mx-auto mt-1 d-block"
          style="width: 80%"
          ><v-icon class="ma-2">mdi-github</v-icon
          ><span> Login with github</span>
        </v-btn>
      </div>
      <v-divider></v-divider>
      <div class="mt-5">
        <v-text-field
          label="Email"
          type="email"
          outlined
          dense
          append-icon="mdi-email"
        ></v-text-field>
        <v-text-field
          label="Password"
          type="password"
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
    </v-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
