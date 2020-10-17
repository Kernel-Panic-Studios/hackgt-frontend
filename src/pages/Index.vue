<template>
  <q-page class="flex flex-center">
    <h2>Dashboard page where all user actions can be viewed</h2>
    <p>{{ type }}</p>
    <div class="q-pa-md">
      <div class="row justify-center q-gutter-sm" v-if="type == 'family'">
        <q-intersection
          v-for="option in familyOptionsList"
          :key="option.title"
          class="example-item"
        >
          <MainOption v-bind="option"></MainOption>
        </q-intersection>
      </div>
      <div class="row justify-center q-gutter-sm" v-if="type == 'organization'">
        <q-intersection
          v-for="option in organizationOptionsList"
          :key="option.title"
          class="example-item"
        >
          <MainOption v-bind="option"></MainOption>
        </q-intersection>
      </div>
      <div class="row justify-center q-gutter-sm" v-if="type == 'child'">
        <q-intersection
          v-for="option in userOptionsList"
          :key="option.title"
          class="example-item"
        >
          <MainOption v-bind="option"></MainOption>
        </q-intersection>
      </div>
    </div>
  </q-page>
</template>

<script>
import MainOption from "components/MainOption.vue";

const defaultOptions = [
  {
    title: "Feed",
    caption: "/.",
    icon: "house",
    link: "/feed"
  },
  {
    title: "Chat",
    caption: "/chat",
    icon: "house",
    link: "/chat"
  },
  {
    title: "Events",
    caption: "/.",
    icon: "house",
    link: "/"
  }
];

let organizationOptions = defaultOptions;
organizationOptions.push({
  title: "Donate",
  caption: "/.",
  icon: "house",
  link: "/donate"
});

let familyOptions = defaultOptions;
familyOptions.push({
  title: "Donate",
  caption: "/.",
  icon: "house",
  link: "/donate"
});

const userOptions = [
  {
    title: "Feed",
    caption: "/.",
    icon: "house",
    link: "/feed"
  },
  {
    title: "Chat",
    caption: "/chat",
    icon: "house",
    link: "/chat"
  },
  {
    title: "Events",
    caption: "/.",
    icon: "house",
    link: "/events"
  }
];

export default {
  name: "Index",
  components: {
    MainOption
  },
  props: {},
  data() {
    return {
      familyOptionsList: familyOptions,
      organizationOptionsList: organizationOptions,
      userOptionsList: userOptions
    };
  },
  computed: {
    type: {
      get() {
        return this.$q.localStorage.getItem("type");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.example-item {
  height: 290px;
  width: 290px;
}
</style>
