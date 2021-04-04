<template>
  <div class="course-manage-pricing">
    <div class="course-manage-pricing__option">
      <label for="Select"> Select Price for your course </label>
      <v-select
        v-model="selectedPrice"
        :items="priceOptions"
        append-outer-icon="mdi-currency-inr"
        menu-props="auto"
        label="Select"
      ></v-select>
    </div>
    <div
      class="course-manage-pricing__price"
      :class="selectedPrice == 'Paid' ? '' : 'd-none'"
    >
      <label for="course-price"> Enter Price </label>
      <v-text-field
        type="number"
        label="course-price"
        placeholder="Enter price"
        :rules="rulesCoursePricing"
      ></v-text-field>
    </div>
    <button class="btn btn-small btn-teal rounded-pill mt-5">Save price</button>
  </div>
</template>

<script>
export default {
  layout: 'manageCourse',
  data() {
    return {
      selectedPrice: 'Free',
      priceOptions: ['Free', 'Paid'],
      rulesCoursePricing: [(v) => parseInt(v) > 10 || 'Min 10'],
    }
  },
}
</script>
<style lang="scss" scoped>
@import '/assets/scss/abstracts/variables';
.course-manage-pricing {
  padding: 3rem;
  color: $color-black-pure;
  font-family: 'Roboto', sans-serif;
  & > * {
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    & label {
      font-size: 1.125rem;
      font-weight: 500;
      margin-right: 3rem;
    }
  }
  & button {
    margin: 0 auto;
  }
}
</style>
