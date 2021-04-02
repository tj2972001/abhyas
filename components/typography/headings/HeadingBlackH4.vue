<template>
  <h4 class="heading__black-h4"><slot></slot></h4>
</template>
<style scoped lang="scss">
@import '/assets/scss/abstracts/variables';
.heading__black-h4 {
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: $color-black-pure;
  font-size: 1.175rem;

  //text-h6 text-md-h5 font-weight-medium
}
</style>
