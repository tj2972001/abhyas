<template>
  <section class="course-manage-landing-page">
    <div class="course-manage-landing-page__title">
      <label for="title">Enter course introduction </label>
      <v-textarea
        filled
        auto-grow
        :rules="rulesIntro"
        label="title"
        value="was soon chopped nearly through."
      ></v-textarea>
    </div>
    <hr />
    <div class="course-manage-landing-page__subtitle">
      <label for="subtitle">Course Requirements </label>
      <v-textarea
        filled
        auto-grow
        :rules="rulesIntro"
        label="subtitle"
        value="his axe that the tree was soon chopped nearly through."
      ></v-textarea>
    </div>
    <hr />
    <div class="course-manage-landing-page__requirements">
      <div class="course-manage-landing-page__requirements--add">
        <label for="requirements">Enter requirement </label>
        <v-textarea
          v-model="requirement"
          filled
          auto-grow
          :rules="rulesIntro"
          label="requirements"
          value="Write requirement here"
        ></v-textarea>

        <v-btn
          text
          class="course-manage-landing-page__requirements--add-btn ml-2"
          rounded
          @click="addRequirements(requirement)"
          >Add<v-icon class="ml-1">mdi-note-plus-outline</v-icon></v-btn
        >
      </div>
      <div class="course-manage-landing-page__requirements--show">
        <h4>All requirements</h4>
        <ul>
          <li v-for="(req, idx) in requirements" :key="idx">
            {{ idx }}:{{ req }}
          </li>
        </ul>
      </div>
    </div>
    <hr />
    <div class="course-manage-landing-page__info">
      <h3>Basic Info</h3>
      <div class="course-manage-landing-page__info--options">
        <div>
          <label for="language"></label>
          <v-select :items="items" label="language"></v-select>
        </div>
        <div>
          <label for="level"></label>
          <v-select :items="items" label="level"></v-select>
        </div>
        <div>
          <label for="category"></label>
          <v-select :items="items" label="category"></v-select>
        </div>
        <div>
          <label for="sub-category"></label>
          <v-select :items="items" label="sub-category"></v-select>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  layout: 'manageCourse',
  data() {
    return {
      rulesIntro: [(v) => v.length <= 25 || 'Max 25 characters'],
      requirement: '',
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      requirements: [
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum inventore explicabo sequi repellat deserunt consectetur animi suscipit et, numquam excepturi ipsa temporibus dolore possimus assumenda voluptatem fugit ipsum, mollitia perspiciatis?',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum inventore explicabo sequi repellat deserunt consectetur animi suscipit et, numquam excepturi ipsa temporibus dolore possimus assumenda voluptatem fugit ipsum, mollitia perspiciatis?',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum inventore explicabo sequi repellat deserunt consectetur animi suscipit et, numquam excepturi ipsa temporibus dolore possimus assumenda voluptatem fugit ipsum, mollitia perspiciatis?',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum inventore explicabo sequi repellat deserunt consectetur animi suscipit et, numquam excepturi ipsa temporibus dolore possimus assumenda voluptatem fugit ipsum, mollitia perspiciatis?',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum inventore explicabo sequi repellat deserunt consectetur animi suscipit et, numquam excepturi ipsa temporibus dolore possimus assumenda voluptatem fugit ipsum, mollitia perspiciatis?',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum inventore explicabo sequi repellat deserunt consectetur animi suscipit et, numquam excepturi ipsa temporibus dolore possimus assumenda voluptatem fugit ipsum, mollitia perspiciatis?',
      ],
    }
  },
  methods: {
    addRequirements(req) {
      this.requirements.push(req)
      this.requirement = ''
    },
  },
}
</script>
<style lang="scss" scoped>
@import '/assets/scss/abstracts/variables';
.course-manage-landing-page {
  padding: 3rem;
  color: $color-black-pure;
  font-family: 'Roboto', sans-serif;
  width: 70%;
  & > * {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    width: 95%;
    margin-top: 1rem;

    & label {
      font-size: 1.125rem;
      font-weight: 500;
      margin-right: 3rem;
    }
  }
  & button {
    margin: 0 auto;
  }
  &__requirements {
    flex-direction: column;
    &--add {
      display: flex;
      align-items: center;
      width: 95%;
    }
    &--show {
      width: 80%;
      & h4 {
        margin: 1rem 0;
      }
      & ul {
        list-style-type: upper-alpha;
      }
    }
  }
  &__info {
    &--options {
      & > * {
        margin-left: 3rem;
      }
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
