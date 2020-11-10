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
          { end: 576, size: 1 },
          { start: 576, end: 768, size: 2 },
          { start: 768, end: 992, size: 3 },
          { size: 4 },
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
