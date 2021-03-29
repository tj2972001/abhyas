<template>
  <div>
    <section>
      <HeadingTealH2 class="mt-5"
        >Search among 112,342 courses on Abhyas</HeadingTealH2
      >
      <div class="mt-5 d-flex justify-start">
        <v-autocomplete
          v-model="value"
          :items="items"
          solo
          label="Select Category"
          style="width: 150px; max-width: 250px"
        ></v-autocomplete>
        <v-autocomplete
          v-model="value"
          :items="items"
          solo
          label="Select Topic"
          style="width: 150px; max-width: 250px"
        ></v-autocomplete>
      </div>
      <v-btn text outlined>Show filters</v-btn>
      <div class="mt-5">
        <v-btn color="blue darken-2" class="white--text"> Search</v-btn>
      </div>
    </section>
    <section>
      <HeadingBlackH4 class="my-3">1067 courses found</HeadingBlackH4>
      <CourseCardMedium />
      <CourseCardMedium />
      <CourseCardMedium />
      <CourseCardMedium />
      <CourseCardMedium />
      <CourseCardMedium />
      <CourseCardMedium />
      <CourseCardMedium />
      <v-pagination v-model="page" :length="4" class="my-5"></v-pagination>
    </section>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: ['foo', 'bar', 'fizz', 'buzz'],
    value: null,
  }),
  head() {
    return {
      title: 'Abhyass Explorer',
    }
  },
}
</script>
