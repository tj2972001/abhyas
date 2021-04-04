<template>
  <footer class="app-footer">
    <ul id="app-footer-container" class="app-footer__list-container noBullets">
      <li class="app-footer__list-container--item">
        <nuxt-link to="/">Abhyas for business</nuxt-link>
      </li>
      <li class="app-footer__list-container--item">
        <nuxt-link to="/">Get the app</nuxt-link>
      </li>
      <li class="app-footer__list-container--item">
        <nuxt-link to="/">About us</nuxt-link>
      </li>
      <li class="app-footer__list-container--item">
        <nuxt-link to="/">Contact us</nuxt-link>
      </li>
      <li class="app-footer__list-container--item">
        <nuxt-link to="/">Careers</nuxt-link>
      </li>
      <li class="app-footer__list-container--item">
        <nuxt-link to="/">Blog</nuxt-link>
      </li>
      <li class="app-footer__list-container--item">
        <nuxt-link to="/">Help and support</nuxt-link>
      </li>
      <li class="app-footer__list-container--item">
        <nuxt-link to="/">Affiliate</nuxt-link>
      </li>
      <li class="app-footer__list-container--item">
        <nuxt-link to="/">Get the app</nuxt-link>
      </li>
      <li class="app-footer__list-container--item">
        <nuxt-link to="/">About us</nuxt-link>
      </li>
      <li class="app-footer__list-container--item">
        <nuxt-link to="/">Contact us</nuxt-link>
      </li>
      <li class="app-footer__list-container--item">
        <nuxt-link to="/">Careers</nuxt-link>
      </li>
      <li class="app-footer__list-container--item">
        <nuxt-link to="/">Blog</nuxt-link>
      </li>
      <li class="app-footer__list-container--item">
        <nuxt-link to="/">Help and support</nuxt-link>
      </li>
    </ul>
    <div class="app-footer__rights">
      {{ new Date().getFullYear() }} - Abhyass | All rights reserved
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '/assets/scss/abstracts/variables';
.app-footer {
  padding: 2rem;
  background-color: $color-grey-light;
  a {
    color: $color-black-pure;
    text-decoration: none;
    transition: all 0.2s;
    &:hover {
      text-decoration: underline;
    }
  }
  &__list-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    &--item {
      display: flex;
      width: 33.3333%;
      margin-bottom: 0.1rem;
      justify-content: flex-start;
    }
  }
  &__rights {
    margin-top: 1rem;
    font-weight: 700;
  }
}
#app-footer-container {
  padding: 0;
}
</style>
