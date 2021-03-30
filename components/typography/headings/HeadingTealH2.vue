<template>
  <h2 class="heading__teal-h2">
    <slot></slot>
  </h2>
</template>
<style scoped lang="scss">
@import '/assets/scss/abstracts/variables';
.heading__teal-h2 {
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: $color-teal-dark;
  font-size: 1.875rem;
}
</style>
