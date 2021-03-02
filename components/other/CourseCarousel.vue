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
