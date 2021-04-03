<template>
  <div class="search-bar-main">
    <input
      class="search-bar-main__input rounded-pill"
      type="text"
      placeholder="Search for anything"
    />
    <v-btn icon class="search-bar-main__icon"
      ><fa-icon name="search"></fa-icon
    ></v-btn>
  </div>
</template>
<style lang="scss" scoped>
.search-bar-main {
  &__input {
    width: 30rem;
    padding: 0.8rem;
    border-radius: 10%;
    border: 1px solid black;
    &:focus {
      outline: none;
    }
  }
  &__icon {
    transform: translateX(-3.5rem);
  }
}
</style>
