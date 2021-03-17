<template>
  <v-card color="basil" class="mt-5 mt-md-10" outlined>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-1 teal--text">My Learnings</h1>
    </v-card-title>
    <v-divider></v-divider>
    <v-tabs v-model="tab" background-color="transparent" color="teal lighten-2">
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-divider class="mb-5"></v-divider>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item" class="px-5">
        <v-card color="basil" flat>
          <MyLearningsList />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      items: ['All Courses', 'Wishlist'],
    }
  },
}
</script>
