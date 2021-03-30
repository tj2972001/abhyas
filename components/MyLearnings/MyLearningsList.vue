<template>
  <section class="my-learnings-list">
    <div class="my-learnings-list__list">
      <MyLearningsCard v-for="i in 10" :key="i" />
    </div>
    <div class="my-learnings-list__pagination">
      <v-pagination v-model="page" :length="4"></v-pagination>
    </div>
  </section>
</template>
<style scoped lang="scss">
.my-learnings-list {
  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  &__pagination {
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
