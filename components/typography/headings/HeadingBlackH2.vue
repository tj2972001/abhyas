<template>
  <h2 class="heading__black-h2">
    <slot></slot>
  </h2>
</template>
<style scoped lang="scss">
@import '/assets/scss/abstracts/variables';
.heading__black-h2 {
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: $color-black-pure;
  font-size: 1.875rem;
  //text--primary text-h4 font-weight-bold no-word-break
}
</style>
