<template>
  <vue-horizontal-list :items="items" :options="options">
    <template v-slot:default="{ item }">
      <div class="item">
        <CourseCardLarge :item="item" />
      </div>
    </template>
  </vue-horizontal-list>
</template>
<script>
import VueHorizontalList from 'vue-horizontal-list'
export default {
  components: {
    VueHorizontalList,
  },
  data() {
    return {
      options: {
        responsive: [
          { end: 576, size: 2 },
          { start: 576, end: 668, size: 3 },
          { start: 668, end: 992, size: 4 },
          { size: 5 },
        ],
      },
      items: [
        { title: 'Item 0', content: 'Content item with description' },
        { title: 'Item 0', content: 'Content item with description' },
        { title: 'Item 0', content: 'Content item with description' },
        { title: 'Item 0', content: 'Content item with description' },
        { title: 'Item 0', content: 'Content item with description' },
        { title: 'Item 0', content: 'Content item with description' },
        { title: 'Item 0', content: 'Content item with description' },
        { title: 'Item 0', content: 'Content item with description' },
      ],
    }
  },
}
</script>
