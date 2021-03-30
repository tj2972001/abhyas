<template>
  <div class="app-row">
    <v-card color="basil" class="my-learnings" outlined>
      <v-card-title class="my-learnings__title">
        <HeadingTealH2>My Learnings</HeadingTealH2>
      </v-card-title>
      <v-divider></v-divider>
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="teal lighten-2"
      >
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
  </div>
</template>
<script>
export default {
  layout: 'courseDescription',
  data() {
    return {
      tab: null,
      items: ['All Courses', 'Wishlist'],
    }
  },
}
</script>
<style scoped lang="scss">
.my-learnings {
  margin-top: 2rem;
  margin-bottom: 2rem;
  &__title {
    justify-content: center;
  }
}
</style>
